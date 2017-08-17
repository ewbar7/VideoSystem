package com.mec.MecMis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mec_student_info")
public class StudentModel {
	@Id
	@Column(name="id")
	private String id;
	@Column(name="password")
	private String password;
	@Column(name="name")
	private String name;
	@Column(name="people_id")
	private String people_id;
	@Column(name="tel")
	private String tel;
	@Column(name="status")
	private String status;
	
	public StudentModel() {
	}

	public StudentModel(String id, String password, String name, String people_id, String tel, String status) {
		this.id = id;
		this.password = password;
		this.name = name;
		this.people_id = people_id;
		this.tel = tel;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPeople_id() {
		return people_id;
	}

	public void setPeople_id(String people_id) {
		this.people_id = people_id;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "StudentModel [id=" + id + ", password=" + password + ", name=" + name + ", people_id=" + people_id
				+ ", tel=" + tel + ", status=" + status + "]";
	}
}