import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  private languageService = inject(LanguageService);

  get privacyTexts() {
    return this.languageService.currentTexts.privacyPolicy;
  }
}
