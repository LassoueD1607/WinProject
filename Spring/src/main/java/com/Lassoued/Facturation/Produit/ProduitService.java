package com.Lassoued.Facturation.Produit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProduitService {
    private final ProduitRepository produitRepository;
    @Autowired
    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    public List<Produit> getProduits() {
        return produitRepository.findAll();

    }

    public void addNewProduit(Produit produit) {
        produitRepository.save(produit);
    }

    public void deleteProduit(Integer produitId) {
        boolean exists = produitRepository.existsById(produitId);
        if (!exists){
            throw new IllegalStateException("Produit avec id " + produitId + "introuvable");
        }
        produitRepository.deleteById(produitId);

    }



    public void ModifyProduit(Integer id ,Produit produitOld) {
        Produit produit = produitRepository.findById(id).
                orElseThrow(() -> new IllegalStateException("Produit with id "+ id + " does not exist"));

        if (produitOld.getMarque() != null && produitOld.getMarque().length() > 0){
            produit.setMarque(produitOld.getMarque());
        }
        if (produitOld.getProcesseur() != null && produitOld.getProcesseur().length() > 0){
            produit.setProcesseur(produitOld.getProcesseur());}

        if (produitOld.getRam() != null && produitOld.getRam().length() > 0){
            produit.setRam(produitOld.getRam());}

        if (produitOld.getDisqueDur() != null && produitOld.getDisqueDur().length() > 0){
            produit.setDisqueDur(produitOld.getDisqueDur());}
        if (produitOld.getCarteGraphique() != null && produitOld.getCarteGraphique().length() > 0){
            produit.setCarteGraphique(produitOld.getCarteGraphique());}
        if (produitOld.getColeur() != null && produitOld.getColeur().length() > 0){
            produit.setColeur(produitOld.getColeur());}
        if (produitOld.getPrix() != null && produitOld.getPrix() > 0){
            produit.setPrix(produitOld.getPrix());}
        produitRepository.save(produit);
    }
    }

