package com.Userfront.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Userfront.domain.PrimaryTransaction;

public interface PrimaryTransactionDao extends CrudRepository<PrimaryTransaction, Long> {

    List<PrimaryTransaction> findAll();
}
