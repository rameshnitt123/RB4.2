define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		AdditionalInfo : function(val, state){
			state['AdditionalInfo'] = val;
		},
		ToAccountType : function(val, state){
			state['ToAccountType'] = val;
		},
		Template_id : function(val, state){
			state['Template_id'] = val;
		},
		ABATRCNumber : function(val, state){
			state['ABATRCNumber'] = val;
		},
		softDelete : function(val, state){
			state['softDelete'] = val;
		},
		TemplateRecord_id : function(val, state){
			state['TemplateRecord_id'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		Record_Name : function(val, state){
			state['Record_Name'] = val;
		},
		ToAccountNumber : function(val, state){
			state['ToAccountNumber'] = val;
		},
		Detail_id : function(val, state){
			state['Detail_id'] = val;
		},
		IsZeroTaxDue : function(val, state){
			state['IsZeroTaxDue'] = val;
		},
		TaxType : function(val, state){
			state['TaxType'] = val;
		},
		EIN : function(val, state){
			state['EIN'] = val;
		},
		SubTaxCategory : function(val, state){
			state['SubTaxCategory'] = val;
		},
		EffectiveDate : function(val, state){
			state['EffectiveDate'] = val;
		},
		TemplateRequestTypeValue : function(val, state){
			state['TemplateRequestTypeValue'] = val;
		},
		ToAccountTypeValue : function(val, state){
			state['ToAccountTypeValue'] = val;
		},
		TaxType_id : function(val, state){
			state['TaxType_id'] = val;
		},
		ToAccountType_id : function(val, state){
			state['ToAccountType_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function TemplateRecords(defaultValues){
		var privateState = {};
			privateState.AdditionalInfo = defaultValues?(defaultValues["AdditionalInfo"]?defaultValues["AdditionalInfo"]:null):null;
			privateState.ToAccountType = defaultValues?(defaultValues["ToAccountType"]?defaultValues["ToAccountType"]:null):null;
			privateState.Template_id = defaultValues?(defaultValues["Template_id"]?defaultValues["Template_id"]:null):null;
			privateState.ABATRCNumber = defaultValues?(defaultValues["ABATRCNumber"]?defaultValues["ABATRCNumber"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.TemplateRecord_id = defaultValues?(defaultValues["TemplateRecord_id"]?defaultValues["TemplateRecord_id"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.Record_Name = defaultValues?(defaultValues["Record_Name"]?defaultValues["Record_Name"]:null):null;
			privateState.ToAccountNumber = defaultValues?(defaultValues["ToAccountNumber"]?defaultValues["ToAccountNumber"]:null):null;
			privateState.Detail_id = defaultValues?(defaultValues["Detail_id"]?defaultValues["Detail_id"]:null):null;
			privateState.IsZeroTaxDue = defaultValues?(defaultValues["IsZeroTaxDue"]?defaultValues["IsZeroTaxDue"]:null):null;
			privateState.TaxType = defaultValues?(defaultValues["TaxType"]?defaultValues["TaxType"]:null):null;
			privateState.EIN = defaultValues?(defaultValues["EIN"]?defaultValues["EIN"]:null):null;
			privateState.SubTaxCategory = defaultValues?(defaultValues["SubTaxCategory"]?defaultValues["SubTaxCategory"]:null):null;
			privateState.EffectiveDate = defaultValues?(defaultValues["EffectiveDate"]?defaultValues["EffectiveDate"]:null):null;
			privateState.TemplateRequestTypeValue = defaultValues?(defaultValues["TemplateRequestTypeValue"]?defaultValues["TemplateRequestTypeValue"]:null):null;
			privateState.ToAccountTypeValue = defaultValues?(defaultValues["ToAccountTypeValue"]?defaultValues["ToAccountTypeValue"]:null):null;
			privateState.TaxType_id = defaultValues?(defaultValues["TaxType_id"]?defaultValues["TaxType_id"]:null):null;
			privateState.ToAccountType_id = defaultValues?(defaultValues["ToAccountType_id"]?defaultValues["ToAccountType_id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"AdditionalInfo" : {
					get : function(){return privateState.AdditionalInfo},
					set : function(val){
						setterFunctions['AdditionalInfo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ToAccountType" : {
					get : function(){return privateState.ToAccountType},
					set : function(val){
						setterFunctions['ToAccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Template_id" : {
					get : function(){return privateState.Template_id},
					set : function(val){
						setterFunctions['Template_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ABATRCNumber" : {
					get : function(){return privateState.ABATRCNumber},
					set : function(val){
						setterFunctions['ABATRCNumber'].call(this,val,privateState);
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
				"TemplateRecord_id" : {
					get : function(){return privateState.TemplateRecord_id},
					set : function(val){
						setterFunctions['TemplateRecord_id'].call(this,val,privateState);
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
				"Record_Name" : {
					get : function(){return privateState.Record_Name},
					set : function(val){
						setterFunctions['Record_Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ToAccountNumber" : {
					get : function(){return privateState.ToAccountNumber},
					set : function(val){
						setterFunctions['ToAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Detail_id" : {
					get : function(){return privateState.Detail_id},
					set : function(val){
						setterFunctions['Detail_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsZeroTaxDue" : {
					get : function(){return privateState.IsZeroTaxDue},
					set : function(val){
						setterFunctions['IsZeroTaxDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TaxType" : {
					get : function(){return privateState.TaxType},
					set : function(val){
						setterFunctions['TaxType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EIN" : {
					get : function(){return privateState.EIN},
					set : function(val){
						setterFunctions['EIN'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SubTaxCategory" : {
					get : function(){return privateState.SubTaxCategory},
					set : function(val){
						setterFunctions['SubTaxCategory'].call(this,val,privateState);
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
				"TemplateRequestTypeValue" : {
					get : function(){return privateState.TemplateRequestTypeValue},
					set : function(val){
						setterFunctions['TemplateRequestTypeValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ToAccountTypeValue" : {
					get : function(){return privateState.ToAccountTypeValue},
					set : function(val){
						setterFunctions['ToAccountTypeValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TaxType_id" : {
					get : function(){return privateState.TaxType_id},
					set : function(val){
						setterFunctions['TaxType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ToAccountType_id" : {
					get : function(){return privateState.ToAccountType_id},
					set : function(val){
						setterFunctions['ToAccountType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TemplateRecords);
	
	//Create new class level validator object
	BaseModel.Validator.call(TemplateRecords);
	
	var registerValidatorBackup = TemplateRecords.registerValidator;
	
	TemplateRecords.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TemplateRecords.isValid(this, propName, val) ){
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
	//For Operation 'fetchTemplateRecordById' with service id 'FetchAllTemplateRecords3222'
	TemplateRecords.fetchTemplateRecordById = function(params, onCompletion){
		return TemplateRecords.customVerb('fetchTemplateRecordById', params, onCompletion);
	};
	
	var relations = [
	];
	
	TemplateRecords.relations = relations;
	
	TemplateRecords.prototype.isValid = function(){
		return TemplateRecords.isValid(this);
	};
	
	TemplateRecords.prototype.objModelName = "TemplateRecords";
	
	return TemplateRecords;
});