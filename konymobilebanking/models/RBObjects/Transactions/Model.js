define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountID : function(val, state){
			state['accountID'] = val;
		},
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		amount : function(val, state){
			state['amount'] = val;
		},
		amountTransferedTillNow : function(val, state){
			state['amountTransferedTillNow'] = val;
		},
		authenticationRequired : function(val, state){
			state['authenticationRequired'] = val;
		},
		billCategory : function(val, state){
			state['billCategory'] = val;
		},
		billCategoryId : function(val, state){
			state['billCategoryId'] = val;
		},
		billDueAmount : function(val, state){
			state['billDueAmount'] = val;
		},
		billDueDate : function(val, state){
			state['billDueDate'] = val;
		},
		billerCategoryName : function(val, state){
			state['billerCategoryName'] = val;
		},
		billGeneratedDate : function(val, state){
			state['billGeneratedDate'] = val;
		},
		billid : function(val, state){
			state['billid'] = val;
		},
		billPaidAmount : function(val, state){
			state['billPaidAmount'] = val;
		},
		billPaidDate : function(val, state){
			state['billPaidDate'] = val;
		},
		bulkPayString : function(val, state){
			state['bulkPayString'] = val;
		},
		cashlessEmail : function(val, state){
			state['cashlessEmail'] = val;
		},
		cashlessMode : function(val, state){
			state['cashlessMode'] = val;
		},
		cashlessOTP : function(val, state){
			state['cashlessOTP'] = val;
		},
		cashlessOTPValidDate : function(val, state){
			state['cashlessOTPValidDate'] = val;
		},
		cashlessPersonName : function(val, state){
			state['cashlessPersonName'] = val;
		},
		cashlessPhone : function(val, state){
			state['cashlessPhone'] = val;
		},
		cashlessPin : function(val, state){
			state['cashlessPin'] = val;
		},
		cashlessSecurityCode : function(val, state){
			state['cashlessSecurityCode'] = val;
		},
		cashWithdrawalTransactionStatus : function(val, state){
			state['cashWithdrawalTransactionStatus'] = val;
		},
		category : function(val, state){
			state['category'] = val;
		},
		checkImage : function(val, state){
			state['checkImage'] = val;
		},
		checkImageBack : function(val, state){
			state['checkImageBack'] = val;
		},
		checkNumber : function(val, state){
			state['checkNumber'] = val;
		},
		deliverBy : function(val, state){
			state['deliverBy'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		eBillEnable : function(val, state){
			state['eBillEnable'] = val;
		},
		eBillSupport : function(val, state){
			state['eBillSupport'] = val;
		},
		ebillURL : function(val, state){
			state['ebillURL'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		ExternalAccountNumber : function(val, state){
			state['ExternalAccountNumber'] = val;
		},
		firstDeposit : function(val, state){
			state['firstDeposit'] = val;
		},
		firstRecordNumber : function(val, state){
			state['firstRecordNumber'] = val;
		},
		frequencyEndDate : function(val, state){
			state['frequencyEndDate'] = val;
		},
		frequencyStartDate : function(val, state){
			state['frequencyStartDate'] = val;
		},
		frequencyType : function(val, state){
			state['frequencyType'] = val;
		},
		fromAccountBalance : function(val, state){
			state['fromAccountBalance'] = val;
		},
		fromAccountName : function(val, state){
			state['fromAccountName'] = val;
		},
		fromAccountNumber : function(val, state){
			state['fromAccountNumber'] = val;
		},
		fromAccountType : function(val, state){
			state['fromAccountType'] = val;
		},
		fromCheckNumber : function(val, state){
			state['fromCheckNumber'] = val;
		},
		fromNickName : function(val, state){
			state['fromNickName'] = val;
		},
		hasDepositImage : function(val, state){
			state['hasDepositImage'] = val;
		},
		isScheduled : function(val, state){
			state['isScheduled'] = val;
		},
		lastRecordNumber : function(val, state){
			state['lastRecordNumber'] = val;
		},
		limit : function(val, state){
			state['limit'] = val;
		},
		numberOfRecurrences : function(val, state){
			state['numberOfRecurrences'] = val;
		},
		offset : function(val, state){
			state['offset'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		otp : function(val, state){
			state['otp'] = val;
		},
		p2pContact : function(val, state){
			state['p2pContact'] = val;
		},
		p2pRequiredDate : function(val, state){
			state['p2pRequiredDate'] = val;
		},
		payeeAccountNumber : function(val, state){
			state['payeeAccountNumber'] = val;
		},
		payeeAddressLine1 : function(val, state){
			state['payeeAddressLine1'] = val;
		},
		payeeId : function(val, state){
			state['payeeId'] = val;
		},
		payeeName : function(val, state){
			state['payeeName'] = val;
		},
		payeeNickName : function(val, state){
			state['payeeNickName'] = val;
		},
		payoffFlag : function(val, state){
			state['payoffFlag'] = val;
		},
		payPersonEmail : function(val, state){
			state['payPersonEmail'] = val;
		},
		payPersonName : function(val, state){
			state['payPersonName'] = val;
		},
		payPersonPhone : function(val, state){
			state['payPersonPhone'] = val;
		},
		penaltyFlag : function(val, state){
			state['penaltyFlag'] = val;
		},
		personId : function(val, state){
			state['personId'] = val;
		},
		recurrenceDesc : function(val, state){
			state['recurrenceDesc'] = val;
		},
		referenceId : function(val, state){
			state['referenceId'] = val;
		},
		scheduledDate : function(val, state){
			state['scheduledDate'] = val;
		},
		searchAmount : function(val, state){
			state['searchAmount'] = val;
		},
		searchDateRange : function(val, state){
			state['searchDateRange'] = val;
		},
		searchDescription : function(val, state){
			state['searchDescription'] = val;
		},
		searchEndDate : function(val, state){
			state['searchEndDate'] = val;
		},
		searchMaxAmount : function(val, state){
			state['searchMaxAmount'] = val;
		},
		searchMinAmount : function(val, state){
			state['searchMinAmount'] = val;
		},
		searchStartDate : function(val, state){
			state['searchStartDate'] = val;
		},
		searchTransactionType : function(val, state){
			state['searchTransactionType'] = val;
		},
		searchType : function(val, state){
			state['searchType'] = val;
		},
		secondaryEmail : function(val, state){
			state['secondaryEmail'] = val;
		},
		secondaryEmail2 : function(val, state){
			state['secondaryEmail2'] = val;
		},
		secondaryPhoneNumber2 : function(val, state){
			state['secondaryPhoneNumber2'] = val;
		},
		secondDeposit : function(val, state){
			state['secondDeposit'] = val;
		},
		secondoryPhoneNumber : function(val, state){
			state['secondoryPhoneNumber'] = val;
		},
		sortBy : function(val, state){
			state['sortBy'] = val;
		},
		statusDescription : function(val, state){
			state['statusDescription'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		toAccountName : function(val, state){
			state['toAccountName'] = val;
		},
		toAccountNumber : function(val, state){
			state['toAccountNumber'] = val;
		},
		toAccountType : function(val, state){
			state['toAccountType'] = val;
		},
		toCheckNumber : function(val, state){
			state['toCheckNumber'] = val;
		},
		totalAmount : function(val, state){
			state['totalAmount'] = val;
		},
		transactionComments : function(val, state){
			state['transactionComments'] = val;
		},
		transactionDate : function(val, state){
			state['transactionDate'] = val;
		},
		transactionId : function(val, state){
			state['transactionId'] = val;
		},
		transactionsNotes : function(val, state){
			state['transactionsNotes'] = val;
		},
		transactionType : function(val, state){
			state['transactionType'] = val;
		},
		validDate : function(val, state){
			state['validDate'] = val;
		},
		viewReportLink : function(val, state){
			state['viewReportLink'] = val;
		},
		overdraft : function(val, state){
			state['overdraft'] = val;
		},
		isPaypersonDeleted : function(val, state){
			state['isPaypersonDeleted'] = val;
		},
		fee : function(val, state){
			state['fee'] = val;
		},
		frontImage1 : function(val, state){
			state['frontImage1'] = val;
		},
		frontImage2 : function(val, state){
			state['frontImage2'] = val;
		},
		backImage1 : function(val, state){
			state['backImage1'] = val;
		},
		backImage2 : function(val, state){
			state['backImage2'] = val;
		},
		checkDesc : function(val, state){
			state['checkDesc'] = val;
		},
		checkNumber1 : function(val, state){
			state['checkNumber1'] = val;
		},
		checkNumber2 : function(val, state){
			state['checkNumber2'] = val;
		},
		bankName1 : function(val, state){
			state['bankName1'] = val;
		},
		bankName2 : function(val, state){
			state['bankName2'] = val;
		},
		withdrawlAmount1 : function(val, state){
			state['withdrawlAmount1'] = val;
		},
		withdrawlAmount2 : function(val, state){
			state['withdrawlAmount2'] = val;
		},
		totalCheckAmount : function(val, state){
			state['totalCheckAmount'] = val;
		},
		cashAmount : function(val, state){
			state['cashAmount'] = val;
		},
		payeeCurrency : function(val, state){
			state['payeeCurrency'] = val;
		},
		swiftCode : function(val, state){
			state['swiftCode'] = val;
		},
		wireAccountType : function(val, state){
			state['wireAccountType'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		IBAN : function(val, state){
			state['IBAN'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		routingNumber : function(val, state){
			state['routingNumber'] = val;
		},
		internationalRoutingCode : function(val, state){
			state['internationalRoutingCode'] = val;
		},
		zipCode : function(val, state){
			state['zipCode'] = val;
		},
		cityName : function(val, state){
			state['cityName'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		bankAddressLine1 : function(val, state){
			state['bankAddressLine1'] = val;
		},
		bankAddressLine2 : function(val, state){
			state['bankAddressLine2'] = val;
		},
		bankCity : function(val, state){
			state['bankCity'] = val;
		},
		bankState : function(val, state){
			state['bankState'] = val;
		},
		bankZip : function(val, state){
			state['bankZip'] = val;
		},
		payeeType : function(val, state){
			state['payeeType'] = val;
		},
		disputeReason : function(val, state){
			state['disputeReason'] = val;
		},
		disputeDescription : function(val, state){
			state['disputeDescription'] = val;
		},
		checkDateOfIssue : function(val, state){
			state['checkDateOfIssue'] = val;
		},
		checkReason : function(val, state){
			state['checkReason'] = val;
		},
		isPayeeDeleted : function(val, state){
			state['isPayeeDeleted'] = val;
		},
		payeeAddressLine2 : function(val, state){
			state['payeeAddressLine2'] = val;
		},
		amountRecieved : function(val, state){
			state['amountRecieved'] = val;
		},
		requestValidityInMonths : function(val, state){
			state['requestValidityInMonths'] = val;
		},
		requestValidity : function(val, state){
			state['requestValidity'] = val;
		},
		requestType : function(val, state){
			state['requestType'] = val;
		},
		disputeDate : function(val, state){
			state['disputeDate'] = val;
		},
		disputeStatus : function(val, state){
			state['disputeStatus'] = val;
		},
		isDisputed : function(val, state){
			state['isDisputed'] = val;
		},
		cardId : function(val, state){
			state['cardId'] = val;
		},
		isOverdraft : function(val, state){
			state['isOverdraft'] = val;
		},
		title : function(val, state){
			state['title'] = val;
		},
		generatedBy : function(val, state){
			state['generatedBy'] = val;
		},
		filters : function(val, state){
			state['filters'] = val;
		},
		statementReference : function(val, state){
			state['statementReference'] = val;
		},
		transCreditDebitIndicator : function(val, state){
			state['transCreditDebitIndicator'] = val;
		},
		bookingDateTime : function(val, state){
			state['bookingDateTime'] = val;
		},
		valueDateTime : function(val, state){
			state['valueDateTime'] = val;
		},
		transactionInformation : function(val, state){
			state['transactionInformation'] = val;
		},
		addressLine : function(val, state){
			state['addressLine'] = val;
		},
		transactionAmount : function(val, state){
			state['transactionAmount'] = val;
		},
		transactionCurrency : function(val, state){
			state['transactionCurrency'] = val;
		},
		chargeAmount : function(val, state){
			state['chargeAmount'] = val;
		},
		chargeCurrency : function(val, state){
			state['chargeCurrency'] = val;
		},
		sourceCurrency : function(val, state){
			state['sourceCurrency'] = val;
		},
		targetCurrency : function(val, state){
			state['targetCurrency'] = val;
		},
		unitCurrency : function(val, state){
			state['unitCurrency'] = val;
		},
		exchangeRate : function(val, state){
			state['exchangeRate'] = val;
		},
		contractIdentification : function(val, state){
			state['contractIdentification'] = val;
		},
		quotationDate : function(val, state){
			state['quotationDate'] = val;
		},
		instructedAmount : function(val, state){
			state['instructedAmount'] = val;
		},
		transactionCode : function(val, state){
			state['transactionCode'] = val;
		},
		transactionSubCode : function(val, state){
			state['transactionSubCode'] = val;
		},
		proprietaryTransactionCode : function(val, state){
			state['proprietaryTransactionCode'] = val;
		},
		proprietaryTransactionIssuer : function(val, state){
			state['proprietaryTransactionIssuer'] = val;
		},
		balanceCreditDebitIndicator : function(val, state){
			state['balanceCreditDebitIndicator'] = val;
		},
		balanceType : function(val, state){
			state['balanceType'] = val;
		},
		balanceAmount : function(val, state){
			state['balanceAmount'] = val;
		},
		balanceCurrency : function(val, state){
			state['balanceCurrency'] = val;
		},
		merchantName : function(val, state){
			state['merchantName'] = val;
		},
		merchantCategoryCode : function(val, state){
			state['merchantCategoryCode'] = val;
		},
		creditorAgentSchemeName : function(val, state){
			state['creditorAgentSchemeName'] = val;
		},
		creditorAgentIdentification : function(val, state){
			state['creditorAgentIdentification'] = val;
		},
		creditorAgentName : function(val, state){
			state['creditorAgentName'] = val;
		},
		creditorAgentaddressType : function(val, state){
			state['creditorAgentaddressType'] = val;
		},
		creditorAgentDepartment : function(val, state){
			state['creditorAgentDepartment'] = val;
		},
		creditorAgentSubDepartment : function(val, state){
			state['creditorAgentSubDepartment'] = val;
		},
		creditorAgentStreetName : function(val, state){
			state['creditorAgentStreetName'] = val;
		},
		creditorAgentBuildingNumber : function(val, state){
			state['creditorAgentBuildingNumber'] = val;
		},
		creditorAgentPostCode : function(val, state){
			state['creditorAgentPostCode'] = val;
		},
		creditorAgentTownName : function(val, state){
			state['creditorAgentTownName'] = val;
		},
		creditorAgentCountrySubDivision : function(val, state){
			state['creditorAgentCountrySubDivision'] = val;
		},
		creditorAgentCountry : function(val, state){
			state['creditorAgentCountry'] = val;
		},
		creditorAgentAddressLine : function(val, state){
			state['creditorAgentAddressLine'] = val;
		},
		creditorAccountSchemeName : function(val, state){
			state['creditorAccountSchemeName'] = val;
		},
		creditorAccountSeconIdentification : function(val, state){
			state['creditorAccountSeconIdentification'] = val;
		},
		debtorAgentSchemeName : function(val, state){
			state['debtorAgentSchemeName'] = val;
		},
		debtorAgentIdentification : function(val, state){
			state['debtorAgentIdentification'] = val;
		},
		debtorAgentName : function(val, state){
			state['debtorAgentName'] = val;
		},
		debtorAgentAddressType : function(val, state){
			state['debtorAgentAddressType'] = val;
		},
		debtorAgentDepartment : function(val, state){
			state['debtorAgentDepartment'] = val;
		},
		debtorAgentSubDepartment : function(val, state){
			state['debtorAgentSubDepartment'] = val;
		},
		debtorAgentStreetName : function(val, state){
			state['debtorAgentStreetName'] = val;
		},
		debtorAgentBuildingNumber : function(val, state){
			state['debtorAgentBuildingNumber'] = val;
		},
		dedtorAgentPostCode : function(val, state){
			state['dedtorAgentPostCode'] = val;
		},
		debtorAgentTownName : function(val, state){
			state['debtorAgentTownName'] = val;
		},
		debtorAgentCountrySubDivision : function(val, state){
			state['debtorAgentCountrySubDivision'] = val;
		},
		debtorAgentCountry : function(val, state){
			state['debtorAgentCountry'] = val;
		},
		debtorAgentAddressLine : function(val, state){
			state['debtorAgentAddressLine'] = val;
		},
		debtorAccountSchemeName : function(val, state){
			state['debtorAccountSchemeName'] = val;
		},
		debtorAccountName : function(val, state){
			state['debtorAccountName'] = val;
		},
		debtorAccountSeconIdentification : function(val, state){
			state['debtorAccountSeconIdentification'] = val;
		},
		cardInstrumentSchemeName : function(val, state){
			state['cardInstrumentSchemeName'] = val;
		},
		cardInstrumentAuthorisationType : function(val, state){
			state['cardInstrumentAuthorisationType'] = val;
		},
		cardInstrumentName : function(val, state){
			state['cardInstrumentName'] = val;
		},
		cardInstrumentIdentification : function(val, state){
			state['cardInstrumentIdentification'] = val;
		},
		sortCode : function(val, state){
			state['sortCode'] = val;
		},
		feeCurrency : function(val, state){
			state['feeCurrency'] = val;
		},
		feePaidByReceipent : function(val, state){
			state['feePaidByReceipent'] = val;
		},
		convertedAmount : function(val, state){
			state['convertedAmount'] = val;
		},
		baseCurrency : function(val, state){
			state['baseCurrency'] = val;
		},
		FirstPaymentDateTime : function(val, state){
			state['FirstPaymentDateTime'] = val;
		},
		NextPaymentDateTime : function(val, state){
			state['NextPaymentDateTime'] = val;
		},
		FinalPaymentDateTime : function(val, state){
			state['FinalPaymentDateTime'] = val;
		},
		StandingOrderStatusCode : function(val, state){
			state['StandingOrderStatusCode'] = val;
		},
		FP_Amount : function(val, state){
			state['FP_Amount'] = val;
		},
		FP_Currency : function(val, state){
			state['FP_Currency'] = val;
		},
		NP_Amount : function(val, state){
			state['NP_Amount'] = val;
		},
		NP_Currency : function(val, state){
			state['NP_Currency'] = val;
		},
		FPA_Amount : function(val, state){
			state['FPA_Amount'] = val;
		},
		FPA_Currency : function(val, state){
			state['FPA_Currency'] = val;
		},
		beneficiaryName : function(val, state){
			state['beneficiaryName'] = val;
		},
		isInternationalAccount : function(val, state){
			state['isInternationalAccount'] = val;
		},
		ConsentId : function(val, state){
			state['ConsentId'] = val;
		},
		Initiation_InstructionIdentification : function(val, state){
			state['Initiation_InstructionIdentification'] = val;
		},
		RI_Unstructured : function(val, state){
			state['RI_Unstructured'] = val;
		},
		RI_Reference : function(val, state){
			state['RI_Reference'] = val;
		},
		Initiation_EndToEndIdentification : function(val, state){
			state['Initiation_EndToEndIdentification'] = val;
		},
		RiskPaymentContextCode : function(val, state){
			state['RiskPaymentContextCode'] = val;
		},
		linkSelf : function(val, state){
			state['linkSelf'] = val;
		},
		StatusUpdateDateTime : function(val, state){
			state['StatusUpdateDateTime'] = val;
		},
		createdDate : function(val, state){
			state['createdDate'] = val;
		},
		DomesticPaymentId : function(val, state){
			state['DomesticPaymentId'] = val;
		},
		dataStatus : function(val, state){
			state['dataStatus'] = val;
		},
		Auth_Token : function(val, state){
			state['Auth_Token'] = val;
		},
	};
	
	
	//Create the Model Class
	function Transactions(defaultValues){
		var privateState = {};
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.amount = defaultValues?(defaultValues["amount"]?defaultValues["amount"]:null):null;
			privateState.amountTransferedTillNow = defaultValues?(defaultValues["amountTransferedTillNow"]?defaultValues["amountTransferedTillNow"]:null):null;
			privateState.authenticationRequired = defaultValues?(defaultValues["authenticationRequired"]?defaultValues["authenticationRequired"]:null):null;
			privateState.billCategory = defaultValues?(defaultValues["billCategory"]?defaultValues["billCategory"]:null):null;
			privateState.billCategoryId = defaultValues?(defaultValues["billCategoryId"]?defaultValues["billCategoryId"]:null):null;
			privateState.billDueAmount = defaultValues?(defaultValues["billDueAmount"]?defaultValues["billDueAmount"]:null):null;
			privateState.billDueDate = defaultValues?(defaultValues["billDueDate"]?defaultValues["billDueDate"]:null):null;
			privateState.billerCategoryName = defaultValues?(defaultValues["billerCategoryName"]?defaultValues["billerCategoryName"]:null):null;
			privateState.billGeneratedDate = defaultValues?(defaultValues["billGeneratedDate"]?defaultValues["billGeneratedDate"]:null):null;
			privateState.billid = defaultValues?(defaultValues["billid"]?defaultValues["billid"]:null):null;
			privateState.billPaidAmount = defaultValues?(defaultValues["billPaidAmount"]?defaultValues["billPaidAmount"]:null):null;
			privateState.billPaidDate = defaultValues?(defaultValues["billPaidDate"]?defaultValues["billPaidDate"]:null):null;
			privateState.bulkPayString = defaultValues?(defaultValues["bulkPayString"]?defaultValues["bulkPayString"]:null):null;
			privateState.cashlessEmail = defaultValues?(defaultValues["cashlessEmail"]?defaultValues["cashlessEmail"]:null):null;
			privateState.cashlessMode = defaultValues?(defaultValues["cashlessMode"]?defaultValues["cashlessMode"]:null):null;
			privateState.cashlessOTP = defaultValues?(defaultValues["cashlessOTP"]?defaultValues["cashlessOTP"]:null):null;
			privateState.cashlessOTPValidDate = defaultValues?(defaultValues["cashlessOTPValidDate"]?defaultValues["cashlessOTPValidDate"]:null):null;
			privateState.cashlessPersonName = defaultValues?(defaultValues["cashlessPersonName"]?defaultValues["cashlessPersonName"]:null):null;
			privateState.cashlessPhone = defaultValues?(defaultValues["cashlessPhone"]?defaultValues["cashlessPhone"]:null):null;
			privateState.cashlessPin = defaultValues?(defaultValues["cashlessPin"]?defaultValues["cashlessPin"]:null):null;
			privateState.cashlessSecurityCode = defaultValues?(defaultValues["cashlessSecurityCode"]?defaultValues["cashlessSecurityCode"]:null):null;
			privateState.cashWithdrawalTransactionStatus = defaultValues?(defaultValues["cashWithdrawalTransactionStatus"]?defaultValues["cashWithdrawalTransactionStatus"]:null):null;
			privateState.category = defaultValues?(defaultValues["category"]?defaultValues["category"]:null):null;
			privateState.checkImage = defaultValues?(defaultValues["checkImage"]?defaultValues["checkImage"]:null):null;
			privateState.checkImageBack = defaultValues?(defaultValues["checkImageBack"]?defaultValues["checkImageBack"]:null):null;
			privateState.checkNumber = defaultValues?(defaultValues["checkNumber"]?defaultValues["checkNumber"]:null):null;
			privateState.deliverBy = defaultValues?(defaultValues["deliverBy"]?defaultValues["deliverBy"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.eBillEnable = defaultValues?(defaultValues["eBillEnable"]?defaultValues["eBillEnable"]:null):null;
			privateState.eBillSupport = defaultValues?(defaultValues["eBillSupport"]?defaultValues["eBillSupport"]:null):null;
			privateState.ebillURL = defaultValues?(defaultValues["ebillURL"]?defaultValues["ebillURL"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.ExternalAccountNumber = defaultValues?(defaultValues["ExternalAccountNumber"]?defaultValues["ExternalAccountNumber"]:null):null;
			privateState.firstDeposit = defaultValues?(defaultValues["firstDeposit"]?defaultValues["firstDeposit"]:null):null;
			privateState.firstRecordNumber = defaultValues?(defaultValues["firstRecordNumber"]?defaultValues["firstRecordNumber"]:null):null;
			privateState.frequencyEndDate = defaultValues?(defaultValues["frequencyEndDate"]?defaultValues["frequencyEndDate"]:null):null;
			privateState.frequencyStartDate = defaultValues?(defaultValues["frequencyStartDate"]?defaultValues["frequencyStartDate"]:null):null;
			privateState.frequencyType = defaultValues?(defaultValues["frequencyType"]?defaultValues["frequencyType"]:null):null;
			privateState.fromAccountBalance = defaultValues?(defaultValues["fromAccountBalance"]?defaultValues["fromAccountBalance"]:null):null;
			privateState.fromAccountName = defaultValues?(defaultValues["fromAccountName"]?defaultValues["fromAccountName"]:null):null;
			privateState.fromAccountNumber = defaultValues?(defaultValues["fromAccountNumber"]?defaultValues["fromAccountNumber"]:null):null;
			privateState.fromAccountType = defaultValues?(defaultValues["fromAccountType"]?defaultValues["fromAccountType"]:null):null;
			privateState.fromCheckNumber = defaultValues?(defaultValues["fromCheckNumber"]?defaultValues["fromCheckNumber"]:null):null;
			privateState.fromNickName = defaultValues?(defaultValues["fromNickName"]?defaultValues["fromNickName"]:null):null;
			privateState.hasDepositImage = defaultValues?(defaultValues["hasDepositImage"]?defaultValues["hasDepositImage"]:null):null;
			privateState.isScheduled = defaultValues?(defaultValues["isScheduled"]?defaultValues["isScheduled"]:null):null;
			privateState.lastRecordNumber = defaultValues?(defaultValues["lastRecordNumber"]?defaultValues["lastRecordNumber"]:null):null;
			privateState.limit = defaultValues?(defaultValues["limit"]?defaultValues["limit"]:null):null;
			privateState.numberOfRecurrences = defaultValues?(defaultValues["numberOfRecurrences"]?defaultValues["numberOfRecurrences"]:null):null;
			privateState.offset = defaultValues?(defaultValues["offset"]?defaultValues["offset"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.otp = defaultValues?(defaultValues["otp"]?defaultValues["otp"]:null):null;
			privateState.p2pContact = defaultValues?(defaultValues["p2pContact"]?defaultValues["p2pContact"]:null):null;
			privateState.p2pRequiredDate = defaultValues?(defaultValues["p2pRequiredDate"]?defaultValues["p2pRequiredDate"]:null):null;
			privateState.payeeAccountNumber = defaultValues?(defaultValues["payeeAccountNumber"]?defaultValues["payeeAccountNumber"]:null):null;
			privateState.payeeAddressLine1 = defaultValues?(defaultValues["payeeAddressLine1"]?defaultValues["payeeAddressLine1"]:null):null;
			privateState.payeeId = defaultValues?(defaultValues["payeeId"]?defaultValues["payeeId"]:null):null;
			privateState.payeeName = defaultValues?(defaultValues["payeeName"]?defaultValues["payeeName"]:null):null;
			privateState.payeeNickName = defaultValues?(defaultValues["payeeNickName"]?defaultValues["payeeNickName"]:null):null;
			privateState.payoffFlag = defaultValues?(defaultValues["payoffFlag"]?defaultValues["payoffFlag"]:null):null;
			privateState.payPersonEmail = defaultValues?(defaultValues["payPersonEmail"]?defaultValues["payPersonEmail"]:null):null;
			privateState.payPersonName = defaultValues?(defaultValues["payPersonName"]?defaultValues["payPersonName"]:null):null;
			privateState.payPersonPhone = defaultValues?(defaultValues["payPersonPhone"]?defaultValues["payPersonPhone"]:null):null;
			privateState.penaltyFlag = defaultValues?(defaultValues["penaltyFlag"]?defaultValues["penaltyFlag"]:null):null;
			privateState.personId = defaultValues?(defaultValues["personId"]?defaultValues["personId"]:null):null;
			privateState.recurrenceDesc = defaultValues?(defaultValues["recurrenceDesc"]?defaultValues["recurrenceDesc"]:null):null;
			privateState.referenceId = defaultValues?(defaultValues["referenceId"]?defaultValues["referenceId"]:null):null;
			privateState.scheduledDate = defaultValues?(defaultValues["scheduledDate"]?defaultValues["scheduledDate"]:null):null;
			privateState.searchAmount = defaultValues?(defaultValues["searchAmount"]?defaultValues["searchAmount"]:null):null;
			privateState.searchDateRange = defaultValues?(defaultValues["searchDateRange"]?defaultValues["searchDateRange"]:null):null;
			privateState.searchDescription = defaultValues?(defaultValues["searchDescription"]?defaultValues["searchDescription"]:null):null;
			privateState.searchEndDate = defaultValues?(defaultValues["searchEndDate"]?defaultValues["searchEndDate"]:null):null;
			privateState.searchMaxAmount = defaultValues?(defaultValues["searchMaxAmount"]?defaultValues["searchMaxAmount"]:null):null;
			privateState.searchMinAmount = defaultValues?(defaultValues["searchMinAmount"]?defaultValues["searchMinAmount"]:null):null;
			privateState.searchStartDate = defaultValues?(defaultValues["searchStartDate"]?defaultValues["searchStartDate"]:null):null;
			privateState.searchTransactionType = defaultValues?(defaultValues["searchTransactionType"]?defaultValues["searchTransactionType"]:null):null;
			privateState.searchType = defaultValues?(defaultValues["searchType"]?defaultValues["searchType"]:null):null;
			privateState.secondaryEmail = defaultValues?(defaultValues["secondaryEmail"]?defaultValues["secondaryEmail"]:null):null;
			privateState.secondaryEmail2 = defaultValues?(defaultValues["secondaryEmail2"]?defaultValues["secondaryEmail2"]:null):null;
			privateState.secondaryPhoneNumber2 = defaultValues?(defaultValues["secondaryPhoneNumber2"]?defaultValues["secondaryPhoneNumber2"]:null):null;
			privateState.secondDeposit = defaultValues?(defaultValues["secondDeposit"]?defaultValues["secondDeposit"]:null):null;
			privateState.secondoryPhoneNumber = defaultValues?(defaultValues["secondoryPhoneNumber"]?defaultValues["secondoryPhoneNumber"]:null):null;
			privateState.sortBy = defaultValues?(defaultValues["sortBy"]?defaultValues["sortBy"]:null):null;
			privateState.statusDescription = defaultValues?(defaultValues["statusDescription"]?defaultValues["statusDescription"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.toAccountName = defaultValues?(defaultValues["toAccountName"]?defaultValues["toAccountName"]:null):null;
			privateState.toAccountNumber = defaultValues?(defaultValues["toAccountNumber"]?defaultValues["toAccountNumber"]:null):null;
			privateState.toAccountType = defaultValues?(defaultValues["toAccountType"]?defaultValues["toAccountType"]:null):null;
			privateState.toCheckNumber = defaultValues?(defaultValues["toCheckNumber"]?defaultValues["toCheckNumber"]:null):null;
			privateState.totalAmount = defaultValues?(defaultValues["totalAmount"]?defaultValues["totalAmount"]:null):null;
			privateState.transactionComments = defaultValues?(defaultValues["transactionComments"]?defaultValues["transactionComments"]:null):null;
			privateState.transactionDate = defaultValues?(defaultValues["transactionDate"]?defaultValues["transactionDate"]:null):null;
			privateState.transactionId = defaultValues?(defaultValues["transactionId"]?defaultValues["transactionId"]:null):null;
			privateState.transactionsNotes = defaultValues?(defaultValues["transactionsNotes"]?defaultValues["transactionsNotes"]:null):null;
			privateState.transactionType = defaultValues?(defaultValues["transactionType"]?defaultValues["transactionType"]:null):null;
			privateState.validDate = defaultValues?(defaultValues["validDate"]?defaultValues["validDate"]:null):null;
			privateState.viewReportLink = defaultValues?(defaultValues["viewReportLink"]?defaultValues["viewReportLink"]:null):null;
			privateState.overdraft = defaultValues?(defaultValues["overdraft"]?defaultValues["overdraft"]:null):null;
			privateState.isPaypersonDeleted = defaultValues?(defaultValues["isPaypersonDeleted"]?defaultValues["isPaypersonDeleted"]:null):null;
			privateState.fee = defaultValues?(defaultValues["fee"]?defaultValues["fee"]:null):null;
			privateState.frontImage1 = defaultValues?(defaultValues["frontImage1"]?defaultValues["frontImage1"]:null):null;
			privateState.frontImage2 = defaultValues?(defaultValues["frontImage2"]?defaultValues["frontImage2"]:null):null;
			privateState.backImage1 = defaultValues?(defaultValues["backImage1"]?defaultValues["backImage1"]:null):null;
			privateState.backImage2 = defaultValues?(defaultValues["backImage2"]?defaultValues["backImage2"]:null):null;
			privateState.checkDesc = defaultValues?(defaultValues["checkDesc"]?defaultValues["checkDesc"]:null):null;
			privateState.checkNumber1 = defaultValues?(defaultValues["checkNumber1"]?defaultValues["checkNumber1"]:null):null;
			privateState.checkNumber2 = defaultValues?(defaultValues["checkNumber2"]?defaultValues["checkNumber2"]:null):null;
			privateState.bankName1 = defaultValues?(defaultValues["bankName1"]?defaultValues["bankName1"]:null):null;
			privateState.bankName2 = defaultValues?(defaultValues["bankName2"]?defaultValues["bankName2"]:null):null;
			privateState.withdrawlAmount1 = defaultValues?(defaultValues["withdrawlAmount1"]?defaultValues["withdrawlAmount1"]:null):null;
			privateState.withdrawlAmount2 = defaultValues?(defaultValues["withdrawlAmount2"]?defaultValues["withdrawlAmount2"]:null):null;
			privateState.totalCheckAmount = defaultValues?(defaultValues["totalCheckAmount"]?defaultValues["totalCheckAmount"]:null):null;
			privateState.cashAmount = defaultValues?(defaultValues["cashAmount"]?defaultValues["cashAmount"]:null):null;
			privateState.payeeCurrency = defaultValues?(defaultValues["payeeCurrency"]?defaultValues["payeeCurrency"]:null):null;
			privateState.swiftCode = defaultValues?(defaultValues["swiftCode"]?defaultValues["swiftCode"]:null):null;
			privateState.wireAccountType = defaultValues?(defaultValues["wireAccountType"]?defaultValues["wireAccountType"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.IBAN = defaultValues?(defaultValues["IBAN"]?defaultValues["IBAN"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.routingNumber = defaultValues?(defaultValues["routingNumber"]?defaultValues["routingNumber"]:null):null;
			privateState.internationalRoutingCode = defaultValues?(defaultValues["internationalRoutingCode"]?defaultValues["internationalRoutingCode"]:null):null;
			privateState.zipCode = defaultValues?(defaultValues["zipCode"]?defaultValues["zipCode"]:null):null;
			privateState.cityName = defaultValues?(defaultValues["cityName"]?defaultValues["cityName"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.bankAddressLine1 = defaultValues?(defaultValues["bankAddressLine1"]?defaultValues["bankAddressLine1"]:null):null;
			privateState.bankAddressLine2 = defaultValues?(defaultValues["bankAddressLine2"]?defaultValues["bankAddressLine2"]:null):null;
			privateState.bankCity = defaultValues?(defaultValues["bankCity"]?defaultValues["bankCity"]:null):null;
			privateState.bankState = defaultValues?(defaultValues["bankState"]?defaultValues["bankState"]:null):null;
			privateState.bankZip = defaultValues?(defaultValues["bankZip"]?defaultValues["bankZip"]:null):null;
			privateState.payeeType = defaultValues?(defaultValues["payeeType"]?defaultValues["payeeType"]:null):null;
			privateState.disputeReason = defaultValues?(defaultValues["disputeReason"]?defaultValues["disputeReason"]:null):null;
			privateState.disputeDescription = defaultValues?(defaultValues["disputeDescription"]?defaultValues["disputeDescription"]:null):null;
			privateState.checkDateOfIssue = defaultValues?(defaultValues["checkDateOfIssue"]?defaultValues["checkDateOfIssue"]:null):null;
			privateState.checkReason = defaultValues?(defaultValues["checkReason"]?defaultValues["checkReason"]:null):null;
			privateState.isPayeeDeleted = defaultValues?(defaultValues["isPayeeDeleted"]?defaultValues["isPayeeDeleted"]:null):null;
			privateState.payeeAddressLine2 = defaultValues?(defaultValues["payeeAddressLine2"]?defaultValues["payeeAddressLine2"]:null):null;
			privateState.amountRecieved = defaultValues?(defaultValues["amountRecieved"]?defaultValues["amountRecieved"]:null):null;
			privateState.requestValidityInMonths = defaultValues?(defaultValues["requestValidityInMonths"]?defaultValues["requestValidityInMonths"]:null):null;
			privateState.requestValidity = defaultValues?(defaultValues["requestValidity"]?defaultValues["requestValidity"]:null):null;
			privateState.requestType = defaultValues?(defaultValues["requestType"]?defaultValues["requestType"]:null):null;
			privateState.disputeDate = defaultValues?(defaultValues["disputeDate"]?defaultValues["disputeDate"]:null):null;
			privateState.disputeStatus = defaultValues?(defaultValues["disputeStatus"]?defaultValues["disputeStatus"]:null):null;
			privateState.isDisputed = defaultValues?(defaultValues["isDisputed"]?defaultValues["isDisputed"]:null):null;
			privateState.cardId = defaultValues?(defaultValues["cardId"]?defaultValues["cardId"]:null):null;
			privateState.isOverdraft = defaultValues?(defaultValues["isOverdraft"]?defaultValues["isOverdraft"]:null):null;
			privateState.title = defaultValues?(defaultValues["title"]?defaultValues["title"]:null):null;
			privateState.generatedBy = defaultValues?(defaultValues["generatedBy"]?defaultValues["generatedBy"]:null):null;
			privateState.filters = defaultValues?(defaultValues["filters"]?defaultValues["filters"]:null):null;
			privateState.statementReference = defaultValues?(defaultValues["statementReference"]?defaultValues["statementReference"]:null):null;
			privateState.transCreditDebitIndicator = defaultValues?(defaultValues["transCreditDebitIndicator"]?defaultValues["transCreditDebitIndicator"]:null):null;
			privateState.bookingDateTime = defaultValues?(defaultValues["bookingDateTime"]?defaultValues["bookingDateTime"]:null):null;
			privateState.valueDateTime = defaultValues?(defaultValues["valueDateTime"]?defaultValues["valueDateTime"]:null):null;
			privateState.transactionInformation = defaultValues?(defaultValues["transactionInformation"]?defaultValues["transactionInformation"]:null):null;
			privateState.addressLine = defaultValues?(defaultValues["addressLine"]?defaultValues["addressLine"]:null):null;
			privateState.transactionAmount = defaultValues?(defaultValues["transactionAmount"]?defaultValues["transactionAmount"]:null):null;
			privateState.transactionCurrency = defaultValues?(defaultValues["transactionCurrency"]?defaultValues["transactionCurrency"]:null):null;
			privateState.chargeAmount = defaultValues?(defaultValues["chargeAmount"]?defaultValues["chargeAmount"]:null):null;
			privateState.chargeCurrency = defaultValues?(defaultValues["chargeCurrency"]?defaultValues["chargeCurrency"]:null):null;
			privateState.sourceCurrency = defaultValues?(defaultValues["sourceCurrency"]?defaultValues["sourceCurrency"]:null):null;
			privateState.targetCurrency = defaultValues?(defaultValues["targetCurrency"]?defaultValues["targetCurrency"]:null):null;
			privateState.unitCurrency = defaultValues?(defaultValues["unitCurrency"]?defaultValues["unitCurrency"]:null):null;
			privateState.exchangeRate = defaultValues?(defaultValues["exchangeRate"]?defaultValues["exchangeRate"]:null):null;
			privateState.contractIdentification = defaultValues?(defaultValues["contractIdentification"]?defaultValues["contractIdentification"]:null):null;
			privateState.quotationDate = defaultValues?(defaultValues["quotationDate"]?defaultValues["quotationDate"]:null):null;
			privateState.instructedAmount = defaultValues?(defaultValues["instructedAmount"]?defaultValues["instructedAmount"]:null):null;
			privateState.transactionCode = defaultValues?(defaultValues["transactionCode"]?defaultValues["transactionCode"]:null):null;
			privateState.transactionSubCode = defaultValues?(defaultValues["transactionSubCode"]?defaultValues["transactionSubCode"]:null):null;
			privateState.proprietaryTransactionCode = defaultValues?(defaultValues["proprietaryTransactionCode"]?defaultValues["proprietaryTransactionCode"]:null):null;
			privateState.proprietaryTransactionIssuer = defaultValues?(defaultValues["proprietaryTransactionIssuer"]?defaultValues["proprietaryTransactionIssuer"]:null):null;
			privateState.balanceCreditDebitIndicator = defaultValues?(defaultValues["balanceCreditDebitIndicator"]?defaultValues["balanceCreditDebitIndicator"]:null):null;
			privateState.balanceType = defaultValues?(defaultValues["balanceType"]?defaultValues["balanceType"]:null):null;
			privateState.balanceAmount = defaultValues?(defaultValues["balanceAmount"]?defaultValues["balanceAmount"]:null):null;
			privateState.balanceCurrency = defaultValues?(defaultValues["balanceCurrency"]?defaultValues["balanceCurrency"]:null):null;
			privateState.merchantName = defaultValues?(defaultValues["merchantName"]?defaultValues["merchantName"]:null):null;
			privateState.merchantCategoryCode = defaultValues?(defaultValues["merchantCategoryCode"]?defaultValues["merchantCategoryCode"]:null):null;
			privateState.creditorAgentSchemeName = defaultValues?(defaultValues["creditorAgentSchemeName"]?defaultValues["creditorAgentSchemeName"]:null):null;
			privateState.creditorAgentIdentification = defaultValues?(defaultValues["creditorAgentIdentification"]?defaultValues["creditorAgentIdentification"]:null):null;
			privateState.creditorAgentName = defaultValues?(defaultValues["creditorAgentName"]?defaultValues["creditorAgentName"]:null):null;
			privateState.creditorAgentaddressType = defaultValues?(defaultValues["creditorAgentaddressType"]?defaultValues["creditorAgentaddressType"]:null):null;
			privateState.creditorAgentDepartment = defaultValues?(defaultValues["creditorAgentDepartment"]?defaultValues["creditorAgentDepartment"]:null):null;
			privateState.creditorAgentSubDepartment = defaultValues?(defaultValues["creditorAgentSubDepartment"]?defaultValues["creditorAgentSubDepartment"]:null):null;
			privateState.creditorAgentStreetName = defaultValues?(defaultValues["creditorAgentStreetName"]?defaultValues["creditorAgentStreetName"]:null):null;
			privateState.creditorAgentBuildingNumber = defaultValues?(defaultValues["creditorAgentBuildingNumber"]?defaultValues["creditorAgentBuildingNumber"]:null):null;
			privateState.creditorAgentPostCode = defaultValues?(defaultValues["creditorAgentPostCode"]?defaultValues["creditorAgentPostCode"]:null):null;
			privateState.creditorAgentTownName = defaultValues?(defaultValues["creditorAgentTownName"]?defaultValues["creditorAgentTownName"]:null):null;
			privateState.creditorAgentCountrySubDivision = defaultValues?(defaultValues["creditorAgentCountrySubDivision"]?defaultValues["creditorAgentCountrySubDivision"]:null):null;
			privateState.creditorAgentCountry = defaultValues?(defaultValues["creditorAgentCountry"]?defaultValues["creditorAgentCountry"]:null):null;
			privateState.creditorAgentAddressLine = defaultValues?(defaultValues["creditorAgentAddressLine"]?defaultValues["creditorAgentAddressLine"]:null):null;
			privateState.creditorAccountSchemeName = defaultValues?(defaultValues["creditorAccountSchemeName"]?defaultValues["creditorAccountSchemeName"]:null):null;
			privateState.creditorAccountSeconIdentification = defaultValues?(defaultValues["creditorAccountSeconIdentification"]?defaultValues["creditorAccountSeconIdentification"]:null):null;
			privateState.debtorAgentSchemeName = defaultValues?(defaultValues["debtorAgentSchemeName"]?defaultValues["debtorAgentSchemeName"]:null):null;
			privateState.debtorAgentIdentification = defaultValues?(defaultValues["debtorAgentIdentification"]?defaultValues["debtorAgentIdentification"]:null):null;
			privateState.debtorAgentName = defaultValues?(defaultValues["debtorAgentName"]?defaultValues["debtorAgentName"]:null):null;
			privateState.debtorAgentAddressType = defaultValues?(defaultValues["debtorAgentAddressType"]?defaultValues["debtorAgentAddressType"]:null):null;
			privateState.debtorAgentDepartment = defaultValues?(defaultValues["debtorAgentDepartment"]?defaultValues["debtorAgentDepartment"]:null):null;
			privateState.debtorAgentSubDepartment = defaultValues?(defaultValues["debtorAgentSubDepartment"]?defaultValues["debtorAgentSubDepartment"]:null):null;
			privateState.debtorAgentStreetName = defaultValues?(defaultValues["debtorAgentStreetName"]?defaultValues["debtorAgentStreetName"]:null):null;
			privateState.debtorAgentBuildingNumber = defaultValues?(defaultValues["debtorAgentBuildingNumber"]?defaultValues["debtorAgentBuildingNumber"]:null):null;
			privateState.dedtorAgentPostCode = defaultValues?(defaultValues["dedtorAgentPostCode"]?defaultValues["dedtorAgentPostCode"]:null):null;
			privateState.debtorAgentTownName = defaultValues?(defaultValues["debtorAgentTownName"]?defaultValues["debtorAgentTownName"]:null):null;
			privateState.debtorAgentCountrySubDivision = defaultValues?(defaultValues["debtorAgentCountrySubDivision"]?defaultValues["debtorAgentCountrySubDivision"]:null):null;
			privateState.debtorAgentCountry = defaultValues?(defaultValues["debtorAgentCountry"]?defaultValues["debtorAgentCountry"]:null):null;
			privateState.debtorAgentAddressLine = defaultValues?(defaultValues["debtorAgentAddressLine"]?defaultValues["debtorAgentAddressLine"]:null):null;
			privateState.debtorAccountSchemeName = defaultValues?(defaultValues["debtorAccountSchemeName"]?defaultValues["debtorAccountSchemeName"]:null):null;
			privateState.debtorAccountName = defaultValues?(defaultValues["debtorAccountName"]?defaultValues["debtorAccountName"]:null):null;
			privateState.debtorAccountSeconIdentification = defaultValues?(defaultValues["debtorAccountSeconIdentification"]?defaultValues["debtorAccountSeconIdentification"]:null):null;
			privateState.cardInstrumentSchemeName = defaultValues?(defaultValues["cardInstrumentSchemeName"]?defaultValues["cardInstrumentSchemeName"]:null):null;
			privateState.cardInstrumentAuthorisationType = defaultValues?(defaultValues["cardInstrumentAuthorisationType"]?defaultValues["cardInstrumentAuthorisationType"]:null):null;
			privateState.cardInstrumentName = defaultValues?(defaultValues["cardInstrumentName"]?defaultValues["cardInstrumentName"]:null):null;
			privateState.cardInstrumentIdentification = defaultValues?(defaultValues["cardInstrumentIdentification"]?defaultValues["cardInstrumentIdentification"]:null):null;
			privateState.sortCode = defaultValues?(defaultValues["sortCode"]?defaultValues["sortCode"]:null):null;
			privateState.feeCurrency = defaultValues?(defaultValues["feeCurrency"]?defaultValues["feeCurrency"]:null):null;
			privateState.feePaidByReceipent = defaultValues?(defaultValues["feePaidByReceipent"]?defaultValues["feePaidByReceipent"]:null):null;
			privateState.convertedAmount = defaultValues?(defaultValues["convertedAmount"]?defaultValues["convertedAmount"]:null):null;
			privateState.baseCurrency = defaultValues?(defaultValues["baseCurrency"]?defaultValues["baseCurrency"]:null):null;
			privateState.FirstPaymentDateTime = defaultValues?(defaultValues["FirstPaymentDateTime"]?defaultValues["FirstPaymentDateTime"]:null):null;
			privateState.NextPaymentDateTime = defaultValues?(defaultValues["NextPaymentDateTime"]?defaultValues["NextPaymentDateTime"]:null):null;
			privateState.FinalPaymentDateTime = defaultValues?(defaultValues["FinalPaymentDateTime"]?defaultValues["FinalPaymentDateTime"]:null):null;
			privateState.StandingOrderStatusCode = defaultValues?(defaultValues["StandingOrderStatusCode"]?defaultValues["StandingOrderStatusCode"]:null):null;
			privateState.FP_Amount = defaultValues?(defaultValues["FP_Amount"]?defaultValues["FP_Amount"]:null):null;
			privateState.FP_Currency = defaultValues?(defaultValues["FP_Currency"]?defaultValues["FP_Currency"]:null):null;
			privateState.NP_Amount = defaultValues?(defaultValues["NP_Amount"]?defaultValues["NP_Amount"]:null):null;
			privateState.NP_Currency = defaultValues?(defaultValues["NP_Currency"]?defaultValues["NP_Currency"]:null):null;
			privateState.FPA_Amount = defaultValues?(defaultValues["FPA_Amount"]?defaultValues["FPA_Amount"]:null):null;
			privateState.FPA_Currency = defaultValues?(defaultValues["FPA_Currency"]?defaultValues["FPA_Currency"]:null):null;
			privateState.beneficiaryName = defaultValues?(defaultValues["beneficiaryName"]?defaultValues["beneficiaryName"]:null):null;
			privateState.isInternationalAccount = defaultValues?(defaultValues["isInternationalAccount"]?defaultValues["isInternationalAccount"]:null):null;
			privateState.ConsentId = defaultValues?(defaultValues["ConsentId"]?defaultValues["ConsentId"]:null):null;
			privateState.Initiation_InstructionIdentification = defaultValues?(defaultValues["Initiation_InstructionIdentification"]?defaultValues["Initiation_InstructionIdentification"]:null):null;
			privateState.RI_Unstructured = defaultValues?(defaultValues["RI_Unstructured"]?defaultValues["RI_Unstructured"]:null):null;
			privateState.RI_Reference = defaultValues?(defaultValues["RI_Reference"]?defaultValues["RI_Reference"]:null):null;
			privateState.Initiation_EndToEndIdentification = defaultValues?(defaultValues["Initiation_EndToEndIdentification"]?defaultValues["Initiation_EndToEndIdentification"]:null):null;
			privateState.RiskPaymentContextCode = defaultValues?(defaultValues["RiskPaymentContextCode"]?defaultValues["RiskPaymentContextCode"]:null):null;
			privateState.linkSelf = defaultValues?(defaultValues["linkSelf"]?defaultValues["linkSelf"]:null):null;
			privateState.StatusUpdateDateTime = defaultValues?(defaultValues["StatusUpdateDateTime"]?defaultValues["StatusUpdateDateTime"]:null):null;
			privateState.createdDate = defaultValues?(defaultValues["createdDate"]?defaultValues["createdDate"]:null):null;
			privateState.DomesticPaymentId = defaultValues?(defaultValues["DomesticPaymentId"]?defaultValues["DomesticPaymentId"]:null):null;
			privateState.dataStatus = defaultValues?(defaultValues["dataStatus"]?defaultValues["dataStatus"]:null):null;
			privateState.Auth_Token = defaultValues?(defaultValues["Auth_Token"]?defaultValues["Auth_Token"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"amount" : {
					get : function(){return privateState.amount},
					set : function(val){
						setterFunctions['amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"amountTransferedTillNow" : {
					get : function(){return privateState.amountTransferedTillNow},
					set : function(val){
						setterFunctions['amountTransferedTillNow'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"authenticationRequired" : {
					get : function(){return privateState.authenticationRequired},
					set : function(val){
						setterFunctions['authenticationRequired'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billCategory" : {
					get : function(){return privateState.billCategory},
					set : function(val){
						setterFunctions['billCategory'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billCategoryId" : {
					get : function(){return privateState.billCategoryId},
					set : function(val){
						setterFunctions['billCategoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billDueAmount" : {
					get : function(){return privateState.billDueAmount},
					set : function(val){
						setterFunctions['billDueAmount'].call(this,val,privateState);
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
				"billerCategoryName" : {
					get : function(){return privateState.billerCategoryName},
					set : function(val){
						setterFunctions['billerCategoryName'].call(this,val,privateState);
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
				"billid" : {
					get : function(){return privateState.billid},
					set : function(val){
						setterFunctions['billid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billPaidAmount" : {
					get : function(){return privateState.billPaidAmount},
					set : function(val){
						setterFunctions['billPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billPaidDate" : {
					get : function(){return privateState.billPaidDate},
					set : function(val){
						setterFunctions['billPaidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bulkPayString" : {
					get : function(){return privateState.bulkPayString},
					set : function(val){
						setterFunctions['bulkPayString'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessEmail" : {
					get : function(){return privateState.cashlessEmail},
					set : function(val){
						setterFunctions['cashlessEmail'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessMode" : {
					get : function(){return privateState.cashlessMode},
					set : function(val){
						setterFunctions['cashlessMode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessOTP" : {
					get : function(){return privateState.cashlessOTP},
					set : function(val){
						setterFunctions['cashlessOTP'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessOTPValidDate" : {
					get : function(){return privateState.cashlessOTPValidDate},
					set : function(val){
						setterFunctions['cashlessOTPValidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessPersonName" : {
					get : function(){return privateState.cashlessPersonName},
					set : function(val){
						setterFunctions['cashlessPersonName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessPhone" : {
					get : function(){return privateState.cashlessPhone},
					set : function(val){
						setterFunctions['cashlessPhone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessPin" : {
					get : function(){return privateState.cashlessPin},
					set : function(val){
						setterFunctions['cashlessPin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashlessSecurityCode" : {
					get : function(){return privateState.cashlessSecurityCode},
					set : function(val){
						setterFunctions['cashlessSecurityCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashWithdrawalTransactionStatus" : {
					get : function(){return privateState.cashWithdrawalTransactionStatus},
					set : function(val){
						setterFunctions['cashWithdrawalTransactionStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"category" : {
					get : function(){return privateState.category},
					set : function(val){
						setterFunctions['category'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkImage" : {
					get : function(){return privateState.checkImage},
					set : function(val){
						setterFunctions['checkImage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkImageBack" : {
					get : function(){return privateState.checkImageBack},
					set : function(val){
						setterFunctions['checkImageBack'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkNumber" : {
					get : function(){return privateState.checkNumber},
					set : function(val){
						setterFunctions['checkNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deliverBy" : {
					get : function(){return privateState.deliverBy},
					set : function(val){
						setterFunctions['deliverBy'].call(this,val,privateState);
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
				"eBillEnable" : {
					get : function(){return privateState.eBillEnable},
					set : function(val){
						setterFunctions['eBillEnable'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"eBillSupport" : {
					get : function(){return privateState.eBillSupport},
					set : function(val){
						setterFunctions['eBillSupport'].call(this,val,privateState);
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
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ExternalAccountNumber" : {
					get : function(){return privateState.ExternalAccountNumber},
					set : function(val){
						setterFunctions['ExternalAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"firstDeposit" : {
					get : function(){return privateState.firstDeposit},
					set : function(val){
						setterFunctions['firstDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"firstRecordNumber" : {
					get : function(){return privateState.firstRecordNumber},
					set : function(val){
						setterFunctions['firstRecordNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"frequencyEndDate" : {
					get : function(){return privateState.frequencyEndDate},
					set : function(val){
						setterFunctions['frequencyEndDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"frequencyStartDate" : {
					get : function(){return privateState.frequencyStartDate},
					set : function(val){
						setterFunctions['frequencyStartDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"frequencyType" : {
					get : function(){return privateState.frequencyType},
					set : function(val){
						setterFunctions['frequencyType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromAccountBalance" : {
					get : function(){return privateState.fromAccountBalance},
					set : function(val){
						setterFunctions['fromAccountBalance'].call(this,val,privateState);
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
				"fromAccountType" : {
					get : function(){return privateState.fromAccountType},
					set : function(val){
						setterFunctions['fromAccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromCheckNumber" : {
					get : function(){return privateState.fromCheckNumber},
					set : function(val){
						setterFunctions['fromCheckNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fromNickName" : {
					get : function(){return privateState.fromNickName},
					set : function(val){
						setterFunctions['fromNickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"hasDepositImage" : {
					get : function(){return privateState.hasDepositImage},
					set : function(val){
						setterFunctions['hasDepositImage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isScheduled" : {
					get : function(){return privateState.isScheduled},
					set : function(val){
						setterFunctions['isScheduled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastRecordNumber" : {
					get : function(){return privateState.lastRecordNumber},
					set : function(val){
						setterFunctions['lastRecordNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"limit" : {
					get : function(){return privateState.limit},
					set : function(val){
						setterFunctions['limit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"numberOfRecurrences" : {
					get : function(){return privateState.numberOfRecurrences},
					set : function(val){
						setterFunctions['numberOfRecurrences'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"offset" : {
					get : function(){return privateState.offset},
					set : function(val){
						setterFunctions['offset'].call(this,val,privateState);
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
				"otp" : {
					get : function(){return privateState.otp},
					set : function(val){
						setterFunctions['otp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"p2pContact" : {
					get : function(){return privateState.p2pContact},
					set : function(val){
						setterFunctions['p2pContact'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"p2pRequiredDate" : {
					get : function(){return privateState.p2pRequiredDate},
					set : function(val){
						setterFunctions['p2pRequiredDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeAccountNumber" : {
					get : function(){return privateState.payeeAccountNumber},
					set : function(val){
						setterFunctions['payeeAccountNumber'].call(this,val,privateState);
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
				"payeeNickName" : {
					get : function(){return privateState.payeeNickName},
					set : function(val){
						setterFunctions['payeeNickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payoffFlag" : {
					get : function(){return privateState.payoffFlag},
					set : function(val){
						setterFunctions['payoffFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payPersonEmail" : {
					get : function(){return privateState.payPersonEmail},
					set : function(val){
						setterFunctions['payPersonEmail'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payPersonName" : {
					get : function(){return privateState.payPersonName},
					set : function(val){
						setterFunctions['payPersonName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payPersonPhone" : {
					get : function(){return privateState.payPersonPhone},
					set : function(val){
						setterFunctions['payPersonPhone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"penaltyFlag" : {
					get : function(){return privateState.penaltyFlag},
					set : function(val){
						setterFunctions['penaltyFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"personId" : {
					get : function(){return privateState.personId},
					set : function(val){
						setterFunctions['personId'].call(this,val,privateState);
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
				"referenceId" : {
					get : function(){return privateState.referenceId},
					set : function(val){
						setterFunctions['referenceId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"scheduledDate" : {
					get : function(){return privateState.scheduledDate},
					set : function(val){
						setterFunctions['scheduledDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchAmount" : {
					get : function(){return privateState.searchAmount},
					set : function(val){
						setterFunctions['searchAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchDateRange" : {
					get : function(){return privateState.searchDateRange},
					set : function(val){
						setterFunctions['searchDateRange'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchDescription" : {
					get : function(){return privateState.searchDescription},
					set : function(val){
						setterFunctions['searchDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchEndDate" : {
					get : function(){return privateState.searchEndDate},
					set : function(val){
						setterFunctions['searchEndDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchMaxAmount" : {
					get : function(){return privateState.searchMaxAmount},
					set : function(val){
						setterFunctions['searchMaxAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchMinAmount" : {
					get : function(){return privateState.searchMinAmount},
					set : function(val){
						setterFunctions['searchMinAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchStartDate" : {
					get : function(){return privateState.searchStartDate},
					set : function(val){
						setterFunctions['searchStartDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchTransactionType" : {
					get : function(){return privateState.searchTransactionType},
					set : function(val){
						setterFunctions['searchTransactionType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchType" : {
					get : function(){return privateState.searchType},
					set : function(val){
						setterFunctions['searchType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryEmail" : {
					get : function(){return privateState.secondaryEmail},
					set : function(val){
						setterFunctions['secondaryEmail'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryEmail2" : {
					get : function(){return privateState.secondaryEmail2},
					set : function(val){
						setterFunctions['secondaryEmail2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryPhoneNumber2" : {
					get : function(){return privateState.secondaryPhoneNumber2},
					set : function(val){
						setterFunctions['secondaryPhoneNumber2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondDeposit" : {
					get : function(){return privateState.secondDeposit},
					set : function(val){
						setterFunctions['secondDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondoryPhoneNumber" : {
					get : function(){return privateState.secondoryPhoneNumber},
					set : function(val){
						setterFunctions['secondoryPhoneNumber'].call(this,val,privateState);
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
				"statusDescription" : {
					get : function(){return privateState.statusDescription},
					set : function(val){
						setterFunctions['statusDescription'].call(this,val,privateState);
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
				"toAccountType" : {
					get : function(){return privateState.toAccountType},
					set : function(val){
						setterFunctions['toAccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"toCheckNumber" : {
					get : function(){return privateState.toCheckNumber},
					set : function(val){
						setterFunctions['toCheckNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalAmount" : {
					get : function(){return privateState.totalAmount},
					set : function(val){
						setterFunctions['totalAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionComments" : {
					get : function(){return privateState.transactionComments},
					set : function(val){
						setterFunctions['transactionComments'].call(this,val,privateState);
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
				"transactionId" : {
					get : function(){return privateState.transactionId},
					set : function(val){
						setterFunctions['transactionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionsNotes" : {
					get : function(){return privateState.transactionsNotes},
					set : function(val){
						setterFunctions['transactionsNotes'].call(this,val,privateState);
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
				"validDate" : {
					get : function(){return privateState.validDate},
					set : function(val){
						setterFunctions['validDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"viewReportLink" : {
					get : function(){return privateState.viewReportLink},
					set : function(val){
						setterFunctions['viewReportLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"overdraft" : {
					get : function(){return privateState.overdraft},
					set : function(val){
						setterFunctions['overdraft'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPaypersonDeleted" : {
					get : function(){return privateState.isPaypersonDeleted},
					set : function(val){
						setterFunctions['isPaypersonDeleted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"fee" : {
					get : function(){return privateState.fee},
					set : function(val){
						setterFunctions['fee'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"frontImage1" : {
					get : function(){return privateState.frontImage1},
					set : function(val){
						setterFunctions['frontImage1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"frontImage2" : {
					get : function(){return privateState.frontImage2},
					set : function(val){
						setterFunctions['frontImage2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"backImage1" : {
					get : function(){return privateState.backImage1},
					set : function(val){
						setterFunctions['backImage1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"backImage2" : {
					get : function(){return privateState.backImage2},
					set : function(val){
						setterFunctions['backImage2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkDesc" : {
					get : function(){return privateState.checkDesc},
					set : function(val){
						setterFunctions['checkDesc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkNumber1" : {
					get : function(){return privateState.checkNumber1},
					set : function(val){
						setterFunctions['checkNumber1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkNumber2" : {
					get : function(){return privateState.checkNumber2},
					set : function(val){
						setterFunctions['checkNumber2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName1" : {
					get : function(){return privateState.bankName1},
					set : function(val){
						setterFunctions['bankName1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName2" : {
					get : function(){return privateState.bankName2},
					set : function(val){
						setterFunctions['bankName2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"withdrawlAmount1" : {
					get : function(){return privateState.withdrawlAmount1},
					set : function(val){
						setterFunctions['withdrawlAmount1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"withdrawlAmount2" : {
					get : function(){return privateState.withdrawlAmount2},
					set : function(val){
						setterFunctions['withdrawlAmount2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalCheckAmount" : {
					get : function(){return privateState.totalCheckAmount},
					set : function(val){
						setterFunctions['totalCheckAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cashAmount" : {
					get : function(){return privateState.cashAmount},
					set : function(val){
						setterFunctions['cashAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeCurrency" : {
					get : function(){return privateState.payeeCurrency},
					set : function(val){
						setterFunctions['payeeCurrency'].call(this,val,privateState);
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
				"wireAccountType" : {
					get : function(){return privateState.wireAccountType},
					set : function(val){
						setterFunctions['wireAccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"country" : {
					get : function(){return privateState.country},
					set : function(val){
						setterFunctions['country'].call(this,val,privateState);
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
				"bankName" : {
					get : function(){return privateState.bankName},
					set : function(val){
						setterFunctions['bankName'].call(this,val,privateState);
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
				"internationalRoutingCode" : {
					get : function(){return privateState.internationalRoutingCode},
					set : function(val){
						setterFunctions['internationalRoutingCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"zipCode" : {
					get : function(){return privateState.zipCode},
					set : function(val){
						setterFunctions['zipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cityName" : {
					get : function(){return privateState.cityName},
					set : function(val){
						setterFunctions['cityName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankAddressLine1" : {
					get : function(){return privateState.bankAddressLine1},
					set : function(val){
						setterFunctions['bankAddressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankAddressLine2" : {
					get : function(){return privateState.bankAddressLine2},
					set : function(val){
						setterFunctions['bankAddressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankCity" : {
					get : function(){return privateState.bankCity},
					set : function(val){
						setterFunctions['bankCity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankState" : {
					get : function(){return privateState.bankState},
					set : function(val){
						setterFunctions['bankState'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankZip" : {
					get : function(){return privateState.bankZip},
					set : function(val){
						setterFunctions['bankZip'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeType" : {
					get : function(){return privateState.payeeType},
					set : function(val){
						setterFunctions['payeeType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"disputeReason" : {
					get : function(){return privateState.disputeReason},
					set : function(val){
						setterFunctions['disputeReason'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"disputeDescription" : {
					get : function(){return privateState.disputeDescription},
					set : function(val){
						setterFunctions['disputeDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkDateOfIssue" : {
					get : function(){return privateState.checkDateOfIssue},
					set : function(val){
						setterFunctions['checkDateOfIssue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkReason" : {
					get : function(){return privateState.checkReason},
					set : function(val){
						setterFunctions['checkReason'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPayeeDeleted" : {
					get : function(){return privateState.isPayeeDeleted},
					set : function(val){
						setterFunctions['isPayeeDeleted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeAddressLine2" : {
					get : function(){return privateState.payeeAddressLine2},
					set : function(val){
						setterFunctions['payeeAddressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"amountRecieved" : {
					get : function(){return privateState.amountRecieved},
					set : function(val){
						setterFunctions['amountRecieved'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"requestValidityInMonths" : {
					get : function(){return privateState.requestValidityInMonths},
					set : function(val){
						setterFunctions['requestValidityInMonths'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"requestValidity" : {
					get : function(){return privateState.requestValidity},
					set : function(val){
						setterFunctions['requestValidity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"requestType" : {
					get : function(){return privateState.requestType},
					set : function(val){
						setterFunctions['requestType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"disputeDate" : {
					get : function(){return privateState.disputeDate},
					set : function(val){
						setterFunctions['disputeDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"disputeStatus" : {
					get : function(){return privateState.disputeStatus},
					set : function(val){
						setterFunctions['disputeStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isDisputed" : {
					get : function(){return privateState.isDisputed},
					set : function(val){
						setterFunctions['isDisputed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardId" : {
					get : function(){return privateState.cardId},
					set : function(val){
						setterFunctions['cardId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isOverdraft" : {
					get : function(){return privateState.isOverdraft},
					set : function(val){
						setterFunctions['isOverdraft'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"title" : {
					get : function(){return privateState.title},
					set : function(val){
						setterFunctions['title'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"generatedBy" : {
					get : function(){return privateState.generatedBy},
					set : function(val){
						setterFunctions['generatedBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"filters" : {
					get : function(){return privateState.filters},
					set : function(val){
						setterFunctions['filters'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"statementReference" : {
					get : function(){return privateState.statementReference},
					set : function(val){
						setterFunctions['statementReference'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transCreditDebitIndicator" : {
					get : function(){return privateState.transCreditDebitIndicator},
					set : function(val){
						setterFunctions['transCreditDebitIndicator'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bookingDateTime" : {
					get : function(){return privateState.bookingDateTime},
					set : function(val){
						setterFunctions['bookingDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"valueDateTime" : {
					get : function(){return privateState.valueDateTime},
					set : function(val){
						setterFunctions['valueDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionInformation" : {
					get : function(){return privateState.transactionInformation},
					set : function(val){
						setterFunctions['transactionInformation'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressLine" : {
					get : function(){return privateState.addressLine},
					set : function(val){
						setterFunctions['addressLine'].call(this,val,privateState);
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
				"transactionCurrency" : {
					get : function(){return privateState.transactionCurrency},
					set : function(val){
						setterFunctions['transactionCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"chargeAmount" : {
					get : function(){return privateState.chargeAmount},
					set : function(val){
						setterFunctions['chargeAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"chargeCurrency" : {
					get : function(){return privateState.chargeCurrency},
					set : function(val){
						setterFunctions['chargeCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sourceCurrency" : {
					get : function(){return privateState.sourceCurrency},
					set : function(val){
						setterFunctions['sourceCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"targetCurrency" : {
					get : function(){return privateState.targetCurrency},
					set : function(val){
						setterFunctions['targetCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unitCurrency" : {
					get : function(){return privateState.unitCurrency},
					set : function(val){
						setterFunctions['unitCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"exchangeRate" : {
					get : function(){return privateState.exchangeRate},
					set : function(val){
						setterFunctions['exchangeRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"contractIdentification" : {
					get : function(){return privateState.contractIdentification},
					set : function(val){
						setterFunctions['contractIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"quotationDate" : {
					get : function(){return privateState.quotationDate},
					set : function(val){
						setterFunctions['quotationDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"instructedAmount" : {
					get : function(){return privateState.instructedAmount},
					set : function(val){
						setterFunctions['instructedAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionCode" : {
					get : function(){return privateState.transactionCode},
					set : function(val){
						setterFunctions['transactionCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionSubCode" : {
					get : function(){return privateState.transactionSubCode},
					set : function(val){
						setterFunctions['transactionSubCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"proprietaryTransactionCode" : {
					get : function(){return privateState.proprietaryTransactionCode},
					set : function(val){
						setterFunctions['proprietaryTransactionCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"proprietaryTransactionIssuer" : {
					get : function(){return privateState.proprietaryTransactionIssuer},
					set : function(val){
						setterFunctions['proprietaryTransactionIssuer'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceCreditDebitIndicator" : {
					get : function(){return privateState.balanceCreditDebitIndicator},
					set : function(val){
						setterFunctions['balanceCreditDebitIndicator'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceType" : {
					get : function(){return privateState.balanceType},
					set : function(val){
						setterFunctions['balanceType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceAmount" : {
					get : function(){return privateState.balanceAmount},
					set : function(val){
						setterFunctions['balanceAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"balanceCurrency" : {
					get : function(){return privateState.balanceCurrency},
					set : function(val){
						setterFunctions['balanceCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"merchantName" : {
					get : function(){return privateState.merchantName},
					set : function(val){
						setterFunctions['merchantName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"merchantCategoryCode" : {
					get : function(){return privateState.merchantCategoryCode},
					set : function(val){
						setterFunctions['merchantCategoryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentSchemeName" : {
					get : function(){return privateState.creditorAgentSchemeName},
					set : function(val){
						setterFunctions['creditorAgentSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentIdentification" : {
					get : function(){return privateState.creditorAgentIdentification},
					set : function(val){
						setterFunctions['creditorAgentIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentName" : {
					get : function(){return privateState.creditorAgentName},
					set : function(val){
						setterFunctions['creditorAgentName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentaddressType" : {
					get : function(){return privateState.creditorAgentaddressType},
					set : function(val){
						setterFunctions['creditorAgentaddressType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentDepartment" : {
					get : function(){return privateState.creditorAgentDepartment},
					set : function(val){
						setterFunctions['creditorAgentDepartment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentSubDepartment" : {
					get : function(){return privateState.creditorAgentSubDepartment},
					set : function(val){
						setterFunctions['creditorAgentSubDepartment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentStreetName" : {
					get : function(){return privateState.creditorAgentStreetName},
					set : function(val){
						setterFunctions['creditorAgentStreetName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentBuildingNumber" : {
					get : function(){return privateState.creditorAgentBuildingNumber},
					set : function(val){
						setterFunctions['creditorAgentBuildingNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentPostCode" : {
					get : function(){return privateState.creditorAgentPostCode},
					set : function(val){
						setterFunctions['creditorAgentPostCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentTownName" : {
					get : function(){return privateState.creditorAgentTownName},
					set : function(val){
						setterFunctions['creditorAgentTownName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentCountrySubDivision" : {
					get : function(){return privateState.creditorAgentCountrySubDivision},
					set : function(val){
						setterFunctions['creditorAgentCountrySubDivision'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentCountry" : {
					get : function(){return privateState.creditorAgentCountry},
					set : function(val){
						setterFunctions['creditorAgentCountry'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAgentAddressLine" : {
					get : function(){return privateState.creditorAgentAddressLine},
					set : function(val){
						setterFunctions['creditorAgentAddressLine'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAccountSchemeName" : {
					get : function(){return privateState.creditorAccountSchemeName},
					set : function(val){
						setterFunctions['creditorAccountSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditorAccountSeconIdentification" : {
					get : function(){return privateState.creditorAccountSeconIdentification},
					set : function(val){
						setterFunctions['creditorAccountSeconIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentSchemeName" : {
					get : function(){return privateState.debtorAgentSchemeName},
					set : function(val){
						setterFunctions['debtorAgentSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentIdentification" : {
					get : function(){return privateState.debtorAgentIdentification},
					set : function(val){
						setterFunctions['debtorAgentIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentName" : {
					get : function(){return privateState.debtorAgentName},
					set : function(val){
						setterFunctions['debtorAgentName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentAddressType" : {
					get : function(){return privateState.debtorAgentAddressType},
					set : function(val){
						setterFunctions['debtorAgentAddressType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentDepartment" : {
					get : function(){return privateState.debtorAgentDepartment},
					set : function(val){
						setterFunctions['debtorAgentDepartment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentSubDepartment" : {
					get : function(){return privateState.debtorAgentSubDepartment},
					set : function(val){
						setterFunctions['debtorAgentSubDepartment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentStreetName" : {
					get : function(){return privateState.debtorAgentStreetName},
					set : function(val){
						setterFunctions['debtorAgentStreetName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentBuildingNumber" : {
					get : function(){return privateState.debtorAgentBuildingNumber},
					set : function(val){
						setterFunctions['debtorAgentBuildingNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dedtorAgentPostCode" : {
					get : function(){return privateState.dedtorAgentPostCode},
					set : function(val){
						setterFunctions['dedtorAgentPostCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentTownName" : {
					get : function(){return privateState.debtorAgentTownName},
					set : function(val){
						setterFunctions['debtorAgentTownName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentCountrySubDivision" : {
					get : function(){return privateState.debtorAgentCountrySubDivision},
					set : function(val){
						setterFunctions['debtorAgentCountrySubDivision'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentCountry" : {
					get : function(){return privateState.debtorAgentCountry},
					set : function(val){
						setterFunctions['debtorAgentCountry'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAgentAddressLine" : {
					get : function(){return privateState.debtorAgentAddressLine},
					set : function(val){
						setterFunctions['debtorAgentAddressLine'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAccountSchemeName" : {
					get : function(){return privateState.debtorAccountSchemeName},
					set : function(val){
						setterFunctions['debtorAccountSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAccountName" : {
					get : function(){return privateState.debtorAccountName},
					set : function(val){
						setterFunctions['debtorAccountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debtorAccountSeconIdentification" : {
					get : function(){return privateState.debtorAccountSeconIdentification},
					set : function(val){
						setterFunctions['debtorAccountSeconIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardInstrumentSchemeName" : {
					get : function(){return privateState.cardInstrumentSchemeName},
					set : function(val){
						setterFunctions['cardInstrumentSchemeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardInstrumentAuthorisationType" : {
					get : function(){return privateState.cardInstrumentAuthorisationType},
					set : function(val){
						setterFunctions['cardInstrumentAuthorisationType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardInstrumentName" : {
					get : function(){return privateState.cardInstrumentName},
					set : function(val){
						setterFunctions['cardInstrumentName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardInstrumentIdentification" : {
					get : function(){return privateState.cardInstrumentIdentification},
					set : function(val){
						setterFunctions['cardInstrumentIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sortCode" : {
					get : function(){return privateState.sortCode},
					set : function(val){
						setterFunctions['sortCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"feeCurrency" : {
					get : function(){return privateState.feeCurrency},
					set : function(val){
						setterFunctions['feeCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"feePaidByReceipent" : {
					get : function(){return privateState.feePaidByReceipent},
					set : function(val){
						setterFunctions['feePaidByReceipent'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"convertedAmount" : {
					get : function(){return privateState.convertedAmount},
					set : function(val){
						setterFunctions['convertedAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"baseCurrency" : {
					get : function(){return privateState.baseCurrency},
					set : function(val){
						setterFunctions['baseCurrency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FirstPaymentDateTime" : {
					get : function(){return privateState.FirstPaymentDateTime},
					set : function(val){
						setterFunctions['FirstPaymentDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NextPaymentDateTime" : {
					get : function(){return privateState.NextPaymentDateTime},
					set : function(val){
						setterFunctions['NextPaymentDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FinalPaymentDateTime" : {
					get : function(){return privateState.FinalPaymentDateTime},
					set : function(val){
						setterFunctions['FinalPaymentDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StandingOrderStatusCode" : {
					get : function(){return privateState.StandingOrderStatusCode},
					set : function(val){
						setterFunctions['StandingOrderStatusCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FP_Amount" : {
					get : function(){return privateState.FP_Amount},
					set : function(val){
						setterFunctions['FP_Amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FP_Currency" : {
					get : function(){return privateState.FP_Currency},
					set : function(val){
						setterFunctions['FP_Currency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NP_Amount" : {
					get : function(){return privateState.NP_Amount},
					set : function(val){
						setterFunctions['NP_Amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NP_Currency" : {
					get : function(){return privateState.NP_Currency},
					set : function(val){
						setterFunctions['NP_Currency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FPA_Amount" : {
					get : function(){return privateState.FPA_Amount},
					set : function(val){
						setterFunctions['FPA_Amount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FPA_Currency" : {
					get : function(){return privateState.FPA_Currency},
					set : function(val){
						setterFunctions['FPA_Currency'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"beneficiaryName" : {
					get : function(){return privateState.beneficiaryName},
					set : function(val){
						setterFunctions['beneficiaryName'].call(this,val,privateState);
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
				"ConsentId" : {
					get : function(){return privateState.ConsentId},
					set : function(val){
						setterFunctions['ConsentId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Initiation_InstructionIdentification" : {
					get : function(){return privateState.Initiation_InstructionIdentification},
					set : function(val){
						setterFunctions['Initiation_InstructionIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RI_Unstructured" : {
					get : function(){return privateState.RI_Unstructured},
					set : function(val){
						setterFunctions['RI_Unstructured'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RI_Reference" : {
					get : function(){return privateState.RI_Reference},
					set : function(val){
						setterFunctions['RI_Reference'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Initiation_EndToEndIdentification" : {
					get : function(){return privateState.Initiation_EndToEndIdentification},
					set : function(val){
						setterFunctions['Initiation_EndToEndIdentification'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RiskPaymentContextCode" : {
					get : function(){return privateState.RiskPaymentContextCode},
					set : function(val){
						setterFunctions['RiskPaymentContextCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"linkSelf" : {
					get : function(){return privateState.linkSelf},
					set : function(val){
						setterFunctions['linkSelf'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StatusUpdateDateTime" : {
					get : function(){return privateState.StatusUpdateDateTime},
					set : function(val){
						setterFunctions['StatusUpdateDateTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdDate" : {
					get : function(){return privateState.createdDate},
					set : function(val){
						setterFunctions['createdDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DomesticPaymentId" : {
					get : function(){return privateState.DomesticPaymentId},
					set : function(val){
						setterFunctions['DomesticPaymentId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dataStatus" : {
					get : function(){return privateState.dataStatus},
					set : function(val){
						setterFunctions['dataStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Auth_Token" : {
					get : function(){return privateState.Auth_Token},
					set : function(val){
						setterFunctions['Auth_Token'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Transactions);
	
	//Create new class level validator object
	BaseModel.Validator.call(Transactions);
	
	var registerValidatorBackup = Transactions.registerValidator;
	
	Transactions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Transactions.isValid(this, propName, val) ){
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
	//For Operation 'getAccountTransactionByType' with service id 'getAccountTransactionsByType8839'
	Transactions.getAccountTransactionByType = function(params, onCompletion){
		return Transactions.customVerb('getAccountTransactionByType', params, onCompletion);
	};
	//For Operation 'getDisputedTransactions' with service id 'getDisputedTransactions6882'
	Transactions.getDisputedTransactions = function(params, onCompletion){
		return Transactions.customVerb('getDisputedTransactions', params, onCompletion);
	};
	//For Operation 'cancelScheduledTransactionOccurrence' with service id 'cancelScheduledTransactionOccurrence4253'
	Transactions.cancelScheduledTransactionOccurrence = function(params, onCompletion){
		return Transactions.customVerb('cancelScheduledTransactionOccurrence', params, onCompletion);
	};
	//For Operation 'getPostedDeposits' with service id 'getPostedDepositTransactions7524'
	Transactions.getPostedDeposits = function(params, onCompletion){
		return Transactions.customVerb('getPostedDeposits', params, onCompletion);
	};
	//For Operation 'getPostedUserTransactions' with service id 'getUserPostedTransaction8739'
	Transactions.getPostedUserTransactions = function(params, onCompletion){
		return Transactions.customVerb('getPostedUserTransactions', params, onCompletion);
	};
	//For Operation 'getUserScheduledTransactions' with service id 'getUserScheduledTransactions7582'
	Transactions.getUserScheduledTransactions = function(params, onCompletion){
		return Transactions.customVerb('getUserScheduledTransactions', params, onCompletion);
	};
	//For Operation 'makeTrialDeposit' with service id 'makeTrialDeposit2251'
	Transactions.makeTrialDeposit = function(params, onCompletion){
		return Transactions.customVerb('makeTrialDeposit', params, onCompletion);
	};
	//For Operation 'getReceivedP2PRequest' with service id 'getReceivedP2PRequest1423'
	Transactions.getReceivedP2PRequest = function(params, onCompletion){
		return Transactions.customVerb('getReceivedP2PRequest', params, onCompletion);
	};
	//For Operation 'getPostedCardlessTransactions' with service id 'getPostedCardlessTransactions5420'
	Transactions.getPostedCardlessTransactions = function(params, onCompletion){
		return Transactions.customVerb('getPostedCardlessTransactions', params, onCompletion);
	};
	//For Operation 'getPayPersonHistory' with service id 'getPayPersonHistory3288'
	Transactions.getPayPersonHistory = function(params, onCompletion){
		return Transactions.customVerb('getPayPersonHistory', params, onCompletion);
	};
	//For Operation 'getPendingCardlessTransactions' with service id 'getPendingCardlessTransactions2681'
	Transactions.getPendingCardlessTransactions = function(params, onCompletion){
		return Transactions.customVerb('getPendingCardlessTransactions', params, onCompletion);
	};
	//For Operation 'getToExternalAccountTransactions' with service id 'getToExternalAccountTransactions3980'
	Transactions.getToExternalAccountTransactions = function(params, onCompletion){
		return Transactions.customVerb('getToExternalAccountTransactions', params, onCompletion);
	};
	//For Operation 'getAllTransactionsForAdmin' with service id 'GetAllTransactionsForAdmin1982'
	Transactions.getAllTransactionsForAdmin = function(params, onCompletion){
		return Transactions.customVerb('getAllTransactionsForAdmin', params, onCompletion);
	};
	//For Operation 'deleteTransaction' with service id 'deleteTransaction3690'
	Transactions.deleteTransaction = function(params, onCompletion){
		return Transactions.customVerb('deleteTransaction', params, onCompletion);
	};
	//For Operation 'getScheduledUserTransactions' with service id 'getUserTransaction8444'
	Transactions.getScheduledUserTransactions = function(params, onCompletion){
		return Transactions.customVerb('getScheduledUserTransactions', params, onCompletion);
	};
	//For Operation 'verifyTrialDeposit' with service id 'verifyTrialDeposit7697'
	Transactions.verifyTrialDeposit = function(params, onCompletion){
		return Transactions.customVerb('verifyTrialDeposit', params, onCompletion);
	};
	//For Operation 'createCardlessTransaction' with service id 'createTransfer4842'
	Transactions.createCardlessTransaction = function(params, onCompletion){
		return Transactions.customVerb('createCardlessTransaction', params, onCompletion);
	};
	//For Operation 'createTransfer' with service id 'createTransfer8825'
	Transactions.createTransfer = function(params, onCompletion){
		return Transactions.customVerb('createTransfer', params, onCompletion);
	};
	//For Operation 'getUserCompletedBillHistory' with service id 'getUserCompletedBillHistory2578'
	Transactions.getUserCompletedBillHistory = function(params, onCompletion){
		return Transactions.customVerb('getUserCompletedBillHistory', params, onCompletion);
	};
	//For Operation 'getStopCheckPaymentRequestTransactions' with service id 'getStopCheckPaymentRequestTransactions9378'
	Transactions.getStopCheckPaymentRequestTransactions = function(params, onCompletion){
		return Transactions.customVerb('getStopCheckPaymentRequestTransactions', params, onCompletion);
	};
	//For Operation 'getScheduledTransferAndP2pTransactions' with service id 'getScheduledTransferAndP2pTransactions1707'
	Transactions.getScheduledTransferAndP2pTransactions = function(params, onCompletion){
		return Transactions.customVerb('getScheduledTransferAndP2pTransactions', params, onCompletion);
	};
	//For Operation 'getPayeeBills' with service id 'getPayeeBills9801'
	Transactions.getPayeeBills = function(params, onCompletion){
		return Transactions.customVerb('getPayeeBills', params, onCompletion);
	};
	//For Operation 'getPendingDeposits' with service id 'getPendingDepositTransactions7900'
	Transactions.getPendingDeposits = function(params, onCompletion){
		return Transactions.customVerb('getPendingDeposits', params, onCompletion);
	};
	//For Operation 'getPostedTransfersAndP2pTransactions' with service id 'getPostedTransferAndP2pTransactions3143'
	Transactions.getPostedTransfersAndP2pTransactions = function(params, onCompletion){
		return Transactions.customVerb('getPostedTransfersAndP2pTransactions', params, onCompletion);
	};
	//For Operation 'getAccountPendingTransactions' with service id 'getAccountPendingTransactions3154'
	Transactions.getAccountPendingTransactions = function(params, onCompletion){
		return Transactions.customVerb('getAccountPendingTransactions', params, onCompletion);
	};
	//For Operation 'getUserWiredTransactions' with service id 'getUserWiredTransactions8719'
	Transactions.getUserWiredTransactions = function(params, onCompletion){
		return Transactions.customVerb('getUserWiredTransactions', params, onCompletion);
	};
	//For Operation 'getScheduledAccountTransactions' with service id 'getUserTransaction9275'
	Transactions.getScheduledAccountTransactions = function(params, onCompletion){
		return Transactions.customVerb('getScheduledAccountTransactions', params, onCompletion);
	};
	//For Operation 'getSentP2PTransactions' with service id 'getSentP2PTransactions2748'
	Transactions.getSentP2PTransactions = function(params, onCompletion){
		return Transactions.customVerb('getSentP2PTransactions', params, onCompletion);
	};
	//For Operation 'createDisputedTransaction' with service id 'updateTransaction5547'
	Transactions.createDisputedTransaction = function(params, onCompletion){
		return Transactions.customVerb('createDisputedTransaction', params, onCompletion);
	};
	//For Operation 'downloadfile' with service id 'GetTransactionsDownloaded9922'
	Transactions.downloadfile = function(params, onCompletion){
		return Transactions.customVerb('downloadfile', params, onCompletion);
	};
	//For Operation 'getUsersScheduledBill' with service id 'getUsersScheduledBills2757'
	Transactions.getUsersScheduledBill = function(params, onCompletion){
		return Transactions.customVerb('getUsersScheduledBill', params, onCompletion);
	};
	//For Operation 'getAccountPostedTransactions' with service id 'GetAccountPostedTransactions6830'
	Transactions.getAccountPostedTransactions = function(params, onCompletion){
		return Transactions.customVerb('getAccountPostedTransactions', params, onCompletion);
	};
	//For Operation 'getExternalAccountTransactions' with service id 'getExternalTransactions6873'
	Transactions.getExternalAccountTransactions = function(params, onCompletion){
		return Transactions.customVerb('getExternalAccountTransactions', params, onCompletion);
	};
	//For Operation 'getRecentAccountTransactions' with service id 'getUserTransaction3576'
	Transactions.getRecentAccountTransactions = function(params, onCompletion){
		return Transactions.customVerb('getRecentAccountTransactions', params, onCompletion);
	};
	//For Operation 'getRecipientWireTransaction' with service id 'getRecipientWireTransaction3006'
	Transactions.getRecipientWireTransaction = function(params, onCompletion){
		return Transactions.customVerb('getRecipientWireTransaction', params, onCompletion);
	};
	//For Operation 'getPendingUserTransactions' with service id 'getUserPendingTransaction1504'
	Transactions.getPendingUserTransactions = function(params, onCompletion){
		return Transactions.customVerb('getPendingUserTransactions', params, onCompletion);
	};
	//For Operation 'downloadTransactions' with service id 'GetTransactionsDownloaded2452'
	Transactions.downloadTransactions = function(params, onCompletion){
		return Transactions.customVerb('downloadTransactions', params, onCompletion);
	};
	//For Operation 'isSecondFactorAuthenticationRequired' with service id 'isSecondFactorAuthenticationRequired2991'
	Transactions.isSecondFactorAuthenticationRequired = function(params, onCompletion){
		return Transactions.customVerb('isSecondFactorAuthenticationRequired', params, onCompletion);
	};
	//For Operation 'createBulkBillPay' with service id 'createBulkBillPay8624'
	Transactions.createBulkBillPay = function(params, onCompletion){
		return Transactions.customVerb('createBulkBillPay', params, onCompletion);
	};
	//For Operation 'getRecentUserTransactions' with service id 'getUserTransaction3446'
	Transactions.getRecentUserTransactions = function(params, onCompletion){
		return Transactions.customVerb('getRecentUserTransactions', params, onCompletion);
	};
	//For Operation 'getReceivedP2PTransactions' with service id 'getReceivedP2PTransactions9298'
	Transactions.getReceivedP2PTransactions = function(params, onCompletion){
		return Transactions.customVerb('getReceivedP2PTransactions', params, onCompletion);
	};
	//For Operation 'getAllP2PRequestMoneyForUser' with service id 'getAllP2PRequestMoneyForUser6564'
	Transactions.getAllP2PRequestMoneyForUser = function(params, onCompletion){
		return Transactions.customVerb('getAllP2PRequestMoneyForUser', params, onCompletion);
	};
	
	var relations = [
	];
	
	Transactions.relations = relations;
	
	Transactions.prototype.isValid = function(){
		return Transactions.isValid(this);
	};
	
	Transactions.prototype.objModelName = "Transactions";
	
	return Transactions;
});