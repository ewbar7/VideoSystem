/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-01 09:11:42
 * @version $Id$
 */

(function() {
	var pro = "mec_mis.catalogManage";
	$$.mkObj(pro);

	$$.$setModel(pro + ".ClassList", "addPathList");

	$$.$setAction(pro + ".initList", function() {
		var success = function(data) {
			console.log("success[catalog]:", data);
			$$.$getAction(pro + ".getClassList")(data);
		};

		var error = function(data) {
			console.log("error[catalog]:", data);
		}

		$.ajax({
			url:"./makeSubjectPath",
			method : "POST",
			async : false,
			success : success,
			error : error
		});
	});

	$$.$setAction(pro + ".addClassPath", function() {
		var addPathList = $$.$getModel(pro + ".addPathList");
		var addPathListValue = addPathList.getClassList();
		console.log("addPathListValue:", addPathListValue);
		
		var success = function(data) {
			console.log("success:", data);
			$$.$getAction(pro + ".getClassList")(data);
		}

		var error = function(data) {
			console.log("error:", data);
		}

		$.ajax({
			url : "./addClassPath",
			data : {"json" : JSON.stringify(addPathListValue)},
			method : "POST",
			dataType : "json",
			async : false,
			success : success,
			error : error
		});
	});
	
	// $$.$setAction(pro + ".dealModelList", function(modelList) {
	// 	var success = function(e) {
	// 		console.log("success:", e);
	// 	};

	// 	var error = function(e) {
	// 		console.log("error:", e);
	// 	};

	// 	$.ajax({
	// 		url : "./makeClassPath"

	// 	});
	// });

	// $$.$getAction(pro + ".dealModelList")(schoolList);
})();