define({ 

  preShow : function(){
    try
    {
      this.renderTitleBar();
      this.setSegmentData();
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
  initActions : function(){
    try
    {
      var scope = this;
      this.view.segTransactionMode.onRowClick =  this.segmentRowClick;   
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation.bind(this);
      this.view.customHeaderTablet.btnRight.onClick = this.goToTransfers.bind(this);
    }
    catch(ex)
    {

    }
  },
  segmentRowClick : function(){
    try
    {
      var type = this.view.segTransactionMode.data[this.view.segTransactionMode.selectedIndex[1]].lblTransactionMode;
      applicationManager.getPresentationUtility().showLoadingScreen();
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.transactionMode = type;
      transferModule.presentationController.showAccounts(type);        
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

  setSegmentData : function(){
    try
    {
      var data = [
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsInfo"),
          "imgArrow":"chevron.png"
        },
        /*
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccountsInfo"),
          "imgArrow":"chevron.png"
        },
        */
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembersInfo"),
          "imgArrow":"chevron.png"
        },
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccountsInfo"),
          "imgArrow":"chevron.png"
        },
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransferInfo"),
          "imgArrow":"chevron.png"
        }
        /*,
        {
          "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransfer"),
          "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransferInfo"),
          "imgArrow":"chevron.png"
        }*/
      ];
      this.view.segTransactionMode.setData(data);        
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
  
  goToTransfers : function()
  {
    try
    {
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
      transMod.presentationController.getTransactions();        
    }
    catch(ex)
    {

    }
  }
  
});