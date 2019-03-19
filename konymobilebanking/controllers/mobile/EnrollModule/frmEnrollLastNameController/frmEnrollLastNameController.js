define({
  timerCounter:0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmEnrollLAstNamePreShow : function(){
    this.setFlowAction();
    this.setPreShowData();
    this.view.tbxLastName.setFocus(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  setFlowAction  : function(){
    var scopeObj = this;
    this.view.customHeader.flxBack.onClick = function(){
      scopeObj.navBack();
    };
    this.view.customHeader.btnRight.onClick = function(){
      scopeObj.onClickCancel();
    };
    this.view.tbxLastName.onTextChange = function(){
      var text = scopeObj.view.tbxLastName.text;
      if(text === "" || text === undefined){
        scopeObj.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        scopeObj.view.btnContinue.setEnabled(false);
      }else{
        scopeObj.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        scopeObj.view.btnContinue.setEnabled(true);
      }
    };
    this.view.btnContinue.onClick = function(){
      scopeObj.validateLastName();
    };
  },
  setPreShowData  : function(){
    this.view.tbxLastName.skin = "sknTbx424242SSPRegular28px";
    this.view.tbxLastName.focusSkin = "sknTbx424242SSPRegular28px";
    this.view.tbxLastName.setFocus(true);
    var scope = this;
    this.view.customHeader.lblLocateUs.text = "Last Name";
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var userlastname = enrollMod.presentationController.getEnrollLastName();
    if(userlastname !== null && userlastname !== "" && userlastname !== undefined){
      this.view.tbxLastName.text = userlastname;
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinue.setEnabled(true);
    }
    else{
      this.view.tbxLastName.text = "";
      this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
      this.view.btnContinue.setEnabled(false);
    }
//     this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
//     this.view.btnContinue.setEnabled(false);
  },
  navToSecurityCheck : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurityCheck");
  },
  onClickCancel : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  navToDOB : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollDOB");
  },
  navBack : function(){
     var enrollPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollPC.presentationController.commonFunctionForNavigation("frmLogin");
  },

  //development
  /**
  * validates Last Name
  */
  validateLastName : function(){
    var lastName = this.view.tbxLastName.text;
    if(lastName === '' || lastName === null || lastName === undefined){
      this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidLastName"));      
    }
    else{
      var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollMod.presentationController.navigateToFrmEnrollDOB(lastName);
    }
  },
  /**
  *Shows Toast Message with red skin
  */
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
});