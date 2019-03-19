define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"messageText" : "messageText",
		"modifiedby" : "modifiedby",
		"service_id" : "service_id",
		"status_id" : "status_id",
		"outageMessageIds" : "outageMessageIds",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"messageText" : "string",
		"modifiedby" : "string",
		"service_id" : "string",
		"status_id" : "string",
		"outageMessageIds" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"service_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "OutageMessage"
	};
	Object.freeze(config);
	
	return config;
})
