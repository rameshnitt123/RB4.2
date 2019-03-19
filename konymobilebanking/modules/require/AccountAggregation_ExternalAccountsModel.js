define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		bank_id : function(val, state){
			state['bank_id'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		label : function(val, state){
			state['label'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		scheme : function(val, state){
			state['scheme'] = val;
		},
		address : function(val, state){
			state['address'] = val;
		},
		AccountName : function(val, state){
			state['AccountName'] = val;
		},
		main_user : function(val, state){
			state['main_user'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExternalAccounts(defaultValues){
		var privateState = {};
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.label = defaultValues?(defaultValues["label"]?defaultValues["label"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.scheme = defaultValues?(defaultValues["scheme"]?defaultValues["scheme"]:null):null;
			privateState.address = defaultValues?(defaultValues["address"]?defaultValues["address"]:null):null;
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"bank_id" : {
					get : function(){return privateState.bank_id},
					set : function(val){
						setterFunctions['bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){throw Error("id cannot be changed."); },
					enumerable : true,
				},
				"label" : {
					get : function(){return privateState.label},
					set : function(val){
						setterFunctions['label'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"username" : {
					get : function(){return privateState.username},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"scheme" : {
					get : function(){return privateState.scheme},
					set : function(val){
						setterFunctions['scheme'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"address" : {
					get : function(){return privateState.address},
					set : function(val){
						setterFunctions['address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountName" : {
					get : function(){return privateState.AccountName},
					set : function(val){
						setterFunctions['AccountName'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExternalAccounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExternalAccounts);
	
	var registerValidatorBackup = ExternalAccounts.registerValidator;
	
	ExternalAccounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExternalAccounts.isValid(this, propName, val) ){
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
	
	ExternalAccounts.relations = relations;
	
	ExternalAccounts.prototype.isValid = function(){
		return ExternalAccounts.isValid(this);
	};
	
	return ExternalAccounts;
});