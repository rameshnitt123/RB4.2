define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		taxSubType : function(val, state){
			state['taxSubType'] = val;
		},
		softDelete : function(val, state){
			state['softDelete'] = val;
		},
		TemplateRecord_id : function(val, state){
			state['TemplateRecord_id'] = val;
		},
		TemplateSubRecord_id : function(val, state){
			state['TemplateSubRecord_id'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		TaxSubCategory_id : function(val, state){
			state['TaxSubCategory_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function TemplateSubRecord(defaultValues){
		var privateState = {};
			privateState.taxSubType = defaultValues?(defaultValues["taxSubType"]?defaultValues["taxSubType"]:null):null;
			privateState.softDelete = defaultValues?(defaultValues["softDelete"]?defaultValues["softDelete"]:null):null;
			privateState.TemplateRecord_id = defaultValues?(defaultValues["TemplateRecord_id"]?defaultValues["TemplateRecord_id"]:null):null;
			privateState.TemplateSubRecord_id = defaultValues?(defaultValues["TemplateSubRecord_id"]?defaultValues["TemplateSubRecord_id"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.TaxSubCategory_id = defaultValues?(defaultValues["TaxSubCategory_id"]?defaultValues["TaxSubCategory_id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"taxSubType" : {
					get : function(){return privateState.taxSubType},
					set : function(val){
						setterFunctions['taxSubType'].call(this,val,privateState);
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
				"TemplateSubRecord_id" : {
					get : function(){return privateState.TemplateSubRecord_id},
					set : function(val){
						setterFunctions['TemplateSubRecord_id'].call(this,val,privateState);
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
				"TaxSubCategory_id" : {
					get : function(){return privateState.TaxSubCategory_id},
					set : function(val){
						setterFunctions['TaxSubCategory_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(TemplateSubRecord);
	
	//Create new class level validator object
	BaseModel.Validator.call(TemplateSubRecord);
	
	var registerValidatorBackup = TemplateSubRecord.registerValidator;
	
	TemplateSubRecord.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( TemplateSubRecord.isValid(this, propName, val) ){
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
	//For Operation 'fetchTemplateSubRecords' with service id 'FetchAllTemplateSubRecords8307'
	TemplateSubRecord.fetchTemplateSubRecords = function(params, onCompletion){
		return TemplateSubRecord.customVerb('fetchTemplateSubRecords', params, onCompletion);
	};
	
	var relations = [
	];
	
	TemplateSubRecord.relations = relations;
	
	TemplateSubRecord.prototype.isValid = function(){
		return TemplateSubRecord.isValid(this);
	};
	
	TemplateSubRecord.prototype.objModelName = "TemplateSubRecord";
	
	return TemplateSubRecord;
});