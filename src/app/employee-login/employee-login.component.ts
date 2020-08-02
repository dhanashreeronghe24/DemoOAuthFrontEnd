import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  employee = {
    username: "",
    password: ""
  }
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginEmployee() {
    const request = {
      username: this.employee.username,
      password: this.employee.password
    }
    this.authService.loginEmployee(request)
      .subscribe(
        response => {

          console.log("response : "+ JSON.stringify(response))
          this.tokenStorage.setToken(response.token);
          this.tokenStorage.setUser(response);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().empRoles;
          this.reloadPage();
        },
        error => {
          console.log(error);
        });
  }

  newEmplpoyee() {
    this.submitted = false;
    this.employee = {
      username: "",
      password: ""
    };
  }
  reloadPage() {
    window.location.reload();
  }

}
