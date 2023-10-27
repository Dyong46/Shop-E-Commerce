package com.poly.service;

import com.poly.entity.Category;
import com.poly.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;

	public List<Category> getAllCategory() {
		return categoryRepository.getAllCategory();
	}

	public Category getCategoryById(Integer id) {
		return categoryRepository.getCategoryById(id);
	}

	public Category save(Category category) {
		Category createCategory = new Category();
		createCategory.setName(category.getName());
		createCategory.setDescription(category.getDescription());
		createCategory.setCreated_at(new Date());

		return categoryRepository.save(createCategory);
	}

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

	public Category deleted(Integer id) {
    	Category category = getCategoryById(id);
    	if(category == null) {
    		return null;
    	}

    	category.setDeleted_at(new Date());
    	return categoryRepository.save(category);
	}
}
