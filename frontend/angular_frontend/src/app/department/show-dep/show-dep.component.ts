import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service'; //initialize this in the constructor
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService, private modalService: NgbModal) { } //<--- initializing shared service
  DepartmentList: any = [];

  ModalTitle: string = "";
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  DepartmentIdFilter: string = "";
  DepartmentNameFilter: string = "";
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void { //first method that gets executed when a component is in scope
    this.refreshDepList();
  }


  refreshDepList() {
    this.service.getDepList().subscribe(data => { //subscribe method makes sure to wait until the response from api
      //call is received and only then assign value to the list variable - asynchronous operation
      this.DepartmentList = data;
    });
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
    
  }
  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  deleteClick(item: { DepartmentId: any; }){
    if(confirm("Are you sure you want to delete this department?")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      });
    }
    
    
  }

}
