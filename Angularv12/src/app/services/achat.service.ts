import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  prod: Produit[] = [];
  numberProd: number[] = [];


  constructor() {
    /*this.prod = [
      { id: 1, marque: "LENOVO L15", processeur: "i7", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "NVIDIA", coleur: "NOIR", prix: 2000 },
      { id: 2, marque: "SAMSUNG X2", processeur: "i7", ram: "16GB", disqueDur: "512GO HDD", carteGraphique: "NVIDIA", coleur: "BLEU", prix: 2500 }];*/
  }

  listeAchat(): Produit[] {
    return this.prod;

  }
  ajouterAchat(prod: Produit) {
    this.prod.push(prod);

  }




  /* ajouterAchat(prod: Produit) {
     let index = 0;
     if (!this.existeProd(prod)) {
       this.prod.push(prod);
       this.numberProd.push(1);
     }
     else {
       index = this.indexProd(prod);
       if (!index) {
         this.numberProd[index] = this.numberProd[index] + 1;
       }
     }
 
     console.warn(this.prod);
     console.warn(this.numberProd);
 
   }
   existeProd(prod: Produit): Boolean {
     let bool = false;
     for (let i = 0; this.prod.length; i++) {
 
       if (this.prod[i].id == prod.id)
         bool = true;
 
     }
     return bool;
   }
   indexProd(prod: Produit): number {
     let index = 0;
     for (let i = 0; this.prod.length; i++) {
       if (this.prod[i].id == prod.id)
         index = i;
     }
     return index;
   }*/
}
