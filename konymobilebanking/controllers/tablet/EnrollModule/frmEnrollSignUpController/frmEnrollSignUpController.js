define({
  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(3);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var self = this;
    this.fv.submissionView(this.view.btnEnroll);
    this.view.txtPassword.secureTextEntry = true;
    this.view.txtReEnterPass.secureTextEntry = true;
    this.hideFlxRequirements();
    this.initAction();
    this.initHeaderActions();
    this.clearAllFields();
    this.view.imgRenterPass.src = "tickmark.png";
    this.view.imghideOrShowPwd.src = "view.png";
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initAction: function() {
    var self = this;
    this.view.btnEnroll.onClick = this.btnContinueSignUpOnClick;
    this.view.txtPassword.onEndEditing = this.txtPasswordOnEndEditing;
    this.view.flxPwdVisiblityToggle.onClick = this.imgPwdVisiblityToggleOnClick;
    this.view.txtPassword.onTouchStart = this.hideInvalidPassword;
    this.view.txtEnterUsername.onTextChange = this.validateUsername;

    this.view.txtPassword.onTextChange = function() {
      self.txtReEnterPassOnTextChange();
      self.validatePassword();
    };

    this.view.txtReEnterPass.onTextChange = function() {
      self.txtReEnterPassOnTextChange();
      self.validateReenterPassword();
    };
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  clearAllFields: function() {
    this.view.txtEnterUsername.text = "";
    this.view.txtPassword.text = "";
    this.view.txtReEnterPass.text = "";
  },

  validateUsername: function() {
    var text = this.view.txtEnterUsername.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },

  validatePassword: function() {
    var text = this.view.txtPassword.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },

  validateReenterPassword: function() {
    var text = this.view.txtReEnterPass.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },

  /**
  * Validates Password
  */
  txtPasswordOnEndEditing: function() {
    var password = this.view.txtPassword.text;
    if (password && password !== '') {
      var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollModule.presentationController.validatePassword(password);
    }  
  },

  /**
  * Validates User Name
  */
  txtEnterUsernameOnEndEditing: function() {
    var userName = this.view.txtEnterUsername.text;
    if (userName && userName !== '') {
      var validationManager = applicationManager.getValidationUtilManager();
      if (validationManager.isValidUserName(userName)) {
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        applicationManager.getPresentationUtility().showLoadingScreen();
        enrollModule.presentationController.checkAvailabilityOfUserName(userName);
      } else {
        this.bindInvalidUserName();
      }
    }    
  },

  resetSkinsOfUsernameAndPwd: function() {
    this.view.txtEnterUsername.skin = "sknTbx424242SSPRegular26px";
    this.view.txtPassword.skin = "sknTbx424242SSPRegular26px";
    this.view.txtReEnterPass.skin ="sknTbx424242SSPRegular26px";
    this.view.txtEnterUsername.focusSkin = "sknTbx424242SSPRegular26px";
    this.view.txtPassword.focusSkin = "sknTbx424242SSPRegular26px";
    this.view.txtReEnterPass.focusSkin ="sknTbx424242SSPRegular26px";
    this.view.flxSignUpContainer.forceLayout();
  },

  /**
  * Validates User Name and Password first and then calls CreateUser method from PresentationController.
  */
  btnContinueSignUpOnClick: function() {
    var userName = this.view.txtEnterUsername.text;
    var password = this.view.txtPassword.text;
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var validationManager = applicationManager.getValidationUtilManager();
    if (!(validationManager.isValidUserName(userName))) {
      this.bindInvalidUserName();
    } else if (password !== this.view.txtReEnterPass.text) {
      this.view.txtPassword.skin = "sknTbx424242SSPRegular26pxBerr";
      this.view.txtReEnterPass.skin = "sknTbx424242SSPRegular26pxBerr";
      this.view.txtPassword.focusSkin = "sknTbx424242SSPRegular26pxBerr";
      this.view.txtReEnterPass.focusSkin = "sknTbx424242SSPRegular26pxBerr";
      this.view.flxSignUpContainer.forceLayout();
    } else if (enrollModule.presentationController.isValidPassword(password)) {
      applicationManager.getPresentationUtility().showLoadingScreen();
      enrollModule.presentationController.createUser(userName,password);    
    } else {
      this.bindInvalidPassword();
    }
  },

  imgPwdVisiblityToggleOnClick: function() {
    if (this.view.imghideOrShowPwd.src === "view.png") {
      this.view.imghideOrShowPwd.src = "viewactive.png";
      this.view.txtPassword.secureTextEntry = false;
      this.view.flxSignUpContainer.forceLayout();
    } else {
      this.view.imghideOrShowPwd.src = "view.png";
      this.view.txtPassword.secureTextEntry = true;
      this.view.flxSignUpContainer.forceLayout();
    }
  },

  txtReEnterPassOnTextChange: function() {
    var pass = this.view.txtPassword.text;    
    if (pass && pass !== "" && this.view.txtReEnterPass.text === pass) {
      this.view.imgRenterPass.src = "greentick.png";
    } else {
      this.view.imgRenterPass.src = "tickmark.png";
    }
    this.view.flxSignUpContainer.forceLayout();
  },

  bindUserNameIsAvailable: function() {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  /**
  * Shows Toast Message "User Name is not available"
  */
  bindUserNameIsNotAvailable: function() {   
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg"));
  },

  /**
  * Shows Toast Message "Please enter valid username"
  */
  bindInvalidUserName: function() {   
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.OnBoarding.invalidusername"));
  },

  bindValidPassword: function() {
    // TODO
  },

  /**
  * Shows Toast Message "Please enter Valid Password"
  */
  bindInvalidPassword: function() {
    this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidPassword"));
  },

  /**
  * Shows Toast Message with red skin
  */
  bindViewError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  showInvalidPassword: function() {
    this.view.txtPassword.skin = "sknTbx424242SSP28pxBorder1PxBgff5d6eTab";
    this.showFlxSecurityRequirements();
  },

  hideInvalidPassword: function() {
    this.view.txtPassword.skin = "sknTbx424242SSPRegular28pxTab";
    this.hideFlxRequirements();
  },

  changeSecurityRequirementsState: function(startHeight, endHeight) {
    this.view.flxSecurityRequirements.animate(
      kony.ui.createAnimation(
        {
          0: {
            anchorPoint: {
              x: 0.5,
              y: 0.5
            },
            stepConfig: {
              timingFunction: kony.anim.EASE
            },
            rectified: true,
            height: startHeight,
          },
          100: {
            anchorPoint: {
              x: 0.5,
              y: 0.5
            },
            stepConfig: {
              timingFunction: kony.anim.EASE
            },
            rectified: true,
            height: endHeight,
          }
        }), 
      {
        delay: 0,
        iterationCount: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.5
      }, {animationEnd: function() {}}
    );
  },

  showFlxSecurityRequirements: function() {
   this.view.flxSecurityRequirements.isVisible = true; 
   // this.changeSecurityRequirementsState("0dp", "165dp");
  },

  hideFlxRequirements: function() {
    this.view.flxSecurityRequirements.isVisible = false;
    //this.changeSecurityRequirementsState("165dp", "0dp");
  }
});