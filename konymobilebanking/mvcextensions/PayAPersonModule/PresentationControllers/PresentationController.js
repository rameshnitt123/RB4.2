define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {

  function PayAPerson_PresentationController() {
    scope_PayAPersonPresentationController=this;
    isNickNameUpdated=false;
    isDeleteDone=false;
    isPayeeAdded=false;
    this.recipientDetails={};
    this.entryPoint="";
    scope_PayAPersonPresentationController.contactType="";
    scope_PayAPersonPresentationController.contactTypeForContacts="";
    scope_PayAPersonPresentationController.contactPickerObject=null;
    kony.mvc.Presentation.BasePresenter.call(this);
    this.asyncManager = new AsyncManager();
      /**   numberOfAsyncForPayees
          *  1.getRecentPayPerson
          *  2.getPayPerson
            */
    scope_PayAPersonPresentationController.numberOfAsyncForPayees=2;
  }

    inheritsFrom(PayAPerson_PresentationController, kony.mvc.Presentation.BasePresenter);

  PayAPerson_PresentationController.prototype.initializePresentationController = function() {
  		
  };

  PayAPerson_PresentationController.prototype.clearBuilderNonGeneratedAttributes=function(){
    scope_PayAPersonPresentationController.contactType="";
  };
  
  PayAPerson_PresentationController.prototype.setContactType=function(data){
    scope_PayAPersonPresentationController.contactType=data;
  };
  
  PayAPerson_PresentationController.prototype.getContactType=function(){
    return scope_PayAPersonPresentationController.contactType;
  };
  
  PayAPerson_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  PayAPerson_PresentationController.prototype.fetchAllP2PRecipients = function(){
    var recipientsManager = applicationManager.getRecipientsManager();
        var criteria= {
      "offset": "0",
      "limit": "10",
      "searchString":"",
      "sortBy": "",
      "order": ""
    };
    recipientsManager.getP2PRecipientList(criteria,scope_PayAPersonPresentationController.fetchAllP2PRecipientsPresentationSuccess, scope_PayAPersonPresentationController.fetchAllP2PRecipientsPresentationError);
  };
  PayAPerson_PresentationController.prototype.fetchAllP2PRecipientsPresentationSuccess = function(successResponse){
    scope_PayAPersonPresentationController.commonFunctionForNavigation("frmManageRecipientList");
  };
  PayAPerson_PresentationController.prototype.fetchAllP2PRecipientsPresentationError=function(error){
    kony.print("Error in fetch same bank recipients");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(error["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
  };
  PayAPerson_PresentationController.prototype.navToP2PRecipientDetails=function(payeeData){
   var recipientsManager = applicationManager.getRecipientsManager();
   recipientsManager.setP2PPayeeData(payeeData);
   scope_PayAPersonPresentationController.commonFunctionForNavigation("frmManageP2pRecipient");
  };
    PayAPerson_PresentationController.prototype.setP2PPayeeData=function(payeeData){
   var recipientsManager = applicationManager.getRecipientsManager();
   recipientsManager.setP2PPayeeData(payeeData);
  };
  PayAPerson_PresentationController.prototype.deleteP2PRecipient=function(){
    var navManager = applicationManager.getNavigationManager();
    var recipientsManager = applicationManager.getRecipientsManager();
    var recipientData=recipientsManager.getP2PPayeeDetails();
    //var params={"PayPersonId":recipientData.PayPersonId};
    recipientsManager.deleteP2PRecipient(recipientData,scope_PayAPersonPresentationController.deleteP2PRecipientPresentationSuccess, scope_PayAPersonPresentationController.deleteP2PRecipientPresentationError);
  };
    PayAPerson_PresentationController.prototype.deleteP2PRecipientPresentationSuccess = function(successResponse){
      scope_PayAPersonPresentationController.isDeleteDone=true;
      scope_PayAPersonPresentationController.clearP2PPayeeData();
      scope_PayAPersonPresentationController.fetchAllP2PRecipients();
  };
  PayAPerson_PresentationController.prototype.deleteP2PRecipientPresentationError=function(error){
    kony.print("Error in delete recipients");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(error["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
  };
   PayAPerson_PresentationController.prototype.updateP2PRecipient=function(updatedNickName){
    var recipientsManager = applicationManager.getRecipientsManager();
     recipientsManager.setP2PPayeeAttribute("nickName",updatedNickName)
     var recipientData=this.getP2PPayeeDetails();
     recipientsManager.editP2PRecipient(recipientData,scope_PayAPersonPresentationController.updateP2PRecipientPresentationSuccess, scope_PayAPersonPresentationController.updateP2PRecipientPresentationError);
  };
  PayAPerson_PresentationController.prototype.updateP2PRecipientPresentationSuccess = function(successResponse){
    scope_PayAPersonPresentationController.isNickNameUpdated=true;
    scope_PayAPersonPresentationController.clearP2PPayeeData();
    scope_PayAPersonPresentationController.fetchAllP2PRecipients();
  };
  PayAPerson_PresentationController.prototype.updateP2PRecipientPresentationError=function(error){
    kony.print("Error in update recipients");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(error["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
  };
  PayAPerson_PresentationController.prototype.editBenificiaryNickName=function(accountDetails){
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmManageEditRecipient",accountDetails);
    scope_PayAPersonPresentationController.commonFunctionForNavigation("frmManageEditRecipient");
  };
  PayAPerson_PresentationController.prototype.getAllPayees = function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var payeeManager = applicationManager.getRecipientsManager();
    scope_PayAPersonPresentationController.asyncManager.initiateAsyncProcess(scope_PayAPersonPresentationController.numberOfAsyncForPayees);
    payeeManager.fetchRecentPayees(scope_PayAPersonPresentationController.recentPayeeSuccess,scope_PayAPersonPresentationController.recentPayeeError);
    payeeManager.getP2PRecipientList({},scope_PayAPersonPresentationController.allPayeeSuccess,scope_PayAPersonPresentationController.allPayeeError);       
  };
    PayAPerson_PresentationController.prototype.recentPayeeSuccess = function(res){
       scope_PayAPersonPresentationController.asyncManager.setSuccessStatus(0, res);
      if(scope_PayAPersonPresentationController.asyncManager.areAllservicesDone(scope_PayAPersonPresentationController.numberOfAsyncForPayees))
      {      
        scope_PayAPersonPresentationController.navigateToP2pRecipients();
      }       
    };
    PayAPerson_PresentationController.prototype.recentPayeeError = function(err){
                   applicationManager.getPresentationUtility().dismissLoadingScreen();     
       scope_PayAPersonPresentationController.asyncManager.setErrorStatus(0, err);  
      if(err["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
    PayAPerson_PresentationController.prototype.allPayeeSuccess = function(res){ 
    scope_PayAPersonPresentationController.asyncManager.setSuccessStatus(1, res);
      if(scope_PayAPersonPresentationController.asyncManager.areAllservicesDone(scope_PayAPersonPresentationController.numberOfAsyncForPayees))
      {      
        scope_PayAPersonPresentationController.navigateToP2pRecipients();
      }           
    };
    PayAPerson_PresentationController.prototype.allPayeeError = function(err){
                   applicationManager.getPresentationUtility().dismissLoadingScreen();     
       scope_PayAPersonPresentationController.asyncManager.setErrorStatus(1, err);      
      if(err["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
    PayAPerson_PresentationController.prototype.navigateToP2pRecipients = function(Data){                                       
       var navManager = applicationManager.getNavigationManager();
       var payee ={};
       var transactionObj = applicationManager.getTransactionManager();
      // var personId = transactionObj.getPersonId();
       payee.recentPayees = scope_PayAPersonPresentationController.asyncManager.getData(0);
       payee.allPayees = scope_PayAPersonPresentationController.asyncManager.getData(1);
       for(var i=0; i<payee.recentPayees.length; i++)
       {
              if(payee.recentPayees[i].nickName==="" ||payee.recentPayees[i].nickName===null ||payee.recentPayees[i].nickName===undefined )
               {
                 payee.recentPayees[i].nickName=payee.recentPayees[i].name;
               } 
             if(payee.recentPayees[i].phone==="" ||payee.recentPayees[i].phone===null ||payee.recentPayees[i].phone===undefined )
               {
                 payee.recentPayees[i].phone=payee.recentPayees[i].email;
               }  
       }
       for(var i=0; i<payee.allPayees.length; i++)
       {
             //if(payee.allPayees[i].PayPersonId === personId)
               //payee.selPersonId = i;
              if(payee.allPayees[i].nickName==="" ||payee.allPayees[i].nickName===null ||payee.allPayees[i].nickName===undefined )
               {
                 payee.allPayees[i].nickName=payee.allPayees[i].name;
               }
              if(payee.allPayees[i].phone==="" ||payee.allPayees[i].phone===null ||payee.allPayees[i].phone===undefined )
               {
                 payee.allPayees[i].phone=payee.allPayees[i].email;
               } 
       }
               
       navManager.setCustomInfo("frmP2pSelectRecipient",payee);
       navManager.navigateTo("frmP2pSelectRecipient");          
    };
   PayAPerson_PresentationController.prototype.goBackToSelectRecipient = function()
   {
     var navMan=applicationManager.getNavigationManager();
     var payee = navMan.getCustomInfo("frmP2pSelectRecipient");
     var transactionObj = applicationManager.getTransactionManager();
     var personId = transactionObj.getTransactionObject().personId;
     var selPersonId = "";
       for(var i=0; i<payee.allPayees.length; i++)
       {
             if(payee.allPayees[i].PayPersonId === personId)
               selPersonId = i;
       }
      return selPersonId;
   };
  
  PayAPerson_PresentationController.prototype.navigateToP2PRecPhoneNoOrEmail = function(formName,data){
    //var recipientsManager = applicationManager.getRecipientsManager();
    scope_PayAPersonPresentationController.setContactType(data);
    //recipientsManager.setContactType(data);
    scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
  };
  
  
   PayAPerson_PresentationController.prototype.navigateToP2PRecipientNamefromPhoneNo = function(formName,data){
     var recipientsManager = applicationManager.getRecipientsManager();
     recipientsManager.setP2PPayeeAttribute("phone",data);
     recipientsManager.setP2PPayeeAttribute("email","");
     scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
   };
  PayAPerson_PresentationController.prototype.navigateToP2PRecipientNamefromEmail = function(formName,data){
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidEmail(data)) {
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.setP2PPayeeAttribute("phone","");
      recipientsManager.setP2PPayeeAttribute("email",data);
      scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
    }
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmP2PRecEmail', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.OnBoarding.InvalidEmail"));
    }
  };
  PayAPerson_PresentationController.prototype.navigateToP2PRecipientNamefromPickContacts = function(formName,data){
    var recipientDetails=this.getP2PPayeeDetails();
    if(scope_PayAPersonPresentationController.getContactType()==="phone"){
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.setP2PPayeeAttribute("phone",data.contact.replace(/[()-/ /]/g,""));
      recipientsManager.setP2PPayeeAttribute("email","");
      recipientsManager.setP2PPayeeAttribute("name",data.recipientName);
      scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
    }else{
//       var validationUtility = applicationManager.getValidationUtilManager();
//       if (validationUtility.isValidEmail(data.contact)) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setP2PPayeeAttribute("phone","");
      	recipientsManager.setP2PPayeeAttribute("email",data.contact);
        recipientsManager.setP2PPayeeAttribute("name",data.recipientName);
        scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
//       }
//       else{
//         //invalid email handle to be done
//       }
    }

  };  
  PayAPerson_PresentationController.prototype.navigateToP2PVerifyDetails = function(formName,data){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setP2PPayeeAttribute("name",data);
    scope_PayAPersonPresentationController.commonFunctionForNavigation(formName);
  };
    PayAPerson_PresentationController.prototype.getRecipientDetails = function(){
    return this.recipientDetails;
  };
  PayAPerson_PresentationController.prototype.addP2PRecipient = function(data){
     var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.setP2PPayeeAttribute("nickName",data);
      var recipientDetails=this.getP2PPayeeDetails();
      if(recipientDetails.phone){
        recipientsManager.setP2PPayeeAttribute("primaryContactForSending",recipientDetails.phone);
      }
      if(recipientDetails.email){
        recipientsManager.setP2PPayeeAttribute("primaryContactForSending",recipientDetails.email);
      }
      recipientDetails=this.getP2PPayeeDetails();
      recipientsManager.createP2PRecipient(recipientDetails,scope_PayAPersonPresentationController.addP2PRecipientPresentationSuccess, scope_PayAPersonPresentationController.addP2PRecipientPresentationError);
    
  };
  PayAPerson_PresentationController.prototype.addP2PRecipientPresentationSuccess = function(successResponse){
    scope_PayAPersonPresentationController.isPayeeAdded=true;
    scope_PayAPersonPresentationController.clearP2PPayeeData();
    var navManager=applicationManager.getNavigationManager();
    var entryPoint=navManager.getEntryPoint("createP2PPayee");
    var flowtype=scope_PayAPersonPresentationController.getFlowType();
    if(flowtype==="P2P"){
    scope_PayAPersonPresentationController.fetchAllP2PRecipients();
    }
    else if(flowtype==="createP2PPayeeFromransactionFlow"){
      scope_PayAPersonPresentationController.getAllPayees();
    }
  };
  PayAPerson_PresentationController.prototype.addP2PRecipientPresentationError = function(error){
    kony.print("error in adding recipient");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(error["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
  };
PayAPerson_PresentationController.prototype.getAccounts = function(){   
         var navManager = applicationManager.getNavigationManager();
                 navManager.navigateTo("frmP2pFromAccount");     
     };
  PayAPerson_PresentationController.prototype.fetchAccountsSuccCallBack = function(res){ 
            var navManager = applicationManager.getNavigationManager();
            var accountsManager=applicationManager.getAccountManager();
            var data=accountsManager.getFromTransferSupportedAccounts();
            navManager.setCustomInfo("frmP2pFromAccount",data); 
            scope_PayAPersonPresentationController.goToAmountForm();
                
    };
  PayAPerson_PresentationController.prototype.fetchAccountsErrCallBack = function(err){
               kony.print(err);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
  
  PayAPerson_PresentationController.prototype.getP2PObject = function()
  {
    var transactionObj = applicationManager.getTransactionManager();
     return transactionObj.getTransactionObject();
  };
  PayAPerson_PresentationController.prototype.getP2pAccounts = function(data)
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionObj = applicationManager.getTransactionManager();
    if(data!==undefined && data !== null)
    {
      transactionObj.setTransactionAttribute("p2pContact",data.primaryContactForSending);
      transactionObj.setTransactionAttribute("personId",data.PayPersonId);
      transactionObj.setTransactionAttribute("payPersonName",data.name);
    }
     var accountsManager=applicationManager.getAccountManager();
     accountsManager.fetchInternalAccounts(scope_PayAPersonPresentationController.fetchAccountsSuccCallBack,scope_PayAPersonPresentationController.fetchAccountsErrCallBack);
    
  };
  PayAPerson_PresentationController.prototype.goToAmountForm = function()
  {
    var navManager = applicationManager.getNavigationManager();
    var userObj = applicationManager.getUserPreferencesManager();
    var defaultAccountID = userObj.getDefaultAccountforPayments();
    var transactionObj = applicationManager.getTransactionManager();
    var accNo = transactionObj.getTransactionObject().fromAccountNumber;
    var accMan = applicationManager.getAccountManager();
    var defaultAccountData;
    if(accNo === null)
      defaultAccountData  = accMan.getInternalAccountByID(defaultAccountID);
    else
	  defaultAccountData = accMan.getInternalAccountByID(accNo);
    var data = [];
    data.push(defaultAccountData);
    var processedData = applicationManager.getDataProcessorUtility().processAccountsData(data); 
    transactionObj.setTransactionAttribute("fromAccountName",processedData[0].accountName);
    transactionObj.setTransactionAttribute("fromAccountBalance",processedData[0].availableBalance);
    transactionObj.setTransactionAttribute("fromBankName",processedData[0].bankName);
    transactionObj.setTransactionAttribute("accountBalanceType",processedData[0].accountBalanceType);
    transactionObj.setTransactionAttribute("fromAccountNumber",processedData[0].accountID);
	transactionObj.setTransactionAttribute("fromAccountNickName", processedData[0].nickName);
    transactionObj.setTransactionAttribute("fromAccountAvailableBalance", processedData[0].fromAccountBalance);
    var forUtility=applicationManager.getFormatUtilManager();
    var amount = transactionObj.getTransactionObject().amount;
    if(amount!==null)
    amount= forUtility.deFormatAmount(amount);
    transactionObj.setTransactionAttribute("amount",amount);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    navManager.navigateTo("frmP2pAmount");
  };
  PayAPerson_PresentationController.prototype.setFromAccountsForP2p = function(data)
  {
    var transactionObj = applicationManager.getTransactionManager();
     transactionObj.setTransactionAttribute("fromAccountName",data.accountName);
    transactionObj.setTransactionAttribute("fromAccountBalance",data.availableBalance);
    transactionObj.setTransactionAttribute("fromBankName",data.bankName);
    transactionObj.setTransactionAttribute("accountBalanceType",data.accountBalanceType);
    transactionObj.setTransactionAttribute("fromAccountNumber",data.accountID);
	transactionObj.setTransactionAttribute("fromAccountNickName", data.nickName);
    transactionObj.setTransactionAttribute("fromAccountAvailableBalance", data.fromAccountBalance);
  };
  PayAPerson_PresentationController.prototype.goToFrequency = function(data)
  {
    var navManager = applicationManager.getNavigationManager();
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.setTransactionAttribute("amount",data.amount);
    navManager.navigateTo("frmP2pFrequency");
  }; 
  PayAPerson_PresentationController.prototype.getSelectedFrequencyIndex = function()
  {
     var transactionObj = applicationManager.getTransactionManager();
     var frequency =transactionObj.getTransactionObject().frequencyType;
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
  PayAPerson_PresentationController.prototype.switchFrequencyType=function(Index)
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
          navMan.navigateTo("frmP2pConfirmation");
        break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.ONCE);
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pStartDate");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Daily"): 
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.DAILY);
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Weekly"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.WEEKLY);
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.EveryTwoWeeks"): 
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.EVERYTWOWEEKS); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Monthly"): 
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.MONTHLY); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Quaterly"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.QUARTERLY); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.HalfYearly"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.HALFYEARLY); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
            break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Yearly"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.YEARLY); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
           break;
      case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.BiWeekly"):
           transactionObj.setTransactionAttribute("frequencyType",frequencyTypes.BIWEEKLY); 
           transactionObj.setTransactionAttribute("isScheduled","1");
           navMan.navigateTo("frmP2pDuration");
        break;
      default:
        break;
  }
  };
PayAPerson_PresentationController.prototype.getIndexForDuration=function()
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
PayAPerson_PresentationController.prototype.switchDurationType=function(index)
  {
   
    var transactionObj = applicationManager.getTransactionManager();
    var frequencyTypes= transactionObj.getTransactionObject().frequencyTypes;
    var navMan=applicationManager.getNavigationManager();
    switch(index)
        {
               
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"):
            	 transactionObj.setTransactionAttribute("numberOfRecurrences",""); 
            	  transactionObj.setTransactionAttribute("duration",applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange")); 
                 navMan.navigateTo("frmP2pStartDate");
                  break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"):
             	 transactionObj.setTransactionAttribute("frequencyStartDate","");
             	 transactionObj.setTransactionAttribute("frequencyEndDate","");
            	 transactionObj.setTransactionAttribute("duration",applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")); 
                 navMan.navigateTo("frmP2pRecurrence"); 
                  break;               
        } 
  };
  /*additional date field to use in  the calendar page in the back flow*/
  	PayAPerson_PresentationController.prototype.convertCalendarDateToLocaleDate = function(formatedDate){
      var forUtility=applicationManager.getFormatUtilManager();
      var configManager = applicationManager.getConfigurationManager()
      var convertedDate = forUtility.getFormatedDateString(forUtility.getDateObjectFromCalendarString(formatedDate,"MM/DD/YYYY"),configManager.frontendDateFormat[configManager.getLocale()]);
      return convertedDate;
    };
  
  PayAPerson_PresentationController.prototype.transferScheduledDate=function(strtDate)
  {
    var formatedDate = strtDate;
     var transactionObj = applicationManager.getTransactionManager();
     transactionObj.setTransactionAttribute("scheduledDate",formatedDate);
    transactionObj.setTransactionAttribute("scheduledCalendarDate",scope_PayAPersonPresentationController.convertCalendarDateToLocaleDate(formatedDate));
     var navMan=applicationManager.getNavigationManager();
     var data=transactionObj.getTransactionObject(); 
     navMan.setCustomInfo("frmP2pConfirmation",data);
     navMan.navigateTo("frmP2pConfirmation");
  };
  PayAPerson_PresentationController.prototype.transferScheduledStrtDate=function(strtDate)
  { 
    var formatedDate = strtDate;
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.setTransactionAttribute("frequencyStartDate",formatedDate);
    transactionObj.setTransactionAttribute("scheduledDate",formatedDate);
    transactionObj.setTransactionAttribute("scheduledCalendarDate",scope_PayAPersonPresentationController.convertCalendarDateToLocaleDate(formatedDate));
    var navMan=applicationManager.getNavigationManager();
    var endDate = transactionObj.getTransactionObject().frequencyEndDate;
    navMan.setCustomInfo("frmP2pEndDate",endDate);
    navMan.navigateTo("frmP2pEndDate");
  };
  PayAPerson_PresentationController.prototype.transferScheduledEndDate=function(endDate)
  {
    var formatedDate = endDate;
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.setTransactionAttribute("frequencyEndDate",formatedDate);
    transactionObj.setTransactionAttribute("endCalendarDate",scope_PayAPersonPresentationController.convertCalendarDateToLocaleDate(formatedDate));
    var navMan=applicationManager.getNavigationManager();
     var data=transactionObj.getTransactionObject(); 
     navMan.setCustomInfo("frmP2pConfirmation",data);
    navMan.navigateTo("frmP2pConfirmation");
    
  };
  PayAPerson_PresentationController.prototype.transferSetRecurrence=function(reccurrence)
  {
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.setTransactionAttribute("numberOfRecurrences",reccurrence);
     var navMan=applicationManager.getNavigationManager();
     navMan.navigateTo("frmP2pStartDate");
   
  };
  PayAPerson_PresentationController.prototype.createP2pTransferPres=function(description)
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionObj = applicationManager.getTransactionManager();
    transactionObj.setTransactionAttribute("transactionsNotes",description);
    transactionObj.setTransactionAttribute("transactionType","P2P");
    if(transactionObj.getTransactionObject().transactionId!==""&&transactionObj.getTransactionObject().transactionId!=null&&transactionObj.getTransactionObject().transactionId!=null)
    {
      var transactionObj = applicationManager.getTransactionManager();
      transactionObj.updateTransaction(transactionObj.getTransactionObject(), this.createP2pSuccCallback,this.createP2pErrCallback); 
    }
    else
    {
      var transactionObj = applicationManager.getTransactionManager();
      transactionObj.createTransaction(transactionObj.getTransactionObject(), this.createP2pSuccCallback,this.createP2pErrCallback);
    }
  };
  PayAPerson_PresentationController.prototype.createP2pSuccCallback= function(res)
  {
    var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
    var transactionManager = applicationManager.getTransactionManager();
	var navMan=applicationManager.getNavigationManager();
    var navigateToForm=navMan.getEntryPoint("payaperson");
    var fromAccountID = transactionManager.getTransactionObject().fromAccountNumber;
    transactionManager.clearTransferObject();
    if(navigateToForm === "frmAccountDetails")
      {
        var data = {};
        data.type="success";
        data.typeOfTransaction="create";
        data.res = res;
        navMan.setCustomInfo("frmAccountDetails",data);
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.fetchAccountTransactions(fromAccountID); 
      }
    else
      {
        transModPresentationController.getTransactions();
        var data = {};
        data.type="success";
        data.typeOfTransaction="create";
        data.res = res;
        navMan.setCustomInfo("frmTransfers",data);
      }
  };
   PayAPerson_PresentationController.prototype.createP2pErrCallback= function(err)
  {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     else
    {
      var navMan=applicationManager.getNavigationManager();
      var navigateToForm=navMan.getEntryPoint("payaperson");
      var transactionManager = applicationManager.getTransactionManager();
      var fromAccountID = transactionManager.getTransactionObject().fromAccountNumber;
       transactionManager.clearTransferObject();
      if(navigateToForm === "frmAccountDetails")
      {
        var data = {};
        data.type="error";
        data.res = err.errorMessage;
        navMan.setCustomInfo("frmAccountDetails",data);
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.fetchAccountTransactions(fromAccountID); 
      }
      else
      {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.getTransactions();
        var data = {};
        data.type="error";
        data.res = err.errorMessage;
        navMan.setCustomInfo("frmTransfers",data);
      }
    }
  };
    PayAPerson_PresentationController.prototype.navigateToAddP2PRecipient=function(toForm)
  {
      var navMan=applicationManager.getNavigationManager();
      var previousFormdetails=navMan.getCustomInfo("frmRegP2PContactType");    
      this.entryPoint=previousFormdetails.entryPoint;
      this.commonFunctionForNavigation(toForm);
  };
    PayAPerson_PresentationController.prototype.searchInputStringForContactsList=function(inputString,contactsArray)
  {
      var recipientsManager = applicationManager.getRecipientsManager();
      var segmentData=recipientsManager.searchInputStringForContactsList(inputString,contactsArray);
      return segmentData;
  };
  PayAPerson_PresentationController.prototype.evaluateAmount=function(amount,fromAvlBal,data){
      var forUtility=applicationManager.getFormatUtilManager();
      fromAvlBal= forUtility.deFormatAmount(fromAvlBal);
	  amount = forUtility.deFormatAmount(amount);
   	  if(Number(amount)>Number(fromAvlBal))
      {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          var controller = applicationManager.getPresentationUtility().getController('frmP2pAmount', true);
          controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.amountGreaterThanAvailBal"));
      }
    else if (amount<=0)
      {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
          var controller = applicationManager.getPresentationUtility().getController('frmP2pAmount', true);
          controller.bindGenericError("Enter Valid Amount");
      }
   	  else
      {   applicationManager.getPresentationUtility().dismissLoadingScreen();       
          scope_PayAPersonPresentationController.goToFrequency(data); 
      }
  };
   PayAPerson_PresentationController.prototype.cancelCommon=function()
   {
        var transactionManager = applicationManager.getTransactionManager();
       transactionManager.clearTransferObject();
       var navManager = applicationManager.getNavigationManager(); 
       var navigateToForm=navManager.getEntryPoint("payaperson");
       navManager.navigateTo(navigateToForm);
     
   };
  PayAPerson_PresentationController.prototype.setTransactionObject  = function(transactionData)
  {
     var transactionObj = applicationManager.getTransactionManager();
    if(transactionData.amount!==undefined && transactionData.amount!==null)
      {
         transactionObj.setTransactionAttribute("amount",transactionData.amount);
      }
    if(transactionData.frequencyType!==undefined && transactionData.frequencyType!==null)
      {
        transactionObj.setTransactionAttribute("frequencyType",transactionData.frequencyType);
      }
    if(transactionData.isScheduled!==undefined && transactionData.isScheduled!==null)
      {
          if (transactionData.isScheduled === "true")
                transactionObj.setTransactionAttribute("isScheduled","1");
            else
                transactionObj.setTransactionAttribute("isScheduled","0");
      }
    if(transactionData.fromAccountNumber!==undefined && transactionData.fromAccountNumber!==null)
      {
       transactionObj.setTransactionAttribute("fromAccountNumber",transactionData.fromAccountNumber);
      }
    if(transactionData.payPersonPhone!==undefined && transactionData.payPersonPhone!==null)
      {
        transactionObj.setTransactionAttribute("p2pContact",transactionData.payPersonPhone);
      }
    if(transactionData.payPersonName!==undefined && transactionData.payPersonName!==null)
      {
        transactionObj.setTransactionAttribute("payPersonName",transactionData.payPersonName);
      }
    if(transactionData.personId!==undefined && transactionData.personId!==null)
      {
        transactionObj.setTransactionAttribute("personId",transactionData.personId);
      }
    if(transactionData.frequencyStartDate!==undefined && transactionData.frequencyStartDate!==null)
      {
        transactionObj.setTransactionAttribute("frequencyStartDate",transactionData.frequencyStartDate);
    	transactionObj.setTransactionAttribute("scheduledDate",transactionData.scheduledDate);
      }
    if(transactionData.frequencyEndDate!==undefined && transactionData.frequencyEndDate!==null)
      {
        transactionObj.setTransactionAttribute("frequencyEndDate",transactionData.frequencyEndDate);
      }
    if(transactionData.scheduledDate!==undefined && transactionData.scheduledDate!==null)
      {
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
    if(transactionData.isScheduled === "true")
     transactionObj.setTransactionprimaryAttribute({"transactionId":transactionData.transactionId});
    scope_PayAPersonPresentationController.getP2pAccounts();
  };
   PayAPerson_PresentationController.prototype.deleteTransaction = function(data)
   {
     var criteria = {
       "transactionId":data,
       "transactionType":"P2P"
     };
      var transactionObj = applicationManager.getTransactionManager();
     transactionObj.deleteTransaction(criteria,scope_PayAPersonPresentationController.deleteSuccess,scope_PayAPersonPresentationController.deleteError);
     
   };
   PayAPerson_PresentationController.prototype.deleteSuccess = function(res)
   {
     
     var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
     transModPresentationController.getTransactions();
     var navMan=applicationManager.getNavigationManager();
     var data = {};
     data.type="success";
     data.typeOfTransaction="delete";
     data.res = res;
     navMan.setCustomInfo("frmTransfers",data);
   };
   PayAPerson_PresentationController.prototype.deleteError = function(err)
   {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(err["isServerUnreachable"])
                  applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
    {
      var navMan=applicationManager.getNavigationManager();
      var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
      transModPresentationController.getTransactions();
      var data = {};
      data.res = err.errorMessage;
      data.type="error";
      navMan.setCustomInfo("frmTransfers",data);
    }
   };
  PayAPerson_PresentationController.prototype.setFlowType = function(type)
  {
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.setFlowType(type);
  };
  PayAPerson_PresentationController.prototype.getFlowType = function()
  {
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getFlowType();
  }; 
  PayAPerson_PresentationController.prototype.getAllP2PPayees = function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getAllPayees();
  };
  PayAPerson_PresentationController.prototype.getP2PPayeeDetails= function(){   
    var recipientsManager = applicationManager.getRecipientsManager();
    return recipientsManager.getP2PPayeeDetails();
  };
  PayAPerson_PresentationController.prototype.clearP2PPayeeData= function(){
    var recipientsManager = applicationManager.getRecipientsManager();
    recipientsManager.clearP2PPayeeData();
    scope_PayAPersonPresentationController.clearBuilderNonGeneratedAttributes();
  };
  PayAPerson_PresentationController.prototype.navToFormBasedOnEntryPoint= function(entryPoint){
      var navMan=applicationManager.getNavigationManager();
      var formName=navMan.getEntryPoint(entryPoint);
      this.clearP2PPayeeData();
      this.commonFunctionForNavigation(formName);
  };
  PayAPerson_PresentationController.prototype.deleteRecurrenceP2p = function(data)
   {
     var criteria = {
       "transactionId":data
     };
      var transactionObj = applicationManager.getTransactionManager();
     transactionObj.deleteRecurrenceTransaction(criteria,scope_PayAPersonPresentationController.deleteSuccess,scope_PayAPersonPresentationController.deleteError);
     
   };
  PayAPerson_PresentationController.prototype.contactCallBack=function(object){
    var controller=null;
    var recipientName="";
    var resultContact=(JSON.parse(object));
    var cntType= scope_PayAPersonPresentationController.contactTypeForContacts;
    var transactionObj = applicationManager.getTransactionManager();
    if(resultContact.firstName){
    	recipientName=resultContact.firstName;
    }else if(resultContact.firstName==="" ||resultContact.firstName===null || resultContact.firstName===undefined){
      recipientName="";
    }
    if(resultContact.lastName){
      recipientName=recipientName+" "+resultContact.lastName;
    }
    else if(resultContact.lastName==="" || resultContact.lastName===null || resultContact.lastName===undefined){
      recipientName=recipientName;
    }          
    if(scope_PayAPersonPresentationController.getContactType()==="phone"){
      var recipientsManager = applicationManager.getRecipientsManager();
      recipientsManager.setP2PPayeeAttribute("phone",resultContact.phone.replace(/[()-/ /]/g,""));
      recipientsManager.setP2PPayeeAttribute("email","");
      recipientsManager.setP2PPayeeAttribute("name",recipientName);
      controller = applicationManager.getPresentationUtility().getController('frmP2PRecPhoneNo', true);
    }else{
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setP2PPayeeAttribute("phone","");
      	recipientsManager.setP2PPayeeAttribute("email",resultContact.email);
        recipientsManager.setP2PPayeeAttribute("name",recipientName);
        controller = applicationManager.getPresentationUtility().getController('frmP2PRecEmail', true);
    }
    controller.bindContactData(resultContact);
  };
  
  PayAPerson_PresentationController.prototype.navigateToContacts=function(type)
  {
    scope_PayAPersonPresentationController.contactTypeForContacts=type;
      var options = {isAccessModeAlways:true};
	  var result = kony.application.checkPermission(kony.os.RESOURCE_CONTACTS,options);
		if(result.status == kony.application.PERMISSION_DENIED) {
    	kony.application.requestPermission(kony.os.RESOURCE_CONTACTS,function success(response){
           if(response.status == kony.application.PERMISSION_GRANTED)
  			{
	 		scope_PayAPersonPresentationController.pickContact();
  			}
    		else if(response.status == kony.application.PERMISSION_DENIED)
  			{
      		    var scope=this;
              	var i18nKey="";
              	var cntType= scope_PayAPersonPresentationController.contactTypeForContacts;
    			if(cntType==="phone"){
                  var controller = applicationManager.getPresentationUtility().getController('frmP2PRecPhoneNo', true);
                  scope=controller.getScope();
              	  i18nKey= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.permissionContacts");
                }
              	else{
                  var controller = applicationManager.getPresentationUtility().getController('frmP2PRecEmail', true);
                  scope=controller.getScope();
                  i18nKey= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.permissionContacts");
              	}
        applicationManager.getDataProcessorUtility().showToastMessageError(scope,i18nKey);
  			}
        });
   	}
		else if(result.status == kony.application.PERMISSION_GRANTED ){
		scope_PayAPersonPresentationController.pickContact();
   		}    	  

 };
    PayAPerson_PresentationController.prototype.pickContact=function(){
      if(!scope_PayAPersonPresentationController.contactPickerObject){
    	scope_PayAPersonPresentationController.contactPickerObject= new contactsAPI.ContactPicker();
      }
    var cntType= scope_PayAPersonPresentationController.contactTypeForContacts;
    if(cntType==="phone")
    	scope_PayAPersonPresentationController.contactPickerObject.selectSinglePhoneNumber(scope_PayAPersonPresentationController.contactCallBack);
    else
    	scope_PayAPersonPresentationController.contactPickerObject.selectSingleEmail(scope_PayAPersonPresentationController.contactCallBack);
  };
  return PayAPerson_PresentationController;
});
