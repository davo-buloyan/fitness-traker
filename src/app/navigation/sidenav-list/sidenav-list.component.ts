import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>()
  isAuth!: boolean;
  authSubscription!: Subscription

  constructor(private  authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChenges.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogput() {
    this.authService.logout()
    this.onClose()
  }

  ngOnDestroy(): void {
this.authSubscription.unsubscribe()
}

}
