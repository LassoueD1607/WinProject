package com.Lassoued.Facturation.Achat;


import com.Lassoued.Facturation.Client.Client;
import com.Lassoued.Facturation.Client.ClientService;
import com.Lassoued.Facturation.Produit.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "api/v1/achat")
public class AchatController {
    private final AchatService achatService;

    @Autowired
    public AchatController(AchatService achatService) {
        this.achatService = achatService;
    }


    @GetMapping
    public List<Achat> getAchats(){
        return achatService.getAchats();
    }

    @PostMapping
    public void registerNewAchat(@RequestBody Achat achat){
        achatService.addNewAchat(achat);
    }

    @DeleteMapping(path = "{achatId}")
    public void deleteAchat(@PathVariable("achatId") Integer achatId){
        achatService.deleteAchat(achatId);
    }

}
