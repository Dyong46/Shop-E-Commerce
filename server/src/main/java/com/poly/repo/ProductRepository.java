package com.poly.repo;

import com.poly.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select o from Product o where o.deleted_at IS NULL")
    List<Product> getAllProduct();
    @Query("select o from  Product o where  o.name_product = :name_product AND o.deleted_at is null")
    Optional<Product> findProductByName(String name_product);

    @Query("select o from  Product o where  o.id = :id AND o.deleted_at is null ")
    Optional<Product> findProductById(Integer id);

    @Query("select o from  Product o where  o.price = :price AND o.deleted_at is null ")
    Optional<Product> findProductByPrice(Long price);

    @Query("select o from Product o where o.id = :id and o.deleted_at is null")
    Optional<Product> getProductById(@Param("id") Integer id);
    
    
    Product save(Product product);
}
