define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
	};
	
	
	//Create the Model Class
	function OFACAndCIPChecks(defaultValues){
		var privateState = {};
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(OFACAndCIPChecks);
	
	//Create new class level validator object
	BaseModel.Validator.call(OFACAndCIPChecks);
	
	var registerValidatorBackup = OFACAndCIPChecks.registerValidator;
	
	OFACAndCIPChecks.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( OFACAndCIPChecks.isValid(this, propName, val) ){
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
	
	OFACAndCIPChecks.relations = relations;
	
	OFACAndCIPChecks.prototype.isValid = function(){
		return OFACAndCIPChecks.isValid(this);
	};
	
	OFACAndCIPChecks.prototype.objModelName = "OFACAndCIPChecks";
	
	return OFACAndCIPChecks;
});