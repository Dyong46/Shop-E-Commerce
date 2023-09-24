package com.poly.service;

import com.poly.Utils.PasswordUtils;
import com.poly.entity.Account;
import com.poly.entity.Role;
import com.poly.repo.AccountRepository;
import com.poly.repo.RoleRepository;

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
    
    @Autowired
    RoleService roleService;

    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountByUsernameAndPassword(String username, String password){
        return accountRepository.findAccountByUsernameAndPassword(username,password);
    }
    
    public Account register(String email, String password) {
		Account account = new Account();
		account.setEmail(email);
        String hashPassword = PasswordUtils.hashPassword(password);
		account.setPassword(hashPassword);
		account.setUsername(email);
		
		Date date = new Date();
		account.setCreated_at(date);
		
		Role role = roleService.findById("user");
		account.setRole_id(role);
		return accountRepository.save(account);

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
