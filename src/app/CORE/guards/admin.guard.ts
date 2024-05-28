import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { RoleService } from '../services/role.service';

export const adminGuard: CanMatchFn = (route, state) => {
  const role = inject(RoleService);

  return role.getRole() === 'admin' ? true:false;
};
