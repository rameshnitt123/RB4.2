define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("----Start preShow in frmExternalBankLoginController----");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.tbxUsername.setFocus(true);
    this.initActions();
    this.initHeaderActions();
    var navigationManager = applicationManager.getNavigationManager();
    var frmExternalBankLoginData = navigationManager.getCustomInfo("frmExternalBankLogin");
    this.view.imgBankLogo.src = frmExternalBankLoginData.logo.src;
    this.view.lblUseOnlineBankCred.text = kony.i18n.getLocalizedString("kony.mb.externalAccounts.use") + " " + frmExternalBankLoginData.bankName + " " + 
      kony.i18n.getLocalizedString("kony.mb.externalAccounts.onlineBankingCredentials");
    this.view.tbxUsername.text = "";
    this.view.tbxPassword.text = "";
    this.enableLoginButton();
    navigationManager.setCustomInfo("frmExternalBankLogin_IsSecureTextEntryEnabled", false);
    this.flxPwdVisiblityToggleOnClick();
  },
    
  initActions: function() {
    this.view.flxPwdVisiblityToggle.onClick = this.flxPwdVisiblityToggleOnClick;
    this.view.btnLogIn.onClick = this.onClickOfLogin;
    this.view.tbxUsername.onTextChange = this.enableLoginButton;
    this.view.tbxPassword.onTextChange = this.enableLoginButton;
    this.view.tbxPassword.onDone = this.onClickOfLogin;
  },

  navigateToSelectExternalAccountsForm: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmExternalBankLoginController : navigateToSelectExternalAccountsForm ####");
    var accountModule = applicationManager.getModule("AccountModule");
    accountModule.presentationController.commonFunctionForNavigation("frmSelectExternalAccounts");
  },

  onClickOfLogin: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var username = this.view.tbxUsername.text;
    var password = this.view.tbxPassword.text;
    var navigationManager = applicationManager.getNavigationManager();
    var frmExternalBankLoginData = navigationManager.getCustomInfo("frmExternalBankLogin");
    if (String(frmExternalBankLoginData.isOauth2).trim().toLowerCase() === "true") {
      this.authenticateUserThroughOAuth2AndSaveSessionToken(username, password, frmExternalBankLoginData.identityProvider, frmExternalBankLoginData.bankId);
    } else {
      this.authenticateUserThroughIdentityServiceAndSaveCredToDB(username, password, frmExternalBankLoginData.identityProvider, frmExternalBankLoginData.bankId);
    }
  },

  extractErrorMessageFromExternalLoginResponse: function(message, key) {
    message = String(message).trim();
    key = String(key).trim();
    var index = message.indexOf(key);
    if (index < 0) {
      return message;
    }
    message = message.substring(index);
    index = message.indexOf("[");
    var endIndex = message.indexOf("]");
    if(index < 0 || endIndex < 0) {
      return message;
    }
    index += 1;
    message = message.substring(index, endIndex);
    return message;
  },

  authenticateUserThroughOAuth2AndSaveSessionToken: function(username, password, identityProvider, bankId) {
    var self = this;
    function saveCredSuccessCallback(res) {
      var accountModule = applicationManager.getModule("AccountModule");
      accountModule.presentationController.fetchOtherBankAccounts({
        "userName": username,
        "mainUser": applicationManager.getUserPreferencesManager().getUserName(),
        "bankId": bankId
      });
    }

    function loginSuccessCallback(userCredentials, res) {
      var mainUser = applicationManager.getUserPreferencesManager().getUserName();
      var accountModule = applicationManager.getModule("AuthModule");
      accountModule.presentationController.saveUserCredentialsOfExternalBank(userCredentials.username, userCredentials.password, res.params.SessionToken, 
                                                                             mainUser, userCredentials.bankId, saveCredSuccessCallback, errorCallback);
    }

    function errorCallback(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      self.clearUsernameAndPassword();
      if(err && err.details && err.details.message) {
        applicationManager.getDataProcessorUtility().showToastMessageError(self, self.extractErrorMessageFromExternalLoginResponse(err.details.message, 
                                                                                                                                   "Error Message"));
      } else {
        applicationManager.getDataProcessorUtility().showToastMessageError(self, err);
      }
    }

    username = username;
    password = password;
    var userCredentials = {
      username: username,
      password: password,
      identityProvider: identityProvider,
      bankId: bankId
    };
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmExternalBankLoginController : navigateToSelectExternalAccountsForm ####");
    var accountModule = applicationManager.getModule("AuthModule");
    accountModule.presentationController.authenticateUserInExternalBank(userCredentials, loginSuccessCallback.bind(this, userCredentials), errorCallback);
  },

  authenticateUserThroughIdentityServiceAndSaveCredToDB: function(username, password, identityProvider, bankId) {
    var self = this;
    function saveCredSuccessCallback(res) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var accountModule = applicationManager.getModule("AccountModule");
      accountModule.presentationController.fetchOtherBankAccounts({
        userName: username,
        mainUser: applicationManager.getUserPreferencesManager().getUserName(),
        bankId: bankId
      });
    }

    function loginSuccessCallback(userCredentials, res) {
      var mainUser = applicationManager.getUserPreferencesManager().getUserName();
      var accountModule = applicationManager.getModule("AuthModule");
      accountModule.presentationController.saveUserCredentialsOfExternalBank(userCredentials.username, userCredentials.password, " ", mainUser, 
                                                                             userCredentials.bankId, saveCredSuccessCallback, errorCallback);
    }

    function errorCallback(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      self.clearUsernameAndPassword();            
      if(err && err.details && err.details.message) {
        applicationManager.getDataProcessorUtility().showToastMessageError(self, self.extractErrorMessageFromExternalLoginResponse(err.details.message, 
                                                                                                                                   "Error Message"));
      } else {
        applicationManager.getDataProcessorUtility().showToastMessageError(self, err);
      }
    }
    username = username;
    password = password;
    var userCredentials = {
      username: username,
      password: password,
      identityProvider: identityProvider,
      bankId: bankId
    };
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmExternalBankLoginController : authenticateUserThroughIdentityServiceAndSaveCredToDB ####");
    var accountModule = applicationManager.getModule("AuthModule");
    accountModule.presentationController.authenticateUserInExternalBank(userCredentials, loginSuccessCallback.bind(this, userCredentials), errorCallback);        
  },

  enableLoginButton: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmExternalBankLoginController : enableLoginButton ####");
    var username = this.view.tbxUsername.text;
    var password = this.view.tbxPassword.text;          	
    if (username  && password) {
      this.view.btnLogIn.setEnabled(true);
      this.view.btnLogIn.skin = "sknBtn0095e4RoundedffffffSSP26px";
    } else {
      this.view.btnLogIn.setEnabled(false);
      this.view.btnLogIn.skin = "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
    }          
  },

  flxPwdVisiblityToggleOnClick: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmExternalBankLoginController : flxPwdVisiblityToggleOnClick ####");
    var navigationManager = applicationManager.getNavigationManager();
    var isSecureTextEntryEnabled = navigationManager.getCustomInfo("frmExternalBankLogin_IsSecureTextEntryEnabled");
    this.view.imgPwdVisiblityToggle.src = isSecureTextEntryEnabled ? "viewactive.png" : "view.png";
    this.view.tbxPassword.secureTextEntry = !isSecureTextEntryEnabled;
    navigationManager.setCustomInfo("frmExternalBankLogin_IsSecureTextEntryEnabled", !isSecureTextEntryEnabled);
    this.view.flxMainContainer.forceLayout();
  },

  clearUsernameAndPassword: function() {
    this.view.tbxPassword.text = "";
    this.enableLoginButton();
    this.view.flxMainContainer.forceLayout();
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onHandleCancelAction;
    }
  },

  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  onHandleCancelAction: function() {
    var authModule = applicationManager.getModule("AuthModule");
    authModule.presentationController.cancelCommon();
  },

  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  }
});