define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountID : function(val, state){
			state['accountID'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		availableBalance : function(val, state){
			state['availableBalance'] = val;
		},
		availablePoints : function(val, state){
			state['availablePoints'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		creditCardNumber : function(val, state){
			state['creditCardNumber'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		currentBalance : function(val, state){
			state['currentBalance'] = val;
		},
		dueDate : function(val, state){
			state['dueDate'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		interestRate : function(val, state){
			state['interestRate'] = val;
		},
		isPFM : function(val, state){
			state['isPFM'] = val;
		},
		lastStatementBalance : function(val, state){
			state['lastStatementBalance'] = val;
		},
		maturityDate : function(val, state){
			state['maturityDate'] = val;
		},
		minimumDue : function(val, state){
			state['minimumDue'] = val;
		},
		nickName : function(val, state){
			state['nickName'] = val;
		},
		openingDate : function(val, state){
			state['openingDate'] = val;
		},
		outstandingBalance : function(val, state){
			state['outstandingBalance'] = val;
		},
		paymentTerm : function(val, state){
			state['paymentTerm'] = val;
		},
		principalValue : function(val, state){
			state['principalValue'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		supportBillPay : function(val, state){
			state['supportBillPay'] = val;
		},
		supportDeposit : function(val, state){
			state['supportDeposit'] = val;
		},
		supportTransferFrom : function(val, state){
			state['supportTransferFrom'] = val;
		},
		supportTransferTo : function(val, state){
			state['supportTransferTo'] = val;
		},
		transactionLimit : function(val, state){
			state['transactionLimit'] = val;
		},
		transferLimit : function(val, state){
			state['transferLimit'] = val;
		},
		deviceID : function(val, state){
			state['deviceID'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		totalCreditMonths : function(val, state){
			state['totalCreditMonths'] = val;
		},
		totalDebitsMonth : function(val, state){
			state['totalDebitsMonth'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMAccounts(defaultValues){
		var privateState = {};
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.availableBalance = defaultValues?(defaultValues["availableBalance"]?defaultValues["availableBalance"]:null):null;
			privateState.availablePoints = defaultValues?(defaultValues["availablePoints"]?defaultValues["availablePoints"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.creditCardNumber = defaultValues?(defaultValues["creditCardNumber"]?defaultValues["creditCardNumber"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.currentBalance = defaultValues?(defaultValues["currentBalance"]?defaultValues["currentBalance"]:null):null;
			privateState.dueDate = defaultValues?(defaultValues["dueDate"]?defaultValues["dueDate"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.interestRate = defaultValues?(defaultValues["interestRate"]?defaultValues["interestRate"]:null):null;
			privateState.isPFM = defaultValues?(defaultValues["isPFM"]?defaultValues["isPFM"]:null):null;
			privateState.lastStatementBalance = defaultValues?(defaultValues["lastStatementBalance"]?defaultValues["lastStatementBalance"]:null):null;
			privateState.maturityDate = defaultValues?(defaultValues["maturityDate"]?defaultValues["maturityDate"]:null):null;
			privateState.minimumDue = defaultValues?(defaultValues["minimumDue"]?defaultValues["minimumDue"]:null):null;
			privateState.nickName = defaultValues?(defaultValues["nickName"]?defaultValues["nickName"]:null):null;
			privateState.openingDate = defaultValues?(defaultValues["openingDate"]?defaultValues["openingDate"]:null):null;
			privateState.outstandingBalance = defaultValues?(defaultValues["outstandingBalance"]?defaultValues["outstandingBalance"]:null):null;
			privateState.paymentTerm = defaultValues?(defaultValues["paymentTerm"]?defaultValues["paymentTerm"]:null):null;
			privateState.principalValue = defaultValues?(defaultValues["principalValue"]?defaultValues["principalValue"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.supportBillPay = defaultValues?(defaultValues["supportBillPay"]?defaultValues["supportBillPay"]:null):null;
			privateState.supportDeposit = defaultValues?(defaultValues["supportDeposit"]?defaultValues["supportDeposit"]:null):null;
			privateState.supportTransferFrom = defaultValues?(defaultValues["supportTransferFrom"]?defaultValues["supportTransferFrom"]:null):null;
			privateState.supportTransferTo = defaultValues?(defaultValues["supportTransferTo"]?defaultValues["supportTransferTo"]:null):null;
			privateState.transactionLimit = defaultValues?(defaultValues["transactionLimit"]?defaultValues["transactionLimit"]:null):null;
			privateState.transferLimit = defaultValues?(defaultValues["transferLimit"]?defaultValues["transferLimit"]:null):null;
			privateState.deviceID = defaultValues?(defaultValues["deviceID"]?defaultValues["deviceID"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.totalCreditMonths = defaultValues?(defaultValues["totalCreditMonths"]?defaultValues["totalCreditMonths"]:null):null;
			privateState.totalDebitsMonth = defaultValues?(defaultValues["totalDebitsMonth"]?defaultValues["totalDebitsMonth"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountName" : {
					get : function(){return privateState.accountName},
					set : function(val){
						setterFunctions['accountName'].call(this,val,privateState);
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
				"availableBalance" : {
					get : function(){return privateState.availableBalance},
					set : function(val){
						setterFunctions['availableBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"availablePoints" : {
					get : function(){return privateState.availablePoints},
					set : function(val){
						setterFunctions['availablePoints'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName" : {
					get : function(){return privateState.bankName},
					set : function(val){
						setterFunctions['bankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditCardNumber" : {
					get : function(){return privateState.creditCardNumber},
					set : function(val){
						setterFunctions['creditCardNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currencyCode" : {
					get : function(){return privateState.currencyCode},
					set : function(val){
						setterFunctions['currencyCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currentBalance" : {
					get : function(){return privateState.currentBalance},
					set : function(val){
						setterFunctions['currentBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dueDate" : {
					get : function(){return privateState.dueDate},
					set : function(val){
						setterFunctions['dueDate'].call(this,val,privateState);
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
				"interestRate" : {
					get : function(){return privateState.interestRate},
					set : function(val){
						setterFunctions['interestRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPFM" : {
					get : function(){return privateState.isPFM},
					set : function(val){
						setterFunctions['isPFM'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastStatementBalance" : {
					get : function(){return privateState.lastStatementBalance},
					set : function(val){
						setterFunctions['lastStatementBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityDate" : {
					get : function(){return privateState.maturityDate},
					set : function(val){
						setterFunctions['maturityDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"minimumDue" : {
					get : function(){return privateState.minimumDue},
					set : function(val){
						setterFunctions['minimumDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"nickName" : {
					get : function(){return privateState.nickName},
					set : function(val){
						setterFunctions['nickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"openingDate" : {
					get : function(){return privateState.openingDate},
					set : function(val){
						setterFunctions['openingDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"outstandingBalance" : {
					get : function(){return privateState.outstandingBalance},
					set : function(val){
						setterFunctions['outstandingBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentTerm" : {
					get : function(){return privateState.paymentTerm},
					set : function(val){
						setterFunctions['paymentTerm'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"principalValue" : {
					get : function(){return privateState.principalValue},
					set : function(val){
						setterFunctions['principalValue'].call(this,val,privateState);
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
				"supportBillPay" : {
					get : function(){return privateState.supportBillPay},
					set : function(val){
						setterFunctions['supportBillPay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportDeposit" : {
					get : function(){return privateState.supportDeposit},
					set : function(val){
						setterFunctions['supportDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferFrom" : {
					get : function(){return privateState.supportTransferFrom},
					set : function(val){
						setterFunctions['supportTransferFrom'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferTo" : {
					get : function(){return privateState.supportTransferTo},
					set : function(val){
						setterFunctions['supportTransferTo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionLimit" : {
					get : function(){return privateState.transactionLimit},
					set : function(val){
						setterFunctions['transactionLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transferLimit" : {
					get : function(){return privateState.transferLimit},
					set : function(val){
						setterFunctions['transferLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deviceID" : {
					get : function(){return privateState.deviceID},
					set : function(val){
						setterFunctions['deviceID'].call(this,val,privateState);
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
				"totalCreditMonths" : {
					get : function(){return privateState.totalCreditMonths},
					set : function(val){
						setterFunctions['totalCreditMonths'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalDebitsMonth" : {
					get : function(){return privateState.totalDebitsMonth},
					set : function(val){
						setterFunctions['totalDebitsMonth'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMAccounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMAccounts);
	
	var registerValidatorBackup = PFMAccounts.registerValidator;
	
	PFMAccounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMAccounts.isValid(this, propName, val) ){
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
	//For Operation 'getPFMAccounts' with service id 'getAccountsPostLogin5807'
	PFMAccounts.getPFMAccounts = function(params, onCompletion){
		return PFMAccounts.customVerb('getPFMAccounts', params, onCompletion);
	};
	
	var relations = [
	];
	
	PFMAccounts.relations = relations;
	
	PFMAccounts.prototype.isValid = function(){
		return PFMAccounts.isValid(this);
	};
	
	PFMAccounts.prototype.objModelName = "PFMAccounts";
	
	return PFMAccounts;
});