import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menussubmenu } from '../Model/header.model';



@Injectable({
    providedIn: 'root'
})

export class Headerservice {
    Menudata = "http://localhost:4000/menus"


    constructor(private http: HttpClient) { }

    getmenudata(): Observable<Menussubmenu> {
        return this.http.get<Menussubmenu>(this.Menudata)
    }

}