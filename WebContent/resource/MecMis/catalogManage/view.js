/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-01 09:11:31
 * @version $Id$
 */
$(function() {
	var pro = "mec_mis.catalogManage";
	$$.mkObj(pro);
	$$.$getIdSet(pro, document);

	$$.$setModel(pro + ".ClassList", "classList");
	var classList = $$.$getModel(pro + ".classList");

	var addPathList = $$.$getModel(pro + ".addPathList");

	var resList = null;

	$$.$setAction(pro + ".getClassList", function(data) {
		classList.setClassList(data);
		resList = classList.getClassList();
	});	

	$$.$getAction(pro + ".initList")();

	$$.$setAction(pro + ".setClassPathList", function(model) {
		var schoolTrListBefore = [];
		var schoolTrListAfter = [];
		for(var index in model) {
			var path = model[index]["path"];
			var is = (path != " ") && (path != null);
			var tmp = {
				tdList : [{
					tdContent : `<input type="checkbox" ${path ? "disabled" : " "} ${path ? "checked" : " "}/>`
				},{
					tdContent : model[index]["id"]
				},{
					tdContent : model[index]["name"]
				},{
					tdContent : path || "暂定"
				}],
			}

			if(!path) {
				schoolTrListBefore.push(tmp);
			} else{
				schoolTrListAfter.push(tmp);
			}
		};

		return schoolTrListBefore.concat(schoolTrListAfter);
	});

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

	$$.$wedgeHtml(pro + ".managerContent", $$.$getHtml("bootstrap_gridRow"), {
	rowList : [{
		colList : [{
			spec : "col-md-12 textCenter",
			colClassName : " ", /*必填项！*/
			colIdName : "divTab", /*必填项！*/
			otherAttr : "", /*必填项！*/
			colContent : $$.$resolveHtml($$.$getHtml("bootstrap_table"),{
					tabId : "tabSchool",
					tableStyle : "table table-hover table-bordered top_margin sd_table",
					captionStyle : "textCenter font_2em font_bold",
					tableName : "学校信息",  
					tableHeadClass : "border_ddd", /*必填项！ fixedThead */
					thList : [{
						thName : "选择",
					},{
						thName : "课程编号",
					},{
						thName : "课程名称",
					},{
						thName : "课程视频路径",
					}],
					tabBodyId : "tabBodyId",
					tableBodyClass : "", /*必填项！  scrollTbody */
					trList : $$.$getAction(pro + ".setClassPathList")(resList),
				}) + $$.$resolveHtml($$.$getHtml('bootstrap_pagination'), {
					paginationId : "schoolPagination",
					paginationStyle : "pagination pagination-sm",
					liLList : $$.$getAction(pro + ".getPagination")(resList.length)
				}), /*必填项！*/
			}],
		},{
			colList : [{
				spec : "col-md-9",
				colClassName : " textCenter", /*必填项！*/
				colIdName : "divTabBtn", /*必填项！*/
				otherAttr : "", /*必填项！*/
				colContent :  $$.$resolveHtml($$.$getHtml("bootstrap_button"), {
						buttonList : [{
						buttonId : "addPathBtn",
						buttonTip : "",
						btnStyle : "btn btn-primary",
						otherClass : "",
						fontIcon : "",
						otherAttr : "data-table=tabSchool",
						btnContext : "一键添加",
					},{
						buttonId : "refreshBtn",
						buttonTip : "",
						btnStyle : "btn btn-primary",
						otherClass : "",
						fontIcon : "",
						otherAttr : "data-table=tabSchool",
						btnContext : "刷新",
					}],
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

	$("input").click($$.$getAction(pro + ".chooseClass"));
	$($$.$getId(pro, "addPathBtn")).click($$.$getAction(pro + ".addClassPath"));
	
	$($$.$getId(pro, "refreshBtn")).click(function() {
		console.log("iiiiiiiiiiiiiiiin");
		$$.$getAction(pro + ".initList")();

		$$.$wedgeHtml(pro + ".tabBodyId", $$.$getHtml("bootstrap_tr"), {
			trList : $$.$getAction(pro + ".setClassPathList")(resList)
		});
	});
});


//console.log("123165646:",$$.$getHtmlParameter("table_button"));
