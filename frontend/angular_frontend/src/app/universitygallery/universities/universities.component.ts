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
  UniversityListWithoutFilter: any = []; // the list of countries



  UniversityNameFilter: string = '';
  CountryNameFilter: string = '';
  RegionNameFilter: string = '';
  CityNameFilter: string = '';

  ngOnInit(): void {
    this.getUniversityList();
  }

  getUniversityList(): any {
    this.service.getUniversityList().subscribe(data => {
      this.universityList = data;
      this.UniversityListWithoutFilter = data;
    });

  }

  FilterFn() {
    let CountryNameFilter = this.CountryNameFilter;
    let UniversityNameFilter = this.UniversityNameFilter;
    let CityNameFilter = this.CityNameFilter;
    let RegionNameFilter = this.RegionNameFilter;
    

    this.universityList = this.UniversityListWithoutFilter.filter(function (el: {
      CityId__RegionId__RegionName: any;
      CityId__CityName: any;
      CityId__RegionId__CountryId__CountryName: { toString: () => string; }; UniversityName: { toString: () => string; }; 
}) {
      return el.CityId__RegionId__CountryId__CountryName.toString().toLowerCase().includes(
        CountryNameFilter.toString().trim().toLowerCase()
      ) &&
        el.UniversityName.toString().toLowerCase().includes(
          UniversityNameFilter.toString().trim().toLowerCase()
        )&&
        el.CityId__RegionId__RegionName.toString().toLowerCase().includes(
          RegionNameFilter.toString().trim().toLowerCase()
        )&&
        el.CityId__CityName.toString().toLowerCase().includes(
          CityNameFilter.toString().trim().toLowerCase()
        )
    });
  }



}
