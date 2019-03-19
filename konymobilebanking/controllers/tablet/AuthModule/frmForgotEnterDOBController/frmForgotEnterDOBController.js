define({
    keypadString: '',
    timerCounter: 0,
    init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 },
  callOnPreShow: function () {
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.renderTitleBar();
        this.handleData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
   	    var currentForm=navManager.getCurrentForm();
   		applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar :function(){
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }    
    },
   handleData : function(){
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var forgotObj = authModule.presentationController.getForgotObjectForView();
    if(!forgotObj.dateOfBirth)
    {
      this.keypadString = "";
    }
    else
      {
        this.keypadString = forgotObj.dateOfBirth;
      }
     this.updateInputBullets();
  },
  initActions:function()
  {
      this.view.btnVerify.onClick=this.validateDOB;
      this.view.customHeader.flxBack.onClick=this.goBack;
      this.view.customHeader.btnRight.onClick = this.onCancel;
  },
    //KEYPAD OPS:
    updateInputBullets: function () {
        var scope = this;
        var dummyString = 'MM/DD/YYYY';

        var widgets = this.view["flxInputDOB"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
      
       if(this.keypadString.length !== 10)
          {
            this.view.btnVerify.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";
    		this.view.btnVerify.setEnabled(false);
      	  }
    	else
      	 {
       	   this.view.btnVerify.skin = "sknBtnBg0A78D1FontFFSSPR36pxTab";
       	   this.view.btnVerify.setEnabled(true);
      	 }
        this.view.forceLayout();
    },
    setKeypadChar: function (char) {
        if (this.keypadString.length === 10) return;

        this.keypadString = this.keypadString + char;
        if (this.keypadString.length === 2 || this.keypadString.length === 5) {
          this.keypadString = this.keypadString + '/';
        }
        this.updateInputBullets();
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
    },
  validateDOB:function()
  {
      var DOB = this.keypadString;
      applicationManager.getPresentationUtility().showLoadingScreen();
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authModule.presentationController.validateDOB(DOB);  
  },
   bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  goBack:function()
  {
    var navManger = applicationManager.getNavigationManager();
    navManger.goBack();
  },
  onCancel : function()
  {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToLogin();    
  }
 
});