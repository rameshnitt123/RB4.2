define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		categoryId : function(val, state){
			state['categoryId'] = val;
		},
		subcategoryId : function(val, state){
			state['subcategoryId'] = val;
		},
		subcategoryName : function(val, state){
			state['subcategoryName'] = val;
		},
	};
	
	
	//Create the Model Class
	function MessageSubCategory(defaultValues){
		var privateState = {};
			privateState.categoryId = defaultValues?(defaultValues["categoryId"]?defaultValues["categoryId"]:null):null;
			privateState.subcategoryId = defaultValues?(defaultValues["subcategoryId"]?defaultValues["subcategoryId"]:null):null;
			privateState.subcategoryName = defaultValues?(defaultValues["subcategoryName"]?defaultValues["subcategoryName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"categoryId" : {
					get : function(){return privateState.categoryId},
					set : function(val){
						setterFunctions['categoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subcategoryId" : {
					get : function(){return privateState.subcategoryId},
					set : function(val){
						setterFunctions['subcategoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subcategoryName" : {
					get : function(){return privateState.subcategoryName},
					set : function(val){
						setterFunctions['subcategoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(MessageSubCategory);
	
	//Create new class level validator object
	BaseModel.Validator.call(MessageSubCategory);
	
	var registerValidatorBackup = MessageSubCategory.registerValidator;
	
	MessageSubCategory.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( MessageSubCategory.isValid(this, propName, val) ){
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
	
	MessageSubCategory.relations = relations;
	
	MessageSubCategory.prototype.isValid = function(){
		return MessageSubCategory.isValid(this);
	};
	
	MessageSubCategory.prototype.objModelName = "MessageSubCategory";
	
	return MessageSubCategory;
});