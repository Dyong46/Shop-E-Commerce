package com.poly.repo;

import com.poly.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    @Query("select o from Account o where o.username = :username and o.password = :password AND o.deleted_at IS NULL")
    Optional<Account> findAccountByUsernameAndPassword(String username, String password);

    @Query("select o from  Account o where  o.id = :id AND o.deleted_at is null ")
    Optional<Account> findByProductId(Integer id);


}
