package com.Lassoued.Facturation.Client;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;
@Table
@Entity(name = "Client")
public class Client {

    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "client_sequence"
    )
    @Column(
            name = "idClient",
            updatable = false
    )

    private Integer idClient;

    @Column(
            name = "username",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String username;

    @Column(
            name = "password",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String password;

    @Column(
            name = "roles",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String roles;

    public Client(Integer idClient, String username, String password, String roles) {
        this.idClient = idClient;
        this.username = username;
        this.password = password;
        this.roles = roles;

    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public Client(String username, String password) {
        this.username = username;
        this.password = password;
        this.roles = roles;


    }

    public Client() {
    }

    public Integer getIdClient() {
        return idClient;
    }

    public void setIdClient(Integer idClient) {
        this.idClient = idClient;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Client{" +
                "idClient=" + idClient +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
                '}';
    }
}




