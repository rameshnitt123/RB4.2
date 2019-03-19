define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		company : function(val, state){
			state['company'] = val;
		},
		firstName : function(val, state){
			state['firstName'] = val;
		},
		lastName : function(val, state){
			state['lastName'] = val;
		},
		startDate : function(val, state){
			state['startDate'] = val;
		},
		title : function(val, state){
			state['title'] = val;
		},
	};
	
	
	//Create the Model Class
	function LinkedIn(defaultValues){
		var privateState = {};
			privateState.company = defaultValues?(defaultValues["company"]?defaultValues["company"]:null):null;
			privateState.firstName = defaultValues?(defaultValues["firstName"]?defaultValues["firstName"]:null):null;
			privateState.lastName = defaultValues?(defaultValues["lastName"]?defaultValues["lastName"]:null):null;
			privateState.startDate = defaultValues?(defaultValues["startDate"]?defaultValues["startDate"]:null):null;
			privateState.title = defaultValues?(defaultValues["title"]?defaultValues["title"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"company" : {
					get : function(){return privateState.company},
					set : function(val){
						setterFunctions['company'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"firstName" : {
					get : function(){return privateState.firstName},
					set : function(val){
						setterFunctions['firstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastName" : {
					get : function(){return privateState.lastName},
					set : function(val){
						setterFunctions['lastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"startDate" : {
					get : function(){return privateState.startDate},
					set : function(val){
						setterFunctions['startDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"title" : {
					get : function(){return privateState.title},
					set : function(val){
						setterFunctions['title'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(LinkedIn);
	
	//Create new class level validator object
	BaseModel.Validator.call(LinkedIn);
	
	var registerValidatorBackup = LinkedIn.registerValidator;
	
	LinkedIn.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( LinkedIn.isValid(this, propName, val) ){
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
	
	LinkedIn.relations = relations;
	
	LinkedIn.prototype.isValid = function(){
		return LinkedIn.isValid(this);
	};
	
	LinkedIn.prototype.objModelName = "LinkedIn";
	
	return LinkedIn;
});