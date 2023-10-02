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

	public List<Category> getAllCatagory() {
		return categoryRepository.getAllCategory();
	}

	public Category getCategoryById(Integer id) {
		return categoryRepository.getCategoryById(id);
	}

	public Category save(Category category) {
		Category categr = new Category();
		categr.setName(category.getName());
		categr.setImg(category.getImg());
		categr.setDescription(category.getDescription());
		categr.setCreated_at(new Date());

		return categoryRepository.save(categr);
	}

	public Category update(Category category, Integer id) {
		Category updateCategory = new Category();
		if (getCategoryById(id) == null) {
			return updateCategory;
		}
		updateCategory.setId(id);
		updateCategory.setName(category.getName());
		updateCategory.setImg(category.getImg());
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
