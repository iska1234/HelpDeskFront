export interface IAppointmentRes {
  id: number;
  user_name:string;
  user_id: number;
  date: string;
  specialization: string;
  type?: string;
  observations?: string;
  created_at?: string;
  updated_at?: string;
}
