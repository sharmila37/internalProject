
import { Component, } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  templateUrl: './create.component.html',
})
export class CreateComponent {

  dataList = [];
 
  constructor(public service: DataService){

  }
getData(){
  this.service.getUser().subscribe((res:any)=>{
    this.dataList=res
  })
}
}