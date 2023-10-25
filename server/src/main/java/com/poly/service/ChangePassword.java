package com.poly.service;

import com.poly.Utils.PasswordUtils;
import com.poly.entity.Account;
import com.poly.entity.ChangePasswordDTO;
import com.poly.repo.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChangePassword {

    @Autowired
    AccountRepository accountRepository;

    public boolean isValidPasswordChange(ChangePasswordDTO changePasswordDTO) {
        // Kiểm tra tính hợp lệ của thông tin đổi mật khẩu, ví dụ: kiểm tra xác thực oldPassword
        Integer id = changePasswordDTO.getId();
        String oldPassword = changePasswordDTO.getOldPassword();
        String newPassword = changePasswordDTO.getNewPassword();

        String hashPassword = PasswordUtils.hashPassword(oldPassword);
        Account account = accountRepository.findAccountByIdAndPassword(id,hashPassword);
        if(account == null){
            return false;
        }
        return true;
    }

    public void changePassword(ChangePasswordDTO changePasswordDTO){
        Integer id = changePasswordDTO.getId();
        String newPassword = changePasswordDTO.getNewPassword();

        Account account = accountRepository.findByAccountId(id);

        String hashPassword = PasswordUtils.hashPassword(newPassword);
        account.setPassword(hashPassword);

        accountRepository.save(account);
    }
}
