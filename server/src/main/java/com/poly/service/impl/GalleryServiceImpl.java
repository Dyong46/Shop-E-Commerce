package com.poly.service.impl;

import com.poly.entity.Gallery;
import com.poly.repo.GalleryRepository;
import com.poly.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryServiceImpl implements GalleryService {
    @Autowired
    GalleryRepository galleryRepository;

    @Override
    public List<Gallery> getGalleryByProductId(Integer id) {
        return galleryRepository.getGalleriesByProduct_id(id);
    }
}
