package com.mec.MecMis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mec.MecMis.model.SubjectModel;
import com.mec.MecMis.service.SubjectService;
import com.mec.MecMis.util.MakeCatalog;

import net.sf.json.JSONArray;

@Controller
public class SubjectAction {

	@Autowired
	private SubjectService subjectService;
	@Autowired
	private MakeCatalog makeCatalog;
	
	public SubjectAction() {
	}
	
	@RequestMapping(value="/user/makeSubjectPath", method=RequestMethod.POST, 
			produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<SubjectModel> getSubjectList() {
		List<SubjectModel> list = subjectService.getList();
		
		return list;
	}
	
	@RequestMapping(value="/user/addClassPath", method=RequestMethod.POST, 
			produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<SubjectModel> getNewSubjectList(String json) {
		JSONArray jsonArray = JSONArray.fromObject(json);
		
		
		@SuppressWarnings("unchecked")
		List<SubjectModel> list = (List<SubjectModel>)JSONArray.toCollection(jsonArray, SubjectModel.class);
		
		subjectService.setList(list);
		
		makeCatalog.toMakeCatalog(list);
		
		List<SubjectModel> result = subjectService.getList();
		
		return result;
	}
}
