package com.Lassoued.Facturation.Produit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController


@RequestMapping(path = "api/v1/produit")

public class ProduitController {
    private final ProduitService produitService;

    @Autowired
    public ProduitController(ProduitService produitService) {
        this.produitService = produitService;
    }


    @GetMapping
    public List<Produit> getProduits(){
        return produitService.getProduits();
    }

    @PostMapping
    public void registerNewProduit(@RequestBody Produit produit){
        produitService.addNewProduit(produit);
    }
    @DeleteMapping(path = "{produitId}")
    public void deleteProduit(@PathVariable("produitId") Integer id) {
        produitService.deleteProduit(id);
    }

    @PutMapping(path = "{id}")
    public void updateProduit(@PathVariable(value = "id") Integer id,
                              @RequestBody Produit produitDetail){
        produitService.ModifyProduit(id, produitDetail);
    }


}



