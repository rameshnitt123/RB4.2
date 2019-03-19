define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {

    function BillPay_PresentationController() {
      scope_BillPayPresentationController=this;
      isDeleteSuccess=false;
      isUpdateAddressSuccess=false;
      isUpdateNickNameSuccess=false;
      entryPoint="";
      isPayeeAdded=false;
	  this.currLatitude ="";
      this.currLongitude ="";
      scope_BillPayPresentationController.duration="";
       /**   numberOfAsyncForBills
          *  1.getUsersScheduledBill
          *  2.getUserCompletedBillHistory
          *  3.getBills
            */
      scope_BillPayPresentationController.numberOfAsyncForBills=3;
      /**   numberOfAsyncForPayees
          *  1.getPayee
          *  2.getRecentPayee
            */
      scope_BillPayPresentationController.numberOfAsyncForPayees=2;
      kony.mvc.Presentation.BasePresenter.call(this);
      this.asyncManager = new AsyncManager();
    }

    inheritsFrom(BillPay_PresentationController, kony.mvc.Presentation.BasePresenter);

    BillPay_PresentationController.prototype.initializePresentationController = function() {
        
    };
    BillPay_PresentationController.prototype.getDuration=function()
    {
      return scope_BillPayPresentationController.duration;
    };
   BillPay_PresentationController.prototype.setDuration=function(duration)
    {
      scope_BillPayPresentationController.duration=duration;
    };
    BillPay_PresentationController.prototype.clearfields=function()
    {
      scope_BillPayPresentationController.duration="";
    };
    BillPay_PresentationController.prototype.fetchBills = function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      scope_BillPayPresentationController.asyncManager.initiateAsyncProcess(scope_BillPayPresentationController.numberOfAsyncForBills);
      scope_BillPayPresentationController.getScheduledBills();
      kony.print("To Maintain gap b/w services 1");
      kony.print("To Maintain gap b/w services 2");
      kony.print("To Maintain gap b/w services 3");
      kony.print("To Maintain gap b/w services 4");
      scope_BillPayPresentationController.getPostedBills();
      scope_BillPayPresentationController.getPendingBills();
    };
  
    BillPay_PresentationController.prototype.getScheduledBills = function(){
      var transactionManager=applicationManager.getTransactionManager();
      var criteria ={
        "sortBy":"scheduledDate",
        "order":"desc"
      };
    transactionManager.fetchUserBillPayScheduledTransactions(criteria,scope_BillPayPresentationController.getScheduledBillsSuccessCallback,scope_BillPayPresentationController.getScheduledBillsErrorCallback);
    };
  
    BillPay_PresentationController.prototype.getScheduledBillsSuccessCallback = function(successRes){
       scope_BillPayPresentationController.asyncManager.setSuccessStatus(0,successRes);
      if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForBills)){
  //  if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(2)){
          scope_BillPayPresentationController.navToBillPayLanding();
      }
    };
  
    BillPay_PresentationController.prototype.getScheduledBillsErrorCallback = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorRes["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
      else{
        scope_BillPayPresentationController.asyncManager.setErrorStatus(0,errorRes);
      }
    };
  
    BillPay_PresentationController.prototype.getPostedBills = function(){
      var transactionManager=applicationManager.getTransactionManager();
      var criteria ={
        "offset":0,
        "limit":10,
        "sortBy":"transactionDate",
        "order":"desc"
      };
    transactionManager.fetchUserBillPayPostedTransactions(criteria,scope_BillPayPresentationController.getPostedBillsSuccessCallback,scope_BillPayPresentationController.getPostedBillsErrorCallback);
    };
  
    BillPay_PresentationController.prototype.getPostedBillsSuccessCallback = function(successRes){
       scope_BillPayPresentationController.asyncManager.setSuccessStatus(1,successRes);
      if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForBills)){
    //if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(2)){
          scope_BillPayPresentationController.navToBillPayLanding();
      }
    };
  
    BillPay_PresentationController.prototype.getPostedBillsErrorCallback = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorRes["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
      else{
        scope_BillPayPresentationController.asyncManager.setErrorStatus(0,errorRes);
      }
    };
  
    BillPay_PresentationController.prototype.getPendingBills = function(){
      var billManager=applicationManager.getBillManager();
      var criteria ={
        "sortBy":"billDueDate",
        "order":"desc"
      };
    billManager.fetchUserBillPayPendingTransactions(criteria,scope_BillPayPresentationController.getPendingBillsSuccessCallback,scope_BillPayPresentationController.getPendingBillsErrorCallback);
    };
  
    BillPay_PresentationController.prototype.getPendingBillsSuccessCallback = function(successRes){
       scope_BillPayPresentationController.asyncManager.setSuccessStatus(2,successRes);
      if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForBills)){
          scope_BillPayPresentationController.navToBillPayLanding();
      }
    };
  
    BillPay_PresentationController.prototype.getPendingBillsErrorCallback = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorRes["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
      else{
        scope_BillPayPresentationController.asyncManager.setErrorStatus(0,errorRes);
      }
    };
  
    BillPay_PresentationController.prototype.navToBillPayLanding = function(){
      var navMan = applicationManager.getNavigationManager();
      var formatUtil=applicationManager.getFormatUtilManager();
      var bills = {};
      var data = navMan.getCustomInfo("frmBillPay");
      if(data!==undefined&&data!==null)
        bills = data;
      bills.scheduledBills = scope_BillPayPresentationController.asyncManager.getData(0);
      bills.postedBills = scope_BillPayPresentationController.asyncManager.getData(1);
      bills.pendingBills = scope_BillPayPresentationController.asyncManager.getData(2);
    for(var i = 0;i<2;i++)
        scope_BillPayPresentationController.asyncManager.clearCallStatus(i);
      for(var i = 0; i<bills.scheduledBills.length; i++){
        var billdateobj=formatUtil.getDateObjectfromString(bills.scheduledBills[i]["scheduledDate"],"YYYY-MM-DD");
        bills.scheduledBills[i]["scheduledDate"]= formatUtil.getFormatedDateString(billdateobj,formatUtil.getApplicationDateFormat());
        bills.scheduledBills[i]["showDate"] = bills.scheduledBills[i]["scheduledDate"];
        bills.scheduledBills[i]["amount"]=formatUtil.formatAmountandAppendCurrencySymbol(bills.scheduledBills[i]["amount"],bills.scheduledBills[i]["transactionCurrency"]);
          if(bills.scheduledBills[i]["eBillSupport"]==="true")
            {
           if(bills.scheduledBills[i]["eBillEnable"]==="1")
            bills.scheduledBills[i]["image"]={"src":"ebill.png","isVisible":true};
          else
            bills.scheduledBills[i]["image"]={"src":"ebillinactive.png","isVisible":true};
            }
          else
            bills.scheduledBills[i]["image"]={"src":"","isVisible":false};
      }
      for (var i = 0; i < bills.pendingBills.length; i++) {
            var billdateobj = formatUtil.getDateObjectfromString(bills.pendingBills[i]["billDueDate"], "YYYY-MM-DD");
            bills.pendingBills[i]["transactionDate"] = formatUtil.getFormatedDateString(billdateobj, formatUtil.getApplicationDateFormat())
            bills.pendingBills[i]["showDate"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.DueOn")+" "+bills.pendingBills[i]["transactionDate"];
            bills.pendingBills[i]["payeeNickName"]=bills.pendingBills[i]["payeeName"];
            bills.pendingBills[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(bills.pendingBills[i]["dueAmount"],bills.pendingBills[i]["currencyCode"]);
            bills.pendingBills[i]["image"]={"src":"ebill.png","isVisible":true};
            var paidDate = formatUtil.getDateObjectfromString(bills.pendingBills[i]["paidDate"], "YYYY-MM-DD");
            var str = formatUtil.getFormatedDateString(paidDate, formatUtil.getApplicationDateFormat())
            var paidAmount = formatUtil.formatAmountandAppendCurrencySymbol(bills.pendingBills[i]["paidAmount"],bills.pendingBills[i]["currencyCode"]);
            bills.pendingBills[i]["fromAccountName"]=paidAmount+" "+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.eBill.paidOn")+" "+str;
            bills.pendingBills[i]["flxViewBill"]="flxViewBill";
            bills.pendingBills[i]["flxBillPay"]="flxBillPay";   

        }
      for(var i = 0; i<bills.postedBills.length; i++){
        var billdateobj=formatUtil.getDateObjectfromString(bills.postedBills[i]["transactionDate"],"YYYY-MM-DD");
        bills.postedBills[i]["transactionDate"]= formatUtil.getFormatedDateString(billdateobj,formatUtil.getApplicationDateFormat())
        bills.postedBills[i]["showDate"] = bills.postedBills[i]["transactionDate"];
        bills.postedBills[i]["amount"]=formatUtil.formatAmountandAppendCurrencySymbol(bills.postedBills[i]["amount"],bills.postedBills[i]["transactionCurrency"]);
        if(bills.postedBills[i]["eBillSupport"]==="true")
            {
           if(bills.postedBills[i]["eBillEnable"]==="1")
            bills.postedBills[i]["image"]={"src":"ebill.png","isVisible":true};
          else
            bills.postedBills[i]["image"]={"src":"ebillinactive.png","isVisible":true};
            }
          else
            bills.postedBills[i]["image"]={"isVisible":false};
      }
      navMan.setCustomInfo("frmBillPay",bills);
      navMan.navigateTo("frmBillPay");
    };
    BillPay_PresentationController.prototype.fetchToPayees = function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      scope_BillPayPresentationController.asyncManager.initiateAsyncProcess(scope_BillPayPresentationController.numberOfAsyncForPayees);
      scope_BillPayPresentationController.fetchToAllPayees();
      scope_BillPayPresentationController.fetchToRecentPayees();
    };
  BillPay_PresentationController.prototype.viewBill = function(URL){
     kony.application.openURL(URL);
    };
  
 BillPay_PresentationController.prototype.payBill = function(payeeId){
    var payeeManager = applicationManager.getPayeeManager();
    var data = payeeManager.fetchPayeeDetailsById(payeeId);
    scope_BillPayPresentationController.navAfterSelectPayee(data);
   
    };  

    BillPay_PresentationController.prototype.fetchToRecentPayees = function(){  
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.fetchRecentBillPayees(scope_BillPayPresentationController.fetchToRecentPayeesPresentationSuccess, scope_BillPayPresentationController.fetchToPayeesPresentationError);
    };

     BillPay_PresentationController.prototype.fetchToRecentPayeesPresentationSuccess = function(successRes){
      scope_BillPayPresentationController.asyncManager.setSuccessStatus(0,successRes);
      if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForPayees)){
          scope_BillPayPresentationController.commonFunctionForNavigation("frmBillPaySelectPayee");
        }
    };
    BillPay_PresentationController.prototype.fetchToPayeesPresentationError = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorRes["isServerUnreachable"])
          applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
        else{
          kony.print(errorRes);
        }
      };
    BillPay_PresentationController.prototype.fetchToAllPayees = function(){  
      var recipientsManager = applicationManager.getRecipientsManager();
      var criteria= {
        "offset": "0",
        "limit": "10",
        "searchString":"",
        "sortBy": "",
        "order": ""
      };
      recipientsManager.fetchPayeesList(criteria,scope_BillPayPresentationController.fetchToAllPayeesPresentationSuccess, scope_BillPayPresentationController.fetchToAllPayeesPresentationError);
    };
      BillPay_PresentationController.prototype.fetchToAllPayeesPresentationSuccess = function(successRes){
        scope_BillPayPresentationController.asyncManager.setSuccessStatus(1,successRes);
        if(scope_BillPayPresentationController.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForPayees)){
            scope_BillPayPresentationController.commonFunctionForNavigation("frmBillPaySelectPayee");
          }
      };
      BillPay_PresentationController.prototype.fetchToAllPayeesPresentationError = function(errorRes){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorRes["isServerUnreachable"])
          applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
        else{
          kony.print(errorRes);
        }
      };
    
    BillPay_PresentationController.prototype.fetchAllPayees = function(){
      var recipientsManager = applicationManager.getRecipientsManager();
      var criteria= {
        "offset": "0",
        "limit": "10",
        "searchString":"",
        "sortBy": "",
        "order": ""
      };
      recipientsManager.fetchPayeesList(criteria,scope_BillPayPresentationController.fetchAllPayeesPresentationSuccess, scope_BillPayPresentationController.fetchAllPayeesPresentationError);
    };
    BillPay_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  BillPay_PresentationController.prototype.fetchAllPayeesPresentationSuccess = function(successRes){
    //scope_BillPayPresentationController.getAllPayees();
    scope_BillPayPresentationController.commonFunctionForNavigation("frmBillPayAllPayees");
  };
    BillPay_PresentationController.prototype.fetchAllPayeesPresentationError = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorRes["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
      else{
        kony.print(errorRes);
      }
  };
  BillPay_PresentationController.prototype.getAllBillPayPayees = function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getAllBillPayPayees();
  };
  BillPay_PresentationController.prototype.getRecentBillPayees = function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getRecentBillPayees();
  };
  BillPay_PresentationController.prototype.navToPayeeDetails= function(selectedPayeeDetails,formName){   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeData(selectedPayeeDetails);
    if (selectedPayeeDetails.eBillSupport === "true" && selectedPayeeDetails.eBillStatus === "1") {
            var billManager = applicationManager.getBillManager();
            var record={};
            record.payeeId=selectedPayeeDetails.payeeId;
            billManager.fetchPayeeDueBill(record, success, scope_BillPayPresentationController.getPayeeBillsPresentationError);
            function success(res){
                if(res.length !== 0)
                {
              	
                var formatUtil=applicationManager.getFormatUtilManager();
        	    var billduedateobj=formatUtil.getDateObjectfromString(res[0].billDueDate,"YYYY-MM-DD");
          		res[0].billDueDate= formatUtil.getFormatedDateString(billduedateobj,formatUtil.getApplicationDateFormat());
	      		var paiddateobj=formatUtil.getDateObjectfromString(res[0].paidDate,"YYYY-MM-DD");
          		res[0].paidDate= formatUtil.getFormatedDateString(paiddateobj,formatUtil.getApplicationDateFormat());
          		res[0].dueAmount=formatUtil.formatAmountandAppendCurrencySymbol(res[0].dueAmount,res[0].currencyCode);
	      		res[0].paidAmount=formatUtil.formatAmountandAppendCurrencySymbol(res[0].paidAmount,res[0].currencyCode);
                }
                var navMan = applicationManager.getNavigationManager();
    			navMan.setCustomInfo("frmBillPayPayeeDetails",res); 
    			scope_BillPayPresentationController.commonFunctionForNavigation(formName);   
            };
        }else{
    scope_BillPayPresentationController.commonFunctionForNavigation(formName);  
    }
  };
   BillPay_PresentationController.prototype.getPayeeBillsPresentationSuccess=function(res)
  {
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmBillPayPayeeDetails",res); 
    scope_BillPayPresentationController.commonFunctionForNavigation(formName);   
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  BillPay_PresentationController.prototype.getPayeeBillsPresentationError=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in getPayeeBillsPresentationErrorCallBack");
  };  
  BillPay_PresentationController.prototype.setBillPayPayeeData= function(selectedPayeeDetails){   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeData(selectedPayeeDetails);
  };
  BillPay_PresentationController.prototype.getPayeeDetails= function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData();
  };
  BillPay_PresentationController.prototype.deleteBillPayPayee= function(){
    var payeeDetails=this.getPayeeDetails();
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.deletePayeeById(payeeDetails.payeeId,scope_BillPayPresentationController.deleteBillPayPayeePresentationSuccess, scope_BillPayPresentationController.deleteBillPayPayeePresentationError);
  };
  BillPay_PresentationController.prototype.deleteBillPayPayeePresentationSuccess= function(successRes){
    scope_BillPayPresentationController.isDeleteSuccess=true;
    scope_BillPayPresentationController.clearBillPayPayeeData();
    scope_BillPayPresentationController.fetchAllPayees();
  };
  BillPay_PresentationController.prototype.deleteBillPayPayeePresentationError= function(errorRes){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (errorRes["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
    else{
      kony.print("error in delete payee");
    }
  };
  BillPay_PresentationController.prototype.updatePayeeAddress= function(address){
   var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.updatePayeeDetails(address,scope_BillPayPresentationController.updatePayeeAddressPresentationSuccess, scope_BillPayPresentationController.updatePayeeAddressPresentationError);
  };
    BillPay_PresentationController.prototype.updatePayeeAddressPresentationSuccess= function(successRes){
    scope_BillPayPresentationController.isUpdateAddressSuccess=true;
    scope_BillPayPresentationController.clearBillPayPayeeData();
    scope_BillPayPresentationController.fetchAllPayees();
  };
  BillPay_PresentationController.prototype.updatePayeeAddressPresentationError= function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditAddress', true);
      controller.bindGenericError(err.errorMessage);  
    }
  };
    BillPay_PresentationController.prototype.setFlowType= function(type){   
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setFlowType(type);
  };
   BillPay_PresentationController.prototype.getFlowType= function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getFlowType();
  };
  BillPay_PresentationController.prototype.updatePayeeNickName= function(nickname){
   var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.updatePayeeDetails(nickname,scope_BillPayPresentationController.updatePayeeNickNamePresentationSuccess, scope_BillPayPresentationController.updatePayeeNickNamePresentationError);
  };  
    BillPay_PresentationController.prototype.updatePayeeNickNamePresentationSuccess= function(successRes){
    scope_BillPayPresentationController.isUpdateNickNameSuccess=true;
    scope_BillPayPresentationController.clearBillPayPayeeData();
    scope_BillPayPresentationController.fetchAllPayees();      
  };  
  BillPay_PresentationController.prototype.updatePayeeNickNamePresentationError= function(err){
    kony.print("error in update nick name payee"); 
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditName', true);
      controller.bindGenericError(err.errorMessage);  
    }
  };
  BillPay_PresentationController.prototype.clearBillPayPayeeData= function(){
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.clearBillPayPayeeData();
  };
  BillPay_PresentationController.prototype.navToPayeeAddressDetails= function(payeeName,formName){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("payeeName",payeeName);
    this.commonFunctionForNavigation(formName);
  };
   BillPay_PresentationController.prototype.getBillPayPayeeName= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
   return recipientsManager.getBillPayPayeeData().payeeName;
  };
    BillPay_PresentationController.prototype.navToBillPayPayeeAccNum= function(address,formName){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setBillPayPayeeAddressDetails(address);
    this.commonFunctionForNavigation(formName);
  };
  BillPay_PresentationController.prototype.getPayeeAddressDetails= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeAddressDetails();
  };
    BillPay_PresentationController.prototype.navToReenterAccNum= function(payeeAccNum,formName){
      var validationUtility = applicationManager.getValidationUtilManager();
      if(validationUtility.isValidAccountNumber(payeeAccNum)){
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setAttributePayee("accountNumber",payeeAccNum);
        recipientsManager.setAttributePayee("isPayeeWithOutAccNum","false");
        this.commonFunctionForNavigation(formName);
      }
      else{
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
        controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidAccountNumber"));
      }
  };
     BillPay_PresentationController.prototype.getBillPayAccountNumber= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
   return recipientsManager.getBillPayPayeeData().accountNumber;
  };
   BillPay_PresentationController.prototype.navToVerifyDetails= function(payeeAccNum,formName){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber",payeeAccNum);
    this.commonFunctionForNavigation(formName);
  };
     BillPay_PresentationController.prototype.getBillPayReEnterAccountNumber= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
   return recipientsManager.getBillPayPayeeData().reEnterAccountNumber;
  };
    BillPay_PresentationController.prototype.createBillPayPayee= function(nickname,nameOnBill){
    var recipientsManager = applicationManager.getRecipientsManager();
     var payeeData=this.getPayeeDetails();
      payeeData.payeeNickName=nickname;
      payeeData.nameOnBill=nameOnBill;
    recipientsManager.createPayee(payeeData,scope_BillPayPresentationController.createBillPayPayeePresentationSuccess, scope_BillPayPresentationController.createBillPayPayeePresentationError);
    };  
    BillPay_PresentationController.prototype.createBillPayPayeePresentationSuccess= function(successRes){
      scope_BillPayPresentationController.isPayeeAdded=true;
      scope_BillPayPresentationController.clearBillPayPayeeData();
      var navManager=applicationManager.getNavigationManager();
      if(navManager.getEntryPoint("createBillPayPayee")==="frmBillPayAllPayees"){
        scope_BillPayPresentationController.fetchAllPayees();
      }
      else if(navManager.getEntryPoint("createBillPayPayee")==="frmBillPaySelectPayee")
      {
        //scope_BillPayPresentationController.fetchToPayees(); 
        var payeeManager = applicationManager.getPayeeManager();
        payeeManager.fetchPayeesList(function(){
          var selectedPayee = payeeManager.fetchPayeeDetailsById(successRes.payeeId);
          scope_BillPayPresentationController.navAfterSelectPayee(selectedPayee);},function(){});
      }
  };  
  BillPay_PresentationController.prototype.createBillPayPayeePresentationError= function(err){
    kony.print("error in create payee");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    { 
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if(err["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      else{
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayVerifyDetails', true);
        controller.bindGenericError(err.errorMessage);  
      }//Sample code is to show toast message. If your scenario is to navigate to other form, Include navigation code in else part
    }
  };
   BillPay_PresentationController.prototype.addressSearch = function(searchText) {
	 var locationManager = applicationManager.getLocationManager();
     if(scope_BillPayPresentationController.currLatitude && scope_BillPayPresentationController.currLongitude){
          searchText.currLongitude = scope_BillPayPresentationController.currLongitude;
           searchText.currLatitude = scope_BillPayPresentationController.currLatitude;
         locationManager.fetchAddressSuggestions(searchText,scope_BillPayPresentationController.addressSearchPresentationSuccessCallback, scope_BillPayPresentationController.addressSearchPresentationErrorCallback);
    
     }
	else{   
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.location.getCurrentPosition(geoLocationSuccessCallBack,geoLocationErrorCallBack, positionoptions);
    function geoLocationSuccessCallBack(response) {
      try {
        searchText.currLatitude = response.coords.latitude;  
		scope_BillPayPresentationController.currLatitude = response.coords.latitude;  
      searchText.currLongitude = response.coords.longitude;    
	  scope_BillPayPresentationController.currLongitude = response.coords.longitude;  
      locationManager.fetchAddressSuggestions(searchText,scope_BillPayPresentationController.addressSearchPresentationSuccessCallback, scope_BillPayPresentationController.addressSearchPresentationErrorCallback);
        
      } catch (err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    }
    function geoLocationErrorCallBack(err) {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIphone = deviceUtilManager.isIPhone();
      applicationManager.getPresentationUtility().dismissLoadingScreen();

      if (err.code == 1) {
        var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
        applicationManager.getDataProcessorUtility().showToastMessageError(scope,i18nKey);
      }
      if (err.code == 3 && !isIphone) {
        var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
        applicationManager.getDataProcessorUtility().showToastMessageError(scope,i18n_timeOut);
      }
      if (err.code == 2 && !isIphone) {
        var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
        kony.ui.Alert(i18n_turnOnLocationAlert, onClickSettingsOrCancelHandler, constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
      }
      function onClickSettingsOrCancelHandler(response){
        if (response === true) {
          kony.print("User not willing to on GPS");
          locationManager.fetchAddressSuggestions(searchText,scope_BillPayPresentationController.addressSearchPresentationSuccessCallback, scope_BillPayPresentationController.addressSearchPresentationErrorCallback);
        } else {
          LocationSettings.open();
        }
      }
    }
    }
  };
  BillPay_PresentationController.prototype.addressSearchPresentationSuccessCallback = function(res) {
    kony.print("*****************Success in addressSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditAddress', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  BillPay_PresentationController.prototype.addressSearchPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else{
      kony.print("*******************Error in addressSearch");
    }
  };

  BillPay_PresentationController.prototype.navToFormBasedOnEntryPoint= function(entryPoint){
      var navMan=applicationManager.getNavigationManager();
      var formName=navMan.getEntryPoint(entryPoint);
      this.clearBillPayPayeeData();
      this.commonFunctionForNavigation(formName);
  };
   BillPay_PresentationController.prototype.switchFrequencyType=function(Index)
  {
     var transactionObj = applicationManager.getTransactionManager();
     var frequencyTypes= transactionObj.getAvailableFrequencyType();
     var navMan=applicationManager.getNavigationManager();
     var forUtility=applicationManager.getFormatUtilManager();
     switch(Index)
     {
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow"):      
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.ONCE);  
         transactionObj.setTransactionAttribute("isScheduled","0");
         transactionObj.setTransactionAttribute("numberOfRecurrences","");
         var dateobj=new Date();  
         //var formatedDate = forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());   
         var formatedDate = (dateobj.getMonth() + 1) + "/" + dateobj.getDate() + "/" + dateobj.getFullYear()
         transactionObj.setTransactionAttribute("scheduledDate",formatedDate);
         transactionObj.setTransactionAttribute("frequencyStartDate","");
         transactionObj.setTransactionAttribute("frequencyEndDate",""); 
         navMan.navigateTo("frmBillPayConfirmation");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime"):
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.ONCE);
         transactionObj.setTransactionAttribute("isScheduled","1");
         var startDate = transactionObj.getTransactionObject().scheduledDate;
         navMan.navigateTo("frmBillPayStartDate");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Daily"): 
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.DAILY);
         transactionObj.setTransactionAttribute("isScheduled","1");
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Weekly"):
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.WEEKLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
         
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.EveryTwoWeeks"): 
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.EVERYTWOWEEKS);
         transactionObj.setTransactionAttribute("isScheduled","1");
        
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Monthly"): 
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.MONTHLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
        
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Quaterly"): 
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.QUARTERLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
         
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.HalfYearly"):
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.HALFYEARLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
         
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Yearly"):
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.YEARLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
        
         navMan.navigateTo("frmBillPayDuration");
         break;
       case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.BiWeekly"):    
         transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.BIWEEKLY);
         transactionObj.setTransactionAttribute("isScheduled","1");
         navMan.navigateTo("frmBillPayDuration");
         break;
       default:
         break;
     }
  };
  /*additional date field to use in  the calendar page in the back flow*/
  	BillPay_PresentationController.prototype.convertCalendarDateToLocaleDate = function(formatedDate){
      var forUtility=applicationManager.getFormatUtilManager();
      var configManager = applicationManager.getConfigurationManager()
      var convertedDate = forUtility.getFormatedDateString(forUtility.getDateObjectFromCalendarString(formatedDate,"MM/DD/YYYY"),configManager.frontendDateFormat[configManager.getLocale()]);
      return convertedDate;
    };
  BillPay_PresentationController.prototype.transferScheduledDate=function(strtDate)
  {
    var formatedDate = strtDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("scheduledDate",formatedDate); 
    transferManager.setTransactionAttribute("scheduledCalendarDate",scope_BillPayPresentationController.convertCalendarDateToLocaleDate(formatedDate));
    var navMan=applicationManager.getNavigationManager();   
    navMan.navigateTo("frmBillPayConfirmation");
  };
  BillPay_PresentationController.prototype.transferScheduledStrtDate=function(strtDate)
  {
    
    var formatedDate = strtDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("frequencyStartDate",formatedDate);
    transferManager.setTransactionAttribute("scheduledDate",formatedDate); 
    transferManager.setTransactionAttribute("scheduledCalendarDate",scope_BillPayPresentationController.convertCalendarDateToLocaleDate(formatedDate));
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmBillPayEndDate",formatedDate);
    navMan.navigateTo("frmBillPayEndDate");
  };
  BillPay_PresentationController.prototype.switchDurationType=function(index)
  {
    var transactionObj = applicationManager.getTransactionManager();
    var frequencyTypes= transactionObj.getAvailableFrequencyType();
    var navMan=applicationManager.getNavigationManager();
    
    switch(index)
        {
               
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"):
                 transactionObj.setTransactionAttribute("numberOfRecurrences","");
                 //transactionObj.setScheduledDate("");
               scope_BillPayPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"));
               var startDate = transactionObj.getTransactionObject().scheduledDate;
                 navMan.navigateTo("frmBillPayStartDate");
                  break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"):
                 transactionObj.setTransactionAttribute("frequencyStartDate",""); 
                 transactionObj.setTransactionAttribute("frequencyEndDate","");
               scope_BillPayPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"));
                 navMan.navigateTo("frmBillPayRecurrence"); 
                  break;               
        } 
  };
   BillPay_PresentationController.prototype.makeATransfer=function(description)
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionManager = applicationManager.getTransactionManager();
    transactionManager.setTransactionAttribute("transactionsNotes",description);
    if(transactionManager.getTransactionObject().transactionId!=""&&transactionManager.getTransactionObject().transactionId!=null)
    {
      var transactionManager = applicationManager.getTransactionManager();
      transactionManager.updateTransaction(transactionManager.getTransactionObject(), this.presentationMakeATransferSuccess,this.presentationMakeATransferError); 
    }
    else
    {
      var transactionManager = applicationManager.getTransactionManager();
      transactionManager.createTransaction(transactionManager.getTransactionObject(), this.presentationMakeATransferSuccess,this.presentationMakeATransferError);
    }
  };

  BillPay_PresentationController.prototype.presentationMakeATransferSuccess=function(resp)
  {
    //Setting Custom Metric Data for BillPay Reports
    //var BillPayReport = applicationManager.getLoggerManager();  
    //BillPayReport.sendCustomMetrics("BILLPAY");
    var navMan=applicationManager.getNavigationManager();
    var data = {};
    var transferManager = applicationManager.getTransactionManager();
    if( navMan.getEntryPoint("payBill") === "frmAccountDetails" ){
      data.type="success";
      data.typeOfTransaction="create";
      data.res = resp;
      navMan.setCustomInfo("frmAccountDetails",data);
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.fetchAccountTransactions(transferManager.getTransactionObject().fromAccountNumber);
    }
    else{
      scope_BillPayPresentationController.fetchBills();
      data.res = resp;
      navMan.setCustomInfo("frmBillPay",data);
    }
    scope_BillPayPresentationController.clearfields();
    transferManager.clearTransferObject();  
  };
 BillPay_PresentationController.prototype.presentationMakeATransferError=function(err)
  {
   if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
   else{
     var navMan=applicationManager.getNavigationManager();
     var data = {};
     var transferManager = applicationManager.getTransactionManager();
     if( navMan.getEntryPoint("payBill") === "frmAccountDetails" ){
       data.type="success";
       data.typeOfTransaction="create";
       data.res = resp;
       navMan.setCustomInfo("frmAccountDetails",data);
       var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
       accountMod.presentationController.fetchAccountTransactions(transferManager.getTransactionObject().fromAccountNumber);
     }
     else{
       scope_BillPayPresentationController.fetchBills();
       data.res = err["errorMessage"];
       navMan.setCustomInfo("frmBillPay",data);
     }
     scope_BillPayPresentationController.clearfields();
     transferManager.clearTransferObject();
   }
  };
