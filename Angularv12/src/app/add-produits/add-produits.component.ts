import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit {
  newProduit = new Produit();

  constructor(private produitService: ProduitService,
    private router: Router) { }

  /*addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
  }*/
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
      });
    this.router.navigate(['produits']).then(() => {
      window.location.reload();
    });
  }


  ngOnInit(): void { }

}
