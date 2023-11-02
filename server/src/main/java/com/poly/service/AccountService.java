package com.poly.service;

import com.poly.Utils.PasswordUtils;
import com.poly.entity.Account;
import com.poly.entity.ChangePasswordDTO;
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

    public Account getAccountByEmailAndPassword(String email, String password){
        return accountRepository.findAccountByEmailAndPassword(email,password);
    }
    
    public Account register(String email,String username ,String password) {
        Account account = new Account();
        account.setEmail(email);
        account.setUsername(username);
        String hashPassword = PasswordUtils.hashPassword(password);
        account.setPassword(hashPassword);

        Date date = new Date();
        account.setCreated_at(date);

        Role role = roleService.findById("user");
        account.setRole_id(role);
        return accountRepository.save(account);
    }

    public Account getAccountById(Integer id){
        return accountRepository.findByAccountId(id);
    }

    public Account create(Account entity){
        entity.setCreated_at(new Date());
        String password = entity.getPassword();
        String hashPassword = PasswordUtils.hashPassword(password);
        entity.setPassword(hashPassword);
        return accountRepository.save(entity);
    }

    public Account update(Account entity,Integer id){
        Account account = getAccountById(id);
        account.setUsername(entity.getUsername());
        account.setFullname(entity.getFullname());
        account.setPhone(entity.getPhone());
        account.setGender(entity.getGender());
        account.setDate_of_birth(entity.getDate_of_birth());
        account.setImg(entity.getImg());
        account.setUpdated_at(new Date());
        return accountRepository.save(account);
    }

    public Account changePassword(Integer id, String password){
        return accountRepository.findAccountByIdAndPassword(id,password);
    }

    public Account deleteAccoutById(Integer id){
        Account account = accountRepository.findByAccountId(id);
        Date currenDate = new Date();
        account.setDeleted_at(currenDate);
        return accountRepository.save(account);
    }
}
