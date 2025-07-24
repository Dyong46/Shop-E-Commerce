package com.poly.controller;

import com.poly.entity.Category;
import com.poly.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping()
    public ResponseEntity<List<Category>> getAllCategory() {
        try {
            return ResponseEntity.ok(categoryService.getAllCategory());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Integer id) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            Category category = categoryService.getCategoryById(id);
            return category != null ? ResponseEntity.ok(category) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping()
    public ResponseEntity<Category> create(@Valid @RequestBody Category category) {
        try {
            return ResponseEntity.ok(categoryService.save(category));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> update(@Valid @RequestBody Category category, @PathVariable Integer id) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity.ok(categoryService.update(category, id));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Category> delete(@PathVariable Integer id) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity.ok(categoryService.deleted(id));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
