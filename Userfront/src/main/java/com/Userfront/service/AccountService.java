package com.Userfront.service;

import com.Userfront.domain.PrimaryAccount;
import com.Userfront.domain.SavingsAccount;

import java.security.Principal;

public interface AccountService {
	PrimaryAccount createPrimaryAccount();
    SavingsAccount createSavingsAccount();
    void deposit(String accountType, double amount, Principal principal);
    void withdraw(String accountType, double amount, Principal principal);
}
