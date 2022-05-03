package com.Lassoued.Facturation.Client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "api/v1/client")


public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @GetMapping
    public List<Client> getClients(){
        return clientService.getClients();
    }
    @PostMapping
    public void registerNewClient(@RequestBody Client client){
        clientService.addNewClient(client);
    }

    @DeleteMapping(path = "{clientId}")
    public void deleteClient(@PathVariable("clientId") Integer clientId){
        clientService.deleteClient(clientId);
    }

    @PutMapping(path = "{idClient}")
    public void updateClient(
            @PathVariable(value = "idClient") Integer idClient,
            @RequestParam Client clientOld){
        clientService.ModifyClient(idClient,clientOld);}
}