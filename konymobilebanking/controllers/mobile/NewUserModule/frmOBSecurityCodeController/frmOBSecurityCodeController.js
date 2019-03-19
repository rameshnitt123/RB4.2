define({
  keypadString: '',
  timerCounter: 0,
  currentInputModule: 'securitycode',
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.flxPopup.isVisible = false;
    this.fv.submissionView(this.view.btnContinueSecurityCode);
    var scopeObj = this;
    this.keypadString = '';
    this.showSecurityCode();
    this.view.customHeader.btnRight.onClick=this.cancelOnClick;
    this.view.keypad.btnOne.onClick = function () {
      scopeObj.setKeypadChar("1");
    };
    this.view.keypad.btnTwo.onClick = function () {
      scopeObj.setKeypadChar("2");
    };
    this.view.keypad.btnThree.onClick = function () {
      scopeObj.setKeypadChar("3");
    };
    this.view.keypad.btnFour.onClick = function () {
      scopeObj.setKeypadChar("4");
    };
    this.view.keypad.btnFive.onClick = function () {
      scopeObj.setKeypadChar("5");
    };
    this.view.keypad.btnSix.onClick = function () {
      scopeObj.setKeypadChar("6");
    };
    this.view.keypad.btnSeven.onClick = function () {
      scopeObj.setKeypadChar("7");
    };
    this.view.keypad.btnEight.onClick = function () {
      scopeObj.setKeypadChar("8");
    };
    this.view.keypad.btnNine.onClick = function () {
      scopeObj.setKeypadChar("9");
    };
    this.view.keypad.btnZero.onClick = function () {
      scopeObj.setKeypadChar("0");
    };
    this.view.keypad.imgClearKeypad.onTouchEnd = function () {
      scopeObj.clearKeypadChar("");
    };
    this.view.btnContinueSecurityCode.onClick = function () {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var validationUtility = applicationManager.getValidationUtilManager();
      if(scopeObj.keypadString && validationUtility.isValidOTP(scopeObj.keypadString)){
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.commonFunctionForNavigation("frmOBMembershipEligibility"); 
      }
      else{
        scopeObj.bindError();
      }
      //scopeObj.validateAndNavigate();
    };
    this.view.btnReSend.onClick = function () {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      authMod.presentationController.verifyResendOTP(); 
      //scopeObj.validateAndNavigate();
    };
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  cancelOnClick:function()
  {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
	NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
  },
  validateAndNavigate: function () {
    if (this.keypadString === "12345") {
      this.showPopupIncorrectCredentials();
    } else {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBMembershipEligibility");
    }
  },
  showSecurityCode: function () {
    this.currentInputModule = 'securitycode';
    this.view.flxMainContainer.isVisible = true;
    this.view.flxPopup.isVisible = false;
    this.updateInputBullets();
  },
  setKeypadChar: function (char) {
    var scope = this;
    if (this.keypadString.length === 6 && this.currentInputModule === 'securitycode') return;
    this.keypadString = this.keypadString + char;
    var manageString = {
      'securitycode': function () {

      },
    };
    manageString[this.currentInputModule]();
    this.updateInputBullets();
    this.fv.checkSecureCodeLength(this.keypadString);
  },
  clearKeypadChar: function () {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.updateInputBullets();
    }
    if (this.keypadString.length !== 0) {
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      this.updateInputBullets();
    }
    this.fv.checkSecureCodeLength(this.keypadString);
  },
//   setHeaderData: function (backAction, cancelAction, cancelTitle, title) {
//     this.view.customHeader.lblLocateUs.text = title;
//     if (cancelAction !== null) {
//       this.view.customHeader.btnRight.onClick = cancelAction;
//       this.view.customHeader.btnRight.isVisible = true;
//       this.view.customHeader.btnRight.text = cancelTitle;
//     } else {
//       this.view.customHeader.btnRight.isVisible = false;
//     }
//     if (backAction !== null) {
//       this.view.customHeader.flxBack.onClick = backAction;
//       this.view.customHeader.flxBack.isVisible = true;
//     } else {
//       this.view.customHeader.flxBack.isVisible = false;
//     }
//   },
  updateInputBullets: function () {
    var scope = this;
    var updateBullets = {
      'securitycode': function () {
        scope.updateInputBulletsOf('______', "flxInputSecurityCode");
      }
    };
    updateBullets[this.currentInputModule]();
  },
  updateInputBulletsOf: function (dummyString, inputFlx) {
    var widgets = this.view[inputFlx].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      widgets[i].skin = "sknLbl979797SSP60px";
      widgets[i].text = this.keypadString[i];
    }
    for (var i = this.keypadString.length; i < widgets.length; i++) {
      widgets[i].skin = "sknLble3e3e3SSP60px";
      widgets[i].text = dummyString[i];
    }
    this.view.forceLayout();
  },
  showPopupIncorrectCredentials: function () {
    var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupError" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.IncorrectOTP");
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
      scopeObj.keypadString = '';
      scopeObj.updateInputBullets();
    }, 1.5, false);
  },
  bindError : function(){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.IncorrectOTP"));
  }
});