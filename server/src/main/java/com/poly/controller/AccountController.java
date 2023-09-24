package com.poly.controller;

import com.poly.Utils.CookieUtils;
import com.poly.Utils.PasswordUtils;
import com.poly.Utils.SessionUtils;
import com.poly.entity.Account;
import com.poly.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    CookieUtils cookieUtils;

    @Autowired
    SessionUtils sessionUtils;

    /**
     * Get all account information
     * @return account
     */
    @GetMapping("/api/accounts")
    public List<Account> getAll() {
        return accountService.getAll(); 
    }
    @PostMapping("/api/login")
    public String postLogin (Model model,
                             @RequestParam("username")String username,
                             @RequestParam("password")String password,
                             @RequestParam(value = "remember",required = false)Boolean remember){
        // mã hóa mật khẩu tại đây vì mật khẩu hiện tại trong database chưa được mã hóa nên chưa thể sử dụng
        //String hashPassword = PasswordUtils.hashPassword(password);

        Optional<Account> accountCheck = accountService.getAccountByUsernameAndPassword(username,password);
        if(accountCheck.isPresent()){
            if (remember !=null){
                cookieUtils.add("username",username,1);
                cookieUtils.add("password",password,1);
                sessionUtils.set("accountLogin",accountCheck.get());
                cookieUtils.add("remember",Boolean.toString(remember),1);
                cookieUtils.add("checkID",accountCheck.get().getId().toString(),1);
                model.addAttribute("message","Login Success");
                return "login";
            }else {
                sessionUtils.set("accountLogin",accountCheck.get());
                model.addAttribute("message","Login Success");
            }
        }else {
            model.addAttribute("message","Login Failed");
            return "failed";
        }
        return "failed";
    }
    
    @PostMapping("/api/register") 
    public Account postRegister(@RequestParam("email") String email,
    							@RequestParam("password") String password) {
    	Account accountCheck = accountService.register(email, password);
    	if(accountCheck == null) {
    		return null;
    	}else {
    		return accountCheck;
    	}
    }
}
