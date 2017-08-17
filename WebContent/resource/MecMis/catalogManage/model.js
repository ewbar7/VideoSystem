/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-01 09:17:15
 * @version $Id$
 */
(function(){
	var pro = "mec_mis.catalogManage";
	$$.mkObj(pro);
	var id = null;
	var path = null;

	var ClassList = function() {
		var list = [];

		this.setClassList = function(model) {
			list = [].concat(model);
		};

		this.getClassList = function() {
			return list;
		}

		this.addMessage = function(id, path) {
			list.push({
				id : id,
				path : path
			});
		}

		this.removeClass = function(id) {
			for(var i = 0; i < list.length; i++) {
				if(list[i].id != null) {
					list.splice(i, 1);
				}
			}
		}
	};

	$$.$addModelClass(pro + ".ClassList", ClassList);
})();
