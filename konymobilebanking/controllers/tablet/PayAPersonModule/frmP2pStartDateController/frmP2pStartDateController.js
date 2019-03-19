define({
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initFrequencyView();
    this.initDateView();
    this.initCalendar();
    this.initHeaderActions();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initDateView: function() {   
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var dateView = this.view.DateView;
    var btnContinue = this.view.btnContinue;
    if (data.duration === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")) {
      dateView.onDateEntered = this.changeButtomState.bind(this, true);
      dateView.onDateRemoved = this.changeButtomState.bind(this, false);
      this.changeButtomState(false);
      btnContinue.setVisibility(true);
      btnContinue.onClick = this.continueAction;
    } else {
      btnContinue.setVisibility(false);
    }
    dateView.clear();
  },

  initCalendar: function() {
    var self = this;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var calendarView = this.view.customCalendarTablet;
    calendarView.startDateFlow();
    calendarView.selectedDate = "";
    calendarView.triggerContinueAction = false;
    calendarView.unHighlightAllDays(); 
    calendarView.setFirstEnabledDate();
    if (data.duration === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")) {
      calendarView.onDateSelectedCallback = function(dateString) {
        var date = self.getSanitizedDateString(dateString, false);
        self.view.DateView.setDate(date);
      };
    } else {
      calendarView.onDateSelectedCallback = function(dateString) {
        var date = self.getSanitizedDateString(dateString, false);
        self.view.DateView.setDate(date);
        self.continueAction();
      };
    }

    if (data.scheduledDate && data.scheduledDate !== "") {
      var date = self.getSanitizedDateString(data.scheduledDate, false);
      self.view.DateView.setDate(date);
    }
  },

  initFrequencyView: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var frequencyView = this.view.frequencyView;
    var frequencyType = data.frequencyType;
    frequencyView.setFirstRowNamei18("kony.mb.tablet.transferFrequency");
    frequencyView.setFirstRowValue(data.frequencyType);
    var activeTabText;
    var activeTabSkin;
    if (data.frequencyType === "Once") {
      activeTabText = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.SendDate");
      activeTabSkin = "sknLbl004b95SSP30PxTab";
      frequencyView.thirdRowVisibility = false;
    } else {
      frequencyView.setThirdRowNamei18("kony.tab.SetFrequency");
      frequencyView.setThirdRowValue(data.duration);
      activeTabText = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.SelectStartDate");
      activeTabSkin = "sknLbl3E4F56SSP32pxTab";
      frequencyView.thirdRowVisibility = true;
    }
    frequencyView.setActiveTabValue(activeTabText);
    frequencyView.activeTabSkin = activeTabSkin;
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backAction;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  handleCancelAction: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.cancelCommon();
  },

  backAction: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  continueAction: function() {  
    var date = this.view.DateView.getDateString();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    if (data.frequencyType === "Once" 
        || data.duration === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")) {
      payeeMod.presentationController.transferScheduledDate(date); 
    } else {
      payeeMod.presentationController.transferScheduledStrtDate(date);
    }
  },

  changeButtomState: function(isEnabled) {
    var button = this.view.btnContinue;
    button.setEnabled(isEnabled);
    button.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },

  getSanitizedDateString: function(dateString, appendSeparator) {
    var sanitizedDate;
    if (dateString && dateString !== "") {
      var separator = appendSeparator ? "/" : "";
      var date = new Date(dateString); 
      var month = date.getMonth() + 2;
      if (month <= 9) {
        month = "0" + month;
      }

      var day = date.getDate();
      if (day <= 9) {
        day = "0" + day;
      }
      var year = date.getFullYear();
      sanitizedDate =  month + separator + day + separator + year;
    }
    return sanitizedDate;
  }, 

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
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
  }
});