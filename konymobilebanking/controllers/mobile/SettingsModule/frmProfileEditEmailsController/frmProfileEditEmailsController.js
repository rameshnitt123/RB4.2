define({ 
  timerCounter : 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate : function(param){
    var scope = this;
    if(param === "add")
      scope.successAdd();
    else if(param === "edit")
      scope.successUpdate();
  },
  frmPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    this.setEmailsData();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    this.checkForToastMessage();
  },
  setFlowActions : function(){
    var scope = this;
    this.view.segEmails.onRowClick = function(){
      scope.onSegEmailClick();
      //scope.navToEnterEmail("edit");
    };
    this.view.btnContinue.onClick = function(){
      scope.navToEnterEmail("add");
    };
     this.view.customHeader.flxBack.onClick = function () {
       var navManager = applicationManager.getNavigationManager();
       navManager.goBack();
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
  },
  setEmailsData : function(){
    var dataMap = {
    "flxDelete": "flxDelete",
    "lblDetail": "lblDetail",
    "lblDetailValue": "lblDetailValue"
	};
    /*var data = [
      {
        "lblDetail": "Primary Email ID",
        "lblDetailValue": "mante_albin@bednar.io",
        "template" : "flxDetails"
      },
      {
        "lblDetail": "Optional Email ID 01",
        "lblDetailValue": "adella_jaskolski@irwin.biz",
        "template" : "flxDetails"
      },
    ];*/
    var nav = applicationManager.getNavigationManager();
    var data = nav.getCustomInfo('frmProfileEditEmails');
    var temp = data;
    var scope = this;
    for(var i=0;i<data.length;i++){
      temp[i]["index"] = i;
      temp[i]["flxDelete"] = {"onClick" : scope.onSwipeDeleteClick.bind(scope,data[i],i)};
    }
    data = temp;
    this.view.segEmails.widgetDataMap = dataMap;
    if(data.length > 0){
      this.view.segEmails.isVisible = true;
      this.view.lblUSer.text = "Select the email to edit";
      this.view.segEmails.setData(data);
    }
    else{
      this.view.segEmails.isVisible = false;
      this.view.lblUSer.text = applicationManager.getPresentationUtility().getStringFromi18n('i18n.maps.NoResultsFound');
    }
    if(data.length < 3){
      this.view.btnContinue.isVisible = true;
    }
    else{
      this.view.btnContinue.isVisible  = false;
    }
    this.view.forceLayout();
  },

  onSwipeDeleteClick : function(data,index){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.deleteEmail(index);
  },
  onSegEmailClick : function(){
    var index = this.view.segEmails.selectedRowIndex[1];
    index = parseInt(index);
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.navigateToEditEmail(index);
  },
  navToEnterEmail : function(param){
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.setCustomInfo("frmProfileEnterEmailIDFlow",param);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfileEnterEmailID");
  },
  successUpdate: function () {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = "email updated successfully";
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function () {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 3, false);
    },
  successAdd: function () {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = "email added successfully";
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function () {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 3, false);
    },
  
  checkForToastMessage : function(){
    var nav = applicationManager.getNavigationManager();
    var data = nav.getCustomInfo('frmProfileEnterEmailID');
    if(data === "addsuccess"){
      var i18nAdd = applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.addEmailSuccess');
      this.bindViewSuccess(i18nAdd);
    }
    if(data === "updatesuccess"){
      var i18nEdit = applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.editEmailSuccess');
      this.bindViewSuccess(i18nEdit);
    }
    if(data === "deletesuccess"){
      //var i18nEdit = applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.editEmailSuccess');
      this.bindViewSuccess("Email Deleted Successfully");
    }
    nav.setCustomInfo('frmProfileEnterEmailID',null);
  },
  
  bindViewError : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  bindViewSuccess : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  }
});