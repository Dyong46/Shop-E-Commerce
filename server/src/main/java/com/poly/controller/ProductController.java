package com.poly.controller;

import com.poly.Utils.ResponseBodyServer;
import com.poly.entity.Product;
import com.poly.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping()
    public List<Product> getAll() {
        return productService.getAllProduct();
    }

    @GetMapping("/name")
    public List<Product> getProductByName(@RequestParam("name") String name) {
        return productService.getProductByName(name);
    }

    @GetMapping("/category")
    public List<Product> getProductsByCategory(@RequestParam("id") Integer id){
        return productService.getProductsByCategory(id);
    }

    @GetMapping("/ascending")
    public List<Product> sortProductPriceAscending(){
        List<Product> products = productService.getAllProduct();

        Collections.sort(products, Comparator.comparingInt(Product ::getPrice));
        return  products;
    }

    @GetMapping("/descending")
    public List<Product> sortProductPriceDescending(){
        List<Product> products = productService.getAllProduct();

        Collections.sort(products,Comparator.comparingInt(Product ::getPrice).reversed());
        return products;
    }

    @GetMapping("/date/ascending")
    public List<Product> sortProductCreateAtAscending(){
        List<Product> products = productService.getAllProduct();

        Collections.sort(products,Comparator.comparing(Product ::getCreated_at));
        return products;
    }

    @GetMapping("/date/descending")
    public List<Product> sortProductCreateAtDescending(){
        List<Product> products = productService.getAllProduct();

        Collections.sort(products,Comparator.comparing(Product ::getCreated_at).reversed());
        return products;
    }

    @GetMapping("/pageable")
    public ResponseEntity<?> pageableProduct(@RequestParam HashMap<String,String> multipleParam){
        ResponseBodyServer responseBodyServer;
        Page<Product> pageProducts = productService.getAllProduct(multipleParam);
        responseBodyServer = ResponseBodyServer.builder().statusCode(200).message("Successfully!").payload(pageProducts).build();
        return ResponseEntity.status(200).body(responseBodyServer);
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
}
