define([],function(){
	var mappings = {
		"errmsg" : "errmsg",
		"question" : "question",
		"question_id" : "question_id",
		"success" : "success",
		"userId" : "userId",
		"userName" : "userName",
		"usersecurityli" : "usersecurityli",
	};
	Object.freeze(mappings);
	
	var typings = {
		"errmsg" : "string",
		"question" : "string",
		"question_id" : "string",
		"success" : "string",
		"userId" : "string",
		"userName" : "string",
		"usersecurityli" : "string",
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
		tableName : "UserSecurityQuestions"
	};
	Object.freeze(config);
	
	return config;
})
