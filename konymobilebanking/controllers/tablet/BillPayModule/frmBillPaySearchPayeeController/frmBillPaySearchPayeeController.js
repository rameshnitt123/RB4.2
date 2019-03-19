define({

    billPayModule: null,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());

        this.initActions();
        this.searchActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },

    initActions: function() {
        var self = this;
        this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.txtSearch.onTextChange = this.tbxSearchOnTextChange;


        this.view.flxLeftSideFooter.onClick = function() {
            var billPayMod = self.getBillPayModule();
            billPayMod.presentationController.clearBillPayPayeeData();
            billPayMod.presentationController.setManuallyAddedFlag("true");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditName");
        };
        this.view.btnSearch.onClick = function() {
            self.cancelSearch();
        };
    },

    cancelSearch: function() {
        this.view.customSearchbox.setVisibility(false);
        this.view.flxSearch.setVisibility(true);
        this.view.flxSegResult.setVisibility(false);
        this.view.txtSearch.text = '';
        this.view.lblPaySearchInfo.setVisibility(true);
        this.view.lblPaySearchInfo.text = this.getString("kony.mb.BillPay.AddPayeeInfo");
        this.view.flxSearch.btnSearch.setVisibility(false);
        this.view.flxSearchLeftSide.width = "85%";
    },

    searchActions: function() {
        this.view.segSearch.onRowClick = this.goRow.bind(this);
    },

    goRow: function() {
        var selectedPayeeDetails = this.view.segSearch.selectedRowItems[0];
        var billPayMod = this.getBillPayModule();
        billPayMod.presentationController.clearBillPayPayeeData();
        billPayMod.presentationController.navTofrmZipCode(selectedPayeeDetails, "frmBillPayZipCode");
    },

    setSearchData: function(data) {
        if (data.length) {
            this.view.flxSegResult.setVisibility(true);
            this.view.segSearch.setVisibility(true);
            this.view.lblPaySearchInfo.setVisibility(false);
            this.view.segSearch.widgetDataMap = {
                "lblAddress": "billerName"
            };
            this.view.flxSearchLeftSide.width = "70%";
            this.view.btnSearch.isVisible = true;
            this.view.segSearch.setData(data);
        } else {
            this.view.flxSegResult.setVisibility(false);
            this.view.segSearch.setVisibility(false);
            this.view.lblPaySearchInfo.setVisibility(true);
            this.view.lblPaySearchInfo.text = this.getString("i18n.maps.NoResultsFound");

        }
    },

    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },

    showHideSearch: function() {
        this.textSearch = this.view.txtSearch.text.toLowerCase();


        this.view.lblPaySearchInfo.setVisibility(false);

    },

    tbxSearchOnTextChange: function() {
        var searchText = this.view.txtSearch.text;
        this.getBillPayModule().presentationController.payeeSearch(searchText);
        this.view.lblPaySearchInfo.setVisibility(true);
    },

    widgetVisibilityToggle: function(visibleElement, invisibleElement) {
        if (visibleElement) {
            visibleElement.setVisibility(true);
        }

        if (invisibleElement) {
            invisibleElement.setVisibility(false);
        }
    },

    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },

    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }

        return this.billPayModule;
    },
    goBackToBillPay: function() {
        var navigationManager = applicationManager.getNavigationManager();
        navigationManager.goBack();
    },
    getString: function(key) {
        return applicationManager.getPresentationUtility().getStringFromi18n(key);
    },
    onSearchBoxClick: function() {
        this.view.segSearch.isVisible = true;
    }
});