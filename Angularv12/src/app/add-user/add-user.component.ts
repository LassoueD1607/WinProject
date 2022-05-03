import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
    this.router.navigate(['owner']).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
  }

}
