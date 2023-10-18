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

    @GetMapping("")
    public List<Address> getAllAddress() {
        return addressService.getAddressList();
    }

    @GetMapping("/findbyuserid")
    public List<Address> getAddressById(@RequestParam("id") Integer id) {
        return addressService.getAddressById(id);
    }

    @PostMapping("/save")
    public Address createAddress(@RequestBody Address address) {
        return addressService.create(address);
    }

    @PutMapping("/update")


}
