package com.mec.MecMis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mec.MecMis.dao.StudentDao;
import com.mec.MecMis.model.StudentModel;
import com.mec.MecMis.model.UserModel;

@Service
public class StudentService implements IUserService {
	@Autowired
	private StudentDao studentDao;
	
	public StudentService() {
	}

	@Override
	public UserModel getUserLoginInfo(UserModel user) {
		StudentModel student = studentDao.getStudentById(user.getId());
		
		UserModel resUser = new UserModel();
		
		if(student == null || !student.getPassword().equals(user.getPassword())) {
			resUser.setStatus("ERROR");
			return resUser;
		}
		
		resUser.setId(user.getId());
		resUser.setPassword(null);
		
		return resUser;
	}

}
