/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-28 10:10:52
 * @version $Id$
 */

 (function() {
 	var pro = "mec_mis.manage";
 	$$.mkObj(pro);

 	$$.$getIdSet(pro, document);

 	$$.$setAction(pro + ".initDepartmentList", function(e, model) { 
 			var target = e.target;

 			//console.log("e.target:",$(e.target).attr("data-id"));
 			var schoolName = "西安邮电大学";
 			var schoolId = "01";

 			if(target.tagName == "INPUT") {
 				schoolName = target.value;
 				schoolId = $($(target).parent().parent()).attr("data-id");
 			}
		
			if(target.tagName == "TD") {
				schoolName = $($(target).parent().children()[0]).children()[0].value;
				schoolId = $(target).parent().attr("data-id");
			} 	

			//console.log("schoolName:", schoolName, " schoolId:", schoolId);


			$("#tabDepartment>caption").html(schoolName);

			//包含所有tr的列表
			var departmentList = $($("#tabDepartment>tbody")[0]).children();
			//列表中tr的个数
			var departmentListNum = $(departmentList).length;
			var departmentId = null;

			//console.log("departmentId:", $(departmentList[0]).attr("data-id"));
			//console.log(departmentListNum);

			for(var i = 0; i < departmentListNum; i++) {
				departmentId = $(departmentList[i]).attr("data-id");
				//console.log(departmentId.substring(0,2));
				if(departmentId.substring(0,2) == schoolId) {
					$(departmentList[i]).removeClass("hide");
				}else {
					$(departmentList[i]).addClass("hide");
				}
			}
 	});

 	$$.$setAction(pro + ".modifyValue", function(e){
 		var target = e.target;

 		if($(target).hasClass("glyphicon-edit")) {
				var tr = $(target).parent().parent();
				var schoolNameInput = $($(tr).children()[0]).children()[0];
				var schoolStatusInput = $($(tr).children()[1]).children()[0];

				var showOk = $(target).parent().children()[1];

				/*选择编辑按钮后 页面中其他按钮都不可选*/
				var btnList = $("button");
				btnList.not($($(target).parent()).children()).attr("disabled", true);

				$(target).removeClass("glyphicon-edit btn-primary");
				$(target).addClass("glyphicon-remove");
				$(target).attr("title", "取消");
				$(showOk).css("display", "inline");

				$(schoolNameInput).attr("disabled", false);
				$(schoolStatusInput).attr("disabled", false);

				return;
		}

		if($(target).hasClass("glyphicon-remove")) {
			var tr = $(target).parent().parent();
			var schoolNameInput = $($(tr).children()[0]).children()[0];
			var schoolStatusInput = $($(tr).children()[1]).children()[0];
			var showOk = $(target).parent().children()[1];

			var btnList = $("button");
			btnList.not($($(target).parent()).children()).attr("disabled", false);

			$(target).removeClass("glyphicon-remove");
			$(target).addClass("glyphicon-edit btn-primary");
			$(target).attr("title", "编辑");
			$(showOk).css("display", "none");

			$(schoolNameInput).attr("disabled", true);
			$(schoolStatusInput).attr("disabled", true);
			return;
		}
 	});

 	$$.$setAction(pro + ".changeView", function(e) {
		var target = e.target;
		var targetInnerText = $(target).html();
		var departmentList = $("#tabSchool>tbody>tr");
		var listLength = departmentList.length;
		var currentIndex;

		if(targetInnerText == "»") {
			if(listLength > 10) {
				for(this.currentIndex = 0; this.currentIndex < 10; this.currentIndex++) {
					$(departmentList[this.currentIndex]).addClass("hide");
				}
			}
		}

		if(targetInnerText == "«") {
			//console.log("<<<<<<<<<<<<<<<<<:", this.currentIndex);
			var flag = this.currentIndex; 
			console.log("flag:", flag);
			if(this.currentIndex > 0) {
				for(this.currentIndex-=1; flag - this.currentIndex < 20; this.currentIndex--) {
					$(departmentList[this.currentIndex]).removeClass("hide");
				}
			}
		}

		if(targetInnerText.match(/[\d]+/)) {
			//console.log(targetInnerText);
			var startIndex = (targetInnerText-1)*10;
			for(var i = 0; i < startIndex; i++) {
				$(departmentList[i]).addClass("hide");
			}
			for(var i = 0; i < 10 && startIndex < listLength; i++,startIndex++) {
				console.log(departmentList[startIndex]);
				$(departmentList[startIndex]).removeClass("hide");
			}

			this.currentIndex = startIndex;
		}	
	});

	$$.$setAction(pro + ".getPagination", function(dataLength) {
		var paginationList = [];
		var i;

		if(dataLength <= 10) {
			return paginationList;
		}

		paginationList[0] = {
			paginationTarget : "#", 
			paginationContent : "&laquo;", 
		};

		for(i = 1; i <= Math.ceil(dataLength/10); i++) {
			paginationList[i] = {
				paginationTarget : "#", 
				paginationContent : i, 
			};
		}

		paginationList[i++] = {
			paginationTarget : "#", 
			paginationContent : "&raquo;",
		}

		return paginationList;
	});

	$$.$setAction(pro + ".addTr", function(e) {
		var target = e.target;
		var tableName = $(target).attr("data-table");
		var departmentList = $(`#${tableName}>tbody>tr`);
		var length = 14; //通过model获得 
		var btnList = $("button");
		
			for(var i = 0; i < btnList.length; i++) {
				$(btnList[i]).attr("disabled", true);
			}
			if(length / 9 == 0) {
				for(var i = 0; i < length; i++) {
					$(departmentList[i]).addClass("hide");
				}
			}else {
				for(var i = 0; i < length - length%10; i++) {
					$(departmentList[i]).addClass("hide");
				}
			}
		
		$(`#${tableName}`).append(
			`<tr class data-id = ${length+=2}>
				<td>
					<input type="text" class="form-control tableInput" autofocus="autofocus" value="" />
				</td>
				<td>
					<select class="textCenter form-control tableSelect">
						<option>可用</option>
				  		<option>不可用</option>
					</select>
				</td>
				<td>
					<button type="button" title="取消" style="margin-left:1px;" class="glyphicon glyphicon-remove btn btn-primary btn-sm noPadding"></button>
					<button type="button" title="提交" style="margin-left:1px;" disabled="" class="glyphicon glyphicon-ok btn btn-primary btn-sm noPadding"></button>
				</td>
			</tr>`
		);
		//console.log("11111111111:", $("#tabSchool>tbody>tr:last").attr("data-id"));

		var inputEle = `#${tableName}>tbody>tr:last>td:first>input`;
		var okBtn = `#${tableName}>tbody>tr:last>td:last>button:last`;
		var removeBtn = `#${tableName}>tbody>tr:last>td:last>button:first`;

		$(inputEle).keyup(function() {
			if($(inputEle).val() != null) {
				$(okBtn).attr("disabled", false);
			}else if($(inputEle).val() == "null"){
				$(okBtn).attr("disabled", true);
			}
		});

		$($(removeBtn)).click(function() {
			$(`#${tableName}>tbody>tr:last`).remove();
		});
		
		//TODO ajax 向数据库中写数据
		// $(obBtn).click(function() {

		// });
	});
 })();