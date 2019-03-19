define([],function(){
	var mappings = {
		"id" : "id",
		"Code" : "Code",
		"Name" : "Name",
		"createdby" : "createdby",
		"createdts" : "createdts",
		"lastmodifiedts" : "lastmodifiedts",
		"modifiedby" : "modifiedby",
		"softdeleteflag" : "softdeleteflag",
		"synctimestamp" : "synctimestamp",
		"Country_id" : "Country_id",
		"Region_id" : "Region_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"Code" : "string",
		"Name" : "string",
		"createdby" : "string",
		"createdts" : "date",
		"lastmodifiedts" : "date",
		"modifiedby" : "string",
		"softdeleteflag" : "string",
		"synctimestamp" : "date",
		"Country_id" : "string",
		"Region_id" : "string",
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
		tableName : "AllLocations"
	};
	Object.freeze(config);
	
	return config;
})
