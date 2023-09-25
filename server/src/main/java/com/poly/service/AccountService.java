package com.poly.service;

import com.poly.entity.Account;
import com.poly.repo.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountByUsernameAndPassword(String username, String password){
        return accountRepository.findAccountByUsernameAndPassword(username,password);
    }

    public Optional<Account> getProductById(Integer id){
        return accountRepository.findByProductId(id);
    }

    public Account create(Account entity){
        entity.setCreated_at(new Date());
        return accountRepository.save(entity);
    }

    public Account save(Account entity){
        entity.setUpdated_at(new Date());
        return accountRepository.save(entity);
    }

    public Account deleteAccoutById(Integer id){
        Account account = accountRepository.findByProductId(id).orElse(null);
        Date currenDate = new Date();
        account.setDeleted_at(currenDate);
        return accountRepository.save(account);
    }
}
