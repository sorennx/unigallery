import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  
  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'department/');
  }
  
  addDepartment(val:any){
    return this.http.post(this.APIUrl + 'department/',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + 'department/',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + 'department/'+val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'department/')
  }


  getEmpList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'employee/');
  }
  
  addEmployee(val:any){
    return this.http.post(this.APIUrl + 'employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + 'employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + 'employee/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'SaveFile',val)
  }

  getCountryList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'countries/')
  }
  getRegionList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'regions/')
  }
  getCityList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'cities/')
  }

  getUniversityList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'universities/')
  }
  addUniversity(val:any){
    return this.http.post(this.APIUrl + 'universities/',val);
  }

  addCountry(val:any){
    return this.http.post(this.APIUrl + 'countries/',val);
  }
  addRegion(val:any){
    return this.http.post(this.APIUrl + 'regions/',val);
  }
  addCity(val:any){
    return this.http.post(this.APIUrl + 'cities/',val);
  }
}
