define({ 
  frmMenuPreshow : function(){
    this.setPreshowData();
    this.setFlowActions();
    this.view.customFooter.flxAccounts.onClick = this.onClickFlxAccounts;
    this.view.flxExternalAccountManagement.onClick = this.onClickFlxExternalAccountManagement;
  },
  onClickFlxAccounts : function(){
    var navManager = applicationManager.getNavigationManager();
    var accountObj = applicationManager.getAccountManager();
    var configManager = applicationManager.getConfigurationManager(); 
    var accountData = "";
    accountData = accountObj.getInternalAccounts();
    var custominfo = navManager.getCustomInfo("frmDashboard");
    if(!custominfo){
      custominfo = {};
    }
    custominfo.accountData = accountData;
    navManager.setCustomInfo("frmDashboard",custominfo);
    navManager.navigateTo("frmDashboardAggregated");

  },
  setPreshowData : function(){
    this.setMenuskins();
    this.setSelectedSkin(this.view.lblMessages);
    this.setFooterSkin();
    this.setSelectedFooterSkin(this.view.customFooter.flxMoreSelect);
    this.view.customFooter.imgMore.src = "more.png";
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.flxMessages.onClick = this.navToMessages;
    this.view.flxSettings.onClick = this.navToSettings;
  },
  setMenuskins : function(){
    this.view.lblCheckDeposites.skin = "sknLbl424242SSP22px";
    this.view.lblCardlessCash.skin = "sknLbl424242SSP22px";
    this.view.lblCardManagement.skin = "sknLbl424242SSP22px";
    this.view.lblOpenNewAccount.skin = "sknLbl424242SSP22px";
    this.view.lblAddAccount.skin = "sknLbl424242SSP22px";
    this.view.lblMessages.skin = "sknLbl424242SSP22px";
    this.view.lblSettings.skin = "sknLbl424242SSP22px";
    this.view.lblChatbot.skin = "sknLbl424242SSP22px";
    this.view.lblLocateUs.skin = "sknLbl424242SSP22px";
    this.view.lblContactUs.skin = "sknLbl424242SSP22px";
  },
  setFooterSkin : function(){
    this.view.customFooter.flxAccSelect.skin = "sknFlxffffff";
    this.view.customFooter.flxTransferSel.skin = "sknFlxffffff";
    this.view.customFooter.flxBillSelected.skin = "sknFlxffffff";
    this.view.customFooter.flxMoreSelect.skin = "sknFlxffffff";
  },
  setSelectedSkin : function(lblwidget){
    lblwidget.skin = "sknLblda8b08SSP22px";
  },
  setSelectedFooterSkin : function(flxwidget){
    flxwidget.skin = "sknFlxda8b08";
  },
  setUnreadMessagesCount : function(){
    var menuModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    menuModule.presentationController.getUnreadMessagesCount(); 
  },
  setUnreadMessagesCounttoView : function(){
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmMenu");
    this.view.lblMessagesNumber.text = data.unreadMessageCount;
  },
  navToMessages : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var menuModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MenuModule");
    menuModule.presentationController.getRequestsAndNavigateToMessagesDashboard(); 
  },
  onClickFlxExternalAccountManagement : function(){
		var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.navigateToExternalAccountsData();
  },
  navToSettings : function(){
    var navObj = new kony.mvc.Navigation("frmSettings");
    navObj.navigate();
  }
});