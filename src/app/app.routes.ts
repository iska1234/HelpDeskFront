import { Routes } from '@angular/router';
import { authGuard } from './CORE/guards/auth.guard';
import { userGuard } from './CORE/guards/user.guard';
import { adminGuard } from './CORE/guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./MOD/Auth/login/login.component'),
    canMatch:[authGuard]
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./MOD/Auth/register/register.component'),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./MOD/Admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  //   canMatch:[adminGuard]
  // },
  {
    path: '',
    loadChildren: () =>
      import('./MOD/User/user.routes').then((r) => r.USER_ROUTES),
      canMatch:[userGuard]
  },
];
