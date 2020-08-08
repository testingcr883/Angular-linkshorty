import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailserviceService {

  constructor(private _httpclient:HttpClient) { }
  public apiUrl:any="http://localhost/apis/";
   httOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  };
  //submitproduct(employees,endpoint)
  submitproduct(employees)
  {
    let httOptions = {
      headers: new HttpHeaders({"Content-Type":"application/json"})
    }
    // return this._httpclient.post(this.apiUrl+endpoint,employees,httOptions);
     return this._httpclient.post(this.apiUrl,employees,httOptions);
  }

  logindetails(logind)
  {
      return this._httpclient.post(this.apiUrl,logind);

  }
  submitcategory(categoried)
  {
      return this._httpclient.post(this.apiUrl,categoried);

  }
}
