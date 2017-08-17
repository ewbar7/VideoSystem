package com.mec.MecMis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mec.MecMis.dao.ManagerDao;
import com.mec.MecMis.model.ManagerModel;
import com.mec.MecMis.model.UserModel;

@Service
public class ManagerService implements IUserService {
	@Autowired
	private ManagerDao managerDao;
	
	public ManagerService() {
	}
	
	@Override
	public UserModel getUserLoginInfo(UserModel user) {
		ManagerModel manager = managerDao.getManagerById(user.getId());
		UserModel resUser = new UserModel();
		
		if(manager == null || !manager.getPassword().equals(user.getPassword())) {
			resUser.setStatus("ERROR");
			return resUser;
		}
		
		resUser.setId(user.getId());
		resUser.setPassword(null);
		
		return resUser;
	}
}
