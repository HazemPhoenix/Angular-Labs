import { CanActivateFn } from '@angular/router';
import { RegisterationServiceService } from '../services/registeration-service.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(RegisterationServiceService).isLoggedIn;
};
