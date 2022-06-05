import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  universityList: any = [];


  ngOnInit(): void {
    this.getUniversityList();
  }

  getUniversityList(): any {
    this.service.getUniversityList().subscribe(data => this.universityList = data);
  }

}
