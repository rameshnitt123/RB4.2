define({ 
  newUserModule: null,
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function () {
    this.setDataToForm();
    this.updateRightPane();
    this.initHeaderActions();
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.clearForm();
    this.validateForm();
    this.view.tbxSearch.text = "";
    this.setWidgetHandles();
  },

  initHeaderActions: function() {
    if (!applicationManager.getDeviceUtilManager().isIpad()) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
    }
  },

  setWidgetHandles: function() {
    this.view.tbxSearch.onTextChange = this.showCancelButton;
    this.view.flxCancel.onClick = this.cancelSearch;
    this.view.segAddresses.onRowClick = this.setSearchedAddress;
    this.view.txtResidentialAddressLineOne.onTextChange = this.validateForm;
    this.view.txtResidentialAddressCity.onTextChange = this.validateForm;
    this.view.txtResidentialAddressState.onTextChange = this.validateForm;
    this.view.txtResidentialAddressZipCode.onTextChange = this.validateForm;
    this.view.txtResidentialAddressCountry.onTextChange = this.validateForm;
    this.view.btnContinueResidentialAddress.onClick = this.submitEditedAddress;
  },

  backNavigation: function() {
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.goBack();
  },

  backHandle: function() {
    this.getNewUserModule().presentationController.onClose();
  },

  //Sets address data from backesnd to appropriate fields on form
  setSearchedAddress: function() {
    this.view.tbxSearch.text = "";
    var segment = this.view.segAddresses;
    var data = segment.data[segment.selectedRowIndex[1]].formattedAddress;
    var address = data.split(",");
    address.reverse();
    this.view.txtResidentialAddressCountry.text = address[0];
    this.view.txtResidentialAddressState.text = address[1];
    this.view.txtResidentialAddressCity.text = address[2];
    this.view.txtResidentialAddressLineTwo.text = address[3];
    this.view.txtResidentialAddressZipCode.text = "";

    if (address[4]) {
      this.view.txtResidentialAddressLineOne.text = address[4]; 
    } else if(address[5]) {
      var temp = address[5].concat(",");
      this.view.txtResidentialAddressLineOne.text = temp.concat(address[4]); 
    }
    this.view.flxSegAddress.setVisibility(false);
    this.validateForm();
  },

  setSearchData: function(data) {
    if(data && data.length) {
      this.view.segAddresses.widgetDataMap = {
        "lblAddress": "formattedAddress"
      };
      this.view.segAddresses.setData(data);
    }
  },

  submitEditedAddress: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "addressLine1": this.view.txtResidentialAddressLineOne.text,
      "addressLine2": this.view.txtResidentialAddressLineTwo.text,
      "state": this.view.txtResidentialAddressState.text,
      "city": this.view.txtResidentialAddressCity.text,
      "country": this.view.txtResidentialAddressCountry.text,
      "zipcode": this.view.txtResidentialAddressZipCode.text
    };
    this.getNewUserModule().presentationController.updateNewUserModel(data); 
    this.getNewUserModule().presentationController.commonFunctionForNavigation("frmOBCreditCheck");
    this.clearForm();
  },

  setDataToForm: function() {
    var data = this.getNewUserModule().presentationController.getUserData();
    this.view.txtResidentialAddressLineOne.text = data.addressLine1 && data.addressLine1.length ? data.addressLine1 : "";
    this.view.txtResidentialAddressLineTwo.text = data.addressLine2 && data.addressLine2.length ? data.addressLine2 : "";
    this.view.txtResidentialAddressState.text = data.state && data.state.length ? data.state : "";
    this.view.txtResidentialAddressZipCode.text = data.zipcode && data.zipcode.length ? data.zipcode : "";
    this.view.txtResidentialAddressCity.text = data.city && data.city.length ? data.city : "";
    this.view.txtResidentialAddressCountry.text = data.country && data.country ? data.country : "";
    this.validateForm();
  },

  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();

    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    var productsCount = navManager.getCustomInfo("selectedUserProduct").productsCount;
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    rightPane.lblThirdCheckedRowName.text = eligibility;
    rightPane.lblFifthCheckedRowName.text = parseInt(productsCount).toString() + " selected";
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
    var delta = 1;
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  },

  showCancelButton: function() {
    var setVisibilityCancel = this.view.tbxSearch.text;
    this.view.flxSegAddress.setVisibility(true);
    this.view.segAddresses.removeAll();
    this.view.flxCancel.setVisibility(!!setVisibilityCancel);
    this.onSearchingAddress();
  },

  onSearchingAddress: function() {
    var searchText = this.view.tbxSearch.text;
    this.getNewUserModule().presentationController.addressSearch(searchText);
  },

  cancelSearch: function() {
    this.view.tbxSearch.text = "";
    this.view.segAddresses.removeAll();
    this.view.flxSegAddress.setVisibility(false);
    this.view.flxCancel.setVisibility(false);
  },

  validateForm: function() {
    var button = this.view.btnContinueResidentialAddress;
    var firstLine = this.view.lblResidentialAddressLineOne.text;
    var city = this.view.txtResidentialAddressCity.text;
    var state = this.view.txtResidentialAddressState.text;
    var zipCode = this.view.txtResidentialAddressZipCode.text;
    var country = this.view.txtResidentialAddressCountry.text;
    var validator = firstLine && city && state && zipCode && country;
    button.setEnabled(!!validator);
    button.skin = validator ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  clearForm: function() {
    this.view.txtResidentialAddressLineOne.text = "";
    this.view.txtResidentialAddressLineTwo.text = "";
    this.view.txtResidentialAddressCity.text = "";
    this.view.txtResidentialAddressState.text = "";
    this.view.txtResidentialAddressZipCode.text = "";
    this.view.txtResidentialAddressCountry.text = "";
  },

  getNewUserModule: function() {	
    if (!this.newUserModule) {
      this.newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    }
    return this.newUserModule;
  }
});