/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-16 16:28:41
 * @version $Id$
 */
(function() {
	//回车事件
	var $targetList = $("input,button,select");
	$targetList.keyup(function(e) {
		if(e.keyCode == 13) {
			var thisIndex = $targetList.index(this);
			if($targetList.eq(thisIndex).attr("type") == "submit") {
				$targetList[thisIndex].click();
			}else {
				$targetList[thisIndex+1].focus();
			}
		}
	});
})();
