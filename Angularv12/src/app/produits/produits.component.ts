import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { AchatService } from '../services/achat.service';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService,
    private achatService: AchatService,
    public authService: AuthService,
    private router: Router) {
    //this.produits = produitService.listeProduits();
  }

  /*supprimerProduit(p: Produit) {

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p);
  }*/
  SuprimerProduitDuTableau(prod: Produit) {
    this.produits.forEach((cur, index) => {
      if (prod.id === cur.id) {
        this.produits.splice(index, 1);
      }
    });
  }
  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.id).subscribe(() => {
        console.log("produit supprimé");
        this.SuprimerProduitDuTableau(p);
      });
  }

  addAchat(p: Produit) {

    this.achatService.ajouterAchat(p);

  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

}
