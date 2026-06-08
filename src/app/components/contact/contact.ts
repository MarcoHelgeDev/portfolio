import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language';

type ContactControlName = 'name' | 'email' | 'message' | 'privacy';

type FormspreeResponse = {
  ok?: boolean;
  errors?: {
    message?: string;
  }[];
};

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  private languageService = inject(LanguageService);

  private formEndpoint = 'https://formspree.io/f/xgobvrll';

  wasSubmitted = false;
  isSending = false;
  submitMessage = '';
  submitWasSuccessful = false;

  contactForm = this.formBuilder.nonNullable.group({
    name: this.formBuilder.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(2)],
      updateOn: 'blur',
    }),
    email: this.formBuilder.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    message: this.formBuilder.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(10)],
      updateOn: 'blur',
    }),
    privacy: this.formBuilder.nonNullable.control(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  get contactTexts() {
    return this.languageService.currentTexts.contact;
  }

  isInvalid(controlName: ContactControlName) {
    const control = this.contactForm.controls[controlName];

    return control.invalid && (control.touched || this.wasSubmitted);
  }

  getNameError() {
    if (!this.isInvalid('name')) {
      return '';
    }

    return this.contactTexts.errors.name;
  }

  getEmailError() {
    const emailControl = this.contactForm.controls.email;

    if (!this.isInvalid('email')) {
      return '';
    }

    if (emailControl.hasError('email')) {
      return this.contactTexts.errors.invalidEmail;
    }

    return this.contactTexts.errors.email;
  }

  getMessageError() {
    if (!this.isInvalid('message')) {
      return '';
    }

    return this.contactTexts.errors.message;
  }

  sendMessage() {
    this.wasSubmitted = true;
    this.submitMessage = '';
    this.submitWasSuccessful = false;

    if (this.contactForm.invalid || this.isSending) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sendFormToFormspree();
  }

  private sendFormToFormspree() {
    this.isSending = true;

    const formData = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value,
      privacyAccepted: this.contactForm.controls.privacy.value,
    };

    this.http
      .post<FormspreeResponse>(this.formEndpoint, formData, {
        headers: {
          Accept: 'application/json',
        },
      })
      .subscribe({
        next: (response) => this.handleSuccess(response),
        error: (error) => this.handleError(error),
      });
  }

  private handleSuccess(response: FormspreeResponse) {
    this.isSending = false;

    if (response.ok === false) {
      this.submitWasSuccessful = false;
      this.submitMessage = this.getFormspreeErrorMessage(response);
      return;
    }

    this.submitWasSuccessful = true;
    this.submitMessage = this.contactTexts.feedback.success;

    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });

    this.wasSubmitted = false;
  }

  private handleError(error: { error?: FormspreeResponse }) {
    this.isSending = false;
    this.submitWasSuccessful = false;
    this.submitMessage = this.getFormspreeErrorMessage(error.error);
  }

  private getFormspreeErrorMessage(response?: FormspreeResponse) {
    const formspreeMessage = response?.errors?.[0]?.message;

    if (formspreeMessage) {
      return formspreeMessage;
    }

    return this.contactTexts.feedback.error;
  }
}
