import { Routes } from '@angular/router';
import InicioComponent from './pages/inicio/inicio.component';
import { CitaComponent } from './pages/citas/cita.component';
import { CitaDetailsComponent } from './pages/cita-details/cita-details.component';
import { NewCitaComponent } from './pages/new-cita/new-cita.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    title: 'Mis Citas',
    component: InicioComponent,
    children: [
      { path: '', component: CitaComponent },
      { path: 'citas/register', component: NewCitaComponent  },
      { path: 'cita/:id', component:  CitaDetailsComponent },
    ],
  },
];
