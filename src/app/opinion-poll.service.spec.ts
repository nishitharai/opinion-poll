import { TestBed } from '@angular/core/testing';

import { OpinionPollService } from './opinion-poll.service';

describe('OpinionPollService', () => {
  let service: OpinionPollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionPollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