BillPay_PresentationController.prototype.updateBillPayFromAcc=function(jsonData){
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.partialUpdateOnUserObj(jsonData,successCallback,failureCallback);
    function successCallback(res){
      res.status = "success";
      var userObj = applicationManager.getUserPreferencesManager();
      userObj.showBillPayFromAccPopup=false;
      if(jsonData["default_account_billPay"]){
        userObj.default_account_billPay = jsonData["default_account_billPay"];
        res.acountUpdated=true;
      }
      var navMan=applicationManager.getNavigationManager();
      navMan.setCustomInfo("frmBillPayAmount",res);
      scope_BillPayPresentationController.commonFunctionForNavigation("frmBillPayAmount"); 
    }
    function failureCallback(err){
      if (err["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      else{
        err.status = "error";
        var navMan=applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBillPayAmount",err);
        scope_BillPayPresentationController.commonFunctionForNavigation("frmBillPayAmount");
      }
    }
  };  BillPay_PresentationController.prototype.cancelCommon=function()
  {
    var transactionObj = applicationManager.getTransactionManager();
    scope_BillPayPresentationController.clearfields();
    transactionObj.clearTransferObject();
    var navMan=applicationManager.getNavigationManager();
    var formName=navMan.getEntryPoint("payBill");
    if(!formName)
      formName = "frmBillPay";
    switch(formName){
      case "frmBillPay" : scope_BillPayPresentationController.fetchBills();
        break;
      case "frmDashBoard" :var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountMod.presentationController.showDashboard();
        break;
        default : navMan.navigateTo(formName);
    }
    navMan.setEntryPoint("payBill","");
  };
  BillPay_PresentationController.prototype.transferScheduledEndDate=function(endDate)
  {
    
    var formatedDate = endDate;
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("frequencyEndDate",formatedDate);
    transferManager.setTransactionAttribute("endCalendarDate",scope_BillPayPresentationController.convertCalendarDateToLocaleDate(formatedDate));
    var navMan=applicationManager.getNavigationManager();
    var data=transferManager.getTransactionObject(); 
    navMan.setCustomInfo("frmBillPayConfirmation",data);
    navMan.navigateTo("frmBillPayConfirmation");

  };
  BillPay_PresentationController.prototype.transferSetRecurrence=function(reccurrence)
  {
    var transferManager = applicationManager.getTransactionManager();
    transferManager.setTransactionAttribute("numberOfRecurrences",reccurrence); 
    var navMan=applicationManager.getNavigationManager();
    //navMan.setCustomInfo("frmBillPayStartDate","NofRR");
    navMan.navigateTo("frmBillPayStartDate");

    };
  BillPay_PresentationController.prototype.setManuallyAddedFlag=function(value)
  {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("isManuallyAdded",value);
  };
    BillPay_PresentationController.prototype.getManuallyAddedFlag=function()
  {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getBillPayPayeeData().isManuallyAdded;
  };
BillPay_PresentationController.prototype.isDefaultFromAccount = function(){
    var accMan=applicationManager.getAccountManager();
    if(accMan.getBillPayPreferredAccount())
      return true;
    return false;
  };
  BillPay_PresentationController.prototype.isSetAccountPopupEnabled = function(){
    var userManager = applicationManager.getUserPreferencesManager();
    return userManager.isSetAccountPopupEnabled();
  };   
  BillPay_PresentationController.prototype.navAfterSelectPayee=function(selectedPayee)
  {
    var recipientsManager = applicationManager.getRecipientsManager();
    var accMan=applicationManager.getAccountManager();
    var trasMan=applicationManager.getTransactionManager();
    trasMan.clearTransferObject();
    var navMan=applicationManager.getNavigationManager();
    //var selectedPayee=navMan.getCustomInfo("frmBillPaySelectPayee");
    var preAccData=accMan.getBillPayPreferredAccount();
    trasMan.setTransactionAttribute("payeeId",selectedPayee["payeeId"]);
    trasMan.setTransactionAttribute("payeeAdress",selectedPayee["payeeAddressLine1"]);
    trasMan.setTransactionAttribute("payeeNickName",selectedPayee["payeeNickName"]);
    if(!kony.sdk.isNullOrUndefined(selectedPayee.flowType) && selectedPayee.flowType == "payEBill" && !kony.sdk.isNullOrUndefined(selectedPayee["dueAmount"]))
      trasMan.setTransactionAttribute("amount",selectedPayee["dueAmount"]);
    trasMan.setTransactionAttribute("transactionType","BillPay");
    if(preAccData == "" || preAccData == undefined || preAccData == null){
      scope_BillPayPresentationController.navFromAccountsPage() ; 
    }
    else{
      scope_BillPayPresentationController.setFromAccountsForTransactions(preAccData);
      navMan.navigateTo("frmBillPayAmount");
    }
  };    
  
  
  
  BillPay_PresentationController.prototype.navFromAccountsPage=function()
  {
     var accMan=applicationManager.getAccountManager();
    accMan.fetchInternalAccounts(scope_BillPayPresentationController.showFromAccountsPresentationSuccessCallBack,scope_BillPayPresentationController.showFromAccountsPresentationErrorCallBack);
  };  
  
  BillPay_PresentationController.prototype.showFromAccountsPresentationSuccessCallBack=function(res)
  {
   var accNav=applicationManager.getAccountManager();
    var frmacc=accNav.getBillPaySupportedAccounts();
    var navMan=applicationManager.getNavigationManager();
    //  applicationManager.getPresentationUtility().dismissLoadingScreen();
    navMan.setCustomInfo("frmBillPayFromAccount",{"fromaccounts":frmacc});
    navMan.navigateTo("frmBillPayFromAccount");
  };
  BillPay_PresentationController.prototype.showFromAccountsPresentationErrorCallBack=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage(handleMode, error);
    else{
      kony.print("error in showFromAccountsPresentationErrorCallBack");
    }
  };
  BillPay_PresentationController.prototype.processAccountsData =  function(data)
  {
    var accProcessedData = [];
    for (var i = 0; i < data.length; i++) {
      accProcessedData[i] = {};
      accProcessedData[i].accountName = data[i].accountName;
      accProcessedData[i].availableBalance = this.getAvailableBalanceCurrencyString(data[i]);
      accProcessedData[i].accountID =data[i].accountID;
      accProcessedData[i].bankName =data[i].bankName;
      accProcessedData[i].accountBalanceType = this.getAvailableBalanceType(data[i]);
      accProcessedData[i].accountType=data[i].accountType;
      accProcessedData[i].nickName=data[i].nickName
      accProcessedData[i].fromAccountCurrency = data[i].currencyCode;
      accProcessedData[i].fromAccountBalance = data[i].availableBalance;
    }
    return accProcessedData;
  };
  BillPay_PresentationController.prototype.getAvailableBalanceCurrencyString = function(data)
  {
    
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var currencyCode = data["currencyCode"];
    switch(data.accountType)
    {
      case configManager.constants.SAVINGS: return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
      case configManager.constants.CHECKING: return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
      case configManager.constants.CREDITCARD: return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
      case configManager.constants.DEPOSIT: return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"],currencyCode);
      case configManager.constants.MORTGAGE: return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
      case configManager.constants.LOAN: return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
      default:return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
    }
  };
   BillPay_PresentationController.prototype.getAvailableBalanceType = function(data)
  {
    var configManager = applicationManager.getConfigurationManager();
    switch(data.accountType)
    {
      case configManager.constants.SAVINGS: return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
      case configManager.constants.CHECKING: return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");  
      case configManager.constants.CREDITCARD: return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
      case configManager.constants.DEPOSIT: return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
      case configManager.constants.MORTGAGE: return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
      case configManager.constants.LOAN: return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
      default:return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    }
  };
  
  
   BillPay_PresentationController.prototype.showPreferredAccount=function(preAccData)
  {
    var accdata=[];
    accdata.push(preAccData);
    var processAccountsData=scope_BillPayPresentationController.processAccountsData(accdata);
    return processAccountsData;
  };
  
  BillPay_PresentationController.prototype.getTransferObjectById=function()
  {
    var data;
    var accMan=applicationManager.getAccountManager();
    var transactionmanager=applicationManager.getTransactionManager();
    var transactionData = transactionmanager.getTransactionObject();
    if(transactionData.fromAccountNumber)
      data=accMan.getInternalAccountByID(transactionData.fromAccountNumber); 
    else{
      data = accMan.getBillPayPreferredAccount();
    }
    var accdata=[];
      accdata.push(data);
    var processAccountsData=scope_BillPayPresentationController.processAccountsData(accdata);
    return processAccountsData;
    
  };
  
  BillPay_PresentationController.prototype.evaluateAmount = function(amount,fromAvlBal)
  {
    var forUtility=applicationManager.getFormatUtilManager();
    fromAvlBal= forUtility.deFormatAmount(fromAvlBal);

    if(Number(amount)>Number(fromAvlBal))
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayAmount', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.amountGreaterThanAvailBal"));
    }else if(Number(amount)==0){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmBillPayAmount', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validAmount"));
    }
    else
    {
      var transactionManager = applicationManager.getTransactionManager();
      transactionManager.setTransactionAttribute("amount",amount);
      var index = scope_BillPayPresentationController.getSelectedFrequencyIndex();
      var navManager = applicationManager.getNavigationManager();
      //navManager.setCustomInfo("frmBillPayFrequency",{"index":index});
      navManager.navigateTo("frmBillPayFrequency");
    }
  };
  
  
  BillPay_PresentationController.prototype.setFromAccountsForTransactions=function(selectedfromacc)
  {
    var trasMan = applicationManager.getTransactionManager();
    trasMan.setTransactionAttribute("fromAccountNumber",selectedfromacc.accountID);
    trasMan.setTransactionAttribute("fromAccountName",selectedfromacc.accountName);
    trasMan.setTransactionAttribute("fromAccountType",selectedfromacc.accountType);
    trasMan.setTransactionAttribute("fromBankName",selectedfromacc.bankName);
    trasMan.setTransactionAttribute("fromAccNickName",selectedfromacc.nickName);
};
  BillPay_PresentationController.prototype.getSelectedFrequencyIndex = function()
  {
     var transactionObj = applicationManager.getTransactionManager();
     var frequency = transactionObj.getTransactionObject().frequencyType;
     switch(frequency)
       {
         case "Once":
          if(transactionObj.getTransactionObject().isScheduled=="0")
            return 0;
          else 
           return 1;
           break;
         case "Daily": return 2;
         case "Weekly": return 3;
         case "BiWeekly": return 4;
         case "Every Two Weeks" : return 5;
         case "Monthly": return 6;
         case "Quarterly": return 7;
         case "Half Yearly": return 8;
         case "Yearly" : return 9;
         default:return "";
       
       }
  };
  
   BillPay_PresentationController.prototype.setTransactionObject  = function(transactionData)
  {
     var formatUtil=applicationManager.getFormatUtilManager();
     var transactionObj = applicationManager.getTransactionManager();
     if (transactionData.transactionId !== undefined && transactionData.transactionId !== null) {
                    transactionObj.setTransactionprimaryAttribute({"transactionId":transactionData.transactionId});
                }
   if(transactionData.payeeId) 
    transactionObj.setTransactionAttribute("payeeId",transactionData.payeeId);
    if(transactionData.amount!==undefined && transactionData.amount!==null)
      {
    var amount= formatUtil.deFormatAmount(transactionData.amount);
        transactionObj.setTransactionAttribute("amount",amount);
      }
    if(transactionData.frequencyType!==undefined && transactionData.frequencyType!==null)
      {
        transactionObj.setTransactionAttribute("frequencyType",transactionData.frequencyType);
      }
    if(transactionData.isScheduled!==undefined && transactionData.isScheduled!==null)
      {
        if(transactionData.isScheduled === "true")
        transactionObj.setTransactionAttribute("isScheduled","1");
        else
           transactionObj.setTransactionAttribute("isScheduled","0");
      }
    if(transactionData.payeeNickName!==undefined && transactionData.payeeNickName!==null)
      {
        transactionObj.setTransactionAttribute("payeeNickName",transactionData.payeeNickName);
      }
     
    if(transactionData.toAccountName!==undefined && transactionData.toAccountName!==null)
      {
        transactionObj.setTransactionAttribute("toAccountName",transactionData.toAccountName);
      }
     if(transactionData.frequencyStartDate!==undefined && transactionData.frequencyStartDate!==null)
      {
        var startdate=formatUtil.getDateObjectfromString(transactionData.frequencyStartDate,"YYYY-MM-DD");
        var startDate= formatUtil.getFormatedDateString(startdate,formatUtil.getApplicationDateFormat());
        transactionObj.setTransactionAttribute("frequencyStartDate",startDate);
      }
    if(transactionData.frequencyEndDate!==undefined && transactionData.frequencyEndDate!==null)
      {
       var enddate=formatUtil.getDateObjectfromString(transactionData.frequencyEndDate,"YYYY-MM-DD");
        var endDate=formatUtil.getFormatedDateString(enddate,formatUtil.getApplicationDateFormat());
        transactionObj.setTransactionAttribute("frequencyEndDate",endDate);
      }
    if(transactionData.scheduledDate!==undefined && transactionData.scheduledDate!==null)
      {
        //var sheduleddate=formatUtil.getDateObjectfromString(transactionData.scheduledDate,"YYYY-MM-DD");
        //var sheduledDate=formatUtil.getFormatedDateString(sheduleddate,formatUtil.APPLICATION_DATE_FORMAT);
        transactionObj.setTransactionAttribute("scheduledDate",transactionData.scheduledDate);
      }
    if(transactionData.numberOfRecurrences!==undefined && transactionData.numberOfRecurrences!==null)
      {
        transactionObj.setTransactionAttribute("numberOfRecurrences",transactionData.numberOfRecurrences);
      }
     if(transactionData.fromAccountName!==undefined && transactionData.fromAccountName!==null)
      {
        transactionObj.setTransactionAttribute("fromAccountName",transactionData.fromAccountName);
      }
     if(transactionData.transactionType!==undefined && transactionData.transactionType!==null)
     {
       transactionObj.setTransactionAttribute("transactionType",transactionData.transactionType);
     }
//      if(transactionData.transactionId!==undefined && transactionData.transactionId!==null)
//      {
//        transactionObj.setTransactionAttribute("transactionId",transactionData.transactionId);
//      }
     if(transactionData.fromAccountNumber!==undefined && transactionData.fromAccountNumber!==null)
      {
        transactionObj.setTransactionAttribute("fromAccountNumber",transactionData.fromAccountNumber);
      }
     if(transactionData.transactionsNotes!==undefined && transactionData.transactionsNotes!==null)
      {
        transactionObj.setTransactionAttribute("transactionsNotes",transactionData.transactionsNotes);
      }
     var navMan=applicationManager.getNavigationManager();
    // navMan.setEntryPoint("payBill","frmTransactionDetails");
     navMan.navigateTo("frmBillPayAmount");

  };
    BillPay_PresentationController.prototype.navToVerifyDetailsWithoutAccountNum=function(formName)
  {  
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("accountNumber","");
    recipientsManager.setAttributePayee("reEnterAccountNumber","");
    recipientsManager.setAttributePayee("isPayeeWithOutAccNum","true");  
    this.commonFunctionForNavigation(formName); 
  };
  BillPay_PresentationController.prototype.getIsPayeeWithOutAccNum=function()
  {
      var recipientsManager = applicationManager.getRecipientsManager();
      return recipientsManager.getBillPayPayeeData().isPayeeWithOutAccNum;
     };
  
  BillPay_PresentationController.prototype.payeeSearch = function(searchText) {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.fetchPayeeSuggestions(searchText,scope_BillPayPresentationController.payeeSearchPresentationSuccessCallback, scope_BillPayPresentationController.payeeSearchPresentationErrorCallback);
  };
  BillPay_PresentationController.prototype.payeeSearchPresentationSuccessCallback = function(res) {
    kony.print("*****************Success in payeeSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmBillPaySearchPayee', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  BillPay_PresentationController.prototype.payeeSearchPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage(handleMode, err);
    else{
      kony.print("*******************Error in payeeSearch");
    }
  };  
  BillPay_PresentationController.prototype.navTofrmZipCode=function(billerDetails,formName)
  {  
    var address = this.getAddressJSON(billerDetails);
    var recipientsManager = applicationManager.getRecipientsManager();
    address.zipCode="";
    recipientsManager.setBillPayPayeeAddressDetails(address);
    recipientsManager.setAttributePayee("isManuallyAdded","false");
    recipientsManager.setAttributePayee("billerCategoryName",billerDetails.billerCategoryName);
    recipientsManager.setAttributePayee("payeeName",billerDetails.billerName);
    this.commonFunctionForNavigation(formName); 
  };
  BillPay_PresentationController.prototype.getAddressJSON=function(payeeData) {  
    var address={};
    var address1 = payeeData.address.split(",");
    var length = address1.length;
    var mid = Math.floor((length)/2);
    var i,addressline1="";
    var addressline2="";
    if(length == 1)
      addressline1=address1[0];
    else{
      for(i=0;i<=mid;i++)
        addressline1+=address1[i]+",";
      for(i=mid+1;i<length;i++)
        addressline2+=address1[i]+",";
      addressline1=addressline1.slice(0,-1);
      addressline2=addressline2.slice(0,-1);
    }
    address.addressLine1=(addressline1 && addressline1 !== "" && addressline1 !== null)?addressline1:
    (payeeData.street && payeeData.street !== "" && payeeData.street !== null)?payeeData.street:"";
    address.addressLine2=(addressline2 && addressline2 !== "" && addressline2!== null)?addressline2:"";
    address.cityName=(payeeData.city && payeeData.city !== "" && payeeData.city!== null)?payeeData.city:"";
    address.state=(payeeData.state && payeeData.state!== "" &&payeeData.state!== null)?payeeData.state:"";
    address.zipCode=(payeeData.zipCode && payeeData.zipCode !== "" && payeeData.zipCode!== null)?payeeData.zipCode:"";
    return address;
  };
    BillPay_PresentationController.prototype.getBillPayBillerCategory=function()
  {     
    var recipientsManager = applicationManager.getRecipientsManager();
     return recipientsManager.getBillPayPayeeData().billerCategoryName;
  };
  BillPay_PresentationController.prototype.navToRelationNumber=function(formName)
  {  
    this.commonFunctionForNavigation(formName); 
  };
  BillPay_PresentationController.prototype.navToBillPayAccNumberSearchFlow=function(formName)
  {  
    this.commonFunctionForNavigation(formName); 
  };
   BillPay_PresentationController.prototype.setBillPayZipCode=function(zipCode)
  {     
    var recipientsManager = applicationManager.getRecipientsManager();
     return recipientsManager.setAttributePayee("zipCode",zipCode);
  };
   BillPay_PresentationController.prototype.setBillPayAccountNumber=function(relationNumber)
  {     
    var recipientsManager = applicationManager.getRecipientsManager();
     return recipientsManager.setAttributePayee("accountNumber",relationNumber);
  };
  BillPay_PresentationController.prototype.navToPhoneNumber= function(payeeRelNum,formName){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber",payeeRelNum);
    this.commonFunctionForNavigation(formName);
  };
  BillPay_PresentationController.prototype.navToPolicyNumber= function(payeeRelNum,formName){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("reEnterAccountNumber",payeeRelNum);
    this.commonFunctionForNavigation(formName);
  };
   BillPay_PresentationController.prototype.setBillPayPhoneNumber=function(phoneNumber)
  {     
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setAttributePayee("phone",phoneNumber);
  };
  BillPay_PresentationController.prototype.getTransObject=function()
  {
    var transMan=applicationManager.getTransactionManager();
    var obj=transMan.getTransactionObject();
    return obj;
  };
   BillPay_PresentationController.prototype.getIndexForDuration=function()
  {
   var index;
        var transactionManager = applicationManager.getTransactionManager();
        //var  transactionObj=transactionManager.getP2PObject();
        if (transactionManager.getTransactionObject().frequencyEndDate)
            index = 0;
        else if (transactionManager.getTransactionObject().scheduledDate)
            index = 1;
        return index;
  };
  BillPay_PresentationController.prototype.getBillPayZipCode= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
   return recipientsManager.getBillPayPayeeData().zipCode;
  };
  BillPay_PresentationController.prototype.getBillPayPhoneNumber= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
   return recipientsManager.getBillPayPayeeData().phone;
  };
  BillPay_PresentationController.prototype.getAvailableFrequencyType=function(){
    var transactionManager=applicationManager.getTransactionManager();
    return transactionManager.getAvailableFrequencyType();
  };
  
  BillPay_PresentationController.prototype.repeatTransaction  = function(transactionData)
  {
     var formatUtil=applicationManager.getFormatUtilManager();
     var transactionObj = applicationManager.getTransactionManager();
   if(transactionData.payeeId) 
    transactionObj.setTransactionAttribute("payeeId",transactionData.payeeId);
    if(transactionData.amount!==undefined && transactionData.amount!==null)
      {
    var amount= formatUtil.deFormatAmount(transactionData.amount);
        transactionObj.setTransactionAttribute("amount",amount);
      }
    if(transactionData.frequencyType!==undefined && transactionData.frequencyType!==null)
      {
        transactionObj.setTransactionAttribute("frequencyType",transactionData.frequencyType);
      }
    if(transactionData.isScheduled!==undefined && transactionData.isScheduled!==null)
      {
        if(transactionData.isScheduled === "true")
          transactionObj.setTransactionAttribute("isScheduled","1");
        else
           transactionObj.setTransactionAttribute("isScheduled","0");
      }
    if(transactionData.payeeNickName!==undefined && transactionData.payeeNickName!==null)
      {
        transactionObj.setTransactionAttribute("payeeNickName",transactionData.payeeNickName);
      }
     
    if(transactionData.toAccountName!==undefined && transactionData.toAccountName!==null)
      {
        transactionObj.setTransactionAttribute("toAccountName",transactionData.toAccountName);
      }
     if(transactionData.frequencyStartDate!==undefined && transactionData.frequencyStartDate!==null)
      {
        var startdate=formatUtil.getDateObjectfromString(transactionData.frequencyStartDate,"YYYY-MM-DD");
        var startDate= formatUtil.getFormatedDateString(startdate,formatUtil.getApplicationDateFormat());
        transactionObj.setTransactionAttribute("frequencyStartDate",startDate);
      }
    if(transactionData.frequencyEndDate!==undefined && transactionData.frequencyEndDate!==null)
      {
        var enddate=formatUtil.getDateObjectfromString(transactionData.frequencyEndDate,"YYYY-MM-DD");
        var endDate=formatUtil.getFormatedDateString(enddate,formatUtil.getApplicationDateFormat());
        transactionObj.setTransactionAttribute("frequencyEndDate",startDate);
      }
    if(transactionData.transactionDate!==undefined && transactionData.transactionDate!==null)
      {
        //var sheduleddate=formatUtil.getDateObjectfromString(transactionData.scheduledDate,"YYYY-MM-DD");
        //var sheduledDate=formatUtil.getFormatedDateString(sheduleddate,formatUtil.APPLICATION_DATE_FORMAT);
        transactionObj.setTransactionAttribute("scheduledDate",transactionData.transactionDate);
      }
    if(transactionData.numberOfRecurrences!==undefined && transactionData.numberOfRecurrences!==null)
      {
        transactionObj.setTransactionAttribute("numberOfRecurrences",transactionData.numberOfRecurrences);
      }
     if(transactionData.fromAccountName!==undefined && transactionData.fromAccountName!==null)
      {
        transactionObj.setTransactionAttribute("fromAccountName",transactionData.fromAccountName);
      }
     
     if(transactionData.transactionType!==undefined && transactionData.transactionType!==null)
     {
       transactionObj.setTransactionAttribute("transactionType",transactionData.transactionType);
     }
     if(transactionData.fromAccountNumber!==undefined && transactionData.fromAccountNumber!==null)
      {
        transactionObj.setTransactionAttribute("fromAccountNumber",transactionData.fromAccountNumber);
      }
     
     var navMan=applicationManager.getNavigationManager();
     //navMan.setEntryPoint("payBill","frmTransactionDetails");
     navMan.navigateTo("frmBillPayAmount");
  };
  BillPay_PresentationController.prototype.deleteTransaction = function(data)
   {
     var criteria = {
       "transactionId":data,
       "transactionType":"BillPay"
     };
      var transactionObj = applicationManager.getTransactionManager();
     transactionObj.deleteTransaction(criteria,scope_BillPayPresentationController.deleteSuccess,scope_BillPayPresentationController.deleteError);
     
   };
   BillPay_PresentationController.prototype.deleteRecurrenceBP = function(data)
   {
     var criteria = {
       "transactionId":data
     };
      var transactionObj = applicationManager.getTransactionManager();
     transactionObj.deleteRecurrenceTransaction(criteria,scope_BillPayPresentationController.deleteSuccess,scope_BillPayPresentationController.deleteError);
     
   };
  BillPay_PresentationController.prototype.deleteSuccess = function(res)
  {
  var navMan=applicationManager.getNavigationManager();
    scope_BillPayPresentationController.fetchBills();
    var data = {};
    data.res = res;
    data.type= "delete";
    navMan.setCustomInfo("frmBillPay",data);
  };
  BillPay_PresentationController.prototype.deleteError = function(err)
  {
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage(handleMode, err);
    else{
      var navMan=applicationManager.getNavigationManager();
      scope_BillPayPresentationController.fetchBills();
      var data = {};
      data.res = err["errorMessage"];
      data.type="error";
      navMan.setCustomInfo("frmBillPay",data);
    }
  };
  
  BillPay_PresentationController.prototype.showFromAccounts=function()
  {
    var accMan=applicationManager.getAccountManager();
    accMan.fetchInternalAccounts(scope_BillPayPresentationController.fetchFromAccountsPresentationSuccessCallBack,scope_BillPayPresentationController.fetchFromAccountsPresentationErrorCallBack);
  };
  BillPay_PresentationController.prototype.fetchFromAccountsPresentationSuccessCallBack=function(res)
  {
    //
  };
  BillPay_PresentationController.prototype.fetchFromAccountsPresentationErrorCallBack=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in showFromAccountsPresentationErrorCallBack");
  };
  BillPay_PresentationController.prototype.updateEBillStatus=function(rec,status)
  {
    var recipientsManager=applicationManager.getRecipientsManager();
    if(status ===false)
    recipientsManager.modifyEBillStatus(rec,scope_BillPayPresentationController.updateActiveEBillSuccess,scope_BillPayPresentationController.updateActiveEBillError);
    else
      recipientsManager.modifyEBillStatus(rec,scope_BillPayPresentationController.updateDeactiveEBillSuccess,scope_BillPayPresentationController.updateDeactiveEBillError);  
  };
  
  BillPay_PresentationController.prototype.updateActiveEBillSuccess=function(res)
  {
   var controller = _kony.mvc.GetController('frmBillPayPayeeDetails', true);
    controller.deactiveEbillStatus(); 
     
  };
  BillPay_PresentationController.prototype.updateActiveEBillError=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in updateEBillStatusPresentationErrorCallBack");
  };
  BillPay_PresentationController.prototype.updateDeactiveEBillSuccess=function(res)
  {
   var controller = _kony.mvc.GetController('frmBillPayPayeeDetails', true);
     controller.activeEbillStatus();  
  };
  BillPay_PresentationController.prototype.updateDeactiveEBillError=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in updateEBillStatusPresentationErrorCallBack");
  };
 BillPay_PresentationController.prototype.viewallPayments=function(billPayeeDetails)
  {
     var record ={"payeeId":billPayeeDetails.payeeId,"limit":12}
     var navMan=applicationManager.getNavigationManager(); 
     navMan.setCustomInfo("frmBillPayAllPayments",billPayeeDetails);
     var transactionObj = applicationManager.getTransactionManager();
     transactionObj.fetchPayeeBill (record,scope_BillPayPresentationController.fetchPayeeBillSuccess,scope_BillPayPresentationController.fetchPayeeBillError);
  };
  BillPay_PresentationController.prototype.fetchPayeeBillSuccess=function(data)
  {
       var navMan=applicationManager.getNavigationManager(); 
         var formatUtil=applicationManager.getFormatUtilManager();
        var navData={};
         navData.billPayeeDueDetails=navMan.getCustomInfo("frmBillPayAllPayments");
   //  alert(data);
     for(var i=0;i<data.length;i++)
       {
            data[i]["amount"]=formatUtil.formatAmountandAppendCurrencySymbol(data[i]["amount"]);
            var billdateobj = formatUtil.getDateObjectfromString(data[i]["billPaidDate"], "YYYY-MM-DD");
            data[i]["scheduledDate"] = formatUtil.getFormatedDateString(billdateobj, formatUtil.getApplicationDateFormat());
            data[i]["showDate"] =data[i]["scheduledDate"];  
          //  data[i]["transactionId"] = " "+data[i]["referenceId"];
            data[i]["empty"]="konylogo.png";
           
       }  
       navData.billData=data;
       navMan.setCustomInfo("frmBillPayAllPayments",navData);
       navMan.navigateTo("frmBillPayAllPayments");
  };
   BillPay_PresentationController.prototype.fetchPayeeBillError=function(error)
  {
     applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in fetchPayeeBills");
  };
  BillPay_PresentationController.prototype.fetchZipCode=function(placeId,fetchZipCodePresentationSuccessCallback)
  {
    var locationManager = applicationManager.getLocationManager();
    locationManager.fetchLocationDetails(placeId,fetchZipCodePresentationSuccessCallback, scope_BillPayPresentationController.fetchZipCodePresentationErrorCallback);
  };
  BillPay_PresentationController.prototype.fetchZipCodePresentationSuccessCallback = function(data){
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayEditAddress', true);
    controller.bindZipCodeToUi(data);
  };
  BillPay_PresentationController.prototype.fetchZipCodePresentationErrorCallback = function(error){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
    else
      kony.print("error in fetchZipCode");
  };
   BillPay_PresentationController.prototype.fetchAllPayeesAfterUpdatingPayeeStatus = function(){
      var recipientsManager = applicationManager.getRecipientsManager();
      var criteria= {
        "offset": "0",
        "limit": "10",
        "searchString":"",
        "sortBy": "",
        "order": ""
      };
      recipientsManager.fetchPayeesList(criteria,scope_BillPayPresentationController.fetchAllPayeesAfterUpdatingPayeeStatusPresentationSuccess, scope_BillPayPresentationController.fetchAllPayeesAfterUpdatingPayeeStatusPresentationError);
    };
  BillPay_PresentationController.prototype.fetchAllPayeesAfterUpdatingPayeeStatusPresentationSuccess = function(successRes){
  };
    BillPay_PresentationController.prototype.fetchAllPayeesAfterUpdatingPayeeStatusPresentationError = function(errorRes){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorRes["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorRes);
      else{
        kony.print(errorRes);
      }
  };

  
  return BillPay_PresentationController;

});