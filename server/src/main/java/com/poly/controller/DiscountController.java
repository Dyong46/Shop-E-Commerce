package com.poly.controller;

import com.poly.entity.Discount;
import com.poly.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/discounts")
public class DiscountController {

    @Autowired
    DiscountService discountService;

    @GetMapping()
    public List<Discount> getAll() {
        return discountService.getAllDiscount();
    }

    @GetMapping("/name")
    public Discount getDiscountByName(@RequestParam("name") String name) {
        return discountService.getDiscountByName(name);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Discount> getDiscountById(@PathVariable("id") Integer id) {
        Discount discount = discountService.getDiscountById(id);
        if (discount == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(discount);
    }

    @PostMapping()
    public Discount postSave(@RequestBody Discount entity) {
        return discountService.create(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Discount> updateDiscountById(@PathVariable("id") Integer id,
            @RequestBody Discount formDiscount) {
        Discount discountCheck = discountService.getDiscountById(id);
        if (discountCheck != null) {
            Discount discount = discountService.update(formDiscount, id);
            return ResponseEntity.ok(discount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
