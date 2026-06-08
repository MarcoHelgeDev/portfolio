import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private languageService = inject(LanguageService);

  get heroTexts() {
    return this.languageService.currentTexts.hero;
  }
}
