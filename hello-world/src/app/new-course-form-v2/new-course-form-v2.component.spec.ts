import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormV2Component } from './new-course-form-v2.component';

describe('NewCourseFormV2Component', () => {
  let component: NewCourseFormV2Component;
  let fixture: ComponentFixture<NewCourseFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
