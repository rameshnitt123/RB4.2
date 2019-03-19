define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Id : function(val, state){
			state['Id'] = val;
		},
		AccountType : function(val, state){
			state['AccountType'] = val;
		},
	};
	
	
	//Create the Model Class
	function ACHAccountTypes(defaultValues){
		var privateState = {};
			privateState.Id = defaultValues?(defaultValues["Id"]?defaultValues["Id"]:null):null;
			privateState.AccountType = defaultValues?(defaultValues["AccountType"]?defaultValues["AccountType"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Id" : {
					get : function(){return privateState.Id},
					set : function(val){
						setterFunctions['Id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountType" : {
					get : function(){return privateState.AccountType},
					set : function(val){
						setterFunctions['AccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ACHAccountTypes);
	
	//Create new class level validator object
	BaseModel.Validator.call(ACHAccountTypes);
	
	var registerValidatorBackup = ACHAccountTypes.registerValidator;
	
	ACHAccountTypes.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ACHAccountTypes.isValid(this, propName, val) ){
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
	
	ACHAccountTypes.relations = relations;
	
	ACHAccountTypes.prototype.isValid = function(){
		return ACHAccountTypes.isValid(this);
	};
	
	ACHAccountTypes.prototype.objModelName = "ACHAccountTypes";
	
	return ACHAccountTypes;
});