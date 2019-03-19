define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		error : function(val, state){
			state['error'] = val;
		},
		extension : function(val, state){
			state['extension'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		isPrimary : function(val, state){
			state['isPrimary'] = val;
		},
		phoneNumber : function(val, state){
			state['phoneNumber'] = val;
		},
		Description : function(val, state){
			state['Description'] = val;
		},
		result : function(val, state){
			state['result'] = val;
		},
		IsPreferredContactMethod : function(val, state){
			state['IsPreferredContactMethod'] = val;
		},
		PreferredContactTime : function(val, state){
			state['PreferredContactTime'] = val;
		},
		receivePromotions : function(val, state){
			state['receivePromotions'] = val;
		},
		type : function(val, state){
			state['type'] = val;
		},
		countryType : function(val, state){
			state['countryType'] = val;
		},
	};
	
	
	//Create the Model Class
	function Phone(defaultValues){
		var privateState = {};
			privateState.error = defaultValues?(defaultValues["error"]?defaultValues["error"]:null):null;
			privateState.extension = defaultValues?(defaultValues["extension"]?defaultValues["extension"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.isPrimary = defaultValues?(defaultValues["isPrimary"]?defaultValues["isPrimary"]:null):null;
			privateState.phoneNumber = defaultValues?(defaultValues["phoneNumber"]?defaultValues["phoneNumber"]:null):null;
			privateState.Description = defaultValues?(defaultValues["Description"]?defaultValues["Description"]:null):null;
			privateState.result = defaultValues?(defaultValues["result"]?defaultValues["result"]:null):null;
			privateState.IsPreferredContactMethod = defaultValues?(defaultValues["IsPreferredContactMethod"]?defaultValues["IsPreferredContactMethod"]:null):null;
			privateState.PreferredContactTime = defaultValues?(defaultValues["PreferredContactTime"]?defaultValues["PreferredContactTime"]:null):null;
			privateState.receivePromotions = defaultValues?(defaultValues["receivePromotions"]?defaultValues["receivePromotions"]:null):null;
			privateState.type = defaultValues?(defaultValues["type"]?defaultValues["type"]:null):null;
			privateState.countryType = defaultValues?(defaultValues["countryType"]?defaultValues["countryType"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"error" : {
					get : function(){return privateState.error},
					set : function(val){
						setterFunctions['error'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"extension" : {
					get : function(){return privateState.extension},
					set : function(val){
						setterFunctions['extension'].call(this,val,privateState);
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
				"isPrimary" : {
					get : function(){return privateState.isPrimary},
					set : function(val){
						setterFunctions['isPrimary'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneNumber" : {
					get : function(){return privateState.phoneNumber},
					set : function(val){
						setterFunctions['phoneNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Description" : {
					get : function(){return privateState.Description},
					set : function(val){
						setterFunctions['Description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"result" : {
					get : function(){return privateState.result},
					set : function(val){
						setterFunctions['result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPreferredContactMethod" : {
					get : function(){return privateState.IsPreferredContactMethod},
					set : function(val){
						setterFunctions['IsPreferredContactMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PreferredContactTime" : {
					get : function(){return privateState.PreferredContactTime},
					set : function(val){
						setterFunctions['PreferredContactTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"receivePromotions" : {
					get : function(){return privateState.receivePromotions},
					set : function(val){
						setterFunctions['receivePromotions'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type" : {
					get : function(){return privateState.type},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"countryType" : {
					get : function(){return privateState.countryType},
					set : function(val){
						setterFunctions['countryType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Phone);
	
	//Create new class level validator object
	BaseModel.Validator.call(Phone);
	
	var registerValidatorBackup = Phone.registerValidator;
	
	Phone.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Phone.isValid(this, propName, val) ){
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
	//For Operation 'createPhone' with service id 'createPhone5081'
	Phone.createPhone = function(params, onCompletion){
		return Phone.customVerb('createPhone', params, onCompletion);
	};
	//For Operation 'deletePhone' with service id 'deletePhone4418'
	Phone.deletePhone = function(params, onCompletion){
		return Phone.customVerb('deletePhone', params, onCompletion);
	};
	//For Operation 'getAllPhones' with service id 'getAllPhones4259'
	Phone.getAllPhones = function(params, onCompletion){
		return Phone.customVerb('getAllPhones', params, onCompletion);
	};
	//For Operation 'updatePhone' with service id 'updatePhone8527'
	Phone.updatePhone = function(params, onCompletion){
		return Phone.customVerb('updatePhone', params, onCompletion);
	};
	
	var relations = [
	];
	
	Phone.relations = relations;
	
	Phone.prototype.isValid = function(){
		return Phone.isValid(this);
	};
	
	Phone.prototype.objModelName = "Phone";
	
	return Phone;
});