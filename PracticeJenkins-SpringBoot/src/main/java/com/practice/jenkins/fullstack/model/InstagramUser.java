package com.practice.jenkins.fullstack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class InstagramUser {

    @Id
    private String userId;

    private String userMobile;
    private int userAge;
    private String userGender;
    private String userBio;
	@Override
	public String toString() {
		return "InstagramUser [userId=" + userId + ", userMobile=" + userMobile + ", userAge=" + userAge
				+ ", userGender=" + userGender + ", userBio=" + userBio + "]";
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserMobile() {
		return userMobile;
	}
	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}
	public int getUserAge() {
		return userAge;
	}
	public void setUserAge(int userAge) {
		this.userAge = userAge;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserBio() {
		return userBio;
	}
	public void setUserBio(String userBio) {
		this.userBio = userBio;
	}

}
