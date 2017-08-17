package com.mec.MecMis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mec.MecMis.dao.TeacherDao;
import com.mec.MecMis.model.TeacherModel;
import com.mec.MecMis.model.UserModel;

@Service
public class TeacherService implements IUserService {
	@Autowired
	private TeacherDao teacherDao;
	
	public TeacherService() {
		
	}

	@Override
	public UserModel getUserLoginInfo(UserModel user) {
		TeacherModel teacher = teacherDao.getTeacherById(user.getId());
		
		UserModel resUser = new UserModel();
		
		if(teacher == null || !teacher.getPassword().equals(user.getPassword())) {
			resUser.setStatus("ERROR");
			return resUser;
		}
		
		resUser.setId(user.getId());
		resUser.setPassword(null);
		
		return resUser;
	}
}
