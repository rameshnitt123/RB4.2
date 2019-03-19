define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		FileName : function(val, state){
			state['FileName'] = val;
		},
		ACHFileID : function(val, state){
			state['ACHFileID'] = val;
		},
		CompanyName : function(val, state){
			state['CompanyName'] = val;
		},
		UploadedBy : function(val, state){
			state['UploadedBy'] = val;
		},
		UpdatedDateAndTime : function(val, state){
			state['UpdatedDateAndTime'] = val;
		},
		NumberOfDebits : function(val, state){
			state['NumberOfDebits'] = val;
		},
		NumberOfPrenotes : function(val, state){
			state['NumberOfPrenotes'] = val;
		},
		UploadedByID : function(val, state){
			state['UploadedByID'] = val;
		},
		NumberOfCredits : function(val, state){
			state['NumberOfCredits'] = val;
		},
		softDelete : function(val, state){
			state['softDelete'] = val;
		},
		CompanyID : function(val, state){
			state['CompanyID'] = val;
		},
		FormatTypeID : function(val, state){
			state['FormatTypeID'] = val;
		},
		FileStatus : function(val, state){
			state['FileStatus'] = val;
		},
		FileSize : function(val, state){
			state['FileSize'] = val;
		},
		FileStatusID : function(val, state){
			state['FileStatusID'] = val;
		},
		TransactionTypeID : function(val, state){
			state['TransactionTypeID'] = val;
		},
		TotalCreditAmount : function(val, state){
			state['TotalCreditAmount'] = val;
		},
		TotalDebitAmount : function(val, state){
			state['TotalDebitAmount'] = val;
		},
		FileRequestType : function(val, state){
			state['FileRequestType'] = val;
		},
		FileFormatType : function(val, state){
			state['FileFormatType'] = val;
		},
		NumberOfRecords : function(val, state){
			state['NumberOfRecords'] = val;
		},
		Request_id : function(val, state){
			state['Request_id'] = val;
		},
		Approver : function(val, state){
			state['Approver'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
	};
	
	
	//Create the Model Class
	function ACHFile(defaultValues){
		var privateState = {};
			privateState.FileName = defaultValues?(defaultValues["FileName"]?defaultValues["FileName"]:null):null;
			privateState.ACHFileID = defaultValues?(defaultValues["ACHFileID"]?defaultValues["ACHFileID"]:null):null;
			privateState.CompanyName = defaultValues?(defaultValues["CompanyName"]?defaultValues["CompanyName"]:null):null;
			privateState.UploadedBy = defaultValues?(defaultValues["UploadedBy"]?defaultValues["UploadedBy"]:null):null;
			privateState.UpdatedDateAndTime = defaultValues?(defaultValues["UpdatedDateAndTime"]?defaultValues["UpdatedDateAndTime"]:null):null;
			privateState.NumberOfDebits = defaultValues?(defaultValues["NumberOfDebits"]?defaultValues["NumberOfDebits"]:null):null;
			privateState.NumberOfPrenotes = defaultValues?(defaultValues["NumberOfPrenotes"]?defaultValues["NumberOfPrenotes"]:null):null;
			privateState.UploadedByID = defaultValues?(defaultValues["UploadedByID"]?defaultValues["UploadedByID"]:null):null;
			privateState.NumberOfCredits = defaultValues?(defaultValues["NumberOfCredits"]?defaultValues["NumberOfCredits"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.CompanyID = defaultValues?(defaultValues["CompanyID"]?defaultValues["CompanyID"]:null):null;
			privateState.FormatTypeID = defaultValues?(defaultValues["FormatTypeID"]?defaultValues["FormatTypeID"]:null):null;
			privateState.FileStatus = defaultValues?(defaultValues["FileStatus"]?defaultValues["FileStatus"]:null):null;
			privateState.FileSize = defaultValues?(defaultValues["FileSize"]?defaultValues["FileSize"]:null):null;
			privateState.FileStatusID = defaultValues?(defaultValues["FileStatusID"]?defaultValues["FileStatusID"]:null):null;
			privateState.TransactionTypeID = defaultValues?(defaultValues["TransactionTypeID"]?defaultValues["TransactionTypeID"]:null):null;
			privateState.TotalCreditAmount = defaultValues?(defaultValues["TotalCreditAmount"]?defaultValues["TotalCreditAmount"]:null):null;
			privateState.TotalDebitAmount = defaultValues?(defaultValues["TotalDebitAmount"]?defaultValues["TotalDebitAmount"]:null):null;
			privateState.FileRequestType = defaultValues?(defaultValues["FileRequestType"]?defaultValues["FileRequestType"]:null):null;
			privateState.FileFormatType = defaultValues?(defaultValues["FileFormatType"]?defaultValues["FileFormatType"]:null):null;
			privateState.NumberOfRecords = defaultValues?(defaultValues["NumberOfRecords"]?defaultValues["NumberOfRecords"]:null):null;
			privateState.Request_id = defaultValues?(defaultValues["Request_id"]?defaultValues["Request_id"]:null):null;
			privateState.Approver = defaultValues?(defaultValues["Approver"]?defaultValues["Approver"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"FileName" : {
					get : function(){return privateState.FileName},
					set : function(val){
						setterFunctions['FileName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ACHFileID" : {
					get : function(){return privateState.ACHFileID},
					set : function(val){
						setterFunctions['ACHFileID'].call(this,val,privateState);
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
				"UploadedBy" : {
					get : function(){return privateState.UploadedBy},
					set : function(val){
						setterFunctions['UploadedBy'].call(this,val,privateState);
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
				"UploadedByID" : {
					get : function(){return privateState.UploadedByID},
					set : function(val){
						setterFunctions['UploadedByID'].call(this,val,privateState);
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
				"softDelete" : {
					get : function(){return privateState.softDelete},
					set : function(val){
						setterFunctions['softDelete'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CompanyID" : {
					get : function(){return privateState.CompanyID},
					set : function(val){
						setterFunctions['CompanyID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FormatTypeID" : {
					get : function(){return privateState.FormatTypeID},
					set : function(val){
						setterFunctions['FormatTypeID'].call(this,val,privateState);
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
				"FileSize" : {
					get : function(){return privateState.FileSize},
					set : function(val){
						setterFunctions['FileSize'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FileStatusID" : {
					get : function(){return privateState.FileStatusID},
					set : function(val){
						setterFunctions['FileStatusID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionTypeID" : {
					get : function(){return privateState.TransactionTypeID},
					set : function(val){
						setterFunctions['TransactionTypeID'].call(this,val,privateState);
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
				"TotalDebitAmount" : {
					get : function(){return privateState.TotalDebitAmount},
					set : function(val){
						setterFunctions['TotalDebitAmount'].call(this,val,privateState);
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
				"FileFormatType" : {
					get : function(){return privateState.FileFormatType},
					set : function(val){
						setterFunctions['FileFormatType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfRecords" : {
					get : function(){return privateState.NumberOfRecords},
					set : function(val){
						setterFunctions['NumberOfRecords'].call(this,val,privateState);
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
	BaseModel.isParentOf(ACHFile);
	
	//Create new class level validator object
	BaseModel.Validator.call(ACHFile);
	
	var registerValidatorBackup = ACHFile.registerValidator;
	
	ACHFile.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ACHFile.isValid(this, propName, val) ){
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
	//For Operation 'RejectedFiles' with service id 'FetchAllRejectedACHFiles3625'
	ACHFile.RejectedFiles = function(params, onCompletion){
		return ACHFile.customVerb('RejectedFiles', params, onCompletion);
	};
	//For Operation 'getFileDetailsByID' with service id 'FetchACHFileDetails8167'
	ACHFile.getFileDetailsByID = function(params, onCompletion){
		return ACHFile.customVerb('getFileDetailsByID', params, onCompletion);
	};
	
	var relations = [
	];
	
	ACHFile.relations = relations;
	
	ACHFile.prototype.isValid = function(){
		return ACHFile.isValid(this);
	};
	
	ACHFile.prototype.objModelName = "ACHFile";
	
	return ACHFile;
});