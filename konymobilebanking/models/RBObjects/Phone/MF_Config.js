define([],function(){
	var mappings = {
		"error" : "error",
		"extension" : "extension",
		"id" : "id",
		"isPrimary" : "isPrimary",
		"phoneNumber" : "phoneNumber",
		"Description" : "Description",
		"result" : "result",
		"IsPreferredContactMethod" : "IsPreferredContactMethod",
		"PreferredContactTime" : "PreferredContactTime",
		"receivePromotions" : "receivePromotions",
		"type" : "type",
		"countryType" : "countryType",
	};
	Object.freeze(mappings);
	
	var typings = {
		"error" : "string",
		"extension" : "string",
		"id" : "string",
		"isPrimary" : "string",
		"phoneNumber" : "string",
		"Description" : "string",
		"result" : "string",
		"IsPreferredContactMethod" : "string",
		"PreferredContactTime" : "string",
		"receivePromotions" : "string",
		"type" : "string",
		"countryType" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Phone"
	};
	Object.freeze(config);
	
	return config;
})
