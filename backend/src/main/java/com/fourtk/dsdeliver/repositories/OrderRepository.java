package com.fourtk.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fourtk.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	

}
