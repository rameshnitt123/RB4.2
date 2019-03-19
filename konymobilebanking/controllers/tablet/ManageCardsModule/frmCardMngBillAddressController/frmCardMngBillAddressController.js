define({

    init : function(){
      try {
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
  
    preShow: function() {
      try{
        this.initHeaderActions();
        this.view.tbxSearch.onTouchEnd = this.tbxSearchOnTouchEnd;
        this.view.btnSave.onClick = this.btnSaveOnClick;
        this.view.customSearchbox.btnCancel.onClick = this.tbxSearchOnTouchEnd;
        this.view.flxMainContainer.showFadingEdges = false;
		this.setEmptyFields();
        this.view.btnSave.setEnabled(false);
        this.view.btnSave.skin = "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab"; 
        this.view.txtAddressLineOne.onTextChange = this.onTextChange.bind(this); 
        this.view.txtAddressLineTwo.onTextChange = this.onTextChange.bind(this);
        this.view.txtCity.onTextChange = this.onTextChange.bind(this);
        this.view.txtCountry.onTextChange = this.onTextChange.bind(this); 
        this.view.txtState.onTextChange = this.onTextChange.bind(this);
        this.view.txtZipCode.onTextChange = this.onTextChange.bind(this);
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmCardManageHome", {"isMainScreen":true});
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  onClickCancel : function(){
    var manageCardsModule = applicationManager.getModule("ManageCardsModule");
    manageCardsModule.presentationController.commonFunctionForNavigation("frmCardManageHome");
  },

  navigateBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

    tbxSearchOnTouchEnd: function() {
     try{
        
     }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      }
    },
  
    btnSaveOnClick : function(){
      var navManager = applicationManager.getNavigationManager();
      var data = navManager.getCustomInfo("frmCardMngBillAddress");
      data.isUpdateBillAddressSuccess = true;
      
      navManager.setCustomInfo("frmCardMngBillAddress", data);
      
      var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
      manageCardsModule.presentationController.commonFunctionForNavigation("frmCardManageHome");
    },
  
    onTextChange: function()
    {
      try{
        var line1 = this.view.txtAddressLineOne.text;
        var line2 = this.view.txtAddressLineTwo.text;
        var city = this.view.txtCity.text;
        var state = this.view.txtState.text;
        var country = this.view.txtCountry.text;
        var zip = this.view.txtZipCode.text;
        if(this.isNotNullUndefinedAndZero(line1) && this.isNotNullUndefinedAndZero(city) &&
          this.isNotNullUndefinedAndZero(state) && this.isNotNullUndefinedAndZero(country) && this.isNotNullUndefinedAndZero(zip) )
        {
          this.view.btnSave.setEnabled(true);
          this.view.btnSave.skin = "sknBtnBg0A78D1SSP30PxTab"; 
        }
        else
        {
          this.view.btnSave.setEnabled(false);
          this.view.btnSave.skin = "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab"; 
        }
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      }        
    },
   isNotNullUndefinedAndZero : function(value){
  		if(!kony.sdk.isNullOrUndefined(value) && value.length>0){
          return true;
        } 
  		return false;
	},
  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  }, 
  setEmptyFields : function(){
    this.view.txtAddressLineOne.text = "";
    this.view.txtAddressLineTwo.text = "";
    this.view.txtCity.text = "";
    this.view.txtState.text = "";
    this.view.txtCountry.text = "";
    this.view.txtZipCode.text = "";
  },
  getBillPayModule: function() {
    if (!this.billPayModule) {
      this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    }

    return this.billPayModule;
  },
});