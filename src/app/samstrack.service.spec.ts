import { TestBed } from '@angular/core/testing';

import { SamstrackService } from './samstrack.service';

describe('SamstrackService', () => {
  let service: SamstrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamstrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
