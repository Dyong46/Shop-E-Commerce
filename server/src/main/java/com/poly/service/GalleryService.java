package com.poly.service;

import com.poly.entity.Gallery;
import com.poly.repo.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {

    @Autowired
    GalleryRepository galleryRepository;

    public List<Gallery> getGalleryByProductId(Integer id) {
        return galleryRepository.getGalleriesByProduct_id(id);
    }
}
