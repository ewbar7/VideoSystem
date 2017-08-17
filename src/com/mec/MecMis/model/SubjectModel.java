package com.mec.MecMis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mec_subject_info")
public class SubjectModel {
	@Id
	@Column(name="id")
	private String id;
	@Column(name="name")
	private String name;
	@Column(name="path")
	private String path;
	@Column(name="status")
	private String status;

	public SubjectModel() {
	}
	
	public SubjectModel(String id, String path) {
		this.id = id;
		this.path = path;
	}

	public SubjectModel(String id, String name, String path, String status) {
		this.id = id;
		this.name = name;
		this.path = path;
		this.status = status;
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

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "[id=" + id + ", name=" + name + ", path=" + path + ", status=" + status + "]";
	}
}
