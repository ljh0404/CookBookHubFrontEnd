import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notFoundGuardGuard } from './not-found-guard.guard';

describe('notFoundGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notFoundGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
