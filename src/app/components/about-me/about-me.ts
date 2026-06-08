import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  private languageService = inject(LanguageService);

  get aboutTexts() {
    return this.languageService.currentTexts.aboutMe;
  }
}
