define({
  freq:'',

  init : function(){
    try{
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);      
    }
    catch(ex)
    {

    }
  },

  preShow : function(){
    try
    {
      this.renderTitleBar();
      this.initialUiSettings();      
      this.initActions();

      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);            
    }
    catch(ex)
    {

    }
  },

  initialUiSettings : function()
  {
    try
    {
      this.view.customCalendarTablet.endDateFlow();
      if(this.view.customCalendarTablet.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.view.customCalendarTablet.selectedDate='';
      this.view.customCalendarTablet.triggerContinueAction = false;
      this.view.customCalendarTablet.updateDateBullets();
      this.view.customCalendarTablet.unHighlightAllDays(); 
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var startdate= transMod.presentationController.getTransObject();

      if(startdate.frequencyEndDate!== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== "")
        this.view.customCalendarTablet.setSelectedDate(startdate.frequencyEndDate);
      this.view.customCalendarTablet.setFirstEnabledDate(startdate.scheduledDate); 
      
      var navigationManager = applicationManager.getNavigationManager();
      var transferFrequencyType = navigationManager.getCustomInfo("transferFrequencyType");
      this.view.lblDaily.text = transferFrequencyType;      
      
      //right pane settings
      this.setTransferType();
      this.setBenificiaryAccount();
      this.setFromAccount();
      this.setTransferAmount();
    }
    catch(ex)
    {

    }
  },

  initActions : function(){
    try
    {
      var scope = this;

      this.view.btnContinue.onClick = this.continueAction;

      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;

      this.view.customHeaderTablet.btnRight.onClick = function(){
        scope.cancelOnClick();

      };         
    }
    catch(ex)
    {

    }
  },
  
  backNavigation : function()
  {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();     
    }
    catch(ex)
    {

    }
  },
  
  cancelOnClick : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.cancelCommon();       
    }
    catch(ex)
    {

    }
  },

  continueAction : function(){
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.transferScheduledEndDate(this.view.customCalendarTablet.getSelectedDate());          
    }
    catch(ex)
    {

    }
  },

  renderTitleBar : function(){
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }         
    }
    catch(ex)
    {

    }   
  },
  
  setTransferType : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "MyKonyAccounts":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsTablet");
          break;
        case "OtherKonyBankMembersCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.myKonyBankBenificiary");
          break;
        case "OtherBankAccountsCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts");
          break;
        case "InternationalTransferCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.internationalTransferType");
      }
    }
    catch(ex)
    {

    }
  },

  setBenificiaryAccount : function()
  {
    try
    {       
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblSecondCheckedRowName.text = transactionObject.toAccountName + "-" +transactionObject.toAccountNumber.slice(-4);
    }
    catch(ex)
    {

    }
  },

  setFromAccount : function()
  {
    try
    {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblThirdCheckedRowName.text = transactionObject.fromAccountName + "-" + transactionObject.fromAccountNumber.slice(-4);        
    }
    catch(ex)
    {

    }
  },

  setTransferAmount : function()
  {
    try
    {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      var configManager = applicationManager.getConfigurationManager();

      this.view.RightPane.lblFourthCheckedRowName.text = configManager.getCurrencyCode() + transactionObject.amount;        
    }
    catch(ex)
    {

    }    
  }   
});