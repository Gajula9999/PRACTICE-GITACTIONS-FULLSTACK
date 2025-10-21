package com.practice.jenkins.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.practice.jenkins.fullstack.model.InstagramUser;

public interface InstagramUserRepository extends JpaRepository<InstagramUser, String> {
	
	
}
