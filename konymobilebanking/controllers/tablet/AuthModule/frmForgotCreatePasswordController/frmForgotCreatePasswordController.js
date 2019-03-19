define({
  timerCounter: 0,
  isPasswordValid : false,
  passwordsMatch : false,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 },
  callOnPreShow: function () {
    this.view.flxPopup.setVisibility(false);
    this.initActions();
    this.handleData();
    this.renderTitleBar();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.view.customHeader.flxBack.setVisibility(true);
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
  handleData :function(){ 
       var scope = this;
       this.view.txtNewPassword.text = '';
       this.view.txtReEnterPassword.text = '';
       this.view.flxSecurityRequirements.setVisibility(false);
       this.view.imgPasswordsMatch.src = "tickmark.png";
       this.view.imgMaskUnmask.src = "viewicon.png";
       this.view.btnUpdatePassword.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";
       this.view.btnUpdatePassword.setEnabled(false);
       this.view.imgMaskUnmask.onTouchEnd = this.maskUnmaskPassword;
  },
  initActions: function(){
    this.view.customHeader.flxBack.onClick=this.goBack;
    this.view.customHeader.btnRight.onClick=this.onCancel;
    this.view.txtNewPassword.onTextChange=this.matchPasswords;
    this.view.txtReEnterPassword.onTextChange=this.matchPasswords;
    this.view.txtNewPassword.onTouchStart=this.hideFlxRequirements;
    this.view.txtNewPassword.onEndEditing=this.validatePassword;
  },
  goBack:function() {
    var navManger = applicationManager.getNavigationManager();
    navManger.goBack();
  },
  onCancel : function() {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToLogin();
  },
  maskUnmaskPassword: function () {
    if (this.view.txtNewPassword.secureTextEntry === true) {
      this.view.txtNewPassword.secureTextEntry = false;
      this.view.imgMaskUnmask.src = "viewactive.png";
    } else {
      this.view.txtNewPassword.secureTextEntry = true;
      this.view.imgMaskUnmask.src = "viewicon.png";
    }
  },
 matchPasswords: function () {
   if(applicationManager.getPresentationValidationUtility().isValidTextBox(this.view.txtNewPassword.text))
   {
     if (this.view.txtNewPassword.text === this.view.txtReEnterPassword.text) {
       this.view.imgPasswordsMatch.src = "greentick.png";
       this.passwordsMatch = true;
     }
     else {
       this.view.imgPasswordsMatch.src = "tickmark.png";
       this.passwordsMatch = false;
     }
   }
   else
   {
     this.view.imgPasswordsMatch.src = "tickmark.png";
     this.passwordsMatch = false;
   }
   if(this.passwordsMatch && this.isPasswordValid)
   {
     this.view.btnUpdatePassword.skin = "sknBtnBg0A78D1FontFFSSPR36pxTab";
     this.view.btnUpdatePassword.setEnabled(true);
   }
   else
   {
     this.view.btnUpdatePassword.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";
     this.view.btnUpdatePassword.setEnabled(false);
   }
   this.view.forceLayout();
 },
  validatePassword : function(){
    var password = this.view.txtNewPassword.text;
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.validatePassword(password);
  },
  updatePasswordAction: function () {
          applicationManager.getPresentationUtility().showLoadingScreen();
          var newPassword = this.view.txtNewPassword.text;
          var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authModule.presentationController.updatePassword(newPassword);
  },
  //     showPopupUpdatePasswordSuccessful: function () {
  
  bindGenericError : function(errorMsg) {
    var scopeObj=this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj,errorMsg);
  },
  passwordValid : function(){
    this.isPasswordValid = true;
    this.view.txtNewPassword.skin = "sknTbx424242SSPR30pxBoderF1F1F1Tab";
    this.matchPasswords();
  },
    // utitlity function to show password rules
  showFlxSecurityRequirements: function() {
         this.isPasswordValid = false;
         this.view.flxSecurityRequirements.isVisible = true;
         if (this.view.flxSecurityRequirements.height !== "165dp") {
             this.view.flxSecurityRequirements.animate(
                 kony.ui.createAnimation({
                     "0": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "0dp",
                     },
                     "100": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "165dp",
                     }
                 }), {
                     "delay": 0,
                     "iterationCount": 1,
                     "fillMode": kony.anim.FILL_MODE_FORWARDS,
                     "duration": 0.5
                 }, {
                     "animationEnd": function() {}
                 });
         }
     },
    // utitlity function to hide password rules
    hideFlxRequirements: function() {
      var scope = this;
      if (this.view.flxSecurityRequirements.height !== "0dp") {
        this.view.flxSecurityRequirements.animate(
          kony.ui.createAnimation({
            "0": {
              "anchorPoint": {
                "x": 0.5,
                "y": 0.5
              },
              "stepConfig": {
                "timingFunction": kony.anim.EASE
              },
              "rectified": true,
              "height": "165dp",
            },
            "100": {
              "anchorPoint": {
                "x": 0.5,
                "y": 0.5
              },
              "stepConfig": {
                "timingFunction": kony.anim.EASE
              },
              "rectified": true,
              "height": "0dp",
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
          }, {
            "animationEnd": function() {
              scope.view.flxSecurityRequirements.isVisible = true;
            }
          });
      }
    },
  
    handleInvalidPasswordUI : function()
    {
      this.view.txtNewPassword.skin = "sknTbx424242SSPR30pxBoderFF5D6ETab";
    }
});