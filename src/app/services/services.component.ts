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
  serverCreationStatus='No server was created!';
  serverName='TestServer';
  serverCreated=false;
  servers=['Testserver', 'Testserver2'];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },400);
  }

onCreateServer(){
  this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='New server was created! Name is'+this.serverName;
}

onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value;
}



}
