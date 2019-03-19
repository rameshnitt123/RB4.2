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
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var index = payeeMod.presentationController.getSelectedFrequencyIndex();
    this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9Tab";
    this.view.segFrequency.retainSelection = false;

    if (index && index !== "") {
      this.view.segFrequency.selectedRowIndex = [0,index];
      this.view.segFrequency.retainSelection = true;
    }
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.segFrequency.onRowClick = this.segmentRowClick;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  segmentRowClick: function() {
    var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.switchFrequencyType(index);
  },
  
  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  handleCancelAction: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.cancelCommon();
  },

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var amount =  configurationManager.getCurrencyCode() + " " + data.amount;
    var fromAccountName = this.constructAccountName(data);
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = data.payPersonName;
    rightPane.lblThirdCheckedRowName.text = fromAccountName;
    rightPane.lblFourthCheckedRowName.text = amount;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  }
});