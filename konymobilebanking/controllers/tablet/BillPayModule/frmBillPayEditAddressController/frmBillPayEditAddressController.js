define({
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(4);
    },
    preShow: function() {
        if (!this.isIpad()) {
            this.view.flxHeader.isVisible = true;
        }
        this.fv.submissionView(this.view.btnSave);
        this.initActions();
        this.setDataBasedOnEntryPoint();
        this.searchActions();
      	this.showInputFields();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var address = {};
        if (!this.isIpad()) {
            this.view.customHeaderTablet.flxBack.onClick = function() {
              var navMan = applicationManager.getNavigationManager();
              navMan.goBack();
            };
        }
        this.view.txtAddressLineOne.onTextChange = function() {
            var text = scope.view.txtAddressLineOne.text;
            scope.fv.checkAndUpdateStatusForNull(0, text);
        };
        this.view.txtCity.onTextChange = function() {
            var text = scope.view.txtCity.text;
            scope.fv.checkAndUpdateStatusForNull(1, text);
        };
        this.view.txtState.onTextChange = function() {
            var text = scope.view.txtState.text;
            scope.fv.checkAndUpdateStatusForNull(2, text);
        };
        this.view.txtZipCode.onTextChange = function() {
            var text = scope.view.txtZipCode.text;
            scope.fv.checkAndUpdateStatusForNull(3, text);
        };
        var flowType = billPayMod.presentationController.getFlowType();
        if (flowType === "editBillPay") {
            var payeeDetails = billPayMod.presentationController.getPayeeDetails();
            this.view.btnSave.onClick = function() {
                address.payeeId = payeeDetails.payeeId;
                address.addressLine1 = scope.view.txtAddressLineOne.text;
                //address.street=scope.view.txtAddressLineOne.text;
                address.addressLine2 = scope.view.txtAddressLineTwo.text;
                address.cityName = scope.view.txtCity.text;
                address.state = scope.view.txtState.text;
                address.zipCode = scope.view.txtZipCode.text;
                applicationManager.getPresentationUtility().showLoadingScreen();
                billPayMod.presentationController.updatePayeeAddress(address);
            };
            if (!this.isIpad()) {
              this.view.customHeaderTablet.btnRight.onClick = function() {
                  scope.onClickCancel();
              };
            }
        } else {
            this.view.btnSave.onClick = function() {
                address.addressLine1 = scope.view.txtAddressLineOne.text;
                //address.street=scope.view.txtAddressLineOne.text;
                address.addressLine2 = scope.view.txtAddressLineTwo.text;
                address.cityName = scope.view.txtCity.text;
                address.state = scope.view.txtState.text;
                address.zipCode = scope.view.txtZipCode.text;
                billPayMod.presentationController.navToBillPayPayeeAccNum(address, "frmBillPayEnterAccNo");
            };
            if (!this.isIpad()) {
              this.view.customHeaderTablet.btnRight.onClick = function() {
                scope.onClickCancel();
              };
            }
        }
    },
    validateFormUI: function() {
        var formValues = [];
        formValues.push(this.view.txtAddressLineOne.text);
        formValues.push(this.view.txtCity.text);
        formValues.push(this.view.txtState.text);
        formValues.push(this.view.txtZipCode.text);
        this.fv.preshowCheck(formValues);
    },
    showSearch: function() {
        if (this.isIpad()) {
            this.view.flxHeader.isVisible = false;

        } else {

            this.view.flxHeader.isVisible = true;

        }
        this.view.flxSegResult.isVisible = false;
        this.view.segSearch.removeAll();
        this.view.txtSearch.text = "";
    },
    setDataBasedOnEntryPoint: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        if (flowType === "editBillPay") {
            if (this.isIpad()) {
                this.view.title = "Edit Address";
            }
            scope.view.customHeaderTablet.lblHeaderTitle.text = "Edit Address";
            scope.view.btnSave.text = "SAVE";
            scope.setDataToForm(billPayMod.presentationController.getPayeeDetails());
        } else {
            if (this.isIpad()) {
                this.view.title = "Payee Address";
            }
            scope.view.customHeaderTablet.lblHeaderTitle.text = "Payee Address";
            scope.view.btnSave.text = "CONTINUE";
            scope.setDataToForm(billPayMod.presentationController.getPayeeAddressDetails());
        }

    },
    setDataToForm: function(payeeData) {
        var scope = this;
        scope.view.txtAddressLineOne.text = (payeeData.addressLine1 && payeeData.addressLine1 !== "" && payeeData.addressLine1 !== null) ? payeeData.addressLine1 :
            (payeeData.street && payeeData.street !== "" && payeeData.street !== null) ? payeeData.street : "";
        scope.view.txtAddressLineTwo.text = (payeeData.addressLine2 && payeeData.addressLine2 !== "" && payeeData.addressLine2 !== null) ? payeeData.addressLine2 : "";
        scope.view.txtCity.text = (payeeData.cityName && payeeData.cityName !== "" && payeeData.cityName !== null) ? payeeData.cityName : "";
        scope.view.txtState.text = (payeeData.state && payeeData.state !== "" && payeeData.state !== null) ? payeeData.state : "";
        scope.view.txtZipCode.text = (payeeData.zipCode && payeeData.zipCode !== "" && payeeData.zipCode !== null) ? payeeData.zipCode : "";
        scope.validateFormUI();
    },
    searchActions: function() {
        var scope = this;
        this.view.txtSearch.onTextChange = function() {
            var searchText = scope.view.txtSearch.text;
          	if (searchText) {
            	var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            	billPayMod.presentationController.addressSearch(searchText);
            } else {
            	scope.showInputFields();
            }
        };
        this.view.segSearch.onRowClick = function() {
            var data = scope.view.segSearch.selectedItems[0].formattedAddress;
            var address = data.split(",");
            address.reverse();
            scope.view.txtZipCode.text = "";
            scope.view.txtCountry.text = address[0];
            scope.view.txtState.text = address[1];
            scope.view.txtCity.text = address[2];
            var length = address.length;
            var mid = Math.floor((length - 3) / 2);
            var i, addressline1 = "";
            var addressline2 = "";
            if (address[3]) {
                for (i = length - 1; i >= 3 + mid; i--)
                    addressline1 += address[i] + ",";
                for (i = 2 + mid; i >= 3; i--)
                    addressline2 += address[i] + ",";
            }
            addressline1 = addressline1.slice(0, -1);
            addressline2 = addressline2.slice(0, -1);
            scope.view.txtAddressLineTwo.text = addressline2;
            scope.view.txtAddressLineOne.text = addressline1;
            scope.showSearch();
            scope.validateFormUI();
        };
    },
    setSearchData: function(data) {
        this.view.flxSegResult.isVisible = true;
        if (data && data !== null) {
            this.view.segSearch.widgetDataMap = {
                "lblAddress": "formattedAddress"
            };
            this.view.segSearch.setData(data);
        }
    },
    onClickCancel: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        if (flowType === "editBillPay") {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        } else {
            billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
        }
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },
    showInputFields: function() {
        this.view.flxSegResult.setVisibility(false);
    },
    handleCancelAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.cancelCommon();
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});