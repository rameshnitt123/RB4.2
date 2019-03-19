define([],function(){
	var mappings = {
		"TransactionType_id" : "TransactionType_id",
		"TemplateRequestType_id" : "TemplateRequestType_id",
		"TemplateRequestTypeName" : "TemplateRequestTypeName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"TransactionType_id" : "string",
		"TemplateRequestType_id" : "string",
		"TemplateRequestTypeName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"TemplateRequestType_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "TemplateRequestTypes"
	};
	Object.freeze(config);
	
	return config;
})
