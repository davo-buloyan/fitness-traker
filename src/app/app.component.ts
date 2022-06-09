import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowing: boolean | undefined;

toggleSidenav() {
   this.isShowing = !this.isShowing;
}

callMethods() {
    this.toggleSidenav();
}
}
