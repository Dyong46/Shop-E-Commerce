package com.poly.controller;

import com.poly.Utils.CookieUtils;
import com.poly.Utils.PasswordUtils;
import com.poly.Utils.SessionUtils;
import com.poly.entity.Account;
import com.poly.entity.ChangePasswordDTO;
import com.poly.service.AccountService;
import com.poly.service.ChangePassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @Autowired
    ChangePassword changePassword;

    /**
     * Get all account information
     * @return account
     */
    @GetMapping("/api/accounts")
    public List<Account> getAll() {
        return accountService.getAll(); 
    }
    @PostMapping("/api/login")
    public Account postLogin (Model model,
                             @RequestParam("email")String email,
                             @RequestParam("password")String password,
                             @RequestParam(value = "remember",required = false)Boolean remember){
        // mã hóa mật khẩu tại đây vì mật khẩu hiện tại trong database chưa được mã hóa nên chưa thể sử dụng
        String hashPassword = PasswordUtils.hashPassword(password);

        Account accountCheck = accountService.getAccountByEmailAndPassword(email,hashPassword);
        if(accountCheck != null){
            if (remember !=null){
                cookieUtils.add("email",email,1);
                cookieUtils.add("password",hashPassword,1);
                sessionUtils.set("accountLogin",accountCheck);
                cookieUtils.add("remember",Boolean.toString(remember),1);
                cookieUtils.add("checkID",accountCheck.getId().toString(),1);
                model.addAttribute("message","Login Success");
                System.out.println("login thành công");
                return accountCheck;
            }else {
                sessionUtils.set("accountLogin",accountCheck);
                System.out.println("login thành công");
                model.addAttribute("message","Login Success");
                return accountCheck;
            }
        }else {
            model.addAttribute("message","Login Failed");
            System.out.println("login failed");
            return null;
        }
    }
    
    @PostMapping("/api/register") 
    public Account postRegister(@RequestParam("email") String email,
    							@RequestParam("password") String password) {
        Account accountCheck = accountService.register(email, password);
        if (accountCheck == null) {
            return null;
        } else {
            return accountCheck;
        }
    }

    @GetMapping("/api/accounts/findbyid")
    public Account getAccountById(@RequestParam("id")Integer id){
        return accountService.getAccountById(id);
    }
    @PostMapping("/api/accounts/save")
    public Account postSavaAccount(@RequestBody Account entity){
        return accountService.create(entity);
    }
    @PutMapping("/api/accounts/update")
    public ResponseEntity<Account> updateAccountById(@RequestParam("id")Integer id,
                                                     @RequestBody Account formAccount){
        Account accountCheck = accountService.getAccountById(id);
        if(accountCheck != null){
            Account existingAccount = accountCheck;
            existingAccount.setUsername(formAccount.getUsername());
            existingAccount.setFullname(formAccount.getFullname());
            existingAccount.setPhone(formAccount.getPhone());
            existingAccount.setGender(formAccount.getGender());
            existingAccount.setDate_of_birth(formAccount.getDate_of_birth());
            existingAccount.setImg(formAccount.getImg());
            existingAccount.setUpdated_at(new Date());
            accountService.update(existingAccount);
            return ResponseEntity.ok(existingAccount);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/api/accounts/delete")
    public Account deleteAccount(@RequestParam("id")Integer id){
        return accountService.deleteAccoutById(id);
    }

    @PostMapping("/api/accounts/change")
    public Boolean changePassword(@RequestBody ChangePasswordDTO changePasswordDTO){
        if(!changePassword.isValidPasswordChange(changePasswordDTO)){
            return false;
        }
        changePassword.changePassword(changePasswordDTO);
        return true;
    }
}
