define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TransactionType_id : function(val, state){
			state['TransactionType_id'] = val;
		},
		TemplateRequestType_id : function(val, state){
			state['TemplateRequestType_id'] = val;
		},
		TemplateRequestTypeName : function(val, state){
			state['TemplateRequestTypeName'] = val;
		},
	};
	
	
	//Create the Model Class
	function TemplateRequestTypes(defaultValues){
		var privateState = {};
			privateState.TransactionType_id = defaultValues?(defaultValues["TransactionType_id"]?defaultValues["TransactionType_id"]:null):null;
			privateState.TemplateRequestType_id = defaultValues?(defaultValues["TemplateRequestType_id"]?defaultValues["TemplateRequestType_id"]:null):null;
			privateState.TemplateRequestTypeName = defaultValues?(defaultValues["TemplateRequestTypeName"]?defaultValues["TemplateRequestTypeName"]:null):null;
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
				"TemplateRequestType_id" : {
					get : function(){return privateState.TemplateRequestType_id},
					set : function(val){
						setterFunctions['TemplateRequestType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateRequestTypeName" : {
					get : function(){return privateState.TemplateRequestTypeName},
					set : function(val){
						setterFunctions['TemplateRequestTypeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TemplateRequestTypes);
	
	//Create new class level validator object
	BaseModel.Validator.call(TemplateRequestTypes);
	
	var registerValidatorBackup = TemplateRequestTypes.registerValidator;
	
	TemplateRequestTypes.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TemplateRequestTypes.isValid(this, propName, val) ){
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
	//For Operation 'FetchTemplateRequestTypes' with service id 'FetchBBTemplateRequestTypes8901'
	TemplateRequestTypes.FetchTemplateRequestTypes = function(params, onCompletion){
		return TemplateRequestTypes.customVerb('FetchTemplateRequestTypes', params, onCompletion);
	};
	
	var relations = [
	];
	
	TemplateRequestTypes.relations = relations;
	
	TemplateRequestTypes.prototype.isValid = function(){
		return TemplateRequestTypes.isValid(this);
	};
	
	TemplateRequestTypes.prototype.objModelName = "TemplateRequestTypes";
	
	return TemplateRequestTypes;
});