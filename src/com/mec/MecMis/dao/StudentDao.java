package com.mec.MecMis.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mec.MecMis.model.StudentModel;

@Component
@Transactional
public class StudentDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public StudentDao() {
	}
	
	private Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public StudentModel getStudentById(String id) {
		Session session = this.getSession();
		
		StudentModel student = session.get(StudentModel.class, id);
		
		return student;
	}
}
