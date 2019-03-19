define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {

    function Transfer_PresentationController() {
        scope_TransfersPresentationController = this;
        scope_TransfersPresentationController.externalAccount = false;
        scope_TransfersPresentationController.nickName = null;
        scope_TransfersPresentationController.entryPoint = "";
        scope_TransfersPresentationController.isNickNameUpdated = "";
        scope_TransfersPresentationController.isRecipientDeleted = "";
        scope_TransfersPresentationController.sameBankBenificiaryAdded = "";
        scope_TransfersPresentationController.otherBankBenificiaryAdded = "";
        scope_TransfersPresentationController.internationalBenificiaryAdded = "";
        scope_TransfersPresentationController.reEnteredAccountNumber = "";
        scope_TransfersPresentationController.swiftCode = "";
        scope_TransfersPresentationController.routingNumber = "";
        scope_TransfersPresentationController.countryName = "";
        scope_TransfersPresentationController.duration="";
        scope_TransfersPresentationController.toBankName="";
      	scope_TransfersPresentationController.transactionMode="";
      /**   numberOfAsyncForInternalBen
          *  1.getFrequentSameBankAccount
          *  2.getSameBankAccount
            */
        scope_TransfersPresentationController.numberOfAsyncForInternalBen=2;
      /**   numberOfAsyncForExternalBen
          *  1.getFrequentOtherBankAccount
          *  2.getOtherBankAccount
            */
      scope_TransfersPresentationController.numberOfAsyncForExternalBen=2;
         /**   numberOfAsyncForInternationaAcc
          *  1.getFrequentInternationalExternalAccounts
          *  2.getAllInternationalExternalAccounts
            */
      scope_TransfersPresentationController.numberOfAsyncForInternationaAcc=2;

        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
    }

    inheritsFrom(Transfer_PresentationController, kony.mvc.Presentation.BasePresenter);

    Transfer_PresentationController.prototype.initializePresentationController = function() {

    };

    
    Transfer_PresentationController.prototype.clearBuilderNonGeneratedAttributes = function() {
        scope_TransfersPresentationController.toBankName="";
        scope_TransfersPresentationController.reEnteredAccountNumber = "";
        scope_TransfersPresentationController.swiftCode = "";
        scope_TransfersPresentationController.routingNumber = "";
        scope_TransfersPresentationController.countryName = "";
        scope_TransfersPresentationController.duration="";

    };
   Transfer_PresentationController.prototype.setToBankName=function(toBankName)
    {
      scope_TransfersPresentationController.toBankName=toBankName;
    };
     Transfer_PresentationController.prototype.getToBankName=function()
    {
       return scope_TransfersPresentationController.toBankName;
    };
   Transfer_PresentationController.prototype.setDuration=function(duration)
    {
      scope_TransfersPresentationController.duration=duration;
    };
     Transfer_PresentationController.prototype.getDuration=function()
    {
       return scope_TransfersPresentationController.duration;
    };
   Transfer_PresentationController.prototype.getReEnteredAccountNumber = function() {
        return scope_TransfersPresentationController.reEnteredAccountNumber;
    };
  

    Transfer_PresentationController.prototype.getSwiftCode = function() {
        return scope_TransfersPresentationController.swiftCode;
    };
  
    Transfer_PresentationController.prototype.getRoutingNumber = function() {
        return scope_TransfersPresentationController.routingNumber;
    };
  
    Transfer_PresentationController.prototype.getCountryName = function() {

        return scope_TransfersPresentationController.countryName;
    };
  
    Transfer_PresentationController.prototype.setSwiftCode = function(swiftCode) {
        scope_TransfersPresentationController.swiftCode=swiftCode;
    };

    Transfer_PresentationController.prototype.setRoutingNumber = function(routingNumber) {
        scope_TransfersPresentationController.routingNumber=routingNumber;
    };
  
    Transfer_PresentationController.prototype.setCountryName = function(countryName) {
        scope_TransfersPresentationController.countryName=countryName;
    };
  
    Transfer_PresentationController.prototype.setReEnteredAccountNumber = function(accNum) {
        scope_TransfersPresentationController.reEnteredAccountNumber = accNum;
    };

    Transfer_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };

    Transfer_PresentationController.prototype.fetchSameBankRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchAllInternalBenificiaries(scope_TransfersPresentationController.fetchSameBankRecipientsPresentationSuccess, scope_TransfersPresentationController.fetchSameBankRecipientsPresentationError);
    };

    Transfer_PresentationController.prototype.fetchSameBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };

    Transfer_PresentationController.prototype.fetchSameBankRecipientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.getBenificiaryScheduledAndPostedTransactions = function(selectedAccountDetails) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(selectedAccountDetails);
        var benificiaryDetails = recipientsManager.getBenificiaryData();
        var transactionObj = applicationManager.getTransactionManager();
        var criteria1 = {
            "accountNumber": benificiaryDetails.accountNumber,
            "firstRecordNumber": "0",
            "lastRecordNumber": "1000"
        };
        transactionObj.fetchToExternalAccountTransactions(criteria1, scope_TransfersPresentationController.fetchBenificiaryPenTranPresSucCallback, scope_TransfersPresentationController.fetchBenificiaryPenTranPreErrCallback);
    };

    Transfer_PresentationController.prototype.fetchBenificiaryPenTranPresSucCallback = function(resTransPend) {

        var formatUtil = applicationManager.getFormatUtilManager();
        var navMan = applicationManager.getNavigationManager();
        var selectedAccount = {};
        selectedAccount.Transactions = resTransPend;
        for (var i = 0; i < selectedAccount.Transactions.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.Transactions[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.Transactions[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat());
            selectedAccount.Transactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.Transactions[i]["amount"],selectedAccount.Transactions[i]["transactionCurrency"]);
        }
        navMan.setCustomInfo("frmManageTransferRecipient", selectedAccount);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipient");
    };

    Transfer_PresentationController.prototype.fetchBenificiaryPenTranPreErrCallback = function(resTransPendErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resTransPendErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resTransPendErr.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.fetchBenificiaryPosTranPresSucCallback = function(resTransPost) {

        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, resTransPost);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(2)) {
            scope_TransfersPresentationController.navigateToBenificiaryTransactionDetails();
        }

    };

    Transfer_PresentationController.prototype.fetchBenificiaryPosTranErrCallback = function(resTransPostErr) {

        scope_TransfersPresentationController.asyncManager.setErrorStatus(1, resTransPostErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resTransPostErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resTransPostErr.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.navigateToBenificiaryTransactionDetails = function(res) {

        var formatUtil = applicationManager.getFormatUtilManager();
        var navMan = applicationManager.getNavigationManager();
        var selectedAccount = {};
        selectedAccount.pendingTransactions = scope_TransfersPresentationController.asyncManager.getData(0);
        selectedAccount.postedTransaction = scope_TransfersPresentationController.asyncManager.getData(1);
        for (var i = 0; i < selectedAccount.pendingTransactions.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.pendingTransactions[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.pendingTransactions[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat());
            selectedAccount.pendingTransactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.pendingTransactions[i]["amount"],selectedAccount.pendingTransactions[i]["transactionCurrency"]);
        }
        for (var i = 0; i < selectedAccount.postedTransaction.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.postedTransaction[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.postedTransaction[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            selectedAccount.postedTransaction[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.postedTransaction[i]["amount"],selectedAccount.postedTransaction[i]["transactionCurrency"]);
        }
        navMan.setCustomInfo("frmManageTransferRecipient", selectedAccount);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipient");
    };


    Transfer_PresentationController.prototype.updateBenificiaryNickName = function(nickName) {
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var editDetails = {
            "accountNumber": benificiaryDetails.accountNumber,
            "accountType": benificiaryDetails.accountType,
            "nickName": nickName,
            "isVerified": true
        };
        var recipientsManager = applicationManager.getRecipientsManager();
        if (transferModPresentationController.getFlowType() === "InternationalRecipients") {
            editDetails.isInternationalAccount = "true";
            recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateBankRecipientsPresentationSuccess, scope_TransfersPresentationController.updateBankRecipientsPresentationError);
        } else {
            recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateBankRecipientsPresentationSuccess, scope_TransfersPresentationController.updateBankRecipientsPresentationError);
        }

    };

    Transfer_PresentationController.prototype.updateBankRecipientsPresentationSuccess = function(successResponse) {

        scope_TransfersPresentationController.isNickNameUpdated = true;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModulePresentationController.getFlowType() === "SameBankRecipients") {
            scope_TransfersPresentationController.fetchSameBankRecepients();
        } else if (transferModulePresentationController.getFlowType() === "InternationalRecipients") {
            scope_TransfersPresentationController.fetchInternationalRecepients();
        } else {
            scope_TransfersPresentationController.fetchOtherBankRecepients();
        }
    };

    Transfer_PresentationController.prototype.updateBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        }
    };

    Transfer_PresentationController.prototype.deleteSameBankBenificiary = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        if (transferModPresentationController.getFlowType() === "SameBankRecipients") {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteSameBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteSameBankRecipientsPresentationError);
        } else if (transferModPresentationController.getFlowType() === "InternationalRecipients") {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteInternationalBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteInternationalBankRecipientsPresentationError);
        } else {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationError);
        }
    };


    Transfer_PresentationController.prototype.deleteInternationalBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchInternationalRecepients();
    };

    Transfer_PresentationController.prototype.deleteInternationalBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        }
    };

    Transfer_PresentationController.prototype.deleteSameBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchSameBankRecepients();
    };

    Transfer_PresentationController.prototype.deleteSameBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        }
    };

    Transfer_PresentationController.prototype.deleteOtherBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchOtherBankRecepients();

    };

    Transfer_PresentationController.prototype.deleteOtherBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.fetchOtherBankRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchAllExternalBenificiaries(scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationSuccess, scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationError);
    };
   Transfer_PresentationController.prototype.getSelectedFrequencyIndex = function() {
        var transactionObj = applicationManager.getTransactionManager();
        var frequency = transactionObj.getTransactionObject().frequencyType;
        switch (frequency) {
            case "Once":
                if (transactionObj.getTransactionObject().isScheduled == "0")
                    return 0;
                else
                    return 1;
                break;
            case "Daily":
                return 2;
            case "Weekly":
                return 3;
            case "BiWeekly":
                return 4;
            case "Every Two Weeks":
                return 5;
            case "Monthly":
                return 6;
            case "Quarterly":
                return 7;
            case "Half Yearly":
                return 8;
            case "Yearly":
                return 9;
            default:
                return "";

        }

    };

     Transfer_PresentationController.prototype.evaluateAmount = function(amount, fromAvlBal) {
        var forUtility = applicationManager.getFormatUtilManager();
        //fromAvlBal = forUtility.deFormatAmount(fromAvlBal);
        if (Number(amount) > Number(fromAvlBal)) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.amountGreaterThanAvailBal"));
        } else if (Number(amount) === 0) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validAmount"));
        } else {
            var transactionManager = applicationManager.getTransactionManager();
            transactionManager.setTransactionAttribute("amount",amount);
            var navManager = applicationManager.getNavigationManager();
            //       var index = scope_TransfersPresentationController.getSelectedFrequencyIndex();
            //       navManager.setCustomInfo("frmTransferFrequency",{"index":index});
            navManager.navigateTo("frmTransferFrequency");
        }
    };


    Transfer_PresentationController.prototype.fetchOtherBankRecepientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };

    Transfer_PresentationController.prototype.fetchOtherBankRecepientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Transfer_PresentationController.prototype.processAccountsData = function(data) {
        var accProcessedData = [];
        for (var i = 0; i < data.length; i++) {
            accProcessedData[i] = {};
            accProcessedData[i].accountName = data[i].nickName;
            accProcessedData[i].availableBalance = this.getAvailableBalanceCurrencyString(data[i]);
            accProcessedData[i].accountID = data[i].accountID;
            accProcessedData[i].bankName = data[i].bankName;
            accProcessedData[i].accountBalanceType = this.getAvailableBalanceType(data[i]);
            accProcessedData[i].accountType = data[i].accountType;
          	accProcessedData[i].fromAccountCurrency = data[i].currencyCode;
          	accProcessedData[i].fromAccountBalance = data[i].availableBalance;
        }
        return accProcessedData;
    };
    Transfer_PresentationController.prototype.getAvailableBalanceCurrencyString = function(data) {

        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var currencyCode = data["currencyCode"];
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
            case configManager.constants.CHECKING:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
            case configManager.constants.CREDITCARD:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
            case configManager.constants.DEPOSIT:
                return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"],currencyCode);
            case configManager.constants.MORTGAGE:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
            case configManager.constants.LOAN:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
            default:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
        }
    };
    Transfer_PresentationController.prototype.getAvailableBalanceType = function(data) {
        var configManager = applicationManager.getConfigurationManager();
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CHECKING:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CREDITCARD:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.DEPOSIT:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
            case configManager.constants.MORTGAGE:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.LOAN:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            default:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
        }
    };
     Transfer_PresentationController.prototype.showAccounts = function(type) {
       
        var navMan = applicationManager.getNavigationManager();
        var trasMan = applicationManager.getTransactionManager();
        //navMan.setCustomInfo("frmTransfersToAccount",{});
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        if (accountList && accountList !== null) {
            accountList.type = type;
        } else {
            accountList = {
                "type": type
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", accountList);
      if (type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
        scope_TransfersPresentationController.setFlowType("MyKonyAccounts");
        trasMan.setTransactionAttribute("transactionType","InternalTransfer");
        scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.showInternalAccountsPresentationSuccessCallBack);

      } else if (type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")) {
            
            scope_TransfersPresentationController.setFlowType("OtherKonyBankMembersCreateTransfer");
            trasMan.setTransactionAttribute("transactionType","ExternalTransfer");
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsyncForInternalBen);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentInternalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchAllInternalBenificiaries(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
        } else if (type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts")) {

            scope_TransfersPresentationController.setFlowType("OtherBankAccountsCreateTransfer");
            trasMan.setTransactionAttribute("transactionType","ExternalTransfer");
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsyncForExternalBen);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentExternalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchAllExternalBenificiaries(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
         } else if (type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer")) {
            scope_TransfersPresentationController.setFlowType("InternationalTransferCreateTransfer");
            trasMan.setTransactionAttribute("transactionType","ExternalTransfer");
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsyncForExternalBen);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentInternationalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchInternationalRecepients(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
        }
    };



    Transfer_PresentationController.prototype.showInternalAccountsPresentationSuccessCallBack = function(res) {
        var navMan = applicationManager.getNavigationManager();
        var accNav = applicationManager.getAccountManager();
        var toacc = accNav.getToTransferSupportedAccounts();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        accountList.internalAccounts = toacc;
        navMan.setCustomInfo("frmTransfersToAccount", accountList);
        navMan.navigateTo("frmTransfersToAccount");
    };

    Transfer_PresentationController.prototype.showFreqExternalAccountsPresentationSuccessCallBack = function(resFSBA) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(0, resFSBA);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(scope_TransfersPresentationController.numberOfAsyncForInternalBen)) {

            scope_TransfersPresentationController.navigateToShowSBAAccountDetails();
        }
    };
    Transfer_PresentationController.prototype.showFreqExternalAccountsPresentationErrorCallBack = function(resFSBAErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resFSBAErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resFSBAErr);
        else
            scope_TransfersPresentationController.asyncManager.setErrorStatus(0, resFSBAErr);
    };
    Transfer_PresentationController.prototype.showAllExternalAccountsPresentationSuccessCallBack = function(resFBA) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, resFBA);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(scope_TransfersPresentationController.numberOfAsyncForInternalBen)) {

            scope_TransfersPresentationController.navigateToShowSBAAccountDetails();
        }
    };
    Transfer_PresentationController.prototype.showAllExternalAccountsPresentationErrorCallBack = function(resSBAErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resSBAErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resSBAErr);
        else
            scope_TransfersPresentationController.asyncManager.setErrorStatus(0, resSBAErr);
    };
    Transfer_PresentationController.prototype.navigateToShowSBAAccountDetails = function() {
        var navMan = applicationManager.getNavigationManager();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");

        accountList.addedFlag = scope_TransfersPresentationController.externalAccount;

        accountList.frequentExternalAccounts = scope_TransfersPresentationController.asyncManager.getData(0);
        accountList.allExternalAccounts = scope_TransfersPresentationController.asyncManager.getData(1);

        navMan.setCustomInfo("frmTransfersToAccount", accountList);
        navMan.navigateTo("frmTransfersToAccount");
        scope_TransfersPresentationController.externalAccount = false;
    };
    Transfer_PresentationController.prototype.showFromAccounts = function(successCB) {
        var accMan = applicationManager.getAccountManager();
        accMan.fetchInternalAccounts(successCB, scope_TransfersPresentationController.showFromAccountsPresentationErrorCallBack);
    };
    Transfer_PresentationController.prototype.fromAccountsPresentationSuccessCallBack = function(res) {
        var accNav = applicationManager.getAccountManager();
        var frmacc = accNav.getFromTransferSupportedAccounts();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersFromAccount", {
            "fromaccounts": frmacc
        });
        navMan.navigateTo("frmTransfersFromAccount");

    };
    Transfer_PresentationController.prototype.fromAccountOnContinuePresentationSuccessCallBack = function(res) {
        var accNav = applicationManager.getAccountManager();
        var frmacc = accNav.getFromTransferSupportedAccounts();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersFromAccount", {
            "fromaccounts": frmacc
        });
        navMan.navigateTo("frmTransferAmount");
    };
    Transfer_PresentationController.prototype.showFromAccountsPresentationErrorCallBack = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        else
            kony.print("error in showFromAccountsPresentationErrorCallBack");
    };
  /*additional date field to use in  the calendar page in the back flow*/
  	Transfer_PresentationController.prototype.convertCalendarDateToLocaleDate = function(formatedDate){
      var forUtility=applicationManager.getFormatUtilManager();
      var configManager = applicationManager.getConfigurationManager()
      var convertedDate = forUtility.getFormatedDateString(forUtility.getDateObjectFromCalendarString(formatedDate,"MM/DD/YYYY"),configManager.frontendDateFormat[configManager.getLocale()]);
      return convertedDate;
    };
    Transfer_PresentationController.prototype.transferScheduledDate = function(strtDate) {
      var formatedDate = strtDate;
      var transactionManager = applicationManager.getTransactionManager();
      transactionManager.setTransactionAttribute("scheduledDate",formatedDate);
      transactionManager.setTransactionAttribute("scheduledCalendarDate",scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
      var navMan = applicationManager.getNavigationManager();
      navMan.navigateTo("frmTransferConfirmation");
    };
    Transfer_PresentationController.prototype.transferScheduledStrtDate = function(strtDate) {
        var formatedDate = strtDate;
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("frequencyStartDate",formatedDate);
        transactionManager.setTransactionAttribute("scheduledDate",formatedDate);
      	transactionManager.setTransactionAttribute("scheduledCalendarDate",scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmTransfersEndDate");
    };
    Transfer_PresentationController.prototype.transferScheduledEndDate = function(endDate) {
        var formatedDate = endDate;
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("frequencyEndDate",formatedDate);
      	transactionManager.setTransactionAttribute("endCalendarDate",scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmTransferConfirmation");
    };
    Transfer_PresentationController.prototype.transferSetRecurrence = function(reccurrence) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("numberOfRecurrences",reccurrence);
        var navMan = applicationManager.getNavigationManager();
        // navMan.setCustomInfo("frmTransfersStartDate","NofRR");
        navMan.navigateTo("frmTransfersStartDate");

    };
    Transfer_PresentationController.prototype.getTransObject = function() {
        var transMan = applicationManager.getTransactionManager();
        var obj = transMan.getTransactionObject();
        return obj;
    };
  Transfer_PresentationController.prototype.switchDurationType = function(index) {

        var transactionObj = applicationManager.getTransactionManager();
        var frequencyTypes = transactionObj.getAvailableFrequencyType();
        var navMan = applicationManager.getNavigationManager();

        switch (index) {

            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"):
                transactionObj.setTransactionAttribute("numberOfRecurrences","");
                // transactionObj.setScheduledDate("");
                scope_TransfersPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"));
                var startDate = transactionObj.getTransactionObject().scheduledDate;
                var data = {
                    "freq": "ReccDate"
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.navigateTo("frmTransfersStartDate");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"):
                transactionObj.setTransactionAttribute("frequencyStartDate","");
                transactionObj.setTransactionAttribute("frequencyEndDate","");
                var startDate =transactionObj.getTransactionObject().scheduledDate;
                var data = {
                    "freq": "NofRR"
                };
                var noOfRecur = {
                    "noofrecur": transactionObj.getTransactionObject().numberOfRecurrences
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.setCustomInfo("frmTransfersRecurrence", noOfRecur);
                scope_TransfersPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"));
                navMan.navigateTo("frmTransfersRecurrence");
                break;
        }
    };
    Transfer_PresentationController.prototype.switchFrequencyType = function(Index) {
        var transactionObj = applicationManager.getTransactionManager();
        var frequencyTypes = transactionObj.getAvailableFrequencyType();
        var navMan = applicationManager.getNavigationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        switch (Index) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.ONCE);
                transactionObj.setTransactionAttribute("isScheduled","0");
                transactionObj.setTransactionAttribute("numberOfRecurrences","");
                var dateobj = new Date();
                //var formatedDate = forUtility.getFormatedDateString(dateobj, forUtility.getApplicationDateFormat());
            	var formatedDate = (dateobj.getMonth() + 1) + "/" + dateobj.getDate() + "/" + dateobj.getFullYear()
                transactionObj.setTransactionAttribute("scheduledDate",formatedDate);
                transactionObj.setTransactionAttribute("frequencyStartDate","");
                transactionObj.setTransactionAttribute("frequencyEndDate","");
                // var data=transactionObj.getP2PObject(); 
                //navMan.setCustomInfo("frmTransferConfirmation",data);
                navMan.navigateTo("frmTransferConfirmation");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.ONCE);
                transactionObj.setTransactionAttribute("isScheduled","1");
                var startDate = transactionObj.getTransactionObject().scheduledDate;
                var data = {

                    "freq": "Once"
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.navigateTo("frmTransfersStartDate");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Daily"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.DAILY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Weekly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.WEEKLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.EveryTwoWeeks"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.EVERYTWOWEEKS);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Monthly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.MONTHLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Quaterly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.QUARTERLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.HalfYearly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.HALFYEARLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Yearly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.YEARLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.BiWeekly"):
                transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.BIWEEKLY);
                transactionObj.setTransactionAttribute("isScheduled","1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            default:
                break;
        }
    };
    Transfer_PresentationController.prototype.getIndexForDuration = function() {
        var index;
        var transactionManager = applicationManager.getTransactionManager();
        //var  transactionObj=transactionManager.getP2PObject();
        if (transactionManager.getTransactionObject().frequencyEndDate)
            index = 0;
        else if (transactionManager.getTransactionObject().scheduledDate)
            index = 1;
        return index;
    };
   Transfer_PresentationController.prototype.navAfterToAcc = function() {
        //  var accdata=[];
        var accMan = applicationManager.getAccountManager();
        var transactionManager = applicationManager.getTransactionManager();
        var navMan = applicationManager.getNavigationManager();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        var preAccData = accMan.getTransfersPreferredAccount();
        // var frmDetails=navMan.getCustomInfo("frmTransfersFromAccount");
        //  navMan.setCustomInfo("frmTransfersFromAccount",{});
        var selectedAccountData = accountList.selectedAccountData;
        if (accountList.type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transactionManager.setTransactionAttribute("toAccountNumber",selectedAccountData["accountID"]);
            transactionManager.setTransactionAttribute("toAccountType",selectedAccountData["accountType"]);
            transactionManager.setTransactionAttribute("toAccountName",selectedAccountData["accountName"]);
           // transactionManager.setTransactionAttribute("toBankName",selectedAccountData["bankName"]);
            scope_TransfersPresentationController.setToBankName(selectedAccountData["bankName"]);
        } else {
            transactionManager.setTransactionAttribute("toAccountNumber",selectedAccountData["accountNumber"]);
            scope_TransfersPresentationController.setToBankName(selectedAccountData["bankName"]);
            transactionManager.setTransactionAttribute("toAccountName",selectedAccountData["nickName"]);
            transactionManager.setTransactionAttribute("toAccountType",selectedAccountData["accountType"]);
        }

        if ((preAccData === "") || (preAccData === undefined) || (preAccData === null) || ((accountList.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) && (accountList.selectedAccountData["accountID"] === preAccData["accountID"]))) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountsPresentationSuccessCallBack);
        } else {
            scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
            scope_TransfersPresentationController.showPreferredAccount();
        }



    };
    Transfer_PresentationController.prototype.getTransferObjectById = function() {
        var accdata = [],
            processAccountsData = null;
        var trasMan = applicationManager.getTransactionManager();
        var accMan = applicationManager.getAccountManager();
        if (trasMan.getTransactionObject().fromAccountNumber) {
            var accData = accMan.getInternalAccountByID(trasMan.getTransactionObject().fromAccountNumber);
            accdata.push(accData);
            processAccountsData = scope_TransfersPresentationController.processAccountsData(accdata);
        }
        return processAccountsData;
    };
    Transfer_PresentationController.prototype.getAmount = function() {
        var amount = null;
        var transactionmanager = applicationManager.getTransactionManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        if (transactionmanager.getTransactionObject().amount !== undefined && transactionmanager.getTransactionObject().amount !== null && transactionmanager.getTransactionObject().amount !== "") {
            amount = formatUtil.deFormatAmount(transactionmanager.getTransactionObject().amount);
        }
        return amount;
    };
    Transfer_PresentationController.prototype.showPreferredAccount = function() {
        scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountOnContinuePresentationSuccessCallBack)
    };
    Transfer_PresentationController.prototype.navigateToReEnterAccountNumber = function(accountNumber) {
        var recipientsManager = applicationManager.getRecipientsManager();

        var benificiaryData={};
        benificiaryData.accountNumber=accountNumber;
        recipientsManager.initializeBeneficiaryDataWithAccountNum(benificiaryData);
        if (scope_TransfersPresentationController.getFlowType() === "InternationalRecipients" || scope_TransfersPresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            var recipientsManager = applicationManager.getRecipientsManager();
            recipientsManager.setBeneficiaryAttribute("countryName",scope_TransfersPresentationController.countryName);
            recipientsManager.setBeneficiaryAttribute("swiftCode",scope_TransfersPresentationController.swiftCode);
        }
        if (scope_TransfersPresentationController.getFlowType() === "OtherBankRecipients" || scope_TransfersPresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
            var recipientsManager = applicationManager.getRecipientsManager();
            recipientsManager.setBeneficiaryAttribute("routingNumber",scope_TransfersPresentationController.routingNumber);

        }
        scope_TransfersPresentationController.commonFunctionForNavigation("frmReEnterBenAccNo");

    };
    Transfer_PresentationController.prototype.navigateToAccountType = function(accountNumber) {

        scope_TransfersPresentationController.setReEnteredAccountNumber(accountNumber);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenAccountType");

    };
    Transfer_PresentationController.prototype.navigateToBenificiaryName = function(accountType) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("accountType",accountType);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenName");
    };
    Transfer_PresentationController.prototype.navigateToBenificiaryVerifyDetails = function(recipientName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("beneficiaryName",recipientName);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenVerifyDetails");
    };
    Transfer_PresentationController.prototype.navigateToEnterBenificiaryAccountNumber = function(routingNumber) {
        var recipientsManager = applicationManager.getRecipientsManager();

        scope_TransfersPresentationController.setRoutingNumber(routingNumber);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmEnterBenAccNo");
    };
  
   Transfer_PresentationController.prototype.setNickName=function(nickName){

        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("nickName",nickName);
    };
      Transfer_PresentationController.prototype.setIsVerified=function(value){
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isVerified",value);
    };
      Transfer_PresentationController.prototype.setIsSameBankAccount=function(value){
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isSameBankAccount",value);
    };
      Transfer_PresentationController.prototype.setIsInternationalAccount=function(value){
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isInternationalAccount",value);
    };
        Transfer_PresentationController.prototype.setBankName=function(bankName){
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("bankName",bankName);
    };
    

    Transfer_PresentationController.prototype.navigateToEnterBenificiaryRoutingNumber = function(bankDetails) {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAddBenRoutNo", {
            "bankDetails": bankDetails
        });
        navMan.navigateTo("frmAddBenRoutNo");
    };
    Transfer_PresentationController.prototype.createInternalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var toDetails = navMan.getCustomInfo("frmTransfersToAccount");
        if (toDetails && toDetails !== null) {
            toDetails.accountDetailsType = "Other Kony Bank Members";
        } else {
            toDetails = {
                "accountDetailsType": "Other Kony Bank Members"
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", toDetails);
        var benificiaryData=scope_TransfersPresentationController.getBenificiaryData();
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createSameBankBenificiaryPresentationSuccess, scope_TransfersPresentationController.createSameBankBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createSameBankBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.sameBankBenificiaryAdded = true;
        var navMan = applicationManager.getNavigationManager();
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        if (scope_TransfersPresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
          navMan.setCustomInfo("frmTransfersToAccount",succResponse);
          scope_TransfersPresentationController.navAfterToAcc()
            
        }

        if (scope_TransfersPresentationController.getFlowType() === "SameBankRecipients") {
            scope_TransfersPresentationController.fetchSameBankRecepients();
        }

    };
    Transfer_PresentationController.prototype.createSameBankBenificiaryPresentationError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            controller.bindGenericError(err.errorMessage);
        }
    };
    Transfer_PresentationController.prototype.createExternalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var toDetails = navMan.getCustomInfo("frmTransfersToAccount");
        if (toDetails && toDetails !== null) {
            toDetails.accountDetailsType = "Other Bank Accounts";
        } else {
            toDetails = {
                "accountDetailsType": "Other Bank Accounts"
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", toDetails);
        var recipientsManager = applicationManager.getRecipientsManager();

        var benificiaryData=scope_TransfersPresentationController.getBenificiaryData();
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createOtherBankBenificiaryPresentationSuccess, scope_TransfersPresentationController.createOtherBankBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createOtherBankBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.otherBankBenificiaryAdded = true;
        var navMan = applicationManager.getNavigationManager();
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        if (scope_TransfersPresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
          navMan.setCustomInfo("frmTransfersToAccount",succResponse);
          scope_TransfersPresentationController.navAfterToAcc()
        }
        if (scope_TransfersPresentationController.getFlowType() === "OtherBankRecipients") {
            scope_TransfersPresentationController.fetchOtherBankRecepients();
        }

    };
    Transfer_PresentationController.prototype.createOtherBankBenificiaryPresentationError = function(errResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errResponse["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errResponse);
        else {
            kony.print("Error in create same bank recipients");
            var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            controller.bindGenericError(errResponse.errorMessage);
        }
    };
   
    Transfer_PresentationController.prototype.cancelCommon = function() {
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("makeatransfer");
        if (navigateToForm == "frmDashBoard") {
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.showDashboard();
        } else
            navManager.navigateTo(navigateToForm);
        //var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        //transModPresentationController.getTransactions();

    };

Transfer_PresentationController.prototype.makeATransfer = function(description) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionsNotes",description);
        if (transactionManager.getTransactionObject().transactionId != "" && transactionManager.getTransactionObject().transactionId != null && transactionManager.getTransactionObject().transactionId != null) {
            //  alert(transactionManager.getP2PObject());
            var transactionManager = applicationManager.getTransactionManager();
            transactionManager.updateTransaction(transactionManager.getTransactionObject(), this.presentationMakeATransferSuccess, this.presentationMakeATransferError);
        } else {
            var transactionManager = applicationManager.getTransactionManager();
            transactionManager.createTransaction(transactionManager.getTransactionObject(), this.presentationMakeATransferSuccess, this.presentationMakeATransferError);
        }

    };

    Transfer_PresentationController.prototype.presentationMakeATransferSuccess = function(resp) {
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("makeatransfer");
        var transactionManager = applicationManager.getTransactionManager();

         var toAccountID = transactionManager.getTransactionObject().toAccountNumber;
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        transactionManager.clearTransferObject();
        if (navigateToForm !== "frmAccountDetails") {

            var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
            transModPresentationController.getTransactions();
            var navMan = applicationManager.getNavigationManager();
            var data = {};
            data.type = "success";
            data.typeOfTransaction = "create";
            data.res = resp;
            navMan.setCustomInfo("frmTransfers", data);
        } else {
            var navMan = applicationManager.getNavigationManager();
            var data = {};
            data.type = "success";
            data.typeOfTransaction = "create";
            data.res = resp;
            navMan.setCustomInfo("frmAccountDetails", data);
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.fetchAccountTransactions(toAccountID);

        }

    };
    Transfer_PresentationController.prototype.presentationMakeATransferError = function(err) {

        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var navMan = applicationManager.getNavigationManager();
            var navigateToForm = navMan.getEntryPoint("makeatransfer");
            var transactionManager = applicationManager.getTransactionManager();
             var toAccountID = transactionManager.getTransactionObject().toAccountNumber;
            scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
            transactionManager.clearTransferObject();
            if (navigateToForm !== "frmAccountDetails") {

                var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
                transModPresentationController.getTransactions();
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "error";
                data.typeOfTransaction = "create";
                data.res = err["errorMessage"];
                navMan.setCustomInfo("frmTransfers", data);
            } else {
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "error";
                data.typeOfTransaction = "create";
                data.res = err["errorMessage"];
                navMan.setCustomInfo("frmAccountDetails", data);
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountMod.presentationController.fetchAccountTransactions(toAccountID);
            }
        }
    };
     Transfer_PresentationController.prototype.setFromAccountsForTransactions = function(selectedfromacc) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var trasMan = applicationManager.getTransactionManager();
        trasMan.setTransactionAttribute("fromAccountNumber",selectedfromacc.accountID);
        trasMan.setTransactionAttribute("fromAccountName",selectedfromacc.accountName);
        trasMan.setTransactionAttribute("fromAccountType",selectedfromacc.accountType);
        trasMan.setTransactionAttribute("fromBankName",selectedfromacc.bankName);
    };
    Transfer_PresentationController.prototype.setTransactionObject = function(transactionData) {
        var formatUtil = applicationManager.getFormatUtilManager();
       
        var transactionObj = applicationManager.getTransactionManager();
         if (transactionData.transactionId !== undefined && transactionData.transactionId !== null) {
                    transactionObj.setTransactionprimaryAttribute({"transactionId":transactionData.transactionId});
                }
        if (transactionData.amount !== undefined && transactionData.amount !== null) {
            var amount = formatUtil.deFormatAmount(transactionData.amount);
            transactionObj.setTransactionAttribute("amount",amount);
        }
        if (transactionData.frequencyType !== undefined && transactionData.frequencyType !== null) {
            transactionObj.setTransactionAttribute("frequencyType",transactionData.frequencyType);
        }
        if (transactionData.isScheduled !== undefined && transactionData.isScheduled !== null) {
            if (transactionData.isScheduled === "true")
                transactionObj.setTransactionAttribute("isScheduled","1");
            else
                transactionObj.setTransactionAttribute("isScheduled","0");
        }
        if (transactionData.fromAccountNumber !== undefined && transactionData.fromAccountNumber !== null) {
            transactionObj.setTransactionAttribute("fromAccountNumber",transactionData.fromAccountNumber);
        }
        //   if(transactionData.toAccountNumber!==undefined && transactionData.toAccountNumber!==null)
        if (transactionData.ExternalAccountNumber !== undefined && transactionData.ExternalAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber",transactionData.ExternalAccountNumber);
        }
        if (transactionData.toAccountNumber !== undefined && transactionData.toAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber",transactionData.toAccountNumber);
        }
        if (transactionData.toAccountName !== undefined && transactionData.toAccountName !== null) {
            transactionObj.setTransactionAttribute("toAccountName",transactionData.toAccountName);
        }
        if (transactionData.frequencyStartDate !== undefined && transactionData.frequencyStartDate !== null) {
            //var startdate=formatUtil.getDateObjectfromString(transactionData.frequencyStartDate,"YYYY-MM-DD");
            //var startDate= formatUtil.getFormatedDateString(startdate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("frequencyStartDate",transactionData.frequencyStartDate);
        }
        if (transactionData.frequencyEndDate !== undefined && transactionData.frequencyEndDate !== null) {
            // var enddate=formatUtil.getDateObjectfromString(transactionData.frequencyEndDate,"YYYY-MM-DD");
            //var endDate=formatUtil.getFormatedDateString(enddate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("frequencyEndDate",transactionData.frequencyEndDate);
        }
        if (transactionData.scheduledDate !== undefined && transactionData.scheduledDate !== null) {
            //var sheduleddate=formatUtil.getDateObjectfromString(transactionData.scheduledDate,"YYYY-MM-DD");
            //var sheduledDate=formatUtil.getFormatedDateString(sheduleddate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("scheduledDate",transactionData.scheduledDate);
        }
        if (transactionData.numberOfRecurrences !== undefined && transactionData.numberOfRecurrences !== null) {
            transactionObj.setTransactionAttribute("numberOfRecurrences",transactionData.numberOfRecurrences);
        }
        if (transactionData.fromAccountName !== undefined && transactionData.fromAccountName !== null) {
            transactionObj.setTransactionAttribute("fromAccountName",transactionData.fromAccountName);
        }
        if (transactionData.transactionType !== undefined && transactionData.transactionType !== null) {
            transactionObj.setTransactionAttribute("transactionType",transactionData.transactionType);
        }
        
        if (transactionData.fromAccountType !== undefined && transactionData.fromAccountType !== null) {
            transactionObj.setTransactionAttribute("fromAccountType",transactionData.fromAccountType);
        }
        if (transactionData.transactionsNotes !== undefined && transactionData.transactionsNotes !== null) {
            transactionObj.setTransactionAttribute("transactionsNotes",transactionData.transactionsNotes);
        }
        var accMan = applicationManager.getAccountManager();

        var data = accMan.getInternalAccountByID(transactionData.fromAccountNumber);

        scope_TransfersPresentationController.showPreferredAccount();

    };


    Transfer_PresentationController.prototype.setFlowType = function(type) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setFlowType(type);
    };

    Transfer_PresentationController.prototype.getFlowType = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getFlowType();
    };
    Transfer_PresentationController.prototype.getAllInternalBankBenificiaries = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getAllInternalBenificiaries();
    };
    Transfer_PresentationController.prototype.getAllExternalBankBenificiaries = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getAllExternalBenificiaries();
    };

    Transfer_PresentationController.prototype.clearBenificiaryData = function() {
      scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.clearBeneficiaryObject();
    };

    Transfer_PresentationController.prototype.getBenificiaryData = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getBenificiaryData();
    };

    Transfer_PresentationController.prototype.setIsSameBankBenificiary = function(value) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setIsSameBankBenificiary(value);
    };

    Transfer_PresentationController.prototype.setTransferToInfo = function() {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        var navManager = applicationManager.getNavigationManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var transferDetails = {};
        transferDetails.selectedAccountData = benificiaryDetails;
        var transMan = applicationManager.getTransactionManager();
        transMan.setTransactionAttribute("toAccountNumber",benificiaryDetails["accountNumber"]);
        scope_TransfersPresentationController.setToBankName(benificiaryDetails["bankName"]);
        transMan.setTransactionAttribute("toAccountName",benificiaryDetails["nickName"]);
        transMan.setTransactionAttribute("toAccountType",benificiaryDetails["accountType"]);
        transMan.setTransactionAttribute("transactionType","ExternalTransfer");
        navManager.setCustomInfo("frmTransfersToAccount", transferDetails);
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");

        transModPresentationController.navAfterToAcc();
    };
    Transfer_PresentationController.prototype.getBankName = function() {
        var configMan = applicationManager.getConfigurationManager();
        return configMan.getBankName();
    };

    Transfer_PresentationController.prototype.transfersModule = function() {
        //var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        // transModPresentationController.showFromAccounts();
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersDuration", {});
        navMan.setEntryPoint("makeatransfer", "frmTransfers");
        navMan.navigateTo("frmTransactionMode");
    };
     Transfer_PresentationController.prototype.repeatTransfer = function(transactionData) {

        var formatUtil = applicationManager.getFormatUtilManager();

        var transactionObj = applicationManager.getTransactionManager();
        if (transactionData.amount !== undefined && transactionData.amount !== null) {
            var amount = formatUtil.deFormatAmount(transactionData.amount);
            transactionObj.setTransactionAttribute("amount",amount);
        }
        if (transactionData.frequencyType !== undefined && transactionData.frequencyType !== null) {
            transactionObj.setTransactionAttribute("frequencyType",transactionData.frequencyType);
        }
        if (transactionData.isScheduled !== undefined && transactionData.isScheduled !== null) {
            if (transactionData.isScheduled === "true")
                transactionObj.setTransactionAttribute("isScheduled","1");
            else
                transactionObj.setTransactionAttribute("isScheduled","0");
        }
        if (transactionData.fromAccountNumber !== undefined && transactionData.fromAccountNumber !== null) {
            transactionObj.setTransactionAttribute("fromAccountNumber",transactionData.fromAccountNumber);
        }
        if (transactionData.toAccountNumber !== undefined && transactionData.toAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber",transactionData.toAccountNumber);
        }
        if (transactionData.ExternalAccountNumber !== undefined && transactionData.ExternalAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber",transactionData.ExternalAccountNumber);
        }
        if (transactionData.toAccountName !== undefined && transactionData.toAccountName !== null) {
            transactionObj.setTransactionAttribute("toAccountName",transactionData.toAccountName);
        }
        if (transactionData.frequencyStartDate !== undefined && transactionData.frequencyStartDate !== null) {
            var startdate = formatUtil.getDateObjectfromString(transactionData.frequencyStartDate, "YYYY-MM-DD");
            var startDate = formatUtil.getFormatedDateString(startdate, formatUtil.getApplicationDateFormat());
            transactionObj.setTransactionAttribute("frequencyStartDate",startDate);
        }
        if (transactionData.frequencyEndDate !== undefined && transactionData.frequencyEndDate !== null) {
            var enddate = formatUtil.getDateObjectfromString(transactionData.frequencyEndDate, "YYYY-MM-DD");
            var endDate = formatUtil.getFormatedDateString(enddate, formatUtil.getApplicationDateFormat());
            transactionObj.setTransactionAttribute("frequencyEndDate",endDate);
        }
        if (transactionData.scheduledDate !== undefined && transactionData.scheduledDate !== null) {
            transactionObj.setTransactionAttribute("scheduledDate",transactionData.scheduledDate);
        }
        if (transactionData.numberOfRecurrences !== undefined && transactionData.numberOfRecurrences !== null) {
            transactionObj.setTransactionAttribute("numberOfRecurrences",transactionData.numberOfRecurrences);
        }
        if (transactionData.fromAccountName !== undefined && transactionData.fromAccountName !== null) {
            transactionObj.setTransactionAttribute("fromAccountName",transactionData.fromAccountName);
        }
        if (transactionData.transactionType !== undefined && transactionData.transactionType !== null) {
            transactionObj.setTransactionAttribute("transactionType",transactionData.transactionType);
        }

        if (transactionData.fromAccountType !== undefined && transactionData.fromAccountType !== null) {
            transactionObj.setTransactionAttribute("fromAccountType",transactionData.fromAccountType);
        }

        scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.deleteTransaction = function(data) {
      var transactionObj = applicationManager.getTransactionManager().getTransactionObject();
      var transactionType = transactionObj.transactionType;
        var criteria = {
          "transactionId": data,
          "transactionType" : transactionType
        };
        var transactionObj = applicationManager.getTransactionManager();
        transactionObj.deleteTransaction(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);

    };

    Transfer_PresentationController.prototype.deleteRecurrenceTransaction = function(data) {

        var criteria = {
            "transactionId": data
        };
        var transactionObj = applicationManager.getTransactionManager();
        transactionObj.deleteRecurrenceTransaction(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);

    };
    Transfer_PresentationController.prototype.deleteSuccess = function(res) {
        //alert(JSON.stringify(res));
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.getTransactions();
        var navMan = applicationManager.getNavigationManager();
        var data = {};
        data.type = "success";
        data.typeOfTransaction = "delete";
        data.res = res;
        navMan.setCustomInfo("frmTransfers", data);
    };
    Transfer_PresentationController.prototype.deleteError = function(err) {
        //alert(JSON.stringify(err));
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var navMan = applicationManager.getNavigationManager();
            var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
            transModPresentationController.getTransactions();
            var data = {};

            data.type = "error";
            data.res = err["errorMessage"];
            navMan.setCustomInfo("frmTransfers", data);
        }
    };
    Transfer_PresentationController.prototype.navigateToTransfers = function(data) {
        var navMan = applicationManager.getNavigationManager();
        var transMan = applicationManager.getTransactionManager();
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        transMan.clearTransferObject();
        transMan.setTransactionAttribute("toAccountNumber",data["accountID"]);
        scope_TransfersPresentationController.setToBankName(data["bankName"]);
        transMan.setTransactionAttribute("toAccountName",data["nickName"]);
        transMan.setTransactionAttribute("toAccountType",data["accountType"]);
        transMan.setTransactionAttribute("transactionType","InternalTransfer");
        //alert(transMan.getP2PObject());
        //scope_TransfersPresentationController.showFromAccounts();
        var accMan = applicationManager.getAccountManager();
        var preAccData = accMan.getTransfersPreferredAccount();
        if (preAccData) {

            scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountOnContinuePresentationSuccessCallBack);
            //navMan.navigateTo("frmTransferAmount");
        } else {
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountsPresentationSuccessCallBack);

            // navMan.navigateTo("frmTransfersFromAccount");
        }
        //  scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.fetchInternationalRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchInternationalRecepients(scope_TransfersPresentationController.fetchInternationalRecepientsPresentationSuccess, scope_TransfersPresentationController.fetchInternationalRecepientsPresentationError);
    };
    Transfer_PresentationController.prototype.fetchInternationalRecepientsPresentationSuccess = function() {
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };

    Transfer_PresentationController.prototype.fetchInternationalRecepientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Transfer_PresentationController.prototype.navigateToEnterBenificiaryAccountNumberFromSwiftCode = function(swiftCode) {
        var recipientsManager = applicationManager.getRecipientsManager();

        scope_TransfersPresentationController.setSwiftCode(swiftCode);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmEnterBenAccNo");
    };
    Transfer_PresentationController.prototype.navigateToEnterSwiftCode = function(countryName) {
        var recipientsManager = applicationManager.getRecipientsManager();

        scope_TransfersPresentationController.setCountryName(countryName);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenSwiftCode");
    };
    Transfer_PresentationController.prototype.createInternationalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var recipientsManager = applicationManager.getRecipientsManager();

        var benificiaryData=scope_TransfersPresentationController.getBenificiaryData();
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createInternationalBenificiaryPresentationSuccess, scope_TransfersPresentationController.createInternationalBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createInternationalBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.internationalBenificiaryAdded = true;
        var navMan = applicationManager.getNavigationManager();
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        if (scope_TransfersPresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
          navMan.setCustomInfo("frmTransfersToAccount",succResponse);
          scope_TransfersPresentationController.navAfterToAcc()
        }
        if (scope_TransfersPresentationController.getFlowType() === "InternationalRecipients") {
            scope_TransfersPresentationController.fetchInternationalRecepients();
        }

    };
    Transfer_PresentationController.prototype.createInternationalBenificiaryPresentationError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            controller.bindGenericError(err.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.getAllInternationalBenificiaries = function(err) {
        var recipientManager = applicationManager.getRecipientsManager();
        return recipientManager.getAllInternationalBenificiaries();
    }
    Transfer_PresentationController.prototype.navigateToTransfersRecipientDetails = function(data) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(data);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipientInfo");
    }

    Transfer_PresentationController.prototype.fetchCountriesList = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchCountriesList(scope_TransfersPresentationController.fetchCountriesListSuccessCallBack, scope_TransfersPresentationController.fetchCountriesListErrorCallBack);
    };

    Transfer_PresentationController.prototype.fetchCountriesListSuccessCallBack = function(countryList) {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBenCountry", countryList);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenCountry");
    };

    Transfer_PresentationController.prototype.fetchCountriesListErrorCallBack = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
            controller.bindGenericError(err.errorMessage);
        }
    };

    Transfer_PresentationController.prototype.isValidAccNum = function(accNum, formName) {
        var validationUtility = applicationManager.getValidationUtilManager();
        if (validationUtility.isValidAccountNumber(accNum)) {
            return true;
        } else {
            var controller = applicationManager.getPresentationUtility().getController(formName, true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidAccountNumber"));
            return false;
        }
    };

    Transfer_PresentationController.prototype.isValidSwiftCode = function(swiftCode, formName) {
        var validationUtility = applicationManager.getValidationUtilManager();
        if (validationUtility.isValidSwiftCode(swiftCode)) {
            return true;
        } else {
            var controller = applicationManager.getPresentationUtility().getController(formName, true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidSwiftCode"));
            return false;
        }
    };
    Transfer_PresentationController.prototype.setBenificiaryDetails = function(benificiaryData) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(benificiaryData);
    };
  	Transfer_PresentationController.prototype.isEligibleTransferType = function(transferType){
      var configManager = applicationManager.getConfigurationManager();
      return configManager.getConfigurationValue(transferType);
    }
    Transfer_PresentationController.prototype.evaluateMinMaxAmountLimits = function(amount){
      var configManager =  applicationManager.getConfigurationManager();
      var maxlimit,minlimit;
      switch(scope_TransfersPresentationController.transactionMode){
          case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts") :
          	maxlimit = configManager.getConfigurationValue("maxKonyBankAccountsTransferLimit");
          	minlimit = configManager.getConfigurationValue("minKonyBankAccountsTransferLimit");
          	break;
          case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers") :
          	maxlimit = configManager.getConfigurationValue("maxOtherKonyAccountsTransferLimit");
          	minlimit = configManager.getConfigurationValue("minOtherKonyAccountsTransferLimit");
          	break;
          case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts") :
          	maxlimit = configManager.getConfigurationValue("maxOtherBankAccountsTransferLimit");
          	minlimit = configManager.getConfigurationValue("minOtherBankAccountsTransferLimit");
          	break;
          case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer") :
          	maxlimit = configManager.getConfigurationValue("maxInternationalAccountsTransferLimit");
          	minlimit = configManager.getConfigurationValue("minInternationalAccountsTransferLimit");
          	break;   
      }
      if(Number(amount)>Number(maxlimit)){
        return {"max":maxlimit};
      }
      if(Number(amount)<Number(minlimit)){
        return {"min":minlimit};
      }
      return "valid";
    }
  
    return Transfer_PresentationController;  	
});
