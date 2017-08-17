/**
 * 
 * @authors cm (you@example.org)
 * @date    2017-07-19 07:14:56
 * @version $Id$
 */
(function() {
	var pro = "mec_mis.index";
	$$.mkObj(pro);
	var currentLocation = location;

	console.log($$);

	$$.$setAction(pro + ".userLogin", function() {
		var user = $$.$getModel(pro + ".user");
		var userInfo = user.getUserInfo();

		// var userInfo = user.getUserInfo();
		// console.log("userInfo:",)

		var success = function(data) {
			console.log("successiiii:", data);
			if(data.status == "ERROR") {
				alert("账号或密码错误")
			}

			if(data.status == "SUCCESS") {
				location = currentLocation + "./user/catalogManage.html";
			}
		};

		var error = function(data) {
			console.log("error:", data);
		};

		$$.$ajax({
			url : "./userLogin",
			data : userInfo,
			method : "POST",
			success: success,
			error : error
		});
	});
})();
