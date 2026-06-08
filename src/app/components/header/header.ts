import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, LanguageService } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  languageService = inject(LanguageService);

  isMenuOpen = false;

  get headerTexts() {
    return this.languageService.currentTexts.header;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLanguage(language: Language) {
    this.languageService.switchLanguage(language);
  }

  switchMobileLanguage(language: Language) {
    this.languageService.switchLanguage(language);
    this.closeMenu();
  }
}
