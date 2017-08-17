/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-18 11:38:42
 * @version $Id$
 */
(function() {
	var pro = "mec_mis.index"

	$$.$setAction(pro + ".enterAction", function() {
		var $targetList = $("input,button,select");

		$targetList.keyup(function(e) {
			if(e.keyCode == 13) {
				var thisIndex = $targetList.index(this);
				if($targetList.eq(thisIndex).attr("id") == "loginBtn" || $targetList.eq(thisIndex).attr("id") == "cancelBtn") {
					$targetList[thisIndex].click();
				}else {
					/*
					if(thisIndex+2 < $targetList.length) {
						
					}
					*/
					if($($targetList[thisIndex+1]).attr("disabled") != false) {
						$($targetList[thisIndex+2]).focus();
					}

					$($targetList[thisIndex+1]).focus();
				}
			}
		});
	}); 


	$$.$setAction(pro + ".loginAction", function() {
		// $($$.$getId(pro , "idInput")).on("blur", $$.$getElementAction(pro + ".idInput", "blur")());
		// $($$.$getId(pro , "idInput")).on("keyup", $$.$getElementAction(pro + ".idInput", "keyup")());
		// $($$.$getId(pro , "passwordInput")).on("keyup", $$.$getElementAction(pro + ".passwordInput", "keyup")());
		$($$.$getId(pro , "loginBtn")).on("click", $$.$getElementAction(pro + ".loginBtn", "click")());
	});

	$$.$getAction(pro + ".enterAction")();
	$$.$getAction(pro + ".loginAction")();
})();
