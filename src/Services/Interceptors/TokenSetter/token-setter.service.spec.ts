import { TestBed } from '@angular/core/testing';

import { TokenSetterService } from './token-setter.service';

describe('TokenSetterService', () => {
  let service: TokenSetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenSetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
