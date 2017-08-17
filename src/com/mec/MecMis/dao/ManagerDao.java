package com.mec.MecMis.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mec.MecMis.model.ManagerModel;

@Component
@Transactional
public class ManagerDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public ManagerDao() {
	}
	
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public ManagerModel getManagerById(String id) {
		Session session = this.getSession();
		ManagerModel manager = session.get(ManagerModel.class, id);
		
		return manager;
	}
}
