define([],function(){
	var mappings = {
		"accountId" : "accountId",
		"displayName" : "displayName",
		"email" : "email",
		"errmsg" : "errmsg",
		"isNpp" : "isNpp",
		"isP2PRegistered" : "isP2PRegistered",
		"isZell" : "isZell",
		"p2pRegId" : "p2pRegId",
		"phone" : "phone",
		"success" : "success",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountId" : "string",
		"displayName" : "string",
		"email" : "string",
		"errmsg" : "string",
		"isNpp" : "string",
		"isP2PRegistered" : "string",
		"isZell" : "string",
		"p2pRegId" : "string",
		"phone" : "string",
		"success" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"p2pRegId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "p2pregistration"
	};
	Object.freeze(config);
	
	return config;
})
