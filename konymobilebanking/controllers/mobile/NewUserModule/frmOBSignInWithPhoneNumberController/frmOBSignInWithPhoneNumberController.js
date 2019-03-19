define({ 
  keypadString: '',
  timerCounter: 0,
  currentInputModule: 'phonenumber',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	var FormValidator = require("FormValidatorManager")
    this.fv = new FormValidator(1);
  },
  preShow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var scopeObj = this;
    this.fv.submissionView(this.view.btnVerifyPhoneNumber);
    this.showEnterPhoneNumber();
    this.assignDataToForm();
    this.view.customHeader.btnRight.onClick=this.cancelOnClick;
    //this.updateInputBullets();
    this.view.lblPhoneNumber.text = "";
    this.keypadString = "";
    this.view.keypad.btnOne.onClick = function(){
      scopeObj.setKeypadChar("1");
    };
    this.view.keypad.btnTwo.onClick = function(){
      scopeObj.setKeypadChar("2");
    };
    this.view.keypad.btnThree.onClick = function(){
      scopeObj.setKeypadChar("3");
    };
    this.view.keypad.btnFour.onClick = function(){
      scopeObj.setKeypadChar("4");
    };
    this.view.keypad.btnFive.onClick = function(){
      scopeObj.setKeypadChar("5");
    };
    this.view.keypad.btnSix.onClick = function(){
      scopeObj.setKeypadChar("6");
    };
    this.view.keypad.btnSeven.onClick = function(){
      scopeObj.setKeypadChar("7");
    };
    this.view.keypad.btnEight.onClick = function(){
      scopeObj.setKeypadChar("8");
    };
    this.view.keypad.btnNine.onClick = function(){
      scopeObj.setKeypadChar("9");
    };
    this.view.keypad.btnZero.onClick = function(){
      scopeObj.setKeypadChar("0");
    };
    this.view.keypad.imgClearKeypad.onTouchEnd = function(){
      scopeObj.clearKeypadChar("");
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
  assignDataToForm : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var userPhone = NUOMod.presentationController.getUserPhoneNumber(); 
    var phone = (userPhone && userPhone!=="" && userPhone!==null)?userPhone:"";
    if(phone!==""){
      for(var i=0;i<phone.length;i++)
      {
        this.setKeypadChar(phone.charAt(i));
      }
    }
    else
    {
      this.keypadString = "";
      //this.fv.checkPhoneNumberLengthNormal(this.keypadString);
//       this.updateInputBullets();
    }
    this.view.forceLayout();
  },
  showEnterPhoneNumber: function () {
    var scope = this;
    this.keypadString='';
    this.updateInputBullets();
    this.showKeypad();

    this.view.btnVerifyPhoneNumber.onClick = function () {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmOBSignInWithPhoneNumber", scope.keypadString);
      var phoneNo="";
      if(scope.keypadString){
        phoneNo=scope.keypadString.replace(/[()-]/g,"");
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.verifyPhoneNo(phoneNo); 
      }
      else{
        scope.bindError("invalidphoneno");        
      }
    };
  },
  updateInputBullets: function () {
    var scope = this;
    scope.updateInputBulletsOf('(___)___-____', "flxInputPhoneNumber");
    //updateBullets[this.currentInputModule]();
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
  showKeypad: function () {
    this.view.flxKeypad.isVisible = true;
  },
  hideKeypad: function () {
    this.view.flxKeypad.isVisible = false;
  },
  NavToEnterEmail : function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBEmail");
  },
  setKeypadChar: function (char) {
    var scope = this;
//     if (this.keypadString.length === 13 && this.currentInputModule === 'phonenumber') return;
//     var manageString = {
//       'phonenumber': function(){
//         if(scope.keypadString.length===0){
//           scope.keypadString = '(';
//         }else if(scope.keypadString.length===4){
//           scope.keypadString += ')';
//         }else if(scope.keypadString.length===8){
//           scope.keypadString += '-';
//         }
//       }
//     };
//     manageString[this.currentInputModule]();
    this.keypadString = this.keypadString + char;
    this.enterPostAction();
   // this.updateInputBullets();
    this.view.lblPhoneNumber.text = this.keypadString;
//     this.fv.checkPhoneNumberLengthNormal(this.keypadString);
  },
  
    incompleteView: function() {
        this.view.btnVerifyPhoneNumber.skin = "sknBtnOnBoardingInactive";
        this.view.btnVerifyPhoneNumber.setEnabled(false);
    },
    enterPostAction: function() {
        this.view.btnVerifyPhoneNumber.setEnabled(true);
        this.view.btnVerifyPhoneNumber.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
  
  clearKeypadChar: function () {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.incompleteView();
      //this.updateInputBullets();
    }
    if (this.keypadString.length > 1) {
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      this.enterPostAction();

//       if (this.keypadString[this.keypadString.length - 1] == ')' || this.keypadString[this.keypadString.length - 1] == '-') {
//         this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
//       }
    //  this.updateInputBullets();
    }
    this.view.lblPhoneNumber.text = this.keypadString;
//     this.fv.checkPhoneNumberLengthNormal(this.keypadString);
  },
  showPopupIncorrectCredentials: function (par) {
    var scopeObj = this;
    if (par === "invalidphoneno") {
      this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.InvaliPhoneno");
    }
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupError" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
      scopeObj.keypadString = '';
      scopeObj.updateInputBullets();
    }, 1.5, false);
  },
  bindError : function(par){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (par === "invalidphoneno") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.InvaliPhoneno"));
    }
  }
});