define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preshow: function() {
    this.setFlowActions();
    this.initHeaderActions();
    this.setPreshowData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  setFlowActions: function() {
    this.view.segCards.onRowClick = this.navToEnrollCVVNumber;
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  setPreshowData: function() {
    this.view.segCards.isVisible = false;
    this.setCardData();
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  setCardData: function() {
    var navManager = applicationManager.getNavigationManager();
    var cardsData = navManager.getCustomInfo("frmEnrollCVV");   
    cardsData = applicationManager.getDataProcessorUtility().getCardDescription(cardsData);
    var data = [];
    var dataMap = {
      "lblCard": "cardName",
      "lblSeparator": "separator",
      "lblAccountNumber": "cardNumber"
    };

    for (var i in cardsData) {    
      var item = cardsData[i];  
      data.push({ 
        cardName: item.cardDescription,
        separator: " - ",
        cardNumber: item.cardNumber
      });
    }
    this.view.segCards.widgetDataMap = dataMap;
    this.view.segCards.setData(data);
    this.view.segCards.setVisibility(true);
  },

  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  navToEnrollCVVNumber: function() {
    var segment = this.view.segCards;
    var card = segment.selectedRowItems[0];
    var cardNumber = card.cardNumber;
    var navManager = applicationManager.getNavigationManager();
    var cardsData = navManager.setCustomInfo("frmEnrollCVVNumber", cardNumber);  
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.commonFunctionForNavigation("frmEnrollCVVNumber"); 
  },
});