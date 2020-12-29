import { TestBed } from '@angular/core/testing';

import { AuthenticationexpGuard } from './authenticationexp.guard';

describe('AuthenticationexpGuard', () => {
  let guard: AuthenticationexpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationexpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
