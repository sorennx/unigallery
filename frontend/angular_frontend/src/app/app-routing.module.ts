import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './universitygallery/about/about.component';
import { AddOtherDataComponent } from './universitygallery/add-other-data/add-other-data.component';
import { CityComponent } from './universitygallery/add-other-data/city/city.component';
import { CountryComponent } from './universitygallery/add-other-data/country/country.component';
import { RegionComponent } from './universitygallery/add-other-data/region/region.component';
import { ContactComponent } from './universitygallery/contact/contact.component';
import { HomeComponent } from './universitygallery/home/home.component';
import { UniversitiesComponent } from './universitygallery/universities/universities.component';
import { UniversitygalleryComponent } from './universitygallery/universitygallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-data', component: AddOtherDataComponent },
  { path: 'add-data/add-country', component: CountryComponent },
  { path: 'add-data/add-region', component: RegionComponent },
  { path: 'add-data/add-city', component: CityComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
