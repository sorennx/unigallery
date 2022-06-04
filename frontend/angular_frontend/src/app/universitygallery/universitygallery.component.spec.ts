import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitygalleryComponent } from './universitygallery.component';

describe('UniversitygalleryComponent', () => {
  let component: UniversitygalleryComponent;
  let fixture: ComponentFixture<UniversitygalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitygalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
