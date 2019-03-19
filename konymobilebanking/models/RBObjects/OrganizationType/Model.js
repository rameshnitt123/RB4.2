define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Description : function(val, state){
			state['Description'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		Name : function(val, state){
			state['Name'] = val;
		},
	};
	
	
	//Create the Model Class
	function OrganizationType(defaultValues){
		var privateState = {};
			privateState.Description = defaultValues?(defaultValues["Description"]?defaultValues["Description"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.Name = defaultValues?(defaultValues["Name"]?defaultValues["Name"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Description" : {
					get : function(){return privateState.Description},
					set : function(val){
						setterFunctions['Description'].call(this,val,privateState);
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
				"Name" : {
					get : function(){return privateState.Name},
					set : function(val){
						setterFunctions['Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(OrganizationType);
	
	//Create new class level validator object
	BaseModel.Validator.call(OrganizationType);
	
	var registerValidatorBackup = OrganizationType.registerValidator;
	
	OrganizationType.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( OrganizationType.isValid(this, propName, val) ){
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
	
	OrganizationType.relations = relations;
	
	OrganizationType.prototype.isValid = function(){
		return OrganizationType.isValid(this);
	};
	
	OrganizationType.prototype.objModelName = "OrganizationType";
	
	return OrganizationType;
});