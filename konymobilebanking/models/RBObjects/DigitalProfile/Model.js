define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Id : function(val, state){
			state['Id'] = val;
		},
		Customer_id : function(val, state){
			state['Customer_id'] = val;
		},
		CreditScore : function(val, state){
			state['CreditScore'] = val;
		},
		NumberOfInquiries_6M : function(val, state){
			state['NumberOfInquiries_6M'] = val;
		},
		NumberOfInquiries_12M : function(val, state){
			state['NumberOfInquiries_12M'] = val;
		},
		NumberOfInquiries_24M : function(val, state){
			state['NumberOfInquiries_24M'] = val;
		},
		TotalRevolvingOpenToBuyBalance : function(val, state){
			state['TotalRevolvingOpenToBuyBalance'] = val;
		},
		UtilizationPercentOfRevolvingTrades : function(val, state){
			state['UtilizationPercentOfRevolvingTrades'] = val;
		},
		SinceRecentDelinquency_M : function(val, state){
			state['SinceRecentDelinquency_M'] = val;
		},
		TotalNumberOfDerogatory : function(val, state){
			state['TotalNumberOfDerogatory'] = val;
		},
		SinceRecentlyFiledCollection_M : function(val, state){
			state['SinceRecentlyFiledCollection_M'] = val;
		},
		TotalNumberOfTrades : function(val, state){
			state['TotalNumberOfTrades'] = val;
		},
		TotalNumberOfActiveTrades : function(val, state){
			state['TotalNumberOfActiveTrades'] = val;
		},
		NumberOfTradesOpened_24M : function(val, state){
			state['NumberOfTradesOpened_24M'] = val;
		},
		NumberOfTradeswithUtilization : function(val, state){
			state['NumberOfTradeswithUtilization'] = val;
		},
		OldestOpenPersonalFinanceTrade_M : function(val, state){
			state['OldestOpenPersonalFinanceTrade_M'] = val;
		},
		LoanToIncomeRatio : function(val, state){
			state['LoanToIncomeRatio'] = val;
		},
		NumberOfLoanAapplications_24M : function(val, state){
			state['NumberOfLoanAapplications_24M'] = val;
		},
		DebtToIncomeRatio : function(val, state){
			state['DebtToIncomeRatio'] = val;
		},
		PrequalifyScore : function(val, state){
			state['PrequalifyScore'] = val;
		},
		YearsOfMembership : function(val, state){
			state['YearsOfMembership'] = val;
		},
		AccountsBalance : function(val, state){
			state['AccountsBalance'] = val;
		},
		Age : function(val, state){
			state['Age'] = val;
		},
		City : function(val, state){
			state['City'] = val;
		},
		State : function(val, state){
			state['State'] = val;
		},
		ZipCode : function(val, state){
			state['ZipCode'] = val;
		},
		DurationOfStay : function(val, state){
			state['DurationOfStay'] = val;
		},
		HomeOwnership : function(val, state){
			state['HomeOwnership'] = val;
		},
		GrossMonthlyIncome : function(val, state){
			state['GrossMonthlyIncome'] = val;
		},
		AnnualIncome : function(val, state){
			state['AnnualIncome'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		createdts : function(val, state){
			state['createdts'] = val;
		},
		lastmodifiedts : function(val, state){
			state['lastmodifiedts'] = val;
		},
		synctimestamp : function(val, state){
			state['synctimestamp'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		UserName : function(val, state){
			state['UserName'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		errorCode : function(val, state){
			state['errorCode'] = val;
		},
		errorMessage : function(val, state){
			state['errorMessage'] = val;
		},
	};
	
	
	//Create the Model Class
	function DigitalProfile(defaultValues){
		var privateState = {};
			privateState.Id = defaultValues?(defaultValues["Id"]?defaultValues["Id"]:null):null;
			privateState.Customer_id = defaultValues?(defaultValues["Customer_id"]?defaultValues["Customer_id"]:null):null;
			privateState.CreditScore = defaultValues?(defaultValues["CreditScore"]?defaultValues["CreditScore"]:null):null;
			privateState.NumberOfInquiries_6M = defaultValues?(defaultValues["NumberOfInquiries_6M"]?defaultValues["NumberOfInquiries_6M"]:null):null;
			privateState.NumberOfInquiries_12M = defaultValues?(defaultValues["NumberOfInquiries_12M"]?defaultValues["NumberOfInquiries_12M"]:null):null;
			privateState.NumberOfInquiries_24M = defaultValues?(defaultValues["NumberOfInquiries_24M"]?defaultValues["NumberOfInquiries_24M"]:null):null;
			privateState.TotalRevolvingOpenToBuyBalance = defaultValues?(defaultValues["TotalRevolvingOpenToBuyBalance"]?defaultValues["TotalRevolvingOpenToBuyBalance"]:null):null;
			privateState.UtilizationPercentOfRevolvingTrades = defaultValues?(defaultValues["UtilizationPercentOfRevolvingTrades"]?defaultValues["UtilizationPercentOfRevolvingTrades"]:null):null;
			privateState.SinceRecentDelinquency_M = defaultValues?(defaultValues["SinceRecentDelinquency_M"]?defaultValues["SinceRecentDelinquency_M"]:null):null;
			privateState.TotalNumberOfDerogatory = defaultValues?(defaultValues["TotalNumberOfDerogatory"]?defaultValues["TotalNumberOfDerogatory"]:null):null;
			privateState.SinceRecentlyFiledCollection_M = defaultValues?(defaultValues["SinceRecentlyFiledCollection_M"]?defaultValues["SinceRecentlyFiledCollection_M"]:null):null;
			privateState.TotalNumberOfTrades = defaultValues?(defaultValues["TotalNumberOfTrades"]?defaultValues["TotalNumberOfTrades"]:null):null;
			privateState.TotalNumberOfActiveTrades = defaultValues?(defaultValues["TotalNumberOfActiveTrades"]?defaultValues["TotalNumberOfActiveTrades"]:null):null;
			privateState.NumberOfTradesOpened_24M = defaultValues?(defaultValues["NumberOfTradesOpened_24M"]?defaultValues["NumberOfTradesOpened_24M"]:null):null;
			privateState.NumberOfTradeswithUtilization = defaultValues?(defaultValues["NumberOfTradeswithUtilization"]?defaultValues["NumberOfTradeswithUtilization"]:null):null;
			privateState.OldestOpenPersonalFinanceTrade_M = defaultValues?(defaultValues["OldestOpenPersonalFinanceTrade_M"]?defaultValues["OldestOpenPersonalFinanceTrade_M"]:null):null;
			privateState.LoanToIncomeRatio = defaultValues?(defaultValues["LoanToIncomeRatio"]?defaultValues["LoanToIncomeRatio"]:null):null;
			privateState.NumberOfLoanAapplications_24M = defaultValues?(defaultValues["NumberOfLoanAapplications_24M"]?defaultValues["NumberOfLoanAapplications_24M"]:null):null;
			privateState.DebtToIncomeRatio = defaultValues?(defaultValues["DebtToIncomeRatio"]?defaultValues["DebtToIncomeRatio"]:null):null;
			privateState.PrequalifyScore = defaultValues?(defaultValues["PrequalifyScore"]?defaultValues["PrequalifyScore"]:null):null;
			privateState.YearsOfMembership = defaultValues?(defaultValues["YearsOfMembership"]?defaultValues["YearsOfMembership"]:null):null;
			privateState.AccountsBalance = defaultValues?(defaultValues["AccountsBalance"]?defaultValues["AccountsBalance"]:null):null;
			privateState.Age = defaultValues?(defaultValues["Age"]?defaultValues["Age"]:null):null;
			privateState.City = defaultValues?(defaultValues["City"]?defaultValues["City"]:null):null;
			privateState.State = defaultValues?(defaultValues["State"]?defaultValues["State"]:null):null;
			privateState.ZipCode = defaultValues?(defaultValues["ZipCode"]?defaultValues["ZipCode"]:null):null;
			privateState.DurationOfStay = defaultValues?(defaultValues["DurationOfStay"]?defaultValues["DurationOfStay"]:null):null;
			privateState.HomeOwnership = defaultValues?(defaultValues["HomeOwnership"]?defaultValues["HomeOwnership"]:null):null;
			privateState.GrossMonthlyIncome = defaultValues?(defaultValues["GrossMonthlyIncome"]?defaultValues["GrossMonthlyIncome"]:null):null;
			privateState.AnnualIncome = defaultValues?(defaultValues["AnnualIncome"]?defaultValues["AnnualIncome"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?defaultValues["lastmodifiedts"]:null):null;
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?defaultValues["synctimestamp"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.UserName = defaultValues?(defaultValues["UserName"]?defaultValues["UserName"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.errorCode = defaultValues?(defaultValues["errorCode"]?defaultValues["errorCode"]:null):null;
			privateState.errorMessage = defaultValues?(defaultValues["errorMessage"]?defaultValues["errorMessage"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Id" : {
					get : function(){return privateState.Id},
					set : function(val){
						setterFunctions['Id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Customer_id" : {
					get : function(){return privateState.Customer_id},
					set : function(val){
						setterFunctions['Customer_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreditScore" : {
					get : function(){return privateState.CreditScore},
					set : function(val){
						setterFunctions['CreditScore'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfInquiries_6M" : {
					get : function(){return privateState.NumberOfInquiries_6M},
					set : function(val){
						setterFunctions['NumberOfInquiries_6M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfInquiries_12M" : {
					get : function(){return privateState.NumberOfInquiries_12M},
					set : function(val){
						setterFunctions['NumberOfInquiries_12M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfInquiries_24M" : {
					get : function(){return privateState.NumberOfInquiries_24M},
					set : function(val){
						setterFunctions['NumberOfInquiries_24M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalRevolvingOpenToBuyBalance" : {
					get : function(){return privateState.TotalRevolvingOpenToBuyBalance},
					set : function(val){
						setterFunctions['TotalRevolvingOpenToBuyBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UtilizationPercentOfRevolvingTrades" : {
					get : function(){return privateState.UtilizationPercentOfRevolvingTrades},
					set : function(val){
						setterFunctions['UtilizationPercentOfRevolvingTrades'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SinceRecentDelinquency_M" : {
					get : function(){return privateState.SinceRecentDelinquency_M},
					set : function(val){
						setterFunctions['SinceRecentDelinquency_M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalNumberOfDerogatory" : {
					get : function(){return privateState.TotalNumberOfDerogatory},
					set : function(val){
						setterFunctions['TotalNumberOfDerogatory'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SinceRecentlyFiledCollection_M" : {
					get : function(){return privateState.SinceRecentlyFiledCollection_M},
					set : function(val){
						setterFunctions['SinceRecentlyFiledCollection_M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalNumberOfTrades" : {
					get : function(){return privateState.TotalNumberOfTrades},
					set : function(val){
						setterFunctions['TotalNumberOfTrades'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TotalNumberOfActiveTrades" : {
					get : function(){return privateState.TotalNumberOfActiveTrades},
					set : function(val){
						setterFunctions['TotalNumberOfActiveTrades'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfTradesOpened_24M" : {
					get : function(){return privateState.NumberOfTradesOpened_24M},
					set : function(val){
						setterFunctions['NumberOfTradesOpened_24M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfTradeswithUtilization" : {
					get : function(){return privateState.NumberOfTradeswithUtilization},
					set : function(val){
						setterFunctions['NumberOfTradeswithUtilization'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OldestOpenPersonalFinanceTrade_M" : {
					get : function(){return privateState.OldestOpenPersonalFinanceTrade_M},
					set : function(val){
						setterFunctions['OldestOpenPersonalFinanceTrade_M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"LoanToIncomeRatio" : {
					get : function(){return privateState.LoanToIncomeRatio},
					set : function(val){
						setterFunctions['LoanToIncomeRatio'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NumberOfLoanAapplications_24M" : {
					get : function(){return privateState.NumberOfLoanAapplications_24M},
					set : function(val){
						setterFunctions['NumberOfLoanAapplications_24M'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DebtToIncomeRatio" : {
					get : function(){return privateState.DebtToIncomeRatio},
					set : function(val){
						setterFunctions['DebtToIncomeRatio'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PrequalifyScore" : {
					get : function(){return privateState.PrequalifyScore},
					set : function(val){
						setterFunctions['PrequalifyScore'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"YearsOfMembership" : {
					get : function(){return privateState.YearsOfMembership},
					set : function(val){
						setterFunctions['YearsOfMembership'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountsBalance" : {
					get : function(){return privateState.AccountsBalance},
					set : function(val){
						setterFunctions['AccountsBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Age" : {
					get : function(){return privateState.Age},
					set : function(val){
						setterFunctions['Age'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"City" : {
					get : function(){return privateState.City},
					set : function(val){
						setterFunctions['City'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"State" : {
					get : function(){return privateState.State},
					set : function(val){
						setterFunctions['State'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ZipCode" : {
					get : function(){return privateState.ZipCode},
					set : function(val){
						setterFunctions['ZipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DurationOfStay" : {
					get : function(){return privateState.DurationOfStay},
					set : function(val){
						setterFunctions['DurationOfStay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"HomeOwnership" : {
					get : function(){return privateState.HomeOwnership},
					set : function(val){
						setterFunctions['HomeOwnership'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"GrossMonthlyIncome" : {
					get : function(){return privateState.GrossMonthlyIncome},
					set : function(val){
						setterFunctions['GrossMonthlyIncome'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AnnualIncome" : {
					get : function(){return privateState.AnnualIncome},
					set : function(val){
						setterFunctions['AnnualIncome'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){return privateState.modifiedby},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
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
				"lastmodifiedts" : {
					get : function(){return privateState.lastmodifiedts},
					set : function(val){
						setterFunctions['lastmodifiedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"synctimestamp" : {
					get : function(){return privateState.synctimestamp},
					set : function(val){
						setterFunctions['synctimestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserName" : {
					get : function(){return privateState.UserName},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
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
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorCode" : {
					get : function(){return privateState.errorCode},
					set : function(val){
						setterFunctions['errorCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorMessage" : {
					get : function(){return privateState.errorMessage},
					set : function(val){
						setterFunctions['errorMessage'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DigitalProfile);
	
	//Create new class level validator object
	BaseModel.Validator.call(DigitalProfile);
	
	var registerValidatorBackup = DigitalProfile.registerValidator;
	
	DigitalProfile.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DigitalProfile.isValid(this, propName, val) ){
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
	
	DigitalProfile.relations = relations;
	
	DigitalProfile.prototype.isValid = function(){
		return DigitalProfile.isValid(this);
	};
	
	DigitalProfile.prototype.objModelName = "DigitalProfile";
	
	return DigitalProfile;
});