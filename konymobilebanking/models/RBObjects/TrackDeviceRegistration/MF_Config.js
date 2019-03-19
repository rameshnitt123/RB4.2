define([],function(){
	var mappings = {
		"UserName" : "UserName",
		"isRegistered" : "isRegistered",
	};
	Object.freeze(mappings);
	
	var typings = {
		"UserName" : "string",
		"isRegistered" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"UserName",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "TrackDeviceRegistration"
	};
	Object.freeze(config);
	
	return config;
})
