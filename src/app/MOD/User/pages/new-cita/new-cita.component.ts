import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserAppointmentService } from '../../../../CORE/services/user-appointment.service';
import { IAppointmentRes } from '../../../../CORE/interfaces/IAppointment';

@Component({
  selector: 'app-new-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-cita.component.html',
  styleUrl: './new-cita.component.css'
})
export class NewCitaComponent {
  appointment: any = {};
  userId: number | null = null;

  constructor(private toastr: ToastrService, private appointmentService: UserAppointmentService) { }

  ngOnInit(): void {
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
    }
  }

  submitForm(citaForm: NgForm) {
    if (!this.userId) {
      this.toastr.error('No se pudo obtener el userId de la sesión', 'Error');
      return;
    }

    const rawDate = citaForm.value.date;
    const formattedDate = this.formatDate(rawDate);

    const citaFormValues = {
      userId: this.userId,
      date: formattedDate,
      specialization: citaForm.value.specialization,
      type: citaForm.value.type,
      observations: citaForm.value.observations
    };

    this.appointmentService.insertAppointment(citaFormValues).subscribe(
      (response: IAppointmentRes) => {
        this.toastr.success('Cita agendada correctamente.', 'Success');
        citaForm.resetForm();
      },
      error => {
        this.toastr.error('Error al registrar la cita', error);
      }
    );
  }

  private formatDate(rawDate: string): string {
    const parts = rawDate.split('-');
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  }
}
