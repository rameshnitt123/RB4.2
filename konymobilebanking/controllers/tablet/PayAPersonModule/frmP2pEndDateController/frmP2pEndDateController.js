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
    this.initActions();
    this.initHeaderActions();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initDateView: function() {
    var dateView = this.view.DateView;
    dateView.clear();
    dateView.onDateEntered = this.changeButtomState.bind(this, true);
    dateView.onDateRemoved = this.changeButtomState.bind(this, false);
  },

  initCalendar: function() {
    var self = this;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var calendarView = this.view.customCalendarTablet;
    calendarView.endDateFlow();
    calendarView.selectedDate = "";
    calendarView.triggerContinueAction = false;
    calendarView.isCalendarEndDateFrm = true;
    calendarView.unHighlightAllDays(); 
    calendarView.onDateSelectedCallback = function(dateString) {
      var date = self.getSanitizedDateString(dateString);
      self.view.DateView.setDate(date);
    };

    if (data.frequencyEndDate && data.frequencyEndDate !== "") {
      calendarView.setSelectedDate(data.frequencyEndDate);
    }
    calendarView.setFirstEnabledDate(data.scheduledDate);  
  },

  initFrequencyView: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var frequencyView = this.view.frequencyView;
    frequencyView.setFirstRowNamei18("kony.mb.tablet.transferFrequency");
    frequencyView.setFirstRowValue(data.frequencyType);
    frequencyView.setThirdRowNamei18("kony.tab.SetFrequency");
    frequencyView.setThirdRowValue(data.duration);
    frequencyView.activeTabSkin = "sknLbl3E4F56SSP32pxTab";
    frequencyView.setActiveTabValue(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.selectEndDate"));
  },

  initActions: function() {
    this.view.btnContinue.onClick = this.continueAction;
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
    payeeMod.presentationController.transferScheduledEndDate(date);
  },

  changeButtomState: function(isEnabled) {
    var button = this.view.btnContinue;
    button.setEnabled(isEnabled);
    button.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },

  getSanitizedDateString: function(dateString) {
    var sanitizedDate;
    if (dateString && dateString !== "") {
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
      sanitizedDate =  month + "" + day + "" + year;
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