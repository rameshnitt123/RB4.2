define({
  timerCounter: 0,
  keypadString: '',
  locale : kony.i18n.getCurrentLocale(),
  // locale : "fr",
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(1);
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var scope = this;
    this.keypadString = "";
     if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
	this.locale = kony.i18n.getCurrentLocale();
    this.fv.submissionView(this.view.btnVerifyDOB);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.updateInputBullets();
    this.view.btnVerifyDOB.onClick = this.validateAndNavigate;
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.setKeyPadActions();
    this.setDummyText();
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
  setKeypadChar: function (char) {
    if(this.keypadString.length === 10) 
      return;
    this.keypadString = this.keypadString + char;
   if(this.locale=="en_US" || this.locale=="en" || this.locale=="en_GB" || this.locale === "fr_FR" || this.locale === "es_ES"){
        if (this.keypadString.length === 2 || this.keypadString.length === 5) {
          this.keypadString = this.keypadString + '/';
        }
      }
      else if(this.locale=="de_DE"){
        if (this.keypadString.length === 2 || this.keypadString.length === 5) {
          this.keypadString = this.keypadString + '.';
        }
      }
       else if(this.locale=="sv_SE"){
        if (this.keypadString.length === 4 || this.keypadString.length === 7) {
          this.keypadString = this.keypadString + '-';
        }
      }
    this.updateInputBullets();
    this.fv.checkDOBLength(this.keypadString);
  },
  clearKeypadChar: function () {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.updateInputBullets();
    }
    if (this.keypadString.length !== 0) {
      if (this.keypadString[this.keypadString.length - 1] === '/') {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      }
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      this.updateInputBullets();
    }
    this.fv.checkDOBLength(this.keypadString);
  },
   setDummyText : function(){
    var configManager = applicationManager.getConfigurationManager();
    var dummy = configManager.getCalendarDateFormat();
    var widgets = this.view["flxDOB"].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      widgets[i].skin = "sknLbl979797SSP60px";
      widgets[i].text = dummy[i];
    }
  },
  updateInputBullets: function () {
    var scope = this, dummyString;
   // var dummyString = 'MM/DD/YYYY';
    if(this.locale=="en_US" || this.locale=="en"){
          dummyString = 'MM/DD/YYYY';
        }
        else if(this.locale=="en_GB" || this.locale === "fr_FR"  || this.locale === "es_ES"){
          dummyString = 'DD/MM/YYYY';
        }
         else if(this.locale=="de_DE"){
          dummyString = 'DD.MM.YYYY';
        }
        else if(this.locale=="sv_SE"){
          dummyString = 'YYYY-DD-MM';
        }
    var widgets = this.view["flxDOB"].widgets();
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
  validateAndNavigate : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var dob = this.keypadString;
        if(dob.indexOf(".")!= -1){
            dob = dob.replace(".", "/").replace(".","/");
        }
        else if(dob.indexOf("-")!=-1){
            dob = dob.replace(/-/g, "/");
        }
      if (dob.length < 10) {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        } else {
            var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    		NUOMod.presentationController.validateDOBAndNavigate(dob);  
        }
  },
  assignDataToForm : function(newUserJSON){
    var scope = this;
    var dob = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null)?newUserJSON.dateOfBirth:"";
    if(dob!==""){
      dob = dob.substr(0,10);
      this.fv.checkDOBLength(dob);
      var dateOfBirth = dob.split("-");
      var dobText = dateOfBirth[1]+dateOfBirth[2]+dateOfBirth[0];
      for(var i=0;i<dobText.length;i++)
      {
        this.setKeypadChar(dobText.charAt(i));
      }
    }
    else
    {
      this.keypadString = "";
      this.fv.checkDOBLength(this.keypadString);
      this.updateInputBullets();
    }
    this.view.forceLayout();
  },
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  setKeyPadActions: function() {
     var scopeObj = this;
     this.view.keypad.btnOne.onClick = function() {
         scopeObj.setKeypadChar(1);
     };
     this.view.keypad.btnTwo.onClick = function() {
         scopeObj.setKeypadChar(2);
     };
     this.view.keypad.btnThree.onClick = function() {
         scopeObj.setKeypadChar(3);
     };
     this.view.keypad.btnFour.onClick = function() {
         scopeObj.setKeypadChar(4);
     };
     this.view.keypad.btnFive.onClick = function() {
         scopeObj.setKeypadChar(5);
     };
     this.view.keypad.btnSix.onClick = function() {
         scopeObj.setKeypadChar(6);
     };
     this.view.keypad.btnSeven.onClick = function() {
         scopeObj.setKeypadChar(7);
     };
     this.view.keypad.btnEight.onClick = function() {
         scopeObj.setKeypadChar(8);
     };
     this.view.keypad.btnNine.onClick = function() {
         scopeObj.setKeypadChar(9);
     };
     this.view.keypad.btnZero.onClick = function() {
         scopeObj.setKeypadChar(0);
     };
     this.view.keypad.imgClearKeypad.onTouchEnd = function() {
         scopeObj.clearKeypadChar();
     };
     //this.view.btnDot.onClick = function() {
     //    scopeObj.setKeypadChar('.');
     //};
 },
});