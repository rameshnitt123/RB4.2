define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TemplateType_id : function(val, state){
			state['TemplateType_id'] = val;
		},
		TemplateTypeName : function(val, state){
			state['TemplateTypeName'] = val;
		},
	};
	
	
	//Create the Model Class
	function TemplateTypes(defaultValues){
		var privateState = {};
			privateState.TemplateType_id = defaultValues?(defaultValues["TemplateType_id"]?defaultValues["TemplateType_id"]:null):null;
			privateState.TemplateTypeName = defaultValues?(defaultValues["TemplateTypeName"]?defaultValues["TemplateTypeName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"TemplateType_id" : {
					get : function(){return privateState.TemplateType_id},
					set : function(val){
						setterFunctions['TemplateType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateTypeName" : {
					get : function(){return privateState.TemplateTypeName},
					set : function(val){
						setterFunctions['TemplateTypeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TemplateTypes);
	
	//Create new class level validator object
	BaseModel.Validator.call(TemplateTypes);
	
	var registerValidatorBackup = TemplateTypes.registerValidator;
	
	TemplateTypes.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TemplateTypes.isValid(this, propName, val) ){
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
	
	TemplateTypes.relations = relations;
	
	TemplateTypes.prototype.isValid = function(){
		return TemplateTypes.isValid(this);
	};
	
	TemplateTypes.prototype.objModelName = "TemplateTypes";
	
	return TemplateTypes;
});