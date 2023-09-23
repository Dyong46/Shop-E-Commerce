package com.poly.service;

import com.poly.entity.Category;
import com.poly.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAllCatagory(){
        return categoryRepository.getAllCategory();
    }
}
