import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, Header, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  private languageService = inject(LanguageService);

  get legalTexts() {
    return this.languageService.currentTexts.legalNotice;
  }
}
