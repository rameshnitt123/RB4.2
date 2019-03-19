define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		alertId : function(val, state){
			state['alertId'] = val;
		},
		balanceUpdate : function(val, state){
			state['balanceUpdate'] = val;
		},
		balanceUpdateTypeId : function(val, state){
			state['balanceUpdateTypeId'] = val;
		},
		checkClearance : function(val, state){
			state['checkClearance'] = val;
		},
		creditLimit : function(val, state){
			state['creditLimit'] = val;
		},
		debitLimit : function(val, state){
			state['debitLimit'] = val;
		},
		depositDueReminder : function(val, state){
			state['depositDueReminder'] = val;
		},
		depositDueReminderTypeId : function(val, state){
			state['depositDueReminderTypeId'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		isEnabled : function(val, state){
			state['isEnabled'] = val;
		},
		minimumBalance : function(val, state){
			state['minimumBalance'] = val;
		},
		paymentDueReminder : function(val, state){
			state['paymentDueReminder'] = val;
		},
		paymentDueReminderTypeId : function(val, state){
			state['paymentDueReminderTypeId'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		successfulTransfer : function(val, state){
			state['successfulTransfer'] = val;
		},
	};
	
	
	//Create the Model Class
	function UserAccountAlerts(defaultValues){
		var privateState = {};
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.alertId = defaultValues?(defaultValues["alertId"]?defaultValues["alertId"]:null):null;
			privateState.balanceUpdate = defaultValues?(defaultValues["balanceUpdate"]?defaultValues["balanceUpdate"]:null):null;
			privateState.balanceUpdateTypeId = defaultValues?(defaultValues["balanceUpdateTypeId"]?defaultValues["balanceUpdateTypeId"]:null):null;
			privateState.checkClearance = defaultValues?(defaultValues["checkClearance"]?defaultValues["checkClearance"]:null):null;
			privateState.creditLimit = defaultValues?(defaultValues["creditLimit"]?defaultValues["creditLimit"]:null):null;
			privateState.debitLimit = defaultValues?(defaultValues["debitLimit"]?defaultValues["debitLimit"]:null):null;
			privateState.depositDueReminder = defaultValues?(defaultValues["depositDueReminder"]?defaultValues["depositDueReminder"]:null):null;
			privateState.depositDueReminderTypeId = defaultValues?(defaultValues["depositDueReminderTypeId"]?defaultValues["depositDueReminderTypeId"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.isEnabled = defaultValues?(defaultValues["isEnabled"]?defaultValues["isEnabled"]:null):null;
			privateState.minimumBalance = defaultValues?(defaultValues["minimumBalance"]?defaultValues["minimumBalance"]:null):null;
			privateState.paymentDueReminder = defaultValues?(defaultValues["paymentDueReminder"]?defaultValues["paymentDueReminder"]:null):null;
			privateState.paymentDueReminderTypeId = defaultValues?(defaultValues["paymentDueReminderTypeId"]?defaultValues["paymentDueReminderTypeId"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.successfulTransfer = defaultValues?(defaultValues["successfulTransfer"]?defaultValues["successfulTransfer"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountName" : {
					get : function(){return privateState.accountName},
					set : function(val){
						setterFunctions['accountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alertId" : {
					get : function(){return privateState.alertId},
					set : function(val){
						setterFunctions['alertId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceUpdate" : {
					get : function(){return privateState.balanceUpdate},
					set : function(val){
						setterFunctions['balanceUpdate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceUpdateTypeId" : {
					get : function(){return privateState.balanceUpdateTypeId},
					set : function(val){
						setterFunctions['balanceUpdateTypeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkClearance" : {
					get : function(){return privateState.checkClearance},
					set : function(val){
						setterFunctions['checkClearance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditLimit" : {
					get : function(){return privateState.creditLimit},
					set : function(val){
						setterFunctions['creditLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debitLimit" : {
					get : function(){return privateState.debitLimit},
					set : function(val){
						setterFunctions['debitLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"depositDueReminder" : {
					get : function(){return privateState.depositDueReminder},
					set : function(val){
						setterFunctions['depositDueReminder'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"depositDueReminderTypeId" : {
					get : function(){return privateState.depositDueReminderTypeId},
					set : function(val){
						setterFunctions['depositDueReminderTypeId'].call(this,val,privateState);
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
				"isEnabled" : {
					get : function(){return privateState.isEnabled},
					set : function(val){
						setterFunctions['isEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"minimumBalance" : {
					get : function(){return privateState.minimumBalance},
					set : function(val){
						setterFunctions['minimumBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentDueReminder" : {
					get : function(){return privateState.paymentDueReminder},
					set : function(val){
						setterFunctions['paymentDueReminder'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentDueReminderTypeId" : {
					get : function(){return privateState.paymentDueReminderTypeId},
					set : function(val){
						setterFunctions['paymentDueReminderTypeId'].call(this,val,privateState);
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
				"successfulTransfer" : {
					get : function(){return privateState.successfulTransfer},
					set : function(val){
						setterFunctions['successfulTransfer'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UserAccountAlerts);
	
	//Create new class level validator object
	BaseModel.Validator.call(UserAccountAlerts);
	
	var registerValidatorBackup = UserAccountAlerts.registerValidator;
	
	UserAccountAlerts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UserAccountAlerts.isValid(this, propName, val) ){
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
	//For Operation 'getUserAccountAlertsForAdmin' with service id 'GetUserAccountAlertsForAdmin4127'
	UserAccountAlerts.getUserAccountAlertsForAdmin = function(params, onCompletion){
		return UserAccountAlerts.customVerb('getUserAccountAlertsForAdmin', params, onCompletion);
	};
	
	var relations = [
	];
	
	UserAccountAlerts.relations = relations;
	
	UserAccountAlerts.prototype.isValid = function(){
		return UserAccountAlerts.isValid(this);
	};
	
	UserAccountAlerts.prototype.objModelName = "UserAccountAlerts";
	
	return UserAccountAlerts;
});