$(function(){
	var pro = "mec_mis.manage";
	$$.mkObj(pro);
	$$.$getIdSet(pro, document);
	$$.$setModel(pro + ".School", "school");
	$$.$setModel(pro + ".Department", "department");

	var dataLength = 14;

	$$.$setAction(pro + ".setSchoolList", function(model) {
		var schoolTrList = [];
		for(var index in model) {
			var tmp = {
				otherClass : model[index]["show"],
				otherAttr : "data-id=" + model[index]["id"],
				tdList : [{
					tdContent : $$.$resolveHtml($$.$getHtml("table_input"), {
						content : model[index]["name"]
					})
				},{
					tdContent : $$.$resolveHtml($$.$getHtml("table_select"), {})
				},{
					tdContent : $$.$resolveHtml($$.$getHtml("table_button"),{
						buttonList : [{
							titleContent : "编辑",
							fontIcon : "glyphicon glyphicon-edit btn",
						},{
							titleContent : "提交",
							fontIcon : "glyphicon glyphicon-ok ",
							otherStyle : "display:none"
						},],
					})
				}],
			}

			schoolTrList.push(tmp);
		};

		return schoolTrList;
	});

	var schoolList = [{id : "01", name : "西安邮电大学"},{id : "02", name : "西北政法大学"},
															{id : "03", name : "陕西师范大学"},
															{id : "04", name : "西北大学"},
															{id : "05", name : "西安外国语大学"},
															{id : "06", name : "东北大学"},
															{id : "07", name : "天津大学"},
															{id : "08", name : "北京大学"},
															{id : "09", name : "吉林大学"},
															{id : "10", name : "青岛大学"},
															{id : "11", name : "南京大学"},
															{id : "12", name : "山东大学"},
															{id : "13", name : "石河子大学"},
															{id : "14", name : "中国海洋大学"},
															{id : "15", name : "中山大学"}
															];
	var departmentList = [{id : "0101", name : "通信与信息工程学院", show:" "},
						  {id : "0102", name : "电子信息工程学院", show:" "},
						  {id : "0103", name : "外国语学院", show:" "},
						  {id : "0104", name : "自动化学院", show:" "},
						  {id : "0105", name : "理学院", show:" "},
						  {id : "0201", name : "22222通信与信息工程学院", show:"hide"},
						  {id : "0202", name : "22222电子信息工程学院", show:"hide"},
						  {id : "0203", name : "22222外国语学院", show:"hide"},
						  {id : "0204", name : "22222自动化学院", show:"hide"},
						  {id : "0205", name : "22222理学院", show:"hide"},
						  {id : "0301", name : "33333通信与信息工程学院", show:"hide"},
						  {id : "0302", name : "33333电子信息工程学院", show:"hide"},
						  {id : "0303", name : "33333外国语学院", show:"hide"},
						  {id : "0304", name : "33333自动化学院", show:"hide"},
						  {id : "0305", name : "33333理学院", show:"hide"}
						];
	
	$$.$wedgeHtml(pro + ".divNavbar", $$.$getHtml('navbar'), {
		navbarStyle : "navbar navbar-default navbar-fixed-top fontSize14",
		navbarInnerStyle : "container",
		companyNameHref : "#companyLogo",
		companyName : "微易码科技有限公司",
		navbarListId : "navbarlist",
		
		navList : [{
			active : " ",
			navHref : "#subjectManage",
			navItem : "科目管理",
		},{
			active : " ", 
			navHref : "#classManage",
			navItem : "课程管理",
		},{
			active : " ",
			navHref : "#sdmManage",
			navItem : "院校管理",
		},{
			active : " ",
			navHref : "#authorityManage",
			navItem : "授权管理",
		}],
		navCommandList : [{
			navCommandId : "btnLogin",
			navCommandStyle : " ",
			navCommandHref : "../index.html",
			modal : "modal",
			navCommandIcon : "glyphicon glyphicon-log-out",
			navCommandName : "退出",
		},],
	});

	$$.$setAction(pro + ".autoAddTr", function() {

	}); 

	$$.$getIdSet(pro, document);

	$$.$wedgeHtml(pro + ".managerContent", $$.$getHtml('bootstrap_gridRow'),  {
	rowList : [{
		colList : [{
			spec : "col-md-5",
			colClassName : "",
			colIdName : "divSchool",
			otherAttr : "",
			colContent : $$.$resolveHtml($$.$getHtml("bootstrap_table"),{
				tabId : "tabSchool",
				tableStyle : "table table-hover table-bordered top_margin sd_table",
				captionStyle : "textCenter font_2em font_bold",
				tableName : "学校信息",  
				tableHeadClass : "border_ddd", /*必填项！ fixedThead */
				thList : [{
					thName : "名称",
				},{
					thName : "状态",
				},{
					thName : "操作",
				},],
				tableBodyClass : "", /*必填项！  scrollTbody */
				trList : $$.$getAction(pro + ".setSchoolList")(schoolList),
			})
			},{
				spec : "col-md-7",
				colClassName : "",
				colIdName : "divDepartment",
				otherAttr : "",
				colContent : $$.$resolveHtml($$.$getHtml("bootstrap_table"),{
				tabId : "tabDepartment",
				tableStyle : "table table-hover table-bordered top_margin sd_table",
				captionStyle : "textCenter font_2em font_bold",
				tableName : "西安邮电大学",  
				tableHeadClass : "border_ddd", /*必填项！ fixedThead */
				thList : [{
					thName : "名称",
				},{
					thName : "状态",
				},{
					thName : "操作",
				},],
				tableBodyClass : "", /*必填项！  scrollTbody */
				trList : $$.$getAction(pro + ".setSchoolList")(departmentList),
				}),
			}],
		},{
			colList : [{
				spec : "col-md-5",
				colClassName : "", 
				colIdName : "schoolFooter", 
				otherAttr : "", 
				colContent: $$.$resolveHtml($$.$getHtml('bootstrap_pagination'), {
					paginationId : "schoolPagination",
					paginationStyle : "pagination pagination-sm",
					liLList : $$.$getAction(pro + ".getPagination")(dataLength)
				}) + $$.$resolveHtml($$.$getHtml('bootstrap_button'), {
						buttonList : [{
						buttonId : "addSchool",
						buttonTip : "",
						btnStyle : "btn btn-primary",
						otherClass : "",
						fontIcon : "",
						otherAttr : "data-table=tabSchool",
						btnContext : "添加院校",
					},],
				})		
			},{
				spec : "col-md-7",
				colClassName : "", 
				colIdName : "departmentFooter", 
				otherAttr : "", 
				colContent : $$.$resolveHtml($$.$getHtml('bootstrap_pagination'), {
					paginationId : "schoolPagination",
					paginationStyle : "pagination pagination-sm",
					liLList : $$.$getAction(pro + ".getPagination")(dataLength)
				}) + $$.$resolveHtml($$.$getHtml('bootstrap_button'), {
						buttonList : [{
						buttonId : "addDepartment", 
						buttonTip : "",
						btnStyle : "btn btn-primary",
						otherClass : "",
						fontIcon : "",
						otherAttr : "data-table=tabDepartment",
						btnContext : "添加院系",
					},],
				})
			}],
		}],}
	);	

	$$.$wedgeHtml(pro + '.divFooter', $$.$getHtml('mecFooter'), {
		liList : [{
			content : "网站首页",
		},{
			content : "企业合作",
		},{
			content : "人才招聘",
		},{
			content : "联系我们",
		},{
			content : "关于我们",
		},{
			content : "讲师招募",
		},{
			content : "意见反馈",
		},{
			content : "友情链接",
		},],
	});
	
	$$.$getIdSet(pro, document);

	$($$.$getId(pro, "tabSchool")).click($$.$getAction(pro + ".initDepartmentList"));
 	$($$.$getId(pro, "tabSchool")).click($$.$getAction(pro + ".modifyValue"));
 	$($$.$getId(pro, "tabDepartment")).click($$.$getAction(pro + ".modifyValue"));
 	$($$.$getId(pro, "schoolFooter")).click($$.$getAction(pro + ".changeView"));
 	$("#addSchool").click($$.$getAction(pro + ".addTr"));
 	$("#addDepartment").click($$.$getAction(pro + ".addTr"));
 	//$($$.$getId(pro, ""));
 	//console.log("123165646:",$$.$getHtmlParameter("bootstrap_pagination"));
});



