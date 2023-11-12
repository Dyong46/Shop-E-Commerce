package com.poly.service;

import com.poly.entity.Category;
import com.poly.entity.Product;
import org.springframework.data.domain.Page;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    Page<Product> getAllProduct(HashMap<String, String> multipleParam);

    List<Product> getAllProduct();

    Product getProductById(Integer id);

    List<Product> findProductByPriceBetween(Integer priceMin, Integer priceMax);

    List<Product> getProductByName(String name);

    Product create(Product entity);

    Optional<Product> findById(Integer id);

    void delete(Product product);

    Product update(Product entity, Integer id);

    Product deleteProductById(Integer id);

    List<Product> getProductsByCategory(Integer id);

}
