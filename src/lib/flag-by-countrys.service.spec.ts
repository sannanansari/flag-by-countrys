import { TestBed } from '@angular/core/testing';

import { FlagByCountrysService } from './flag-by-countrys.service';

describe('FlagByCountrysService', () => {
  let service: FlagByCountrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagByCountrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
