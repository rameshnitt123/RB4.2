define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		UserName : function(val, state){
			state['UserName'] = val;
		},
		isRegistered : function(val, state){
			state['isRegistered'] = val;
		},
	};
	
	
	//Create the Model Class
	function TrackDeviceRegistration(defaultValues){
		var privateState = {};
			privateState.UserName = defaultValues?(defaultValues["UserName"]?defaultValues["UserName"]:null):null;
			privateState.isRegistered = defaultValues?(defaultValues["isRegistered"]?defaultValues["isRegistered"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"UserName" : {
					get : function(){return privateState.UserName},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isRegistered" : {
					get : function(){return privateState.isRegistered},
					set : function(val){
						setterFunctions['isRegistered'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TrackDeviceRegistration);
	
	//Create new class level validator object
	BaseModel.Validator.call(TrackDeviceRegistration);
	
	var registerValidatorBackup = TrackDeviceRegistration.registerValidator;
	
	TrackDeviceRegistration.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TrackDeviceRegistration.isValid(this, propName, val) ){
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
	//For Operation 'trackDeviceRegistration' with service id 'trackRegisterCustomerDevice4571'
	TrackDeviceRegistration.trackDeviceRegistration = function(params, onCompletion){
		return TrackDeviceRegistration.customVerb('trackDeviceRegistration', params, onCompletion);
	};
	
	var relations = [
	];
	
	TrackDeviceRegistration.relations = relations;
	
	TrackDeviceRegistration.prototype.isValid = function(){
		return TrackDeviceRegistration.isValid(this);
	};
	
	TrackDeviceRegistration.prototype.objModelName = "TrackDeviceRegistration";
	
	return TrackDeviceRegistration;
});