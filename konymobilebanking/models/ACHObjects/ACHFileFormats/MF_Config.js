define([],function(){
	var mappings = {
		"id" : "id",
		"Fileextension" : "Fileextension",
		"FileType" : "FileType",
		"MIMEtype" : "MIMEtype",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"Fileextension" : "string",
		"FileType" : "string",
		"MIMEtype" : "string",
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
		serviceName : "ACHObjects",
		tableName : "ACHFileFormats"
	};
	Object.freeze(config);
	
	return config;
})
