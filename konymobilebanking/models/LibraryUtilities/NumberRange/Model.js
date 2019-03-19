define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
	};
	
	
	//Create the Model Class
	function NumberRange(defaultValues){
		var privateState = {};
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(NumberRange);
	
	//Create new class level validator object
	BaseModel.Validator.call(NumberRange);
	
	var registerValidatorBackup = NumberRange.registerValidator;
	
	NumberRange.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( NumberRange.isValid(this, propName, val) ){
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
	//For Operation 'ResetNumberRange' with service id 'resetNumberRangeorch3665'
	NumberRange.ResetNumberRange = function(params, onCompletion){
		return NumberRange.customVerb('ResetNumberRange', params, onCompletion);
	};
	//For Operation 'ReadNextNumber' with service id 'getNumberRangejava7432'
	NumberRange.ReadNextNumber = function(params, onCompletion){
		return NumberRange.customVerb('ReadNextNumber', params, onCompletion);
	};
	//For Operation 'SetNextNumber' with service id 'setNumberRangeorch8532'
	NumberRange.SetNextNumber = function(params, onCompletion){
		return NumberRange.customVerb('SetNextNumber', params, onCompletion);
	};
	//For Operation 'DeleteNumberRange' with service id 'deleteNumberRangeorch6334'
	NumberRange.DeleteNumberRange = function(params, onCompletion){
		return NumberRange.customVerb('DeleteNumberRange', params, onCompletion);
	};
	
	var relations = [
	];
	
	NumberRange.relations = relations;
	
	NumberRange.prototype.isValid = function(){
		return NumberRange.isValid(this);
	};
	
	NumberRange.prototype.objModelName = "NumberRange";
	
	return NumberRange;
});