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
@RequestMapping("/api/product-management")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public List<Product> getAll(){
        return productService.getAllProduct();
    }

    @GetMapping("/find-name")
    public List<Product> getProductByName( @RequestParam("name") String name){
        return productService.getProductByName(name);
    }
    @PostMapping("/product")
    public Product postSave(@RequestBody Product entity){
        return productService.create(entity);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Integer id){
        return productService.getProductById(id);
    }

    @GetMapping("/find-price")
    public List<Product> getProductByPrice(@RequestParam("min")Integer priceMin, @RequestParam("max")Integer priceMax){
        return productService.findProductByPriceBetween(priceMin,priceMax);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Integer id,
                                  @RequestBody Product productForm){
        Product product_check =productService.getProductById(id);
        if(product_check != null){
            productService.update(productForm,id);
            return ResponseEntity.ok(productForm);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public Product deleteProduct(@PathVariable("id")Integer id){
        return productService.deleteProductById(id);
    }
}
