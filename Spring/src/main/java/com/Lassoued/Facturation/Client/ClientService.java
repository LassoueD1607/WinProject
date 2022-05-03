package com.Lassoued.Facturation.Client;

import com.Lassoued.Facturation.Produit.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service

public class ClientService {
    private final ClientRepository clientRepository;
    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }




    public List<Client> getClients() {
        return clientRepository.findAll();

    }


    public void addNewClient(Client client) {clientRepository.save(client);}

    public void deleteClient(Integer clientId) {

        boolean exists = clientRepository.existsById(clientId);
        if (!exists){
            throw new IllegalStateException("Client with id " + clientId + "introuvalbe");
        }
        clientRepository.deleteById(clientId);
    }


    public void ModifyClient(Integer id ,Client clienttOld) {
        Client client = clientRepository.findById(id).
                orElseThrow(() -> new IllegalStateException("Client with id "+ id + " does not exist"));

        if (clienttOld.getUsername() != null && clienttOld.getUsername().length() > 0){
            client.setPassword(clienttOld.getUsername());
        }
        if (client.getPassword() != null && clienttOld.getPassword().length() > 0){
            client.setPassword(clienttOld.getPassword());}
        if (client.getRoles() != null && clienttOld.getRoles().length() > 0){
            client.setRoles(clienttOld.getRoles());}


        clientRepository.save(client);
    }
}
