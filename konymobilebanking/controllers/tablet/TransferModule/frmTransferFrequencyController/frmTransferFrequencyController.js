define({
  init : function()
  {
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

  preShow: function () 
  {
    try
    {
      this.renderTitleBar();
      this.initialUiSetUp();
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

  initActions: function () 
  {
    try
    {
      var scope = this;
      this.view.segFrequency.onRowClick = function () {
        scope.segmentRowClick();
      };
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = function(){
        scope.cancelOnClick(); 
      };       
    }
    catch(ex)
    {

    }    
  },

  initialUiSetUp : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var index = transferModule.presentationController.getSelectedFrequencyIndex();
      //       var navMan=applicationManager.getNavigationManager();
      //       var freqDet= navMan.getCustomInfo("frmTransferFrequency");
      //       var index=freqDet.index;
      //   this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
      // this.view.segFrequency.retainSelection = true;
      this.view.segFrequency.rowFocusSkin = "";
      this.view.segFrequency.retainSelection = false;
      
      if(index == null || index == undefined || index == "")
      {
        index = 0;
      }
      
      if(index!==null&&index!==undefined&&index !== "")
      {
        this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9Tab";
        this.view.segFrequency.retainSelection = true;
        // this.view.segFrequency.selectedRowIndices = [[0,[index]]];
        this.view.segFrequency.selectedRowIndex = [0,index];
      }
      
      //right pane ui settings
      this.setTransferType();
      this.setBenificiaryAccount();
      this.setFromAccount();
      this.setTransferAmount();
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

  segmentRowClick: function () 
  {
    try
    {
      var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.switchFrequencyType(index);         
    }
    catch(ex)
    {

    }    
  },

  renderTitleBar :function()
  {
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