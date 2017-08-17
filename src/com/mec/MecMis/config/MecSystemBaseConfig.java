package com.mec.MecMis.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class MecSystemBaseConfig {
	public static final Map<String, String> baseConfigMap;
	
	static {
		baseConfigMap = new HashMap<String, String>();
		
		InputStream is = MecSystemBaseConfig.class.getResourceAsStream("/mec_base_config.properties");
		Properties properties = new Properties();
		
		try {
			properties.load(is);
			
			Enumeration<?> keyList = properties.propertyNames();
			while(keyList.hasMoreElements()) {
				Object key = keyList.nextElement();
				String keyValue = properties.getProperty(key.toString());
				baseConfigMap.put(key.toString(), keyValue);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static String getConfig(String key) {
		if(baseConfigMap == null) {
			return null;
		}
		
		return baseConfigMap.get(key);
	}
}
