package com.mec.MecMis.model;

public class UserModel {
	private String id;
	private String password;
	private String status;
	
	public UserModel() {
		// TODO Auto-generated constructor stub
	}

	public UserModel(String id, String password, String status) {
		this.id = id;
		this.password = password;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "UserModel [id=" + id + ", password=" + password + ", status=" + status + "]";
	}
}
