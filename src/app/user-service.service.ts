import { Injectable } from '@angular/core';
import { User } from './model/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private getValidateUserSub = new BehaviorSubject<User[]>(null);
  getValidateUser$ = this.getValidateUserSub.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  getValidateUser(req: any) {

    this.http.post<User[]>('http://localhost:8080/validateUser', req, httpOptions).subscribe(data => {
      this.getValidateUserSub.next(data);
    });

  }
}
