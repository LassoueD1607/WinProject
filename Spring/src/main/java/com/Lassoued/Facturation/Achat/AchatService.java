package com.Lassoued.Facturation.Achat;


import com.Lassoued.Facturation.Produit.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AchatService {

    private final AchatRepository achatRepository;
    @Autowired
    public AchatService(AchatRepository achatRepository) {
        this.achatRepository = achatRepository;
    }
    public List<Achat> getAchats() {
        return achatRepository.findAll();

    }

    public void addNewAchat(Achat achat) {
        achatRepository.save(achat);
    }

    public void deleteAchat(Integer idAchat) {
        boolean exists = achatRepository.existsById(idAchat);
        if (!exists){
            throw new IllegalStateException("Achat avec id " + idAchat + " Introuvable");
        }
        achatRepository.deleteById(idAchat);

    }
}

