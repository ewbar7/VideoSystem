package com.mec.MecMis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mec_manage_info")
public class ManagerModel {
	@Id
	@Column(name="id")
	private String id;
	@Column(name="name")
	private String name;
	@Column(name="password")
	private String password;
	
	public ManagerModel() {
	
	}
	
	public ManagerModel(String id, String name, String password) {
		this.id = id;
		this.name = name;
		this.password = password;
	}

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "ManagerModel [id=" + id + ", name=" + name + ", password=" + password + "]";
	}
}
