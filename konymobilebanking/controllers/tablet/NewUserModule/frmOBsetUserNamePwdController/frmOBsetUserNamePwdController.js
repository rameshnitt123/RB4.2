define({ 

  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(3);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.view.txtPassword.onTouchStart = this.hideFlxRequirements;
    this.fv.submissionView(this.view.btnContinueUsernamePassword);
    this.view.flxPopup.setVisibility(false);
    this.view.txtUsername.setFocus(true);
    this.view.txtUsername.text = "";
    this.view.txtPassword.text = "";
    this.view.txtReEnterPassword.text = "";
    this.initActions();
    this.updateRightPane();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  handleCancelAction: function() {
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
  },

  validateUsername: function() {
    var text = this.view.txtUsername.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },

  validatePassword: function() {
    var text = this.view.txtPassword.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },

  validateReenterPassword: function() {
    var text = this.view.txtReEnterPassword.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },

  validateAndNavigate: function() {
    this.flag = 0;
    var self = this;
    if (!this.view.txtUsername.text) {
      this.showPopupIncorrectCredentials("Enterusername");
      return;
    } else {
      this.flag++;
    }
    if (!this.view.txtPassword.text || this.view.txtPassword.text !== this.view.txtReEnterPassword.text) {
      self.showPopupIncorrectCredentials("password");
      self.view.imgPasswordsMatch.src = "tickmark.png";
      return;
    } else if (this.view.txtPassword.text && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
      self.view.imgPasswordsMatch.src = "greentick.png";
      this.flag++;
    }
    if (this.flag === 2) {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");  
    }
  },

  matchPassword: function() {
    var self = this;
    if (!this.view.txtPassword.text || this.view.txtPassword.text !== this.view.txtReEnterPassword.text) {
      self.view.imgPasswordsMatch.src = "tickmark.png";
      return false;
    } else if (this.view.txtPassword.text && this.view.txtReEnterPassword.text
               && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
      self.view.imgPasswordsMatch.src = "greentick.png";
      this.flag++;
      return true;
    }
  },

  showPopupIncorrectCredentials: function(par) {
    var message = null;
    switch(par) {
      case "Enterusername":
        message = kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername");
        break;
      case "username":
        message = kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg");
        break;
      case "password":
        message = kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch");
        break;
      case "invalidpassword":
        message = kony.i18n.getLocalizedString("kony.mb.common.invalidPassword");
        break;
      case "invalidusername":
        message = kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername");
        break;  
    }

    if (message) {
      this.view.customPopup.lblPopup.text = message;
      var self = this;
      if (!this.timerCounter) {
        this.timerCounter = 0;
      }
      this.timerCounter = this.timerCounter + 1;
      var timerId = "timerPopupError2" + this.timerCounter;
      this.view.flxPopup.skin = "sknFlxf54b5e";
      this.view.customPopup.imgPopup.src = "errormessage.png";
      this.view.flxPopup.setVisibility(true);
      kony.timer.schedule(timerId, function () {
        self.view.flxPopup.setVisibility(false);
      }, 1.5, false);
    }
  },

  initActions: function() {
    var self = this;
    this.view.txtUsername.onTextChange = this.validateUsername;
    this.view.txtReEnterPassword.onEndEditing = this.matchPassword;

    this.view.txtUsername.onEndEditing = function() {
      if (self.view.txtUsername.text) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.checkUserAvailability(self.view.txtUsername.text); 
      } else {
        self.bindError("Enterusername");
      }
    };

    this.view.txtPassword.onEndEditing = function() {
      var password = self.view.txtPassword.text;
      if (password && password !== "" && self.isValidPassword()) {
        self.matchPassword();  
      }
    };

    this.view.txtPassword.onTextChange = function() {
      self.validatePassword();
      self.matchPassword();
    };

    this.view.txtReEnterPassword.onTextChange = function() {
      self.validateReenterPassword();
      self.matchPassword();
    };

    this.view.btnContinueUsernamePassword.onClick = function() {
      var userName = self.view.txtUsername.text;
      var password = self.view.txtPassword.text;
      var reenter = self.view.txtReEnterPassword;
      if (userName && password && reenter && self.matchPassword()) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.createNewUser(userName, password, reenter);
      } else if (!userName) {
        self.bindError("Enterusername");
      } else if (!password) {
        self.bindError("invalidpassword");
      } else if (!reenter) {
        self.bindError("password");
      } else if (!self.matchPassword()) {
        self.bindError("password");
      }
    };
    this.view.imgMaskUnmask.onTouchEnd = function() {
      var isPasswordVisible = self.view.txtPassword.secureTextEntry;
      self.view.txtPassword.secureTextEntry = !isPasswordVisible;
      self.view.imgMaskUnmask.src = isPasswordVisible ? "viewactive.png" :"viewicon.png";
      self.view.flxPassword.forceLayout();
    };
  },

  bindError: function(par) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var message = null;
    switch(par) {
      case "Enterusername":
        message = kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername");
        break;
      case "username":
        message = kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg");
        break;
      case "password":
        message = kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch");
        break;
      case "invalidpassword":
        message = kony.i18n.getLocalizedString("kony.mb.common.invalidPassword");
        break;
      case "invalidusername":
        message = kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername");
        break;  
    }

    if (message) {
      applicationManager.getDataProcessorUtility().showToastMessageError(this, message);
    }
  },

  isValidPassword: function() {
    var password = this.view.txtPassword.text;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    return NUOMod.presentationController.validatePassword(password);
  },

  bindGenericError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  changeSecurityRequirementsState: function(startHeight, endHeight, animationEndCallback) {
    if (this.view.flxSecurityRequirements.height !== endHeight) {
      if (!animationEndCallback) {
        animationEndCallback = function() {};
      }
      this.view.flxSecurityRequirements.animate(
        kony.ui.createAnimation(
          {
            0: {
              anchorPoint: {
                x: 0.5,
                y: 0.5
              },
              stepConfig: {
                timingFunction: kony.anim.EASE
              },
              rectified: true,
              height: startHeight,
            },
            100: {
              anchorPoint: {
                x: 0.5,
                y: 0.5
              },
              stepConfig: {
                timingFunction: kony.anim.EASE
              },
              rectified: true,
              height: endHeight,
            }
          }), 
        {
          delay: 0,
          iterationCount: 1,
          fillMode: kony.anim.FILL_MODE_FORWARDS,
          duration: 0.5
        }, {animationEnd: animationEndCallback}
      );
    }
  },

  showFlxSecurityRequirements: function() {
    this.view.flxSecurityRequirements.setVisibility(true);
    this.changeSecurityRequirementsState("0dp", "165dp");
  },

  hideFlxRequirements: function() {
    var self = this;
    var animationEndCallback = function() {
      self.view.flxSecurityRequirements.setVisibility(true);
    };
    this.changeSecurityRequirementsState("165dp", "0dp", animationEndCallback);
  },

  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();

    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    rightPane.lblThirdCheckedRowName.text = eligibility;
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
    var delta = 1;
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  }
});