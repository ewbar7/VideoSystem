package com.mec.MecMis.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mec.MecMis.model.SubjectModel;

@Component
@Transactional
public class SubjectDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public SubjectDao() {
	}
	
	private Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public SubjectModel getSubjectInfoById(String id) {
		Session session = this.getSession();
		SubjectModel subject = session.get(SubjectModel.class, id);
		
		return subject;
	}
	
	public List<SubjectModel> getSubjectList() {
		Session session = this.getSession();
		
		@SuppressWarnings("unchecked")
		List<SubjectModel> list = session.createQuery("SELECT subjectModel FROM SubjectModel subjectModel").getResultList();
		return list;
	}
	
	public void setSUbjectList(List<SubjectModel> list) {
		SubjectModel subject;
		
		for(int i=0; i < list.size(); i++) {
			subject = this.getSubjectInfoById(list.get(i).getId());
			subject.setPath(list.get(i).getPath());
		}
		
	}
}
