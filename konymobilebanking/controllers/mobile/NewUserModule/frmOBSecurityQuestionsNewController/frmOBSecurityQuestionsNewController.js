define({
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
    var scope = this;
    if (this.view.segQuestion1.selectedIndices!=null && this.view.segQuestion1.selectedIndices!=undefined && this.view.segQuestion2.selectedIndices!=null && this.view.segQuestion2.selectedIndices!=undefined && this.view.segQuestion1.selectedIndices[0][1].length > 0 && this.view.segQuestion2.selectedIndices[0][1].length > 0){
      this.view.btnContinuePersonalInfo.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinuePersonalInfo.setEnabled(true);
    }
    else{
      this.view.btnContinuePersonalInfo.skin = "sknBtnOnBoardingInactive";
      this.view.btnContinuePersonalInfo.setEnabled(false);
    }
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.view.segQuestion1.onRowClick=this.onSelection;
    this.view.segQuestion2.onRowClick=this.onSelection1;
    this.view.segQuestion3.onRowClick=this.onSelection2;
    this.view.btnContinuePersonalInfo.onClick=function()
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      var ssn = NUOMod.presentationController.getSSN();
      if(ssn && ssn!=="" && ssn!==null){
        NUOMod.presentationController.userNavigation = "SecurityQuestions";
        NUOMod.presentationController.createPersonalInfo(); 
      }
    };
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();  
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  onSelection:function()
  {
   if(this.view.segQuestion1.selectedIndices[0][1].length > 0 && this.view.segQuestion2.selectedIndices!=null && this.view.segQuestion2.selectedIndices!=undefined && this.view.segQuestion2.selectedIndices[0][1].length > 0)
    {
      this.view.btnContinuePersonalInfo.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinuePersonalInfo.setEnabled(true);
    }
  },
  onSelection1:function()
  {
    if(this.view.segQuestion1.selectedIndices!=null && this.view.segQuestion1.selectedIndices!=undefined && this.view.segQuestion1.selectedIndices[0][1].length > 0 && this.view.segQuestion2.selectedIndices[0][1].length > 0)
    {
      this.view.btnContinuePersonalInfo.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinuePersonalInfo.setEnabled(true);
    }
  },
   onSelection2:function()
  {
    if(this.view.segQuestion3.selectedIndices[0][1].length > 0)
    {
      this.view.btnContinuePersonalInfo.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinuePersonalInfo.setEnabled(true);
    }
  
  }

});