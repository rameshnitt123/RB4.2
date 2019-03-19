define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.updateRightPane();
    this.initFrequencyView();
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var index = payAPersonModule.presentationController.getIndexForDuration();
    this.view.segDuration.retainSelection = false;

    if (index) {
      this.view.segDuration.selectedRowIndex = [0, index];
      this.view.segDuration.retainSelection = true;
    }

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.segDuration.onRowClick = this.segmentRowClick;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  handleCancelAction: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.cancelCommon();
  },
  
  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  initFrequencyView: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var frequencyView = this.view.frequencyView;
    var frequencyType = data.frequencyType;
    frequencyView.setFirstRowNamei18("kony.mb.tablet.transferFrequency");
    frequencyView.setFirstRowValue(data.frequencyType);
    frequencyView.setActiveTabValue(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.setFrequency"));
    frequencyView.activeTabSkin = "sknLbl004b95SSP30PxTab";
  },

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payAPersonModule.presentationController.getP2PObject();
    var amount =  configurationManager.getCurrencyCode() + " " + data.amount;
    var fromAccountName = this.constructAccountName(data);
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = data.payPersonName;
    rightPane.lblSecondCheckedRowName.text = fromAccountName;
    rightPane.lblThirdCheckedRowName.text = amount;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },  

  segmentRowClick: function() {
    var index = this.view.segDuration.data[this.view.segDuration.selectedIndex[1]].lblDuration;
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.switchDurationType(index);
  }
});