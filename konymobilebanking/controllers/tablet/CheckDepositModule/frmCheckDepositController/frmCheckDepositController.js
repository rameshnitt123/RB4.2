define({ 
  depositModule: null,
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);  
//     this.view.customPopup.flxPopupWrapper.lblPopup.doLayout =  function(){   //calling anonymous function as binding function does not works for doLayout
//           var labelWidth = this.frame.width;
//           var totallength =  parseInt(labelWidth)+25;         				   //20 - width of image and 5 padding
//           var screenWidth = kony.os.deviceInfo().screenWidth;
//           var screenHeight = kony.os.deviceInfo().screenHeight;

//           if(screenWidth>screenHeight){
//             screenWidth = screenHeight;        								    //as orientation of app is fixed so taking minimum width as screen width
//           }
//           var remainingSpace = parseInt(screenWidth) - parseInt(totallength);
//           var leftInDP = parseInt(remainingSpace/2);
//           this.parent.imgPopup.left=leftInDP+"dp";
//           this.parent.forceLayout();  
//         };
  },

  preShow: function() { 
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var checkDeposit = applicationManager.getLoggerManager();              
    checkDeposit.setCustomMetrics(this, false, "RDC");
  },

  initActions: function() {
    this.initHeaderActions();
    this.setFooterActions();
    this.showPopupSuccess();
    this.setSegmentData();
    this.view.flxBox.tbxSearch.setFocus(false);
    this.view.flxBox.tbxSearch.text = '';
    this.view.customSearchbox.flxSearchMain.tbxSearch = '';
    this.widgetVisibilityToggle(this.view.flxSearch, this.view.flxHeaderSearchbox);
    this.view.flxCheckDeposit.onClick = this.goToPickAccount;
    this.view.flxBox.tbxSearch.onTextChange = this.showHideSearch;
    this.view.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;
    this.view.segDepositFrom.onRowClick = this.segRowClick;
  },

  initHeaderActions: function() {
    if (!this.isIpad()) {
      this.view.customHeader.flxHeader.flxBack.onClick = this.backNavigation;
    }
  },

  setFooterActions: function() {
      var configManager = applicationManager.getConfigurationManager();
      var MenuHandler = applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this, configManager.constants.Deposits);
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  getWidgetDataMap: function() {
    var dataMap = {
      lblAccountName: "toAccountName",
      lblAccountBalValue: "amount",     
      lblAccountBal: "transactionDate",
      lblHeader: "lblHeader",
      imgUpArrow: "imgUpArrow"
    };
    return dataMap;
  },

  setSegmentData: function(searchData) {
    this.widgetVisibilityToggle(this.view.segDepositFrom, this.view.flxNoTransactions);
    var navManager = applicationManager.getNavigationManager();
    var depositData = [];

    if (searchData) {		
      depositData = searchData;
    } else {
      depositData =  navManager.getCustomInfo("frmCheckDeposit").depositsData;
    }
    var segData = [];
    var postedDepositData = [];
    var pendingDepositData = [];

    if (depositData && depositData.length) {
      pendingDepositData = depositData[0];
      postedDepositData = depositData[1];
      this.view.segDepositFrom.widgetDataMap = this.getWidgetDataMap();
      var pendingTranHeaderLabel = this.getString("kony.mb.accdetails.pendingTransactions");
      var postedTranHeaderLabel = this.getString("kony.mb.accdetails.postedTransactions");

      if (postedDepositData.length > 0 && pendingDepositData.length > 0) {
        segData = [[{"lblHeader": pendingTranHeaderLabel, "imgUpArrow": {"src": "arrowdown.png"}}, pendingDepositData],
                   [{"lblHeader": postedTranHeaderLabel, "imgUpArrow": {"src": "arrowdown.png"}}, postedDepositData]];
      } else if (pendingDepositData.length > 0) {
        segData =  [[{"lblHeader": pendingTranHeaderLabel, "imgUpArrow": {"src": "arrowdown.png"}}, pendingDepositData]];
      } else if (postedDepositData.length > 0) {
        segData =  [[{ "lblHeader": postedTranHeaderLabel, "imgUpArrow": {"src": "arrowdown.png"}}, postedDepositData]];
      } else {
        this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segDepositFrom);
      }
    } else {
      this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segDepositFrom);
    }
    this.view.segDepositFrom.setData(segData);
    this.view.forceLayout();
  },

  tbxSearchOnTextChange: function() {
    var query = this.view.customSearchbox.flxSearchMain.tbxSearch.text;

    if (query) {
      var segmentData = this.view.segDepositFrom.data;
      var dataToSearch = [];
      var headers = [];
      if (segmentData) {
        for (var i = 0; i < segmentData.length; i++) {
          var sectionData = segmentData[i];
          headers.push(sectionData[0].lblHeader);
          dataToSearch.push(sectionData[1]);
        }
      }
      var searchSegData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("toAccountName", query, dataToSearch, headers);

      if (searchSegData.length) {
        this.view.segDepositFrom.setData(searchSegData);
        this.widgetVisibilityToggle(this.view.segDepositFrom, this.view.flxNoTransactions);
      } else {
        this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segDepositFrom);
      }
    } else {
      this.setSegmentData(null);
    }
  },

  showHideSearch: function() {
    var query = this.view.flxBox.tbxSearch.text.toLowerCase();
    if (!this.view.flxHeaderSearchbox.isVisible) {
      this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(true);
      this.widgetVisibilityToggle(this.view.flxHeaderSearchbox, this.view.flxSearch);
      this.view.customSearchbox.flxSearchMain.tbxSearch.text = query;
    }
    this.view.customSearchbox.flxSearchMain.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
  },

  cancelSearch: function() {
    this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(false);
    this.view.flxBox.tbxSearch.text = '';
    this.view.customSearchbox.flxSearchMain.tbxSearch = '';
    this.view.flxBox.tbxSearch.placeholder = this.getString("kony.tab.common.Search");
    this.view.customSearchbox.flxSearchMain.tbxSearch.placeholder = this.getString("kony.tab.common.Search");
    this.widgetVisibilityToggle(this.view.flxSearch, this.view.flxHeaderSearchbox);
    this.setSegmentData(null);
  },  

  onDisputeClick: function() {
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmCheckDeposit");
    data.disputedSuccess = true;
    navManager.setCustomInfo("frmCheckDeposit", data);
    
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.commonFunctionForNavigation("frmCheckDeposit");
  },

  segRowClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedSectionIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[0]);
    var selectedRowIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[1]);
    var transactionData = this.view.segDepositFrom.data[selectedSectionIndex][1][selectedRowIndex];
    transactionData.onDisputeClick = this.onDisputeClick;
    this.getCheckDepositModule().presentationController.goToDepositDetails(transactionData);
  },

  goToPickAccount: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.getCheckDepositModule().presentationController.navigationFromNewCheckDeposit();
  },

  showPopupSuccess: function() {		
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmCheckDeposit");

    if (data) {
      if (data.transactionSuccess) {
        data.transactionSuccess = false;
        var popupMsg = this.getString("kony.tab.common.transactionMessage") + " " + data.refId;
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scope, popupMsg);
        navManager.setCustomInfo("frmCheckDeposit", data);
      } else if (data.disputedSuccess) {
        data.disputedSuccess = false;
        var msg = this.getString("kony.mb.checkDeposit.disputeTranscation");
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scope, msg);
        navManager.setCustomInfo("frmCheckDeposit", data);
      } else if (data.transactionError) {
        data.transactionError = false;
        var errMsg = data.transactionErrorMsg;
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, errMsg);
        navManager.setCustomInfo("frmCheckDeposit", data);
      }
    }
  },

  getCheckDepositModule: function() {
    if (!this.depositModule) {
      this.depositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    }
    return this.depositModule;
  },

  getString: function(key) {
    return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },

  widgetVisibilityToggle: function(visibleElement, invisibleElement) {
    if (visibleElement) {
      visibleElement.setVisibility(true);
    }

    if (invisibleElement) {
      invisibleElement.setVisibility(false);
    }
  },

  isIpad: function() {
    return applicationManager.getDeviceUtilManager().isIpad();
  }
});