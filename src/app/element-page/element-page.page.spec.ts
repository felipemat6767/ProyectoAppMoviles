import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementPagePage } from './element-page.page';

describe('ElementPagePage', () => {
  let component: ElementPagePage;
  let fixture: ComponentFixture<ElementPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
