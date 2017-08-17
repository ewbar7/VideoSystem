(function(){
	var pro = "mec_mis.manage";
	$$.mkObj(pro);

	var SchoolModel = function() {
		var id = null;
		var name = null;
		var status = null;

		this.getInfo = function() {
			return {
				name : this.name,
				status : this.status
			};
		};

		this.setId = function(id) {
			this.id = id;
		};

		this.setName = function(name) {
			this.name = name;
		};

		this.setStatus = function(status) {
			this.status = status;
		};

		this.getId = function() {
			return id;
		};

		this.getName = function() {
			return name;
		};

		this.getStatus = function() {
			return status;
		};
	};

	$$.$addModelClass(pro + ".School", SchoolModel);
	$$.$addModelClass(pro + ".Department", SchoolModel);
}());