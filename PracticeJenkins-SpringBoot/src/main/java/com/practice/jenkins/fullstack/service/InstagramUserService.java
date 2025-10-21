package com.practice.jenkins.fullstack.service;

import java.util.List;

import com.practice.jenkins.fullstack.model.InstagramUser;

public interface InstagramUserService {
	
		public String addInstagramUser(InstagramUser iu);
	    public String updateInstagramUser(InstagramUser iu);
	    public String deleteInstagramUser(String userId);
	    public List<InstagramUser> viewAllInstagramUsers();
	    public InstagramUser viewById(String userId);
	

}
