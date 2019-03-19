define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		categoryId : function(val, state){
			state['categoryId'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMCategory(defaultValues){
		var privateState = {};
			privateState.categoryId = defaultValues?(defaultValues["categoryId"]?defaultValues["categoryId"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
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
				"categoryName" : {
					get : function(){return privateState.categoryName},
					set : function(val){
						setterFunctions['categoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMCategory);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMCategory);
	
	var registerValidatorBackup = PFMCategory.registerValidator;
	
	PFMCategory.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMCategory.isValid(this, propName, val) ){
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
	
	PFMCategory.relations = relations;
	
	PFMCategory.prototype.isValid = function(){
		return PFMCategory.isValid(this);
	};
	
	PFMCategory.prototype.objModelName = "PFMCategory";
	
	return PFMCategory;
});