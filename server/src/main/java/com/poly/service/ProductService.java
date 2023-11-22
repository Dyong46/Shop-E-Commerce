package com.poly.service;

import com.poly.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProduct();

    Product getProductById(Integer id);

    List<Product> findProductByPriceBetween(Integer priceMin, Integer priceMax);

    List<Product> getProductByName(String name);

    Product create(Product entity);

    Optional<Product> findById(Integer id);

    void delete(Product product);

    Product update(Product entity, Integer id);

    Product deleteProductById(Integer id);

    Page<Product> getFilteredProducts(int page, int limit, String sortBy, String name, String category, Double priceMax, Double priceMin);
}
