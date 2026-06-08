import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

type Reference = {
  text: string;
  author: string;
};

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  private languageService = inject(LanguageService);

  activeIndex = 1;

  get testimonialTexts() {
    return this.languageService.currentTexts.testimonials;
  }

  get references(): Reference[] {
    return this.testimonialTexts.references;
  }

  get visibleReferences(): Reference[] {
    return [
      this.references[this.getPreviousIndex()],
      this.references[this.activeIndex],
      this.references[this.getNextIndex()],
    ];
  }

  getPreviousIndex() {
    return (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  getNextIndex() {
    return (this.activeIndex + 1) % this.references.length;
  }

  showPreviousReference() {
    this.activeIndex = this.getPreviousIndex();
  }

  showNextReference() {
    this.activeIndex = this.getNextIndex();
  }

  setActiveReference(index: number) {
    this.activeIndex = index;
  }
}
