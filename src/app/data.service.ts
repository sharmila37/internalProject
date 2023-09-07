import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private names: string[] = [];
url="http://localhost:3000/userDetail"
  constructor(public http:HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  
}

