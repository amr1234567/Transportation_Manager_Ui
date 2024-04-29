import { TestBed } from '@angular/core/testing';

import { PremetionService } from './premetion.service';

describe('PremetionService', () => {
  let service: PremetionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremetionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
