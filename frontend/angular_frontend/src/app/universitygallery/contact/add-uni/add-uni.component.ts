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

  ngOnInit(): void {
    
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
}
