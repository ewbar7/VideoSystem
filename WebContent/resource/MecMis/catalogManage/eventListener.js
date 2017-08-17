/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-01 09:12:09
 * @version $Id$
 */
(function() {
	var pro = "mec_mis.catalogManage";

	$$.mkObj(pro);
	$$.$getIdSet(pro, document);

	var result = [];

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

	$$.$setAction(pro + ".chooseClass", function(e) {
		var checked = $(e.target)[0].checked;
		var target = $($(e.target).parent().parent());
		var yearAndMonth = $(target.children()[1]).html();
		var className = $(target.children()[2]).html();

		var addPathList = $$.$getModel(pro + ".addPathList");

		if(checked == true) {
			addPathList.addMessage(yearAndMonth, "D:\\" + yearAndMonth.substring(0,4) +"\\" +  yearAndMonth.substring(0,6) + "\\" 
							+ className.substring(5));
		} else if(checked == false) {
			addPathList.removeClass(yearAndMonth);
		}

		//console.log("1111111111111:",addPathList.getClassList());
	});
})();
