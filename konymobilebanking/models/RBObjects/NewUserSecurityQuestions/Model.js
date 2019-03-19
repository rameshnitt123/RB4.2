define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		question : function(val, state){
			state['question'] = val;
		},
		QuestionId : function(val, state){
			state['QuestionId'] = val;
		},
		userSecurityQuestionsList : function(val, state){
			state['userSecurityQuestionsList'] = val;
		},
	};
	
	
	//Create the Model Class
	function NewUserSecurityQuestions(defaultValues){
		var privateState = {};
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.question = defaultValues?(defaultValues["question"]?defaultValues["question"]:null):null;
			privateState.QuestionId = defaultValues?(defaultValues["QuestionId"]?defaultValues["QuestionId"]:null):null;
			privateState.userSecurityQuestionsList = defaultValues?(defaultValues["userSecurityQuestionsList"]?defaultValues["userSecurityQuestionsList"]:null):null;
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
				"QuestionId" : {
					get : function(){return privateState.QuestionId},
					set : function(val){
						setterFunctions['QuestionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userSecurityQuestionsList" : {
					get : function(){return privateState.userSecurityQuestionsList},
					set : function(val){
						setterFunctions['userSecurityQuestionsList'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(NewUserSecurityQuestions);
	
	//Create new class level validator object
	BaseModel.Validator.call(NewUserSecurityQuestions);
	
	var registerValidatorBackup = NewUserSecurityQuestions.registerValidator;
	
	NewUserSecurityQuestions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( NewUserSecurityQuestions.isValid(this, propName, val) ){
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
	
	var relations = [
	];
	
	NewUserSecurityQuestions.relations = relations;
	
	NewUserSecurityQuestions.prototype.isValid = function(){
		return NewUserSecurityQuestions.isValid(this);
	};
	
	NewUserSecurityQuestions.prototype.objModelName = "NewUserSecurityQuestions";
	
	return NewUserSecurityQuestions;
});