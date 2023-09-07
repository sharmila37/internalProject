import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getDataFromAPI() {
    throw new Error('Method not implemented.');
  }
  constructor( private http:HttpClient){}
  

  getdata(){
    return this.http.get('http://localhost:3000/emp');
  }
  postid(data:any){
    return this.http.post('http://localhost:3000/emp',data);
   }
   deleteid(id:any){
     return this.http.delete('http://localhost:3000/emp/'+id);
   }
   updateid(data:any){
    return this.http.put('http://localhost:3000/emp', data);
   }
}
