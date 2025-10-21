package com.practice.jenkins.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practice.jenkins.fullstack.model.InstagramUser;
import com.practice.jenkins.fullstack.service.InstagramUserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/instagramuser")
public class InstagramUserController {

    @Autowired
    private InstagramUserService service;

    @GetMapping("/")
    public String home() {
        return "Spring Boot Rest JPA Demo for Instagram User";
    }

    @GetMapping("/viewall")
    public List<InstagramUser> viewAllUsers() {
        return service.viewAllInstagramUsers();
    }

    @PostMapping("/add")
    public String addUser(@RequestBody InstagramUser iu) {
        return service.addInstagramUser(iu);
    }

    @PutMapping("/update")
    public String updateUser(@RequestBody InstagramUser iu) {
        return service.updateInstagramUser(iu);
    }

    @DeleteMapping("/delete/{userId}")
    public String deleteUser(@PathVariable String userId) {
        return service.deleteInstagramUser(userId);
    }

    @GetMapping("/display")
    public ResponseEntity<?> displayUserById(@RequestParam String userId) {
        InstagramUser iu = service.viewById(userId);

        if (iu != null) {
            return ResponseEntity.ok(iu);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Instagram User ID Not Found");
        }
    }
}
