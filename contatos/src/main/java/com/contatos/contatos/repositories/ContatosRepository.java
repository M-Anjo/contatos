package com.contatos.contatos.repositories;

import com.contatos.contatos.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ContatosRepository extends JpaRepository<Contato, Long> {



}
