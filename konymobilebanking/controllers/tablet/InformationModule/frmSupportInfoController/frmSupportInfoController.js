define({
  searchStatus: {
    
    isTitleBarVisible: true,
    isSearchBoxVisible: true,
    isSearchBoxWithCancelVisible: false,
    isSegmentVisible: false
  },

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmSupportInfo");
    var populateData = navData.richTextData;
    var headerValue = navData.header;
    this.initialUiSettings(headerValue, populateData);
    this.renderScreen();
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();      
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  initActions: function() {
    this.view.customHeader.flxBack.onClick = this.backIcon;
  },
  
  initialUiSettings: function(headerValue, populateData) {
    var self = this;
    var configManager = applicationManager.getConfigurationManager();
    switch (headerValue) {
      case configManager.constants.FAQ:
        self.view.title = configManager.constants.HEADERFAQ;
        self.view.customHeader.lblHeaderTitle.text = configManager.constants.HEADERFAQ;
        self.searchStatus.isSearchBoxVisible = false;
        self.bindFAQData(populateData);          
        self.searchStatus.isSegmentVisible = true;         
        break;
      case configManager.constants.TERMS:
        self.searchStatus.isSearchBoxVisible = false;
        self.searchStatus.isSegmentVisible = false; 
        self.view.title = configManager.constants.HEADERTERMSANDCONDITIONS;
        self.view.customHeader.lblHeaderTitle.text = configManager.constants.HEADERTERMSANDCONDITIONS;
        self.view.rtxInfo.text = populateData;
        break;
      case configManager.constants.PRIVACY:
        self.searchStatus.isSearchBoxVisible = false;
        self.searchStatus.isSegmentVisible = false;
        self.view.title = configManager.constants.HEADERPRIVACYPOLICY;
        self.view.customHeader.lblHeaderTitle.text = configManager.constants.HEADERPRIVACYPOLICY;
        self.view.rtxInfo.text = populateData;
        break;
    }
    this.view.customHeader.lblHeaderTitle.text = headerValue;
  },

  backIcon: function() {
    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
    informationPC.presentationController.commonFunctionForNavigation("frmSupport");
  },

  bindFAQData: function(data) {
    this.view.segFaq.widgetDataMap = {
      lblQuestion: "question",
      lblAnswer: "answer",
      lblHeader : "lblHeader"
    };
    this.view.segFaq.setData(data);
  },

  renderScreen: function() {
    var flxHeight = 0;
    this.view.flxHeader.setVisibility(false);
    this.view.flxHeaderTermsConditions.setVisibility(false);
    this.view.flxHeaderSearchbox.setVisibility(false);
    this.view.customSearch.flxSearchMain.setVisibility(false);
    this.view.customSearch.flxHeader.setVisibility(false);
    if (this.isIpad()) {
      if (this.searchStatus.isSearchBoxVisible) {
        this.view.flxHeaderTermsConditions.setVisibility(true);
        this.view.customSearch.flxSearchMain.setVisibility(true);
        flxHeight = flxHeight + 50;
      }
      if (this.searchStatus.isSearchBoxWithCancelVisible) {
        this.view.flxHeaderSearchbox.setVisibility(true);
        flxHeight = flxHeight + 40;
      }
    } else {
      if (this.searchStatus.isTitleBarVisible) {
        this.view.flxHeader.setVisibility(true);
        flxHeight = flxHeight + 56;
      }
      if (this.searchStatus.isSearchBoxVisible) {
        this.view.flxHeaderTermsConditions.setVisibility(true);
        this.view.customSearch.flxSearchMain.setVisibility(true);
        flxHeight = flxHeight + 50;
      }
      if (this.searchStatus.isSearchBoxWithCancelVisible) {
        this.view.flxHeaderSearchbox.setVisibility(true);
        flxHeight = flxHeight + 40;
      }
    }
    this.view.flxTermsConditions.top = flxHeight;
    if (this.searchStatus.isSegmentVisible) {
      this.view.rtxInfo.setVisibility(false);
      this.view.segFaq.setVisibility(true);
    }
    else {
      this.view.rtxInfo.setVisibility(true);
      this.view.segFaq.setVisibility(false);
    }
  },

  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },
});