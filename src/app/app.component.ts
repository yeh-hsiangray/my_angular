import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="width: 800px;margin: auto;">
  <h1 class="display-1" style="text-align:center;">{{title}}</h1>
  <calendar></calendar>
  </div>`
})
export class AppComponent {
  title:string = '單日行事曆';
}
