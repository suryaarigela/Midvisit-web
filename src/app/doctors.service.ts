import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Speciality } from './model/speciality';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from './model/doctor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private getAllDoctorsSub = new BehaviorSubject<Doctor[]>(null);
  getAllDoc$ = this.getAllDoctorsSub.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  getAllDoctor(speciality: string) {

    this.http.post<Doctor[]>('http://localhost:8080/getDoctors', speciality, httpOptions).subscribe(data => {
      this.getAllDoctorsSub.next(data);
    });

  }
}
