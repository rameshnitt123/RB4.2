define({

    keypadString: '',
    timerCounter:0,
    onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        if (obj === "addManually") {
            
        }
    },
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreshow: function() {
        this.setDataToForm();
        this.updateInputBullets("flxInputAccNo");
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.view.imgCheckbox.onTouchEnd=this.onCheckBoxTouchEnd;
        this.renderTitleBar();
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
    btnContinueOnClick: function() {
      if(this.view.imgCheckbox.src === "remembermetick.png"){
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToVerifyDetailsWithoutAccountNum("frmBillPayVerifyDetails");
      }
      else{
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToReenterAccNum(this.keypadString,"frmBillPayReEnterAccNo");
      }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
    setKeypadChar: function(char) {

        this.keypadString = this.keypadString + char;
        if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
            this.view.imgCheckbox.src = "remeberme.png";
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();          
        } else if (this.keypadString.length > 18) {
            this.keypadString = this.keypadString.slice(0, 18);
            return;
        }
        this.updateInputBullets("flxInputAccNo");
    },

    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();  
            this.keypadString = '';
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputAccNo");
        }
    },
    updateInputBullets: function(inputFlx) {
        if(this.keypadString===''){
            this.view.lblAccountNumber.text = '|';
        }else{
            this.view.lblAccountNumber.text = this.keypadString;
        }
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
  onCheckBoxTouchEnd: function(){
    if(this.view.imgCheckbox.src === "remeberme.png"){
      this.view.imgCheckbox.src = "remembermetick.png";
      this.keypadString='';
      this.updateInputBullets("flxInputAccNo");
      this.enterCodePostAction();
    }else{
      this.view.imgCheckbox.src = "remeberme.png";
      this.incompleteCodeView();
    }
  },
  setDataToForm:function(){
     var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
     var accNum=billPayMod.presentationController.getBillPayAccountNumber();
     if(billPayMod.presentationController.getManuallyAddedFlag()==="true"){
       this.view.flxCheckbox.isVisible=true;
     }else if(billPayMod.presentationController.getManuallyAddedFlag()==="false"){
       this.view.flxCheckbox.isVisible=false;
     }
    if(accNum || billPayMod.presentationController.getIsPayeeWithOutAccNum()){
        this.keypadString = accNum;
        this.enterCodePostAction();
    }
    else{
      this.keypadString = '';
      this.view.imgCheckbox.src ="remeberme.png";
      this.incompleteCodeView();
    }
  },
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

});