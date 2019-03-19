define({
    timerCounter:0,
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      var FormValidator = require("FormValidatorManager")
	  this.fv = new FormValidator(2);
    },
    frmPreShow: function() {
        this.fv.submissionView(this.view.btnContinue);
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.renderTitleBar();
        this.setDataToForm();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
      },    
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var flowType=billPayMod.presentationController.getFlowType();
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var nickName=this.view.txtAccNickName.text;
        var nameOnBill=this.view.txtAccNickName.text;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.createBillPayPayee(this.view.txtAccNickName.text,this.view.txtNameOnBill.text);

    },
  initActions:function(){
    var scope=this;
    this.view.txtNameOnBill.onTextChange = function(){
      var text = scope.view.txtNameOnBill.text;
      scope.fv.checkAndUpdateStatusForNull(0,text);   
    };
    this.view.txtAccNickName.onTextChange = function(){
      var text = scope.view.txtAccNickName.text;
      scope.fv.checkAndUpdateStatusForNull(1,text);   
    };
  },
   validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtNameOnBill.text);
    formValues.push(this.view.txtAccNickName.text);
    this.fv.preshowCheck(formValues);
  },
  setDataToForm:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeData=billPayMod.presentationController.getPayeeDetails();
    if(billPayMod.presentationController.getManuallyAddedFlag()==="false"){
      if(payeeData.billerCategoryName == "Credit Card" || payeeData.billerCategoryName == "Utilities"){
        this.view.flxAccNo.isVisible = true;
        this.view.flxPhoneNumber.isVisible = false;
        this.view.flxRelationNumber.isVisible = false;
        this.view.flxPolicyNumber.isVisible = false;
        this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
      }
      else if(payeeData.billerCategoryName == "Phone"){
        this.view.flxAccNo.isVisible = false;
        this.view.flxPhoneNumber.isVisible = true;
        this.view.flxRelationNumber.isVisible = true;
        this.view.flxPolicyNumber.isVisible = false;
        this.view.lblPhoneNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.phone);
        this.view.lblRelationNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
      }
      else{
        this.view.flxAccNo.isVisible = true;
        this.view.flxPhoneNumber.isVisible = false;
        this.view.flxRelationNumber.isVisible = false;
        this.view.flxPolicyNumber.isVisible = true;
        this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.accountNumber);
        this.view.lblPolicyNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(payeeData.phone);
      }
    }
    else{
      this.view.flxAccNo.isVisible = true;
      this.view.flxPhoneNumber.isVisible = false;
      this.view.flxRelationNumber.isVisible = false;
      this.view.flxPolicyNumber.isVisible = false;
      if(payeeData.accountNumber){
        var accnum=payeeData.accountNumber;
        this.view.lblAccNoValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accnum);
      }
      else if(payeeData.accountNumber===""){
        this.view.lblAccNoValue.text="Not Available";
      }
    }    
    this.view.lblPayeeFullNameValue.text = (payeeData.payeeName && payeeData.payeeName !== "" && payeeData.payeeName!== null)?payeeData.payeeName:"";
   
    if(billPayMod.presentationController.getPayeeAddressDetails())
    {
      var payeeAddress=billPayMod.presentationController.getPayeeAddressDetails();
      if(payeeAddress.street || payeeAddress.addressLine2 || payeeAddress.cityName|| payeeAddress.zipCode || payeeAddress.state ){
        var address="";
        if(payeeAddress.addressLine1){
          address=address+payeeAddress.addressLine1+",";
        }
        if(payeeAddress.street){
          address=address+payeeAddress.street+",";
        }
        if(payeeAddress.addressLine2){
          address=address+payeeAddress.addressLine2+",";
        }
        if(payeeAddress.state){
          address=address+payeeAddress.state+",";
        }
        if(payeeAddress.zipCode){
          address=address+payeeAddress.zipCode;
        }
        this.view.lblPayeeAddressValue.text=address;
      }
    }
    this.view.txtNameOnBill.text = (payeeData.nameOnBill && payeeData.nameOnBill !== "" && payeeData.nameOnBill!== null)?payeeData.nameOnBill:"";
    this.view.txtAccNickName.text =(payeeData.payeeNickName && payeeData.payeeNickName !== "" && payeeData.payeeNickName!== null)?payeeData.payeeNickName:
    (payeeData.payeeName && payeeData.payeeName!=="" && payeeData.payeeName!==null)?payeeData.payeeName:"";
    this.validateFormUI();
  },
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }

});