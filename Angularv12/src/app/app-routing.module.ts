import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FactureComponent } from './facture/facture.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
import { SignupComponent } from './signup/signup.component';
import { DevisComponent } from './devis/devis.component';

const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "add-produit", component: AddProduitsComponent, canActivate: [ProduitGuard] },
  { path: "login", component: LoginComponent },
  { path: "owner", component: OwnerComponent, canActivate: [ProduitGuard] },
  { path: "updateProduit/:id", component: UpdateProduitComponent, canActivate: [ProduitGuard] },
  { path: "add-user", component: AddUserComponent, canActivate: [ProduitGuard] },
  { path: "facture", component: FactureComponent },
  { path: "forbidden", component: ForbiddenComponent },
  { path: "signup", component: SignupComponent },
  { path: "devis", component: DevisComponent },





  { path: "", redirectTo: "produits", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
