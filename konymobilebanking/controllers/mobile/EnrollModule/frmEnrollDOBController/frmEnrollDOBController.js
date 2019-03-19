define({
  timerCounter: 0,
  keypadString: '',
  locale : kony.i18n.getCurrentLocale(),
 // locale : "sv",
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    this.view.customHeaderPersonalInfo.lblLocateUs.text = "Date of Birth";
    this.view.customHeaderPersonalInfo.btnRight.text = "CANCEL";
	this.locale = kony.i18n.getCurrentLocale();
    this.setDummyText();
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var dateOfBirth = enrollMod.presentationController.getEnrollDOB();
    if(dateOfBirth !== null && dateOfBirth !== "" && dateOfBirth !== undefined){ 
      this.view.btnVerifyDOB.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnVerifyDOB.setEnabled(true);
      this.keypadString = dateOfBirth;
      this.updateInputBullets();
    }
    else{
      this.view.btnVerifyDOB.skin = "sknBtnOnBoardingInactive";
      this.view.btnVerifyDOB.setEnabled(false);
      this.keypadString = '';
      this.updateInputBullets();
    }
    this.setFlowActions();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
    this.fv.submissionView(this.view.btnVerifyDOB);
    this.fv.checkDOBLength(this.keypadString);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
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
  setFlowActions : function(){
    var scope = this;
    this.view.btnVerifyDOB.onClick = function(){
      scope.validateDOB();
    };
    this.view.customHeaderPersonalInfo.flxBack.onClick = function(){
      scope.navToLastName();
    };
    this.view.customHeaderPersonalInfo.btnRight.onClick = function(){
      scope.onClickCancel();
    };
  },
  navToSSN : function(){
      var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSSn");
  },
  navToLastName : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  onClickCancel : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  setKeypadChar: function (char) {
    if (this.keypadString.length === 10) return;
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
    //     if(this.view.lblYearFour.text !== "" && this.view.lblYearFour.text !== "_")
    //       this.view.btnVerifyDOB.skin = "sknBtn0095e4RoundedffffffSSP26px";
    //    else
    //     this.view.btnVerifyDOB.skin = "sknBtnOnBoardingInactive";
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
  updateInputBullets: function () {
    var scope = this;
    var scope = this, dummyString;
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
    //var dummyString = 'MM/DD/YYYY';
    // if (this.keypadString.length === 3 || this.keypadString.length === 6) {
    //   this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
    // } else if (this.keypadString.length === 2 || this.keypadString.length === 5) {
    //   this.keypadString = this.keypadString + '/';
    // }

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
    var  date = this.keypadString;    
    if(date.length === 10)	
    {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.validateDOBAndNavigate(date);  
    }
    else
    {
      this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));   
    }
  },

  assignDataToForm : function(newUserJSON){
    var scope = this;
    var dob = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null)?newUserJSON.dateOfBirth:"";
    if(dob!==""){
      dob = dob.substr(0,10);
      dob = dob.split("-");
      var dobText = dob[1]+dob[2]+dob[0];
      for(var i=0;i<dobText.length;i++)
      {
        this.setKeypadChar(dobText.charAt(i));
      }
    }
    else
    {
      this.keypadString = "";
      this.updateInputBullets();
    }
    this.view.forceLayout();
  },

  //Development
  /**
  * validates Date of Birth
  */
  validateDOB: function() {
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
            var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollMod.presentationController.validateDOB(dob);
        }
    },
  /**
  * Shows Toast Message with red skin
  */
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },


});