package com.poly.service;

import com.poly.entity.Review;
import com.poly.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public List<Review> getReviewsByProductId(Integer id) {
        return reviewRepository.getReviewByProductId(id);
    }
}
