import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private service: SharedService) { }

  CountryName: string ='';
  
  


  ngOnInit(): void {
  }


  addCountry(){
    let val = {CountryName: this.CountryName}
    this.service.addCountry(val).subscribe((res: { toString: () => any; }) => {
       alert(res.toString()); })
  }

}
