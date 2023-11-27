package com.poly.controller;

import com.poly.entity.Review;
import com.poly.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    @GetMapping()
    public List<Review> getAllReview(){
        return reviewService.getAll();
    }

    @PostMapping()
    public Review postReview(@RequestBody Review review){
        return reviewService.create(review);
    }

    @GetMapping("/{productId}")
    public List<Review> getReviewById(@PathVariable("productId") Integer productId) {
        return reviewService.getReviewsByProductId(productId);
    }
}
