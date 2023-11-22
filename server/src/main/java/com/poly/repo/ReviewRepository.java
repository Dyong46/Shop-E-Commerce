package com.poly.repo;

import com.poly.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    @Query("select o from Review o where o.product_id.id = :id")
    List<Review> getReviewByProductId(Integer id);
}
