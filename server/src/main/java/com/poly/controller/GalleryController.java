package com.poly.controller;

import com.poly.entity.Gallery;
import com.poly.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/galleries")
public class GalleryController {

    @Autowired
    GalleryService galleryService;

    @GetMapping("/by-product/{productId}")
    public List<Gallery> getGalleryByProductId(@PathVariable Integer productId) {
        return galleryService.getGalleryByProductId(productId);
    }
}
