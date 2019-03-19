define({
  timerCounter:0,
  init : function(){
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(3);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow : function(){
    var scope = this;
    this.fv.submissionView(this.view.btnContinueSignUp);
    this.setFlowActions();
    this.view.imghideOrShowPwd2.src = "view.png";
    this.view.txtCurrentPassword.secureTextEntry = true;
    this.view.customHeader.btnRight.setVisibility(true);
    //this.view.btnContinueSignUp.onClick()
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    scope.view.txtCurrentPassword.onTextChange = function(){
      scope.validateCurrentPassword();
    };
    scope.view.txtNewPassword.onTextChange = function(){
      scope.validatePasswordMatch();
      scope.validateNewPassword();
    };
    scope.view.txtReEnterPass.onTextChange = function () {
      scope.validatePasswordMatch();
      scope.validateReenterPassword();
    };
    scope.view.txtNewPassword.onEndEditing = function(){
      scope.isPasswordValid();
    };
    scope.view.txtNewPassword.onTouchStart = function(){
      scope.hideFlxRequirements();
    }; 
    this.view.txtCurrentPassword.text = "";
    this.view.txtNewPassword.text = "";
    this.view.txtReEnterPass.text = "";
    this.view.imghideOrShowPwd.src = "view.png";
    this.view.imgRenterPass.src = "tickmark.png";
    this.view.flxSecurityRequirements.isVisible = false;
	var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var pwddata = authMod.presentationController.passwordRules;
    scope.view.rtxRulesPwd.text = pwddata;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  isPasswordValid:function(){
    var newPassword = this.view.txtNewPassword.text;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.validatePassword(newPassword);
  },
  validateCurrentPassword :function(){
    var text = this.view.txtCurrentPassword.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validateNewPassword:function(){
    var text = this.view.txtNewPassword.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  validateReenterPassword : function(){
    var text = this.view.txtReEnterPass.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },
  validatePasswordMatch : function(){
    if(this.view.txtReEnterPass.text === ""){
      return;
    }
    if(this.view.txtReEnterPass.text === this.view.txtNewPassword.text){
      this.view.imgRenterPass.src = "greentick.png";
    }else{
      this.view.imgRenterPass.src = "tickmark.png";
    }
  },
  setFlowActions : function(){
    var scope = this;
    this.view.btnContinueSignUp.onClick = function(){
      scope.updatePassword();
    };
    this.view.customHeader.btnRight.onClick = function(){
      scope.navToDetails();
    };
    this.view.customHeader.flxBack.onClick = function(){
      scope.navToChangePassword();
    };
    this.view.flxPwdVisiblityToggle.onClick = function(){
      scope.imgPwdVisiblityToggleOnClick(scope.view.flxPwdVisiblityToggle,scope.view.imghideOrShowPwd,scope.view.txtNewPassword);
    };
    this.view.flxPwdVisiblityToggle2.onClick = function(){
      scope.imgPwdVisiblityToggleOnClick(scope.view.flxPwdVisiblityToggle2,scope.view.imghideOrShowPwd2,scope.view.txtCurrentPassword);
    };
  },
  navToDetails : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
  },
  navToChangePassword : function(param){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  updatePassword : function(){
    var oldPassword = this.view.txtCurrentPassword.text;
    var newPassword = this.view.txtNewPassword.text;
    var reEnteredPassword = this.view.txtReEnterPass.text;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.checkAndUpdatePassword(oldPassword,newPassword,reEnteredPassword);
  },

  bindViewError : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  imgPwdVisiblityToggleOnClick: function(flx,img,tbx) {
    if (img.src === "view.png") {
      img.src = "viewactive.png";
      tbx.secureTextEntry = false;
      flx.forceLayout();
    } else {
      img.src = "view.png";
      tbx.secureTextEntry = true;
      flx.forceLayout();
    }
  },
  // utitlity function to show password rules
  showFlxSecurityRequirements: function() {
    this.view.flxSecurityRequirements.isVisible = true;
   /* if (this.view.flxSecurityRequirements.height !== "150dp") {
      this.view.flxSecurityRequirements.animate(
        kony.ui.createAnimation({
          "0": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "height": "0dp",
          },
          "100": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "height": "150dp",
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.5
        }, {
          "animationEnd": function() {}
        });
    } */
  },
  // utitlity function to hide password rules
  hideFlxRequirements: function() {
    var scope = this;
    this.view.flxSecurityRequirements.isVisible = false;
    /*if (this.view.flxSecurityRequirements.height !== "0dp") {
      this.view.flxSecurityRequirements.animate(
        kony.ui.createAnimation({
          "0": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "height": "150dp",
          },
          "100": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "height": "0dp",
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.5
        }, {
          "animationEnd": function() {
            scope.view.flxSecurityRequirements.isVisible = true;
          }
        });
    } */
  }
});