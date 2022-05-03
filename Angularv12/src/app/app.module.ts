import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { OwnerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FactureComponent } from './facture/facture.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SignupComponent } from './signup/signup.component';
import { DevisComponent } from './devis/devis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitsComponent,
    OwnerComponent,
    LoginComponent,
    UpdateProduitComponent,
    AddUserComponent,
    FactureComponent,
    ForbiddenComponent,
    SignupComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
