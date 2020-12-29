import { TestBed } from '@angular/core/testing';

import { PapierService } from './papier.service';

describe('PapierService', () => {
  let service: PapierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
