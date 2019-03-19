define([],function(){
	var mappings = {
		"TemplateType_id" : "TemplateType_id",
		"TemplateTypeName" : "TemplateTypeName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"TemplateType_id" : "string",
		"TemplateTypeName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"TemplateType_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "TemplateTypes"
	};
	Object.freeze(config);
	
	return config;
})
