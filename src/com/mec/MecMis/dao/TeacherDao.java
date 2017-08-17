package com.mec.MecMis.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mec.MecMis.model.TeacherModel;

@Component
@Transactional
public class TeacherDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public TeacherModel getTeacherById(String id) {
		Session session = this.getSession();
		
		TeacherModel teacher = session.get(TeacherModel.class, id);
		
		return teacher;
	}
}
