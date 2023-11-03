package com.poly.service.impl;

import com.poly.entity.Category;
import com.poly.repo.CategoryRepository;
import com.poly.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory(){
        return categoryRepository.getAllCategory();
    }
}
