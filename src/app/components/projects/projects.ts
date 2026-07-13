import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

type Technology = {
  name: string;
  icon: string;
};

type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: Technology[];
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit, OnDestroy {
  private languageService = inject(LanguageService);
  private preloadedProjectImages: HTMLImageElement[] = [];

  hoveredProjectIndex: number | null = null;
  selectedProjectIndex: number | null = null;

  get projectTexts() {
    return this.languageService.currentTexts.projects;
  }

  get projects() {
    return this.projectTexts.items;
  }

  get hoveredProject(): Project | null {
    if (this.hoveredProjectIndex === null) {
      return null;
    }

    return this.projects[this.hoveredProjectIndex];
  }

  get selectedProject(): Project | null {
    if (this.selectedProjectIndex === null) {
      return null;
    }

    return this.projects[this.selectedProjectIndex];
  }

  ngOnInit() {
    this.preloadImages();
  }

  showPreview(projectIndex: number) {
    this.hoveredProjectIndex = projectIndex;
  }

  hidePreview() {
    this.hoveredProjectIndex = null;
  }

  openProject(projectIndex: number) {
    this.selectedProjectIndex = projectIndex;
    this.lockPageScroll();
  }

  closeProject() {
    this.selectedProjectIndex = null;
    this.unlockPageScroll();
  }

  showNextProject() {
    if (this.selectedProjectIndex === null) {
      return;
    }

    this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.projects.length;
  }

  ngOnDestroy() {
    this.preloadedProjectImages = [];
    this.unlockPageScroll();
  }

  private preloadImages() {
    if (typeof Image === 'undefined') {
      return;
    }

    for (const project of this.projects) {
      const image = new Image();
      image.decoding = 'async';
      image.src = project.image;

      if (typeof image.decode === 'function') {
        void image.decode().catch(() => undefined);
      }

      this.preloadedProjectImages.push(image);
    }
  }

  private lockPageScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  private unlockPageScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}
