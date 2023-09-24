package com.poly.service;

import com.poly.entity.Product;
import com.poly.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProduct(){
        return productRepository.getAllProduct();
    }
    public Optional<Product> getProductById(Integer id){
        return productRepository.findProductById(id);
    }
    public Optional<Product> getProductByName(String name){
        return productRepository.findProductByName(name);
    }
    public Product create(Product entity){
        return productRepository.save(entity);
    }
    public Optional<Product> findById(Integer id) {
    	return productRepository.getProductById(id);
    }
    public void delete(Product product) {
    	product.setDeleted_at(new Date());
    	productRepository.save(product);
    }
    
    public Product save(Product entity){
        return productRepository.save(entity);
    }
    public Product deleteProductById(Integer id){
        Product product = productRepository.findProductById(id).orElse(null);
        Date currenDate = new Date();
        product.setDeleted_at(currenDate);
        return productRepository.save(product);
    }
    
    
}
