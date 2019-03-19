define([],function(){
	var mappings = {
		"id" : "id",
		"Customer_id" : "Customer_id",
		"MemberId" : "MemberId",
		"MemberType" : "MemberType",
		"IDType_id" : "IDType_id",
		"IDValue" : "IDValue",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"Customer_id" : "string",
		"MemberId" : "string",
		"MemberType" : "string",
		"IDType_id" : "string",
		"IDValue" : "string",
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
		tableName : "CoreMembership"
	};
	Object.freeze(config);
	
	return config;
})
