define([],function(){
	var mappings = {
		"accountType" : "accountType",
		"address" : "address",
		"dateOfBirth" : "dateOfBirth",
		"errmsg" : "errmsg",
		"firstName" : "firstName",
		"lastName" : "lastName",
		"productId" : "productId",
		"referenceId" : "referenceId",
		"ssn" : "ssn",
		"stateId" : "stateId",
		"success" : "success",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountType" : "string",
		"address" : "string",
		"dateOfBirth" : "string",
		"errmsg" : "string",
		"firstName" : "string",
		"lastName" : "string",
		"productId" : "string",
		"referenceId" : "string",
		"ssn" : "string",
		"stateId" : "string",
		"success" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "NewAccount"
	};
	Object.freeze(config);
	
	return config;
})
