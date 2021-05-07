import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionPollQuestionsComponent } from './opinion-poll-questions.component';

describe('OpinionPollQuestionsComponent', () => {
  let component: OpinionPollQuestionsComponent;
  let fixture: ComponentFixture<OpinionPollQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionPollQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionPollQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
