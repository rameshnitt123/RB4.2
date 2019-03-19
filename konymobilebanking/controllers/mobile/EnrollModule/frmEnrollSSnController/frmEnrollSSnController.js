define({
  keypadString: '',
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  showEnterSSN: function() {
    this.setActions();
    var scope = this;
    this.keypadString = '';
    this.view.lblSSN.text = "";
   // this.updateInputBullets("flxInputSSN");
    this.incompleteSSNoView();
  //  this.updateInputBullets("flxInputSSN");
    if (kony.os.deviceInfo().name !== "iPhone") {
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    } else {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    scope.clearSSN();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  setActions: function() {
    var scope = this;
    this.view.btnVerifySSN.onClick = function() {
      scope.verifyAndNavigate();
    };
    this.view.customHeader.flxBack.onClick = function() {
      scope.navToDOB();
    };
    this.view.customHeader.btnRight.onClick = function() {
      scope.onClickCancel();
    };
  },

  /**
  * Code to verify the SSN is valid or not 
  */
  verifyAndNavigate: function() {
    var scope = this;
    var temp = scope.keypadString;
    var SSN = temp.replace(/-/g,"");
    if(SSN===null || SSN.length===0)
    {
      scope.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));   
    }
    else
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      var params = {
        "dateOfBirth":enrollModule.presentationController.getEnrollDOB(),
        "ssn":SSN,
        "userlastname":enrollModule.presentationController.getEnrollLastName(),
      };
      enrollModule.presentationController.checkUserEnrolled(params);
    }
  },

  userNotEnrolled : function(){
    var scope = this;
    var temp = scope.keypadString;
    var SSN = temp.replace(/-/g,"");
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.validateEnrollSSN(SSN);
  },

  navToSecurityCheck: function() {
     var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
     enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurityCheck");
  },

  navToDOB: function() {
     var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
  },

  onClickCancel : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  navToAlreadyEnrolled: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmAlreadyEnrolled");
  },

  setKeypadChar: function(char) {
    this.keypadString = this.keypadString + char;
    if (this.keypadString.length > 0) {
      this.enterSSNPostAction();
    } else if (this.keypadString.length < 1) {
      this.incompleteSSNoView();
    } else if (this.keypadString.length > 11) {
      this.keypadString = this.keypadString.slice(0, 11);
      return;
    }
  //  this.updateInputBullets("flxInputSSN");
    this.view.lblSSN.text = this.keypadString;
  },

  clearKeypadChar: function() {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
    //  this.updateInputBullets("flxInputSSN");
    }
    if (this.keypadString.length !== 0) {
      if (this.keypadString[this.keypadString.length - 1] == '-') {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      }
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (kony.sdk.isNullOrUndefined(this.keypadString) || this.keypadString === "") {
        this.incompleteSSNoView();
      }
     // this.updateInputBullets("flxInputSSN");
    }
    this.view.lblSSN.text = this.keypadString;
  },
  updateInputBullets: function(inputFlx) {
    var dummyString = '___-__-____';
    if (this.keypadString.length === 3 || this.keypadString.length === 6) {
      this.keypadString = this.keypadString + '-';
    }

    var widgets = this.view[inputFlx].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      // widgets[i].skin = "sknLbl979797SSP60px";
      if(this.keypadString[i] === '-'){
        widgets[i].text = this.keypadString[i];
      }else{
        widgets[i].text = "•";
      }
    }
    for (var i = this.keypadString.length; i < widgets.length; i++) {
      //widgets[i].skin = "sknLble3e3e3SSP60px";
      widgets[i].text = dummyString[i];
    }
    this.view.forceLayout();
  },
  enterSSNPostAction: function() {
    this.view.btnVerifySSN.setEnabled(true);
    this.view.btnVerifySSN.skin = "sknBtn0095e4RoundedffffffSSP26px";
    this.view.flxMainContainer.forceLayout();
  },
  incompleteSSNoView: function() {
    this.view.btnVerifySSN.skin = "sknBtna0a0a0SSPReg26px";
    this.view.flxMainContainer.forceLayout();
    this.view.btnVerifySSN.setEnabled(false);
  },
  /*
*Code to show error message
*/
  bindViewError : function(msg)
  {
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,msg);
  },
  clearSSN : function(){
    var widgets = this.view["flxInputSSN"].widgets();
    for (var i = 0; i < 11; i++) {
      if(i==3 || i==6){
        widgets[i].text = '-';
      }
      else{
        widgets[i].text = '_';
      }
      
    }
    this.view.forceLayout();
  }
});