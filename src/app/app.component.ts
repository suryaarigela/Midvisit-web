import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServService } from './shared-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  userName = 'Surya'
  constructor(private readonly router: Router,
    private readonly shared: SharedServService) {

  }
  goDashBoard() {
    this.router.navigate([''])
  }

  goProfile() {
    this.router.navigate(['profile'])
  }

  goSettings() {
    this.router.navigate(['settings'])
  }

  logout() {
    this.shared.logoutEvent = true;
    this.shared.isValidUser = false;
    this.router.navigate(['login'])
  }
}
