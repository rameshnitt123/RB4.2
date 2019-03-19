define({
  onNavigate: function (obj) {
    if (obj == undefined) {
      return;
    }
  },
  init:function(){
    this.initActions();
  },
  preShow: function () {
    if (applicationManager.getDeviceUtilManager().isIpad()) {
      this.view.flxHeader.isVisible = false;
    }
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var benificiaryDetails=transferMod.presentationController.getBenificiaryData();
    this.setDetails(benificiaryDetails);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initActions: function () {
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.btnTransfer.onClick=function(){
    	var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transMod.presentationController.setTransferToInfo();
      var navMan=applicationManager.getNavigationManager();
     navMan.setEntryPoint("makeatransfer","frmManageTransferRecipientInfo");
    };
    this.view.customHeaderTablet.flxBack.onClick = function () {
		scope.navigateBack();
    };
    this.view.customHeaderTablet.btnRight.onClick = function () {
      scope.editBenificiaryName();
    };

    this.view.btnDeleteRecipient.onClick = function () {
      var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertMessage"),alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                         noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: scope.deleteHandler
                        };                              
      var pspConfig = {};                                                                                           
      applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
    };
  },
  navigateBack: function(){
    var navMan=applicationManager.getNavigationManager();
		navMan.goBack();
  },
  editBenificiaryName:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    transferModule.presentationController.commonFunctionForNavigation("frmManageEditNickName");
  },
  deleteHandler:function(response){
    if(response === true){                                       
      applicationManager.getPresentationUtility().showLoadingScreen();
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.deleteSameBankBenificiary();
    }
  },
  setDetails:function(accountDetails){
    this.view.lblRecipientNameValue.text=accountDetails.beneficiaryName;
    var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(JSON.stringify(JSON.parse(accountDetails.accountNumber)));
    this.view.lblAccountNumberValue.text=maskedAccountNumber;
    this.view.lblAccountTypeValue.text=accountDetails.accountType;
    this.view.lblNickNameValue.text=accountDetails.nickName;
    this.view.lblAccountBal.text=accountDetails.accountType;
    this.view.title=accountDetails.nickName;
    this.view.customHeaderTablet.lblHeaderTitle.text = accountDetails.nickName;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    if(transferModule.presentationController.getFlowType()==="InternationalRecipients"){
      if(accountDetails.countryName){
      		this.view.lblBankName.text=accountDetails.bankName+","+accountDetails.countryName;
      		this.view.lblBankBranchValue.text=accountDetails.bankName+","+accountDetails.countryName;
      }
      else{
        this.view.lblBankName.text=accountDetails.bankName;
      	this.view.lblBankBranchValue.text=accountDetails.bankName;
      }
      this.view.flxAccounts.isVisible=true;
      this.view.lblRoutingNumberValue.isVisible=true;
      this.view.lblRoutingNumberValue.text=accountDetails.swiftCode;
      this.view.lblRoutingNumber.isVisible=true;
      this.view.lblRoutingNumber.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
      this.view.imgBank.isVisible=true;
      this.view.imgBank.src="externalbank.png";
    }
    else if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
      this.view.lblBankName.text=accountDetails.bankName;
      this.view.lblBankBranchValue.text=accountDetails.bankName;
      this.view.flxAccounts.isVisible=false;
      this.view.flxRoutingNumber.isVisible=false;
      this.view.lblRoutingNumberValue.isVisible=false;
      this.view.lblRoutingNumber.isVisible=false;
      this.view.imgBank.isVisible=false;
    }
    else{
      this.view.lblBankName.text=accountDetails.bankName;
      this.view.lblBankBranchValue.text=accountDetails.bankName;
      this.view.flxAccounts.isVisible=true;
      this.view.lblRoutingNumberValue.isVisible=true;
      this.view.lblRoutingNumberValue.text=accountDetails.routingNumber;
      this.view.lblRoutingNumber.isVisible=true;
      this.view.lblRoutingNumber.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
      this.view.imgBank.isVisible=true;
      this.view.imgBank.src="externalbank.png";
    }
  }

});