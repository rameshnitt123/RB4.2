define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		balanceAmount : function(val, state){
			state['balanceAmount'] = val;
		},
		billDueDate : function(val, state){
			state['billDueDate'] = val;
		},
		billerCategory : function(val, state){
			state['billerCategory'] = val;
		},
		billerName : function(val, state){
			state['billerName'] = val;
		},
		billGeneratedDate : function(val, state){
			state['billGeneratedDate'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		dueAmount : function(val, state){
			state['dueAmount'] = val;
		},
		ebillStatus : function(val, state){
			state['ebillStatus'] = val;
		},
		ebillURL : function(val, state){
			state['ebillURL'] = val;
		},
		fromAccountName : function(val, state){
			state['fromAccountName'] = val;
		},
		fromAccountNumber : function(val, state){
			state['fromAccountNumber'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		paidAmount : function(val, state){
			state['paidAmount'] = val;
		},
		paidDate : function(val, state){
			state['paidDate'] = val;
		},
		payeeId : function(val, state){
			state['payeeId'] = val;
		},
		payeeName : function(val, state){
			state['payeeName'] = val;
		},
		sortBy : function(val, state){
			state['sortBy'] = val;
		},
		payeeAddressLine1 : function(val, state){
			state['payeeAddressLine1'] = val;
		},
		type_id : function(val, state){
			state['type_id'] = val;
		},
		transactionType : function(val, state){
			state['transactionType'] = val;
		},
		recurrenceDesc : function(val, state){
			state['recurrenceDesc'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
	};
	
	
	//Create the Model Class
	function Bills(defaultValues){
		var privateState = {};
			privateState.balanceAmount = defaultValues?(defaultValues["balanceAmount"]?defaultValues["balanceAmount"]:null):null;
			privateState.billDueDate = defaultValues?(defaultValues["billDueDate"]?defaultValues["billDueDate"]:null):null;
			privateState.billerCategory = defaultValues?(defaultValues["billerCategory"]?defaultValues["billerCategory"]:null):null;
			privateState.billerName = defaultValues?(defaultValues["billerName"]?defaultValues["billerName"]:null):null;
			privateState.billGeneratedDate = defaultValues?(defaultValues["billGeneratedDate"]?defaultValues["billGeneratedDate"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.dueAmount = defaultValues?(defaultValues["dueAmount"]?defaultValues["dueAmount"]:null):null;
			privateState.ebillStatus = defaultValues?(defaultValues["ebillStatus"]?defaultValues["ebillStatus"]:null):null;
			privateState.ebillURL = defaultValues?(defaultValues["ebillURL"]?defaultValues["ebillURL"]:null):null;
			privateState.fromAccountName = defaultValues?(defaultValues["fromAccountName"]?defaultValues["fromAccountName"]:null):null;
			privateState.fromAccountNumber = defaultValues?(defaultValues["fromAccountNumber"]?defaultValues["fromAccountNumber"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.paidAmount = defaultValues?(defaultValues["paidAmount"]?defaultValues["paidAmount"]:null):null;
			privateState.paidDate = defaultValues?(defaultValues["paidDate"]?defaultValues["paidDate"]:null):null;
			privateState.payeeId = defaultValues?(defaultValues["payeeId"]?defaultValues["payeeId"]:null):null;
			privateState.payeeName = defaultValues?(defaultValues["payeeName"]?defaultValues["payeeName"]:null):null;
			privateState.sortBy = defaultValues?(defaultValues["sortBy"]?defaultValues["sortBy"]:null):null;
			privateState.payeeAddressLine1 = defaultValues?(defaultValues["payeeAddressLine1"]?defaultValues["payeeAddressLine1"]:null):null;
			privateState.type_id = defaultValues?(defaultValues["type_id"]?defaultValues["type_id"]:null):null;
			privateState.transactionType = defaultValues?(defaultValues["transactionType"]?defaultValues["transactionType"]:null):null;
			privateState.recurrenceDesc = defaultValues?(defaultValues["recurrenceDesc"]?defaultValues["recurrenceDesc"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"balanceAmount" : {
					get : function(){return privateState.balanceAmount},
					set : function(val){
						setterFunctions['balanceAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billDueDate" : {
					get : function(){return privateState.billDueDate},
					set : function(val){
						setterFunctions['billDueDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerCategory" : {
					get : function(){return privateState.billerCategory},
					set : function(val){
						setterFunctions['billerCategory'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerName" : {
					get : function(){return privateState.billerName},
					set : function(val){
						setterFunctions['billerName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billGeneratedDate" : {
					get : function(){return privateState.billGeneratedDate},
					set : function(val){
						setterFunctions['billGeneratedDate'].call(this,val,privateState);
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
				"dueAmount" : {
					get : function(){return privateState.dueAmount},
					set : function(val){
						setterFunctions['dueAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ebillStatus" : {
					get : function(){return privateState.ebillStatus},
					set : function(val){
						setterFunctions['ebillStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ebillURL" : {
					get : function(){return privateState.ebillURL},
					set : function(val){
						setterFunctions['ebillURL'].call(this,val,privateState);
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
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
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
				"paidAmount" : {
					get : function(){return privateState.paidAmount},
					set : function(val){
						setterFunctions['paidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paidDate" : {
					get : function(){return privateState.paidDate},
					set : function(val){
						setterFunctions['paidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeId" : {
					get : function(){return privateState.payeeId},
					set : function(val){
						setterFunctions['payeeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeName" : {
					get : function(){return privateState.payeeName},
					set : function(val){
						setterFunctions['payeeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sortBy" : {
					get : function(){return privateState.sortBy},
					set : function(val){
						setterFunctions['sortBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeAddressLine1" : {
					get : function(){return privateState.payeeAddressLine1},
					set : function(val){
						setterFunctions['payeeAddressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type_id" : {
					get : function(){return privateState.type_id},
					set : function(val){
						setterFunctions['type_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionType" : {
					get : function(){return privateState.transactionType},
					set : function(val){
						setterFunctions['transactionType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"recurrenceDesc" : {
					get : function(){return privateState.recurrenceDesc},
					set : function(val){
						setterFunctions['recurrenceDesc'].call(this,val,privateState);
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
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Bills);
	
	//Create new class level validator object
	BaseModel.Validator.call(Bills);
	
	var registerValidatorBackup = Bills.registerValidator;
	
	Bills.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Bills.isValid(this, propName, val) ){
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
	//For Operation 'getDueBillsForPayee' with service id 'getDueBillsForPayee7456'
	Bills.getDueBillsForPayee = function(params, onCompletion){
		return Bills.customVerb('getDueBillsForPayee', params, onCompletion);
	};
	//For Operation 'getBillsForBiller' with service id 'getBillsForBiller4186'
	Bills.getBillsForBiller = function(params, onCompletion){
		return Bills.customVerb('getBillsForBiller', params, onCompletion);
	};
	//For Operation 'getPreviousBillsForBiller' with service id 'getPreviousBillsForBiller6502'
	Bills.getPreviousBillsForBiller = function(params, onCompletion){
		return Bills.customVerb('getPreviousBillsForBiller', params, onCompletion);
	};
	
	var relations = [
	];
	
	Bills.relations = relations;
	
	Bills.prototype.isValid = function(){
		return Bills.isValid(this);
	};
	
	Bills.prototype.objModelName = "Bills";
	
	return Bills;
});