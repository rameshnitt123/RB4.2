define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		description : function(val, state){
			state['description'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		timePeriodId : function(val, state){
			state['timePeriodId'] = val;
		},
	};
	
	
	//Create the Model Class
	function TimePeriod(defaultValues){
		var privateState = {};
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.timePeriodId = defaultValues?(defaultValues["timePeriodId"]?defaultValues["timePeriodId"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"description" : {
					get : function(){return privateState.description},
					set : function(val){
						setterFunctions['description'].call(this,val,privateState);
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
				"timePeriodId" : {
					get : function(){return privateState.timePeriodId},
					set : function(val){
						setterFunctions['timePeriodId'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TimePeriod);
	
	//Create new class level validator object
	BaseModel.Validator.call(TimePeriod);
	
	var registerValidatorBackup = TimePeriod.registerValidator;
	
	TimePeriod.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TimePeriod.isValid(this, propName, val) ){
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
	
	TimePeriod.relations = relations;
	
	TimePeriod.prototype.isValid = function(){
		return TimePeriod.isValid(this);
	};
	
	TimePeriod.prototype.objModelName = "TimePeriod";
	
	return TimePeriod;
});