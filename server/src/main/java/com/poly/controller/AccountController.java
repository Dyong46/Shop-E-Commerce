package com.poly.controller;

import com.poly.dto.ChangePassword;
import com.poly.entity.Account;
import com.poly.service.AccountService;
import com.poly.service.ChangePasswordService;
import com.poly.service.EmailService;

import com.poly.utils.CookieUtils;
import com.poly.utils.PasswordUtils;
import com.poly.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import jakarta.mail.MessagingException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    CookieUtils cookieUtils;

    @Autowired
    SessionUtils sessionUtils;

    @Autowired
    ChangePasswordService changePasswordService;

    @Autowired
    private EmailService emailService;

    @GetMapping()
    public List<Account> getAll() {
        return accountService.getAll();
    }

    @PostMapping("/login")
    public Account login(Model model,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value = "remember", required = false) Boolean remember) {
        // mã hóa mật khẩu tại đây vì mật khẩu hiện tại trong database chưa được mã hóa
        // nên chưa thể sử dụng
        String hashPassword = PasswordUtils.hashPassword(password);

        Account accountCheck = accountService.getAccountByEmailAndPassword(email, hashPassword);
        if (accountCheck != null) {
            if (remember != null) {
                cookieUtils.add("email", email, 1);
                cookieUtils.add("password", hashPassword, 1);
                sessionUtils.set("accountLogin", accountCheck);
                cookieUtils.add("remember", Boolean.toString(remember), 1);
                cookieUtils.add("checkID", accountCheck.getId().toString(), 1);
                model.addAttribute("message", "Login Success");
                System.out.println("login thành công");
                return accountCheck;
            } else {
                sessionUtils.set("accountLogin", accountCheck);
                System.out.println("login thành công");
                model.addAttribute("message", "Login Success");
                return accountCheck;
            }
        } else {
            model.addAttribute("message", "Login Failed");
            System.out.println("login failed");
            return null;
        }
    }

    @PostMapping("/register")
    public Account postRegister(@RequestParam("email") String email,
            @RequestParam("username") String username,
            @RequestParam("password") String password)throws MessagingException {
        Account accountCheck = accountService.register(email, username, password);
        if (accountCheck == null) {
            return null;
        } else {
            String subject = "Đăng ký tài khoản thành công";
            String content = "Chào " + username +
                    " Xin chân thành cảm ơn bạn đã đăng ký tài khoản tại cửa hàng của chúng tôi! Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng của chúng tôi.\n"
                    +
                    "\n" +
                    "Tài khoản của bạn đã được tạo thành công, và bây giờ bạn có thể truy cập vào các dịch vụ và tiện ích đặc biệt dành riêng cho thành viên của chúng tôi. Chúng tôi hy vọng rằng bạn sẽ tận hưởng trải nghiệm mua sắm và các ưu đãi độc quyền mà chúng tôi mang lại.\n"
                    +
                    "\n" +
                    "Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc cần hỗ trợ gì, hãy xin vui lòng liên hệ với chúng tôi. Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng giúp bạn.\n"
                    +
                    "\n" +
                    "Một lần nữa, xin chân thành cảm ơn bạn đã đăng ký tài khoản tại cửa hàng của chúng tôi. Rất mong được phục vụ bạn trong tương lai và hy vọng bạn có những trải nghiệm thú vị và đáng nhớ tại cửa hàng của chúng tôi.\n"
                    +
                    "\n" +
                    "Trân trọng,";
                emailService.sendEmail(subject,email,content);
            System.out.println("success mail");
            return accountCheck;
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable("id") Integer id) {
        Account account = accountService.getAccountById(id);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateProfile(@PathVariable("id") Integer id,
            @RequestBody Account formAccount) {
        Account accountCheck = accountService.getAccountById(id);
        if (accountCheck == null) {
            return ResponseEntity.notFound().build();
        }
        Account account = accountService.update(formAccount, id);
        return ResponseEntity.ok(account);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Account> deleteAccount(@PathVariable("id") Integer id) {
        Account accountCheck = accountService.getAccountById(id);
        if (accountCheck == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(accountService.deleteAccountById(id));
    }

    @PostMapping("/change-password")
    public Boolean changePassword(@RequestBody ChangePassword changePasswordDTO) {
        if (!changePasswordService.isValidPasswordChange(changePasswordDTO)) {
            return false;
        }
        changePasswordService.changePassword(changePasswordDTO);
        return true;
    }
}
