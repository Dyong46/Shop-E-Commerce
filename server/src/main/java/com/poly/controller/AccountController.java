package com.poly.controller;

import com.poly.entity.Account;
import com.poly.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    /**
     * Get all account information
     * @return account
     */
    @GetMapping("/api/accounts")
    public List<Account> getAll() {
        return accountService.getAll();
    }
}
