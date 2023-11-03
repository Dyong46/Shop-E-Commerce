package com.poly.service;

import com.poly.entity.Category;

import java.util.List;

public interface CategoryService {
	List<Category> getAllCategory();

	Category getCategoryById(Integer id);

	Category save(Category category);

	Category update(Category category, Integer id);

	Category deleted(Integer id);
}
