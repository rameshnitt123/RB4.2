define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TranscationSubRecord_id : function(val, state){
			state['TranscationSubRecord_id'] = val;
		},
		TransactionRecord_id : function(val, state){
			state['TransactionRecord_id'] = val;
		},
		TaxSubCategory_id : function(val, state){
			state['TaxSubCategory_id'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		softDelete : function(val, state){
			state['softDelete'] = val;
		},
		taxSubType : function(val, state){
			state['taxSubType'] = val;
		},
	};
	
	
	//Create the Model Class
	function TransactionSubRecord(defaultValues){
		var privateState = {};
			privateState.TranscationSubRecord_id = defaultValues?(defaultValues["TranscationSubRecord_id"]?defaultValues["TranscationSubRecord_id"]:null):null;
			privateState.TransactionRecord_id = defaultValues?(defaultValues["TransactionRecord_id"]?defaultValues["TransactionRecord_id"]:null):null;
			privateState.TaxSubCategory_id = defaultValues?(defaultValues["TaxSubCategory_id"]?defaultValues["TaxSubCategory_id"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.taxSubType = defaultValues?(defaultValues["taxSubType"]?defaultValues["taxSubType"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"TranscationSubRecord_id" : {
					get : function(){return privateState.TranscationSubRecord_id},
					set : function(val){
						setterFunctions['TranscationSubRecord_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TransactionRecord_id" : {
					get : function(){return privateState.TransactionRecord_id},
					set : function(val){
						setterFunctions['TransactionRecord_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TaxSubCategory_id" : {
					get : function(){return privateState.TaxSubCategory_id},
					set : function(val){
						setterFunctions['TaxSubCategory_id'].call(this,val,privateState);
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
				"softDelete" : {
					get : function(){return privateState.softDelete},
					set : function(val){
						setterFunctions['softDelete'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"taxSubType" : {
					get : function(){return privateState.taxSubType},
					set : function(val){
						setterFunctions['taxSubType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TransactionSubRecord);
	
	//Create new class level validator object
	BaseModel.Validator.call(TransactionSubRecord);
	
	var registerValidatorBackup = TransactionSubRecord.registerValidator;
	
	TransactionSubRecord.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TransactionSubRecord.isValid(this, propName, val) ){
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
	//For Operation 'fetchTransactionSubRecords' with service id 'FetchBBTransactionSubRecord4619'
	TransactionSubRecord.fetchTransactionSubRecords = function(params, onCompletion){
		return TransactionSubRecord.customVerb('fetchTransactionSubRecords', params, onCompletion);
	};
	
	var relations = [
	];
	
	TransactionSubRecord.relations = relations;
	
	TransactionSubRecord.prototype.isValid = function(){
		return TransactionSubRecord.isValid(this);
	};
	
	TransactionSubRecord.prototype.objModelName = "TransactionSubRecord";
	
	return TransactionSubRecord;
});