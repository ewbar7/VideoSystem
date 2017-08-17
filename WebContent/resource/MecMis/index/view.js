/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-18 09:59:49
 * @version $Id$
 */
(function() {
	var pro = "mec_mis.index"
	$$.mkObj(pro);

	$$.$setModel(pro + ".User", "user");

	$$.$getIdSet(pro, document);
	/*
	console.log("$$view:", $$["mec_mis"]["index"].view);
	console.log($$["mec_mis"]["index"].view["divNavBar"]);
	*/
	/*
	$$.$setElementAction(pro + ".divNavBar", {
		checkInput : function(e) {
			if(e.)
		}
	});

	*/

	$$.$wedgeHtml(pro + ".divNavbar", $$.$getHtml("navbar"), {
		navList : [{
			active : "active",
			navHref : "#homePate",
			navItem : "首页",
		},{
			active : " ",
			navHref : "#subjectIntroduce",
			navItem : "课程介绍",
		},{
			active : " ",
			navHref : "#technologyDirection",
			navItem : "技术路线",
		},{
			active : " ",
			navHref : "#goodStudent",
			navItem : "优秀学员",
		},{
			active : " ",
			navHref : "#subjectVideo",
			navItem : "课程视频",
		},],
		navCommandList : [{
			navCommandId : "btnLogin",
			navCommandStyle : " ",
			navCommandHref : "#LoginModal", // 与125行id相同
			modal : "modal",
			navCommandIcon : "glyphicon glyphicon-log-in",
			navCommandName : " 登录",
		},],
	});

	$$.$wedgeHtml(pro + ".divModal", $$.$getHtml("modalBody"), {
		modalBlockId : "LoginModal",
		modalContentId : "userLoginModalContent"
	});

	$$.$getIdSet(pro, document);
	//console.log("11111111111111:", $$["mec_mis"]["index"].view);	 //view存在

	$$.$wedgeHtml(pro + ".userLoginModalContent", $$.$getHtml("modalContent"), {
		modalTitleContext : "用户登录",
		innTableTrList : [{
			innTableTdList : [{
				tableTdStyle : "col-xs-2",
				innTableTdContext : $$.$resolveHtml($$.$getHtml("button"), {
					buttonStyle : "btn-default btn-sm",
					disabled : "disabled",
					btnContext : "账号",
					fontIcon: "glyphicon glyphicon-user",
				}),
			},{ 
				tableTdStyle : "col-xs-6",
				innTableTdContext : $$.$resolveHtml($$.$getHtml("inputModal"), {
					inputId : "idInput",
					inputType : "text",
					inputClass : "form-control modalInput",
					inputInnerText: "请输入账号",
					dataToggle : "popover",
					dataPlacement : "right",
					dataContent : "账号格式错误",
					dataTrigger : "manual"
				})
			},{
				tableTdStyle : "col-xs-4",
				innTableTdContext : "<div id=\"idError\" class=\"errorSign\"></div>",
			},],
		},{
			innTableTdList : [{
				tableTdStyle : "col-xs-2",
				innTableTdContext : $$.$resolveHtml($$.$getHtml("button"), {
					buttonStyle : "btn-default btn-sm",
					disabled : "disabled",
					btnContext : "账号",
					fontIcon: "glyphicon glyphicon-user",
				}),
			},{ 
				tableTdStyle : "col-xs-6",
				innTableTdContext : $$.$resolveHtml($$.$getHtml("inputModal"), {
					inputId : "passwordInput",
					inputType : "password",
					inputClass : "form-control modalInput",
					inputInnerText: "请输入密码",
					dataToggle : "popover",
					dataPlacement : "right",
					dataContent : "密码格式错误",
					dataTrigger : " "
				})
			},{
				tableTdStyle : "col-xs-4",
				innTableTdContext : "<div id=\"idError\" class=\"errorSign\"></div>",
			},],
		}],
		modalFooterLeftInfoList : [{
			tipId : "tipId",
			tipContextStyle : "float_left warn_color",
			tipContext : ""
		}],
		modalFooterButtonList : [{
			modalFooterButton : $$.$resolveHtml($$.$getHtml("button"), {
				buttonId : "loginBtn", /*必填项！*/
				dataToggle : "", /*必填项！*/
				dataTarget : "", /*必填项！*/
				dataDismiss : " ",
				buttonStyle : "btn-default btn-sm",
				disabled : " ",
				fontIcon : "glyphicon glyphicon-user",
				btnContext : "登录",
			})
		},{
			modalFooterButton : $$.$resolveHtml($$.$getHtml("button"), {
				buttonId : "cancelBtn", /*必填项！*/
				dataToggle : "", /*必填项！*/
				dataTarget : "", /*必填项！*/
				dataDismiss : "modal",
				buttonStyle : "btn-default btn-sm",
				disabled : "false",
				fontIcon : "glyphicon glyphicon-user",
				btnContext : "取消",
			})
		}]
	});
	$$.$wedgeHtml(pro + ".divIntroduceCarousel", $$.$getHtml("introduceCarousel"), {
		liList : [{
			data : "0",
			isActive : "active",
		},{
			data : "1",
		},{
			data : "2",
		},{
			data : "3",
		},],
		itemList : [{
			iteStyle : "item active",
			imgSrc : "resource/pic/mecCo.jpg",
			imgAlt : "微易码科技有限公司",
		},{
			imgSrc : "resource/pic/MEC-LOGO.jpg",
			imgAlt : "项目实训",
		},{
			imgSrc : "resource/pic/EmploymentHeroes.jpg",
			imgAlt : "就业英雄榜",
		},{
			imgSrc : "resource/pic/GreatGuider.jpg",
			imgAlt : "金牌导师",
		},],
		introduceHrefId : "introductionCarousel",
	});
	
	$$.$wedgeHtml(pro + ".navigation", $$.$getHtml("navigation"), {
		navId : "subjectIntroduce",
		navList : [{
			href : "subjectC",
			text : "C语言精研",
		},{
			href : "subjectDS",
			text : "数据结构与算法",
		},{
			href : "subjectSE",
			text : "Java SE",
		},{
			href : "subjectEE",
			text : "Java EE",
		},{
			href : "subjectSCM",
			text : "单片机的世界",
		},],
		introduce : [{
			active : "active",
			tabId : "subjectC",
			titleName : "C语言精研",
			subtitle : "-开启编程大门的钥匙",
			content : "C语言介绍",
			src : "./resource/pic/subject-C.jpg",
			alt : "C语言精研",
		},{
			tabId : "subjectDS",
			titleName : "数据结构与算法",
			subtitle : "-编程的哲学",
			content : "数据结构与算法介绍",
			src : "./resource/pic/subject-DS.png",
			alt : "数据结构与算法",
		},{
			tabId : "subjectSE",
			titleName : "Java SE",
			subtitle : "-网络中的精灵",
			content : "Java SE介绍",
			src : "./resource/pic/subject-JavaSE.png",
			alt : "Java SE",
		},{
			tabId : "subjectEE",
			titleName : "Java EE",
			subtitle : "-Web网站研发重器",
			content : "Java EE介绍",
			src : "./resource/pic/subject-JavaEE.jpg",
			alt : "Java EE",
		},{
			tabId : "subjectSCM",
			titleName : "单片机的世界",
			subtitle : "-让机器拥有思想",
			content : "单片机介绍",
			src : "./resource/pic/subject-SCM.jpg",
			alt : "单片机",
		},],
	});
/*
	$$.$wedgeHtml(pro + ".progress", $$.$getHtml("bootstrap_progress"), {
		modelWidth : "50%",
		progressStyle : "progress-striped active", 
		progressColor : "progress-bar-success", 
		progressUploadWidth : "50%", 
		showNumber : "", 
		progressContent : "50%", 
	});
*/
	$$.$getIdSet(pro, document);

	$($$.$getId(pro , "cancelBtn")).attr("disabled", false);
	$($$.$getId(pro , "loginBtn")).attr("disabled", false);

	// $$.$setElementAction(pro + ".idInput", {
	// 	"blur" : function() {
	// 		$($$.$getId(pro , "idInput")).blur(function(e) {
	// 			var inputContent = $($$.$getId(pro , "idInput")).val();
	// 			var checkInput = inputContent.match(/^\d{0,16}$/);
	// 			if(checkInput==null){
	// 				$($$.$getId(pro , "idInput")).popover("show");
	// 			}
	// 		})
	// 	},

	// 	"keyup" : function() {
	// 		$($$.$getId(pro , "idInput")).keyup(function(e) {
	// 			var inputContent = $($$.$getId(pro , "idInput")).val();
	// 			var checkInput = inputContent.match(/^\d{0,16}$/);
	// 			if(checkInput!=null){
	// 				$($$.$getId(pro, "idInput")).popover("hide");	
	// 			}
	// 		})
	// 	}
	// });

	// $$.$setElementAction(pro + ".passwordInput", {
	// 	"keyup" : function() {
	// 		if($($$.$getId(pro , "idInput")).val() == null) {
	// 			$($$.$getId(pro , "idInput")).popover("show");
	// 		}

	// 		$($$.$getId(pro , "passwordInput")).keyup( function(e) {
	// 			var inputContent = $($$.$getId(pro , "passwordInput")).val();

	// 			var checkInput = inputContent.match(/^[\da-zA—Z]{0,16}$/);
	// 			if(checkInput==null){
	// 				$($$.$getId(pro , "passwordInput")).popover("show");		
	// 			}else {
	// 				$($$.$getId(pro, "passwordInput")).popover("hide");	
	// 			}
	// 		});
	// 	}
	// });

	$$.$setElementAction(pro + ".loginBtn", {
		"click" : function() {
			$($$.$getId(pro, "loginBtn")).click(function() {

				var idContent = $($$.$getId(pro , "idInput")).val();
				var passwordContent = $($$.$getId(pro , "passwordInput")).val();

				if(!idContent || !passwordContent) {
					$($$.$getId(pro, "tipId")).html("账号或密码不正确");
				}else {
					$($$.$getId(pro, "tipId")).html("");
				}

				var checkId = idContent.match(/^\d{0,16}$/);
				if(checkId==null){
					$($$.$getId(pro, "tipId")).html("账号或密码不正确");
				}

				var checkpassword = passwordContent.match(/^[\da-zA—Z]{0,16}$/);
				if(checkpassword==null){	
					$($$.$getId(pro, "tipId")).html("账号或密码不正确");
				}

				var user = $$.$getModel(pro + ".user");
				user.setId(idContent);
				user.setPassword(passwordContent);

				$$.$getAction(pro + ".userLogin")();
			});	
		}
	});
/*
	$$.$setElementAction(pro + "loginBtn", {
		"show" : function() {
			if($($$.$getId(pro , "idInput")).val() != null && $($$.$getId(pro , "passwordInput")).val() != null) {

			}
		}
	});
*/
/*
	$$.$setElementAction(pro + ".loginBtn", {
		"appear" : function() {
			//if($($$.$getId(pro , "idInput")).val() == null && )
		};
	});

/*
	$$.$setElementAction(pro + "loginBtn", function() {
		
	});
*/
	//console.log("conttttttttttttttt:",$$["mec_mis"]["index"].controll["loginAction"]);
	//console.log("1111111111111122222:", $$["mec_mis"]["index"].view);

/*
	$$.$setAction(pro + ".loginAction", function() {
		$($$.$getId(pro , "idInput")).keyup( function(e) {
			console.log("kkkkkk:", e.keyCode);
			if(e.keyCode == 96){
				$$.$getElementAction(pro + ".idInput", "show")();
				return ;	
			}else {
				$$.$getElementAction(pro + ".idInput", "hide")();
			}
		});
	});
	$$.$getAction(pro + ".loginAction")();
*/
})();
