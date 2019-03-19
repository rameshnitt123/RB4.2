define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Id : function(val, state){
			state['Id'] = val;
		},
		TaxType : function(val, state){
			state['TaxType'] = val;
		},
	};
	
	
	//Create the Model Class
	function TaxType(defaultValues){
		var privateState = {};
			privateState.Id = defaultValues?(defaultValues["Id"]?defaultValues["Id"]:null):null;
			privateState.TaxType = defaultValues?(defaultValues["TaxType"]?defaultValues["TaxType"]:null):null;
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
				"TaxType" : {
					get : function(){return privateState.TaxType},
					set : function(val){
						setterFunctions['TaxType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TaxType);
	
	//Create new class level validator object
	BaseModel.Validator.call(TaxType);
	
	var registerValidatorBackup = TaxType.registerValidator;
	
	TaxType.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TaxType.isValid(this, propName, val) ){
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
	
	TaxType.relations = relations;
	
	TaxType.prototype.isValid = function(){
		return TaxType.isValid(this);
	};
	
	TaxType.prototype.objModelName = "TaxType";
	
	return TaxType;
});