define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		AccountId : function(val, state){
			state['AccountId'] = val;
		},
		Amount : function(val, state){
			state['Amount'] = val;
		},
		TransactionDate : function(val, state){
			state['TransactionDate'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		AvailableBalance : function(val, state){
			state['AvailableBalance'] = val;
		},
		ScheduledDate : function(val, state){
			state['ScheduledDate'] = val;
		},
		TransactionType : function(val, state){
			state['TransactionType'] = val;
		},
		allowed_attempts : function(val, state){
			state['allowed_attempts'] = val;
		},
		challenge_id : function(val, state){
			state['challenge_id'] = val;
		},
		challenge_type : function(val, state){
			state['challenge_type'] = val;
		},
		charged_amount : function(val, state){
			state['charged_amount'] = val;
		},
		charged_currency_type : function(val, state){
			state['charged_currency_type'] = val;
		},
		charge_policy : function(val, state){
			state['charge_policy'] = val;
		},
		charge_summary : function(val, state){
			state['charge_summary'] = val;
		},
		PayeeId : function(val, state){
			state['PayeeId'] = val;
		},
		end_date : function(val, state){
			state['end_date'] = val;
		},
		payee_account_id : function(val, state){
			state['payee_account_id'] = val;
		},
		payee_bank_id : function(val, state){
			state['payee_bank_id'] = val;
		},
		payer_account_id : function(val, state){
			state['payer_account_id'] = val;
		},
		payer_bank_id : function(val, state){
			state['payer_bank_id'] = val;
		},
		start_date : function(val, state){
			state['start_date'] = val;
		},
		transacted_amount : function(val, state){
			state['transacted_amount'] = val;
		},
		transacted_currency_type : function(val, state){
			state['transacted_currency_type'] = val;
		},
		transaction_description : function(val, state){
			state['transaction_description'] = val;
		},
		TransactionId : function(val, state){
			state['TransactionId'] = val;
		},
		transaction_ids : function(val, state){
			state['transaction_ids'] = val;
		},
		transaction_type : function(val, state){
			state['transaction_type'] = val;
		},
		transation_status : function(val, state){
			state['transation_status'] = val;
		},
		currency_type : function(val, state){
			state['currency_type'] = val;
		},
		account : function(val, state){
			state['account'] = val;
		},
		bank_name : function(val, state){
			state['bank_name'] = val;
		},
		main_user : function(val, state){
			state['main_user'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		bank_id : function(val, state){
			state['bank_id'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		PayPersonName : function(val, state){
			state['PayPersonName'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		no_of_transactions : function(val, state){
			state['no_of_transactions'] = val;
		},
		isSearch : function(val, state){
			state['isSearch'] = val;
		},
		keyword : function(val, state){
			state['keyword'] = val;
		},
		startDate : function(val, state){
			state['startDate'] = val;
		},
		endDate : function(val, state){
			state['endDate'] = val;
		},
		minAmount : function(val, state){
			state['minAmount'] = val;
		},
		maxAmount : function(val, state){
			state['maxAmount'] = val;
		},
		sortby : function(val, state){
			state['sortby'] = val;
		},
		orderby : function(val, state){
			state['orderby'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExternalTransactionsAggregation(defaultValues){
		var privateState = {};
			privateState.AccountId = defaultValues?(defaultValues["AccountId"]?defaultValues["AccountId"]:null):null;
			privateState.Amount = defaultValues?(defaultValues["Amount"]?defaultValues["Amount"]:null):null;
			privateState.TransactionDate = defaultValues?(defaultValues["TransactionDate"]?defaultValues["TransactionDate"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.AvailableBalance = defaultValues?(defaultValues["AvailableBalance"]?defaultValues["AvailableBalance"]:null):null;
			privateState.ScheduledDate = defaultValues?(defaultValues["ScheduledDate"]?defaultValues["ScheduledDate"]:null):null;
			privateState.TransactionType = defaultValues?(defaultValues["TransactionType"]?defaultValues["TransactionType"]:null):null;
			privateState.allowed_attempts = defaultValues?(defaultValues["allowed_attempts"]?defaultValues["allowed_attempts"]:null):null;
			privateState.challenge_id = defaultValues?(defaultValues["challenge_id"]?defaultValues["challenge_id"]:null):null;
			privateState.challenge_type = defaultValues?(defaultValues["challenge_type"]?defaultValues["challenge_type"]:null):null;
			privateState.charged_amount = defaultValues?(defaultValues["charged_amount"]?defaultValues["charged_amount"]:null):null;
			privateState.charged_currency_type = defaultValues?(defaultValues["charged_currency_type"]?defaultValues["charged_currency_type"]:null):null;
			privateState.charge_policy = defaultValues?(defaultValues["charge_policy"]?defaultValues["charge_policy"]:null):null;
			privateState.charge_summary = defaultValues?(defaultValues["charge_summary"]?defaultValues["charge_summary"]:null):null;
			privateState.PayeeId = defaultValues?(defaultValues["PayeeId"]?defaultValues["PayeeId"]:null):null;
			privateState.end_date = defaultValues?(defaultValues["end_date"]?defaultValues["end_date"]:null):null;
			privateState.payee_account_id = defaultValues?(defaultValues["payee_account_id"]?defaultValues["payee_account_id"]:null):null;
			privateState.payee_bank_id = defaultValues?(defaultValues["payee_bank_id"]?defaultValues["payee_bank_id"]:null):null;
			privateState.payer_account_id = defaultValues?(defaultValues["payer_account_id"]?defaultValues["payer_account_id"]:null):null;
			privateState.payer_bank_id = defaultValues?(defaultValues["payer_bank_id"]?defaultValues["payer_bank_id"]:null):null;
			privateState.start_date = defaultValues?(defaultValues["start_date"]?defaultValues["start_date"]:null):null;
			privateState.transacted_amount = defaultValues?(defaultValues["transacted_amount"]?defaultValues["transacted_amount"]:null):null;
			privateState.transacted_currency_type = defaultValues?(defaultValues["transacted_currency_type"]?defaultValues["transacted_currency_type"]:null):null;
			privateState.transaction_description = defaultValues?(defaultValues["transaction_description"]?defaultValues["transaction_description"]:null):null;
			privateState.TransactionId = defaultValues?(defaultValues["TransactionId"]?defaultValues["TransactionId"]:null):null;
			privateState.transaction_ids = defaultValues?(defaultValues["transaction_ids"]?defaultValues["transaction_ids"]:null):null;
			privateState.transaction_type = defaultValues?(defaultValues["transaction_type"]?defaultValues["transaction_type"]:null):null;
			privateState.transation_status = defaultValues?(defaultValues["transation_status"]?defaultValues["transation_status"]:null):null;
			privateState.currency_type = defaultValues?(defaultValues["currency_type"]?defaultValues["currency_type"]:null):null;
			privateState.account = defaultValues?(defaultValues["account"]?defaultValues["account"]:null):null;
			privateState.bank_name = defaultValues?(defaultValues["bank_name"]?defaultValues["bank_name"]:null):null;
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.PayPersonName = defaultValues?(defaultValues["PayPersonName"]?defaultValues["PayPersonName"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.no_of_transactions = defaultValues?(defaultValues["no_of_transactions"]?defaultValues["no_of_transactions"]:null):null;
			privateState.isSearch = defaultValues?(defaultValues["isSearch"]?defaultValues["isSearch"]:null):null;
			privateState.keyword = defaultValues?(defaultValues["keyword"]?defaultValues["keyword"]:null):null;
			privateState.startDate = defaultValues?(defaultValues["startDate"]?defaultValues["startDate"]:null):null;
			privateState.endDate = defaultValues?(defaultValues["endDate"]?defaultValues["endDate"]:null):null;
			privateState.minAmount = defaultValues?(defaultValues["minAmount"]?defaultValues["minAmount"]:null):null;
			privateState.maxAmount = defaultValues?(defaultValues["maxAmount"]?defaultValues["maxAmount"]:null):null;
			privateState.sortby = defaultValues?(defaultValues["sortby"]?defaultValues["sortby"]:null):null;
			privateState.orderby = defaultValues?(defaultValues["orderby"]?defaultValues["orderby"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"AccountId" : {
					get : function(){return privateState.AccountId},
					set : function(val){
						setterFunctions['AccountId'].call(this,val,privateState);
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
				"TransactionDate" : {
					get : function(){return privateState.TransactionDate},
					set : function(val){
						setterFunctions['TransactionDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"name" : {
					get : function(){return privateState.name},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AvailableBalance" : {
					get : function(){return privateState.AvailableBalance},
					set : function(val){
						setterFunctions['AvailableBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ScheduledDate" : {
					get : function(){return privateState.ScheduledDate},
					set : function(val){
						setterFunctions['ScheduledDate'].call(this,val,privateState);
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
				"allowed_attempts" : {
					get : function(){return privateState.allowed_attempts},
					set : function(val){
						setterFunctions['allowed_attempts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"challenge_id" : {
					get : function(){return privateState.challenge_id},
					set : function(val){
						setterFunctions['challenge_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"challenge_type" : {
					get : function(){return privateState.challenge_type},
					set : function(val){
						setterFunctions['challenge_type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"charged_amount" : {
					get : function(){return privateState.charged_amount},
					set : function(val){
						setterFunctions['charged_amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"charged_currency_type" : {
					get : function(){return privateState.charged_currency_type},
					set : function(val){
						setterFunctions['charged_currency_type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"charge_policy" : {
					get : function(){return privateState.charge_policy},
					set : function(val){
						setterFunctions['charge_policy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"charge_summary" : {
					get : function(){return privateState.charge_summary},
					set : function(val){
						setterFunctions['charge_summary'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PayeeId" : {
					get : function(){return privateState.PayeeId},
					set : function(val){
						setterFunctions['PayeeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"end_date" : {
					get : function(){return privateState.end_date},
					set : function(val){
						setterFunctions['end_date'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payee_account_id" : {
					get : function(){return privateState.payee_account_id},
					set : function(val){
						setterFunctions['payee_account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payee_bank_id" : {
					get : function(){return privateState.payee_bank_id},
					set : function(val){
						setterFunctions['payee_bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payer_account_id" : {
					get : function(){return privateState.payer_account_id},
					set : function(val){
						setterFunctions['payer_account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payer_bank_id" : {
					get : function(){return privateState.payer_bank_id},
					set : function(val){
						setterFunctions['payer_bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"start_date" : {
					get : function(){return privateState.start_date},
					set : function(val){
						setterFunctions['start_date'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transacted_amount" : {
					get : function(){return privateState.transacted_amount},
					set : function(val){
						setterFunctions['transacted_amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transacted_currency_type" : {
					get : function(){return privateState.transacted_currency_type},
					set : function(val){
						setterFunctions['transacted_currency_type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transaction_description" : {
					get : function(){return privateState.transaction_description},
					set : function(val){
						setterFunctions['transaction_description'].call(this,val,privateState);
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
				"transaction_ids" : {
					get : function(){return privateState.transaction_ids},
					set : function(val){
						setterFunctions['transaction_ids'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transaction_type" : {
					get : function(){return privateState.transaction_type},
					set : function(val){
						setterFunctions['transaction_type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transation_status" : {
					get : function(){return privateState.transation_status},
					set : function(val){
						setterFunctions['transation_status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currency_type" : {
					get : function(){return privateState.currency_type},
					set : function(val){
						setterFunctions['currency_type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"account" : {
					get : function(){return privateState.account},
					set : function(val){
						setterFunctions['account'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bank_name" : {
					get : function(){return privateState.bank_name},
					set : function(val){
						setterFunctions['bank_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"main_user" : {
					get : function(){return privateState.main_user},
					set : function(val){
						setterFunctions['main_user'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"username" : {
					get : function(){return privateState.username},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bank_id" : {
					get : function(){return privateState.bank_id},
					set : function(val){
						setterFunctions['bank_id'].call(this,val,privateState);
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
				"PayPersonName" : {
					get : function(){return privateState.PayPersonName},
					set : function(val){
						setterFunctions['PayPersonName'].call(this,val,privateState);
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
				"no_of_transactions" : {
					get : function(){return privateState.no_of_transactions},
					set : function(val){
						setterFunctions['no_of_transactions'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSearch" : {
					get : function(){return privateState.isSearch},
					set : function(val){
						setterFunctions['isSearch'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"keyword" : {
					get : function(){return privateState.keyword},
					set : function(val){
						setterFunctions['keyword'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"startDate" : {
					get : function(){return privateState.startDate},
					set : function(val){
						setterFunctions['startDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"endDate" : {
					get : function(){return privateState.endDate},
					set : function(val){
						setterFunctions['endDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"minAmount" : {
					get : function(){return privateState.minAmount},
					set : function(val){
						setterFunctions['minAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maxAmount" : {
					get : function(){return privateState.maxAmount},
					set : function(val){
						setterFunctions['maxAmount'].call(this,val,privateState);
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
				"orderby" : {
					get : function(){return privateState.orderby},
					set : function(val){
						setterFunctions['orderby'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExternalTransactionsAggregation);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExternalTransactionsAggregation);
	
	var registerValidatorBackup = ExternalTransactionsAggregation.registerValidator;
	
	ExternalTransactionsAggregation.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExternalTransactionsAggregation.isValid(this, propName, val) ){
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
	
	var relations = [
	];
	
	ExternalTransactionsAggregation.relations = relations;
	
	ExternalTransactionsAggregation.prototype.isValid = function(){
		return ExternalTransactionsAggregation.isValid(this);
	};
	
	ExternalTransactionsAggregation.prototype.objModelName = "ExternalTransactionsAggregation";
	
	return ExternalTransactionsAggregation;
});