define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate : function(param){
    var self = this;
    self.view.flxDropdowm.isVisible = false;
    if(param === "add"){
      self.setAddFlow();
    }
    else if(param === "edit"){
      self.setEditFlow();
    }
  },
  setAddFlow : function(){
    var scopeObj = this;
    this.view.btnVerifyPhoneNumber.text = "CONTINUE";
    this.view.btnVerifyPhoneNumber.setVisibility(true);
    this.view.imgCheckboxPrimary.src = "checkboxempty.png";
    this.view.imgCheckboxInternational.src = "checkboxempty.png";
    this.view.btnDelete.setVisibility(false);
    this.view.flxPrimary.isVisible = true;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var data = settingsMode.presentationController.getPhoneBuilderObject();
    this.view.lblEnterPhoneNumberHeader.text = "Type("+data.type+")";
    for(var i=0;i<10;i++){
      scopeObj.clearKeypadChar("");
    }
    this.view.btnVerifyPhoneNumber.onClick = function(){
      var number = scopeObj.keypadString;
      number = number.replace('(','');
      number = number.replace(')','');
      number = number.replace('-','');
      var isPrimary = "0";
      if(scopeObj.view.imgCheckboxPrimary.src === "checkbox.png"){
        isPrimary = "1";
      }
    settingsMode.presentationController.createOrUpdatePhoneBuilderObject('phoneNumber',number);
    settingsMode.presentationController.createOrUpdatePhoneBuilderObject('isPrimary',isPrimary);
      
      //settingsMode.addUserPhoneNumber();
      settingsMode.presentationController.navigateToAddPhoneNumberConfirmPage();
    };
  },
  setEditFlow : function(){
    var scopeObj = this;
    this.view.btnVerifyPhoneNumber.text = "UPDATE CHANGES";
   this.view.btnVerifyPhoneNumber.setVisibility(true) ;
   this.view.btnDelete.setVisibility(true);
    this.view.btnDelete.onClick = function(){
      scopeObj.onBtnDeleteClick();
    };
    this.view.btnVerifyPhoneNumber.onClick = function(){
      //scopeObj.navToEditPhoneList("edit");
      scopeObj.onUpdateButtonClick();
    };
    
    var nav = applicationManager.getNavigationManager();
    var data1 = nav.getCustomInfo('frmProfileEditPhoneNumberMain');
    data1 = data1.data;
    var type = data1.type;
    var phoneNumber = data1.phoneNumber;
    var isPrimary = data1.isPrimary;
    var countryType = data1.countryType;
    this.selectedData = data1;
    
    this.view.lblEnterPhoneNumberHeader.text = "Type ("+type+")";
    if(isPrimary === "1"){
      this.view.imgCheckboxPrimary.src = "checkbox.png";
    }
    else{
      this.view.imgCheckboxPrimary.src = "checkboxempty.png";
    }
    
    if(isPrimary === "1"){
      this.view.flxPrimary.isVisible = false;
      this.view.btnDelete.isVisible = false;
    }
    else{
      this.view.flxPrimary.isVisible = true;
      this.view.btnDelete.isVisible = true;
    }
    if(countryType.toLowerCase() === "international"){
      this.view.imgCheckboxInternational.src = "checkbox.png";
    }
    else{
      this.view.imgCheckboxInternational.src = "checkboxempty.png";
    }
    scopeObj.keypadString = "";
    scopeObj.keypadString = phoneNumber;
    this.view.lblPhoneNumber.text = scopeObj.keypadString;
  },
  keypadString: '',
    timerCounter: 0,
  currentInputModule: 'phonenumber',
  preShow: function () {
    var scopeObj = this;
    this.view.flxPhoneType.isVisible = false;
      if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    
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
    this.view.flxCheckboxPrimary.onClick = function(){
      scopeObj.toggle(scopeObj.view.imgCheckboxPrimary);
      if(scopeObj.validatePhone())
        scopeObj.enterPostAction();
      else
        scopeObj.incompleteView();
    };
    this.view.flxCheckboxInternational.onClick = function(){
      scopeObj.toggle(scopeObj.view.imgCheckboxInternational);
      if(scopeObj.validatePhone())
        scopeObj.enterPostAction();
      else
        scopeObj.incompleteView();
    };
         this.view.customHeader.flxBack.onClick = function () {
           var navManager = applicationManager.getNavigationManager();
           navManager.goBack();
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
    
    var navManager = applicationManager.getNavigationManager();
    var jsonValue = navManager.getCustomInfo("frmProfileEditPhoneNumberMain");
    this.onNavigate(jsonValue.flow);
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
   toggle : function(img){
    if(img.src === "checkbox.png"){
      img.src = "checkboxempty.png";
    }
    else
      img.src = "checkbox.png"
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
    setKeypadChar: function(char) {
      this.keypadString = this.keypadString + char;
      this.view.lblPhoneNumber.text = this.keypadString;
      //if valid
      if(this.validatePhone())
      {
        this.enterPostAction();
      }
      else
      {
        this.incompleteView(); 
      }
      this.view.forceLayout();
      return;
    },

    clearKeypadChar: function() {
      if (this.keypadString.length === 0) return;
      this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
      this.view.lblPhoneNumber.text = this.keypadString;
      if (this.validatePhone())
      {
        this.enterPostAction();
      }
      else
      {
        this.incompleteView(); 
      }
      this.view.forceLayout();
      return;
    },
  validatePhone:function() {
//       if(this.keypadString.length <= 15 && this.keypadString.length >= 1)
//       {
//         return true;
//       }
//       return false;    
    	var validationMan = applicationManager.getValidationUtilManager();
    	return validationMan.isValidPhoneNumber(this.keypadString);
    },
  enterPostAction: function() {
		this.view.btnVerifyPhoneNumber.setEnabled(true);
		this.view.btnVerifyPhoneNumber.skin = "sknBtn0095e4RoundedffffffSSP26px";
	},
  incompleteView: function() {
		this.view.btnVerifyPhoneNumber.skin = "sknBtna0a0a0SSPReg26px";
		this.view.btnVerifyPhoneNumber.setEnabled(false);
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
	navToEditPhoneList : function(param){

  },
  navToConfirmDetails : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfileConfirmDetails");
  },
  
  onUpdateButtonClick : function(){
    var number = this.keypadString;
    number = number.replace('(','');
    number = number.replace(')','');
    number = number.replace('-','');
    var isPrimary = "1";
    if(this.view.imgCheckboxPrimary.src === "checkboxempty.png"){
      isPrimary = "0";
    }
    var countryType = "domestic";
    if(this.view.imgCheckboxInternational.src === "checkbox.png"){
      countryType = 'International';
    }
//     if(number && number.length < 10){
//       return;
//     }
    var data = this.selectedData;
    data.isPrimary = isPrimary;
    data.countryType = countryType;
    data.phoneNumber = number;
     var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.updateUserPhoneNumber(data);
  },
  
  onBtnDeleteClick : function(){
    var data = this.selectedData;
    var id = data.id;
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.deleteUserPhoneNumber(id);
  }
});