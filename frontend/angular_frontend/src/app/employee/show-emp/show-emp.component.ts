import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'; //initialize this in the constructor
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  EmployeeList:any = [];


  refreshEmployeeList(): void {
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
    })
  }
}
