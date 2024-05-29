import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { IAppointmentRes } from '../../../../CORE/interfaces/IAppointment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserAppointmentService } from '../../../../CORE/services/user-appointment.service';

@Component({
  selector: 'app-cita-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cita-details.component.html',

})
export class CitaDetailsComponent {
  appointmentId!: number;
  appointmentDetails!: IAppointmentRes;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: UserAppointmentService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.appointmentId = +params['id'];
      this.loadAppointmentDetails();
    });
  }

  loadAppointmentDetails(): void {
    this.appointmentService.getAppointmentDetails(this.appointmentId).subscribe(
      (details: IAppointmentRes) => {
        this.appointmentDetails = details;
        this.cdr.detectChanges()
      },
      error => {
        console.error('Error al cargar los detalles de la cita:', error);
      }
    );
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
}
