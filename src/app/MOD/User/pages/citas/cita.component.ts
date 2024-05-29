import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { UserAppointmentService } from '../../../../CORE/services/user-appointment.service';
import { IAppointmentRes } from '../../../../CORE/interfaces/IAppointment';

@Component({
  selector: 'Citas',
  standalone: true,
  imports: [
    CommonModule,RouterLink,
  ],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitaComponent {
  appointments$!: Observable<IAppointmentRes[]>;

  constructor(private appointmentService: UserAppointmentService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.loadAppointments(parseInt(userId));
    }
  }

  loadAppointments(userId: number): void {
    this.appointments$ = this.appointmentService.getAppointmentsByUser(userId);
    this.appointments$.subscribe(response => {
      console.log('Respuesta de las citas:', response);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

}
