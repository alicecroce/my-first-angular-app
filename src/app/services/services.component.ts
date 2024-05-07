import { Component } from '@angular/core';

@Component({
  // selector: '[app-services]',
  // selector: '.app-services',
  selector:'app-services',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  allowNewServer=false;
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },400);
  }
}
