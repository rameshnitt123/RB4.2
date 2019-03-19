define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		newUsername : function(val, state){
			state['newUsername'] = val;
		},
		newPassword : function(val, state){
			state['newPassword'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		countryCode : function(val, state){
			state['countryCode'] = val;
		},
		adminUsername : function(val, state){
			state['adminUsername'] = val;
		},
		adminPassword : function(val, state){
			state['adminPassword'] = val;
		},
	};
	
	
	//Create the Model Class
	function DemoData(defaultValues){
		var privateState = {};
			privateState.newUsername = defaultValues?(defaultValues["newUsername"]?defaultValues["newUsername"]:null):null;
			privateState.newPassword = defaultValues?(defaultValues["newPassword"]?defaultValues["newPassword"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.countryCode = defaultValues?(defaultValues["countryCode"]?defaultValues["countryCode"]:null):null;
			privateState.adminUsername = defaultValues?(defaultValues["adminUsername"]?defaultValues["adminUsername"]:null):null;
			privateState.adminPassword = defaultValues?(defaultValues["adminPassword"]?defaultValues["adminPassword"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"newUsername" : {
					get : function(){return privateState.newUsername},
					set : function(val){
						setterFunctions['newUsername'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"newPassword" : {
					get : function(){return privateState.newPassword},
					set : function(val){
						setterFunctions['newPassword'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"countryCode" : {
					get : function(){return privateState.countryCode},
					set : function(val){
						setterFunctions['countryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"adminUsername" : {
					get : function(){return privateState.adminUsername},
					set : function(val){
						setterFunctions['adminUsername'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"adminPassword" : {
					get : function(){return privateState.adminPassword},
					set : function(val){
						setterFunctions['adminPassword'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DemoData);
	
	//Create new class level validator object
	BaseModel.Validator.call(DemoData);
	
	var registerValidatorBackup = DemoData.registerValidator;
	
	DemoData.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DemoData.isValid(this, propName, val) ){
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
	
	DemoData.relations = relations;
	
	DemoData.prototype.isValid = function(){
		return DemoData.isValid(this);
	};
	
	DemoData.prototype.objModelName = "DemoData";
	
	return DemoData;
});