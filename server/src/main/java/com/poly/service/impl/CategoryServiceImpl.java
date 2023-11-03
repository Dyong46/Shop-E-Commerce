package com.poly.service.impl;

import com.poly.entity.Category;
import com.poly.repo.CategoryRepository;
import com.poly.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return categoryRepository.getAllCategory();
    }

    @Override
    public Category getCategoryById(Integer id) {
        return categoryRepository.getCategoryById(id);
    }

    @Override
    public Category save(Category category) {
        Category createCategory = new Category();
        createCategory.setName(category.getName());
        createCategory.setDescription(category.getDescription());
        createCategory.setCreated_at(new Date());

        return categoryRepository.save(createCategory);
    }

    @Override
    public Category update(Category category, Integer id) {
        Category updateCategory = getCategoryById(id);
        if (updateCategory == null) {
            return null;
        }

        updateCategory.setId(id);
        updateCategory.setName(category.getName());
        updateCategory.setDescription(category.getDescription());
        updateCategory.setUpdated_at(new Date());

        return categoryRepository.save(updateCategory);
    }

    @Override
    public Category deleted(Integer id) {
        Category category = getCategoryById(id);
        if (category == null) {
            return null;
        }

        category.setDeleted_at(new Date());
        return categoryRepository.save(category);
    }
}
