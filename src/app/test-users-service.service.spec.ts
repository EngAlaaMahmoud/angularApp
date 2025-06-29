import { TestBed } from '@angular/core/testing';

import { TestUsersServiceService } from './test-users-service.service';

describe('TestUsersServiceService', () => {
  let service: TestUsersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUsersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
