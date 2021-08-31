import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
  <div class="row">
  <div class="col">
  </div>
  <div class="col-10">
  <h1 class="display-1" style="text-align:center;">{{title}}</h1>
  <calendar></calendar>
  </div>
  <div class="col">
  </div>
  </div>
  </div>
  `
  
})
export class AppComponent {
  title:string = '單日行事曆';
}
