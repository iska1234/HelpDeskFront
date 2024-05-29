import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppointmentRes } from '../interfaces/IAppointment';


@Injectable({
  providedIn: 'root'
})
export class UserAppointmentService {

  private baseUrl = 'https://helpdeskback.onrender.com/appointment';

  constructor(private http: HttpClient) { }


  insertAppointment(appointmentData: any): Observable<IAppointmentRes> {
    return this.http.post<IAppointmentRes>(`${this.baseUrl}/new`, appointmentData);
  }

  getAppointmentsByUser(userId: number): Observable<IAppointmentRes[]> {
    return this.http.get<any>(`${this.baseUrl}/all/${userId}`).pipe(
      map(response => response.data)
    );
  }

getAppointmentDetails(appointmentId: number): Observable<IAppointmentRes> {
  return this.http.get<any>(`${this.baseUrl}/details/${appointmentId}`).pipe(
    map(response => response.data)
  );
}
}
