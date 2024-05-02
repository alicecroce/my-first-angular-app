import { Component } from '@angular/core';

@Component({
  // selector: '[app-services]',
  // selector: '.app-services',
  selector:'app-services',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
