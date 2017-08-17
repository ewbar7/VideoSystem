package com.mec.MecMis.util;

import java.io.File;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mec.MecMis.model.SubjectModel;

@Service
public class MakeCatalog {

	public MakeCatalog() {
		
	}
	
	public void toMakeCatalog(List<SubjectModel> list) {
		for(int i = 0; i < list.size(); i++) {
			//System.out.println("ppppppp:" + list.get(i).getPath());
			File file = new File(list.get(i).getPath());
			if(!file.exists()) {
				if(file.mkdirs()){
					System.out.println(file +"�����ɹ�");
				} else {
					System.out.println(file + "����ʧ��");
				}
			}else{
				System.out.println(file + "�Ѵ���");
			}
		}
	}
}
