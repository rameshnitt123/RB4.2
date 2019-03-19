define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		question : function(val, state){
			state['question'] = val;
		},
		SecurityID : function(val, state){
			state['SecurityID'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		securityQuestions : function(val, state){
			state['securityQuestions'] = val;
		},
	};
	
	
	//Create the Model Class
	function SecurityQuestions(defaultValues){
		var privateState = {};
			privateState.question = defaultValues?(defaultValues["question"]?defaultValues["question"]:null):null;
			privateState.SecurityID = defaultValues?(defaultValues["SecurityID"]?defaultValues["SecurityID"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.securityQuestions = defaultValues?(defaultValues["securityQuestions"]?defaultValues["securityQuestions"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"question" : {
					get : function(){return privateState.question},
					set : function(val){
						setterFunctions['question'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SecurityID" : {
					get : function(){return privateState.SecurityID},
					set : function(val){
						setterFunctions['SecurityID'].call(this,val,privateState);
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
				"securityQuestions" : {
					get : function(){return privateState.securityQuestions},
					set : function(val){
						setterFunctions['securityQuestions'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(SecurityQuestions);
	
	//Create new class level validator object
	BaseModel.Validator.call(SecurityQuestions);
	
	var registerValidatorBackup = SecurityQuestions.registerValidator;
	
	SecurityQuestions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SecurityQuestions.isValid(this, propName, val) ){
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
	//For Operation 'verifyCustomerSecurityQuestions' with service id 'verifyCustomerSecurityQuestions5150'
	SecurityQuestions.verifyCustomerSecurityQuestions = function(params, onCompletion){
		return SecurityQuestions.customVerb('verifyCustomerSecurityQuestions', params, onCompletion);
	};
	//For Operation 'getSecurityQuestions' with service id 'getSecurityQuestions4781'
	SecurityQuestions.getSecurityQuestions = function(params, onCompletion){
		return SecurityQuestions.customVerb('getSecurityQuestions', params, onCompletion);
	};
	//For Operation 'getRandomCustomerSecurityQuestions' with service id 'getRandomCustomerSecurityQuestions6065'
	SecurityQuestions.getRandomCustomerSecurityQuestions = function(params, onCompletion){
		return SecurityQuestions.customVerb('getRandomCustomerSecurityQuestions', params, onCompletion);
	};
	//For Operation 'createCustomerSecurityQuestions' with service id 'createCustomerSecurityQuestions4002'
	SecurityQuestions.createCustomerSecurityQuestions = function(params, onCompletion){
		return SecurityQuestions.customVerb('createCustomerSecurityQuestions', params, onCompletion);
	};
	
	var relations = [
	];
	
	SecurityQuestions.relations = relations;
	
	SecurityQuestions.prototype.isValid = function(){
		return SecurityQuestions.isValid(this);
	};
	
	SecurityQuestions.prototype.objModelName = "SecurityQuestions";
	
	return SecurityQuestions;
});