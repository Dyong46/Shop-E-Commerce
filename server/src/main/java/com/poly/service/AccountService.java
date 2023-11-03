package com.poly.service;

import com.poly.entity.Account;

import java.util.List;

public interface AccountService {
    List<Account> getAll();

    Account getAccountByEmailAndPassword(String email, String password);

    Account register(String email, String username, String password);

    Account getAccountById(Integer id);

    Account create(Account entity);

    Account update(Account entity, Integer id);

    Account changePassword(Integer id, String password);

    Account deleteAccountById(Integer id);
}
