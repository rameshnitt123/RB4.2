define([],function(){
	var mappings = {
		"errmsg" : "errmsg",
		"question" : "question",
		"QuestionId" : "QuestionId",
		"userSecurityQuestionsList" : "userSecurityQuestionsList",
	};
	Object.freeze(mappings);
	
	var typings = {
		"errmsg" : "string",
		"question" : "string",
		"QuestionId" : "string",
		"userSecurityQuestionsList" : "string",
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
		tableName : "NewUserSecurityQuestions"
	};
	Object.freeze(config);
	
	return config;
})
