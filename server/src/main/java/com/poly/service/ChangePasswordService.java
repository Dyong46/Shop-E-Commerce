package com.poly.service;

import com.poly.dto.ChangePassword;

public interface ChangePasswordService {
    boolean isValidPasswordChange(ChangePassword changePasswordDTO);

    void changePassword(ChangePassword changePasswordDTO);
}
