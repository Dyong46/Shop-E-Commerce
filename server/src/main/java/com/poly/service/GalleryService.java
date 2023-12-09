package com.poly.service;

import com.poly.entity.Gallery;

import java.util.List;

public interface GalleryService {
    List<Gallery> getGalleryByProductId(Integer id);
}
