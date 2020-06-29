import { TestBed } from '@angular/core/testing';

import { AskForPeopleService } from './ask-for-people.service';

describe('AskForPeopleService', () => {
  let service: AskForPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskForPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
