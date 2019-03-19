define({
  timerCounter: 0,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(5);
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.fv.submissionView(this.view.btnContinueResidentialAddress);
    this.validateFormUI();
    this.cancelSearch();
    this.view.btnContinueResidentialAddress.onClick = this.onSubmitAddress;
   // this.view.tbxSearch.onTouchStart = this.onSearch;
    this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
    this.view.customSearchbox.tbxSearch.onTextChange = this.onSearchingAddress;
    this.view.segAddresses.onRowClick = this.setSearchedAddress;
    this.view.customHeaderPersonalInfo.flxBack.onClick = this.onBack;
    this.view.customHeaderPersonalInfo.btnRight.onClick = this.onClose;
    this.view.txtResidentialAddressLineOne.onTextChange = this.validateAddressLineOne;
    this.view.txtResidentialAddressCity.onTextChange = this.validateCity;
    this.view.txtResidentialAddressState.onTextChange = this.validateState;
    this.view.txtResidentialAddressZipCode.onTextChange = this.validateZipCode;
    this.view.txtResidentialAddressDummy.onTextChange = this.validateCountry;
    this.view.tbxSearch.onTouchStart = this.onSearch;
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
      if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }

  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtResidentialAddressLineOne.text);
    formValues.push(this.view.txtResidentialAddressCity.text);
    formValues.push(this.view.txtResidentialAddressState.text);
    formValues.push(this.view.txtResidentialAddressZipCode.text);
    formValues.push(this.view.txtResidentialAddressDummy.text);
    this.fv.preshowCheck(formValues);
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
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.addressSearch(searchParams);
  },
  cancelSearch : function(){
    this.view.flxSearchAddress.isVisible = false;
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.flxMainContainer.isVisible = true; 
    this.view.segAddresses.removeAll();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();  
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
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
    var text = this.view.txtResidentialAddressDummy.text;
    this.fv.checkAndUpdateStatusForNull(4, text);
  },
  setSearchedAddress : function(){
    var data = this.view.segAddresses.selectedItems[0].formattedAddress;
    var address = data.split(",");
    address.reverse();
    this.view.txtResidentialAddressDummy.text = address[0];
    this.view.txtResidentialAddressState.text = address[1];
    this.view.txtResidentialAddressCity.text = address[2];
    this.view.txtResidentialAddressZipCode.text = "";
    var length = address.length;
    var mid = Math.floor((length-3)/2);
    var i,addressline1="";
    var addressline2="";
    if(address[3]){
      for(i=length-1;i>=3+mid;i--)
        addressline1+=address[i]+",";
      for(i=2+mid;i>=3;i--)
        addressline2+=address[i]+",";
    }
    addressline1=addressline1.slice(0,-1);
    addressline2=addressline2.slice(0,-1);
     this.view.txtResidentialAddressLineTwo.text = addressline2;
    this.view.txtResidentialAddressLineOne.text = addressline1; 
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
  onSubmitAddress:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data ={
      "addressLine1" : this.view.txtResidentialAddressLineOne.text,
      "addressLine2" : this.view.txtResidentialAddressLineTwo.text,
      "city" : this.view.txtResidentialAddressCity.text,
      "state" : this.view.txtResidentialAddressState.text,
      "zipcode" : this.view.txtResidentialAddressZipCode.text,
      "country" : this.view.txtResidentialAddressDummy.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data); 
    NUOMod.presentationController.commonFunctionForNavigation("frmOBMaritialStatus");
  },
  assignDataToForm : function(newUserJSON){
    this.view.txtResidentialAddressLineOne.text = (newUserJSON.addressLine1 && newUserJSON.addressLine1 !== "" && newUserJSON.addressLine1 !== null)?newUserJSON.addressLine1:"";
    this.view.txtResidentialAddressLineTwo.text = (newUserJSON.addressLine2 && newUserJSON.addressLine2 !== "" && newUserJSON.addressLine2 !== null)?newUserJSON.addressLine2:"";
    this.view.txtResidentialAddressDummy.text = (newUserJSON.country && newUserJSON.country !== "" && newUserJSON.country !== null)?newUserJSON.country:"";
    this.view.txtResidentialAddressState.text = (newUserJSON.state && newUserJSON.state !== "" && newUserJSON.state !== null)?newUserJSON.state:"";
    this.view.txtResidentialAddressZipCode.text = (newUserJSON.zipcode && newUserJSON.zipcode !== "" && newUserJSON.zipcode !== null)?newUserJSON.zipcode:"";
    this.view.txtResidentialAddressCity.text = (newUserJSON.city && newUserJSON.city !== "" && newUserJSON.city !== null)?newUserJSON.city:"";
  },
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },

});