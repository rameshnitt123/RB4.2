define({
  timerCounter: 0,
  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(3);  
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var self = this;
    this.fv.submissionView(this.view.btnContinueSignUp);
    this.setFlowActions();
    this.initHeaderActions();
    this.view.txtCurrentPassword.secureTextEntry = true;
    this.view.txtCurrentPassword.onTextChange = this.validateCurrentPassword;
    this.view.txtNewPassword.onTextChange = function() {
      self.validatePasswordMatch();
      self.validateNewPassword();
    };
    this.view.txtReEnterPass.onTextChange = function() {
      self.validatePasswordMatch();
      self.validateReenterPassword();
    };
    this.view.txtNewPassword.onEndEditing = this.isPasswordValid;
    this.view.txtNewPassword.onTouchStart = this.hideFlxRequirements;
    this.view.txtCurrentPassword.text = "";
    this.view.txtNewPassword.text = "";
    this.view.txtReEnterPass.text = "";
    this.view.imghideOrShowPwd.src = "view.png";
    this.view.imgRenterPass.src = "tickmark.png";
    this.view.flxSecurityRequirements.setVisibility(false);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setFlowActions: function() {
    this.view.btnContinueSignUp.onClick = this.updatePassword;
    this.view.flxPwdVisiblityToggle.onClick = this.changePasswordFieldMode;
  },

  bindViewError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
  },

  isPasswordValid: function() {
    var newPassword = this.view.txtNewPassword.text;
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.validatePassword(newPassword);
  },

  validateCurrentPassword: function() {
    var text = this.view.txtCurrentPassword.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },

  validateNewPassword: function() {
    var text = this.view.txtNewPassword.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },

  validateReenterPassword: function() {
    var text = this.view.txtReEnterPass.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },

  validatePasswordMatch: function() {
    if (this.view.txtReEnterPass.text.length > 0) {
      var newPassword = this.view.txtNewPassword.text;
      var reenteredPassword = this.view.txtReEnterPass.text;
    	this.view.imgRenterPass.src = newPassword === reenteredPassword 
        														? "greentick.png"
      															: "tickmark.png";
    }
  },

  updatePassword: function() {
    var oldPassword = this.view.txtCurrentPassword.text;
    var newPassword = this.view.txtNewPassword.text;
    var reEnteredPassword = this.view.txtReEnterPass.text;
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.checkAndUpdatePassword(oldPassword, newPassword, reEnteredPassword);
  },

  changePasswordFieldMode: function() {
    var container = this.view.flxPwdVisiblityToggle;
    var passwordModeIndicator = this.view.imghideOrShowPwd;
    var passwordView = this.view.txtNewPassword;
    var isPasswordMode = passwordModeIndicator.src === "view.png";
    passwordModeIndicator.src = isPasswordMode ? "viewactive.png" : "view.png";
    passwordView.secureTextEntry = !isPasswordMode;
    container.forceLayout();
  },

  showFlxSecurityRequirements: function() {
    this.view.flxSecurityRequirements.isVisible = true;
    if (this.view.flxSecurityRequirements.height !== "165dp") {
      animationParams = {
        startHeight: "0dp",
        endHeight: "165dp",
        action: function() {}   
      };
      this.animateFlxSecurityRequirements(animationParams);
    }
  },

  hideFlxRequirements: function() {
    var scope = this;
    if (this.view.flxSecurityRequirements.height !== "0dp") {
      animationParams = {
        startHeight: "165dp",
        endHeight: "0dp",
        action: function() {
          scope.view.flxSecurityRequirements.setVisibility(true);
        },
      };
      this.animateFlxSecurityRequirements(animationParams);
    }
  },

  animateFlxSecurityRequirements: function(animationParams) {
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
          "height": animationParams.startHeight,
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
          "height": animationParams.endHeight,
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
      }, {
        "animationEnd": animationParams.action
      });
  }

});