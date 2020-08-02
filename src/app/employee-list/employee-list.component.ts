import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Employee[]=[];
  displayedColumns: any[] = ['id','first_name','last_name','email','username','mobile_no','address','city','dob'];
  constructor(private service:ServicesService) { 
    //this.getEmployees()
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(){
    this.service.getEmployeeList().
    subscribe(
    (data:Employee[])=> {
      this.employeeList = data;
      console.log("Employee list : "+ JSON.stringify(data));
    },
    (error)=>{
      console.log(error);
    }
    )
  }

}
