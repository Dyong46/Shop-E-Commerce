package com.poly.controller;

import com.poly.entity.Product;
import com.poly.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class ProductController {

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
    public Product postSave(Product entity){
        return productService.create(entity);
    }

    @GetMapping("/api/products/findbyid")
    public Optional<Product> getProductById(@RequestParam("id") Integer id){
        return productService.getProductById(id);
    }

    @PutMapping("/api/products/update")
    public ResponseEntity<Product> getProductById(@RequestParam("id") Integer id,
                                  @ModelAttribute("product")Product productForm){
        Optional<Product> product_check =productService.getProductById(id);
        if(product_check.isPresent()){
            Product existingProduct = product_check.get();
            productService.save(productForm);
            return ResponseEntity.ok(existingProduct);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/api/products/delete")
    public Product deleteProduct(@RequestParam("id")Integer id){
        return productService.deleteProductById(id);
    }
}
