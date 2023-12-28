import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor (private http: HttpClient){}

  getAppointmentList() {
    let url = "http://localhost:8080/api/appointment/all";
    return this.http.get(url, { withCredentials: true });
  }

  confirmAppointment(id: number) {
    let url = "http://localhost:8080/api/appointment/"+id+"/confirm";
    return this.http.get(url, { withCredentials: true });
  }

}
