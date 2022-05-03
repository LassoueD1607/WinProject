package com.Lassoued.Facturation.Produit;


import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Table
@Entity(name = "Produit")
public class Produit {

    @Id
    @SequenceGenerator(
            name = "produit_sequence",
            sequenceName = "produit_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "produit_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )

    private Integer id;
    @Column(
            name = "marque",
            nullable = false,
            columnDefinition = "TEXT",
            unique = true
    )
    private String marque;
    @Column(
            name = "processeur",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String processeur;
    @Column(
            name = "ram",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String ram;
    @Column(
            name = "disqueDur",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String disqueDur;
    @Column(
            name = "carteGraphique",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String carteGraphique;
    @Column(
            name = "coleur",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String coleur;
    @Column(
            name = "prix",
            nullable = false
    )
    private Float prix;

    public Produit(Integer id, String marque, String processeur, String ram, String disqueDur, String carteGraphique, String coleur, Float prix) {
        this.id = id;
        this.marque = marque;
        this.processeur = processeur;
        this.ram = ram;
        this.disqueDur = disqueDur;
        this.carteGraphique = carteGraphique;
        this.coleur = coleur;
        this.prix = prix;
    }

    public Produit(String marque, String processeur, String ram, String disqueDur, String carteGraphique, String coleur, Float prix) {
        this.marque = marque;
        this.processeur = processeur;
        this.ram = ram;
        this.disqueDur = disqueDur;
        this.carteGraphique = carteGraphique;
        this.coleur = coleur;
        this.prix = prix;
    }

    public Produit() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getProcesseur() {
        return processeur;
    }

    public void setProcesseur(String processeur) {
        this.processeur = processeur;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getDisqueDur() {
        return disqueDur;
    }

    public void setDisqueDur(String disqueDur) {
        this.disqueDur = disqueDur;
    }

    public String getCarteGraphique() {
        return carteGraphique;
    }

    public void setCarteGraphique(String carteGraphique) {
        this.carteGraphique = carteGraphique;
    }

    public String getColeur() {
        return coleur;
    }

    public void setColeur(String coleur) {
        this.coleur = coleur;
    }

    public Float getPrix() {
        return prix;
    }

    public void setPrix(Float prix) {
        this.prix = prix;
    }

    @Override
    public String toString() {
        return "Produit{" +
                "id=" + id +
                ", marque='" + marque + '\'' +
                ", processeur='" + processeur + '\'' +
                ", ram='" + ram + '\'' +
                ", disqueDur='" + disqueDur + '\'' +
                ", carteGraphique='" + carteGraphique + '\'' +
                ", coleur='" + coleur + '\'' +
                ", prix=" + prix +
                '}';
    }
}



