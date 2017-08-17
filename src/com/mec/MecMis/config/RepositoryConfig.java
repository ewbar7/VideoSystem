package com.mec.MecMis.config;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mchange.v2.c3p0.ComboPooledDataSource;

@Configuration
//֪ͨSpring��@Transactionalע����౻����������Χ������@Transactional�Ϳ���ʹ���ˡ�
@EnableTransactionManagement
public class RepositoryConfig {
	@Bean
	public DataSource dataSoursePool() {
		System.out.println("��ʼ����c3p0");
		DataSource dataSource = new ComboPooledDataSource();
		System.out.println("c3p0�������");
		return dataSource;
	}
	
	@Bean
	public LocalSessionFactoryBean configSessionFactory(DataSource dataSource) {
		System.out.println("��ʼ���ó־ò�");
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		sessionFactory.setPackagesToScan("com.mec.MecMis.model");
		System.out.println("�־ò��������");
		
		return sessionFactory;
	}
	
	@Bean
	public PlatformTransactionManager configTransactionManager(SessionFactory sessionFactory) {
		return new HibernateTransactionManager(sessionFactory);
	}
 }
