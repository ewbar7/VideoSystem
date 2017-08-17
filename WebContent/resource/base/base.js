/**
 * 
 * @authors cm 
 * @date    2017-07-14 14:51:07
 * @version $Id$
 */

(function() {
	//避免重复定义
	if(typeof $$ === "undefined") {
		mecProject = {
			html : {},
			error : {},
			includeMec : function(projectName) {
				//判断工程名是否符合
				if(typeof projectName === "undefined" || typeof projectName !== "string") {
					return;
				}

				//判断工程名是否已经存在
				if($$[projectName]) {
					throw new Error("工程 [ " + projectName + " ] 已经存在");
				}
				
				$$[projectName] = {};
			},
			mkObj : function(projectName, objectName) {
				//判断参数格式
				if(arguments.length < 1 || arguments.length > 2 || 
					arguments.length == 1 && projectName.indexOf(".") == -1) {
					var errorMsg = errMsg = "mkObj()用法:\n";
					errMsg += "mkOjb(<工程名称>, <项目名称>); 或\n";
					errMsg += "mkOjb(<工程名称.项目名称>);";
					
					throw new Error(errMsg);
				}

				if(objectName == undefined) {
					var name = projectName.split(".");
					projectName = name[0];
					objectName = name[1];
				}

				if(!$$[projectName]) {
					this.includeMec(projectName);
				}

				var project = $$[projectName];
				if(project[objectName]) {
					return;
				}

				project[objectName] = {
					controll : {},
					service : {},
					view : {},
					model : {},
				}
			}
		}

		$$ = mecProject;
	}
})();
