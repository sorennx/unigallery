import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './universitygallery/about/about.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
