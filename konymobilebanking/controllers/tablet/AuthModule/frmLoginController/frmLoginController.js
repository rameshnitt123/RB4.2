define({
  timerCounter: 0,
  dialPadNo: "",
  lengthOfDialNo: 0,
  popupMsg:'',
  preloginAdData : [],
  gestID : "",
  gestIDs : [],
  numOfAds : 0,
  xOffset : 0,
  imageObjArray : [],
  imageDownloadFailureCount : 0,
  currAdFlex : 1,
  gemaltoTimerVar:false,
  adsHided : false,

  init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 	this.view.postShow = this.frmLoginPostshow;
  }, 
  
    frmLoginPostshow: function() {
    var navManager = applicationManager.getNavigationManager();
    var appLaunchError = navManager.getCustomInfo("appLaunchError");
    if(! kony.sdk.isNullOrUndefined(appLaunchError)) {
      kony.ui.Alert(appLaunchError.basic, appLaunchError.psp);
      navManager.setCustomInfo("appLaunchError", undefined);
      return;
    }
    var loginData = navManager.getCustomInfo("frmLogin");
    if(loginData.showPasswordUpdatedSuccessMessage)
    {
      this.showPasswordUpdatedSuccessMessage();
    }
    this.checkForEnrollSuccess();
  },

  showPasswordUpdatedSuccessMessage : function()
  {
    var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.login.pwdUpdateMsg");
    this.bindGenericSuccess(msg);
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLogin");
    loginData.showPasswordUpdatedSuccessMessage = false;
    navManager.setCustomInfo("frmLogin", loginData);
  },
  
   checkForEnrollSuccess : function(){
	this.popupMsg = "";
    var navManager = applicationManager.getNavigationManager();
    var enrollInfo = navManager.getCustomInfo("frmEnrollSignUp");
    if(enrollInfo !== null && enrollInfo !== undefined){
      if(enrollInfo.isEnrollSuccess){
        var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.Congrats") + " " +enrollInfo.userName + "! " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.successMessage");
        this.popupMsg = msg;
        this.bindGenericSuccess(msg);
      }
       navManager.setCustomInfo("frmEnrollSignUp", null);
    }
  },

  callOnfrmLoginPreShow: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.startUpCompleted();
	this.initActions();
    this.resetLoginUI();
    this.loginActionClicks();
    this.loginFunctionalPreshow();
    if (authMode.presentationController.isappInitDone())
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.view.tbxUsername.skin="sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.view.tbxPassword.skin="sknTbx424242SSPR30pxBoderF1F1F1Tab";    

  },

  initActions: function() {
    this.view.flxForgot.onClick=this.forgotNavigation;
    this.view.flxCancelPin.onClick=this.flxCancelOnClick;
    this.view.flxPinID.onClick = this.showPinScreen;
    this.view.flxTouchID.onClick = this.touchLoginShow;
    this.view.flxFaceID.onClick = this.showFaceIdScreen;
    this.view.customPopupForTouchID.flxCancel.onClick = this.customAlertPopUpFlxCancelOnClick;
    this.view.flxCancelFI.onClick = this.flxCancelFIOnClick;
    this.view.btnEnroll.onClick = this.navToEnroll;
    this.view.btnSupport.onClick = this.goToSupport;
    this.view.btnLocate.onClick = this.onLocateUSClick;
    this.view.flxOpenNewAccount.onClick = this.navToNUOPhone;
  },
  
  goToSupport: function() {
    var infModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
    infModule.presentationController.commonFunctionForNavigation("frmSupport");
  },
  
  navToNUOPhone: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.resetNewUserPresentationController();
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSignInWithPhoneNumber"); 
  },

  forgotNavigation: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.checkAppinit = true;
    authMode.presentationController.forgotNavigation(this.view.tbxUsername.text); 
  },
  
  resetLoginUI: function() {

    this.view.tbxUsername.skin="sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.view.tbxUsername.focusSkin="sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.view.tbxPassword.skin="sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.view.tbxPassword.focusSkin="sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.view.lblWelcomeMessage.setVisibility(true);
    this.view.lblAccountPreview.setVisibility(false);
    this.view.lblAccountPreviewTime.setVisibility(false);

    this.view.btnLogIn.setEnabled(false);
    this.view.btnLogIn.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab"; 
    this.view.imgDashboard.src = "dashboardicon.png";
    this.view.tbxPassword.secureTextEntry = true;
    this.view.flxContents.forceLayout();

    this.view.flxWelcome.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
    this.setDialPadActions();
    this.view.flxCross.onClick = this.flxCancelDialPadOnClick;
  },

  navToEnroll: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollLastName");
  },

  loginActionClicks: function() {
    this.view.flxPwdVisiblityToggle.onClick = this.flxPwdVisiblityToggleOnClick;
    this.view.tbxUsername.onTextChange = this.enableLoginButton;  
    this.view.tbxPassword.onTextChange = this.enableLoginButton;  
    this.view.tbxPassword.onDone = this.btnLoginOnClick;
    this.view.btnLogIn.onClick = this.btnLoginOnClick;
    this.view.flxCheckBox.onClick = this.rememberMeOption;
    this.view.flxDashboard.onClick = this.handleDashboardClick;
  },

  enableLoginButton: function() {
    if(this.view.tbxUsername.text !==''&&this.view.tbxUsername.text!==null&&this.view.tbxUsername.text!==undefined&&this.view.tbxPassword.text !==''&&this.view.tbxPassword.text!==null&&this.view.tbxPassword.text!==undefined)
    {
      this.view.btnLogIn.setEnabled(true);
      this.view.btnLogIn.skin = "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab";   
    }  
    else {
      this.view.btnLogIn.setEnabled(false);
      this.view.btnLogIn.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";     
    }
  },

  btnLoginOnClick: function() {
    var enteredUserName = this.view.tbxUsername.text;
    var enteredPassword = this.view.tbxPassword.text;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.currentAuthMode = "password";
    authMode.presentationController.onLogin({"username":enteredUserName,"password":enteredPassword});     
  },  

  loginFunctionalPreshow: function() {
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    if (!(navData.isFirstTimeLogin) && (navData.isRememberMeOn) && (navData.userName)){
      var userPreferencesManager = applicationManager.getUserPreferencesManager();
      var firstname = userPreferencesManager.getUserFirstName();
      var lastname = userPreferencesManager.getUserLastName();   
      this.view.lblWelcomeMessage.text =  kony.i18n.getLocalizedString("kony.mb.ForgotMain.UserName")+" "+ firstname+ " "+lastname;
    }
    else 
      this.view.lblWelcomeMessage.text = kony.i18n.getLocalizedString("kony.mb.Welcome");
    this.manageUname(navData);
    this.showDefaultLoginScreen(navData);
    if(navData.isAccountPreviewEnabled){
      this.view.flxDashboard.setVisibility(true); 
    }
    else {
      this.view.flxDashboard.setVisibility(false); 
    }
  },
  manageUname: function(loginData)
  {
    if(loginData.isRememberMeOn != true) {
      this.view.tbxUsername.text = "";
      this.view.tbxPassword.text = "";
      this.view.imgCheckBox.src = "remeberme.png";
    }
    else {
      if(loginData.isFirstTimeLogin != true)
        this.view.tbxUsername.text = loginData.userName;   	
      else
        this.view.tbxUsername.text = "";
      this.view.tbxPassword.text = "";
      this.view.imgCheckBox.src = "remembermetick.png";
    }
  },

  showDefaultLoginScreen: function(loginData) {
    if (loginData.isFirstTimeLogin)
    {
      this.showPasswordScreen();

      this.view.flxPinID.isVisible = false;
      this.view.flxTouchID.isVisible = false;
      this.view.flxWelcome.setEnabled(true);
      this.view.flxContents.setEnabled(true);
      this.view.flxFooter.setEnabled(true);
    }
    if(loginData.usernameFromForgotUsername && (loginData.usernameFromForgotUsername !== undefined || loginData.usernameFromForgotUsername !== ""))
    {
      this.showPasswordScreen();
      this.populateUserName(loginData.usernameFromForgotUsername);
    }
    else if (loginData.NUOUsername && (loginData.NUOUsername !== undefined || loginData.NUOUsername !== ""))
    {
      this.showPasswordScreen();
      this.populateUserName(loginData.NUOUsername);
    }

    else{
      if (loginData.defaultAuthMode == "pin"){        
        this.showPinScreen();
      }
      else if(loginData.defaultAuthMode == "touchid")
      {
        this.touchLoginShow();
      }
      else if (loginData.defaultAuthMode == "faceid")
      {       
    	this.showFaceIdScreen();
      }
      else{
        this.showPasswordScreen();
      }      
    }
  }, 

  showPasswordScreen: function() {
    this.view.flxPinID.isVisible = false;
    this.view.flxTouchID.isVisible = false;
    this.view.flxWelcome.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
  },  

  populateUserName:function(userName) {
    this.view.tbxUsername.text = userName;
    this.view.lblWelcomeMessage.text = "Welcome Back!" + userName;
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLogin");
    delete userName;
    navManager.setCustomInfo("frmLogin",loginData);
  }, 

  flxPwdVisiblityToggleOnClick: function() {
    if (this.view.imgPwdVisiblityToggle.src === "view.png") {
      this.view.imgPwdVisiblityToggle.src = "viewactive.png";
      this.view.tbxPassword.secureTextEntry = false;
    } else {
      this.view.imgPwdVisiblityToggle.src = "view.png";
      this.view.tbxPassword.secureTextEntry = true;
    }
    this.view.tbxPassword.setFocus(true);
    this.view.flxContents.forceLayout();
  },

  rememberMeOption: function() {
    var rememberMeflag = this.view.imgCheckBox.src;
    var loginData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    if (rememberMeflag == "remembermetick.png")
    {
      this.view.imgCheckBox.src = "remeberme.png";
      if (loginData.istouchIdEnabled || loginData.isPinModeEnabled || loginData.isFacialAuthEnabled)
        this.showTouchIdOffAlert(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.rememberMe.Msg"),applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.rememberMeTittle"));
      else
        this.OffLoginFeatures_RememberOff();
    } 
    else
    {
      this.view.imgCheckBox.src = "remembermetick.png";
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMode.presentationController.setRememberMeFlag(true);
      applicationManager.getDataforLogin();
    }
  },

  OffLoginFeatures_RememberOff: function() {
    this.view.flxPinID.setVisibility(false);
    this.view.flxFaceID.setVisibility(false);
    this.view.flxTouchID.setVisibility(false);
    this.view.flxDashboard.setVisibility(false); 
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.setLoginFeaturesOff();
  },  

  showTouchIdOffAlert: function(msg,title) {
    kony.ui.Alert({
      "message": msg,
      "alertHandler": this.alertrememberCallback,
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "yesLabel": "Disable",
      "noLabel": "Cancel",
      "alertTitle": title     
    },{});
  },
  showPinScreen: function() {
  		//this.view.frmLogin.opacity=0.2;   
    	   	
    	//this.view.frmLogin.setEnabled(false);
    	this.view.flxEnterPin.left = "0%";
    	this.clearProgressFlexLogin(); 
    	this.view.customPopupForTouchID.isVisible = false;
        this.view.flxPinID.isVisible = true;
        this.view.flxTouchID.isVisible = false;
    	this.view.flxWelcome.setEnabled(false);
		this.view.flxContents.setEnabled(false);
		this.view.flxFooter.setEnabled(false);
   },

  touchLoginShow : function() {
    this.view.flxPinID.isVisible = false;
    this.view.flxTouchID.isVisible = true;
    var navData=applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    this.view.flxEnterPin.left = "100%";
    this.view.flxPopup.setVisibility(false);
    if(navData.isIphone) {
      var config = {"promptMessage" : "Please Authenticate using Touch Id"};
      kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCallback, config);
    } else {
      this.showTouchIdAndroid(); 
    }
    this.view.flxWelcome.setEnabled(false);
    this.view.flxContents.setEnabled(false);
    this.view.flxFooter.setEnabled(false);
  },
  
  showTouchIdAndroid: function() {
    this.view.flxPopup.setVisibility(false);
    this.view.customPopupForTouchID.isVisible = true;
    var config = {};
    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.authCallback,config);
  }, 
  clearProgressFlexLogin: function() {
    for(var i = 6; i >= 1; i--)
    {
      this.view["flxProgressButton"+i].skin="sknFlxa0a0a0B";  
    }
  },

  setDialPadActions: function() {
    var scopeObj = this;
    this.view.btnOne.onClick = function() {
      scopeObj.getNumber("1");
    };
    this.view.btnTwo.onClick = function() {
      scopeObj.getNumber("2");
    };
    this.view.btnThree.onClick = function() {
      scopeObj.getNumber("3");
    };
    this.view.btnFour.onClick = function() {
      scopeObj.getNumber("4");
    };
    this.view.btnFive.onClick = function() {
      scopeObj.getNumber("5");
    };
    this.view.btnSix.onClick = function() {
      scopeObj.getNumber("6");
    };
    this.view.btnSeven.onClick = function() {
      scopeObj.getNumber("7");
    };
    this.view.btnEight.onClick = function() {
      scopeObj.getNumber("8");
    };
    this.view.btnNine.onClick = function() {
      scopeObj.getNumber("9");
    };
    this.view.btnZero.onClick = function() {
      scopeObj.getNumber("0");
    };
  },

  getNumber: function(num) {
    if(this.view.flxPopup.isVisible === false){
      this.view.flxCross.skin = "sknFlxImgCancel";
      this.lengthOfDialNo = this.dialPadNo.length;
      this.changeSkinOfProgressBartoActive();
      if (this.lengthOfDialNo < 6) {
        this.dialPadNo = "" + this.dialPadNo + num;
      }
      if (this.dialPadNo.length == 6) {
        var pinNo = this.dialPadNo;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
        authMode.presentationController.currentAuthMode = "";
        authMode.presentationController.onPinLogin(pinNo);
        this.dialPadNo = "";     
        this.lengthOfDialNo = 0;
      }
    }
  },

  flxCancelDialPadOnClick: function() {
    this.dialPadNo = this.dialPadNo.slice(0, -1);
    this.lengthOfDialNo = this.dialPadNo.length;
    this.changeSkinOfProgressBartoInactive();
    this.view.flxDialPad.forceLayout();
  },

  changeSkinOfProgressBartoInactive: function() {
    var len = parseInt(this.lengthOfDialNo) + 1;
    switch (len) {
      case 1.0:
        this.view.flxProgressButton1.skin = "sknFlxa0a0a0B";
        break;
      case 2:
        this.view.flxProgressButton2.skin = "sknFlxa0a0a0B";
        break;
      case 3:
        this.view.flxProgressButton3.skin = "sknFlxa0a0a0B";
        break;
      case 4:
        this.view.flxProgressButton4.skin = "sknFlxa0a0a0B";
        break;
      case 5:
        this.view.flxProgressButton5.skin = "sknFlxa0a0a0B";
        break;
      case 6:
        this.view.flxProgressButton6.skin = "sknFlxa0a0a0B";
        break;
    }
    this.view.flxProgressButtons.forceLayout();
  },
  
  changeSkinOfProgressBartoActive: function() {
    var len = parseInt(this.lengthOfDialNo) + 1;
    switch (len) {
      case 1:
        this.view.flxProgressButton1.skin = "sknFlxa0a0a0filled";
        break;
      case 2:
        this.view.flxProgressButton2.skin = "sknFlxa0a0a0filled";
        break;
      case 3:
        this.view.flxProgressButton3.skin = "sknFlxa0a0a0filled";
        break;
      case 4:
        this.view.flxProgressButton4.skin = "sknFlxa0a0a0filled";
        break;
      case 5:
        this.view.flxProgressButton5.skin = "sknFlxa0a0a0filled";
        break;
      case 6:
        this.view.flxProgressButton6.skin = "sknFlxa0a0a0filled";
        break;
    }
    this.view.flxProgressButtons.forceLayout();
  },
  
  bindPinError: function(err) {
    try{
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearProgressFlexLogin);       
    }
    catch(e){
      kony.print(JSON.stringify(e));
    }

  },

  flxCancelOnClick: function() {
    this.view.flxEnterPin.left = "100%";
    this.view.flxFooter.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxWelcome.setEnabled(true);
    this.dialPadNo = "";
    this.lengthOfDialNo = 0;
  },
  
  bindAdData: function()
  {
    
  },

  statusCallback : function(status,msg) {
    if(status == 5000) {
      this.doLoginonTouchId();
    }     
    this.view.flxWelcome.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
  },


 
  authCallback : function(status,msg) {
    if (status == 5000) {
      this.view.customPopupForTouchID.setVisibility(false);
      this.doLoginonTouchId();
    } else if (status == 5002) {
      kony.print("Authentication cancelled");
    } else {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again with Valid Fingerprint");
    }

    this.view.flxWelcome.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
  },

  doLoginonTouchId : function ()
  {
    var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var userName = navData.userName;
    var password = navData.password;
    authMode.presentationController.currentAuthMode = "";
    authMode.presentationController.onLogin({"username":userName,"password":password}); 
  },
  
  showFaceIdScreen: function() {
    this.view.flxEnterPin.left = "100%";
    this.view.customPopupForTouchID.isVisible = false;
    this.view.flxFaceID.isVisible = true;
    this.view.flxPinID.isVisible = false;
    this.view.flxTouchID.isVisible = false;
    var devManager = applicationManager.getDeviceUtilManager();
    if (devManager.isFaceIdSupported()) {
      this.view.flxFaceIdPopUp.setVisibility(false);
      var config = {"promptMessage" : "Sign in with face Id"};
      kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCallback, config);     
    } else {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMod.presentationController.FaceAuthInitialize(this);
      this.view.flxFaceIdPopUp.setVisibility(true);
      this.gemaltoTimer();
    }
    this.view.flxWelcome.setEnabled(false);
    this.view.flxContents.setEnabled(false);
    this.view.flxFooter.setEnabled(false);
  },  

  gemaltoTimer: function() {
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    if(this.gemaltoTimerVar) {
      try{
        kony.timer.cancel("gemaltoTimerId");             
        kony.timer.schedule("gemaltoTimerId",this.faceIdVerify, 3.0, false);}
      catch(e)
      {
        kony.print(e);
      }
    } else {
      this.gemaltoTimerVar = true;
      try{
        kony.timer.schedule("gemaltoTimerId",this.faceIdVerify, 3.0, false);}
      catch(e)
      {
        kony.print(e);
      }
    }
  },

  faceIdVerify: function() {
    
    function onFaceIdVerifySuccess() { 
		var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
      	var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
       	var uName = navData.userName;
       	var password = navData.password;
      	this.view.tbxPassword.text = password;
       	authMode.presentationController.onLogin({"username":uName,"password":password});
	}
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.FaceAuthVerify(this, onFaceIdVerifySuccess.bind(this));
    this.gemaltoTimerVar = false;
  }, 
  
  customAlertPopUpFlxCancelOnClick: function() {
    this.view.customPopupForTouchID.isVisible = false;
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
    this.view.flxWelcome.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();
    this.view.flxPopup.setVisibility(false);

    this.view.forceLayout();
  },
  
  hideAds: function() {
    
  },
  
  alertrememberCallback: function(response) {
    if (response === true) {
      this.OffLoginFeatures_RememberOff();
    }
    else
    {
      this.view.imgCheckBox.src = "remembermetick.png";
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMode.presentationController.setRememberMeFlag(true);
    }
  },
  
  flxCancelFIOnClick: function() {
    try{
      kony.timer.cancel("gemaltoTimerId");
      this.gemaltoTimerVar = false;
    }
    catch(e)
    { 
      kony.print(e);
    }
    this.view.flxFaceIdPopUp.setVisibility(false);
    this.view.flxWelcome.setEnabled(true);
    this.view.flxContents.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
    this.view.forceLayout();
  },
  
  bindGenericError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  bindGenericSuccess: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  },

  bindLoginErrorMessage: function(err) {
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearPassword); 
  },

  clearPassword:function() {
    scopeObj=this;
    scopeObj.view.tbxPassword.text = "";
    scopeObj.view.flxContents.forceLayout();
  },
  
  onLocateUSClick: function() {     
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.checkAppinit = true;
    var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.presentLocateUsView(false, this);
  },

  geoLocationSuccessCallBack: function(response) {
    var latitude, longitude;
    var latLongObj = {};
    if (response && response.coords && response.coords.latitude && response.coords.longitude) {
      latitude = response.coords.latitude;
      longitude = response.coords.longitude;
      latLongObj.latitude = latitude;
      latLongObj.longitude = longitude;
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.getNearByLocations(latLongObj);
    }
  },

  geoLocationErrorCallBack: function(err) {
    var scopeObj = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPad();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.code == 1) {
      var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
      scopeObj.bindGenericError(i18nKey);
    }
    if (err.code == 3 && !isIphone) {
      var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
      scopeObj.bindGenericError(i18n_timeOut);
    }
    if (err.code == 2 && !isIphone) {
      var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
      kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
    }
  },

  onClickSettingsOrCancelHandler: function(response) {
    if (!response) {
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.openLocationSettings();
    }
  },
  
  handleDashboardClick: function() {    
    if (!this.view.flxAccountPreview.isVisible) {                      
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMod.presentationController.showAccountPreview();
    } else {
      this.changeAccountPreviewState();
    }
  },

  bindAccountPreViewData: function(data, timestamp) {
    this.view.lblAccountPreviewTime.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.login.AsOf") + " " + timestamp;
    this.view.segAccountPreview.widgetDataMap = {
      lblAccountName: "accountName",
      lblAccountBalValue: "availableBalance",              
      lblBankName: "bankName",
      lblAccountBal: "accountType" ,
      imgBank: "bankImg"
    };
    this.view.segAccountPreview.setData(data);  
    this.changeAccountPreviewState();
  },

  changeAccountPreviewState: function() {
    if (!this.view.flxAccountPreview.isVisible) {
      this.view.imgDashboard.src = "dbicon_up.png";
      this.view.flxDashboard.forceLayout();
      this.view.lblWelcomeMessage.setVisibility(false);
      this.view.lblAccountPreview.setVisibility(true);
      this.view.lblAccountPreviewTime.setVisibility(true);
      this.view.flxWelcome.forceLayout();
      this.view.flxAccountPreview.setVisibility(true);
      this.view.flxLoginThroughUsernamePassword.setEnabled(false);
      this.animateFlxContent();
      this.animateAccountPreview();
    } else {
      this.view.imgDashboard.src = "dashboardicon.png";
      this.view.flxDashboard.forceLayout();
      this.view.lblWelcomeMessage.setVisibility(true);
      this.view.lblAccountPreview.setVisibility(false);
      this.view.lblAccountPreviewTime.setVisibility(false);
      this.view.flxLoginThroughUsernamePassword.setEnabled(true);
      this.view.flxWelcome.forceLayout();
      this.animateFlxContentBack();
      this.animateAccountPreviewBack();
    }
  },

  animateAccountPreview: function() {
    var animationParams = {
      startTop: "20%",
      startOpacity: 1,
      endTop: "15%",
      endOpacity: 1,
      action: function() {}   
    };

    this.animateAccountPreviewView(animationParams);
  },

  animateFlxContent: function() {
    var endTopParam = "100%";
    this.animateFlxContentView(endTopParam);
  },

  animateAccountPreviewBack: function() {
    var self = this;
    var animationParams = {
      startTop: "15%",
      startOpacity: 0,
      endTop: "20%",
      endOpacity: 0,
      action: function() {
        self.view.flxAccountPreview.setVisibility(false);
      },
    };

    this.animateAccountPreviewView(animationParams);
  },

  animateFlxContentBack: function() {
    var endTopParam = "15%";
    this.animateFlxContentView(endTopParam);
  },

  animateAccountPreviewView: function(animationParams) {
    this.view.flxAccountPreview.animate(
      kony.ui.createAnimation({
        "0": {
          anchorPoint: {
            x: 0.5,
            y: 0.5
          },
          stepConfig: {
            timingFunction: kony.anim.EASE
          },
          rectified: true,
          top: animationParams.startTop,
          opacity: animationParams.startOpacity

        },
        "100": {
          anchorPoint: {
            x: 0.5,
            y: 0.5
          },
          stepConfig: {
            timingFunction: kony.anim.EASE
          },
          rectified: true,
          top: animationParams.endTop,
          opacity: animationParams.endOpacity
        }
      }), {
        delay: 0,
        iterationCount: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.3
      }, {
        animationEnd: animationParams.action
      });
  },

  animateFlxContentView: function(endTopParam) {
    this.view.flxLoginThroughUsernamePassword.animate(
      kony.ui.createAnimation({
        "100": {
          anchorPoint: {
            x: 0.5,
            y: 0.5
          },
          stepConfig: {
            timingFunction: kony.anim.EASE
          },
          rectified: true,
          top: endTopParam,

        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.3
      }, {
        "animationEnd": function() {}
      });
  },

});
