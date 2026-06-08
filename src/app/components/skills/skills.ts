import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private languageService = inject(LanguageService);

  get skillsTexts() {
    return this.languageService.currentTexts.skills;
  }
}
