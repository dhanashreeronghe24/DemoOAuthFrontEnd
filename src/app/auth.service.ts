import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const EMP_REGISTER_LOGIN_AUTH_URL = "http://localhost:8080/employee/auth";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginEmployee(request): Observable<any> {
    return this.http.post(EMP_REGISTER_LOGIN_AUTH_URL + '/login', {
      username: request.username,
      password: request.password
    }, httpOptions);
  }

  registerEmployee(user): Observable<any> {
    return this.http.post(EMP_REGISTER_LOGIN_AUTH_URL + '/register', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
