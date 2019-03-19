define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		StatementDescription : function(val, state){
			state['StatementDescription'] = val;
		},
		StatementLink : function(val, state){
			state['StatementLink'] = val;
		},
		StatementMonth : function(val, state){
			state['StatementMonth'] = val;
		},
		accountID : function(val, state){
			state['accountID'] = val;
		},
		format : function(val, state){
			state['format'] = val;
		},
		year : function(val, state){
			state['year'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
	};
	
	
	//Create the Model Class
	function AccountStatement(defaultValues){
		var privateState = {};
			privateState.StatementDescription = defaultValues?(defaultValues["StatementDescription"]?defaultValues["StatementDescription"]:null):null;
			privateState.StatementLink = defaultValues?(defaultValues["StatementLink"]?defaultValues["StatementLink"]:null):null;
			privateState.StatementMonth = defaultValues?(defaultValues["StatementMonth"]?defaultValues["StatementMonth"]:null):null;
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.format = defaultValues?(defaultValues["format"]?defaultValues["format"]:null):null;
			privateState.year = defaultValues?(defaultValues["year"]?defaultValues["year"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"StatementDescription" : {
					get : function(){return privateState.StatementDescription},
					set : function(val){
						setterFunctions['StatementDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatementLink" : {
					get : function(){return privateState.StatementLink},
					set : function(val){
						setterFunctions['StatementLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatementMonth" : {
					get : function(){return privateState.StatementMonth},
					set : function(val){
						setterFunctions['StatementMonth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"format" : {
					get : function(){return privateState.format},
					set : function(val){
						setterFunctions['format'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"year" : {
					get : function(){return privateState.year},
					set : function(val){
						setterFunctions['year'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AccountStatement);
	
	//Create new class level validator object
	BaseModel.Validator.call(AccountStatement);
	
	var registerValidatorBackup = AccountStatement.registerValidator;
	
	AccountStatement.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AccountStatement.isValid(this, propName, val) ){
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
	//For Operation 'showDownloadStatements' with service id 'showDownloadStatements5684'
	AccountStatement.showDownloadStatements = function(params, onCompletion){
		return AccountStatement.customVerb('showDownloadStatements', params, onCompletion);
	};
	
	var relations = [
	];
	
	AccountStatement.relations = relations;
	
	AccountStatement.prototype.isValid = function(){
		return AccountStatement.isValid(this);
	};
	
	AccountStatement.prototype.objModelName = "AccountStatement";
	
	return AccountStatement;
});