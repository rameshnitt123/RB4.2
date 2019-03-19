define([],function(){
	var mappings = {
		"accountID" : "accountID",
		"accountName" : "accountName",
		"accountNickName" : "accountNickName",
		"checkOrderID" : "checkOrderID",
		"country" : "country",
		"errmsg" : "errmsg",
		"leafCount" : "leafCount",
		"name" : "name",
		"orderTime" : "orderTime",
		"postboxNumber" : "postboxNumber",
		"state" : "state",
		"status" : "status",
		"success" : "success",
		"zipcode" : "zipcode",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountID" : "string",
		"accountName" : "string",
		"accountNickName" : "string",
		"checkOrderID" : "string",
		"country" : "string",
		"errmsg" : "string",
		"leafCount" : "string",
		"name" : "string",
		"orderTime" : "string",
		"postboxNumber" : "string",
		"state" : "string",
		"status" : "string",
		"success" : "string",
		"zipcode" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"checkOrderID",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "CheckOrder"
	};
	Object.freeze(config);
	
	return config;
})
