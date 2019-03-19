define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TransactionType_id : function(val, state){
			state['TransactionType_id'] = val;
		},
		TransactionTypeName : function(val, state){
			state['TransactionTypeName'] = val;
		},
	};
	
	
	//Create the Model Class
	function TransactionTypes(defaultValues){
		var privateState = {};
			privateState.TransactionType_id = defaultValues?(defaultValues["TransactionType_id"]?defaultValues["TransactionType_id"]:null):null;
			privateState.TransactionTypeName = defaultValues?(defaultValues["TransactionTypeName"]?defaultValues["TransactionTypeName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"TransactionType_id" : {
					get : function(){return privateState.TransactionType_id},
					set : function(val){
						setterFunctions['TransactionType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionTypeName" : {
					get : function(){return privateState.TransactionTypeName},
					set : function(val){
						setterFunctions['TransactionTypeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TransactionTypes);
	
	//Create new class level validator object
	BaseModel.Validator.call(TransactionTypes);
	
	var registerValidatorBackup = TransactionTypes.registerValidator;
	
	TransactionTypes.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TransactionTypes.isValid(this, propName, val) ){
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
	
	TransactionTypes.relations = relations;
	
	TransactionTypes.prototype.isValid = function(){
		return TransactionTypes.isValid(this);
	};
	
	TransactionTypes.prototype.objModelName = "TransactionTypes";
	
	return TransactionTypes;
});