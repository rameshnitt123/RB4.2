define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
	};
	
	
	//Create the Model Class
	function BillerCategory(defaultValues){
		var privateState = {};
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"categoryName" : {
					get : function(){return privateState.categoryName},
					set : function(val){
						setterFunctions['categoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(BillerCategory);
	
	//Create new class level validator object
	BaseModel.Validator.call(BillerCategory);
	
	var registerValidatorBackup = BillerCategory.registerValidator;
	
	BillerCategory.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( BillerCategory.isValid(this, propName, val) ){
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
	
	BillerCategory.relations = relations;
	
	BillerCategory.prototype.isValid = function(){
		return BillerCategory.isValid(this);
	};
	
	BillerCategory.prototype.objModelName = "BillerCategory";
	
	return BillerCategory;
});