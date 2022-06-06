import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-uni.component.html',
  styleUrls: ['./add-uni.component.css']
})
export class AddUniComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep:any;
  UniversityName: string = '';
  CityId: string = '';
  UniversityGeneralDescription: string = '';
  UniversityLogoLink: string = '';
  UniversityMainPageLink: string = '';
  UniversityCoursesLink: string = '';
  UniversityContactInfo: string = '';

  Country: string = '';
  CountryList: any =[];
  CountryListNotFiltered: any =[];
  Region: string = '';
  RegionList: any =[];
  RegionListNotFiltered: any =[];
  City: string = '';
  CityList: any =[];
  CityListNotFiltered: any =[];

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
    
    this.service.addUniversity(val).subscribe((res: { toString: () => any; })=>{
      alert(res.toString());
    })
  }
  getCountryList(){
    this.service.getCountryList().subscribe(data => {
      this.CountryList = data;
      this.CountryListNotFiltered = data;
    });
  }

  getRegionList(){
    this.service.getRegionList().subscribe(data => {
      this.RegionList = data;
      this.RegionListNotFiltered = data;
    });
  }

  getCityList(){
    this.service.getCityList().subscribe(data => {
      this.CityList = data;
      this.CityListNotFiltered = data;
    });
  }

  onCountrySelect(){
    console.log("Country selection made");
    this.getRegionList();
  }

  onRegionSelect(){
    console.log("Region selection made");
    this.getCityList();
  }

  test(){
    console.log(">>>Test",this.Country,this.Region,this.City);
    for (var country of this.CountryListNotFiltered){
        if (country.CountryName == this.Country){
          console.log("TRUE")
        }
    }
  }
}
