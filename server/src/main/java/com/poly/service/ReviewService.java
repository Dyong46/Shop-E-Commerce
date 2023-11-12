package com.poly.service;

import com.poly.entity.Review;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ReviewService {

    List<Review> getAll();
    Review create(Review entity);
}
