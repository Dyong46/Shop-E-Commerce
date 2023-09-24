package com.poly.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.entity.Role;
import com.poly.repo.CategoryRepository;
import com.poly.repo.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	private RoleRepository roleRepository;
	
	public List<Role> findAll() {
		return roleRepository.findAll();
	}
	
	public Role findById(String id) {
		return roleRepository.findById(id).orElse(null);
	}
	
}
