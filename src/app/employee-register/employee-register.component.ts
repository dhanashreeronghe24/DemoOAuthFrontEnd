import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  roles = [
    {id: 1, name: "emp"},
    {id: 2, name: "manager"}
  ];
 selectedValue = null;

  employee = {
    username: "",
    email: "",
    password: "",
    empRole: []
  }
  submitted = false;
  errored = false;
  errorMessage:string = '';
  

  registerEmployee() {
    console.log(this.selectedValue)
    const request = {
      username: this.employee.username,
      email: this.employee.email,
      password: this.employee.password,
      empRole: [""+this.selectedValue+""]
    }
    console.log("request"+JSON.stringify(request))
    this.authService.registerEmployee(request)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.errorMessage = '';
        },
        error => {
          console.log(error);
          this.errored = true;
          this.errorMessage = JSON.stringify(error);
          
          //this.error(error)
        });
  }

  newEmplpoyee() {
    this.submitted = false;
    this.employee = {
      username: "",
      email: "",
      password: "",
      empRole: [""]
    };
  }

}


