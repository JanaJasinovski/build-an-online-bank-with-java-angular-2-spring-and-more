package com.Userfront.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Userfront.domain.SavingsTransaction;

public interface SavingsTransactionDao extends CrudRepository<SavingsTransaction, Long> {

    List<SavingsTransaction> findAll();
}

