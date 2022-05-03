package com.Lassoued.Facturation.Achat;

import javax.persistence.*;

import java.time.LocalDate;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table
public class Achat {
    @Id
    @SequenceGenerator(
            name = "achat_sequence",
            sequenceName = "achat_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "achat_sequence"
    )
    @Column(
            name = "idAchat",
            updatable = false
    )

    private Integer idAchat;
    @Column(
            name = "idClient",
            nullable = false
    )
    private Integer idClient;
    @Column(
            name = "idProduit",
            nullable = false

    )
    private Integer idProduit;


    public Achat(Integer idAchat, Integer idClient, Integer idProduit) {
        this.idAchat = idAchat;
        this.idClient = idClient;
        this.idProduit = idProduit;
    }

    public Achat(Integer idClient, Integer idProduit) {
        this.idClient = idClient;
        this.idProduit = idProduit;
    }

    public Achat() {
    }

    public Integer getIdAchat() {
        return idAchat;
    }

    public void setIdAchat(Integer idAchat) {
        this.idAchat = idAchat;
    }

    public Integer getIdClient() {
        return idClient;
    }

    public void setIdClient(Integer idClient) {
        this.idClient = idClient;
    }

    public Integer getIdProduit() {
        return idProduit;
    }

    public void setIdProduit(Integer idProduit) {
        this.idProduit = idProduit;
    }

    @Override
    public String toString() {
        return "Achat{" +
                "idAchat=" + idAchat +
                ", idClient=" + idClient +
                ", idProduit=" + idProduit +
                '}';
    }
}



