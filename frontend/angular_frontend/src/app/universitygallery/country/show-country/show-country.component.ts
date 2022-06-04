import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  constructor(private service: SharedService) { }

  countryList: any = []; // the list of countries


  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList(){
    this.service.getCountryList().subscribe(data => {
      this.countryList = data;
    });
    console.log(this.countryList);
  }

}
