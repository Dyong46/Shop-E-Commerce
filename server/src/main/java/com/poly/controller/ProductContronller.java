package com.poly.controller;

import com.poly.entity.Product;
import com.poly.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class ProductContronller {

    @Autowired
    ProductService productService;

    @GetMapping("/api/products")
    public List<Product> getAll(){
        return productService.getAllProduct();
    }

    @GetMapping("/api/products/findbyname")
    public Optional<Product> getProductByName( @RequestParam("name") String name){
        return productService.getProductByName(name);
    }
    @PostMapping("/api/products/save")
    public Product getSave(Product entity){
        return productService.create(entity);
    }
}
