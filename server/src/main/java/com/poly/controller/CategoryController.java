package com.poly.controller;

import com.poly.entity.Category;
import com.poly.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/api/category")
    public List<Category> getAllCategory(){
        return categoryService.getAllCatagory();
    }
    @GetMapping("/api/category/{id}") 
    public Category getCategoryById(@PathVariable Integer id) {
    	return categoryService.getCategoryById(id);
    }
    @PostMapping("/api/category") 
    public Category create(@RequestBody Category category) {
    	return categoryService.save(category);
    }
    @PutMapping("/api/category/{id}")
    public Category update(@RequestBody Category category,@PathVariable Integer id) {
    	return categoryService.update(category, id);
    }
    @DeleteMapping("/api/category/{id}")
    public Category delete(@PathVariable Integer id) {
    	return categoryService.deleted(id);
    }
    
}
