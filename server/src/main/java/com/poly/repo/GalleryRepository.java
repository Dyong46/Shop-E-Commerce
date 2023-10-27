package com.poly.repo;

import com.poly.entity.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, Integer> {

    @Query("select o from Gallery o where o.product_id.id = :id")
    List<Gallery> getGalleriesByProduct_id(Integer id);
}
