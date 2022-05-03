import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public loggedUser: string = "";
  public isloggedIn: Boolean = false;
  public roles: string = "";

  constructor(private router: Router) {
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = "";
    this.roles = "";
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('roles');

    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User, users: User[]): Boolean {
    let validUser: Boolean = false;
    users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
        localStorage.setItem('roles', this.roles);
      }
    });
    return validUser;
  }
  /*isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
    ;
  }*/
  isAdmin(): Boolean {
    let role = localStorage.getItem('roles');
    if (!role)
      return false;
    else {
      return (role.indexOf('ADMIN') > -1)

    }
  }

  setLoggedUserFromLocalStorage(login: string, users: User[]) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login, users);
  }
  getUserRoles(username: string, users: User[]) {
    users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
        localStorage.setItem('roles', this.roles);

      }
    });
  }
}


