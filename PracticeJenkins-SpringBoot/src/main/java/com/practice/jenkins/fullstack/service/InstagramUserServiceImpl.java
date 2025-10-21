package com.practice.jenkins.fullstack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.jenkins.fullstack.model.InstagramUser;
import com.practice.jenkins.fullstack.repository.InstagramUserRepository;

@Service
public class InstagramUserServiceImpl implements InstagramUserService {

    @Autowired
    private InstagramUserRepository repository;

    @Override
    public String addInstagramUser(InstagramUser iu) {
        repository.save(iu);
        return "INSTAGRAM USER ADDED SUCCESSFULLY";
    }

    @Override
    public String updateInstagramUser(InstagramUser iu) {
        Optional<InstagramUser> object = repository.findById(iu.getUserId());

        if (object.isPresent()) {
            InstagramUser user = object.get();
            user.setUserMobile(iu.getUserMobile());
            user.setUserAge(iu.getUserAge());
            user.setUserGender(iu.getUserGender());
            user.setUserBio(iu.getUserBio());

            repository.save(user);

            return "INSTAGRAM USER UPDATED SUCCESSFULLY";
        } else {
            return "USER ID NOT FOUND TO UPDATE!!";
        }
    }

    @Override
    public String deleteInstagramUser(String userId) {
        Optional<InstagramUser> object = repository.findById(userId);

        if (object.isPresent()) {
            repository.delete(object.get());
            return "INSTAGRAM USER DELETED SUCCESSFULLY";
        } else {
            return "USER ID NOT FOUND TO DELETE!!";
        }
    }

    @Override
    public List<InstagramUser> viewAllInstagramUsers() {
        return repository.findAll();
    }

    @Override
    public InstagramUser viewById(String userId) {
        return repository.findById(userId).orElse(null);
    }
}
