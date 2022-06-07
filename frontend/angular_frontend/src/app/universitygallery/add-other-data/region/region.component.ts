import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private service: SharedService) { }
  RegionName: string = '';

  Country: string = '';
  CountryList: any = [];
  CountryListNotFiltered: any = [];
  Region: string = '';

  ngOnInit(): void {
    this.getCountryList();
  }

  addRegion(){
    
    console.log(this.Country, this.RegionName);
    var val = {RegionName: this.RegionName,
               CountryId: parseInt(this.Country)}
    console.log(val);
    this.service.addRegion(val).subscribe((res: { toString: () => any; }) => {
       alert(res.toString()); })
  }

  getCountryList() {
    this.service.getCountryList().subscribe(data => {
      this.CountryList = data;
      this.CountryListNotFiltered = data;

    });
  }


}
