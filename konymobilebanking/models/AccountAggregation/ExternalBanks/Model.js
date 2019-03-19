define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		BankName : function(val, state){
			state['BankName'] = val;
		},
		IdentityProvider : function(val, state){
			state['IdentityProvider'] = val;
		},
		Scheme : function(val, state){
			state['Scheme'] = val;
		},
		Address : function(val, state){
			state['Address'] = val;
		},
		Description : function(val, state){
			state['Description'] = val;
		},
		Oauth2 : function(val, state){
			state['Oauth2'] = val;
		},
		logo : function(val, state){
			state['logo'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExternalBanks(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.BankName = defaultValues?(defaultValues["BankName"]?defaultValues["BankName"]:null):null;
			privateState.IdentityProvider = defaultValues?(defaultValues["IdentityProvider"]?defaultValues["IdentityProvider"]:null):null;
			privateState.Scheme = defaultValues?(defaultValues["Scheme"]?defaultValues["Scheme"]:null):null;
			privateState.Address = defaultValues?(defaultValues["Address"]?defaultValues["Address"]:null):null;
			privateState.Description = defaultValues?(defaultValues["Description"]?defaultValues["Description"]:null):null;
			privateState.Oauth2 = defaultValues?(defaultValues["Oauth2"]?defaultValues["Oauth2"]:null):null;
			privateState.logo = defaultValues?(defaultValues["logo"]?defaultValues["logo"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"BankName" : {
					get : function(){return privateState.BankName},
					set : function(val){
						setterFunctions['BankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IdentityProvider" : {
					get : function(){return privateState.IdentityProvider},
					set : function(val){
						setterFunctions['IdentityProvider'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Scheme" : {
					get : function(){return privateState.Scheme},
					set : function(val){
						setterFunctions['Scheme'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Address" : {
					get : function(){return privateState.Address},
					set : function(val){
						setterFunctions['Address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Description" : {
					get : function(){return privateState.Description},
					set : function(val){
						setterFunctions['Description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Oauth2" : {
					get : function(){return privateState.Oauth2},
					set : function(val){
						setterFunctions['Oauth2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"logo" : {
					get : function(){return privateState.logo},
					set : function(val){
						setterFunctions['logo'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExternalBanks);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExternalBanks);
	
	var registerValidatorBackup = ExternalBanks.registerValidator;
	
	ExternalBanks.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExternalBanks.isValid(this, propName, val) ){
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
	
	ExternalBanks.relations = relations;
	
	ExternalBanks.prototype.isValid = function(){
		return ExternalBanks.isValid(this);
	};
	
	ExternalBanks.prototype.objModelName = "ExternalBanks";
	
	return ExternalBanks;
});