import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesPlanningComponent } from './guides-planning.component';

describe('GuidesPlanningComponent', () => {
  let component: GuidesPlanningComponent;
  let fixture: ComponentFixture<GuidesPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
