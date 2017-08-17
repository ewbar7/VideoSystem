package com.mec.MecMis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mec.MecMis.dao.SubjectDao;
import com.mec.MecMis.model.SubjectModel;

@Service
public class SubjectService{
	@Autowired
	private SubjectDao subjectDao;
	
	public SubjectService() {

	}
	
	public List<SubjectModel> getList() {
		List<SubjectModel> list = subjectDao.getSubjectList();
		
		return list;
	}
	
	public void setList(List<SubjectModel> list) {
		subjectDao.setSUbjectList(list);
	}
}
