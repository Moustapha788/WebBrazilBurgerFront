import { TestBed } from '@angular/core/testing';

import { DeliveringService } from './delivering.service';

describe('DeliveringService', () => {
  let service: DeliveringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
