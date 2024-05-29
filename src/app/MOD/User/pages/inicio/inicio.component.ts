import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { WHeaderComponent } from '../../../../SHARED/Ui/header/header.component';
import { WFooterComponent } from '../../../../SHARED/Ui/footer/footer.component';

@Component({
  selector: 'inicio',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet,WHeaderComponent,WFooterComponent,SidebarComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InicioComponent { }
