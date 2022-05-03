package com.Lassoued.Facturation.Achat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchatRepository extends JpaRepository<Achat,Integer> {
}
