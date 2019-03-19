define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		BBGeneralTransactionType_id : function(val, state){
			state['BBGeneralTransactionType_id'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		TemplateRequestType_id : function(val, state){
			state['TemplateRequestType_id'] = val;
		},
		Request_id : function(val, state){
			state['Request_id'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		DebitAccount : function(val, state){
			state['DebitAccount'] = val;
		},
		CreatedOn : function(val, state){
			state['CreatedOn'] = val;
		},
		MaxAmount : function(val, state){
			state['MaxAmount'] = val;
		},
		TemplateType_id : function(val, state){
			state['TemplateType_id'] = val;
		},
		CompanyName : function(val, state){
			state['CompanyName'] = val;
		},
		RequestType : function(val, state){
			state['RequestType'] = val;
		},
		TemplateTypeValue : function(val, state){
			state['TemplateTypeValue'] = val;
		},
		softDelete : function(val, state){
			state['softDelete'] = val;
		},
		TransactionType_id : function(val, state){
			state['TransactionType_id'] = val;
		},
		CreatedBy : function(val, state){
			state['CreatedBy'] = val;
		},
		Company_id : function(val, state){
			state['Company_id'] = val;
		},
		TransactionTypeValue : function(val, state){
			state['TransactionTypeValue'] = val;
		},
		StatusValue : function(val, state){
			state['StatusValue'] = val;
		},
		Transaction_id : function(val, state){
			state['Transaction_id'] = val;
		},
		EffectiveDate : function(val, state){
			state['EffectiveDate'] = val;
		},
		TemplateName : function(val, state){
			state['TemplateName'] = val;
		},
		ConfirmationNumber : function(val, state){
			state['ConfirmationNumber'] = val;
		},
		Approver : function(val, state){
			state['Approver'] = val;
		},
		Records : function(val, state){
			state['Records'] = val;
		},
		TemplateDescription : function(val, state){
			state['TemplateDescription'] = val;
		},
		TotalAmount : function(val, state){
			state['TotalAmount'] = val;
		},
	};
	
	
	//Create the Model Class
	function ACHTransactions(defaultValues){
		var privateState = {};
			privateState.BBGeneralTransactionType_id = defaultValues?(defaultValues["BBGeneralTransactionType_id"]?defaultValues["BBGeneralTransactionType_id"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.TemplateRequestType_id = defaultValues?(defaultValues["TemplateRequestType_id"]?defaultValues["TemplateRequestType_id"]:null):null;
			privateState.Request_id = defaultValues?(defaultValues["Request_id"]?defaultValues["Request_id"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.DebitAccount = defaultValues?(defaultValues["DebitAccount"]?defaultValues["DebitAccount"]:null):null;
			privateState.CreatedOn = defaultValues?(defaultValues["CreatedOn"]?defaultValues["CreatedOn"]:null):null;
			privateState.MaxAmount = defaultValues?(defaultValues["MaxAmount"]?defaultValues["MaxAmount"]:null):null;
			privateState.TemplateType_id = defaultValues?(defaultValues["TemplateType_id"]?defaultValues["TemplateType_id"]:null):null;
			privateState.CompanyName = defaultValues?(defaultValues["CompanyName"]?defaultValues["CompanyName"]:null):null;
			privateState.RequestType = defaultValues?(defaultValues["RequestType"]?defaultValues["RequestType"]:null):null;
			privateState.TemplateTypeValue = defaultValues?(defaultValues["TemplateTypeValue"]?defaultValues["TemplateTypeValue"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.TransactionType_id = defaultValues?(defaultValues["TransactionType_id"]?defaultValues["TransactionType_id"]:null):null;
			privateState.CreatedBy = defaultValues?(defaultValues["CreatedBy"]?defaultValues["CreatedBy"]:null):null;
			privateState.Company_id = defaultValues?(defaultValues["Company_id"]?defaultValues["Company_id"]:null):null;
			privateState.TransactionTypeValue = defaultValues?(defaultValues["TransactionTypeValue"]?defaultValues["TransactionTypeValue"]:null):null;
			privateState.StatusValue = defaultValues?(defaultValues["StatusValue"]?defaultValues["StatusValue"]:null):null;
			privateState.Transaction_id = defaultValues?(defaultValues["Transaction_id"]?defaultValues["Transaction_id"]:null):null;
			privateState.EffectiveDate = defaultValues?(defaultValues["EffectiveDate"]?defaultValues["EffectiveDate"]:null):null;
			privateState.TemplateName = defaultValues?(defaultValues["TemplateName"]?defaultValues["TemplateName"]:null):null;
			privateState.ConfirmationNumber = defaultValues?(defaultValues["ConfirmationNumber"]?defaultValues["ConfirmationNumber"]:null):null;
			privateState.Approver = defaultValues?(defaultValues["Approver"]?defaultValues["Approver"]:null):null;
			privateState.Records = defaultValues?(defaultValues["Records"]?defaultValues["Records"]:null):null;
			privateState.TemplateDescription = defaultValues?(defaultValues["TemplateDescription"]?defaultValues["TemplateDescription"]:null):null;
			privateState.TotalAmount = defaultValues?(defaultValues["TotalAmount"]?defaultValues["TotalAmount"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"BBGeneralTransactionType_id" : {
					get : function(){return privateState.BBGeneralTransactionType_id},
					set : function(val){
						setterFunctions['BBGeneralTransactionType_id'].call(this,val,privateState);
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
				"TemplateRequestType_id" : {
					get : function(){return privateState.TemplateRequestType_id},
					set : function(val){
						setterFunctions['TemplateRequestType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Request_id" : {
					get : function(){return privateState.Request_id},
					set : function(val){
						setterFunctions['Request_id'].call(this,val,privateState);
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
				"DebitAccount" : {
					get : function(){return privateState.DebitAccount},
					set : function(val){
						setterFunctions['DebitAccount'].call(this,val,privateState);
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
				"MaxAmount" : {
					get : function(){return privateState.MaxAmount},
					set : function(val){
						setterFunctions['MaxAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateType_id" : {
					get : function(){return privateState.TemplateType_id},
					set : function(val){
						setterFunctions['TemplateType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CompanyName" : {
					get : function(){return privateState.CompanyName},
					set : function(val){
						setterFunctions['CompanyName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RequestType" : {
					get : function(){return privateState.RequestType},
					set : function(val){
						setterFunctions['RequestType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateTypeValue" : {
					get : function(){return privateState.TemplateTypeValue},
					set : function(val){
						setterFunctions['TemplateTypeValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softDelete" : {
					get : function(){return privateState.softDelete},
					set : function(val){
						setterFunctions['softDelete'].call(this,val,privateState);
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
				"CreatedBy" : {
					get : function(){return privateState.CreatedBy},
					set : function(val){
						setterFunctions['CreatedBy'].call(this,val,privateState);
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
				"TransactionTypeValue" : {
					get : function(){return privateState.TransactionTypeValue},
					set : function(val){
						setterFunctions['TransactionTypeValue'].call(this,val,privateState);
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
				"Transaction_id" : {
					get : function(){return privateState.Transaction_id},
					set : function(val){
						setterFunctions['Transaction_id'].call(this,val,privateState);
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
				"TemplateName" : {
					get : function(){return privateState.TemplateName},
					set : function(val){
						setterFunctions['TemplateName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ConfirmationNumber" : {
					get : function(){return privateState.ConfirmationNumber},
					set : function(val){
						setterFunctions['ConfirmationNumber'].call(this,val,privateState);
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
				"Records" : {
					get : function(){return privateState.Records},
					set : function(val){
						setterFunctions['Records'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateDescription" : {
					get : function(){return privateState.TemplateDescription},
					set : function(val){
						setterFunctions['TemplateDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalAmount" : {
					get : function(){return privateState.TotalAmount},
					set : function(val){
						setterFunctions['TotalAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ACHTransactions);
	
	//Create new class level validator object
	BaseModel.Validator.call(ACHTransactions);
	
	var registerValidatorBackup = ACHTransactions.registerValidator;
	
	ACHTransactions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ACHTransactions.isValid(this, propName, val) ){
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
	//For Operation 'getACHTransactionDetailsById' with service id 'FetchACHTransactionDetails8543'
	ACHTransactions.getACHTransactionDetailsById = function(params, onCompletion){
		return ACHTransactions.customVerb('getACHTransactionDetailsById', params, onCompletion);
	};
	//For Operation 'createACHTransaction' with service id 'createTransaction2519'
	ACHTransactions.createACHTransaction = function(params, onCompletion){
		return ACHTransactions.customVerb('createACHTransaction', params, onCompletion);
	};
	//For Operation 'RejectedTransactions' with service id 'FetchAllRejectedACHTransactions9987'
	ACHTransactions.RejectedTransactions = function(params, onCompletion){
		return ACHTransactions.customVerb('RejectedTransactions', params, onCompletion);
	};
	//For Operation 'SaveAsTemplate' with service id 'SaveTransactionAsTemplate3794'
	ACHTransactions.SaveAsTemplate = function(params, onCompletion){
		return ACHTransactions.customVerb('SaveAsTemplate', params, onCompletion);
	};
	
	var relations = [
	];
	
	ACHTransactions.relations = relations;
	
	ACHTransactions.prototype.isValid = function(){
		return ACHTransactions.isValid(this);
	};
	
	ACHTransactions.prototype.objModelName = "ACHTransactions";
	
	return ACHTransactions;
});