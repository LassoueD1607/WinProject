package com.Lassoued.Facturation;

import com.Lassoued.Facturation.Achat.Achat;
import com.Lassoued.Facturation.Achat.AchatRepository;
import com.Lassoued.Facturation.Client.Client;
import com.Lassoued.Facturation.Client.ClientRepository;
import com.Lassoued.Facturation.Produit.Produit;
import com.Lassoued.Facturation.Produit.ProduitRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class FacturetConfig {
    @Bean
CommandLineRunner commandLineRunner(ProduitRepository repository, ClientRepository clientRepository, AchatRepository achatRepository){
    return args -> {
        Produit produit1 = new Produit(
                1,
                "LENOVO L15",
                "i7",
                "8GB",
                "1TO HDD",
                "NVIDIA",
                "NOIR",
                2000F);
        Produit produit2 = new Produit(
                2,
                "SAMSUNG X2",
                "i7",
                "16GB",
                "512GO SSD",
                "NVIDIA",
                "BLEU",
                2500F);

        Produit produit3 = new Produit(
                3,
                "ASUS X540",
                "i5",
                "8GB",
                "512GO SSD",
                "AMD",
                "ROUGE",
                1800F);

        Produit produit4 = new Produit(
                4,
                "DELL INSPIRON",
                "i3",
                "8GB",
                "256GO SSD",
                "AMD",
                "ROUGE",
                1500F);
        Produit produit5 = new Produit(
                5,
                "HP PAVILLON",
                "i5",
                "16GB",
                "1TO HDD",
                "AMD",
                "NOIR",
                1900F);
        Produit produit6 = new Produit(
                6,
                "LENOVO L3",
                "i7",
                "20GB",
                "2TO HDD",
                "NVIDIA",
                "BLANC",
                3000F);
        Produit produit7 = new Produit(
                7,
                "DELL M15",
                "i5",
                "8GB",
                "1TO HDD",
                "INTEL",
                "ROUGE",
                1800F);
        Produit produit8 = new Produit(
                8,
                "ASUS X541",
                "i3",
                "8GB",
                "1TO SSD",
                "INTEL",
                "BLEU",
                1600F);
        Produit produit9 = new Produit(
                9,
                "SAMSUNG X3",
                "i7",
                "8GB",
                "256GO SSD",
                "NVIDIA",
                "JAUNE",
                1750F);
        Produit produit10 = new Produit(
                10,
                "HP 2",
                "i5",
                "16GB",
                "512GO SSD",
                "NVIDIA",
                "NOIR",
                1950F);
        Produit produit11 = new Produit(
                11,
                "DELL VOSTRO",
                "i5",
                "12GB",
                "1TO HDD",
                "INTEL",
                "GRIS",
                1850F);
        Produit produit12 = new Produit(
                12,
                "ASUS X590",
                "i5",
                "12GB",
                "512GO SSD",
                "NVIDIA",
                "GRIS",
                1790F);
        Produit produit13 = new Produit(
                13,
                "LENOVO L14",
                "i3",
                "12GB",
                "256GO SSD",
                "NVIDIA",
                "NOIR",
                1600F);
        Produit produit14 = new Produit(
                14,
                "DELL M10",
                "i7",
                "20GB",
                "1TO SSD",
                "NVIDIA",
                "GRIS",
                3500F);
        Produit produit15 = new Produit(
                15,
                "HP H15",
                "i3",
                "12GB",
                "1TO HDD",
                "AMD",
                "ROUGE",
                1500F);
        Produit produit16 = new Produit(
                16,
                "ASUS X544",
                "i7",
                "16GB",
                "512GO SSD",
                "NVIDIA",
                "GRIS",
                2900F);
        Produit produit17 = new Produit(
                17,
                "SAMSUNG X5",
                "i7",
                "16GB",
                "512GO HDD",
                "INTEL",
                "NOIR",
                2300F);
        Produit produit18 = new Produit(
                18,
                "LENOVO IDEAPAD",
                "i3",
                "8GB",
                "256GO SSD",
                "NVIDIA",
                "BLEU",
                1800F);
        Produit produit19 = new Produit(
                19,
                "HP M12",
                "i7",
                "16GB",
                "512GO SSD",
                "NVIDIA",
                "VERT",
                2400F);

        Client client1 = new Client(
                1,
                "admin",
                "admin",
                "ADMIN"
        );



        Client client2 = new Client(
                2,
                "Motez",
                "lassoued",
                "USER"
        );
        Client client3 = new Client(
                3,
                "Ahmed",
                "bahri",
                "USER"
        );
        Client client4 = new Client(
                4,
                "Mouhib",
                "ruissi",
                "USER"
        );
        Client client5 = new Client(
                5,
                "Foued",
                "khalsi",
                "USER"
        );
        Client client6 = new Client(
                6,
                "Wassim",
                "trabelsi",
                "USER"
        );
        Client client7 = new Client(
                7,
                "Imen",
                "mzoughi",
                "USER"
        );
        Client client8 = new Client(
                8,
                "Farah",
                "sassi",
                "USER"
        );

        Achat achat1 = new Achat(
                1,
                1,
                1
        );

        Achat achat2 = new Achat(
                2,
                1,
                2
        );
        Achat achat3 = new Achat(
                3,
                1,
                5
        );
        Achat achat4 = new Achat(
                4,
                2,
                1
        );

        achatRepository.saveAll(List.of(achat1,achat2,achat3,achat4));


        clientRepository.saveAll(List.of(client1,client2,client3,client4,client5,client6,client7,client8));


        repository.saveAll(
                List.of(produit1, produit2, produit3, produit4,produit5,produit6,produit7,produit8,produit9,produit10,produit11,produit12,produit13,produit14,produit15,
                        produit16,produit17,produit18,produit19)
 );



};
}
}
