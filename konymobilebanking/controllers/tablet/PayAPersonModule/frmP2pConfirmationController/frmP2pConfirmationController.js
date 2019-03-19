define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.getData();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.btnConfirm.onClick = this.createP2pTransfer;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },
  
  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  handleCancelAction: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.cancelCommon();
  },

  getData: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    this.data = payeeMod.presentationController.getP2PObject();
    var forUtility = applicationManager.getFormatUtilManager();
    var amount = forUtility.formatAmountandAppendCurrencySymbol(this.data.amount);
    this.view.lblFromAccount.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.TransferAmount");
    this.view.lblFromAccountValue.text = amount;
    this.view.lblFromAccountValueDetails.text = this.data.fromAccountName;
    this.view.lblPayeeNameValue.text = this.data.payPersonName;
    this.view.lblPayeeAddress.text = this.data.p2pContact;
    this.view.txtareaDescription.text = !this.data.transactionsNotes ? "" : this.data.transactionsNotes;

    this.view.segDetails.widgetDataMap = {
      lblKey:"key",
      lblValue:"value"
    };

    this.segData = [];
    var val;
    if (this.data.isScheduled === "0") {
      val = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow");
    } else if (this.data.isScheduled === "1" && this.data.frequencyType === "Once") {
      val = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime");
    } else {
      val = this.data.frequencyType;
    }

    this.segData.push({
      key: "Frequency",
      value: val
    });

    if (this.data.frequencyType === "Once") {
      this.createViewForOnce();  
    } else {
      if (this.data.numberOfRecurrences !== "") {
        this.createViewForReccurence();
      } else {
        this.createViewForDateRange();
      }
    }
  },

  createViewForOnce: function() {  
    var segmentData = {
      key: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.transfersDate"),
      value: this.data.scheduledDate
    };
    this.segData.push(segmentData);
    this.view.segDetails.setData(this.segData);
  },

  createViewForReccurence: function() {
    var segmentData = {
      key: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
      value: this.data.scheduledDate
    };
    this.segData.push(segmentData);
    segmentData = {
      key: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"),
      value: this.data.numberOfRecurrences
    };
    this.segData.push(segmentData);
    this.view.segDetails.setData(this.segData);
  },

  createViewForDateRange: function() {
    var segmentData = {
      key: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
      value: this.data.frequencyStartDate
    };
    this.segData.push(segmentData);
    segmentData = {
      key: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.EndDate"),
      value: this.data.frequencyEndDate
    };

    this.segData.push(segmentData);
    this.view.segDetails.setData(this.segData);
  },

  createP2pTransfer: function() {
    var transMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    transMode.presentationController.createP2pTransferPres(this.view.txtareaDescription.text);
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
    rightPane.lblFifthCheckedRowName.text = data.frequencyType;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  }
});