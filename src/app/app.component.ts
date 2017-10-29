import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header-component></header-component>
    <div class='content-wrapper'>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
