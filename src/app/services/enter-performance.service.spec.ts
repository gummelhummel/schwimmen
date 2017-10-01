import { TestBed, inject } from '@angular/core/testing';

import { EnterPerformanceService } from './enter-performance.service';

describe('EnterPerformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterPerformanceService]
    });
  });

  it('should be created', inject([EnterPerformanceService], (service: EnterPerformanceService) => {
    expect(service).toBeTruthy();
  }));
});
