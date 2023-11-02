package com.poly.controller;

import com.poly.entity.Category;
import com.poly.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/category-management")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("")
    public List<Category> getAllCategory(){
        return categoryService.getAllCatagory();
    }
}
