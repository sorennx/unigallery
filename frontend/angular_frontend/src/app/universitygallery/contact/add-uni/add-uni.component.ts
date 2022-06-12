import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-uni.component.html',
  styleUrls: ['./add-uni.component.css']
})
export class AddUniComponent implements OnInit {


  constructor(private service: SharedService) { }

  @Input() dep: any;
  UniversityName: string = '';
  CityId: number = 0;
  UniversityGeneralDescription: string = '';
  UniversityLogoLink: string = '';
  UniversityMainPageLink: string = '';
  UniversityCoursesLink: string = '';
  UniversityContactInfo: string = '';

  Country: string = '';
  CountryList: any = [];
  CountryListNotFiltered: any = [];
  Region: string = '';
  RegionList: any = [];
  RegionListNotFiltered: any = [];
  RegionListFiltered: any = [];
  City: string = '';
  CityList: any = [];
  CityListNotFiltered: any = [];
  CityListFiltered: any = [];

  ngOnInit(): void {
    this.getCountryList();
    // this.getRegionList();
    // this.getCityList();
  }


  addUniversity() {
    let val = {
      UniversityName: this.UniversityName,
      CityId: this.CityId,
      UniversityGeneralDescription: this.UniversityGeneralDescription,
      UniversityLogoLink: this.UniversityLogoLink,
      UniversityMainPageLink: this.UniversityMainPageLink,
      UniversityCoursesLink: this.UniversityCoursesLink,
      UniversityContactInfo: this.UniversityContactInfo
    };
    console.log(val);
    this.service.addUniversity(val).subscribe((res: { toString: () => any; }) => {
      alert(res.toString());
    })
  }
  async getCountryList() {
    return new Promise <void> (resolve => {
      this.service.getCountryList().subscribe(data => {
        this.CountryList = data;
        this.CountryListNotFiltered = data;
        resolve();
      })
    });
    

  }

  async getRegionList() {
    return new Promise<void>(resolve => {
      this.service.getRegionList().subscribe(data => {
        this.RegionList = data;
        this.RegionListNotFiltered = data;
        resolve();
      })
    });
  }

  async getCityList() {
    return new Promise<void>(resolve => {
      this.service.getCityList().subscribe(data => {
        this.CityList = data;
        this.CityListNotFiltered = data;
        resolve();
      })
    });
  }

  async onCountrySelect() {

    await this.getRegionList();


    var regionsFiltered = this.RegionListNotFiltered.filter((el: { CountryId: number; }) => {
      return el.CountryId == parseInt(this.Country);
    });
    this.RegionListFiltered = regionsFiltered;
  }

  async onRegionSelect() {
    await this.getCityList();


    var citiesFiltered = this.CityListNotFiltered.filter((el: { RegionId: number; }) => {
      return el.RegionId == parseInt(this.Region);
    });
    this.CityListFiltered = citiesFiltered;
  }

  async onCitySelect() {
    this.CityId = parseInt(this.City);
  }
}