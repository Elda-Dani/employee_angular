import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

employeeCode=""
employeeName=""
designation=""
gender=""
companyName=""
companyAddress=""
salary=""
mobile=""
companyEmail=""
year=""
bloodGroup=""
dob=""


readValues=()=>{
  let data={
    "employeeCode":this.employeeCode,
"employeeName":this.employeeName,
"designation":this.designation,
"gender":this.gender,
"companyName":this.companyName,
"companyAddress":this.companyAddress,
"salary":this.salary,
"mobile":this.mobile,
"companyEmail":this.companyEmail,
"year":this.year,
"bloodGroup":this.bloodGroup,
"dob":this.dob

  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
