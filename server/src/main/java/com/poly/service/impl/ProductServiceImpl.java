package com.poly.service.impl;

import com.poly.entity.Product;
import com.poly.repo.ProductRepository;
import com.poly.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getAllProduct() {
        return productRepository.getAllProduct();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findProductById(id);
    }

    @Override
    public List<Product> findProductByPriceBetween(Integer priceMin, Integer priceMax) {
        return productRepository.findProductByPriceBetween(priceMin, priceMax);
    }

    @Override
    public List<Product> getProductByName(String name) {
        return productRepository.findProductByName(name);
    }

    @Override
    public Product create(Product entity) {
        Date date = new Date();
        entity.setCreated_at(date);
        return productRepository.save(entity);
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public void delete(Product product) {
        product.setDeleted_at(new Date());
        productRepository.save(product);
    }

    @Override
    public Product update(Product entity, Integer id) {
        Product product = getProductById(id);
        product.setName_product(entity.getName_product());
        product.setDescription(entity.getDescription());
        product.setPrice(entity.getPrice());
        product.setImg(entity.getImg());
        product.setQuantity(entity.getQuantity());
        product.setCategory_id(entity.getCategory_id());
        product.setUpdated_at(new Date());
        return productRepository.save(product);
    }

    @Override
    public Product deleteProductById(Integer id) {
        Product product = productRepository.findProductById(id);
        if (product.getId() != null) {
            Date currenDate = new Date();
            product.setDeleted_at(currenDate);
            productRepository.save(product);
        } else {
            return null;
        }
        return product;
    }

    @Override
    public Page<Product> getFilteredProducts(int page, int limit, String sortBy, String name, String category, Double priceMax, Double priceMin) {
//        List<Product> products = productRepository.getAllProduct();
//
//        products = filterByName(products, name);
//        products = filterByCategory(products, category);
//        products = filterByPriceRange(products, priceMin, priceMax);

        PageRequest pageRequest = createPageRequest(page, limit, sortBy);

        // Use the repository to fetch products with applied filters and pagination
        Page<Product> productPage = productRepository.findFilteredProducts(name, category, priceMin, priceMax, pageRequest);

        return productPage;
    }

    private List<Product> filterByName(List<Product> products, String name) {
        if (name == null || name.isEmpty()) {
            return products;
        }

        return products.stream()
                .filter(product -> product.getName_product().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }

    private List<Product> filterByCategory(List<Product> products, String category) {
        if (category == null || category.isEmpty()) {
            return products;
        }

        return products.stream()
                .filter(product -> product.getCategory_id() != null && product.getCategory_id().getName().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    private PageRequest createPageRequest(int page, int limit, String sortBy) {
        Sort sort;
        switch (sortBy) {
            case "price_asc":
                sort = Sort.by(Sort.Direction.ASC, "price");
                break;
            case "price_desc":
                sort = Sort.by(Sort.Direction.DESC, "price");
                break;
            case "createdAt":
                sort = Sort.by(Sort.Direction.ASC, "created_at");
                break;
            case "view":
                sort = Sort.by(Sort.Direction.DESC, "created_at");
                break;
            case "sold":
                sort = Sort.by(Sort.Direction.DESC, "quantity");
                break;
            default:
                sort = Sort.by(Sort.Direction.ASC, "id");
        }

        return PageRequest.of(page - 1, limit, sort);
    }

    public List<Product> filterByPriceRange(List<Product> products, Double priceMin, Double priceMax) {
        if (priceMin == null && priceMax == null) {
            return products;
        }

        return products.stream()
                .filter(product -> {
                    boolean greaterThanMin = priceMin == null || product.getPrice() >= priceMin;
                    boolean lessThanMax = priceMax == null || product.getPrice() <= priceMax;
                    return greaterThanMin && lessThanMax;
                })
                .collect(Collectors.toList());
    }
}
