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
    @Query("SELECT o FROM Product o WHERE o.name_product LIKE '%' + :name_product + '%' AND o.deleted_at IS NULL")
    List<Product> findProductByName(String name_product);

    @Query("select o from  Product o where  o.id = :id AND o.deleted_at is null ")
    Optional<Product> findProductById(Integer id);

    @Query("select o from  Product o where  o.price = :price AND o.deleted_at is null ")
    Optional<Product> findProductByPrice(Long price);

    List<Product> findProductByPriceBetween(Integer priceMin, Integer priceMax);
    Product save(Product product);
}
