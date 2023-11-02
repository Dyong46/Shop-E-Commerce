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
    public Product getProductById(Integer id){
        return productRepository.findProductById(id);
    }
    public List<Product> findProductByPriceBetween(Integer priceMin, Integer priceMax){
        return productRepository.findProductByPriceBetween(priceMin,priceMax);
    }
    public List<Product> getProductByName(String name){
        return productRepository.findProductByName(name);
    }
    public Product create(Product entity){
        Date date = new Date();
        entity.setCreated_at(date);
        return productRepository.save(entity);
    }
    public Optional<Product> findById(Integer id) {
    	return productRepository.findById(id);
    }

    public void delete(Product product) {
    	product.setDeleted_at(new Date());
    	productRepository.save(product);
    }
    
    public Product update(Product entity,Integer id){
        Product product = getProductById(id);
        product.setName_product(entity.getName_product());
        product.setDescription(entity.getDescription());
        product.setPrice(entity.getPrice());
        product.setImg(entity.getImg());
        product.setQuantity(entity.getQuantity());
        product.setCategory_id(entity.getCategory_id());
        product.setUpdated_at(new Date());
        return productRepository.save(product);
    }
    public Product deleteProductById(Integer id){
        Product product = productRepository.findProductById(id);
        if(product.getId() != null){
            Date currenDate = new Date();
            product.setDeleted_at(currenDate);
            productRepository.save(product);
        }else {
            return null;
        }
        return product;
    }
    
    
}
