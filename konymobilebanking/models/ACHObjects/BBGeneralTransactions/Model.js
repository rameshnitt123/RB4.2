define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Transaction_id : function(val, state){
			state['Transaction_id'] = val;
		},
		TransactionDate : function(val, state){
			state['TransactionDate'] = val;
		},
		CreatedBy : function(val, state){
			state['CreatedBy'] = val;
		},
		Payee : function(val, state){
			state['Payee'] = val;
		},
		StatusValue : function(val, state){
			state['StatusValue'] = val;
		},
		Reccurence : function(val, state){
			state['Reccurence'] = val;
		},
		Frequency : function(val, state){
			state['Frequency'] = val;
		},
		Company_id : function(val, state){
			state['Company_id'] = val;
		},
		TransactionType_id : function(val, state){
			state['TransactionType_id'] = val;
		},
		CreatedOn : function(val, state){
			state['CreatedOn'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		companyName : function(val, state){
			state['companyName'] = val;
		},
		DebitOrCreditAccount : function(val, state){
			state['DebitOrCreditAccount'] = val;
		},
		TransactionType : function(val, state){
			state['TransactionType'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		EffectiveDate : function(val, state){
			state['EffectiveDate'] = val;
		},
		BBGeneralTransactionType_id : function(val, state){
			state['BBGeneralTransactionType_id'] = val;
		},
		TransactionEntry : function(val, state){
			state['TransactionEntry'] = val;
		},
		Approver : function(val, state){
			state['Approver'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
	};
	
	
	//Create the Model Class
	function BBGeneralTransactions(defaultValues){
		var privateState = {};
			privateState.Transaction_id = defaultValues?(defaultValues["Transaction_id"]?defaultValues["Transaction_id"]:null):null;
			privateState.TransactionDate = defaultValues?(defaultValues["TransactionDate"]?defaultValues["TransactionDate"]:null):null;
			privateState.CreatedBy = defaultValues?(defaultValues["CreatedBy"]?defaultValues["CreatedBy"]:null):null;
			privateState.Payee = defaultValues?(defaultValues["Payee"]?defaultValues["Payee"]:null):null;
			privateState.StatusValue = defaultValues?(defaultValues["StatusValue"]?defaultValues["StatusValue"]:null):null;
			privateState.Reccurence = defaultValues?(defaultValues["Reccurence"]?defaultValues["Reccurence"]:null):null;
			privateState.Frequency = defaultValues?(defaultValues["Frequency"]?defaultValues["Frequency"]:null):null;
			privateState.Company_id = defaultValues?(defaultValues["Company_id"]?defaultValues["Company_id"]:null):null;
			privateState.TransactionType_id = defaultValues?(defaultValues["TransactionType_id"]?defaultValues["TransactionType_id"]:null):null;
			privateState.CreatedOn = defaultValues?(defaultValues["CreatedOn"]?defaultValues["CreatedOn"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.companyName = defaultValues?(defaultValues["companyName"]?defaultValues["companyName"]:null):null;
			privateState.DebitOrCreditAccount = defaultValues?(defaultValues["DebitOrCreditAccount"]?defaultValues["DebitOrCreditAccount"]:null):null;
			privateState.TransactionType = defaultValues?(defaultValues["TransactionType"]?defaultValues["TransactionType"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.EffectiveDate = defaultValues?(defaultValues["EffectiveDate"]?defaultValues["EffectiveDate"]:null):null;
			privateState.BBGeneralTransactionType_id = defaultValues?(defaultValues["BBGeneralTransactionType_id"]?defaultValues["BBGeneralTransactionType_id"]:null):null;
			privateState.TransactionEntry = defaultValues?(defaultValues["TransactionEntry"]?defaultValues["TransactionEntry"]:null):null;
			privateState.Approver = defaultValues?(defaultValues["Approver"]?defaultValues["Approver"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Transaction_id" : {
					get : function(){return privateState.Transaction_id},
					set : function(val){
						setterFunctions['Transaction_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionDate" : {
					get : function(){return privateState.TransactionDate},
					set : function(val){
						setterFunctions['TransactionDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreatedBy" : {
					get : function(){return privateState.CreatedBy},
					set : function(val){
						setterFunctions['CreatedBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Payee" : {
					get : function(){return privateState.Payee},
					set : function(val){
						setterFunctions['Payee'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatusValue" : {
					get : function(){return privateState.StatusValue},
					set : function(val){
						setterFunctions['StatusValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Reccurence" : {
					get : function(){return privateState.Reccurence},
					set : function(val){
						setterFunctions['Reccurence'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Frequency" : {
					get : function(){return privateState.Frequency},
					set : function(val){
						setterFunctions['Frequency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Company_id" : {
					get : function(){return privateState.Company_id},
					set : function(val){
						setterFunctions['Company_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionType_id" : {
					get : function(){return privateState.TransactionType_id},
					set : function(val){
						setterFunctions['TransactionType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreatedOn" : {
					get : function(){return privateState.CreatedOn},
					set : function(val){
						setterFunctions['CreatedOn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Amount" : {
					get : function(){return privateState.Amount},
					set : function(val){
						setterFunctions['Amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"companyName" : {
					get : function(){return privateState.companyName},
					set : function(val){
						setterFunctions['companyName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DebitOrCreditAccount" : {
					get : function(){return privateState.DebitOrCreditAccount},
					set : function(val){
						setterFunctions['DebitOrCreditAccount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionType" : {
					get : function(){return privateState.TransactionType},
					set : function(val){
						setterFunctions['TransactionType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status" : {
					get : function(){return privateState.Status},
					set : function(val){
						setterFunctions['Status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EffectiveDate" : {
					get : function(){return privateState.EffectiveDate},
					set : function(val){
						setterFunctions['EffectiveDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"BBGeneralTransactionType_id" : {
					get : function(){return privateState.BBGeneralTransactionType_id},
					set : function(val){
						setterFunctions['BBGeneralTransactionType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionEntry" : {
					get : function(){return privateState.TransactionEntry},
					set : function(val){
						setterFunctions['TransactionEntry'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Approver" : {
					get : function(){return privateState.Approver},
					set : function(val){
						setterFunctions['Approver'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(BBGeneralTransactions);
	
	//Create new class level validator object
	BaseModel.Validator.call(BBGeneralTransactions);
	
	var registerValidatorBackup = BBGeneralTransactions.registerValidator;
	
	BBGeneralTransactions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( BBGeneralTransactions.isValid(this, propName, val) ){
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
	//For Operation 'getBBGeneralTransactionDetailsByID' with service id 'FetchBBGeneralTransactionDetails8448'
	BBGeneralTransactions.getBBGeneralTransactionDetailsByID = function(params, onCompletion){
		return BBGeneralTransactions.customVerb('getBBGeneralTransactionDetailsByID', params, onCompletion);
	};
	//For Operation 'RejectedGenTransactions' with service id 'FetchAllRejectedGeneralTransactions7860'
	BBGeneralTransactions.RejectedGenTransactions = function(params, onCompletion){
		return BBGeneralTransactions.customVerb('RejectedGenTransactions', params, onCompletion);
	};
	//For Operation 'createBBTransaction' with service id 'createBBGeneralTransaction2463'
	BBGeneralTransactions.createBBTransaction = function(params, onCompletion){
		return BBGeneralTransactions.customVerb('createBBTransaction', params, onCompletion);
	};
	
	var relations = [
	];
	
	BBGeneralTransactions.relations = relations;
	
	BBGeneralTransactions.prototype.isValid = function(){
		return BBGeneralTransactions.isValid(this);
	};
	
	BBGeneralTransactions.prototype.objModelName = "BBGeneralTransactions";
	
	return BBGeneralTransactions;
});