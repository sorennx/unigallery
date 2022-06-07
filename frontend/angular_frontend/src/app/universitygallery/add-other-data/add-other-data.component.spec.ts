import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherDataComponent } from './add-other-data.component';

describe('AddOtherDataComponent', () => {
  let component: AddOtherDataComponent;
  let fixture: ComponentFixture<AddOtherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtherDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
