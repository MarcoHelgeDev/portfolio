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
  isAnimating = false;
  slideDirection: 'previous' | 'next' | null = null;

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
    this.startSlide('previous');
  }

  showNextReference() {
    this.startSlide('next');
  }

  setActiveReference(index: number) {
    if (index === this.activeIndex || this.isAnimating) {
      return;
    }

    const direction = index === this.getNextIndex() ? 'next' : 'previous';
    this.startSlide(direction);
  }

  isCardActive(index: number) {
    if (this.slideDirection === 'next') {
      return index === 2;
    }

    if (this.slideDirection === 'previous') {
      return index === 0;
    }

    return index === 1;
  }

  finishSlide(event: TransitionEvent) {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== 'transform' ||
      !this.slideDirection
    ) {
      return;
    }

    this.activeIndex =
      this.slideDirection === 'next' ? this.getNextIndex() : this.getPreviousIndex();
    this.isAnimating = false;
    this.slideDirection = null;
  }

  private startSlide(direction: 'previous' | 'next') {
    if (this.isAnimating) {
      return;
    }

    this.slideDirection = direction;
    this.isAnimating = true;
  }
}
