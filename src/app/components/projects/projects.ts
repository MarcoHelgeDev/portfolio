import { Component, OnDestroy, inject } from '@angular/core';
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
export class Projects implements OnDestroy {
  private languageService = inject(LanguageService);

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
    this.unlockPageScroll();
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
