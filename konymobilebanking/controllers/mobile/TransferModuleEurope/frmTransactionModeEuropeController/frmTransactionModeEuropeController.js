define({ 
preShow: function(){
    if(kony.os.deviceInfo().name==="iPhone"){
      this.view.flxHeader.isVisible = false;
    }
    this.setSegmentData();
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);  
  },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  initActions: function(){
    var scope = this;
    this.view.segTransactionMode.onRowClick = function(){
      scope.segmentRowClick();
    }
  },
  segmentRowClick: function(){
    var type = this.view.segTransactionMode.data[this.view.segTransactionMode.selectedIndex[1]].lblTransactionMode;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    transferModPresentationController.transactionMode = type;
    transferModPresentationController.showAccounts(type);
  },
  backNavigation:function()
  {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();

  },

  setSegmentData: function(){
    var data = [];
    var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    if(transferModPresentationController.isEligibleTransferType("isKonyBankAccountsTransfer")=="true")
      data.push({
        "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToMyDBXAccount"),
        "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToMyDBXAccountInfo"),
        "imgArrow":"chevron.png"
      });
    if(transferModPresentationController.isEligibleTransferType("isOtherBankAccountsTransfer")=="true")
      data.push({
        "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccounts"),
        "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccountsInfo"),
        "imgArrow":"chevron.png"
      });
    if(transferModPresentationController.isEligibleTransferType("isInternationalAccountsTransfer")=="true")
      data.push({
        "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccounts"),
        "lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccountsInfo"),
        "imgArrow":"chevron.png"
      });
    this.view.segTransactionMode.setData(data);
  }
});