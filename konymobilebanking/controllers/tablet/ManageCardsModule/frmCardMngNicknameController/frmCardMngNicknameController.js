define({
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      var FormValidator = require("FormValidatorManager")
	  this.fv = new FormValidator(1);
    },
    preShow: function() {
      this.initHeaderActions();
       this.fv.submissionView(this.view.btnSave);
      	if(!this.isIpad()){
        this.view.flxHeader.isVisible = true;
        }
        var navManager = applicationManager.getNavigationManager();
      	var payeeData = navManager.getCustomInfo("frmCardMngNickname");
      	navManager.setCustomInfo("frmCardManageHome", {"isMainScreen":true});
      	this.view.txtName.text = "";
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },

    initHeaderActions: function() {
      if (!this.isIpad()) {
        this.view.customHeader.flxBack.onClick = this.navigateBack;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
      }
    },

    onClickCancel : function(){
      var manageCardsModule = applicationManager.getModule("ManageCardsModule");
      manageCardsModule.presentationController.commonFunctionForNavigation("frmCardManageHome");
    },

    navigateBack: function() {
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
    },

    initActions: function() {
      var scope = this;
      if(!this.isIpad()){
      this.view.customHeader.flxBack.onClick = function() {
        var navMan=applicationManager.getNavigationManager();
        navMan.goBack();
      };
      }
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var flowType=billPayMod.presentationController.getFlowType();
      this.view.btnSave.onClick = function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmCardMngNickname");
        data.isUpdateNicknameSuccess = true;
        navManager.setCustomInfo("frmCardMngNickname", data);
        
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
      	manageCardsModule.presentationController.commonFunctionForNavigation("frmCardManageHome");
      };
      this.view.txtName.onTextChange = function(){
        var text = scope.view.txtName.text;
        scope.fv.checkAndUpdateStatusForNull(0,text);   
      };
    },
    validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtName.text);
    this.fv.preshowCheck(formValues);
  },
  prePopulateData:function(payeeData){
    var scope=this;
      if(payeeData.payeeNickName){
        scope.view.txtName.text=payeeData.payeeNickName;
      }
  },

  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },
  
});
