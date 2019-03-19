define({
  timerCounter : 0,
  init : function(){
    var FormValidator = require("FormValidatorManager");
	this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    var scope = this;
    this.view.postShow = function(){
      scope.postShow();
    };
  },
  onNavigate : function(param){
    var scope = this;
    if(param === "add")
      scope.showAddEmail();
    else if(param === "edit")
      scope.showEditEmail();
  },
   frmEnrollLAstNamePreShow : function(){
     this.setFlowAction();
     this.setPreShowData();
     this.fv.submissionView(this.view.btnContinue);
      var navigationManager = applicationManager.getNavigationManager();
      var param = navigationManager.getCustomInfo("frmProfileEnterEmailIDFlow");
      this.onNavigate(param);
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
     //alert(this.view.imgCheckboxPrimary.src);
   },
  validateEmailTextBox : function(){
    var text = this.view.tbxEmail.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  showAddEmail : function(){
    var scopeObj = this;
     this.view.tbxEmail.text = "";
     this.view.imgCheckboxPrimary.src = "checkboxempty.png";
     this.view.btnDeleteEmail.isVisible = false;
     this.view.btnDeleteEmail.setVisibility(false);
    this.view.flxPrimary.isVisible = true;
     this.isFromEditFlow = false;
     this.view.btnContinue.text = kony.i18n.getLocalizedString("kony.mb.common.continue");
    this.view.btnContinue.onClick = function(){
      scopeObj.addUserEmail();
      //scopeObj.navToEmailList("add");
    };
   },
  showEditEmail : function(){
    var scopeObj = this;
     //this.view.btnDeleteEmail.setVisibility(true);
     this.view.btnContinue.text = kony.i18n.getLocalizedString("kony.mb.Profile.UpdateChanges");
    this.view.btnContinue.onClick = function(){
      scopeObj.updateEmail() ;
      //scopeObj.navToEmailList("edit");
    };
    this.view.btnDeleteEmail.isVisible = false;
    this.view.btnDeleteEmail.onClick = function(){
      scopeObj.deleteEmail();
    };
    var navManager = applicationManager.getNavigationManager();
    this.view.tbxEmail.setFocus(false);
    this.isFromEditFlow = true;
    var data = navManager.getCustomInfo('frmProfileEnterEmailID');
    this.view.tbxEmail.text = data.email;
    this.fv.checkAndUpdateStatusForNull(0, data.email);
    if(data.isPrimary === 1){
      this.view.imgCheckboxPrimary.src = "checkbox.png";
      this.view.flxPrimary.isVisible = false;
      this.view.btnDeleteEmail.isVisible = false;
    }
    else{
      this.view.imgCheckboxPrimary.src = "checkboxempty.png";
      this.view.flxPrimary.isVisible = true;
      this.view.btnDeleteEmail.isVisible = true;
    }
   },
  postShow : function(){
    if(this.isFromEditFlow !== null && this.isFromEditFlow !== undefined && this.isFromEditFlow === true){
      var navManager = applicationManager.getNavigationManager();
      var data = navManager.getCustomInfo('frmProfileEnterEmailID');
      if(data && data.email)
        this.view.tbxEmail.text = data.email;
        this.fv.checkAndUpdateStatusForNull(0, data.email);
    }
    else{
      this.view.tbxEmail.text = "";
    }
  },
  setFlowAction  : function(){
    var scopeObj = this;
    this.view.customHeader.flxBack.onClick = function(){
      scopeObj.navToSettings();
    };
    this.view.flxCheckboxPrimary.onClick = function(){
      scopeObj.toggle();
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
    this.view.tbxEmail.onTextChange = function(){
      scopeObj.validateEmailTextBox();
    };
  },
   toggle : function(){
    if(this.view.imgCheckboxPrimary.src === "checkbox.png"){
      this.view.imgCheckboxPrimary.src = "checkboxempty.png";
    }
    else
      this.view.imgCheckboxPrimary.src = "checkbox.png"
  },
  setPreShowData  : function(){
    this.view.customHeader.btnRight.isVisible = true;
    var scope = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
  },
  
  updateEmail : function(){
    var email = this.view.tbxEmail.text;
    var isPrimary = 0;
    if(this.view.imgCheckboxPrimary.src === "checkbox.png"){
      isPrimary = 1;
    }
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo('frmProfileEnterEmailID');
    var index = data.index;
    var updatedData = {
    };
    updatedData.index = index;
    updatedData.email = email;
    updatedData.isPrimary = isPrimary;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.updateEmail(updatedData);
  },
  deleteEmail : function(){
    var email = this.view.tbxEmail.email;
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo('frmProfileEnterEmailID');
    var index = data.index;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.deleteEmail(index);
  },
  addUserEmail : function(){
    var email = this.view.tbxEmail.text;
    var isPrimary = 0;
    if(this.view.imgCheckboxPrimary.src === "checkbox.png"){
      isPrimary = 1;
    }
    var data = {};
    data.email = email;
    data.isPrimary = isPrimary;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.addEmail(data);
  },
  navToSettings : function(){
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.goBack();
  },
  navToEmailList : function(param){

  },
  
  bindViewError : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
  bindViewSuccess : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  }
});