import { Component, OnInit } from '@angular/core';
import {customer} from './customer';
import{MyserviceService} from './myservice.service';
@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

custArray:Array<customer>=new Array();
getData:any[];
model=new customer('',0);
  constructor(private _httpService: MyserviceService) { }

  ngOnInit() {

  }
  submitted=false;
//default submit event
onSubmit(){
	this.submitted=true;
}
createCustomer(){
	console.log("customer creation here");
	this.custArray.push(new customer(this.model.name,this.model.age));
	console.log(JSON.stringify(this.custArray));
}
onTestGet(){
this._httpService.getUserDetails()
.subscribe((res:any[])=>{
console.log(res);
this.getData=res;

});


}




}
