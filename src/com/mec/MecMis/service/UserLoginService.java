package com.mec.MecMis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mec.MecMis.model.UserModel;

@Service
public class UserLoginService {
	@Autowired
	private ManagerService managerService;
	@Autowired
	private TeacherService teacherService;
	@Autowired
	private StudentService studentService;
	
	public UserLoginService() {
	}
	
	private IUserService getUserService(String userType) {
		if(userType.equals("user6")) {
			return managerService;
		}
		
		if(userType.equals("user8")) {
			return teacherService;
		}
		
		if(userType.equals("user12")) {
			return studentService;
		}
		
		return null;
	}
	
	public UserModel doUserLogin(UserModel user) {
		
		UserModel resUser = new UserModel();
		String userId = user.getId();
		
		if(userId == null) {
			resUser.setStatus("ERROR");
			return resUser;
		}
		
		IUserService userService = getUserService("user" + user.getId().length());
		
		if(userService == null) {
			resUser.setStatus("ERROR");
			return resUser;
		}
		
		resUser = userService.getUserLoginInfo(user);
		
		if(resUser.getStatus() == null) {
			resUser.setStatus("SUCCESS");
		}
		
		return resUser;
	}
}
