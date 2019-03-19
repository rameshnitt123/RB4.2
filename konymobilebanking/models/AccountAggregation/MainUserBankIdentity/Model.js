define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
	};
	
	
	//Create the Model Class
	function MainUserBankIdentity(defaultValues){
		var privateState = {};
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(MainUserBankIdentity);
	
	//Create new class level validator object
	BaseModel.Validator.call(MainUserBankIdentity);
	
	var registerValidatorBackup = MainUserBankIdentity.registerValidator;
	
	MainUserBankIdentity.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( MainUserBankIdentity.isValid(this, propName, val) ){
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
	
	MainUserBankIdentity.relations = relations;
	
	MainUserBankIdentity.prototype.isValid = function(){
		return MainUserBankIdentity.isValid(this);
	};
	
	MainUserBankIdentity.prototype.objModelName = "MainUserBankIdentity";
	
	return MainUserBankIdentity;
});