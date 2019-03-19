define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Id : function(val, state){
			state['Id'] = val;
		},
		TaxType : function(val, state){
			state['TaxType'] = val;
		},
		TaxSubType : function(val, state){
			state['TaxSubType'] = val;
		},
	};
	
	
	//Create the Model Class
	function TaxSubType(defaultValues){
		var privateState = {};
			privateState.Id = defaultValues?(defaultValues["Id"]?defaultValues["Id"]:null):null;
			privateState.TaxType = defaultValues?(defaultValues["TaxType"]?defaultValues["TaxType"]:null):null;
			privateState.TaxSubType = defaultValues?(defaultValues["TaxSubType"]?defaultValues["TaxSubType"]:null):null;
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
				"TaxSubType" : {
					get : function(){return privateState.TaxSubType},
					set : function(val){
						setterFunctions['TaxSubType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TaxSubType);
	
	//Create new class level validator object
	BaseModel.Validator.call(TaxSubType);
	
	var registerValidatorBackup = TaxSubType.registerValidator;
	
	TaxSubType.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TaxSubType.isValid(this, propName, val) ){
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
	//For Operation 'FetchTaxSubTypes' with service id 'FetchBBTaxSubType9858'
	TaxSubType.FetchTaxSubTypes = function(params, onCompletion){
		return TaxSubType.customVerb('FetchTaxSubTypes', params, onCompletion);
	};
	
	var relations = [
	];
	
	TaxSubType.relations = relations;
	
	TaxSubType.prototype.isValid = function(){
		return TaxSubType.isValid(this);
	};
	
	TaxSubType.prototype.objModelName = "TaxSubType";
	
	return TaxSubType;
});