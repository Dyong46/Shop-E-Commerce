package com.poly.service.impl;

import com.poly.entity.Review;
import com.poly.repo.ReviewRepository;
import com.poly.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    @Override
    public Review create(Review entity) {
        Date date = new Date();
        entity.setCreated_at(date);
        return reviewRepository.save(entity);
    }

    @Override
    public List<Review> getReviewsByProductId(Integer id) {
        return reviewRepository.getReviewByProductId(id);
    }
}
