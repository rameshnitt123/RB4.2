define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
  
  function PresentationController_Tablet() {
    self = this;
    isDeleteSuccess = false;
    isUpdateAddressSuccess = false;
    isUpdateNickNameSuccess = false;
    entryPoint = "";
    isPayeeAdded = false;
    self.duration = "";

    /** self.numberOfAsyncForBills
		*  1.getUsersScheduledBill
		*  2.getUserCompletedBillHistory
		*  3.getBills
  	*/
    self.numberOfAsyncForBills = 3;

    /** self.numberOfAsyncForPayees
		*  1.getPayee
    *  2.getRecentPayee
    */
    self.numberOfAsyncForPayees = 2;
    kony.mvc.Presentation.BasePresenter.call(this);
    self.asyncManager = new AsyncManager();
  }

  inheritsFrom(PresentationController_Tablet, kony.mvc.Presentation.BasePresenter);

  PresentationController_Tablet.prototype.initializePresentationController = function() {

  };
  
  PresentationController_Tablet.prototype.handleError = function(error, errorMessage) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);      
    } else {
      kony.print(errorMessage ? errorMessage : error);
    }
  };
  
  PresentationController_Tablet.prototype.getDuration = function() {
    return self.duration;
  };
  PresentationController_Tablet.prototype.setDuration = function(duration) {
    self.duration = duration;
  };
  
  PresentationController_Tablet.prototype.clearfields = function() {
    self.duration = "";
  };
  
  PresentationController_Tablet.prototype.fetchBills = function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    self.asyncManager.initiateAsyncProcess(self.numberOfAsyncForBills);
    self.getScheduledBills();
    kony.print("To Maintain gap b/w services 1");
    kony.print("To Maintain gap b/w services 2");
    kony.print("To Maintain gap b/w services 3");
    kony.print("To Maintain gap b/w services 4");
    self.getPostedBills();
    self.getPendingBills();
  };

  PresentationController_Tablet.prototype.getScheduledBills = function() {
    var transactionManager = applicationManager.getTransactionManager();
    var criteria = {
      sortBy: "scheduledDate",
      order: "desc"
    };
    transactionManager.fetchUserBillPayScheduledTransactions(criteria, self.getScheduledBillsSuccessCallback, self.getScheduledBillsErrorCallback);
  };

  PresentationController_Tablet.prototype.getScheduledBillsSuccessCallback = function(successRes) {
    self.asyncManager.setSuccessStatus(0, successRes);
    if (self.asyncManager.areAllservicesDone(self.numberOfAsyncForBills)) {
      self.navToBillPayLanding();
    }
  };

  PresentationController_Tablet.prototype.getScheduledBillsErrorCallback = function(errorRes) {
    self.handleError(errorRes);
  };

  PresentationController_Tablet.prototype.getPostedBills = function() {
    var transactionManager = applicationManager.getTransactionManager();
    var criteria = {
      offset: 0,
      limit: 10,
      sortBy: "transactionDate",
      order: "desc"
    };
    transactionManager.fetchUserBillPayPostedTransactions(criteria, self.getPostedBillsSuccessCallback, self.getPostedBillsErrorCallback);
  };

  PresentationController_Tablet.prototype.getPostedBillsSuccessCallback = function(successRes) {
     self.asyncManager.setSuccessStatus(1, successRes);
    if (self.asyncManager.areAllservicesDone(self.numberOfAsyncForBills)) {
      self.navToBillPayLanding();
    }
  };

  PresentationController_Tablet.prototype.getPostedBillsErrorCallback = function(errorRes) {
    self.handleError(errorRes);
  };

  PresentationController_Tablet.prototype.getPendingBills = function() {
    var billManager = applicationManager.getBillManager();
    var criteria = {
      sortBy: "billDueDate",
      order: "desc"
    };
    billManager.fetchUserBillPayPendingTransactions(criteria, self.getPendingBillsSuccessCallback, self.getPendingBillsErrorCallback);
  };

  PresentationController_Tablet.prototype.getPendingBillsSuccessCallback = function(successRes) {
    self.asyncManager.setSuccessStatus(2, successRes);
    if (self.asyncManager.areAllservicesDone(self.numberOfAsyncForBills)) {
      self.navToBillPayLanding();
    }
  };

  PresentationController_Tablet.prototype.getPendingBillsErrorCallback = function(errorRes) {
    self.handleError(errorRes);
  };

  PresentationController_Tablet.prototype.navToBillPayLanding = function() {
    var navMan = applicationManager.getNavigationManager();
    var formatUtil = applicationManager.getFormatUtilManager();
    var bills = {};
    var data = navMan.getCustomInfo("frmBillPay");
    if (data) {
      bills = data;
    }
      
    bills.scheduledBills = self.asyncManager.getData(0);
    bills.postedBills = self.asyncManager.getData(1);
    bills.pendingBills = self.asyncManager.getData(2);
    
    for (var i = 0; i < 2; i++) {
      self.asyncManager.clearCallStatus(i);
    }
    
    bills.scheduledBills.forEach(function(scheduledBill) {
      var billdateobj = formatUtil.getDateObjectfromString(scheduledBill.scheduledDate, "YYYY-MM-DD");
      
      scheduledBill.scheduledDate = formatUtil.getFormatedDateString(billdateobj, formatUtil.APPLICATION_DATE_FORMAT);
      scheduledBill.showDate = scheduledBill.scheduledDate;
      scheduledBill.amount = formatUtil.formatAmountandAppendCurrencySymbol(scheduledBill.amount);
      
      if(scheduledBill.eBillSupport=="true" && scheduledBill.isManuallyAdded != "true")
            {
           if(scheduledBill.eBillEnable=="1")
            scheduledBill.image={"src":"ebill.png","isVisible":true};
          else
            scheduledBill.image={"src":"ebillinactive.png","isVisible":true};
            }
          else
            scheduledBill.image={"src":"","isVisible":false};
    });
    
    bills.pendingBills.forEach(function(bill) {
      var billdateobj = formatUtil.getDateObjectfromString(bill.billDueDate, "YYYY-MM-DD");
      bill.transactionDate = formatUtil.getFormatedDateString(billdateobj, formatUtil.APPLICATION_DATE_FORMAT);
      bill.showDate = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.DueOn") + " " + bill.transactionDate;
      bill.payeeNickName = bill.payeeName;
      bill.amount = formatUtil.formatAmountandAppendCurrencySymbol(bill.dueAmount);
      if(bill.eBillSupport=="true" && bill.isManuallyAdded != "true")
            {
           if(bill.eBillEnable=="1")
            bill.image={"src":"ebill.png","isVisible":true};
          else
            bill.image={"src":"ebillinactive.png","isVisible":true};
            }
          else
            bill.image={"src":"","isVisible":false};
      var paidDate = formatUtil.getDateObjectfromString(bill.paidDate, "YYYY-MM-DD");
      var str = formatUtil.getFormatedDateString(paidDate, formatUtil.APPLICATION_DATE_FORMAT);
      var paidAmount = formatUtil.formatAmountandAppendCurrencySymbol(bill.paidAmount);
      bill.fromAccountName = paidAmount 
        										 + " " 
        										 + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.paidOn")
        										 + " " 
        										 + str;
      bill.flxViewBill = "flxViewBill";
      bill.flxBillPay = "flxBillPay";   
    });
    
    bills.postedBills.forEach(function(bill) {
      var billdateobj = formatUtil.getDateObjectfromString(bill.transactionDate, "YYYY-MM-DD");
      bill.transactionDate = formatUtil.getFormatedDateString(billdateobj, formatUtil.APPLICATION_DATE_FORMAT);
      bill.showDate = bill.transactionDate;
      bill.amount = formatUtil.formatAmountandAppendCurrencySymbol(bill.amount);
      if(bill.eBillSupport=="true" && bill.isManuallyAdded != "true")
            {
           if(bill.eBillEnable=="1")
            bill.image={"src":"ebill.png","isVisible":true};
          else
            bill.image={"src":"ebillinactive.png","isVisible":true};
            }
          else
            bill.image={"src":"","isVisible":false};
    });
    navMan.setCustomInfo("frmBillPay", bills);
    navMan.navigateTo("frmBillPay");
  };
  
  PresentationController_Tablet.prototype.fetchToPayees = function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    self.asyncManager.initiateAsyncProcess(self.numberOfAsyncForPayees);
    self.fetchToAllPayees();
    self.fetchToRecentPayees();
  };
  
  PresentationController_Tablet.prototype.viewBill = function(URL) {
    kony.application.openURL(URL);
  };

  PresentationController_Tablet.prototype.payBill = function(payeeId) {
    var payeeManager = applicationManager.getPayeeManager();
    var data = payeeManager.fetchPayeeDetailsById(payeeId);
    self.navAfterSelectPayee(data);
  };  

  PresentationController_Tablet.prototype.fetchToRecentPayees = function() {  
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.fetchRecentBillPayees(self.fetchToRecentPayeesPresentationSuccess, self.fetchToPayeesPresentationError);
  };

  PresentationController_Tablet.prototype.fetchToRecentPayeesPresentationSuccess = function(successRes) {
    self.asyncManager.setSuccessStatus(0, successRes);
    if(self.asyncManager.areAllservicesDone(self.numberOfAsyncForPayees)){
      self.commonFunctionForNavigation("frmBillPaySelectPayee");
    }
  };
  
  PresentationController_Tablet.prototype.fetchToPayeesPresentationError = function(errorRes) {
    self.handleError(errorRes);
  };
  
  PresentationController_Tablet.prototype.fetchToAllPayees = function() {  
    var recipientsManager = applicationManager.getRecipientsManager();
    var criteria= {
      offset: "0",
      limit: "10",
      searchString: "",
      sortBy: "",
      order: ""
    };
    recipientsManager.fetchPayeesList(criteria, self.fetchToAllPayeesPresentationSuccess, self.fetchToAllPayeesPresentationError);
  };
  
  PresentationController_Tablet.prototype.fetchToAllPayeesPresentationSuccess = function(successRes) {
    self.asyncManager.setSuccessStatus(1, successRes);
    if(self.asyncManager.areAllservicesDone(self.numberOfAsyncForPayees)){
      self.commonFunctionForNavigation("frmBillPaySelectPayee");
    }
  };
  
  PresentationController_Tablet.prototype.fetchToAllPayeesPresentationError = function(errorRes) {
    self.handleError(errorRes);
  };

  PresentationController_Tablet.prototype.fetchAllPayees = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    var criteria = {
      offset: "0",
      limit: "10",
      searchString: "",
      sortBy: "",
      order: ""
    };
    recipientsManager.fetchPayeesList(criteria, self.fetchAllPayeesPresentationSuccess, self.fetchAllPayeesPresentationError);
  };
  
  PresentationController_Tablet.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };
  
  PresentationController_Tablet.prototype.fetchAllPayeesPresentationSuccess = function(successRes) {
    self.commonFunctionForNavigation("frmBillPayAllPayees");
  };
  
  PresentationController_Tablet.prototype.fetchAllPayeesPresentationError = function(errorRes) {
    self.handleError(errorRes);
  };
  
  PresentationController_Tablet.prototype.getAllBillPayPayees = function() {   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getAllBillPayPayees();
  };
  
  PresentationController_Tablet.prototype.getRecentBillPayees = function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getRecentBillPayees();
  };
  
  PresentationController_Tablet.prototype.navToPayeeDetails= function(selectedPayeeDetails, formName){   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeData(selectedPayeeDetails);
    if (selectedPayeeDetails.eBillSupport && selectedPayeeDetails.eBillStatus === "1") {
      var success = function(res) {
        if(res.length !== 0) {
          var formatUtil = applicationManager.getFormatUtilManager();
          var billduedateobj = formatUtil.getDateObjectfromString(res[0].billDueDate,"YYYY-MM-DD");
          res[0].billDueDate = formatUtil.getFormatedDateString(billduedateobj, formatUtil.APPLICATION_DATE_FORMAT);
          var paiddateobj = formatUtil.getDateObjectfromString(res[0].paidDate, "YYYY-MM-DD");
          res[0].paidDate = formatUtil.getFormatedDateString(paiddateobj, formatUtil.APPLICATION_DATE_FORMAT);
          res[0].dueAmount = formatUtil.formatAmountandAppendCurrencySymbol(res[0].dueAmount);
          res[0].paidAmount = formatUtil.formatAmountandAppendCurrencySymbol(res[0].paidAmount);
        }
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBillPayPayeeDetails",res); 
        self.commonFunctionForNavigation(formName);   
      };
      
      var billManager = applicationManager.getBillManager();
      var record = {};
      record.payeeId = selectedPayeeDetails.payeeId;
      billManager.fetchPayeeDueBill(record, success, self.getPayeeBillsPresentationError);
    } else {
      self.commonFunctionForNavigation(formName);  
    }
  };
  
  PresentationController_Tablet.prototype.getPayeeBillsPresentationSuccess = function(res) {
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmBillPayPayeeDetails", res); 
    self.commonFunctionForNavigation(formName);   
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  
  PresentationController_Tablet.prototype.getPayeeBillsPresentationError = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.commonFunctionForNavigation(formName);
    self.handleError(error, "error in getPayeeBillsPresentationErrorCallBack");
  }; 
  
  PresentationController_Tablet.prototype.setBillPayPayeeData = function(selectedPayeeDetails) {   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeData(selectedPayeeDetails);
  };
  
  PresentationController_Tablet.prototype.getPayeeDetails = function() {   
    var recipientsManager = applicationManager.getRecipientsManager();
    
    return recipientsManager.getBillPayPayeeData();
  };
  
  PresentationController_Tablet.prototype.deleteBillPayPayee = function() {
    var payeeDetails = self.getPayeeDetails();
    var recipientsManager = applicationManager.getRecipientsManager();
    
    return recipientsManager.deletePayeeById(payeeDetails.payeeId, self.deleteBillPayPayeePresentationSuccess, self.deleteBillPayPayeePresentationError);
  };
  
  PresentationController_Tablet.prototype.deleteBillPayPayeePresentationSuccess = function(successRes) {
   self.isDeleteSuccess = true;
    self.clearBillPayPayeeData();
    self.fetchAllPayees();
  };
  
  PresentationController_Tablet.prototype.deleteBillPayPayeePresentationError = function(errorRes) {
    self.handleError(errorRes, "error in delete payee");
  };
  
  PresentationController_Tablet.prototype.updatePayeeAddress= function(address){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.updatePayeeDetails(address, self.updatePayeeAddressPresentationSuccess, self.updatePayeeAddressPresentationError);
  };
  
  PresentationController_Tablet.prototype.updatePayeeAddressPresentationSuccess = function(successRes) {
    self.isUpdateAddressSuccess = true;
    self.clearBillPayPayeeData();
    self.fetchAllPayees();
  };
  
  PresentationController_Tablet.prototype.updatePayeeAddressPresentationError = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditAddress', true);
      controller.bindGenericError(err.errorMessage);  
    }
  };
  
  PresentationController_Tablet.prototype.setFlowType = function(type) {   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setFlowType(type);
  };
  
  PresentationController_Tablet.prototype.getFlowType = function() {   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getFlowType();
  };
  
  PresentationController_Tablet.prototype.updatePayeeNickName = function(nickname) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.updatePayeeDetails(nickname, self.updatePayeeNickNamePresentationSuccess, self.updatePayeeNickNamePresentationError);
  };
  
  PresentationController_Tablet.prototype.updatePayeeNickNamePresentationSuccess = function(successRes) {
    self.isUpdateNickNameSuccess = true;
    self.clearBillPayPayeeData();
    self.fetchAllPayees();      
  };  
  
  PresentationController_Tablet.prototype.updatePayeeNickNamePresentationError = function(err) {
    kony.print("error in update nick name payee"); 
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    } else{
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditName', true);
      controller.bindGenericError(err.errorMessage);  
    }
  };
  
  PresentationController_Tablet.prototype.clearBillPayPayeeData = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.clearBillPayPayeeData();
  };
  
  PresentationController_Tablet.prototype.navToPayeeAddressDetails = function(payeeName, formName) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("payeeName",payeeName);
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.getBillPayPayeeName = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().payeeName;
  };
  
  PresentationController_Tablet.prototype.navToBillPayPayeeAccNum = function(address, formName) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeAddressDetails(address);
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.getPayeeAddressDetails = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeAddressDetails();
  };
  PresentationController_Tablet.prototype.navToReenterAccNum = function(payeeAccNum, formName) {
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidAccountNumber(payeeAccNum)) {
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.setAttributePayee("accountNumber", payeeAccNum);
      recipientsManager.setAttributePayee("isPayeeWithOutAccNum", "false");
      self.commonFunctionForNavigation(formName);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidAccountNumber"));
    }
  };
  
  PresentationController_Tablet.prototype.getBillPayAccountNumber = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().accountNumber;
  };
  
  PresentationController_Tablet.prototype.navToVerifyDetails = function(payeeAccNum,formName) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber",payeeAccNum);
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.getBillPayReEnterAccountNumber = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().reEnterAccountNumber;
  };
  
  PresentationController_Tablet.prototype.createBillPayPayee = function(nickname, nameOnBill) {
    var recipientsManager = applicationManager.getRecipientsManager();
    var payeeData = self.getPayeeDetails();
    payeeData.payeeNickName = nickname;
    payeeData.nameOnBill = nameOnBill;
    recipientsManager.createPayee(payeeData, self.createBillPayPayeePresentationSuccess, self.createBillPayPayeePresentationError);
  };  
  
  PresentationController_Tablet.prototype.createBillPayPayeePresentationSuccess = function(successRes) {
    self.isPayeeAdded = true;
    self.clearBillPayPayeeData();
    var navManger = applicationManager.getNavigationManager();
    var entryPoint = navManger.getEntryPoint("createBillPayPayee");
    if (entryPoint === "frmBillPayAllPayees" || entryPoint === "frmBillPaySelectPayee") {
      self.fetchAllPayees();
    }
  }; 
  
  PresentationController_Tablet.prototype.createBillPayPayeePresentationError = function(err) {
    kony.print("error in create payee");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayVerifyDetails', true);
      controller.bindGenericError(err.errorMessage);  
    }
  };
  
  PresentationController_Tablet.prototype.addressSearch = function(searchText) {
    var locationManager = applicationManager.getLocationManager();
    locationManager.fetchAddressSuggestions(searchText, self.addressSearchPresentationSuccessCallback, self.addressSearchPresentationErrorCallback);
  };
  
  PresentationController_Tablet.prototype.addressSearchPresentationSuccessCallback = function(res) {
    kony.print("*****************Success in addressSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditAddress', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  
  PresentationController_Tablet.prototype.addressSearchPresentationErrorCallback = function(err) {
		self.handleError(err, "*******************Error in addressSearch");
  };
  
  PresentationController_Tablet.prototype.addressSearchPayee = function(searchText) {
    var locationManager = applicationManager.getLocationManager();
    locationManager.fetchAddressSuggestions(searchText, self.addressSearchPayeePresentationSuccessCallback, self.addressSearchPayeePresentationErrorCallback);
  };
  
  PresentationController_Tablet.prototype.addressSearchPayeePresentationSuccessCallback = function(res) {
    kony.print("*****************Success in addressSearchPayee");
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditPayAddress', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  
  PresentationController_Tablet.prototype.addressSearchPayeePresentationErrorCallback = function(err) {
		self.handleError(err, "*******************Error in addressSearchPayee");
  };

  PresentationController_Tablet.prototype.navToFormBasedOnEntryPoint = function(entryPoint) {
    var navMan = applicationManager.getNavigationManager();
    var formName = navMan.getEntryPoint(entryPoint);
    self.clearBillPayPayeeData();
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.switchFrequencyType = function(index) {
    var transactionObj = applicationManager.getTransactionManager();
    var frequencyTypes = transactionObj.getAvailableFrequencyType();
    var navMan = applicationManager.getNavigationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    switch(index) {
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow"):      
        var dateobj = new Date();  
        var formatedDate = forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);
        
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.ONCE);  
        transactionObj.setTransactionAttribute("isScheduled", "0");
        transactionObj.setTransactionAttribute("numberOfRecurrences", "");
        transactionObj.setTransactionAttribute("scheduledDate", formatedDate);
        transactionObj.setTransactionAttribute("frequencyStartDate", "");
        transactionObj.setTransactionAttribute("frequencyEndDate", ""); 
        
        navMan.navigateTo("frmBillPayConfirmation");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime"):
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.ONCE);
        transactionObj.setTransactionAttribute("isScheduled", "1");
        var startDate = transactionObj.getTransactionObject().scheduledDate;
        navMan.navigateTo("frmBillPayStartDate");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Daily"): 
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.DAILY);
        transactionObj.setTransactionAttribute("isScheduled", "1");
        
        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Weekly"):
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.WEEKLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.EveryTwoWeeks"): 
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.EVERYTWOWEEKS);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Monthly"): 
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.MONTHLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Quaterly"): 
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.QUARTERLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.HalfYearly"):
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.HALFYEARLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Yearly"):
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.YEARLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");

        navMan.navigateTo("frmBillPayDuration");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.BiWeekly"):    
        transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.BIWEEKLY);
        transactionObj.setTransactionAttribute("isScheduled", "1");
        
        navMan.navigateTo("frmBillPayDuration");
        break;
      default:
        break;
    }
  };
  
  PresentationController_Tablet.prototype.transferScheduledDate = function(strtDate) {
    var navMan = applicationManager.getNavigationManager();   
//     var forUtility = applicationManager.getFormatUtilManager();
//     var dateobj = forUtility.getDateObjectfromString(strtDate, "MM/DD/YYYY");    
//     var formatedDate = forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);   
    var formatedDate = strtDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("scheduledDate", formatedDate); 

    navMan.navigateTo("frmBillPayConfirmation");
  };
  
  PresentationController_Tablet.prototype.transferScheduledStrtDate = function(strtDate) {
//     var forUtility = applicationManager.getFormatUtilManager();
//     var dateobj = forUtility.getDateObjectfromString(strtDate, "MM/DD/YYYY");    
//     var formatedDate = forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);   
    var formatedDate = strtDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("frequencyStartDate", formatedDate);
    transferManager.setTransactionAttribute("scheduledDate", formatedDate); 
    
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmBillPayEndDate", formatedDate);
    navMan.navigateTo("frmBillPayEndDate");
  };
  
  PresentationController_Tablet.prototype.switchDurationType = function(index) {
    var transactionObj = applicationManager.getTransactionManager();
    var frequencyTypes = transactionObj.getAvailableFrequencyType();
    var navMan = applicationManager.getNavigationManager();
    switch(index) {
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"):
        transactionObj.setTransactionAttribute("numberOfRecurrences", "");
        self.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"));
        var startDate = transactionObj.getTransactionObject().scheduledDate;
        
        navMan.navigateTo("frmBillPayStartDate");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"):
        transactionObj.setTransactionAttribute("frequencyStartDate", ""); 
        transactionObj.setTransactionAttribute("frequencyEndDate", "");
        self.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"));
        
        navMan.navigateTo("frmBillPayRecurrence"); 
        break;               
    } 
  };
  
  PresentationController_Tablet.prototype.makeATransfer = function(description) {
    var transactionManager = applicationManager.getTransactionManager();
    transactionManager.setTransactionAttribute("transactionsNotes", description);
    var transactionId = transactionManager.getTransactionObject().transactionId;
    if (!kony.sdk.isNullOrUndefined(transactionId) && transactionId !== "") {
      transactionManager.updateTransaction(transactionManager.getTransactionObject(), 
                                           self.presentationMakeATransferSuccess,
                                           self.presentationMakeATransferError); 
    } else {
      transactionManager.createTransaction(transactionManager.getTransactionObject(),
                                           self.presentationMakeATransferSuccess,
                                           self.presentationMakeATransferError);
    }
  };

  PresentationController_Tablet.prototype.presentationMakeATransferSuccess = function(resp) {
    //Setting Custom Metric Data for BillPay Reports
    //var BillPayReport = applicationManager.getLoggerManager();  
    //BillPayReport.sendCustomMetrics("BILLPAY");
    var navMan = applicationManager.getNavigationManager();
    var data = {};
    var transferManager = applicationManager.getTransactionManager();
    if (navMan.getEntryPoint("payBill") === "frmAccountDetails") {
      data = {
        type: "success",
        typeOfTransaction: "create",
      	res: resp 
      };
      
      navMan.setCustomInfo("frmAccountDetails", data);
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.fetchAccountTransactions(transferManager.getTransactionObject().fromAccountNumber);
    } else {
      self.fetchBills();
      data = {res: resp};
      navMan.setCustomInfo("frmBillPay", data);
    }
    
    self.clearfields();
    transferManager.clearTransferObject();  
  };
  
  PresentationController_Tablet.prototype.presentationMakeATransferError = function(err) {
    if (err.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    } else {
      self.presentationMakeATransferSuccess(err);  
    }
  };
  
  PresentationController_Tablet.prototype.updateBillPayFromAcc = function(jsonData) {
    var userObj = applicationManager.getUserPreferencesManager();
    var successCallback = function(res) {
      res.status = "success";
      var userObj = applicationManager.getUserPreferencesManager();
      userObj.showBillPayFromAccPopup = false;
      if (jsonData.default_account_billPay) {
        userObj.default_account_billPay = jsonData.default_account_billPay;
        res.acountUpdated = true;
      }

      var navMan = applicationManager.getNavigationManager();
      navMan.setCustomInfo("frmBillPayAmount", res);
      self.commonFunctionForNavigation("frmBillPayAmount"); 
    };

    var failureCallback = function(err) {
      if (err.isServerUnreachable) {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      } else {
        err.status = "error";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBillPayAmount", err);
        self.commonFunctionForNavigation("frmBillPayAmount");
      }
    };
    
    userObj.partialUpdateOnUserObj(jsonData, successCallback, failureCallback);
  };  
  
  PresentationController_Tablet.prototype.cancelCommon = function() {
    var transactionObj = applicationManager.getTransactionManager();
    self.clearfields();
    transactionObj.clearTransferObject();
    var navMan = applicationManager.getNavigationManager();
    var formName = navMan.getEntryPoint("payBill");
    if(!formName) {
      formName = "frmBillPay";
    }
    switch(formName){
      case "frmBillPay": 
        self.fetchBills();
        break;
      case "frmDashBoard" :
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
        break;
      default: 
        navMan.navigateTo(formName);
    }
    navMan.setEntryPoint("payBill","");
  };
  
  PresentationController_Tablet.prototype.transferScheduledEndDate = function(endDate) {
//     var forUtility = applicationManager.getFormatUtilManager();
//     var dateobj = forUtility.getDateObjectfromString(endDate, "MM/DD/YYYY");    
//     var formatedDate = forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);   
    var formatedDate = endDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("frequencyEndDate", formatedDate);
    var navMan = applicationManager.getNavigationManager();
    var data = transferManager.getTransactionObject(); 
    navMan.setCustomInfo("frmBillPayConfirmation", data);
    navMan.navigateTo("frmBillPayConfirmation");
  };
  
  PresentationController_Tablet.prototype.transferSetRecurrence = function(reccurrence) {
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("numberOfRecurrences", reccurrence); 
    var navMan = applicationManager.getNavigationManager();
   
    navMan.navigateTo("frmBillPayStartDate");
  };
  
  PresentationController_Tablet.prototype.setManuallyAddedFlag = function(value) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("isManuallyAdded", value);
  };
  
  PresentationController_Tablet.prototype.getManuallyAddedFlag = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().isManuallyAdded;
  };
  
  PresentationController_Tablet.prototype.isDefaultFromAccount = function() {
    var accMan = applicationManager.getAccountManager();
    return accMan.getBillPayPreferredAccount();
  };
  
  PresentationController_Tablet.prototype.isSetAccountPopupEnabled = function() {
    var userManager = applicationManager.getUserPreferencesManager();
    return userManager.isSetAccountPopupEnabled();
  };
  
  PresentationController_Tablet.prototype.navAfterSelectPayee = function(selectedPayee) {
    var recipientsManager = applicationManager.getRecipientsManager();
    var accMan = applicationManager.getAccountManager();
    var trasMan = applicationManager.getTransactionManager();
    trasMan.clearTransferObject();
    var navMan = applicationManager.getNavigationManager();
    var preAccData = accMan.getBillPayPreferredAccount();
    trasMan.setTransactionAttribute("payeeId", selectedPayee.payeeId);
    trasMan.setTransactionAttribute("payeeAdress", selectedPayee.addressLine1);
    trasMan.setTransactionAttribute("payeeNickName", selectedPayee.payeeNickName);
    trasMan.setTransactionAttribute("transactionType", "BillPay");
    if (!preAccData || preAccData === "") {
      self.navFromAccountsPage() ; 
    } else {
      self.setFromAccountsForTransactions(preAccData);
      navMan.navigateTo("frmBillPayAmount");
    }
  };    

  PresentationController_Tablet.prototype.navFromAccountsPage = function() {
    var accMan = applicationManager.getAccountManager();
    accMan.fetchInternalAccounts(self.showFromAccountsPresentationSuccessCallBack, self.showFromAccountsPresentationErrorCallBack);
  };  

  PresentationController_Tablet.prototype.showFromAccountsPresentationSuccessCallBack = function(res) {
    var accNav = applicationManager.getAccountManager();
    var frmacc = accNav.getBillPaySupportedAccounts();
    var navMan = applicationManager.getNavigationManager();
   
    navMan.setCustomInfo("frmBillPayFromAccount", {fromaccounts: frmacc});
    navMan.navigateTo("frmBillPayFromAccount");
  };
  
  PresentationController_Tablet.prototype.showFromAccountsPresentationErrorCallBack = function(error) {
    self.handleError(error, "error in showFromAccountsPresentationErrorCallBack");
  };
  PresentationController_Tablet.prototype.processAccountsData = function(data) {
    var scope = this;
    var accProcessedData = data.map(function(item) {
      return {
        accountName: item.accountName,
        availableBalance: scope.getAvailableBalanceCurrencyString(item),
        accountID: item.accountID,
        bankName: item.bankName,
        accountBalanceType: scope.getAvailableBalanceType(item),
        accountType: item.accountType
      };
    });
    
    return accProcessedData;
  };
  
  PresentationController_Tablet.prototype.getAvailableBalanceCurrencyString = function(data) {
    var forUtility = applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    switch(data.accountType) {
      case configManager.constants.SAVINGS: 
      case configManager.constants.CHECKING:
        return forUtility.formatAmountandAppendCurrencySymbol(data.availableBalance);

      case configManager.constants.CREDITCARD:
      case configManager.constants.DEPOSIT:
        return forUtility.formatAmountandAppendCurrencySymbol(data.currentBalance);

      case configManager.constants.MORTGAGE:
      case configManager.constants.LOAN:
        return forUtility.formatAmountandAppendCurrencySymbol(data.outstandingBalance);
      
      default:
        return forUtility.formatAmountandAppendCurrencySymbol(data.availableBalance);
    }
  };
  
  PresentationController_Tablet.prototype.getAvailableBalanceType = function(data) {
    var configManager = applicationManager.getConfigurationManager();
    switch(data.accountType) {
      case configManager.constants.CHECKING:
      case configManager.constants.SAVINGS: 
        return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
      
      case configManager.constants.DEPOSIT:
      case configManager.constants.CREDITCARD:
        return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
      
      case configManager.constants.LOAN:
      case configManager.constants.MORTGAGE:
        return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
       
      default:
        return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    }
  };

  PresentationController_Tablet.prototype.showPreferredAccount = function(preAccData) {
    return self.processAccountsData(preAccData);
  };

  PresentationController_Tablet.prototype.getTransferObjectById = function() {
    var data;
    var accMan = applicationManager.getAccountManager();
    var transactionmanager = applicationManager.getTransactionManager();
    var transactionData = transactionmanager.getTransactionObject();
    if (transactionData.fromAccountNumber) {
      data = accMan.getInternalAccountByID(transactionData.fromAccountNumber); 
    } else {
      data = accMan.getBillPayPreferredAccount();
    }
    if(Array.isArray(data)){
      return self.processAccountsData(data);
    }
    return data;
  };

  PresentationController_Tablet.prototype.evaluateAmount = function(amount, fromAvlBal) {
    var forUtility = applicationManager.getFormatUtilManager();
    fromAvlBal = forUtility.deFormatAmount(fromAvlBal);
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayAmount', true);
    if (Number(amount) > Number(fromAvlBal)) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.amountGreaterThanAvailBal"));
    } else if (Number(amount) === 0) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validAmount"));
    } else {
      var transactionManager = applicationManager.getTransactionManager();
      transactionManager.setTransactionAttribute("amount", amount);
      var index = self.getSelectedFrequencyIndex();
      var navManger = applicationManager.getNavigationManager();
      
      navManger.navigateTo("frmBillPayFrequency");
    }
  };

  PresentationController_Tablet.prototype.setFromAccountsForTransactions = function(selectedfromacc) {
    var trasMan = applicationManager.getTransactionManager();
    trasMan.setTransactionAttribute("fromAccountNumber", selectedfromacc.accountID);
    trasMan.setTransactionAttribute("fromAccountName", selectedfromacc.accountName);
    trasMan.setTransactionAttribute("fromAccountType", selectedfromacc.accountType);
    trasMan.setTransactionAttribute("fromBankName", selectedfromacc.bankName);
  };
  
  PresentationController_Tablet.prototype.getSelectedFrequencyIndex = function() {
    var transactionObj = applicationManager.getTransactionManager();
    var frequency = transactionObj.getTransactionObject().frequencyType;
    switch(frequency) {
      case "Once":
        return transactionObj.getTransactionObject().isScheduled == "0" ? 0 : 1; 
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

  PresentationController_Tablet.prototype.setTransactionObject  = function(transactionData) {
    var formatUtil = applicationManager.getFormatUtilManager();
    var transactionObj = applicationManager.getTransactionManager();
    var transactionsId = transactionData.transactionId;
    if (transactionsId) {
      transactionObj.setTransactionprimaryAttribute({"transactionId": transactionData.transactionId});
    }
    
    if (transactionData.payeeId) {
      transactionObj.setTransactionAttribute("payeeId", transactionData.payeeId);
    }
    
    if(transactionData.amount) {
      var amount = formatUtil.deFormatAbsoluteAmount(transactionData.amount);
      transactionObj.setTransactionAttribute("amount", amount);
    }
    
    if (transactionData.frequencyType) {
      transactionObj.setTransactionAttribute("frequencyType", transactionData.frequencyType);
    }
    
    if (transactionData.isScheduled !== null && transactionData.isScheduled !== undefined) {
      var isScheduled  = transactionData.isScheduled === "true";
      transactionObj.setTransactionAttribute("isScheduled", isScheduled ? "1" : "0");
    }
    
    if (transactionData.payeeNickName) {
      transactionObj.setTransactionAttribute("payeeNickName", transactionData.payeeNickName);
    }

    if (transactionData.toAccountName) {
      transactionObj.setTransactionAttribute("toAccountName", transactionData.toAccountName);
    }
    
    if (transactionData.frequencyStartDate) {
//       var startdate = formatUtil.getDateObjectfromString(transactionData.frequencyStartDate, "YYYY-MM-DD");
//       var startDate = formatUtil.getFormatedDateString(startdate,formatUtil.APPLICATION_DATE_FORMAT);
      transactionObj.setTransactionAttribute("frequencyStartDate", transactionData.frequencyStartDate);
    }
    if (transactionData.frequencyEndDate) {
//       var enddate = formatUtil.getDateObjectfromString(transactionData.frequencyEndDate, "YYYY-MM-DD");
//       var endDate = formatUtil.getFormatedDateString(enddate, formatUtil.APPLICATION_DATE_FORMAT);
      transactionObj.setTransactionAttribute("frequencyEndDate", transactionData.frequencyEndDate);
    }
    
    if (transactionData.scheduledDate) {
      transactionObj.setTransactionAttribute("scheduledDate",transactionData.scheduledDate);
    }
    
    if (transactionData.numberOfRecurrences) {
      transactionObj.setTransactionAttribute("numberOfRecurrences", transactionData.numberOfRecurrences);
    }
    
    if (transactionData.fromAccountName) {
      transactionObj.setTransactionAttribute("fromAccountName", transactionData.fromAccountName);
    }
    
    if (transactionData.transactionType) {
      transactionObj.setTransactionAttribute("transactionType", transactionData.transactionType);
    }

    if (transactionData.fromAccountNumber) {
      transactionObj.setTransactionAttribute("fromAccountNumber", transactionData.fromAccountNumber);
    }
    
    if (transactionData.transactionsNotes) {
      transactionObj.setTransactionAttribute("transactionsNotes", transactionData.transactionsNotes);
    }
    var navMan = applicationManager.getNavigationManager();
    
    navMan.navigateTo("frmBillPayAmount");
  };
  
  PresentationController_Tablet.prototype.navToVerifyDetailsWithoutAccountNum = function(formName) {  
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("accountNumber", "");
    recipientsManager.setAttributePayee("reEnterAccountNumber", "");
    recipientsManager.setAttributePayee("isPayeeWithOutAccNum", "true");  
    self.commonFunctionForNavigation(formName); 
  };
  
  PresentationController_Tablet.prototype.getIsPayeeWithOutAccNum = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().isPayeeWithOutAccNum;
  };

  PresentationController_Tablet.prototype.payeeSearch = function(searchText) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.fetchPayeeSuggestions(searchText, self.payeeSearchPresentationSuccessCallback, self.payeeSearchPresentationErrorCallback);
  };
  
  PresentationController_Tablet.prototype.payeeSearchPresentationSuccessCallback = function(res) {
    kony.print("*****************Success in payeeSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmBillPaySearchPayee', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  
  PresentationController_Tablet.prototype.payeeSearchPresentationErrorCallback = function(error) {
    self.handleError(error, "*******************Error in payeeSearch");
  };  
  
  PresentationController_Tablet.prototype.navTofrmZipCode = function(billerDetails, formName) {  
    var address = self.getAddressJSON(billerDetails);
    var recipientsManager = applicationManager.getRecipientsManager();
    address.zipCode = "";
    recipientsManager.setBillPayPayeeAddressDetails(address);
    recipientsManager.setAttributePayee("isManuallyAdded", "false");
    recipientsManager.setAttributePayee("billerCategoryName", billerDetails.billerCategoryName);
    recipientsManager.setAttributePayee("payeeName", billerDetails.billerName);
    self.commonFunctionForNavigation(formName); 
  };
  
  PresentationController_Tablet.prototype.getAddressJSON = function(payeeData) {  
    var address = {};
    var address1 = payeeData.address.split(",");
    var length = address1.length;
    var mid = Math.floor(length / 2);
    var i , addressline1 = "";
    var addressline2 = "";
    if (length == 1) {
      addressline1=address1[0];
    } else {
      for	(i = 0; i <= mid; i++) {
        addressline1 += address1[i] + ",";
      }
      for	(i = mid + 1; i < length; i++) {
        addressline2 += address1[i] + ",";
      }
      addressline1 = addressline1.slice(0, -1);
      addressline2 = addressline2.slice(0, -1);
    }
    address.addressLine1 = addressline1 && addressline1 !== ""
      										 ? addressline1
    											 : (payeeData.street && payeeData.street !== "")
      												? payeeData.street
    													: "";
    address.addressLine2 = (addressline2 && addressline2 !== "") ? addressline2 : "";
    address.cityName = payeeData.city && payeeData.city !== "" ? payeeData.city : "";
    address.state = payeeData.state && payeeData.state!== "" ? payeeData.state : "";
    address.zipCode = payeeData.zipCode && payeeData.zipCode !== "" ? payeeData.zipCode : "";
    return address;
  };
  
  PresentationController_Tablet.prototype.getBillPayBillerCategory = function() {     
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().billerCategoryName;
  };
  
  PresentationController_Tablet.prototype.navToRelationNumber = function(formName) {  
    self.commonFunctionForNavigation(formName); 
  };
  
  PresentationController_Tablet.prototype.navToBillPayAccNumberSearchFlow=function(formName) {  
    self.commonFunctionForNavigation(formName); 
  };
  
  PresentationController_Tablet.prototype.setBillPayZipCode = function(zipCode) {     
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.setAttributePayee("zipCode", zipCode);
  };
  
  PresentationController_Tablet.prototype.setBillPayAccountNumber = function(relationNumber) {     
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.setAttributePayee("accountNumber", relationNumber);
  };
  
  PresentationController_Tablet.prototype.navToPhoneNumber= function(payeeRelNum, formName) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber", payeeRelNum);
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.navToPolicyNumber = function(payeeRelNum,formName) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber", payeeRelNum);
    self.commonFunctionForNavigation(formName);
  };
  
  PresentationController_Tablet.prototype.setBillPayPhoneNumber = function(phoneNumber) {     
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("phone", phoneNumber);
  };
  
  PresentationController_Tablet.prototype.getTransObject = function() {
    var transMan = applicationManager.getTransactionManager();
    var obj = transMan.getTransactionObject();
    return obj;
  };
  
  PresentationController_Tablet.prototype.getIndexForDuration = function() {
    var index;
    var transactionManager = applicationManager.getTransactionManager();
    if (transactionManager.getTransactionObject().frequencyEndDate) {
      index = 0;
    } else if (transactionManager.getTransactionObject().scheduledDate) {
      index = 1;
    }
      
    return index;
  };
  
  PresentationController_Tablet.prototype.getBillPayZipCode = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().zipCode;
  };
  
  PresentationController_Tablet.prototype.getBillPayPhoneNumber = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().phone;
  };
  
  PresentationController_Tablet.prototype.getAvailableFrequencyType = function() {
    var transactionManager = applicationManager.getTransactionManager();
    return transactionManager.getAvailableFrequencyType();
  };

  PresentationController_Tablet.prototype.repeatTransaction = function(transactionData) {
    var formatUtil = applicationManager.getFormatUtilManager();
    var transactionObj = applicationManager.getTransactionManager();
    if (transactionData.payeeId) {
      transactionObj.setTransactionAttribute("payeeId",transactionData.payeeId);
    }
      
    if (transactionData.amount) {
      var amount = formatUtil.deFormatAbsoluteAmount(transactionData.amount);
      transactionObj.setTransactionAttribute("amount", amount);
    }
    
    if (transactionData.frequencyType) {
      transactionObj.setTransactionAttribute("frequencyType", transactionData.frequencyType);
    }
    
    if (transactionData.isScheduled) {
      var isScheduled = transactionData.isScheduled === "true";
      transactionObj.setTransactionAttribute("isScheduled", isScheduled ? "1" : "0");
    }
    
    if (transactionData.payeeNickName) {
      transactionObj.setTransactionAttribute("payeeNickName", transactionData.payeeNickName);
    }

    if (transactionData.toAccountName) {
      transactionObj.setTransactionAttribute("toAccountName", transactionData.toAccountName);
    }
    
    if (transactionData.frequencyStartDate) {
      var startdate = formatUtil.getDateObjectfromString(transactionData.frequencyStartDate, "YYYY-MM-DD");
      var startDate= formatUtil.getFormatedDateString(startdate, formatUtil.APPLICATION_DATE_FORMAT);
      transactionObj.setTransactionAttribute("frequencyStartDate", startDate);
    }
    
    if (transactionData.frequencyEndDate) {
      var enddate = formatUtil.getDateObjectfromString(transactionData.frequencyEndDate, "YYYY-MM-DD");
      var endDate = formatUtil.getFormatedDateString(enddate, formatUtil.APPLICATION_DATE_FORMAT);
      transactionObj.setTransactionAttribute("frequencyEndDate", endDate);
    }
    
    if (transactionData.transactionDate) {
      transactionObj.setTransactionAttribute("scheduledDate", transactionData.transactionDate);
    }
    
    if (transactionData.numberOfRecurrences) {
      transactionObj.setTransactionAttribute("numberOfRecurrences", transactionData.numberOfRecurrences);
    }
    if(transactionData.fromAccountName) {
      transactionObj.setTransactionAttribute("fromAccountName", transactionData.fromAccountName);
    }

    if (transactionData.transactionType) {
      transactionObj.setTransactionAttribute("transactionType", transactionData.transactionType);
    }
    
    if (transactionData.fromAccountNumber) {
      transactionObj.setTransactionAttribute("fromAccountNumber", transactionData.fromAccountNumber);
    }

    var navMan = applicationManager.getNavigationManager();
    
    navMan.navigateTo("frmBillPayAmount");
  };
  
  PresentationController_Tablet.prototype.deleteTransaction = function(data) {
    var criteria = {
      transactionId: data
    };
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.deleteTransaction(criteria, self.deleteSuccess, self.deleteError);
  };
  
  PresentationController_Tablet.prototype.deleteRecurrenceBP = function(data) {
    var criteria = {
      transactionId: data
    };
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.deleteRecurrenceTransaction(criteria, self.deleteSuccess, self.deleteError);

  };
  PresentationController_Tablet.prototype.deleteSuccess = function(res) {
    var navMan = applicationManager.getNavigationManager();
    self.fetchBills();
    var data = {
      "res": res,
      type: "delete"
    };
    
    navMan.setCustomInfo("frmBillPay", data);
  };
  
  PresentationController_Tablet.prototype.deleteError = function(err) {
    if (err.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage(handleMode, err);
    } else {
      self.deleteSuccess(err);
    }
  };

  PresentationController_Tablet.prototype.showFromAccounts = function() {
    var accMan = applicationManager.getAccountManager();
    accMan.fetchInternalAccounts(self.fetchFromAccountsPresentationSuccessCallBack, self.fetchFromAccountsPresentationErrorCallBack);
  };
  
  PresentationController_Tablet.prototype.fetchFromAccountsPresentationSuccessCallBack = function(res) {
    //
  };
  
  PresentationController_Tablet.prototype.fetchFromAccountsPresentationErrorCallBack = function(error) {
		self.handleError(error, "error in showFromAccountsPresentationErrorCallBack");
  };
  
  PresentationController_Tablet.prototype.updateEBillStatus = function(rec, status) {
    var recipientsManager = applicationManager.getRecipientsManager();
    if(!status) {
      recipientsManager.modifyEBillStatus(rec, self.updateActiveEBillSuccess, self.updateActiveEBillError);
    } else {
      recipientsManager.modifyEBillStatus(rec, self.updateDeactiveEBillSuccess, self.updateDeactiveEBillError);   
    }
  };

  PresentationController_Tablet.prototype.updateActiveEBillSuccess = function(res) {
    var controller = _kony.mvc.GetController('frmBillPayPayeeDetails', true);
    controller.deactiveEbillStatus(); 
  };
  
  PresentationController_Tablet.prototype.updateActiveEBillError = function(error) {
    self.handleError(error, "error in updateEBillStatusPresentationErrorCallBack");
  };
  
  PresentationController_Tablet.prototype.updateDeactiveEBillSuccess = function(res) {
    var controller = _kony.mvc.GetController('frmBillPayPayeeDetails', true);
    controller.activeEbillStatus();  
  };
  
  PresentationController_Tablet.prototype.updateDeactiveEBillError = function(error) {
    self.handleError(error, "error in updateEBillStatusPresentationErrorCallBack");
  };
  
  PresentationController_Tablet.prototype.viewallPayments = function(billPayeeDetails) {
    var record = {payeeId: billPayeeDetails.payeeId, limit: 12};
    var navMan = applicationManager.getNavigationManager(); 
    navMan.setCustomInfo("frmBillPayAllPayments", billPayeeDetails);
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.fetchPayeeBill(record, self.fetchPayeeBillSuccess, self.fetchPayeeBillError);
  };
  
  PresentationController_Tablet.prototype.fetchPayeeBillSuccess = function(data) {
    var navMan = applicationManager.getNavigationManager(); 
    var formatUtil = applicationManager.getFormatUtilManager();
    var navData = {};
    navData.billPayeeDueDetails = navMan.getCustomInfo("frmBillPayAllPayments");

    
    data.forEach(function(item) {
      item.amount = formatUtil.formatAmountandAppendCurrencySymbol(item.amount);
      var billdateobj = formatUtil.getDateObjectfromString(item.billPaidDate, "YYYY-MM-DD");
      item.scheduledDate = formatUtil.getFormatedDateString(billdateobj, formatUtil.APPLICATION_DATE_FORMAT);
      item.showDate = item.scheduledDate;  
      item.empty = "konylogo.png";
    });
      
    navData.billData=data;
    navMan.setCustomInfo("frmBillPayAllPayments", navData);
    navMan.navigateTo("frmBillPayAllPayments");
  };
  
  PresentationController_Tablet.prototype.fetchPayeeBillError = function(error) {
    self.handleError(error, "error in fetchPayeeBills");
  };
  
  PresentationController_Tablet.prototype.fetchAllPayeesAfterUpdatingPayeeStatus = function() {
    var recipientsManager = applicationManager.getRecipientsManager();
    var criteria= {
      offset: "0",
      limit: "10",
      searchString: "",
      sortBy: "",
      order: ""
    };
    recipientsManager.fetchPayeesList(criteria, self.fetchAllPayeesAfterUpdatingPayeeStatusPresentationSuccess, self.fetchAllPayeesAfterUpdatingPayeeStatusPresentationError);
  };
  
  PresentationController_Tablet.prototype.fetchAllPayeesAfterUpdatingPayeeStatusPresentationSuccess = function(successRes) {
    
  };
  
  PresentationController_Tablet.prototype.fetchAllPayeesAfterUpdatingPayeeStatusPresentationError = function(errorRes) {
    
  };

  return PresentationController_Tablet;
});