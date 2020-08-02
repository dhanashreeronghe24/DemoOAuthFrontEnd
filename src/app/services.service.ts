import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const employeeRegisterLoginBaseUrl = "http://localhost:8080/employee/auth";
const fetchEmployeeBaseUrl = 'http://localhost:8080/employees';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  constructor(private http: HttpClient,private token:TokenStorageService) { }
   
  // registerEmployee(request:any){
  //   return this.http.post(`${employeeRegisterLoginBaseUrl}/register`,request);
  // }

  // loginEmployee(request:any){
  //   return this.http.post(`${employeeRegisterLoginBaseUrl}/login`,request);
  // }

  getEmployeeList(): Observable<any>{
       return this.http.get(fetchEmployeeBaseUrl+"/getAll" );
  }

  testHomeScreen(): Observable<any>{
    return this.http.get(fetchEmployeeBaseUrl+"/test", { responseType: 'text' })
  }

}
