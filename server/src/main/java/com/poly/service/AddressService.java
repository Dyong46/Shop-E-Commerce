package com.poly.service;

import com.poly.entity.Address;

import java.util.List;

public interface AddressService {
    List<Address> getAddressList();

    List<Address> getAddressById(Integer id);

    Address create(Address address);

    Address update(Integer id, Address address) throws Exception;

    void delete(Integer id) throws Exception;

    Boolean existsById(Integer id);

    Address changeDefault(Integer id, Integer idAddress) throws Exception;
}
