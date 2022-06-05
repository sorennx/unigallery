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
import { CountryComponent } from './universitygallery/country/country.component';
import { RegionComponent } from './universitygallery/region/region.component';
import { ShowCountryComponent } from './universitygallery/country/show-country/show-country.component';
import { HomeComponent } from './universitygallery/home/home.component';
import { AboutComponent } from './universitygallery/about/about.component';
import { ContactComponent } from './universitygallery/contact/contact.component';
import { UniversitiesComponent } from './universitygallery/universities/universities.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    UniversitygalleryComponent,
    CountryComponent,
    RegionComponent,
    ShowCountryComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UniversitiesComponent,
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
