define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TransactionType : function(val, state){
			state['TransactionType'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		Request_id : function(val, state){
			state['Request_id'] = val;
		},
		CompanyName : function(val, state){
			state['CompanyName'] = val;
		},
		DebitAccount : function(val, state){
			state['DebitAccount'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		CreatedOn : function(val, state){
			state['CreatedOn'] = val;
		},
		CreatedBy : function(val, state){
			state['CreatedBy'] = val;
		},
		Company_id : function(val, state){
			state['Company_id'] = val;
		},
		RequestCreatedby : function(val, state){
			state['RequestCreatedby'] = val;
		},
		Payee : function(val, state){
			state['Payee'] = val;
		},
		Date : function(val, state){
			state['Date'] = val;
		},
		Transaction_id : function(val, state){
			state['Transaction_id'] = val;
		},
		Frequency : function(val, state){
			state['Frequency'] = val;
		},
		Reccurence : function(val, state){
			state['Reccurence'] = val;
		},
		BBGeneralTransactionType_id : function(val, state){
			state['BBGeneralTransactionType_id'] = val;
		},
		StatusId : function(val, state){
			state['StatusId'] = val;
		},
		TemplateRequestTypeId : function(val, state){
			state['TemplateRequestTypeId'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		TemplateTypeId : function(val, state){
			state['TemplateTypeId'] = val;
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
		TemplateType : function(val, state){
			state['TemplateType'] = val;
		},
		TransmittedDate : function(val, state){
			state['TransmittedDate'] = val;
		},
		TransactionId : function(val, state){
			state['TransactionId'] = val;
		},
		UpdatedDateAndTime : function(val, state){
			state['UpdatedDateAndTime'] = val;
		},
		MaxAmount : function(val, state){
			state['MaxAmount'] = val;
		},
		FileName : function(val, state){
			state['FileName'] = val;
		},
		NumberOfDebits : function(val, state){
			state['NumberOfDebits'] = val;
		},
		NumberOfPrenotes : function(val, state){
			state['NumberOfPrenotes'] = val;
		},
		NumberOfCredits : function(val, state){
			state['NumberOfCredits'] = val;
		},
		formatType : function(val, state){
			state['formatType'] = val;
		},
		ACHFileFormatType_id : function(val, state){
			state['ACHFileFormatType_id'] = val;
		},
		ACHFile_id : function(val, state){
			state['ACHFile_id'] = val;
		},
		FileSize : function(val, state){
			state['FileSize'] = val;
		},
		TotalDebitAmount : function(val, state){
			state['TotalDebitAmount'] = val;
		},
		TotalCreditAmount : function(val, state){
			state['TotalCreditAmount'] = val;
		},
		FileRequestType : function(val, state){
			state['FileRequestType'] = val;
		},
		DebitOrCreditAccount : function(val, state){
			state['DebitOrCreditAccount'] = val;
		},
		TemplateType_id : function(val, state){
			state['TemplateType_id'] = val;
		},
		TransactionTypeValue : function(val, state){
			state['TransactionTypeValue'] = val;
		},
		TemplateName : function(val, state){
			state['TemplateName'] = val;
		},
		createdts : function(val, state){
			state['createdts'] = val;
		},
		ActedBy : function(val, state){
			state['ActedBy'] = val;
		},
		Action : function(val, state){
			state['Action'] = val;
		},
		Comments : function(val, state){
			state['Comments'] = val;
		},
		FileStatus : function(val, state){
			state['FileStatus'] = val;
		},
		TotalAmount : function(val, state){
			state['TotalAmount'] = val;
		},
	};
	
	
	//Create the Model Class
	function MyApprovals(defaultValues){
		var privateState = {};
			privateState.TransactionType = defaultValues?(defaultValues["TransactionType"]?defaultValues["TransactionType"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.Request_id = defaultValues?(defaultValues["Request_id"]?defaultValues["Request_id"]:null):null;
			privateState.CompanyName = defaultValues?(defaultValues["CompanyName"]?defaultValues["CompanyName"]:null):null;
			privateState.DebitAccount = defaultValues?(defaultValues["DebitAccount"]?defaultValues["DebitAccount"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.CreatedOn = defaultValues?(defaultValues["CreatedOn"]?defaultValues["CreatedOn"]:null):null;
			privateState.CreatedBy = defaultValues?(defaultValues["CreatedBy"]?defaultValues["CreatedBy"]:null):null;
			privateState.Company_id = defaultValues?(defaultValues["Company_id"]?defaultValues["Company_id"]:null):null;
			privateState.RequestCreatedby = defaultValues?(defaultValues["RequestCreatedby"]?defaultValues["RequestCreatedby"]:null):null;
			privateState.Payee = defaultValues?(defaultValues["Payee"]?defaultValues["Payee"]:null):null;
			privateState.Date = defaultValues?(defaultValues["Date"]?defaultValues["Date"]:null):null;
			privateState.Transaction_id = defaultValues?(defaultValues["Transaction_id"]?defaultValues["Transaction_id"]:null):null;
			privateState.Frequency = defaultValues?(defaultValues["Frequency"]?defaultValues["Frequency"]:null):null;
			privateState.Reccurence = defaultValues?(defaultValues["Reccurence"]?defaultValues["Reccurence"]:null):null;
			privateState.BBGeneralTransactionType_id = defaultValues?(defaultValues["BBGeneralTransactionType_id"]?defaultValues["BBGeneralTransactionType_id"]:null):null;
			privateState.StatusId = defaultValues?(defaultValues["StatusId"]?defaultValues["StatusId"]:null):null;
			privateState.TemplateRequestTypeId = defaultValues?(defaultValues["TemplateRequestTypeId"]?defaultValues["TemplateRequestTypeId"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.TemplateTypeId = defaultValues?(defaultValues["TemplateTypeId"]?defaultValues["TemplateTypeId"]:null):null;
			privateState.RequestType = defaultValues?(defaultValues["RequestType"]?defaultValues["RequestType"]:null):null;
			privateState.TemplateTypeValue = defaultValues?(defaultValues["TemplateTypeValue"]?defaultValues["TemplateTypeValue"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.TransactionType_id = defaultValues?(defaultValues["TransactionType_id"]?defaultValues["TransactionType_id"]:null):null;
			privateState.TemplateType = defaultValues?(defaultValues["TemplateType"]?defaultValues["TemplateType"]:null):null;
			privateState.TransmittedDate = defaultValues?(defaultValues["TransmittedDate"]?defaultValues["TransmittedDate"]:null):null;
			privateState.TransactionId = defaultValues?(defaultValues["TransactionId"]?defaultValues["TransactionId"]:null):null;
			privateState.UpdatedDateAndTime = defaultValues?(defaultValues["UpdatedDateAndTime"]?defaultValues["UpdatedDateAndTime"]:null):null;
			privateState.MaxAmount = defaultValues?(defaultValues["MaxAmount"]?defaultValues["MaxAmount"]:null):null;
			privateState.FileName = defaultValues?(defaultValues["FileName"]?defaultValues["FileName"]:null):null;
			privateState.NumberOfDebits = defaultValues?(defaultValues["NumberOfDebits"]?defaultValues["NumberOfDebits"]:null):null;
			privateState.NumberOfPrenotes = defaultValues?(defaultValues["NumberOfPrenotes"]?defaultValues["NumberOfPrenotes"]:null):null;
			privateState.NumberOfCredits = defaultValues?(defaultValues["NumberOfCredits"]?defaultValues["NumberOfCredits"]:null):null;
			privateState.formatType = defaultValues?(defaultValues["formatType"]?defaultValues["formatType"]:null):null;
			privateState.ACHFileFormatType_id = defaultValues?(defaultValues["ACHFileFormatType_id"]?defaultValues["ACHFileFormatType_id"]:null):null;
			privateState.ACHFile_id = defaultValues?(defaultValues["ACHFile_id"]?defaultValues["ACHFile_id"]:null):null;
			privateState.FileSize = defaultValues?(defaultValues["FileSize"]?defaultValues["FileSize"]:null):null;
			privateState.TotalDebitAmount = defaultValues?(defaultValues["TotalDebitAmount"]?defaultValues["TotalDebitAmount"]:null):null;
			privateState.TotalCreditAmount = defaultValues?(defaultValues["TotalCreditAmount"]?defaultValues["TotalCreditAmount"]:null):null;
			privateState.FileRequestType = defaultValues?(defaultValues["FileRequestType"]?defaultValues["FileRequestType"]:null):null;
			privateState.DebitOrCreditAccount = defaultValues?(defaultValues["DebitOrCreditAccount"]?defaultValues["DebitOrCreditAccount"]:null):null;
			privateState.TemplateType_id = defaultValues?(defaultValues["TemplateType_id"]?defaultValues["TemplateType_id"]:null):null;
			privateState.TransactionTypeValue = defaultValues?(defaultValues["TransactionTypeValue"]?defaultValues["TransactionTypeValue"]:null):null;
			privateState.TemplateName = defaultValues?(defaultValues["TemplateName"]?defaultValues["TemplateName"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.ActedBy = defaultValues?(defaultValues["ActedBy"]?defaultValues["ActedBy"]:null):null;
			privateState.Action = defaultValues?(defaultValues["Action"]?defaultValues["Action"]:null):null;
			privateState.Comments = defaultValues?(defaultValues["Comments"]?defaultValues["Comments"]:null):null;
			privateState.FileStatus = defaultValues?(defaultValues["FileStatus"]?defaultValues["FileStatus"]:null):null;
			privateState.TotalAmount = defaultValues?(defaultValues["TotalAmount"]?defaultValues["TotalAmount"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"Request_id" : {
					get : function(){return privateState.Request_id},
					set : function(val){
						setterFunctions['Request_id'].call(this,val,privateState);
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
				"DebitAccount" : {
					get : function(){return privateState.DebitAccount},
					set : function(val){
						setterFunctions['DebitAccount'].call(this,val,privateState);
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
				"CreatedOn" : {
					get : function(){return privateState.CreatedOn},
					set : function(val){
						setterFunctions['CreatedOn'].call(this,val,privateState);
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
				"RequestCreatedby" : {
					get : function(){return privateState.RequestCreatedby},
					set : function(val){
						setterFunctions['RequestCreatedby'].call(this,val,privateState);
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
				"Date" : {
					get : function(){return privateState.Date},
					set : function(val){
						setterFunctions['Date'].call(this,val,privateState);
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
				"Frequency" : {
					get : function(){return privateState.Frequency},
					set : function(val){
						setterFunctions['Frequency'].call(this,val,privateState);
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
				"BBGeneralTransactionType_id" : {
					get : function(){return privateState.BBGeneralTransactionType_id},
					set : function(val){
						setterFunctions['BBGeneralTransactionType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatusId" : {
					get : function(){return privateState.StatusId},
					set : function(val){
						setterFunctions['StatusId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TemplateRequestTypeId" : {
					get : function(){return privateState.TemplateRequestTypeId},
					set : function(val){
						setterFunctions['TemplateRequestTypeId'].call(this,val,privateState);
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
				"TemplateTypeId" : {
					get : function(){return privateState.TemplateTypeId},
					set : function(val){
						setterFunctions['TemplateTypeId'].call(this,val,privateState);
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
				"TemplateType" : {
					get : function(){return privateState.TemplateType},
					set : function(val){
						setterFunctions['TemplateType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransmittedDate" : {
					get : function(){return privateState.TransmittedDate},
					set : function(val){
						setterFunctions['TransmittedDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionId" : {
					get : function(){return privateState.TransactionId},
					set : function(val){
						setterFunctions['TransactionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UpdatedDateAndTime" : {
					get : function(){return privateState.UpdatedDateAndTime},
					set : function(val){
						setterFunctions['UpdatedDateAndTime'].call(this,val,privateState);
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
				"FileName" : {
					get : function(){return privateState.FileName},
					set : function(val){
						setterFunctions['FileName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfDebits" : {
					get : function(){return privateState.NumberOfDebits},
					set : function(val){
						setterFunctions['NumberOfDebits'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfPrenotes" : {
					get : function(){return privateState.NumberOfPrenotes},
					set : function(val){
						setterFunctions['NumberOfPrenotes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfCredits" : {
					get : function(){return privateState.NumberOfCredits},
					set : function(val){
						setterFunctions['NumberOfCredits'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"formatType" : {
					get : function(){return privateState.formatType},
					set : function(val){
						setterFunctions['formatType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ACHFileFormatType_id" : {
					get : function(){return privateState.ACHFileFormatType_id},
					set : function(val){
						setterFunctions['ACHFileFormatType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ACHFile_id" : {
					get : function(){return privateState.ACHFile_id},
					set : function(val){
						setterFunctions['ACHFile_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FileSize" : {
					get : function(){return privateState.FileSize},
					set : function(val){
						setterFunctions['FileSize'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalDebitAmount" : {
					get : function(){return privateState.TotalDebitAmount},
					set : function(val){
						setterFunctions['TotalDebitAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalCreditAmount" : {
					get : function(){return privateState.TotalCreditAmount},
					set : function(val){
						setterFunctions['TotalCreditAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FileRequestType" : {
					get : function(){return privateState.FileRequestType},
					set : function(val){
						setterFunctions['FileRequestType'].call(this,val,privateState);
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
				"TemplateType_id" : {
					get : function(){return privateState.TemplateType_id},
					set : function(val){
						setterFunctions['TemplateType_id'].call(this,val,privateState);
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
				"TemplateName" : {
					get : function(){return privateState.TemplateName},
					set : function(val){
						setterFunctions['TemplateName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdts" : {
					get : function(){return privateState.createdts},
					set : function(val){
						setterFunctions['createdts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ActedBy" : {
					get : function(){return privateState.ActedBy},
					set : function(val){
						setterFunctions['ActedBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Action" : {
					get : function(){return privateState.Action},
					set : function(val){
						setterFunctions['Action'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Comments" : {
					get : function(){return privateState.Comments},
					set : function(val){
						setterFunctions['Comments'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FileStatus" : {
					get : function(){return privateState.FileStatus},
					set : function(val){
						setterFunctions['FileStatus'].call(this,val,privateState);
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
	BaseModel.isParentOf(MyApprovals);
	
	//Create new class level validator object
	BaseModel.Validator.call(MyApprovals);
	
	var registerValidatorBackup = MyApprovals.registerValidator;
	
	MyApprovals.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( MyApprovals.isValid(this, propName, val) ){
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
	//For Operation 'rejectACHTransaction' with service id 'ACHTransactionRequestAction9819'
	MyApprovals.rejectACHTransaction = function(params, onCompletion){
		return MyApprovals.customVerb('rejectACHTransaction', params, onCompletion);
	};
	//For Operation 'getACHFiles' with service id 'FetchAllACHFilesPendingForMyApproval2424'
	MyApprovals.getACHFiles = function(params, onCompletion){
		return MyApprovals.customVerb('getACHFiles', params, onCompletion);
	};
	//For Operation 'approveACHTransaction' with service id 'ACHTransactionRequestAction7849'
	MyApprovals.approveACHTransaction = function(params, onCompletion){
		return MyApprovals.customVerb('approveACHTransaction', params, onCompletion);
	};
	//For Operation 'approveACHFile' with service id 'ACHFileRequestAction8282'
	MyApprovals.approveACHFile = function(params, onCompletion){
		return MyApprovals.customVerb('approveACHFile', params, onCompletion);
	};
	//For Operation 'approveBBGeneralTransaction' with service id 'BBGeneralTransactionRequestAction7988'
	MyApprovals.approveBBGeneralTransaction = function(params, onCompletion){
		return MyApprovals.customVerb('approveBBGeneralTransaction', params, onCompletion);
	};
	//For Operation 'rejectBBGeneralTransaction' with service id 'BBGeneralTransactionRequestAction4761'
	MyApprovals.rejectBBGeneralTransaction = function(params, onCompletion){
		return MyApprovals.customVerb('rejectBBGeneralTransaction', params, onCompletion);
	};
	//For Operation 'getGeneralTransactions' with service id 'FetchAllBBGeneralTransactionsPendingForMyApproval4081'
	MyApprovals.getGeneralTransactions = function(params, onCompletion){
		return MyApprovals.customVerb('getGeneralTransactions', params, onCompletion);
	};
	//For Operation 'rejectACHFile' with service id 'ACHFileRequestAction8094'
	MyApprovals.rejectACHFile = function(params, onCompletion){
		return MyApprovals.customVerb('rejectACHFile', params, onCompletion);
	};
	//For Operation 'getACHTransactions' with service id 'FetchAllACHTransactionsPendingForMyApproval7518'
	MyApprovals.getACHTransactions = function(params, onCompletion){
		return MyApprovals.customVerb('getACHTransactions', params, onCompletion);
	};
	
	var relations = [
	];
	
	MyApprovals.relations = relations;
	
	MyApprovals.prototype.isValid = function(){
		return MyApprovals.isValid(this);
	};
	
	MyApprovals.prototype.objModelName = "MyApprovals";
	
	return MyApprovals;
});