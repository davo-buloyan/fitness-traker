import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>()
  isAuth!: boolean
  authSubscription: Subscription | undefined

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription =  this.authService.authChenges.subscribe( authStatus => {
      this.isAuth = authStatus
    })

    console.log(this.authSubscription);

  }

  onToggleSidnav() {
    this.sidenavToggle.emit()
  }

  onLogput() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
