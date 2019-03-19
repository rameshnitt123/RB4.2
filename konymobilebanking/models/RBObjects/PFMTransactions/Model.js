define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		categoryId : function(val, state){
			state['categoryId'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		fromAccountName : function(val, state){
			state['fromAccountName'] = val;
		},
		fromAccountNumber : function(val, state){
			state['fromAccountNumber'] = val;
		},
		getMonthlyTransactions : function(val, state){
			state['getMonthlyTransactions'] = val;
		},
		getUncategorisedCount : function(val, state){
			state['getUncategorisedCount'] = val;
		},
		isAnalyzed : function(val, state){
			state['isAnalyzed'] = val;
		},
		isMappedToMerchant : function(val, state){
			state['isMappedToMerchant'] = val;
		},
		monthId : function(val, state){
			state['monthId'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		transactionAmount : function(val, state){
			state['transactionAmount'] = val;
		},
		transactionDate : function(val, state){
			state['transactionDate'] = val;
		},
		transactionDescription : function(val, state){
			state['transactionDescription'] = val;
		},
		transactionId : function(val, state){
			state['transactionId'] = val;
		},
		transactionNotes : function(val, state){
			state['transactionNotes'] = val;
		},
		pfmtransactionlist : function(val, state){
			state['pfmtransactionlist'] = val;
		},
		toAccountName : function(val, state){
			state['toAccountName'] = val;
		},
		toAccountNumber : function(val, state){
			state['toAccountNumber'] = val;
		},
		year : function(val, state){
			state['year'] = val;
		},
		sortby : function(val, state){
			state['sortby'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		notes : function(val, state){
			state['notes'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMTransactions(defaultValues){
		var privateState = {};
			privateState.categoryId = defaultValues?(defaultValues["categoryId"]?defaultValues["categoryId"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.fromAccountName = defaultValues?(defaultValues["fromAccountName"]?defaultValues["fromAccountName"]:null):null;
			privateState.fromAccountNumber = defaultValues?(defaultValues["fromAccountNumber"]?defaultValues["fromAccountNumber"]:null):null;
			privateState.getMonthlyTransactions = defaultValues?(defaultValues["getMonthlyTransactions"]?defaultValues["getMonthlyTransactions"]:null):null;
			privateState.getUncategorisedCount = defaultValues?(defaultValues["getUncategorisedCount"]?defaultValues["getUncategorisedCount"]:null):null;
			privateState.isAnalyzed = defaultValues?(defaultValues["isAnalyzed"]?defaultValues["isAnalyzed"]:null):null;
			privateState.isMappedToMerchant = defaultValues?(defaultValues["isMappedToMerchant"]?defaultValues["isMappedToMerchant"]:null):null;
			privateState.monthId = defaultValues?(defaultValues["monthId"]?defaultValues["monthId"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.transactionAmount = defaultValues?(defaultValues["transactionAmount"]?defaultValues["transactionAmount"]:null):null;
			privateState.transactionDate = defaultValues?(defaultValues["transactionDate"]?defaultValues["transactionDate"]:null):null;
			privateState.transactionDescription = defaultValues?(defaultValues["transactionDescription"]?defaultValues["transactionDescription"]:null):null;
			privateState.transactionId = defaultValues?(defaultValues["transactionId"]?defaultValues["transactionId"]:null):null;
			privateState.transactionNotes = defaultValues?(defaultValues["transactionNotes"]?defaultValues["transactionNotes"]:null):null;
			privateState.pfmtransactionlist = defaultValues?(defaultValues["pfmtransactionlist"]?defaultValues["pfmtransactionlist"]:null):null;
			privateState.toAccountName = defaultValues?(defaultValues["toAccountName"]?defaultValues["toAccountName"]:null):null;
			privateState.toAccountNumber = defaultValues?(defaultValues["toAccountNumber"]?defaultValues["toAccountNumber"]:null):null;
			privateState.year = defaultValues?(defaultValues["year"]?defaultValues["year"]:null):null;
			privateState.sortby = defaultValues?(defaultValues["sortby"]?defaultValues["sortby"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.notes = defaultValues?(defaultValues["notes"]?defaultValues["notes"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"categoryId" : {
					get : function(){return privateState.categoryId},
					set : function(val){
						setterFunctions['categoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"categoryName" : {
					get : function(){return privateState.categoryName},
					set : function(val){
						setterFunctions['categoryName'].call(this,val,privateState);
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
				"fromAccountName" : {
					get : function(){return privateState.fromAccountName},
					set : function(val){
						setterFunctions['fromAccountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromAccountNumber" : {
					get : function(){return privateState.fromAccountNumber},
					set : function(val){
						setterFunctions['fromAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"getMonthlyTransactions" : {
					get : function(){return privateState.getMonthlyTransactions},
					set : function(val){
						setterFunctions['getMonthlyTransactions'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"getUncategorisedCount" : {
					get : function(){return privateState.getUncategorisedCount},
					set : function(val){
						setterFunctions['getUncategorisedCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isAnalyzed" : {
					get : function(){return privateState.isAnalyzed},
					set : function(val){
						setterFunctions['isAnalyzed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isMappedToMerchant" : {
					get : function(){return privateState.isMappedToMerchant},
					set : function(val){
						setterFunctions['isMappedToMerchant'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"monthId" : {
					get : function(){return privateState.monthId},
					set : function(val){
						setterFunctions['monthId'].call(this,val,privateState);
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
				"transactionAmount" : {
					get : function(){return privateState.transactionAmount},
					set : function(val){
						setterFunctions['transactionAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionDate" : {
					get : function(){return privateState.transactionDate},
					set : function(val){
						setterFunctions['transactionDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionDescription" : {
					get : function(){return privateState.transactionDescription},
					set : function(val){
						setterFunctions['transactionDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionId" : {
					get : function(){return privateState.transactionId},
					set : function(val){
						setterFunctions['transactionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionNotes" : {
					get : function(){return privateState.transactionNotes},
					set : function(val){
						setterFunctions['transactionNotes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pfmtransactionlist" : {
					get : function(){return privateState.pfmtransactionlist},
					set : function(val){
						setterFunctions['pfmtransactionlist'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toAccountName" : {
					get : function(){return privateState.toAccountName},
					set : function(val){
						setterFunctions['toAccountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toAccountNumber" : {
					get : function(){return privateState.toAccountNumber},
					set : function(val){
						setterFunctions['toAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"year" : {
					get : function(){return privateState.year},
					set : function(val){
						setterFunctions['year'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sortby" : {
					get : function(){return privateState.sortby},
					set : function(val){
						setterFunctions['sortby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"order" : {
					get : function(){return privateState.order},
					set : function(val){
						setterFunctions['order'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notes" : {
					get : function(){return privateState.notes},
					set : function(val){
						setterFunctions['notes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"description" : {
					get : function(){return privateState.description},
					set : function(val){
						setterFunctions['description'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMTransactions);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMTransactions);
	
	var registerValidatorBackup = PFMTransactions.registerValidator;
	
	PFMTransactions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMTransactions.isValid(this, propName, val) ){
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
	//For Operation 'updateBulkPFMTransaction' with service id 'updateBulkPFMTransaction5063'
	PFMTransactions.updateBulkPFMTransaction = function(params, onCompletion){
		return PFMTransactions.customVerb('updateBulkPFMTransaction', params, onCompletion);
	};
	
	var relations = [
	];
	
	PFMTransactions.relations = relations;
	
	PFMTransactions.prototype.isValid = function(){
		return PFMTransactions.isValid(this);
	};
	
	PFMTransactions.prototype.objModelName = "PFMTransactions";
	
	return PFMTransactions;
});