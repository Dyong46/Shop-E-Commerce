package com.poly.service;

import com.poly.entity.Review;
import java.util.List;

public interface ReviewService {
    List<Review> getAll();
    Review create(Review entity);
    List<Review> getReviewsByProductId(Integer id);
}
