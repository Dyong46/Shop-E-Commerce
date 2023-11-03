package com.poly.controller;

import com.poly.entity.Address;
import com.poly.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/address")
public class AddressController {
    @Autowired
    AddressService addressService;

    @GetMapping()
    public List<Address> getAllAddress() {
        return addressService.getAddressList();
    }

    @GetMapping("/findByUserId")
    public List<Address> getAddressById(@RequestParam("id") Integer id) {
        return addressService.getAddressById(id);
    }

    @PostMapping()
    public Address createAddress(@RequestBody Address address) {
        return addressService.create(address);
    }

    @PutMapping("/{id}")
    public Address update(@PathVariable Integer id, @RequestBody Address address) {
        return addressService.update(id, address);
    }

    @DeleteMapping("/{id}")
    public void deleteAddress(@PathVariable Integer id) {
        addressService.delete(id);
    }

    @PutMapping("/changeDefault/{id}")
    public Address changeDefault(@PathVariable Integer id) {
        return addressService.changeDefault(id);
    }

}
