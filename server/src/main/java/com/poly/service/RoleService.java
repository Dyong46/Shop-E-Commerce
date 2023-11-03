package com.poly.service;

import java.util.List;
import com.poly.entity.Role;

public interface RoleService {
	List<Role> findAll();

	Role findById(String id);
}
