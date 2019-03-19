define({
  freq:'',
  startDateKey: '',

  onNavigate : function (obj) {
    try
    {
      if(obj===undefined){
        return;
      }
      this.startDateKey = obj;
      if(this.startDateKey==="oneTime"){
        this.view.customHeaderTablet.lblHeaderTitle.text = "SEND DATE";
      }else{
        this.view.customHeaderTablet.lblHeaderTitle.text = "START DATE";
      }          
    }
    catch(ex)
    {

    }
  },

  init : function(){
    try
    {
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
	  this.view.customCalendarTablet.startDateFlow();
      if(this.view.customCalendarTablet.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }


      this.view.customCalendarTablet.selectedDate='';
      this.view.customCalendarTablet.triggerContinueAction = true;
      this.view.customCalendarTablet.updateDateBullets();
      this.view.customCalendarTablet.unHighlightAllDays(); 
      this.view.customCalendarTablet.setFirstEnabledDate();
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var startdate= transMod.presentationController.getTransObject();
      var navMan=applicationManager.getNavigationManager();
      var data=navMan.getCustomInfo("frmTransfersStartDate");
      this.freq=data.freq;

      var info=navMan.getCustomInfo("frmTransfersDuration");
      if(info)
        if(startdate.scheduledDate!== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== ""&&((scope_TransfersPresentationController.getDuration()===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange")&&startdate.scheduledDate&&startdate.frequencyEndDate)||(scope_TransfersPresentationController.getDuration()===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")&&startdate.scheduledDate&&startdate.numberOfRecurrences)||startdate.frequencyType==="Once"))
          this.view.customCalendarTablet.setSelectedDate(startdate.scheduledDate);
      if(this.freq==="Once"){
        // this.view.customHeaderTablet.lblHeaderTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
        this.view.customHeaderTablet.lblHeaderTitle.text = "SEND DATE";
        this.view.btnContinue.isVisible = true;
        this.view.customCalendarTablet.triggerContinueAction = false;
      }else{
        // this.view.customHeaderTablet.lblHeaderTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
        this.view.customHeaderTablet.lblHeaderTitle.text = "START DATE";
        this.view.btnContinue.isVisible = false;
        this.view.customCalendarTablet.triggerContinueAction = true;
      }   
      
      var transferFrequencyType = navMan.getCustomInfo("transferFrequencyType");
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

      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;

      this.view.btnContinue.onClick = this.continueAction;

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

  backAction : function(){
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      if(this.startDateKey==="oneTime"){
        transferModule.presentationController.commonFunctionForNavigation("frmTransferFrequencyTab"); 
      }else if(this.startDateKey === "recurrence"){
        transferModule.presentationController.commonFunctionForNavigation("frmTransfersRecurrenceTab"); 
      }else{
        transferModule.presentationController.commonFunctionForNavigation("frmTransfersDurationTab"); 
      }         
    }
    catch(ex)
    {

    }      
  },

  continueAction : function(){
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

      if(this.freq==="Once"||this.freq==="NofRR")
      {        
        transferModule.presentationController.transferScheduledDate(this.view.customCalendarTablet.getSelectedDate()); 
      }
      else
      {
        transferModule.presentationController.transferScheduledStrtDate(this.view.customCalendarTablet.getSelectedDate());
      }          
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