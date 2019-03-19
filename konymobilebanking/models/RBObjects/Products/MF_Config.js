define([],function(){
	var mappings = {
		"accountType" : "accountType",
		"errmsg" : "errmsg",
		"productDescription" : "productDescription",
		"productId" : "productId",
		"StateId" : "StateId",
		"features" : "features",
		"info" : "info",
		"productType" : "productType",
		"productTypeId" : "productTypeId",
		"rates" : "rates",
		"termsAndConditions" : "termsAndConditions",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountType" : "string",
		"errmsg" : "string",
		"productDescription" : "string",
		"productId" : "string",
		"StateId" : "string",
		"features" : "string",
		"info" : "string",
		"productType" : "string",
		"productTypeId" : "string",
		"rates" : "string",
		"termsAndConditions" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"productId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Products"
	};
	Object.freeze(config);
	
	return config;
})
