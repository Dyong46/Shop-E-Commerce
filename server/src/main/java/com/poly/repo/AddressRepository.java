package com.poly.repo;

import com.poly.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
    @Query("select o from Address o where o.account_id.deleted_at = null")
    List<Address> getAllAddress();

    @Query("select o from Address o where o.account_id.id = :id and o.account_id.deleted_at = null")
    List<Address> findAddressById(Integer id);

    Address save(Address address);

}
