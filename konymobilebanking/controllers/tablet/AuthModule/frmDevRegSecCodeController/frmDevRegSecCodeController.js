define({ 

   keypadString: '',
    timerCounter:0,
  
   callOnPreShow:function()
   {
      var scope = this;
      this.keypadString = '';
      this.incompleteSecurityCodeView();
      this.updateInputBullets('flxInputSecurityCode');
      this.renderTitleBar();
      scope.initActions();
      var navManager = applicationManager.getNavigationManager();
	  var currentForm = navManager.getCurrentForm();
	  applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  applicationManager.getPresentationUtility().dismissLoadingScreen(); 
   },
    init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    }, 
     incompleteSecurityCodeView: function() {
          this.view.btnVerifySecCode.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";
          this.view.btnVerifySecCode.setEnabled(false);
          this.view.flxMain.forceLayout();
    },
   setKeypadChar: function(char) {
            this.keypadString = this.keypadString + char;
            if (this.keypadString.length === 6) {
             this.enterSecurityCodePostAction();
             } else if (this.keypadString.length < 6) {
             this.incompleteSecurityCodeView();
     		 } else if (this.keypadString.length > 6) {
             this.keypadString= this.keypadString.slice(0, 6);
             return;
             }
        this.updateInputBullets('flxInputSecurityCode');
    },
    enterSecurityCodePostAction:function()
  {
        this.view.btnVerifySecCode.setEnabled(true);
        this.view.btnVerifySecCode.skin = "sknBtnBg0A78D1FontFFSSPR36pxTab";
        this.view.flxMain.forceLayout();
  },
  updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP55px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
   clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets('flxInputSecurityCode');
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
              if (this.keypadString.length <6) 
                {
                  this.incompleteSecurityCodeView();
                }
            this.updateInputBullets('flxInputSecurityCode');
        }
    },
   btnVerifyOnClick:function(){
		var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		authMode.presentationController.updateDeviceRegistration();               
   },
    flxCheckBoxOnClick: function() {
        if (this.view.imgCheckBox.src === "remembermetick.png") {
            this.view.imgCheckBox.src = "remeberme.png";
        } else {
            this.view.imgCheckBox.src = "remembermetick.png";
        }
        this.view.flxCheckBox.forceLayout();
    },
    initActions : function() {
      var self = this;
      self.view.btnResend.onClick = self.requestResendOTP;
      self.view.btnVerifySecCode.onClick = self.btnVerifyOnClick;
      self.view.flxCheckBox.onClick = self.flxCheckBoxOnClick;
      self.view.customHeader.btnRight.onClick = self.onClickCancel;
    },
    onClickCancel : function()
    {
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
      authModule.presentationController.commonFunctionForNavigation("frmLogin");
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

    requestResendOTP : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authModule.presentationController.resendDeviceRegOTP();
    },
  
  onResendOTP : function(){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    alert(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.deviceRegistration.otpIsSent"));
  }
 });