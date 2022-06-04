import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component'
import {DepartmentComponent} from './department/department.component'
import {CarouselComponent} from './carousel/carousel.component'
import { CountryComponent } from './universitygallery/country/country.component';
import { UniversitygalleryComponent } from './universitygallery/universitygallery.component';

const routes: Routes = [
  {path: 'depmanager/employee',component: EmployeeComponent},
  {path: 'depmanager/department',component: DepartmentComponent},
  {path: 'other/carousel',component: CarouselComponent},
  {path: 'universitygallery/country',component: CountryComponent},
  {path: 'universitygallery',component: UniversitygalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
