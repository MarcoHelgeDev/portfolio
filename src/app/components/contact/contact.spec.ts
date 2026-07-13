import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the email error while typing', () => {
    const emailControl = component.contactForm.controls.email;

    emailControl.markAsTouched();
    emailControl.setValue('claus@example');

    expect(emailControl.invalid).toBe(true);
    expect(component.getEmailError()).not.toBe('');

    emailControl.setValue('claus@example.de');

    expect(emailControl.valid).toBe(true);
    expect(component.getEmailError()).toBe('');
  });
});
