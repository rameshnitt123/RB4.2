define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		alertid : function(val, state){
			state['alertid'] = val;
		},
		bankingIDChange : function(val, state){
			state['bankingIDChange'] = val;
		},
		communicationChange : function(val, state){
			state['communicationChange'] = val;
		},
		dealsExpiring : function(val, state){
			state['dealsExpiring'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		newDealsAvailable : function(val, state){
			state['newDealsAvailable'] = val;
		},
		newPayeeAdded : function(val, state){
			state['newPayeeAdded'] = val;
		},
		passwordChange : function(val, state){
			state['passwordChange'] = val;
		},
		passwordExpired : function(val, state){
			state['passwordExpired'] = val;
		},
		payeeDetailsUpdated : function(val, state){
			state['payeeDetailsUpdated'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		canBeSelected : function(val, state){
			state['canBeSelected'] = val;
		},
		alertTypes : function(val, state){
			state['alertTypes'] = val;
		},
		isSelected : function(val, state){
			state['isSelected'] = val;
		},
		canSmsBeSelected : function(val, state){
			state['canSmsBeSelected'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		isSmsActive : function(val, state){
			state['isSmsActive'] = val;
		},
		canPushBeSelected : function(val, state){
			state['canPushBeSelected'] = val;
		},
		isEmailActive : function(val, state){
			state['isEmailActive'] = val;
		},
		isPushActive : function(val, state){
			state['isPushActive'] = val;
		},
		value : function(val, state){
			state['value'] = val;
		},
		canEmailBeSelected : function(val, state){
			state['canEmailBeSelected'] = val;
		},
		alertTypeName : function(val, state){
			state['alertTypeName'] = val;
		},
		alertTypeId : function(val, state){
			state['alertTypeId'] = val;
		},
		alerts : function(val, state){
			state['alerts'] = val;
		},
	};
	
	
	//Create the Model Class
	function UserAlerts(defaultValues){
		var privateState = {};
			privateState.alertid = defaultValues?(defaultValues["alertid"]?defaultValues["alertid"]:null):null;
			privateState.bankingIDChange = defaultValues?(defaultValues["bankingIDChange"]?defaultValues["bankingIDChange"]:null):null;
			privateState.communicationChange = defaultValues?(defaultValues["communicationChange"]?defaultValues["communicationChange"]:null):null;
			privateState.dealsExpiring = defaultValues?(defaultValues["dealsExpiring"]?defaultValues["dealsExpiring"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.newDealsAvailable = defaultValues?(defaultValues["newDealsAvailable"]?defaultValues["newDealsAvailable"]:null):null;
			privateState.newPayeeAdded = defaultValues?(defaultValues["newPayeeAdded"]?defaultValues["newPayeeAdded"]:null):null;
			privateState.passwordChange = defaultValues?(defaultValues["passwordChange"]?defaultValues["passwordChange"]:null):null;
			privateState.passwordExpired = defaultValues?(defaultValues["passwordExpired"]?defaultValues["passwordExpired"]:null):null;
			privateState.payeeDetailsUpdated = defaultValues?(defaultValues["payeeDetailsUpdated"]?defaultValues["payeeDetailsUpdated"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.canBeSelected = defaultValues?(defaultValues["canBeSelected"]?defaultValues["canBeSelected"]:null):null;
			privateState.alertTypes = defaultValues?(defaultValues["alertTypes"]?defaultValues["alertTypes"]:null):null;
			privateState.isSelected = defaultValues?(defaultValues["isSelected"]?defaultValues["isSelected"]:null):null;
			privateState.canSmsBeSelected = defaultValues?(defaultValues["canSmsBeSelected"]?defaultValues["canSmsBeSelected"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.isSmsActive = defaultValues?(defaultValues["isSmsActive"]?defaultValues["isSmsActive"]:null):null;
			privateState.canPushBeSelected = defaultValues?(defaultValues["canPushBeSelected"]?defaultValues["canPushBeSelected"]:null):null;
			privateState.isEmailActive = defaultValues?(defaultValues["isEmailActive"]?defaultValues["isEmailActive"]:null):null;
			privateState.isPushActive = defaultValues?(defaultValues["isPushActive"]?defaultValues["isPushActive"]:null):null;
			privateState.value = defaultValues?(defaultValues["value"]?defaultValues["value"]:null):null;
			privateState.canEmailBeSelected = defaultValues?(defaultValues["canEmailBeSelected"]?defaultValues["canEmailBeSelected"]:null):null;
			privateState.alertTypeName = defaultValues?(defaultValues["alertTypeName"]?defaultValues["alertTypeName"]:null):null;
			privateState.alertTypeId = defaultValues?(defaultValues["alertTypeId"]?defaultValues["alertTypeId"]:null):null;
			privateState.alerts = defaultValues?(defaultValues["alerts"]?defaultValues["alerts"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"alertid" : {
					get : function(){return privateState.alertid},
					set : function(val){
						setterFunctions['alertid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankingIDChange" : {
					get : function(){return privateState.bankingIDChange},
					set : function(val){
						setterFunctions['bankingIDChange'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"communicationChange" : {
					get : function(){return privateState.communicationChange},
					set : function(val){
						setterFunctions['communicationChange'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dealsExpiring" : {
					get : function(){return privateState.dealsExpiring},
					set : function(val){
						setterFunctions['dealsExpiring'].call(this,val,privateState);
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
				"newDealsAvailable" : {
					get : function(){return privateState.newDealsAvailable},
					set : function(val){
						setterFunctions['newDealsAvailable'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"newPayeeAdded" : {
					get : function(){return privateState.newPayeeAdded},
					set : function(val){
						setterFunctions['newPayeeAdded'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"passwordChange" : {
					get : function(){return privateState.passwordChange},
					set : function(val){
						setterFunctions['passwordChange'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"passwordExpired" : {
					get : function(){return privateState.passwordExpired},
					set : function(val){
						setterFunctions['passwordExpired'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeDetailsUpdated" : {
					get : function(){return privateState.payeeDetailsUpdated},
					set : function(val){
						setterFunctions['payeeDetailsUpdated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userName" : {
					get : function(){return privateState.userName},
					set : function(val){
						setterFunctions['userName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"canBeSelected" : {
					get : function(){return privateState.canBeSelected},
					set : function(val){
						setterFunctions['canBeSelected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alertTypes" : {
					get : function(){return privateState.alertTypes},
					set : function(val){
						setterFunctions['alertTypes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSelected" : {
					get : function(){return privateState.isSelected},
					set : function(val){
						setterFunctions['isSelected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"canSmsBeSelected" : {
					get : function(){return privateState.canSmsBeSelected},
					set : function(val){
						setterFunctions['canSmsBeSelected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"name" : {
					get : function(){return privateState.name},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSmsActive" : {
					get : function(){return privateState.isSmsActive},
					set : function(val){
						setterFunctions['isSmsActive'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"canPushBeSelected" : {
					get : function(){return privateState.canPushBeSelected},
					set : function(val){
						setterFunctions['canPushBeSelected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEmailActive" : {
					get : function(){return privateState.isEmailActive},
					set : function(val){
						setterFunctions['isEmailActive'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPushActive" : {
					get : function(){return privateState.isPushActive},
					set : function(val){
						setterFunctions['isPushActive'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"value" : {
					get : function(){return privateState.value},
					set : function(val){
						setterFunctions['value'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"canEmailBeSelected" : {
					get : function(){return privateState.canEmailBeSelected},
					set : function(val){
						setterFunctions['canEmailBeSelected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alertTypeName" : {
					get : function(){return privateState.alertTypeName},
					set : function(val){
						setterFunctions['alertTypeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alertTypeId" : {
					get : function(){return privateState.alertTypeId},
					set : function(val){
						setterFunctions['alertTypeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alerts" : {
					get : function(){return privateState.alerts},
					set : function(val){
						setterFunctions['alerts'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UserAlerts);
	
	//Create new class level validator object
	BaseModel.Validator.call(UserAlerts);
	
	var registerValidatorBackup = UserAlerts.registerValidator;
	
	UserAlerts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UserAlerts.isValid(this, propName, val) ){
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
	//For Operation 'getAllAlerts' with service id 'getAllAlerts7486'
	UserAlerts.getAllAlerts = function(params, onCompletion){
		return UserAlerts.customVerb('getAllAlerts', params, onCompletion);
	};
	//For Operation 'updateAlerts' with service id 'updateAlerts3636'
	UserAlerts.updateAlerts = function(params, onCompletion){
		return UserAlerts.customVerb('updateAlerts', params, onCompletion);
	};
	
	var relations = [
	];
	
	UserAlerts.relations = relations;
	
	UserAlerts.prototype.isValid = function(){
		return UserAlerts.isValid(this);
	};
	
	UserAlerts.prototype.objModelName = "UserAlerts";
	
	return UserAlerts;
});