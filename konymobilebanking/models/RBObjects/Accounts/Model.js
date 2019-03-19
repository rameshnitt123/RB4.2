define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountHolder : function(val, state){
			state['accountHolder'] = val;
		},
		accountID : function(val, state){
			state['accountID'] = val;
		},
		accountli : function(val, state){
			state['accountli'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountPreference : function(val, state){
			state['accountPreference'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		availableBalance : function(val, state){
			state['availableBalance'] = val;
		},
		availableCredit : function(val, state){
			state['availableCredit'] = val;
		},
		availablePoints : function(val, state){
			state['availablePoints'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		bondInterest : function(val, state){
			state['bondInterest'] = val;
		},
		bondInterestLastYear : function(val, state){
			state['bondInterestLastYear'] = val;
		},
		bsbNum : function(val, state){
			state['bsbNum'] = val;
		},
		closingDate : function(val, state){
			state['closingDate'] = val;
		},
		creditCardNumber : function(val, state){
			state['creditCardNumber'] = val;
		},
		creditLimit : function(val, state){
			state['creditLimit'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		currentAmountDue : function(val, state){
			state['currentAmountDue'] = val;
		},
		currentBalance : function(val, state){
			state['currentBalance'] = val;
		},
		deviceID : function(val, state){
			state['deviceID'] = val;
		},
		dividendLastPaidAmount : function(val, state){
			state['dividendLastPaidAmount'] = val;
		},
		dividendLastPaidDate : function(val, state){
			state['dividendLastPaidDate'] = val;
		},
		dividendPaidYTD : function(val, state){
			state['dividendPaidYTD'] = val;
		},
		dividendRate : function(val, state){
			state['dividendRate'] = val;
		},
		dividendYTD : function(val, state){
			state['dividendYTD'] = val;
		},
		dueDate : function(val, state){
			state['dueDate'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		eStatementEnable : function(val, state){
			state['eStatementEnable'] = val;
		},
		favouriteStatus : function(val, state){
			state['favouriteStatus'] = val;
		},
		interestEarned : function(val, state){
			state['interestEarned'] = val;
		},
		interestPaidLastYear : function(val, state){
			state['interestPaidLastYear'] = val;
		},
		interestPaidPreviousYTD : function(val, state){
			state['interestPaidPreviousYTD'] = val;
		},
		interestPaidYTD : function(val, state){
			state['interestPaidYTD'] = val;
		},
		interestRate : function(val, state){
			state['interestRate'] = val;
		},
		isInternationalAccount : function(val, state){
			state['isInternationalAccount'] = val;
		},
		isPFM : function(val, state){
			state['isPFM'] = val;
		},
		jointHolders : function(val, state){
			state['jointHolders'] = val;
		},
		lastDividendPaidAmount : function(val, state){
			state['lastDividendPaidAmount'] = val;
		},
		lastDividendPaidDate : function(val, state){
			state['lastDividendPaidDate'] = val;
		},
		lastPaymentAmount : function(val, state){
			state['lastPaymentAmount'] = val;
		},
		lastPaymentDate : function(val, state){
			state['lastPaymentDate'] = val;
		},
		lastStatementBalance : function(val, state){
			state['lastStatementBalance'] = val;
		},
		lateFeesDue : function(val, state){
			state['lateFeesDue'] = val;
		},
		maturityAmount : function(val, state){
			state['maturityAmount'] = val;
		},
		maturityDate : function(val, state){
			state['maturityDate'] = val;
		},
		maturityOption : function(val, state){
			state['maturityOption'] = val;
		},
		minimumDue : function(val, state){
			state['minimumDue'] = val;
		},
		nickName : function(val, state){
			state['nickName'] = val;
		},
		openingDate : function(val, state){
			state['openingDate'] = val;
		},
		originalAmount : function(val, state){
			state['originalAmount'] = val;
		},
		outstandingBalance : function(val, state){
			state['outstandingBalance'] = val;
		},
		paymentDue : function(val, state){
			state['paymentDue'] = val;
		},
		paymentMethod : function(val, state){
			state['paymentMethod'] = val;
		},
		paymentTerm : function(val, state){
			state['paymentTerm'] = val;
		},
		payoffAmount : function(val, state){
			state['payoffAmount'] = val;
		},
		payOffCharge : function(val, state){
			state['payOffCharge'] = val;
		},
		pendingDeposit : function(val, state){
			state['pendingDeposit'] = val;
		},
		pendingWithdrawal : function(val, state){
			state['pendingWithdrawal'] = val;
		},
		phoneId : function(val, state){
			state['phoneId'] = val;
		},
		previousYearDividend : function(val, state){
			state['previousYearDividend'] = val;
		},
		previousYearsDividends : function(val, state){
			state['previousYearsDividends'] = val;
		},
		principalBalance : function(val, state){
			state['principalBalance'] = val;
		},
		principalValue : function(val, state){
			state['principalValue'] = val;
		},
		regularPaymentAmount : function(val, state){
			state['regularPaymentAmount'] = val;
		},
		routingNumber : function(val, state){
			state['routingNumber'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		supportBillPay : function(val, state){
			state['supportBillPay'] = val;
		},
		supportCardlessCash : function(val, state){
			state['supportCardlessCash'] = val;
		},
		supportDeposit : function(val, state){
			state['supportDeposit'] = val;
		},
		supportTransferFrom : function(val, state){
			state['supportTransferFrom'] = val;
		},
		supportTransferTo : function(val, state){
			state['supportTransferTo'] = val;
		},
		swiftCode : function(val, state){
			state['swiftCode'] = val;
		},
		totalCreditMonths : function(val, state){
			state['totalCreditMonths'] = val;
		},
		totalDebitsMonth : function(val, state){
			state['totalDebitsMonth'] = val;
		},
		transactionLimit : function(val, state){
			state['transactionLimit'] = val;
		},
		transferLimit : function(val, state){
			state['transferLimit'] = val;
		},
		unpaidInterest : function(val, state){
			state['unpaidInterest'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		jointAccountHolder1 : function(val, state){
			state['jointAccountHolder1'] = val;
		},
		jointAccountHolder2 : function(val, state){
			state['jointAccountHolder2'] = val;
		},
		bankAddress : function(val, state){
			state['bankAddress'] = val;
		},
		intermediaryBankName : function(val, state){
			state['intermediaryBankName'] = val;
		},
		intermediaryBankAddress : function(val, state){
			state['intermediaryBankAddress'] = val;
		},
		intermediaryBankSwiftCode : function(val, state){
			state['intermediaryBankSwiftCode'] = val;
		},
		StatusDesc : function(val, state){
			state['StatusDesc'] = val;
		},
		supportChecks : function(val, state){
			state['supportChecks'] = val;
		},
		serviceName : function(val, state){
			state['serviceName'] = val;
		},
		productLi : function(val, state){
			state['productLi'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		accountSubType : function(val, state){
			state['accountSubType'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		schemeName : function(val, state){
			state['schemeName'] = val;
		},
		identification : function(val, state){
			state['identification'] = val;
		},
		secondaryIdentification : function(val, state){
			state['secondaryIdentification'] = val;
		},
		servicerSchemeName : function(val, state){
			state['servicerSchemeName'] = val;
		},
		servicerIdentification : function(val, state){
			state['servicerIdentification'] = val;
		},
		dataCreditDebitIndicator : function(val, state){
			state['dataCreditDebitIndicator'] = val;
		},
		dataType : function(val, state){
			state['dataType'] = val;
		},
		dataDateTime : function(val, state){
			state['dataDateTime'] = val;
		},
		dataCreditLineIncluded : function(val, state){
			state['dataCreditLineIncluded'] = val;
		},
		dataCreditLineType : function(val, state){
			state['dataCreditLineType'] = val;
		},
		dataCreditLineAmount : function(val, state){
			state['dataCreditLineAmount'] = val;
		},
		dataCreditLineCurrency : function(val, state){
			state['dataCreditLineCurrency'] = val;
		},
		IBAN : function(val, state){
			state['IBAN'] = val;
		},
		displayName : function(val, state){
			state['displayName'] = val;
		},
		Account_id : function(val, state){
			state['Account_id'] = val;
		},
		Organization_Id : function(val, state){
			state['Organization_Id'] = val;
		},
		Account_Type : function(val, state){
			state['Account_Type'] = val;
		},
		Customer_id : function(val, state){
			state['Customer_id'] = val;
		},
		Membership_id : function(val, state){
			state['Membership_id'] = val;
		},
		Taxid : function(val, state){
			state['Taxid'] = val;
		},
		CustomerType : function(val, state){
			state['CustomerType'] = val;
		},
		Ssn : function(val, state){
			state['Ssn'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		Ownership : function(val, state){
			state['Ownership'] = val;
		},
	};
	
	
	//Create the Model Class
	function Accounts(defaultValues){
		var privateState = {};
			privateState.accountHolder = defaultValues?(defaultValues["accountHolder"]?defaultValues["accountHolder"]:null):null;
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.accountli = defaultValues?(defaultValues["accountli"]?defaultValues["accountli"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountPreference = defaultValues?(defaultValues["accountPreference"]?defaultValues["accountPreference"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.availableBalance = defaultValues?(defaultValues["availableBalance"]?defaultValues["availableBalance"]:null):null;
			privateState.availableCredit = defaultValues?(defaultValues["availableCredit"]?defaultValues["availableCredit"]:null):null;
			privateState.availablePoints = defaultValues?(defaultValues["availablePoints"]?defaultValues["availablePoints"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.bondInterest = defaultValues?(defaultValues["bondInterest"]?defaultValues["bondInterest"]:null):null;
			privateState.bondInterestLastYear = defaultValues?(defaultValues["bondInterestLastYear"]?defaultValues["bondInterestLastYear"]:null):null;
			privateState.bsbNum = defaultValues?(defaultValues["bsbNum"]?defaultValues["bsbNum"]:null):null;
			privateState.closingDate = defaultValues?(defaultValues["closingDate"]?defaultValues["closingDate"]:null):null;
			privateState.creditCardNumber = defaultValues?(defaultValues["creditCardNumber"]?defaultValues["creditCardNumber"]:null):null;
			privateState.creditLimit = defaultValues?(defaultValues["creditLimit"]?defaultValues["creditLimit"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.currentAmountDue = defaultValues?(defaultValues["currentAmountDue"]?defaultValues["currentAmountDue"]:null):null;
			privateState.currentBalance = defaultValues?(defaultValues["currentBalance"]?defaultValues["currentBalance"]:null):null;
			privateState.deviceID = defaultValues?(defaultValues["deviceID"]?defaultValues["deviceID"]:null):null;
			privateState.dividendLastPaidAmount = defaultValues?(defaultValues["dividendLastPaidAmount"]?defaultValues["dividendLastPaidAmount"]:null):null;
			privateState.dividendLastPaidDate = defaultValues?(defaultValues["dividendLastPaidDate"]?defaultValues["dividendLastPaidDate"]:null):null;
			privateState.dividendPaidYTD = defaultValues?(defaultValues["dividendPaidYTD"]?defaultValues["dividendPaidYTD"]:null):null;
			privateState.dividendRate = defaultValues?(defaultValues["dividendRate"]?defaultValues["dividendRate"]:null):null;
			privateState.dividendYTD = defaultValues?(defaultValues["dividendYTD"]?defaultValues["dividendYTD"]:null):null;
			privateState.dueDate = defaultValues?(defaultValues["dueDate"]?defaultValues["dueDate"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.eStatementEnable = defaultValues?(defaultValues["eStatementEnable"]?defaultValues["eStatementEnable"]:null):null;
			privateState.favouriteStatus = defaultValues?(defaultValues["favouriteStatus"]?defaultValues["favouriteStatus"]:null):null;
			privateState.interestEarned = defaultValues?(defaultValues["interestEarned"]?defaultValues["interestEarned"]:null):null;
			privateState.interestPaidLastYear = defaultValues?(defaultValues["interestPaidLastYear"]?defaultValues["interestPaidLastYear"]:null):null;
			privateState.interestPaidPreviousYTD = defaultValues?(defaultValues["interestPaidPreviousYTD"]?defaultValues["interestPaidPreviousYTD"]:null):null;
			privateState.interestPaidYTD = defaultValues?(defaultValues["interestPaidYTD"]?defaultValues["interestPaidYTD"]:null):null;
			privateState.interestRate = defaultValues?(defaultValues["interestRate"]?defaultValues["interestRate"]:null):null;
			privateState.isInternationalAccount = defaultValues?(defaultValues["isInternationalAccount"]?defaultValues["isInternationalAccount"]:null):null;
			privateState.isPFM = defaultValues?(defaultValues["isPFM"]?defaultValues["isPFM"]:null):null;
			privateState.jointHolders = defaultValues?(defaultValues["jointHolders"]?defaultValues["jointHolders"]:null):null;
			privateState.lastDividendPaidAmount = defaultValues?(defaultValues["lastDividendPaidAmount"]?defaultValues["lastDividendPaidAmount"]:null):null;
			privateState.lastDividendPaidDate = defaultValues?(defaultValues["lastDividendPaidDate"]?defaultValues["lastDividendPaidDate"]:null):null;
			privateState.lastPaymentAmount = defaultValues?(defaultValues["lastPaymentAmount"]?defaultValues["lastPaymentAmount"]:null):null;
			privateState.lastPaymentDate = defaultValues?(defaultValues["lastPaymentDate"]?defaultValues["lastPaymentDate"]:null):null;
			privateState.lastStatementBalance = defaultValues?(defaultValues["lastStatementBalance"]?defaultValues["lastStatementBalance"]:null):null;
			privateState.lateFeesDue = defaultValues?(defaultValues["lateFeesDue"]?defaultValues["lateFeesDue"]:null):null;
			privateState.maturityAmount = defaultValues?(defaultValues["maturityAmount"]?defaultValues["maturityAmount"]:null):null;
			privateState.maturityDate = defaultValues?(defaultValues["maturityDate"]?defaultValues["maturityDate"]:null):null;
			privateState.maturityOption = defaultValues?(defaultValues["maturityOption"]?defaultValues["maturityOption"]:null):null;
			privateState.minimumDue = defaultValues?(defaultValues["minimumDue"]?defaultValues["minimumDue"]:null):null;
			privateState.nickName = defaultValues?(defaultValues["nickName"]?defaultValues["nickName"]:null):null;
			privateState.openingDate = defaultValues?(defaultValues["openingDate"]?defaultValues["openingDate"]:null):null;
			privateState.originalAmount = defaultValues?(defaultValues["originalAmount"]?defaultValues["originalAmount"]:null):null;
			privateState.outstandingBalance = defaultValues?(defaultValues["outstandingBalance"]?defaultValues["outstandingBalance"]:null):null;
			privateState.paymentDue = defaultValues?(defaultValues["paymentDue"]?defaultValues["paymentDue"]:null):null;
			privateState.paymentMethod = defaultValues?(defaultValues["paymentMethod"]?defaultValues["paymentMethod"]:null):null;
			privateState.paymentTerm = defaultValues?(defaultValues["paymentTerm"]?defaultValues["paymentTerm"]:null):null;
			privateState.payoffAmount = defaultValues?(defaultValues["payoffAmount"]?defaultValues["payoffAmount"]:null):null;
			privateState.payOffCharge = defaultValues?(defaultValues["payOffCharge"]?defaultValues["payOffCharge"]:null):null;
			privateState.pendingDeposit = defaultValues?(defaultValues["pendingDeposit"]?defaultValues["pendingDeposit"]:null):null;
			privateState.pendingWithdrawal = defaultValues?(defaultValues["pendingWithdrawal"]?defaultValues["pendingWithdrawal"]:null):null;
			privateState.phoneId = defaultValues?(defaultValues["phoneId"]?defaultValues["phoneId"]:null):null;
			privateState.previousYearDividend = defaultValues?(defaultValues["previousYearDividend"]?defaultValues["previousYearDividend"]:null):null;
			privateState.previousYearsDividends = defaultValues?(defaultValues["previousYearsDividends"]?defaultValues["previousYearsDividends"]:null):null;
			privateState.principalBalance = defaultValues?(defaultValues["principalBalance"]?defaultValues["principalBalance"]:null):null;
			privateState.principalValue = defaultValues?(defaultValues["principalValue"]?defaultValues["principalValue"]:null):null;
			privateState.regularPaymentAmount = defaultValues?(defaultValues["regularPaymentAmount"]?defaultValues["regularPaymentAmount"]:null):null;
			privateState.routingNumber = defaultValues?(defaultValues["routingNumber"]?defaultValues["routingNumber"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.supportBillPay = defaultValues?(defaultValues["supportBillPay"]?defaultValues["supportBillPay"]:null):null;
			privateState.supportCardlessCash = defaultValues?(defaultValues["supportCardlessCash"]?defaultValues["supportCardlessCash"]:null):null;
			privateState.supportDeposit = defaultValues?(defaultValues["supportDeposit"]?defaultValues["supportDeposit"]:null):null;
			privateState.supportTransferFrom = defaultValues?(defaultValues["supportTransferFrom"]?defaultValues["supportTransferFrom"]:null):null;
			privateState.supportTransferTo = defaultValues?(defaultValues["supportTransferTo"]?defaultValues["supportTransferTo"]:null):null;
			privateState.swiftCode = defaultValues?(defaultValues["swiftCode"]?defaultValues["swiftCode"]:null):null;
			privateState.totalCreditMonths = defaultValues?(defaultValues["totalCreditMonths"]?defaultValues["totalCreditMonths"]:null):null;
			privateState.totalDebitsMonth = defaultValues?(defaultValues["totalDebitsMonth"]?defaultValues["totalDebitsMonth"]:null):null;
			privateState.transactionLimit = defaultValues?(defaultValues["transactionLimit"]?defaultValues["transactionLimit"]:null):null;
			privateState.transferLimit = defaultValues?(defaultValues["transferLimit"]?defaultValues["transferLimit"]:null):null;
			privateState.unpaidInterest = defaultValues?(defaultValues["unpaidInterest"]?defaultValues["unpaidInterest"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.jointAccountHolder1 = defaultValues?(defaultValues["jointAccountHolder1"]?defaultValues["jointAccountHolder1"]:null):null;
			privateState.jointAccountHolder2 = defaultValues?(defaultValues["jointAccountHolder2"]?defaultValues["jointAccountHolder2"]:null):null;
			privateState.bankAddress = defaultValues?(defaultValues["bankAddress"]?defaultValues["bankAddress"]:null):null;
			privateState.intermediaryBankName = defaultValues?(defaultValues["intermediaryBankName"]?defaultValues["intermediaryBankName"]:null):null;
			privateState.intermediaryBankAddress = defaultValues?(defaultValues["intermediaryBankAddress"]?defaultValues["intermediaryBankAddress"]:null):null;
			privateState.intermediaryBankSwiftCode = defaultValues?(defaultValues["intermediaryBankSwiftCode"]?defaultValues["intermediaryBankSwiftCode"]:null):null;
			privateState.StatusDesc = defaultValues?(defaultValues["StatusDesc"]?defaultValues["StatusDesc"]:null):null;
			privateState.supportChecks = defaultValues?(defaultValues["supportChecks"]?defaultValues["supportChecks"]:null):null;
			privateState.serviceName = defaultValues?(defaultValues["serviceName"]?defaultValues["serviceName"]:null):null;
			privateState.productLi = defaultValues?(defaultValues["productLi"]?defaultValues["productLi"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
			privateState.accountSubType = defaultValues?(defaultValues["accountSubType"]?defaultValues["accountSubType"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.schemeName = defaultValues?(defaultValues["schemeName"]?defaultValues["schemeName"]:null):null;
			privateState.identification = defaultValues?(defaultValues["identification"]?defaultValues["identification"]:null):null;
			privateState.secondaryIdentification = defaultValues?(defaultValues["secondaryIdentification"]?defaultValues["secondaryIdentification"]:null):null;
			privateState.servicerSchemeName = defaultValues?(defaultValues["servicerSchemeName"]?defaultValues["servicerSchemeName"]:null):null;
			privateState.servicerIdentification = defaultValues?(defaultValues["servicerIdentification"]?defaultValues["servicerIdentification"]:null):null;
			privateState.dataCreditDebitIndicator = defaultValues?(defaultValues["dataCreditDebitIndicator"]?defaultValues["dataCreditDebitIndicator"]:null):null;
			privateState.dataType = defaultValues?(defaultValues["dataType"]?defaultValues["dataType"]:null):null;
			privateState.dataDateTime = defaultValues?(defaultValues["dataDateTime"]?defaultValues["dataDateTime"]:null):null;
			privateState.dataCreditLineIncluded = defaultValues?(defaultValues["dataCreditLineIncluded"]?defaultValues["dataCreditLineIncluded"]:null):null;
			privateState.dataCreditLineType = defaultValues?(defaultValues["dataCreditLineType"]?defaultValues["dataCreditLineType"]:null):null;
			privateState.dataCreditLineAmount = defaultValues?(defaultValues["dataCreditLineAmount"]?defaultValues["dataCreditLineAmount"]:null):null;
			privateState.dataCreditLineCurrency = defaultValues?(defaultValues["dataCreditLineCurrency"]?defaultValues["dataCreditLineCurrency"]:null):null;
			privateState.IBAN = defaultValues?(defaultValues["IBAN"]?defaultValues["IBAN"]:null):null;
			privateState.displayName = defaultValues?(defaultValues["displayName"]?defaultValues["displayName"]:null):null;
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
			privateState.Organization_Id = defaultValues?(defaultValues["Organization_Id"]?defaultValues["Organization_Id"]:null):null;
			privateState.Account_Type = defaultValues?(defaultValues["Account_Type"]?defaultValues["Account_Type"]:null):null;
			privateState.Customer_id = defaultValues?(defaultValues["Customer_id"]?defaultValues["Customer_id"]:null):null;
			privateState.Membership_id = defaultValues?(defaultValues["Membership_id"]?defaultValues["Membership_id"]:null):null;
			privateState.Taxid = defaultValues?(defaultValues["Taxid"]?defaultValues["Taxid"]:null):null;
			privateState.CustomerType = defaultValues?(defaultValues["CustomerType"]?defaultValues["CustomerType"]:null):null;
			privateState.Ssn = defaultValues?(defaultValues["Ssn"]?defaultValues["Ssn"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.Ownership = defaultValues?(defaultValues["Ownership"]?defaultValues["Ownership"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountHolder" : {
					get : function(){return privateState.accountHolder},
					set : function(val){
						setterFunctions['accountHolder'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountli" : {
					get : function(){return privateState.accountli},
					set : function(val){
						setterFunctions['accountli'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountName" : {
					get : function(){return privateState.accountName},
					set : function(val){
						setterFunctions['accountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountPreference" : {
					get : function(){return privateState.accountPreference},
					set : function(val){
						setterFunctions['accountPreference'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"availableBalance" : {
					get : function(){return privateState.availableBalance},
					set : function(val){
						setterFunctions['availableBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"availableCredit" : {
					get : function(){return privateState.availableCredit},
					set : function(val){
						setterFunctions['availableCredit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"availablePoints" : {
					get : function(){return privateState.availablePoints},
					set : function(val){
						setterFunctions['availablePoints'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName" : {
					get : function(){return privateState.bankName},
					set : function(val){
						setterFunctions['bankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bondInterest" : {
					get : function(){return privateState.bondInterest},
					set : function(val){
						setterFunctions['bondInterest'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bondInterestLastYear" : {
					get : function(){return privateState.bondInterestLastYear},
					set : function(val){
						setterFunctions['bondInterestLastYear'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bsbNum" : {
					get : function(){return privateState.bsbNum},
					set : function(val){
						setterFunctions['bsbNum'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"closingDate" : {
					get : function(){return privateState.closingDate},
					set : function(val){
						setterFunctions['closingDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditCardNumber" : {
					get : function(){return privateState.creditCardNumber},
					set : function(val){
						setterFunctions['creditCardNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditLimit" : {
					get : function(){return privateState.creditLimit},
					set : function(val){
						setterFunctions['creditLimit'].call(this,val,privateState);
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
				"currentAmountDue" : {
					get : function(){return privateState.currentAmountDue},
					set : function(val){
						setterFunctions['currentAmountDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currentBalance" : {
					get : function(){return privateState.currentBalance},
					set : function(val){
						setterFunctions['currentBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deviceID" : {
					get : function(){return privateState.deviceID},
					set : function(val){
						setterFunctions['deviceID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendLastPaidAmount" : {
					get : function(){return privateState.dividendLastPaidAmount},
					set : function(val){
						setterFunctions['dividendLastPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendLastPaidDate" : {
					get : function(){return privateState.dividendLastPaidDate},
					set : function(val){
						setterFunctions['dividendLastPaidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendPaidYTD" : {
					get : function(){return privateState.dividendPaidYTD},
					set : function(val){
						setterFunctions['dividendPaidYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendRate" : {
					get : function(){return privateState.dividendRate},
					set : function(val){
						setterFunctions['dividendRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendYTD" : {
					get : function(){return privateState.dividendYTD},
					set : function(val){
						setterFunctions['dividendYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dueDate" : {
					get : function(){return privateState.dueDate},
					set : function(val){
						setterFunctions['dueDate'].call(this,val,privateState);
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
				"eStatementEnable" : {
					get : function(){return privateState.eStatementEnable},
					set : function(val){
						setterFunctions['eStatementEnable'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"favouriteStatus" : {
					get : function(){return privateState.favouriteStatus},
					set : function(val){
						setterFunctions['favouriteStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestEarned" : {
					get : function(){return privateState.interestEarned},
					set : function(val){
						setterFunctions['interestEarned'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidLastYear" : {
					get : function(){return privateState.interestPaidLastYear},
					set : function(val){
						setterFunctions['interestPaidLastYear'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidPreviousYTD" : {
					get : function(){return privateState.interestPaidPreviousYTD},
					set : function(val){
						setterFunctions['interestPaidPreviousYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidYTD" : {
					get : function(){return privateState.interestPaidYTD},
					set : function(val){
						setterFunctions['interestPaidYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestRate" : {
					get : function(){return privateState.interestRate},
					set : function(val){
						setterFunctions['interestRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isInternationalAccount" : {
					get : function(){return privateState.isInternationalAccount},
					set : function(val){
						setterFunctions['isInternationalAccount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPFM" : {
					get : function(){return privateState.isPFM},
					set : function(val){
						setterFunctions['isPFM'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointHolders" : {
					get : function(){return privateState.jointHolders},
					set : function(val){
						setterFunctions['jointHolders'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastDividendPaidAmount" : {
					get : function(){return privateState.lastDividendPaidAmount},
					set : function(val){
						setterFunctions['lastDividendPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastDividendPaidDate" : {
					get : function(){return privateState.lastDividendPaidDate},
					set : function(val){
						setterFunctions['lastDividendPaidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastPaymentAmount" : {
					get : function(){return privateState.lastPaymentAmount},
					set : function(val){
						setterFunctions['lastPaymentAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastPaymentDate" : {
					get : function(){return privateState.lastPaymentDate},
					set : function(val){
						setterFunctions['lastPaymentDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastStatementBalance" : {
					get : function(){return privateState.lastStatementBalance},
					set : function(val){
						setterFunctions['lastStatementBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lateFeesDue" : {
					get : function(){return privateState.lateFeesDue},
					set : function(val){
						setterFunctions['lateFeesDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityAmount" : {
					get : function(){return privateState.maturityAmount},
					set : function(val){
						setterFunctions['maturityAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityDate" : {
					get : function(){return privateState.maturityDate},
					set : function(val){
						setterFunctions['maturityDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityOption" : {
					get : function(){return privateState.maturityOption},
					set : function(val){
						setterFunctions['maturityOption'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"minimumDue" : {
					get : function(){return privateState.minimumDue},
					set : function(val){
						setterFunctions['minimumDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"nickName" : {
					get : function(){return privateState.nickName},
					set : function(val){
						setterFunctions['nickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"openingDate" : {
					get : function(){return privateState.openingDate},
					set : function(val){
						setterFunctions['openingDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"originalAmount" : {
					get : function(){return privateState.originalAmount},
					set : function(val){
						setterFunctions['originalAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"outstandingBalance" : {
					get : function(){return privateState.outstandingBalance},
					set : function(val){
						setterFunctions['outstandingBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentDue" : {
					get : function(){return privateState.paymentDue},
					set : function(val){
						setterFunctions['paymentDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentMethod" : {
					get : function(){return privateState.paymentMethod},
					set : function(val){
						setterFunctions['paymentMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentTerm" : {
					get : function(){return privateState.paymentTerm},
					set : function(val){
						setterFunctions['paymentTerm'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payoffAmount" : {
					get : function(){return privateState.payoffAmount},
					set : function(val){
						setterFunctions['payoffAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payOffCharge" : {
					get : function(){return privateState.payOffCharge},
					set : function(val){
						setterFunctions['payOffCharge'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pendingDeposit" : {
					get : function(){return privateState.pendingDeposit},
					set : function(val){
						setterFunctions['pendingDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pendingWithdrawal" : {
					get : function(){return privateState.pendingWithdrawal},
					set : function(val){
						setterFunctions['pendingWithdrawal'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneId" : {
					get : function(){return privateState.phoneId},
					set : function(val){
						setterFunctions['phoneId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"previousYearDividend" : {
					get : function(){return privateState.previousYearDividend},
					set : function(val){
						setterFunctions['previousYearDividend'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"previousYearsDividends" : {
					get : function(){return privateState.previousYearsDividends},
					set : function(val){
						setterFunctions['previousYearsDividends'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"principalBalance" : {
					get : function(){return privateState.principalBalance},
					set : function(val){
						setterFunctions['principalBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"principalValue" : {
					get : function(){return privateState.principalValue},
					set : function(val){
						setterFunctions['principalValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"regularPaymentAmount" : {
					get : function(){return privateState.regularPaymentAmount},
					set : function(val){
						setterFunctions['regularPaymentAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"routingNumber" : {
					get : function(){return privateState.routingNumber},
					set : function(val){
						setterFunctions['routingNumber'].call(this,val,privateState);
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
				"supportBillPay" : {
					get : function(){return privateState.supportBillPay},
					set : function(val){
						setterFunctions['supportBillPay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportCardlessCash" : {
					get : function(){return privateState.supportCardlessCash},
					set : function(val){
						setterFunctions['supportCardlessCash'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportDeposit" : {
					get : function(){return privateState.supportDeposit},
					set : function(val){
						setterFunctions['supportDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferFrom" : {
					get : function(){return privateState.supportTransferFrom},
					set : function(val){
						setterFunctions['supportTransferFrom'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferTo" : {
					get : function(){return privateState.supportTransferTo},
					set : function(val){
						setterFunctions['supportTransferTo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"swiftCode" : {
					get : function(){return privateState.swiftCode},
					set : function(val){
						setterFunctions['swiftCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalCreditMonths" : {
					get : function(){return privateState.totalCreditMonths},
					set : function(val){
						setterFunctions['totalCreditMonths'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalDebitsMonth" : {
					get : function(){return privateState.totalDebitsMonth},
					set : function(val){
						setterFunctions['totalDebitsMonth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionLimit" : {
					get : function(){return privateState.transactionLimit},
					set : function(val){
						setterFunctions['transactionLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transferLimit" : {
					get : function(){return privateState.transferLimit},
					set : function(val){
						setterFunctions['transferLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unpaidInterest" : {
					get : function(){return privateState.unpaidInterest},
					set : function(val){
						setterFunctions['unpaidInterest'].call(this,val,privateState);
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
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointAccountHolder1" : {
					get : function(){return privateState.jointAccountHolder1},
					set : function(val){
						setterFunctions['jointAccountHolder1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointAccountHolder2" : {
					get : function(){return privateState.jointAccountHolder2},
					set : function(val){
						setterFunctions['jointAccountHolder2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankAddress" : {
					get : function(){return privateState.bankAddress},
					set : function(val){
						setterFunctions['bankAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankName" : {
					get : function(){return privateState.intermediaryBankName},
					set : function(val){
						setterFunctions['intermediaryBankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankAddress" : {
					get : function(){return privateState.intermediaryBankAddress},
					set : function(val){
						setterFunctions['intermediaryBankAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankSwiftCode" : {
					get : function(){return privateState.intermediaryBankSwiftCode},
					set : function(val){
						setterFunctions['intermediaryBankSwiftCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatusDesc" : {
					get : function(){return privateState.StatusDesc},
					set : function(val){
						setterFunctions['StatusDesc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportChecks" : {
					get : function(){return privateState.supportChecks},
					set : function(val){
						setterFunctions['supportChecks'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"serviceName" : {
					get : function(){return privateState.serviceName},
					set : function(val){
						setterFunctions['serviceName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productLi" : {
					get : function(){return privateState.productLi},
					set : function(val){
						setterFunctions['productLi'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phone" : {
					get : function(){return privateState.phone},
					set : function(val){
						setterFunctions['phone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountSubType" : {
					get : function(){return privateState.accountSubType},
					set : function(val){
						setterFunctions['accountSubType'].call(this,val,privateState);
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
				"schemeName" : {
					get : function(){return privateState.schemeName},
					set : function(val){
						setterFunctions['schemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"identification" : {
					get : function(){return privateState.identification},
					set : function(val){
						setterFunctions['identification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryIdentification" : {
					get : function(){return privateState.secondaryIdentification},
					set : function(val){
						setterFunctions['secondaryIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"servicerSchemeName" : {
					get : function(){return privateState.servicerSchemeName},
					set : function(val){
						setterFunctions['servicerSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"servicerIdentification" : {
					get : function(){return privateState.servicerIdentification},
					set : function(val){
						setterFunctions['servicerIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataCreditDebitIndicator" : {
					get : function(){return privateState.dataCreditDebitIndicator},
					set : function(val){
						setterFunctions['dataCreditDebitIndicator'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataType" : {
					get : function(){return privateState.dataType},
					set : function(val){
						setterFunctions['dataType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataDateTime" : {
					get : function(){return privateState.dataDateTime},
					set : function(val){
						setterFunctions['dataDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataCreditLineIncluded" : {
					get : function(){return privateState.dataCreditLineIncluded},
					set : function(val){
						setterFunctions['dataCreditLineIncluded'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataCreditLineType" : {
					get : function(){return privateState.dataCreditLineType},
					set : function(val){
						setterFunctions['dataCreditLineType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataCreditLineAmount" : {
					get : function(){return privateState.dataCreditLineAmount},
					set : function(val){
						setterFunctions['dataCreditLineAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataCreditLineCurrency" : {
					get : function(){return privateState.dataCreditLineCurrency},
					set : function(val){
						setterFunctions['dataCreditLineCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IBAN" : {
					get : function(){return privateState.IBAN},
					set : function(val){
						setterFunctions['IBAN'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"displayName" : {
					get : function(){return privateState.displayName},
					set : function(val){
						setterFunctions['displayName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Account_id" : {
					get : function(){return privateState.Account_id},
					set : function(val){
						setterFunctions['Account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Organization_Id" : {
					get : function(){return privateState.Organization_Id},
					set : function(val){
						setterFunctions['Organization_Id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Account_Type" : {
					get : function(){return privateState.Account_Type},
					set : function(val){
						setterFunctions['Account_Type'].call(this,val,privateState);
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
				"Membership_id" : {
					get : function(){return privateState.Membership_id},
					set : function(val){
						setterFunctions['Membership_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Taxid" : {
					get : function(){return privateState.Taxid},
					set : function(val){
						setterFunctions['Taxid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CustomerType" : {
					get : function(){return privateState.CustomerType},
					set : function(val){
						setterFunctions['CustomerType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Ssn" : {
					get : function(){return privateState.Ssn},
					set : function(val){
						setterFunctions['Ssn'].call(this,val,privateState);
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
				"searchString" : {
					get : function(){return privateState.searchString},
					set : function(val){
						setterFunctions['searchString'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Ownership" : {
					get : function(){return privateState.Ownership},
					set : function(val){
						setterFunctions['Ownership'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Accounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(Accounts);
	
	var registerValidatorBackup = Accounts.registerValidator;
	
	Accounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Accounts.isValid(this, propName, val) ){
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
	//For Operation 'getAllAccounts' with service id 'getAllAccounts8755'
	Accounts.getAllAccounts = function(params, onCompletion){
		return Accounts.customVerb('getAllAccounts', params, onCompletion);
	};
	//For Operation 'getCustomerAccounts' with service id 'getCustomerAccounts7724'
	Accounts.getCustomerAccounts = function(params, onCompletion){
		return Accounts.customVerb('getCustomerAccounts', params, onCompletion);
	};
	//For Operation 'getOrganizationAccounts' with service id 'getOrganisationAccounts7215'
	Accounts.getOrganizationAccounts = function(params, onCompletion){
		return Accounts.customVerb('getOrganizationAccounts', params, onCompletion);
	};
	//For Operation 'newAccountOpening' with service id 'newAccountOpening2573'
	Accounts.newAccountOpening = function(params, onCompletion){
		return Accounts.customVerb('newAccountOpening', params, onCompletion);
	};
	//For Operation 'updateUserAccountSettingsForAdmin' with service id 'UpdateUserAccountSettingsForAdmin4569'
	Accounts.updateUserAccountSettingsForAdmin = function(params, onCompletion){
		return Accounts.customVerb('updateUserAccountSettingsForAdmin', params, onCompletion);
	};
	//For Operation 'updateAccountPreference' with service id 'updateAccountPreference6645'
	Accounts.updateAccountPreference = function(params, onCompletion){
		return Accounts.customVerb('updateAccountPreference', params, onCompletion);
	};
	//For Operation 'fetchBankDetails' with service id 'fetchBankDetails9439'
	Accounts.fetchBankDetails = function(params, onCompletion){
		return Accounts.customVerb('fetchBankDetails', params, onCompletion);
	};
	//For Operation 'updateFavouriteStatus' with service id 'updateFavouriteStatus8642'
	Accounts.updateFavouriteStatus = function(params, onCompletion){
		return Accounts.customVerb('updateFavouriteStatus', params, onCompletion);
	};
	//For Operation 'getRecentAccounts' with service id 'getRecentAccounts9643'
	Accounts.getRecentAccounts = function(params, onCompletion){
		return Accounts.customVerb('getRecentAccounts', params, onCompletion);
	};
	//For Operation 'updateAccountPhoneNumber' with service id 'updateAccountPhoneNumber9695'
	Accounts.updateAccountPhoneNumber = function(params, onCompletion){
		return Accounts.customVerb('updateAccountPhoneNumber', params, onCompletion);
	};
	//For Operation 'getAccountsPostLogin' with service id 'getAccountsPostLogin1726'
	Accounts.getAccountsPostLogin = function(params, onCompletion){
		return Accounts.customVerb('getAccountsPostLogin', params, onCompletion);
	};
	//For Operation 'updateUserAccountSettings' with service id 'updateUserAccountSettings9732'
	Accounts.updateUserAccountSettings = function(params, onCompletion){
		return Accounts.customVerb('updateUserAccountSettings', params, onCompletion);
	};
	//For Operation 'unLinkOrgAccounts' with service id 'unLinkOrgAccounts8710'
	Accounts.unLinkOrgAccounts = function(params, onCompletion){
		return Accounts.customVerb('unLinkOrgAccounts', params, onCompletion);
	};
	//For Operation 'getAccountsForAdmin' with service id 'GetAccountsForAdmin7035'
	Accounts.getAccountsForAdmin = function(params, onCompletion){
		return Accounts.customVerb('getAccountsForAdmin', params, onCompletion);
	};
	//For Operation 'getMembershipAccounts' with service id 'getAccountsbyTINorMembership9871'
	Accounts.getMembershipAccounts = function(params, onCompletion){
		return Accounts.customVerb('getMembershipAccounts', params, onCompletion);
	};
	
	var relations = [
	];
	
	Accounts.relations = relations;
	
	Accounts.prototype.isValid = function(){
		return Accounts.isValid(this);
	};
	
	Accounts.prototype.objModelName = "Accounts";
	
	return Accounts;
});