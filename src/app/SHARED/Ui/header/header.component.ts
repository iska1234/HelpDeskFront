import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Route } from '@angular/router';
import { TokenService } from '../../../CORE/services/token.service';
@Component({
  selector: 'w-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',

})
export class WHeaderComponent {
  tks = inject(TokenService);
  router = inject(Router)
  closeSesion(){
    this.tks.rmToken();
    this.router.navigateByUrl('/login');
  }
}
