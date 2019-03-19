define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		stateId : function(val, state){
			state['stateId'] = val;
		},
		stateName : function(val, state){
			state['stateName'] = val;
		},
		countryId : function(val, state){
			state['countryId'] = val;
		},
		regionId : function(val, state){
			state['regionId'] = val;
		},
	};
	
	
	//Create the Model Class
	function States(defaultValues){
		var privateState = {};
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.stateId = defaultValues?(defaultValues["stateId"]?defaultValues["stateId"]:null):null;
			privateState.stateName = defaultValues?(defaultValues["stateName"]?defaultValues["stateName"]:null):null;
			privateState.countryId = defaultValues?(defaultValues["countryId"]?defaultValues["countryId"]:null):null;
			privateState.regionId = defaultValues?(defaultValues["regionId"]?defaultValues["regionId"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"stateId" : {
					get : function(){return privateState.stateId},
					set : function(val){
						setterFunctions['stateId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"stateName" : {
					get : function(){return privateState.stateName},
					set : function(val){
						setterFunctions['stateName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"countryId" : {
					get : function(){return privateState.countryId},
					set : function(val){
						setterFunctions['countryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"regionId" : {
					get : function(){return privateState.regionId},
					set : function(val){
						setterFunctions['regionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(States);
	
	//Create new class level validator object
	BaseModel.Validator.call(States);
	
	var registerValidatorBackup = States.registerValidator;
	
	States.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( States.isValid(this, propName, val) ){
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
	//For Operation 'getAllRegions' with service id 'getAllRegions2852'
	States.getAllRegions = function(params, onCompletion){
		return States.customVerb('getAllRegions', params, onCompletion);
	};
	//For Operation 'getRegionDetails' with service id 'getRegionDetails3652'
	States.getRegionDetails = function(params, onCompletion){
		return States.customVerb('getRegionDetails', params, onCompletion);
	};
	//For Operation 'getAllCities' with service id 'getAllCities8356'
	States.getAllCities = function(params, onCompletion){
		return States.customVerb('getAllCities', params, onCompletion);
	};
	
	var relations = [
	];
	
	States.relations = relations;
	
	States.prototype.isValid = function(){
		return States.isValid(this);
	};
	
	States.prototype.objModelName = "States";
	
	return States;
});