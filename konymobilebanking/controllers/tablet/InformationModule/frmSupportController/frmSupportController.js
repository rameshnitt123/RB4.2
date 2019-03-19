define({
  informationPC: null,

  preShow: function() {
    this.setSegmentData();
    this.initActions();
    this.initHeaderActions();
    this.view.lblAppVersion.text = kony.i18n.getLocalizedString("kony.mb.Support.AppVersion") + " " + appConfig.appVersion;

    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUCONTACT);
    this.enableOrDisableHamburger();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  initActions: function() {
    this.view.btnCallBranch.onClick = this.callUs;
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeader.flxBack.onClick = this.isIpad;  
    }
  },

  callUs: function() {
    applicationManager.getPresentationUtility().showLoadingScreen(); 
    this.getInformationModule().presentationController.onClickCallUs(); 
  },

  enableOrDisableHamburger: function() {
    var userObj = applicationManager.getUserPreferencesManager();
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (userObj.isUserLoggedin()) {
      if (isIpad) {
        this.view.flxFooter.setVisibility(true);
      } else {
        this.view.customHeader.flxBack.imgBack.src = "hamburger.png";
        this.view.flxFooter.setVisibility(false); 
      } 
    } else {
      if (!isIpad) {
        this.view.customHeader.flxBack.imgBack.src = "backbutton.png";
        this.view.customHeader.flxBack.onClick = this.backIcon;
        this.view.flxFooter.setVisibility(false);
      }      
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

  showDial: function(phoneNumber) {     
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.phone.dial(phoneNumber);         
  },


  backIcon: function() {
    this.getInformationModule().presentationController.commonFunctionForNavigation("frmLogin");
  },

  setSegmentData: function() {
    var segment = this.view.segSupport;
    var configManager = applicationManager.getConfigurationManager();
    var data = [
      {
        imgArrow: "chevron.png",
        lblSupportTitle: configManager.constants.FAQ
      },
      {
        imgArrow: "chevron.png",
        lblSupportTitle: configManager.constants.TERMS
      },
      {
        imgArrow: "chevron.png",
        lblSupportTitle: configManager.constants.PRIVACY
      }
    ];
    segment.setData(data);
    segment.onRowClick = function() {
      var selectedvalue = segment.selectedItems[0].lblSupportTitle;
      var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");

      switch (selectedvalue) {
        case configManager.constants.PRIVACY:
          applicationManager.getPresentationUtility().showLoadingScreen(); 
          informationPC.presentationController.onClickPrivacyPolicy(selectedvalue);        
          break;
        case configManager.constants.TERMS:
          applicationManager.getPresentationUtility().showLoadingScreen();  
          informationPC.presentationController.onClickTermsAndConditions(selectedvalue);
          break;
        case configManager.constants.ABOUT:
          applicationManager.getPresentationUtility().showLoadingScreen(); 
          informationPC.presentationController.onClickAboutUs(selectedvalue); 
          break;
        case configManager.constants.FAQ:
          applicationManager.getPresentationUtility().showLoadingScreen();
          informationPC.presentationController.onClickFAQs(selectedvalue); 
          break;
      }
    };
  },

  getInformationModule: function() {
    if (!this.informationPC) {
      this.informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
    }
    return this.informationPC;
  },

});