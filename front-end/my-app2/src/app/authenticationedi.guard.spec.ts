import { TestBed } from '@angular/core/testing';

import { AuthenticationediGuard } from './authenticationedi.guard';

describe('AuthenticationediGuard', () => {
  let guard: AuthenticationediGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationediGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
