import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user = new User();
  users: User[] = [];
  erreur = 0;



  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user, this.users);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;
  }
  ngOnInit(): void {
    this.userService.listeUser().subscribe(prods => {
      console.log(prods);
      this.users = prods;
    });
  }

}
