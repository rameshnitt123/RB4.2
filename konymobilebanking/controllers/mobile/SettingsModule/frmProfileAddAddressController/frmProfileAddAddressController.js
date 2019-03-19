define({
  timerCounter: 0,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(5);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    if(kony.os.deviceInfo().name==="iPhone"){
      this.view.flxHeader.isVisible = false;
    }else{
      this.view.flxHeader.isVisible = true;
    }
    this.setPreshowData();
    this.setFlowActions();
    this.setDataToForm();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.flxSearchAddress.isVisible = false;
    this.view.flxMainContainer.isVisible = true;
    this.fv.submissionView(this.view.btnContinueResidentialAddress);
  },
  setFlowActions : function(){
    this.view.tbxSearch.onTouchStart = this.onSearch;
    this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
    this.view.customSearchbox.tbxSearch.onTextChange = this.onSearchingAddress;
    this.view.segAddresses.onRowClick = this.setSearchedAddress;
    this.view.txtResidentialAddressLineOne.onTextChange = this.validateAddressLineOne;
    this.view.txtResidentialAddressCity.onTextChange = this.validateCity;
    this.view.txtResidentialAddressState.onTextChange = this.validateState;
    this.view.txtResidentialAddressZipCode.onTextChange = this.validateZipCode;
    this.view.txtCountry.onTextChange = this.validateCountry;
    this.view.btnContinueResidentialAddress.onClick = this.onSubmitAddress;
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onCancel;
  },
  onBack : function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onCancel : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },
  onSubmitAddress : function(){
    var addressData = {
      "addressLine1":this.view.txtResidentialAddressLineOne.text,
      "addressLine2":this.view.txtResidentialAddressLineTwo.text,
      "state":this.view.txtResidentialAddressState.text,
      "zipcode":this.view.txtResidentialAddressZipCode.text,
      "city":this.view.txtResidentialAddressCity.text,
      "country":this.view.txtCountry.text
    };
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.updateUserAddressID();
    settingsMod.presentationController.updateUserAddressData(addressData);
    var navManager = applicationManager.getNavigationManager();
	settingsMod.presentationController.commonFunctionForNavigation("frmProfileAdressType");
  },
  setDataToForm : function(){
    var navManager = applicationManager.getNavigationManager();
    var addressData = navManager.getCustomInfo("frmProfileAddAddress");
    if(addressData){
      this.view.txtResidentialAddressLineOne.text = (addressData.addressLine1 && addressData.addressLine1 !== "" && addressData.addressLine1 !== null)?addressData.addressLine1:"";
      this.view.txtResidentialAddressLineTwo.text = (addressData.addressLine2 && addressData.addressLine2 !== "" && addressData.addressLine2 !== null)?addressData.addressLine2:"";
      this.view.txtResidentialAddressState.text = (addressData.state && addressData.state !== "" && addressData.state !== null)?addressData.state:"";
      this.view.txtResidentialAddressZipCode.text = (addressData.zipcode && addressData.zipcode !== "" && addressData.zipcode !== null)?addressData.zipcode:"";
      this.view.txtResidentialAddressCity.text = (addressData.city && addressData.city !== "" && addressData.city !== null)?addressData.city:"";
      this.view.txtCountry.text = (addressData.country && addressData.country !== "" && addressData.country !== null)?addressData.country:"";
    }
    else
    {
      this.view.txtResidentialAddressLineOne.text = "";
      this.view.txtResidentialAddressLineTwo.text = "";
      this.view.txtResidentialAddressState.text = "";
      this.view.txtResidentialAddressZipCode.text = "";
      this.view.txtResidentialAddressCity.text = "";
      this.view.txtCountry.text = "";
    }
    this.validateFormUI();
  },
  onSearch : function(){
    this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.flxSearchAddress.isVisible = true;
    this.view.flxMainContainer.isVisible = false;
    this.view.segAddresses.removeAll();
    this.view.customSearchbox.tbxSearch.text = "";
  },
  onSearchingAddress : function(){
    var searchParams = {};
    var searchText = this.view.customSearchbox.tbxSearch.text;
    searchParams.text = searchText;
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.addressSearch(searchParams);
  },
  cancelSearch : function(){
    this.view.flxSearchAddress.isVisible = false;
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.flxMainContainer.isVisible = true; 
    this.view.segAddresses.removeAll();
  },
  setSearchedAddress : function(){
    var data = this.view.segAddresses.selectedItems[0].formattedAddress;
    var address = data.split(",");
    address.reverse();
    this.view.txtCountry.text = address[0];
    this.view.txtResidentialAddressState.text = address[1];
    this.view.txtResidentialAddressCity.text = address[2];
    this.view.txtResidentialAddressLineTwo.text = address[3];
    this.view.txtResidentialAddressZipCode.text = "";
    if(address[4])
      this.view.txtResidentialAddressLineOne.text = address[4]; 
    if(address[5])
    {
      var temp = address[5].concat(",");
      var address1 = temp.concat(address[4]);
      this.view.txtResidentialAddressLineOne.text = address1; 
    }
    this.view.flxSearchAddress.isVisible = false;
    this.view.flxMainContainer.isVisible = true;
    this.validateFormUI();
  },
  setSearchData : function(data){
    if(data && data!== null){
      this.view.segAddresses.widgetDataMap = {
        "lblAddress": "formattedAddress"
      };
      this.view.segAddresses.setData(data);
    }
  },
  validateAddressLineOne :function(){
    var text = this.view.txtResidentialAddressLineOne.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validateCity:function(){
    var text = this.view.txtResidentialAddressCity.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  validateState : function(){
    var text = this.view.txtResidentialAddressState.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },
  validateZipCode : function(){
    var text = this.view.txtResidentialAddressZipCode.text;
    this.fv.checkAndUpdateStatusForNull(3, text);
  },
  validateCountry : function(){
    var text = this.view.txtCountry.text;
    this.fv.checkAndUpdateStatusForNull(4, text);
  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtResidentialAddressLineOne.text);
    formValues.push(this.view.txtResidentialAddressCity.text);
    formValues.push(this.view.txtResidentialAddressState.text);
    formValues.push(this.view.txtResidentialAddressZipCode.text);
    formValues.push(this.view.txtCountry.text);
    this.fv.preshowCheck(formValues);
  }
});