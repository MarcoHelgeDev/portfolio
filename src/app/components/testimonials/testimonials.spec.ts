import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonials } from './testimonials';

describe('Testimonials', () => {
  let component: Testimonials;
  let fixture: ComponentFixture<Testimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonials],
    }).compileComponents();

    fixture = TestBed.createComponent(Testimonials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move to the next reference after the slide transition', () => {
    const previousIndex = component.activeIndex;
    const track = document.createElement('div');

    component.showNextReference();

    expect(component.isAnimating).toBe(true);
    expect(component.slideDirection).toBe('next');

    component.finishSlide({
      target: track,
      currentTarget: track,
      propertyName: 'transform',
    } as unknown as TransitionEvent);

    expect(component.activeIndex).toBe((previousIndex + 1) % component.references.length);
    expect(component.isAnimating).toBe(false);
  });
});
