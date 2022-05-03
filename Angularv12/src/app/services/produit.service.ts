import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/api/v1/produit';
  produits!: Produit[];
  produit: Produit = new Produit;

  constructor(private http: HttpClient) {
    /*this.produits = [
      { id: 1, marque: "LENOVO L15", processeur: "i7", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "NVIDIA", coleur: "NOIR", prix: 2000 },
      { id: 2, marque: "SAMSUNG X2", processeur: "i7", ram: "16GB", disqueDur: "512GO HDD", carteGraphique: "NVIDIA", coleur: "BLEU", prix: 2500 },
      { id: 3, marque: "ASUS X540", processeur: "i5", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "AMD", coleur: "ROUGE", prix: 1800 },
      { id: 4, marque: "DELL INSPIRON", processeur: "i3", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "AMD", coleur: "ROUGE", prix: 1500 },
      { id: 5, marque: "HP PAVILLON", processeur: "i5", ram: "16GB", disqueDur: "1TO HDD", carteGraphique: "AMD", coleur: "NOIR", prix: 1900 },
      { id: 6, marque: "LENOVO L3", processeur: "i7", ram: "20GB", disqueDur: "2TO HDD", carteGraphique: "NVIDIA", coleur: "BLANC", prix: 3000 },
      { id: 7, marque: "DELL M15", processeur: "i5", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "INTEL", coleur: "ROUGE", prix: 1800 },
      { id: 8, marque: "ASUS X541", processeur: "i3", ram: "8GB", disqueDur: "1TO HDD", carteGraphique: "INTEL", coleur: "BLEU", prix: 1600 },
      { id: 9, marque: "SAMSUNG X3", processeur: "i7", ram: "8GB", disqueDur: "256GO SSD", carteGraphique: "NVIDIA", coleur: "JAUNE", prix: 1750 },
      { id: 10, marque: "HP 2", processeur: "i5", ram: "16GB", disqueDur: "512GO SSD", carteGraphique: "NVIDIA", coleur: "NOIR", prix: 1950 },
      { id: 11, marque: "DELL VOSTRO", processeur: "i5", ram: "12GB", disqueDur: "1TO HDD", carteGraphique: "INTEL", coleur: "GRIS", prix: 1850 },
      { id: 12, marque: "ASUS X590", processeur: "i5", ram: "12GB", disqueDur: "512GO SSD", carteGraphique: "NVIDIA", coleur: "GRIS", prix: 1790 },
      { id: 13, marque: "LENOVO L14", processeur: "i3", ram: "12GB", disqueDur: "256GO SSD", carteGraphique: "NVIDIA", coleur: "NOIR", prix: 1600 },
      { id: 14, marque: "DELL M10", processeur: "i7", ram: "20GB", disqueDur: "1TO SDD", carteGraphique: "NVIDIA", coleur: "GRIS", prix: 3500 },
      { id: 15, marque: "HP H15", processeur: "i3", ram: "12GB", disqueDur: "1TO HDD", carteGraphique: "AMD", coleur: "ROUGE", prix: 1500 },
      { id: 16, marque: "ASUS X544", processeur: "i7", ram: "16GB", disqueDur: "512GO SSD", carteGraphique: "NVIDIA", coleur: "GRIS", prix: 2900 },
      { id: 17, marque: "SAMSUNG X5", processeur: "i7", ram: "8GB", disqueDur: "512GO SSD", carteGraphique: "INTEL", coleur: "NOIR", prix: 2000 },
      { id: 18, marque: "LENOVO IDEAPAD", processeur: "i3", ram: "8GB", disqueDur: "256GO SSD", carteGraphique: "NVIDIA", coleur: "BLEU", prix: 1800 },
      { id: 19, marque: "HP M12", processeur: "i7", ram: "16GB", disqueDur: "512GO SSD", carteGraphique: "NVIDIA", coleur: "VERT", prix: 2400 }
    ];*/
  }
  /*listeProduits(): Produit[] {
    return this.produits;
  }*/
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }
  /*ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }*/
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  /*supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }*/
  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterProduit(id: number): any {
    return this.produits.find(p => p.id == id);

  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.id > n2.id) {
        return 1;
      }
      if (n1.id < n2.id) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(p: Produit) {

    //this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }
}