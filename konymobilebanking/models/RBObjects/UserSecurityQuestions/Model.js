define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		question : function(val, state){
			state['question'] = val;
		},
		question_id : function(val, state){
			state['question_id'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		userId : function(val, state){
			state['userId'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		usersecurityli : function(val, state){
			state['usersecurityli'] = val;
		},
	};
	
	
	//Create the Model Class
	function UserSecurityQuestions(defaultValues){
		var privateState = {};
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.question = defaultValues?(defaultValues["question"]?defaultValues["question"]:null):null;
			privateState.question_id = defaultValues?(defaultValues["question_id"]?defaultValues["question_id"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.userId = defaultValues?(defaultValues["userId"]?defaultValues["userId"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.usersecurityli = defaultValues?(defaultValues["usersecurityli"]?defaultValues["usersecurityli"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"question" : {
					get : function(){return privateState.question},
					set : function(val){
						setterFunctions['question'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"question_id" : {
					get : function(){return privateState.question_id},
					set : function(val){
						setterFunctions['question_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userId" : {
					get : function(){return privateState.userId},
					set : function(val){
						setterFunctions['userId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userName" : {
					get : function(){return privateState.userName},
					set : function(val){
						setterFunctions['userName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"usersecurityli" : {
					get : function(){return privateState.usersecurityli},
					set : function(val){
						setterFunctions['usersecurityli'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UserSecurityQuestions);
	
	//Create new class level validator object
	BaseModel.Validator.call(UserSecurityQuestions);
	
	var registerValidatorBackup = UserSecurityQuestions.registerValidator;
	
	UserSecurityQuestions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UserSecurityQuestions.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'updateUserSecurityQuestions' with service id 'updateUserSecurityQuestions3263'
	UserSecurityQuestions.updateUserSecurityQuestions = function(params, onCompletion){
		return UserSecurityQuestions.customVerb('updateUserSecurityQuestions', params, onCompletion);
	};
	//For Operation 'verifyUserSecurityQuestions' with service id 'verifyUserSecurityQuestions2404'
	UserSecurityQuestions.verifyUserSecurityQuestions = function(params, onCompletion){
		return UserSecurityQuestions.customVerb('verifyUserSecurityQuestions', params, onCompletion);
	};
	
	var relations = [
	];
	
	UserSecurityQuestions.relations = relations;
	
	UserSecurityQuestions.prototype.isValid = function(){
		return UserSecurityQuestions.isValid(this);
	};
	
	UserSecurityQuestions.prototype.objModelName = "UserSecurityQuestions";
	
	return UserSecurityQuestions;
});