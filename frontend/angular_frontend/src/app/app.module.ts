import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { UniversitygalleryComponent } from './universitygallery/universitygallery.component';
import { RegionComponent } from './universitygallery/add-other-data/region/region.component';
import { HomeComponent } from './universitygallery/home/home.component';
import { AboutComponent } from './universitygallery/about/about.component';
import { ContactComponent } from './universitygallery/contact/contact.component';
import { UniversitiesComponent } from './universitygallery/universities/universities.component';
import { AddUniComponent } from './universitygallery/contact/add-uni/add-uni.component';
import { AddOtherDataComponent } from './universitygallery/add-other-data/add-other-data.component';
import { CountryComponent } from './universitygallery/add-other-data/country/country.component';
import { CityComponent } from './universitygallery/add-other-data/city/city.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    UniversitygalleryComponent,
    RegionComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UniversitiesComponent,
    AddUniComponent,
    AddOtherDataComponent,
    CountryComponent,
    CityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
