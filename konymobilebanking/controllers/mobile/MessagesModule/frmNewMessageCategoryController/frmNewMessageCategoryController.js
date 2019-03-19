define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmMessagesCategoryPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
    this.renderTitleBar();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  renderTitleBar :function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
  setPreshowData : function(){
    this.setCategoryData();
    this.view.customHeader.flxSearch.isVisible = false;
    this.view.customHeader.btnRight.text = "CANCEL";
    this.view.customHeader.lblLocateUs.text = "NEW MESSAGE";
    this.view.customHeader.btnRight.isVisible = true;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxPickCategory.top = "56dp";
      this.view.flxCategory.top = "96dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxPickCategory.top = "0dp";
      this.view.flxCategory.top = "46dp";
    }
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.customHeader.btnRight.onClick = this.navToMessages;
    this.view.segCategory.onRowClick = this.onCategoryClick; 
  },
  goBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  navToMessages : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    if(MessageModule.presentationController.messageTabSelected === "INBOX")
    {
      MessageModule.presentationController.getInboxRequests();
    }
    else if(MessageModule.presentationController.messageTabSelected === "DELETED")
    {
      MessageModule.presentationController.getDeleteRequests();
    }
    else if (MessageModule.presentationController.messageTabSelected !== "INBOX" && MessageModule.presentationController.messageTabSelected !== "DELETED"){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();    
    }
  },
  onCategoryClick : function(){
      var navManager = applicationManager.getNavigationManager();
      var data = this.view.segCategory.selectedItems[0].categoryId;
 	  navManager.setCustomInfo("frmNewMessage",data);
      var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
      messagesMod.presentationController.commonFunctionForNavigation("frmNewMessage");
  },
 
  setCategoryData : function(){
    var dataMap = {
      "flxArrow": "flxArrow",
      "flxCategory": "flxCategory",
      "lblSeparator": "lblSeparator",
      "imgArrow": "imgArrow",
      "lblCategory": "lblCategory",
    };
    var navManager = applicationManager.getNavigationManager();
    this.view.segCategory.removeAll();
 	var categoriesData = navManager.getCustomInfo("frmNewMessageCategory");
    var data = [];
    if(categoriesData && categoriesData !== null){
    for(var i=0;i<categoriesData.length;i++)
      {
       var temp = {
        "lblSeparator": ".",
        "imgArrow": {"src" : "chevron.png"},
        "lblCategory": categoriesData[i].Name,
        "template": "flxCategory",
        "categoryId": categoriesData[i].id
      };
       data.push(temp);
      }
    this.view.segCategory.widgetDataMap = dataMap;
    this.view.segCategory.setData(data);
    }
    }

});