define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		username : function(val, state){
			state['username'] = val;
		},
		password : function(val, state){
			state['password'] = val;
		},
		main_user : function(val, state){
			state['main_user'] = val;
		},
		bank_id : function(val, state){
			state['bank_id'] = val;
		},
		SessionToken : function(val, state){
			state['SessionToken'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExternalBankIdentity(defaultValues){
		var privateState = {};
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.password = defaultValues?(defaultValues["password"]?defaultValues["password"]:null):null;
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.SessionToken = defaultValues?(defaultValues["SessionToken"]?defaultValues["SessionToken"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"username" : {
					get : function(){return privateState.username},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"password" : {
					get : function(){return privateState.password},
					set : function(val){
						setterFunctions['password'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"main_user" : {
					get : function(){return privateState.main_user},
					set : function(val){
						setterFunctions['main_user'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bank_id" : {
					get : function(){return privateState.bank_id},
					set : function(val){
						setterFunctions['bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SessionToken" : {
					get : function(){return privateState.SessionToken},
					set : function(val){
						setterFunctions['SessionToken'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExternalBankIdentity);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExternalBankIdentity);
	
	var registerValidatorBackup = ExternalBankIdentity.registerValidator;
	
	ExternalBankIdentity.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExternalBankIdentity.isValid(this, propName, val) ){
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
	
	ExternalBankIdentity.relations = relations;
	
	ExternalBankIdentity.prototype.isValid = function(){
		return ExternalBankIdentity.isValid(this);
	};
	
	ExternalBankIdentity.prototype.objModelName = "ExternalBankIdentity";
	
	return ExternalBankIdentity;
});