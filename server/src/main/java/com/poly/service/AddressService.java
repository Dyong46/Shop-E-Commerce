package com.poly.service;

import com.poly.entity.Address;
import com.poly.repo.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    AddressRepository addressRepository;

    public List<Address> getAddressList() {
        return addressRepository.findAll();
    }

    public List<Address> getAddressById(Integer id) {
        return addressRepository.findAddressById(id);
    }

    public Address create(Address address) {
        return addressRepository.save(address);
    }

    public Address update(Address address){
        return addressRepository.save(address);
    }

}
