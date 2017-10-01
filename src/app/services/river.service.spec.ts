import { TestBed, inject } from '@angular/core/testing';

import { RiverService } from './river.service';

describe('RiverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiverService]
    });
  });

  it('should be created', inject([RiverService], (service: RiverService) => {
    expect(service).toBeTruthy();
  }));
});
