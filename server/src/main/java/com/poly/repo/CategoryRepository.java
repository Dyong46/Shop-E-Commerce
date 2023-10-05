package com.poly.repo;

import com.poly.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	@Query("select o from Category o where o.deleted_at IS NULL")
	List<Category> getAllCategory();

	@Query("select o from Category o where o.id = :id and o.deleted_at is null")
	Category getCategoryById(Integer id);
	

}
