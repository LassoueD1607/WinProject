import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
    //this.users = userService.listeUsers();
  }
  /*supprimerProduit(client: User) {

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.userService.supprimerUser(client);
  }*/
  supprimerProduit(p: User) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.userService.supprimerUser(p.idClient).subscribe(() => {
        console.log("produit supprimé");
        this.SuprimerProduitDuTableau(p);
      });
  }
  SuprimerProduitDuTableau(prod: User) {
    this.users.forEach((cur, index) => {
      if (prod.idClient === cur.idClient) {
        this.users.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.userService.listeUser().subscribe(prods => {
      console.log(prods);
      this.users = prods;
    });
  }
}

