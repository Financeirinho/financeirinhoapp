import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMentoringComponent } from './student-mentoring.component';

describe('StudentPerformanceComponent', () => {
  let component: StudentMentoringComponent;
  let fixture: ComponentFixture<StudentMentoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMentoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
