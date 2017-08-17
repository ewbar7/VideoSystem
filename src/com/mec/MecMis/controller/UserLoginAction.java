package com.mec.MecMis.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mec.MecMis.model.UserModel;
import com.mec.MecMis.service.UserLoginService;

@Controller
public class UserLoginAction {
	@Autowired
	private UserLoginService userLoginService;
	
	public UserLoginAction() {
	}
	
	@RequestMapping(value="/userLogin", method=RequestMethod.POST, 
			produces="application/json;charset=UTF-8")
	@ResponseBody
	public UserModel doUserLogin(HttpServletRequest request, 
			HttpServletResponse response, UserModel userModel) throws InstantiationException, IllegalAccessException {
		
		UserModel resUser = userLoginService.doUserLogin(userModel);
		
		return resUser;
	} 
}
