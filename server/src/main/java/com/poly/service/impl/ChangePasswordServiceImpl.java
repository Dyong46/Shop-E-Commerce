package com.poly.service.impl;

import com.poly.dto.ChangePassword;
import com.poly.entity.Account;
import com.poly.repo.AccountRepository;
import com.poly.service.ChangePasswordService;
import com.poly.utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChangePasswordServiceImpl implements ChangePasswordService {
    @Autowired
    AccountRepository accountRepository;

    @Override
    public boolean isValidPasswordChange(ChangePassword changePasswordDTO) {
        // Kiểm tra tính hợp lệ của thông tin đổi mật khẩu, ví dụ: kiểm tra xác thực oldPassword
        Integer id = changePasswordDTO.getId();
        String oldPassword = changePasswordDTO.getOldPassword();

        String hashPassword = PasswordUtils.hashPassword(oldPassword);
        Account account = accountRepository.findAccountByIdAndPassword(id,hashPassword);
        if(account == null){
            return false;
        }
        return true;
    }

    @Override
    public void changePassword(ChangePassword changePasswordDTO){
        Integer id = changePasswordDTO.getId();
        String newPassword = changePasswordDTO.getNewPassword();

        Account account = accountRepository.findByAccountId(id);

        String hashPassword = PasswordUtils.hashPassword(newPassword);
        account.setPassword(hashPassword);

        accountRepository.save(account);
    }
}
