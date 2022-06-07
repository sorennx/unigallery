import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private service: SharedService) { }
  CityName: string ='';
  Country: string = '';
  CountryList: any = [];
  CountryListNotFiltered: any = [];
  Region: string = '';
  RegionList: any = [];
  RegionListNotFiltered: any = [];
  RegionListFiltered: any = [];

  ngOnInit(): void {
  this.getCountryList();
  }
  
  addCity(){
    let val = {CityName: this.CityName,
               RegionId: parseInt(this.Region)}
    this.service.addCity(val).subscribe((res: { toString: () => any; }) => {
       alert(res.toString()); })
  }
  getRegionList(){
    this.service.getRegionList().subscribe((data) =>{
      this.RegionListNotFiltered = data;
      this.RegionList = data;
    })
  }

  getCountryList() {
    this.service.getCountryList().subscribe(data => {
      this.CountryList = data;
      this.CountryListNotFiltered = data;
    });
    return 0;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async onCountrySelect() {
    this.getRegionList();
  
    await this.delay(100);


    var regionsFiltered = this.RegionListNotFiltered.filter((el: { CountryId: number; }) => {
      return el.CountryId == parseInt(this.Country);
    });
    this.RegionListFiltered = regionsFiltered;
  }

}
