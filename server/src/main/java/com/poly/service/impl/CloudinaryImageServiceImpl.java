package com.poly.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.poly.service.CloudinaryImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryImageServiceImpl implements CloudinaryImageService {

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public Map upload(MultipartFile file) {
        try {
            Map params = ObjectUtils.asMap(
                    "folder", "myfolder/avatar"
            );
            Map data = cloudinary.uploader().upload(file.getBytes(), params);
            return data;
        }catch (IOException e) {
            throw new RuntimeException("Image upload fail !!");
        }
    }
}
