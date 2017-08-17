(function(){
	$$.$setHtml({
		selectedModal :
		'<div class="modal fade" id="%{selectedModalId:modalAuthoritySelected}%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
		    '<div class="modal-dialog">' +
		        '<div class="modal-content">' +
		            '<div class="modal-header">' +
		                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
		                '<h4 class="%{selectedModalTitleStyle:modal-title}%" id="%{selectedModalTitleId:selectedTitle}%">%{selectedModalTitle:角色选择}%</h4>' +
		            '</div>' +
		            '<div class="%{selectedModalBodyStyle:modal-body textCenter}%">' +
		            	'!!{selectedModalList:<a href="#%{selectedModalHref:0}%">%{selectedModalContext:超级管理员}%' +
		            	'</a><br>}!!' +
		            '</div>' +
		            '<div class="modal-footer">' +
		                '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>' +
		            '</div>' +
		        '</div>' +
		    '</div>' +
		'</div>'
		, introduceCarousel :
		'<div id="%{introduceId:introductionCarousel}%" class="%{introduceType:carousel slide}%" data-ride="carousel">' +
			'<ol class="carousel-indicators">' +
				'!!{liList:<li data-target="%{introduceId:introductionCarousel}%" data-slide-to="%{data:0}%" class="%{isActive: }%">' +
				'</li>}!!' +
			'</ol>' +
			'<div class="carousel-inner" role="listbox">' +
				'!!{itemList:<div class="%{iteStyle:item}%">' +
					'<img class="center-block" src="%{imgSrc:resource/pic/mecCo.jpg}%" alt="%{imgAlt:微易码科技有限公司}%">' +
				'</div>}!!' +
			'</div>' +
			'<a class="carousel-control left" href="#%{introduceHrefId:introductionCarousel}%" data-slide="prev">' +
				'<span class="glyphicon glyphicon-chevron-left"></span>' +
			'</a>' +
			'<a class="carousel-control right" href="#%{introduceHrefId:introductionCarousel}%" data-slide="next">' +
				'<span class="glyphicon glyphicon-chevron-right"></span>' +
			'</a>' +
			'<hr class="divider"/>' +
		'</div>'
		, navigation :
		"<div class='%{navigationStyle:container}%' id='%{navId:}%'>" +
			"<ul class='nav nav-pills nav-justified'>" +
				"!!{navList:<li>" +
					"<a href='#%{href:介绍id}%' role='tab' data-toggle='tab'>%{text:介绍标题}%</a>" + 
				"</li>}!!" +
			"</ul>" +
			"<div class='tab-content'>" +
				"!!{introduce:<div class='tab-pane %{active: }%' id='%{tabId:介绍id}%'>" +
					"<div class='row'>" +
						"<div class='%{leftWidth:col-md-7}%'>" +
							"<h2 class='eature-heading'>%{titleName:标题}%" +
								"<span class='text-muted'>%{subtitle:副标题}%</span>" +
							"</h2>" +
							"<p class='lead'>%{content:内容简介}%</p>" +
						"</div>" + 
						"<div class='%{rightWidth:col-md-5}%'>" +
							"<img class='feature-image img-responsive' src='%{src:图片路径}%' alt='%{alt:图片名称}%' />" +
						"</div>" +
					"</div>" +
				"</div>}!!" +
			"</div>" +
		"</div>"
		, mecFooter :
		"<div class='container'>" +
			"<div class='container'>" + 
				"<ul class='list-unstyled'>" +
					"!!{liList:<li class='%{class:navbar-text navbar-left}%'>" +
						"<a class=\"%{contentStyle: }%\" href='#%{href:#}%' target='%{target:_blank}%'>%{content:链接内容}%</a>" +
					"</li>}!!" +
				"</ul>" +
			"</div>" +
			"<p class='%{textAlign:text-right}%'>%{copyRight:Copyright 2017 | 微易码科技}%</p>" +
		"</div>"
		, navbar :
		'<nav id="navbar" class="%{navbarStyle:navbar navbar-default navbar-fixed-top fontSize14}%" role="navigation">' +
			'<div class="%{navbarInnerStyle:container}%">' +
				'<div class="navbar-header">' +
					'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' +
						'<span class="sr-only">切换导航</span>' +
						'<span class="icon-bar"></span>' +
						'<span class="icon-bar"></span>' +
						'<span class="icon-bar"></span>' +
					'</button>' +
						'<a class="navbar-brand" href="%{companyNameHref:#companyLogo}%">%{companyName:微易码科技有限公司}%</a>' +
				'</div>' +
				'<div id="%{navbarListId:navbarlist}%" class="navbar-collapse collapse">' +
					'<ul class="nav navbar-nav">' +
						'!!{navList:<li id="%{navListLiId:navListLi}%" class="%{active:}%">' +
							'<a href="%{navHref:#someHref}%">%{navItem:导航栏项目}%</a>' +
						'</li>}!!' +
					'</ul>' +
					'<ul class="nav navbar-nav navbar-right center-block">' +
						'!!{navCommandList:<li>' +
							'<a id="%{navCommandId:userLogin}%" class="%{navCommandStyle: }%" href="%{navCommandHref:#LoginModal}%" data-toggle="%{modal:}%" >' +
								'<span class="%{navCommandIcon:glyphicon glyphicon-log-in}%"></span>%{navCommandName:登录}%' +
							'</a>' +
						'</li>}!!' +
					'</ul>' +
				'</div>' +
			'</div>' +
		'</nav>'
		, tableInTable :
		'<div class="container">' +
			'<div class="row">' +
				'<div class="%{photoWidth:col-md-2}%">' +
					'<div class="divTeacherPhoto">' +
						'<img id="%{photoId:teacherPhoto}%" alt="%{photoAlt:教师照片}%" src="%{photoURL:./resource/pic/photo/*.jpg}%">' +
					'</div>' +
				'</div>' +
				'<div class="%{tableWidth:col-md-9}%">' +
					'<table class="table %{outTableStyle:table-striped}%">' +
						'<caption class="%{captionStyle:topicStyle}%">%{caption:教师基本信息}%</caption>' +
						'<tbody>' +
							'!!{outTableList:<tr>' +
								'<td class="%{outTdStyle:tdLeft}%">%{tdKey:姓名}%</td>' +
								'<td>%{tdValue:张三}%</td>' +
							'</tr>}!!' +
							'<tr>' +
								'<td class="%{innTableLeft:tdLeft}%" style="vertical-align:middle;">%{innTableTitle:科目}%</td>' +
								'<td>' +
									'<div class="row">' +
										'<table class="table %{innTableStyle:table-striped}%">' +
											'<thead>' +
												'<tr>' +
													'!!{innTableThList:<th class="%{innTableThStyle:col-md-3}%">%{innTableThContext:课程}%' +
													'</th>}!!' +
												'</tr>' +
											'</thead>' +
											'<tbody class="%{innTableContextFont:fontSize0_8}%">' +
												'!!{innTableTrList:<tr>' +
													'!!{innTableTdList:<td>%{innTableTdContext:C语言}%' +
													'</td>}!!' +
												'</tr>}!!'+
											'</tbody>' +
										'</table>' +
									'</div>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
			'</div>' +
		'</div>'
		, selectedInput :
		'<div class="input-group">' +
			'<input id="%{selectedTextId:selectedTextId}%" type="text" class="form-control">' +
		    '<div class="input-group-btn">' +
		        '<button id="%{selectedInputButtonId:selectedInputId}%" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">%{selectedTopic:视频科目}%' +
		            '<span class="caret"></span>' +
		        '</button>' +
		        '<ul id="%{selectedItem:selectedItem}%" class="dropdown-menu %{btnAlign:pull-right}%">' +
		            '!!{itemList:<li class="%{itemAlign:textAlignCenter}%">' +
		                '<a id="%{itemId:}%" href="#">%{itemCaption:功能1}%</a>' +
		            '</li>}!!' +
		        '</ul>' +
		    '</div>' +
		'</div>'
		, inputTable :
		'<table class="%{tabBaseStyle:table table-hover table-striped table-condensed}%">' +
			'<thead>' +
				'<tr>' +
					'!!{tabHeadList:<th class="%{tabHeadStyle:col-md-2 textAlignCenter}%">%{tabHeadContext:项目}%' +
					'</th>}!!' +
				'</tr>' +
			'</thead>' +
			'<tbody id="%{tabBodyId:tabBodyId}%">' +
				'!!{tabTrList:<tr>' +
					'!!{tabTdList:<td %{tabTdId:id="tdId"}% contenteditable="%{contentEditable:false}%" class="%{tabTdStyle:textAlignRight}%">%{tabTdContext:td内容}%' +
					'</td>}!!' +
				'</tr>}!!' +
			'</tbody>' +
		'</table>'
		, panelList :
		'<div class="%{panelListStyle:panel-group nomargin}%" id="%{panelId:acc}%">' +
			'!!{panelList:<div class="panel panel-default">' +
				'<div class="panel-heading paddingCompact">' +
					'<h4 class="panel-title">' +
						'<a class="%{titleNameStyle:fontSize8}%" data-toggle="collapse" data-parent="%{accPanelId:#acc}%" href="%{accColId:#accCol}%">%{name:项目名称}%</a>' +
					'</h4>' +
				'</div>' +
				'<div id="%{colId:accCol}%" class="panel-collapse collapse">' +
					'<div class="%{divStyle:container}%">' +
						'<div class="row">' +
							'<table class="table %{innTableStyle:table-striped}%">' +
								'<thead>' +
									'<tr>' +
										'!!{innTableThList:<th class="%{innTableThStyle:col-md-3}%">%{innTableThContext:课程}%' +
										'</th>}!!' +
									'</tr>' +
								'</thead>' +
								'<tbody class="%{innTableContextFont:fontSize0_8}%">' +
									'!!{innTableTrList:<tr>' +
										'!!{innTableTdList:<td class="%{innTableTdStyle:textCenter}%">%{innTableTdContext:C语言}%' +
										'</td>}!!' +
									'</tr>}!!' +
								'</tbody>' +
							'</table>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>}!!' +
		'</div>'
		,  tableFrame :
		'<div class="row">' +
			'<table class="%{tableStyle:table table-hover}%">' +
				'<caption class="%{captionStyle:tabCaptionClass}%">%{captionContext:表格标题}%</caption>' +
				'<tbody class="%{tabTbodyStyle:tabTbodyStyle}%">' +
					'!!{trList:<tr>' +
						'!!{tdList:<td class="%{tdStyle:col-xs-1}%">%{tabTdContext:表格单元内容}%' +
						'</td>}!!' +
					'</tr>}!!' +
				'</tbody>' +
			'</table>' +
		'</div>'
		, modalBody : 
		'<div class="modal fade" id="%{modalBlockId:}%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">'
			+'<div class="modal-dialog %{modalWithStyle: }%">'
				+'<div id="%{modalContentId:}%" class="modal-content"></div>'
			+'</div>'
		+'</div>'
		, modalContent : 
		'<div class="modal-header panel">'
			+'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
			+'<div class="panel-heading">'
				+'<h3 class="panel-title modal-title">%{modalTitleContext:}%</h3>'
			+'</div>'
		+'</div>'
		+'<div class="modal-body">'
			+ '<table class="table table-hover">'
					+'<tbody>'
					+'!!{innTableTrList:<tr>'
						+'!!{innTableTdList:<td class="%{tableTdStyle:col-xs-1}%">%{innTableTdContext:C语言}%</td>}!!'
					+'</tr>}!!'
				+'</tbody>'
			+'</table>'
		+'</div>'
		+'<div class="modal-footer">'
			+'!!{modalFooterLeftInfoList:<span id="%{tipId:}%" class="%{tipContextStyle:float_left}%">%{tipContext: }%</span>}!!'
			+'!!{modalFooterButtonList:%{modalFooterButton:}%}!!'
		+'</div>'
		, button : 
		'<button id="%{buttonId:}%" type="button" data-toggle="#%{dataToggle:}%" data-target="#%{dataTarget:}%" '
		 + 'data-dismiss="%{dataDismiss:modal}%" class="btn %{buttonStyle:btn-default btn-sm}%" disabled="%{disabled: }%" '
		 	+ '<span class="%{fontIcon:glyphicon glyphicon-user}%">%{btnContext:按钮}%</span>'
		 + '</button>'
		 , inputModal :
		 '<input id="%{inputId:}%" type="%{inputType:}%" class="%{inputClass:}%"'
		 + 'placeholder="%{inputInnerText:}%" data-toggle="%{dataToggle:}%" data-placement="%{dataPlacement:}%"'
		 +	'data-content="%{dataContent:}%" data-trigger="%{dataTrigger:}%">'
		 , bootstrap_badge :
			'<ul id="%{badgeId:badgeId}%" class="%{badgeType:nav nav-pills}%" style="max-width:%{width:}% %{otherAttr:}%">' 
				+ '!!{badgeList:<li id=%{badgeItemId:itemId}% class="%{isActive:}%"><a href="%{href:#}%">%{content:文本}% <span class="%{badgeItemStyle:badge}%">%{msgNum:数目}%</span></a></li>}!!'
		 + '</ul>'
		 , bootstrap_mediaObject:
 			'<ul class="media-list">'
	 			+'!!{mediaObjectList:<li class="media">'
	 			 	+ '<a class="%{mediaType:media-left}%" href="%{href:#}%">'
				    + '   <img class="media-object" src="%{src:path}%"  alt="%{altText:媒体对象}%">'
				    + '</a>'
		            + '<div class="media-body">'
						+ '<h4 class="media-heading">%{title:媒体标题}%</h4>'
						+ '<p>%{context:这是一些示例文本}%</p>'
					+ '!!{innerDivList:<div id=%{innerDivId:innerBodyId}%>'
					+ '</div>}!!'
				 +'</li>}!!'
			+'</ul>'
			
			/*模版中文名：超大屏幕*/
			,bootstrap_largeScreen : '<div class="container">'+
				 '<div class="%{screenStyle:jumbotron}%">'+
		        '<%{hStyle:h1}%>%{hContent:这是一个超大屏幕（Jumbotron）的实例}%</%{hStyle:h1}%>'+
		        '!!{pList: <p>%{pContext: }%</p>}!!'+
		        '<button class="%{btnStyle: btn btn-primary btn-lg}%" role="button">登录</button></div></div>'
			/*模板中文名 : 缩略图*/
			,boostrap_thumbnail : '<div class="%{MemoryWay_class:}%">' + 
										'<div class="%{picSize:}%">'+
											'<a href="#" class="thumbnail">' + 	
												'<img src="%{picSrc:}%" />' +
											'</a>' +
										'</div>' +
									'</div>'
									
			,bootstrap_form : 
				'<form %{formId:}% class="%{form:form-horizontal}%" role="form">'
					+'<div>'
						+'<div class="%{formStyle:form-group}%">'
							+'!!{formComduct:<label for="firstname" class="%{tableStyle:col-sm-2 control-label}%">%{context:}%</label>'
							+'<div class="%{tableStyle:col-sm-10}%">'
								+'<input %{contextId:}%type="text" class="%{inputControl:form-control}%" %{otherAttr:}% id="%{inputId:firstname}%"' 
									   +'placeholder="%{context:请输入名字}%">'
							+'</div>}!!'
						+'</div>'
						+'<div class="%{formStyle:form-group}%">'
							+'<div  class="%{divStyle:col-sm-offset-2 col-sm-10}%">'
								+'<button id="%{commitId: }%" %{otherAttr: }% type="%{buttonType:submit}%" class="%{buttonStyle:btn btn-default}%">%{buttonName:}%</button>'
							+'</div>'
						+'</div>'
					+'</div>'
			+'</form>'

			,bootstrap_Affix : 
					  	'<div class="%{affixClass:col-xs-3}%">'
				        + '<ul class="%{scrollspyStyle:nav nav-tabs nav-stacked}% %{otherClass: }%" data-spy="affix" data-offset-top="%{offset_Top:125}%">'
				            + '!!{liList:<li class="%{isActive:active}%"><a href="%{matchId:#section-1}%">%{scrollspyTitle:第一部分}%</a></li>}!!'
				        + '</ul>'
				    + '</div>'
				    + '<div class="%{affixBodyClass:col-xs-9}%">'
				        + '!!{bodyList:<h2 id="%{matchId:section-1}%">%{htmlTitle:第一部分}%</h2>'
				        + '<p>%{htmlText:第一部分的内容}%</p>}!!'
				    
		    ,bootstrap_Panels :
		    	'<div class="%{panelClass:panel panel-default}%">'
			    + '!!{panelDiv:<div class="%{panelDivClass:panel-heading}%">'
			        + '!!{panelInner:<h class="%{panelInnerClass:panel-title}%">%{htmlText:面板标题}%</h>}!!'
			    + '</div>}!!'
			+ '</div>'
			, bootstrap_pagination:'<ul id="%{paginationId:}%" class="%{paginationStyle:pagination pagination-sm}%">' +
				'!!{liLList:' +
					'<li><a href="%{paginationTarget:}%">%{paginationContent:}%</a></li>' +
				'}!!' +
			'</ul>'
		
		    ,bootstrap_label: '<span class="%{labelStyle:label label-default}%">%{labelContent:标签名字}%</span>'
		    ,bootstrap_navbar :
			'<nav class="%{navbarStyle:navbar navbar-default  navbar-fixed-top }%" role="navigation">' +
				'<div class="%{navbarInnerStyle:container-fluid}%">' +
					'<div class="navbar-header">' +
						'<a class="navbar-brand" href="#">%{companyName:微易码科技有限公司}%</a>' +
					'</div>' +
					'<div>' +
						'<ul class="nav navbar-nav">' +
							'!!{navList:<li id="%{navListLiId:navListLi}%" class="%{active:}% %{otherClass:}%">' +
								'<a %{otherAttr: }% href="%{navHref:#someHref}%">%{navItem:导航栏项目}%</a>' +
							'</li>}!!' +
						'</ul>'+
						'<ul class="nav navbar-nav navbar-right center-block">' +
							'!!{navCommandList:<li>' +
								'<a id="%{navCommandId:userLogin}%" class="%{navCommandStyle: }%" href="%{navCommandHref:#userLoginModal}%" data-toggle="%{modal:}%" >' +
									'<span class="%{navCommandIcon:glyphicon glyphicon-log-in}%"></span>%{navCommandName:登录}%' +
								'</a>' +
							'</li>}!!' +
						'</ul>' +
						'</div>' +
				'</div>' +
			'</nav>'
		,bootstrap_breadcrumb :
			'<ul class="breadcrumb" style="text-align:center;">' +
				'!!{breadList:<li id="%{breadListLiId:}%" class="%{active:}%">' +
								'<a href="%{breadHref:#someHref}%">%{breadcrumbText:首页}%</a>' +
							'</li>}!!' +
			'</ul>'
		, bootstrap_dropdown :
		'<ul class="%{ulStyle:dropdown-menu}%">' +
		'!!{liList:' +
			'<li>' +
				  '%{dropdownContent:}%' +
			'</li>' +
		'}!!' +
		'</ul>'
		
		,bootstrap_input : '<div class="input-group">'
			+ '!!{inputList:<input type="%{type:text或者password}%" class="form-control" id="%{inputId:}%" placeholder="%{placeholder:输入字段预期值的提示信息}%" %{otherAttr:扩展属性}%> </br> </br>}!!'
			+ '</div> </br>'
			
		,bootstrap_dropDownButtonMenu:'<div class="btn-group">'+
			'!!{buttonControl:<button id="%{btnId:}%" type="button" class="%{btn:btn btn-default dropdown-toggle}%" data-toggle="%{data_toggle:dropdown}%">'
			+' <span class="%{span_class:caret}%"></span></button>}!!'
		+'<ul class="dropdown-menu" role="menu">'
		+'!!{liList:<li><a href="%{hrefFirst:#}%" id="%{idFirst:}%">%{liFirst:程序员}%</a></li><li><a href="%{hrefSecond:#}%" id="%{idSecond:}%">%{liSecond:web前端}%</a></li><li><a href="%{hrefThree:#}%" id="%{idThree:}%">%{liThree:C语言}%</a></li>}!!'
		+'</ul>'
		+'</div>'
		,bootstrap_well : '<div class="#%{wellStyle:well}%">%{wellContent: 该内容在well中}%</div>'
		,bootstrap_table : '<table id="%{tabId:}%"" class="%{tableStyle:table}%">' +
	  						'<caption class="%{captionStyle:}%" %{otherAttr:}%>%{tableName:表格名字}%</caption>' +
	  						'<thead class="%{tableHeadClass:}%">' +
	  							'<tr class="%{otherClass:}%">' +
	  								'!!{thList:<th>%{thName:表格头}%</th>}!!' +
	  							'</tr>' +
	  						'</thead>' +
	  						'<tbody id="%{tabBodyId:}%" class="%{tableBodyClass:}%">' +
	  							'!!{trList:<tr class="%{otherClass:}%" %{otherAttr:}%>' +
	  								'!!{tdList:<td>%{tdContent:表格内容}%</td>}!!' +
	  							'</tr>}!!' +
	  						'</tbody>' +
	  					'</table>' 
		,bootstrap_tr : '!!{trList:<tr class="%{otherClass:}%" %{otherAttr:}%>' +
	  								'!!{tdList:<td>%{tdContent:表格内容}%</td>}!!' +
	  							'</tr>}!!'
		,bootstrap_warningBox:'<div id = "%{warningBoxId:}%"class="%{warningClass:alert alert-danger alert-dismissable}%">' +
		    '<button type="%{type:button}%" class="%{close:close}%" data-dismiss="%{dismiss:alert}%"' +
		       'aria-hidden="%{ariaHidden:true}%"> ' +
		   '%{icon:&times;}%' + 
			' </button>' +
			'%{message:错误！请进行一些更改。}%' +
			'</div>'
			
		,bootstrap_gridContainer :
			'<div class="container %{containerClassName:}%" id="%{containerIdName:id}%" %{containerOtherValue:}%>' + 
			'</div>'
		,bootstrap_gridRow : 
			'!!{rowList:<div class="row %{rowClassName:}%" id="%{rowIdName:id}%" %{otherValue:}%>' + 
			   '!!{colList:<div class="%{spec:col-md-3}% %{colClassName:}%" id="%{colIdName:}%" %{otherAttr:}%>%{colContent:}%' + 
			   '</div>}!!' + 
			'</div>}!!'	
	   ,bootstrap_listGroup : '!!{ListGroupList:' + 
		'<div class="list-group" id="%{listItemId : }%">' +
		'!!{listItemList: <a href="%{itemHref:#}%" id = "%{itemId: }%"class="list-group-item %{listActve:}%"><span class="badge">%{pointMessage:新}%</span>' + 
			'%{itemMessage:}%</a>}!!' + 
		'</div>}!!'	   
			
		, bootstrap_tabSet : 
			'<ul id="%{tabSetNavId:myTab}%" class="nav nav-tabs">' +
			    '!!{tabControlList:<li class="%{isActive:active}%">' +
			        '<a href="#%{controlTarget:home}%" data-toggle="tab">%{titleContext:}%</a></li>}!!' +
			    '!!{dropDownList:<li class="dropdown">' +
			        '<a href="#%{controlTarget: }%" id="%{anchorId:myTabDrop}%" class="dropdown-toggle"' +
			           'data-toggle="dropdown">%{titleContext:}%' +
			            '<b class="caret"></b>' +
			        '</a>' +
			        '<ul class="%{dropDown:dropdown-menu}%" role="menu" aria-labelledby="%{ulId:anchorId}%">' +
			            '!!{menuItemList:<li><a href="#%{targetId:jmeter}%" tabindex="-1" data-toggle="tab">%{liContent:jmeter}%</a></li>}!!' +
			        '</ul>' +
			    '</li>}!!' +
			'</ul>' +
			'<div id="%{tabContentId:myTabContent}%" class="tab-content">' +
			    '!!{singleContentList:<div class="tab-pane fade in %{isActive:active}%" id="%{contentId:home}%">' +
			        '<p>%{tabContentContext:}%</p>' +
			    '</div>}!!' +
			    '!!{multipleContentList:<div class="tab-pane fade" id="%{menuId:jmeter}%">' +
			        '<p>%{tabContentContext:}%</p>' +
			    '</div>}!!' +
			'</div>'	
			, bootstrap_image : '<img id="%{imgId:}%" src="%{imgSrc:}%" class="%{imageStyle:}%" alt="%{imageWarning:}%" %{otherAttr:}%>'
		 ,bootstrap_progress :
		 '<div class="progress %{progressStyle:}%" style="width:%{modelWidth:}%">' + 
		    '<div class="progress-bar %{progressColor:}% center-block" role="progressbar" ' +
		         'aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"' +
		         'style="width:%{progressUploadWidth:}%;">' +
		        '<span class="%{showNumber:}%">%{progressContent:}%</span>' +
		    '</div>' +
		'</div>'
		/*
			模板名称：进度条
			示例：
				modelWidth : "50%",
				progressStyle : "progress-striped active", 
				progressColor : "progress-bar-success", 
				progressUploadWidth : "50%", 
				showNumber : "", 
				progressContent : "50%", 
		*/
		//console.log($$.$getHtmlParamter("button")());
		,boostrap_collapse : '<div class="panel-group" id="%{panelGroupId:}%">'
		    	+'!!{panelList:<div class="panel %{panelStyle:panel-default}% %{otherClass:}%">'
			        +'<div class="panel-heading">'
			            +'<h4 class="panel-title">'
			                +'<a data-toggle="collapse" data-parent="#%{dataParentPanelGroupId:}%" href="#%{hrefPanelBodyId:}%" class="%{anchorClass:}%">'
			                	+'%{panelHeadContext:}%'
			                +'</a>'
			            +'</h4>'
			        +'</div>'
			        +'<div id="%{panelBodyId:}%" class="panel-collapse collapse">'
			            +'<div class="panel-body %{contentClass}%">'
			               +'%{panelBodyContent:}%'
			            +'</div>'
			        +'</div>'
			    +'</div>}!!'
			+'</div>'		
			
			, bootstrap_buttonGroup : '!!{buttonGroupList:'
				+'<div class="%{buttonGroupStyle:btn-group}% %{buttonGroupSize: }%">'
					+'!!{buttonList:<button type="button" class="btn %{buttonStyle:btn-default}% %{otherClass:}%" %{otherAttr:}%>'
						+'%{btnContext:}%<span class="%{fontIcon: }%"></span>'
					+'</button>}!!'
				+'</div>' 
			+ '}!!'
			,bootstrap_modalBody : '<div class="modal fade" id="%{modalBlockId:}%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">'
				+'<div class="modal-dialog %{modalWithStyle: }%">'
					+'<div id="%{modalContentId:}%" class="modal-content"></div>'
				+'</div>'
			+'</div>'
			,bootstrap_modalContent : '<div class="modal-header panel">'
						+'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
						+'<div class="panel-heading">'
							+'<h3 class="panel-title modal-title">%{modalTitleContext:}%</h3>'
						+'</div>'
					+'</div>'
					+'<div class="modal-body">'
						+ '<table class="table table-hover">'
								+'<tbody>'
								+'!!{innTableTrList:<tr>'
									+'!!{innTableTdList:<td class="%{tableTdStyle:col-xs-1}%">%{innTableTdContext:C语言}%</td>}!!'
								+'</tr>}!!'
							+'</tbody>'
						+'</table>'
					+'</div>'
					+'<div class="modal-footer">'
						+'!!{modalFooterLeftInfoList:<span id=%{tipId:}% %{otherAttr:}% class="%{tipContextStyle:float_left}%">%{tipContext: }%</span>}!!'
						+'!!{modalFooterButtonList:%{modalFooterButton:}%}!!'
					+'</div>'
			,bootstrap_button:
			'!!{buttonList:<button id="%{buttonId:}%" type="button" title="%{buttonTip:}%" class="%{btnStyle:btn btn-primary btn-sm}% %{otherClass:}% %{fontIcon:}%"'
			+' %{otherAttr:}%>%{btnContext:}%'
		    +'</button>}!!'
			,bootstrap_tabContent : 
				 '<ul class="%{tabClass:nav nav-tabs}%" %{otherAttr:}%>'+
	             	'!!{tabList:<li><a data-toggle="tab" data-target="%{targetUrl:}%">%{tabName:选项卡名称}%</a></li>}!!'+
	  　　			 '</ul>'+
		         '<div class="tab-content">'+
		             '!!{tabContentList:<div class="tab-pane fade in active" id=%{tabContentId:id}%>%{conent:内容}%</div>}!!'+
		         '</div>'
			,table_input :
				'<input id="%{id:tipInformation}%"  type="text" class="form-control tableInput" disabled="%{disabled:disabled}%" value="%{content:名称}%" %{otherAttr:}%>'
			,table_button :
				'!!{buttonList:<button type="button" title="%{titleContent:}%" style="margin-left:1px;%{otherStyle:}%;" class="%{fontIcon:glyphicon glyphicon-edit}% btn btn-primary btn-sm noPadding">' + 
			    '</button>}!!'
			,table_select:
				'<select disabled="disabled" class="textCenter form-control tableSelect">' + 
				  '<option>可用</option>' + 
				  '<option>不可用</option>' + 
				'</select>'
			,imgModel:
			'<img class="%{imgStyle:imgStyle}%" src="%{imgSrc:../resource/pic/photo.jpg}%" alt="%{imgAlt：照片}%"/>'
	})
})();
