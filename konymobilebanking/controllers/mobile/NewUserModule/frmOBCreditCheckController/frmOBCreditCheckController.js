define({
  timerCounter : 0, 
  currentInputModule: 'ssn',
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
    var scopeObj = this;
    this.keypadString = "";
    this.view.lblSSN.text = "";
    this.fv.submissionView(this.view.btnSSNAccept);
    this.showENterSSN();
    //this.onCloseTnC();
    this.assignDataToForm();
    this.view.btnTnC.onClick = this.navToTermsAndConditions;
    //this.view.customHeaderTermsConditions.flxBack.onClick = this.onCloseTnC;
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
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  navToTermsAndConditions : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmTermsAndConditions"); 
  },
  assignDataToForm : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    var ssn = (NUOData.ssn && NUOData.ssn !== "" && NUOData.ssn !== null)?NUOData.ssn:"";
    var previousForm = NUOMod.presentationController.previousFormCheck;
    if(previousForm !== "frmOBDependents")
    {
      ssn = "";
    }
    if(ssn!==""){
      //var ssnData = ssn.split("-");
      //ssn = ssnData[0]+""+ssnData[1]+""+ssnData[2];
      for(var i=0;i<ssn.length;i++)
      {
        this.setKeypadChar(ssn.charAt(i));
      }
    }
    else
    {
      this.keypadString = "";
     // this.updateInputBullets();
    }
    NUOMod.presentationController.previousFormCheck = "";
  },
  onBack : function () {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onClose : function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  onCloseTnC : function(){
    this.view.flxKeypad.isVisible = true;
    this.view.flxMainContainer.isVisible = true;
    this.view.flxHeader.isVisible = true;
    this.view.flxTermsConditions.isVisible = false; 
  },
  showTermsAndConditions: function () {
    var scope = this;
    this.view.flxKeypad.isVisible = false;
    this.view.flxMainContainer.isVisible = false;
    this.view.flxHeader.isVisible = false;
    this.view.flxTermsConditions.isVisible = true;
  },
  showENterSSN: function () {
    this.view.flxResult.isVisible = false;
    this.view.flxMainContainer.isVisible = true;
    this.view.flxKeypad.isVisible = true;
    var scope = this;
    this.keypadString='';
    this.currentInputModule = 'ssn';
   // this.updateInputBullets();

    //     this.setHeaderData(null, function(){
    //       var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    //       NUOMod.presentationController.onClose();
    //     }, 'LOGOUT', 'CREDIT CHECK');
    //     this.view.btnSSNReject.onClick = function () {
    //       var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
    //       nuoMod.presentationController.getCurrentState();
    //     };
    this.view.btnSSNAccept.onClick = function () {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var data = {
        "ssn" : scope.keypadString,
        "informationType" : "PersonalInfo"
      };
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");     
      NUOMod.presentationController.updateNewUserModel(data);
      NUOMod.presentationController.userNavigation = data.informationType;
      NUOMod.presentationController.createPersonalInfo();   
    };
  },
  updateInputBullets: function () {
    var scope = this;
    var updateBullets = {

      'ssn': function () {
        scope.updateInputBulletsOf('___-__-____', "flxInputSSN");
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
  setKeypadChar: function (char) {
    var scope = this;
    //if (this.keypadString.length === 11 && this.currentInputModule === 'ssn') return;

    this.keypadString = this.keypadString + char;
    var manageString = {

      'ssn': function(){
        /*if(scope.keypadString.length===3||scope.keypadString.length===6){
          scope.keypadString+='-';
        }*/
      }
    };
    manageString[this.currentInputModule]();
  //  this.updateInputBullets();
    this.fv.checkSSNLength(this.keypadString);
    this.view.lblSSN.text = this.keypadString;
  },
  clearKeypadChar: function () {
    var scope = this;
    if (this.keypadString.length === 1) {
      this.keypadString = '';
    //  this.updateInputBullets();
    }
    if (this.keypadString.length !== 0) {
      var manageString = {

        'ssn': function(){
          if(scope.keypadString[scope.keypadString.length-1]==='-'){
            scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-2);
          }else{
            scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-1);
          }
        }
      };
      manageString[this.currentInputModule]();

      //this.updateInputBullets();
    }
    this.fv.checkSSNLength(this.keypadString);
    this.view.lblSSN.text = this.keypadString;
  },
  setHeaderData: function (backAction, cancelAction, cancelTitle, title) {
    this.view.customHeader.lblLocateUs.text = title;
    if(cancelAction!==null){
      this.view.customHeader.btnRight.onClick = cancelAction;
      this.view.customHeader.btnRight.isVisible = true;
      this.view.customHeader.btnRight.text = cancelTitle;
    }else{
      this.view.customHeader.btnRight.isVisible = false;
    }
    if(backAction!==null){
      this.view.customHeader.flxBack.onClick = backAction;
      this.view.customHeader.flxBack.isVisible = true;
    }else{
      this.view.customHeader.flxBack.isVisible = false;
    }
  },
  showResult: function (isSuccess, title, subTitle, btnContinueAction, btnCancelAction, btnCallNowAction) {
    this.view.flxResult.isVisible = true;
    this.view.flxMainContainer.isVisible = false;
    this.view.flxKeypad.isVisible = false;
    if (isSuccess) {
      this.view.imgResult.src = "confirmation.png";
    } else {
      this.view.imgResult.src = "error.png";
    }
    this.view.rtxTitle.text = title;
    this.view.lblSubTitle.text = subTitle;
    if (subTitle == '') {
      this.view.lblSubTitle.isVisible = false;
    } else {
      this.view.lblSubTitle.isVisible = true;
    }

    if (btnContinueAction != null) {
      this.view.btnContinueResult.onClick = btnContinueAction;
      this.view.btnContinueResult.isVisible = true;
    } else {
      this.view.btnContinueResult.isVisible = false
    }
    if (btnCancelAction != null) {
      this.view.btnCancelResult.onClick = btnCancelAction;
      this.view.btnCancelResult.isVisible = true;
    } else {
      this.view.btnCancelResult.isVisible = false;
    }
    if (btnCallNowAction != null) {
      this.view.flxCallNow.onClick = btnCallNowAction();
      this.view.flxCallNow.isVisible = true;
    } else {
      this.view.flxCallNow.isVisible = false;
    }
  },
  showJustamoment : function(){
    var scopeObj = this;
    this.view.flxMainContainer.isVisible = false;
    this.view.flxKeypad.isVisible = false;
    this.view.imgResult.src = "confirmation.png";
    this.view.rtxTitle.text = "Just a moment";
    this.timerCounter = parseInt(this.timerCounter) + 3;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxResult.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxResult.setVisibility(false);
    }, 3, false);
    scopeObj.showSuccess();
  },
  showSignature : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");  
  },
  showSuccess : function(){
    var scopeObj = this;
    this.view.flxMainContainer.isVisible = false;
    this.view.flxKeypad.isVisible = false;
    this.view.imgResult.src = "confirmation.png";
    this.view.rtxTitle.text = "Successfully Verified";
    this.timerCounter = parseInt(this.timerCounter) + 3;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxResult.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxResult.setVisibility(false);
    }, 3, false);
    scopeObj.showSignature();
  },
  ssnAccept:function()
  {
    var ssn=this.keypadString;
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.acceptCreditCheck(ssn);
  }
});