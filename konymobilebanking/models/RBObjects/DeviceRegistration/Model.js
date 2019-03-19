define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		deviceId : function(val, state){
			state['deviceId'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		status : function(val, state){
			state['status'] = val;
		},
		UserName : function(val, state){
			state['UserName'] = val;
		},
	};
	
	
	//Create the Model Class
	function DeviceRegistration(defaultValues){
		var privateState = {};
			privateState.deviceId = defaultValues?(defaultValues["deviceId"]?defaultValues["deviceId"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.status = defaultValues?(defaultValues["status"]?defaultValues["status"]:null):null;
			privateState.UserName = defaultValues?(defaultValues["UserName"]?defaultValues["UserName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"deviceId" : {
					get : function(){return privateState.deviceId},
					set : function(val){
						setterFunctions['deviceId'].call(this,val,privateState);
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
				"status" : {
					get : function(){return privateState.status},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserName" : {
					get : function(){return privateState.UserName},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DeviceRegistration);
	
	//Create new class level validator object
	BaseModel.Validator.call(DeviceRegistration);
	
	var registerValidatorBackup = DeviceRegistration.registerValidator;
	
	DeviceRegistration.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DeviceRegistration.isValid(this, propName, val) ){
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
	//For Operation 'customCreate' with service id 'registerDevice9986'
	DeviceRegistration.customCreate = function(params, onCompletion){
		return DeviceRegistration.customVerb('customCreate', params, onCompletion);
	};
	//For Operation 'dbx_updateCustomerDeviceInfo' with service id 'UpdateCustomerDeviceInformation7178'
	DeviceRegistration.dbx_updateCustomerDeviceInfo = function(params, onCompletion){
		return DeviceRegistration.customVerb('dbx_updateCustomerDeviceInfo', params, onCompletion);
	};
	//For Operation 'dbx_registerCustomerDevice' with service id 'RegisterCustomerDevice7303'
	DeviceRegistration.dbx_registerCustomerDevice = function(params, onCompletion){
		return DeviceRegistration.customVerb('dbx_registerCustomerDevice', params, onCompletion);
	};
	//For Operation 'dbx_isDeviceRegistered' with service id 'IsDeviceRegistered4163'
	DeviceRegistration.dbx_isDeviceRegistered = function(params, onCompletion){
		return DeviceRegistration.customVerb('dbx_isDeviceRegistered', params, onCompletion);
	};
	
	var relations = [
	];
	
	DeviceRegistration.relations = relations;
	
	DeviceRegistration.prototype.isValid = function(){
		return DeviceRegistration.isValid(this);
	};
	
	DeviceRegistration.prototype.objModelName = "DeviceRegistration";
	
	return DeviceRegistration;
});