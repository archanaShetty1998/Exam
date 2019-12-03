import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Angular";
  name: string ="fullstack session";

  clickmessage : string='morning';
  clicknewmessage: string ='print this message';

  onclickme()
  {
  	console.log('event fired !!-->'+this.clickmessage);

  }
  today=new Date();

  onclickmessage()
  {
  	console.log('this is to show the message-->'+this.clicknewmessage);
  }
}
