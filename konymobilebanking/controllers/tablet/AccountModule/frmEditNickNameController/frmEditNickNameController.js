define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmEditNickNameController : preShow ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.tbxUsername.setFocus(true);
    this.initActions();
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var credentials = navManager.getCustomInfo("frmEditNickName");
    var nickName = credentials.nickName;
    this.view.tbxNickname.text = nickName;      
    this.changeNickNameState(false, "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab");
    this.view.tbxNickname.setEnabled(true);
    this.view.tbxNickname.setFocus(true);
  },

  initActions: function() {
    this.view.btnUpdateNickName.onClick = this.updateNickName;
    this.view.tbxNickname.onDone = this.updateNickName;
    this.view.tbxNickname.onTextChange = this.changeNickName;
  },

  changeNickName: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmEditNickNameController : changeNickName ####");
    var navManager = applicationManager.getNavigationManager();
    var credentials = navManager.getCustomInfo("frmEditNickName");
    var currNickName = credentials.nickName;
    var editedNickName = this.view.tbxNickname.text;
    if (editedNickName && editedNickName !== currNickName) {
      this.changeNickNameState(true, "sknBtn0095e4RoundedffffffSSP26px");
    } else {
      this.changeNickNameState(false, "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab");
    }
  },

  changeNickNameState: function(isEnabled, skin) {
    this.view.btnUpdateNickName.setEnabled(isEnabled);
    this.view.btnUpdateNickName.skin = skin;
  },

  updateNickName: function() {
    var loggerManager = applicationManager.getLoggerManager();
    var userManager = applicationManager.getUserPreferencesManager();

    function onAccountUpdationSucceess(successResponse) {
      if (successResponse && (successResponse !== undefined && successResponse !== "")) {
        var navigationManager = applicationManager.getNavigationManager();
        navigationManager.setCustomInfo("ExternalAccountNickNameUpdationSuccess", true);
        navigationManager.setCustomInfo("ExternalAccountNickNameUpdationFailure", false);
        accountModule.presentationController.fetchExternalAccountsData(userManager.getUserName());
      }
    }

    function onAccountUpdationFailure(errorResponse) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (errorResponse && errorResponse !== undefined) {
        var navigationManager = applicationManager.getNavigationManager();
        navigationManager.setCustomInfo("ExternalAccountNickNameUpdationFailure", true);
        navigationManager.setCustomInfo("ExternalAccountNickNameUpdationSuccess", false);
        accountModule.presentationController.navigateToManageExternalAccounts();
        kony.print("error updating the external account");
      }
    }  

    loggerManager.log("#### start frmExternalAccountDetailsController : updateNickName ####"); 
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountModule;
    var navigationManager = applicationManager.getNavigationManager();
    var accountDetails = navigationManager.getCustomInfo("frmEditNickName");
    var records;
    if (accountDetails && (accountDetails !== undefined && typeof accountDetails === 'object')) {
      records = {
        Account_id : accountDetails.accountId,
        NickName : this.view.tbxNickname.text.trim(),
        main_user : accountDetails.mainUser,
        username : accountDetails.userName,
        bank_id : accountDetails.bankId,
        AccountName : accountDetails.accountName,
        loop_count : accountDetails.loopCount
      };
      accountModule = applicationManager.getModule("AccountModule");
      accountModule.presentationController.patialUpdateExternalAccount(records, onAccountUpdationSucceess, onAccountUpdationFailure);
    }
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onHandleCancelAction;
    }
  },

  navigateBack: function() {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("#### start frmEditNickNameController : navigateBack ####");
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  onHandleCancelAction: function() {
    var authModule = applicationManager.getModule("AuthModule");
    authModule.presentationController.cancelCommon();
  }
});