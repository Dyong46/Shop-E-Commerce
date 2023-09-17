package com.poly.repo;

import com.poly.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select o from Product o where o.deleted_at IS NULL")
    List<Product> getAllProduct();
    @Query("select o from  Product o where  o.name_product = :name_product")
    Optional<Product> findProductByName(String name_product);

    @Query("select o from  Product o where  o.id = :id")
    Optional<Product> findProductById(Integer id);

    @Query("select o from  Product o where  o.price = :price")
    Optional<Product> findProductByPrice(Long price);

    Product save(Product product);
}
