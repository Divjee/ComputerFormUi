import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:8080/app"

  constructor(private http:HttpClient) { }

  getPartsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/getAllParts');
  }

  addPart(val:any){
    return this.http.post(this.APIUrl+'/hardware',val);
  }

  editPart(val:any){
    return this.http.put(this.APIUrl+'/edit-hardware',val);
  }

  getFormsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/getAllForms');
  }

  addForm(val:any){
    return this.http.post(this.APIUrl+'/addComputerForm',val);
  }

  editForm(val:any){
    return this.http.put(this.APIUrl+'/edit-form',val);
  }

  deleteFormById(val: any): Observable<any> {
    return this.http.delete(this.APIUrl+'/formDelete/'+val);
  }

  deletePartById(val: any): Observable<any> {
    return this.http.delete(this.APIUrl+'/partDelete/'+val);
  }

  getPartNameList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/partNames');
  }
    
}
