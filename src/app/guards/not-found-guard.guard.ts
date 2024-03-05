import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { PersistenceService } from '../services/persistence.service';

export const notFoundGuardGuard: CanActivateFn = (route, state) => {
  return route.queryParams['recipeId'] != undefined;
};
