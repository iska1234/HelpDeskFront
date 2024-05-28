import type { CanMatchFn } from '@angular/router';
import { RoleService } from '../services/role.service';
import { inject } from '@angular/core';

export const userGuard: CanMatchFn = (route, segments) => {
  const role = inject(RoleService);
  return role.getRole() === 'user' ?  true : false;
};
