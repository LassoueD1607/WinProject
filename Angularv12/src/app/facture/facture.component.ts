import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AchatService } from '../services/achat.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  produits: Produit[];
  prod: number = 0;
  public loggedUser: any;

  constructor(private achatService: AchatService) {
    this.produits = achatService.listeAchat();
    this.loggedUser = localStorage.getItem('loggedUser');



  }









  ngOnInit(): void {

    this.produits.forEach(produit => {
      this.prod = this.prod + produit.prix;

    });
  }

}
