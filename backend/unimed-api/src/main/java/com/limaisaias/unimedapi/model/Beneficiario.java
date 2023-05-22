package com.limaisaias.unimedapi.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Beneficiario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String cpf;

    private String email;

    private int idade;

    @ManyToOne
    @JoinColumn(name = "plano_id", nullable = false)
    private Plano plano;

}
