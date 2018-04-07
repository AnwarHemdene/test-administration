import { TestBed, inject } from '@angular/core/testing';

import { SujetService } from './sujet.service';

describe('SujetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SujetService]
    });
  });

  it('should be created', inject([SujetService], (service: SujetService) => {
    expect(service).toBeTruthy();
  }));
});
