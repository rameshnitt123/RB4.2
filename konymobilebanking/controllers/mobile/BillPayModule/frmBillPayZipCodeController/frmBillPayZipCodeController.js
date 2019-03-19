define({ 
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function(){
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
        //this.view.lblZipCode.text = "";      
        this.setDataToForm();
        this.view.txtZipCode.onTextChange = this.updateAmountValue;
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function(){
      var scope = this;
        this.view.btnContinue.onClick = function(){
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.setBillPayZipCode(scope.view.txtZipCode.text);
         var billerCategoryName = billPayMod.presentationController.getBillPayBillerCategory(); 
          if(billerCategoryName === "Phone"){
            billPayMod.presentationController.navToRelationNumber("frmBillPayRelationNumber");
          }
          else{
           billPayMod.presentationController.navToBillPayAccNumberSearchFlow("frmBillPayEnterAccNo"); 
          }       
        };
        this.view.customHeader.flxBack.onClick = function(){
          var navManager = applicationManager.getNavigationManager();
          navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function(){
          scope.onClickCancel();
        };
    },
  setDataToForm:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var zipCode=billPayMod.presentationController.getBillPayZipCode();
    if(zipCode)
    {
      this.view.txtZipCode.text = zipCode;
      this.updateAmountValue();
    }
    else{
      this.view.txtZipCode.text = "";
      this.updateAmountValue();
    }
  },
    updateAmountValue: function(){
        if(this.view.txtZipCode.text === ""){
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        }else{
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
        }
    },
  onClickCancel:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
     billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
  }
 });