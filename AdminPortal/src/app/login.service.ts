import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+'&password='+password;
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    // let headers = new Headers(
    // {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    //   // 'Access-Control-Allow-Credentials' : true
    // });
    
    return this.http.post(url, params, {headers, responseType: 'text' as 'json', withCredentials : true}).pipe(
      map(response => {
        return response;
      })
    );
  }

  logout() {
     let url = "http://localhost:8080/logout";
     return this.http.get(url, { withCredentials: true });
   }

}
