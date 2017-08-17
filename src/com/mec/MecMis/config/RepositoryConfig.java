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
//通知Spring，@Transactional注解的类被事务的切面包围。这样@Transactional就可以使用了。
@EnableTransactionManagement
public class RepositoryConfig {
	@Bean
	public DataSource dataSoursePool() {
		System.out.println("开始配置c3p0");
		DataSource dataSource = new ComboPooledDataSource();
		System.out.println("c3p0配置完毕");
		return dataSource;
	}
	
	@Bean
	public LocalSessionFactoryBean configSessionFactory(DataSource dataSource) {
		System.out.println("开始配置持久层");
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		sessionFactory.setPackagesToScan("com.mec.MecMis.model");
		System.out.println("持久层配置完毕");
		
		return sessionFactory;
	}
	
	@Bean
	public PlatformTransactionManager configTransactionManager(SessionFactory sessionFactory) {
		return new HibernateTransactionManager(sessionFactory);
	}
 }
