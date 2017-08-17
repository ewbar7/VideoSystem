/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-19 16:11:28
 * @version $Id$
 */
(function() {
	var pro = "mec_mis.index"
	$$.mkObj(pro);

	var User = function() {
		var id = null;
		var password = null;

		this.getUserInfo = function() {
			return {
				id : this.id,
				password : this.password
			};
		};

		this.setId = function(id) {
			this.id = id;
		}

		this.getId = function() {
			return id;
		}

		this.setPassword = function(password) {
			this.password = password;
		}

		this.getPassword = function() {
			return password;
		}
	};

	$$.$addModelClass(pro + ".User", User);
})();
