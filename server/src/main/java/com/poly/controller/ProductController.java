package com.poly.controller;

import com.poly.entity.Product;
import com.poly.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

//    @GetMapping()
//    public List<Product> getAll() {
//        return productService.getAllProduct();
//    }

    @GetMapping("/name")
    public List<Product> getProductByName(@RequestParam("name") String name) {
        return productService.getProductByName(name);
    }

    @PostMapping()
    public Product postSave(@RequestBody Product entity) {
        return productService.create(entity);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Integer id) {
        return productService.getProductById(id);
    }

    @GetMapping("/price")
    public List<Product> getProductByPrice(@RequestParam("min") Integer priceMin,
            @RequestParam("max") Integer priceMax) {
        return productService.findProductByPriceBetween(priceMin, priceMax);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable("id") Integer id,
            @RequestBody Product productForm) {
        Product product_check = productService.getProductById(id);
        if (product_check != null) {
            Product product = productService.update(productForm, id);
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public Product deleteProduct(@PathVariable("id") Integer id) {
        return productService.deleteProductById(id);
    }

    @GetMapping
    public Page<Product> getProducts(
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "limit", defaultValue = "20") int limit,
            @RequestParam(name = "sort_by", defaultValue = "createdAt") String sortBy,
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "price_max", required = false) Double priceMax,
            @RequestParam(name = "price_min", required = false) Double priceMin) {
        System.out.println(page +" "+ limit);
        return productService.getFilteredProducts(page, limit, sortBy, name, category, priceMax, priceMin);
    }
}
