define({
  
    init : function(){
       var navManager = applicationManager.getNavigationManager();
       var currentForm=navManager.getCurrentForm();
       applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShowUiSettings: function() {
        var loggerManager = applicationManager.getLoggerManager();

        try {
            loggerManager.log("#### start frmSelectxternalAccountsController : preShowUiSettings ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (kony.os.deviceInfo().name === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisisble = true;
                this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
                //this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.externalBanks.BankLogin");
            }
            var navigationManager = applicationManager.getNavigationManager();
            this.view.flxCheckBox.onClick = this.onClickOfFlxCheckBox;
            this.view.segTransactions.onRowClick = this.onClickOfSegmentRow;
            navigationManager.setCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted", true);
            var frmSelectExternalAccountsData = navigationManager.getCustomInfo("frmExternalBankLogin");
            var bankIdAndUserNameInfo = navigationManager.getCustomInfo("frmSelectExternalAccounts_BankIdAndUserNameInfo");
            this.view.imgBank.src = frmSelectExternalAccountsData.logo.src;
            this.view.lblBankName.text = frmSelectExternalAccountsData.bankName;
            this.view.lblAccountHolderName.text = bankIdAndUserNameInfo.userName;
            this.view.btnSave.onClick = this.addExternalAccounts;
            var externalAccountsData = this.getExternalAccountsData();
            this.setExternalAccountsData(externalAccountsData);
            navigationManager.setCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted", true);
            this.onClickOfFlxCheckBox();
            this.view.btnTnC.onClick = this.presentTermsAndConditions;
            var currentForm = navigationManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },

    addExternalAccounts: function() {
        var loggerManager = applicationManager.getLoggerManager();

        function onAccountAdditionSucceess(successResponse) {
            if (successResponse && (successResponse !== undefined && successResponse !== "")) {
                var navigationManager = applicationManager.getNavigationManager();
                navigationManager.setCustomInfo("externalAccountAdditionSuccessResponse", true);
                navigationManager.setCustomInfo("externalAccountAdditionErrorResponse", false);
                accountModule.presentationController.fetchExternalAccountsData(userManager.getUserName());
            }
        }

        function onAccountAdditionFailure(errorResponse) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (errorResponse && errorResponse !== undefined) {
                var navigationManager = applicationManager.getNavigationManager();
                navigationManager.setCustomInfo("externalAccountAdditionErrorResponse", true);
                navigationManager.setCustomInfo("externalAccountAdditionSuccessResponse", false);
                accountModule.presentationController.navigateToManageExternalAccounts();
                kony.print("error adding the external account");
            }
        }
        try {
            loggerManager.log("#### start frmSelectxternalAccountsController : addExternalAccounts ####");

            applicationManager.getPresentationUtility().showLoadingScreen();
            var selectedAccounts = this.view.segTransactions.selectedRowItems;
            var userManager = applicationManager.getUserPreferencesManager();
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountModule.presentationController.saveExternalAccountsAndNavigateToManageExternalAccounts(selectedAccounts, onAccountAdditionSucceess, onAccountAdditionFailure);

        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },

    enableSaveButton: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navigationManager = applicationManager.getNavigationManager();
            var termsAccepted = navigationManager.getCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted");
            var isAtleastOneAccountSelected = navigationManager.getCustomInfo("frmSelectExternalAccounts_isAtleastOneAccountSelected");
            if (termsAccepted === true && isAtleastOneAccountSelected === true) {
                this.view.btnSave.setEnabled(true);
                this.view.btnSave.skin = "sknBtn0095e4RoundedffffffSSP26px";
            } else {
                this.view.btnSave.skin = "sknBtne9e9e9a0a0a0SSReg30px";
                this.view.btnSave.setEnabled(false);
            }
        } catch (error) {
            loggerManager.log("#### in catch " + JSON.stringify(error) + " ####");
        }
    },
    onClickOfSegmentRow: function() {
        var navigationManager = applicationManager.getNavigationManager();
        if (this.view.segTransactions.selectedRowItems) {
            navigationManager.setCustomInfo("frmSelectExternalAccounts_isAtleastOneAccountSelected", true);
        } else navigationManager.setCustomInfo("frmSelectExternalAccounts_isAtleastOneAccountSelected", false);

        this.enableSaveButton();
    },
    onClickOfFlxCheckBox: function() {
        this.toggleBetweenTermsAcceptedAndUnaccepted();
        this.enableSaveButton();
    },
    toggleBetweenTermsAcceptedAndUnaccepted: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmSelectExternalAccountsController : toggleBetweenTermsAcceptedAndUnaccepted ####");
            var navManager = applicationManager.getNavigationManager();
            var isAccepted = navManager.getCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted");
            if (!isAccepted) {
                this.view.imgTermsAccepted.src = "checkboxtick.png";
                navManager.setCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted", true);
            } else {
                this.view.imgTermsAccepted.src = "tickmarkbox.png";
                navManager.setCustomInfo("frmSelectedExternalAcccounts_BanktermsAccepted", false);
            }
            this.view.forceLayout();
        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },
    getExternalAccountsData: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmSelectExternalAccountsController : getExternalAccountsData ####");
            var navManager = applicationManager.getNavigationManager();
            var externalAccountsData = navManager.getCustomInfo("frmSelectExternalAccounts");

            var bankIdAndUserName = navManager.getCustomInfo("frmSelectExternalAccounts_BankIdAndUserNameInfo");

            for (var i in externalAccountsData) {
                for (var j in externalAccountsData[i][1]) {
                    externalAccountsData[i][1][j].userName = bankIdAndUserName.userName;
                }
            }

            return externalAccountsData;
        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },
    setExternalAccountsData: function(data) {
        var loggerManager = applicationManager.getLoggerManager();
        try {

            loggerManager.log("#### start frmSelectExternalAccountsController : setExternalAccountsData ####");
            this.view.segTransactions.widgetDataMap = {
                'lblExtAccountName': 'AccountName',
                'lblExtAccountType': 'AccountType',
                'lblExtAccountBalValue': 'AvailableBalanceWithCurrency',
                'lblExtAccountBal': 'AvailableBalanceLabel',
                'imgBank': 'checkImage',
                'lblAvailableExtAccounts': 'headerName',
            };
            if (data && (data !== undefined && data[0][1].length > 0)) {
                this.view.btnSave.isVisible = true;
                this.view.segTransactions.isVisible = true;
                this.view.flxTermsAndConditions.isVisible = true;
                this.view.flxExtAccountsHeader.isVisible = false;
                this.view.lblNoAccountsToAddMessage.isVisible = false;              
                this.view.segTransactions.setData(data);
                var selectedIndices = [];
                for (var i = 0; i < data[0][1].length; i++) {
                    selectedIndices.push(i);
                }
                this.view.segTransactions.selectedRowIndices = [
                    [0, selectedIndices]
                ];
                
            }
            else if( data[0][1].length <= 0){
              this.view.btnSave.isVisible = false;
              this.view.segTransactions.isVisible = false;
              this.view.flxTermsAndConditions.isVisible = false;
              this.view.flxExtAccountsHeader.isVisible = true;
              this.view.lblNoAccountsToAddMessage.isVisible = true;
              
            }
            this.view.forceLayout();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onFormPostShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmSelectExternalAccountsController : onFormPostShow ####");

            this.onClickOfSegmentRow();

        } catch (error) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    },
  
    presentTermsAndConditions : function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmSelectExternalAccountsController : presentTermsAndConditions ####");

            this.navToTermsAndConditions();

        } catch (error) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }      
      
    },
    navToTermsAndConditions : function(){
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmSelectExternalAccountsController : navToTermsAndConditions ####");

            applicationManager.getPresentationUtility().showLoadingScreen();
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountModule.presentationController.commonFunctionForNavigation("frmAddExternalAccountsTermsAndConditions");

        } catch (error) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }         
    },    
});