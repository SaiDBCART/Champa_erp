import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { Observable } from "rxjs";
import { login, logindata } from "../Model/login.model";

@Injectable({
    providedIn:'root'
})
export class loginservice{
    
    Login="http://localhost:4000/login";
    constructor(private http:HttpClient){

    }
   
    getlogin(data:login):Observable<logindata>{
      return this.http.post<logindata>(this.Login,data);
     }
    
}  