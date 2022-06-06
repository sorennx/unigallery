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
    var val = {
      UniversityName: this.UniversityName,
      CityId: this.CityId,
      UniversityGeneralDescription: this.UniversityGeneralDescription,
      UniversityLogoLink: this.UniversityLogoLink,
      UniversityMainPageLink: this.UniversityMainPageLink,
      UniversityCoursesLink: this.UniversityCoursesLink,
      UniversityContactInfo: this.UniversityContactInfo
    };

    this.service.addUniversity(val).subscribe((res: { toString: () => any; }) => {
      alert(res.toString());
    })
  }
  getCountryList() {
    this.service.getCountryList().subscribe(data => {
      this.CountryList = data;
      this.CountryListNotFiltered = data;

    });
    return 0;
  }

  getRegionList() {
    this.service.getRegionList().subscribe(data => {
      this.RegionList = data;
      this.RegionListNotFiltered = data;
    });
  }

  getCityList() {
    this.service.getCityList().subscribe(data => {
      this.CityList = data;
      this.CityListNotFiltered = data;
    });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async onCountrySelect() {
    this.getRegionList();
    await this.delay(50);

    var regionsFiltered = this.RegionListNotFiltered.filter((el: { CountryId: number; }) => {
      return el.CountryId == parseInt(this.Country);
    });
    this.RegionListFiltered = regionsFiltered;
  }

  async onRegionSelect() {
    this.getCityList();
    await this.delay(50);

    var citiesFiltered = this.CityListNotFiltered.filter((el: { RegionId: number; }) => {
      return el.RegionId == parseInt(this.Region);
    });
    this.CityListFiltered = citiesFiltered;
  }

  async onCitySelect() {
    this.CityId = parseInt(this.City);
    await this.delay(50);
  }
}