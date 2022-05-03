import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  newUser = new User();


  constructor(private userService: UserService,
    private router: Router) { }

  /*addUser() {
    this.userService.ajouterUser(this.newUser);
  }*/
  addUser() {
    this.newUser.roles = "USER";
    this.userService.ajouterUser(this.newUser)
      .subscribe(prod => {
        console.log(prod);
      });
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  };


  ngOnInit(): void {
  }

}


