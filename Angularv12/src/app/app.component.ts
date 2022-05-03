import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WindProduit';
  users: User[] = [];


  constructor(public authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  onLogout() {
    this.authService.logout();
  }
  ngOnInit() {
    this.userService.listeUser().subscribe(prods => {
      console.log(prods);
      this.users = prods;
    });
    let isloggedin: any;
    let loggedUser: any;
    let roles;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    roles = localStorage.getItem('roles');

    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser, this.users);
  }
}