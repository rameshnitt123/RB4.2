define({ 
    keypadString:'',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }   
          this.keypadString='';
      var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var recur= transModPresentationController.getTransObject();
   //   var navMan=applicationManager.getNavigationManager();
     // var recurrence=navMan.getCustomInfo("frmTransfersRecurrence");
      if(recur.numberOfRecurrences!==null&&recur.numberOfRecurrences!==""&&recur.numberOfRecurrences!==undefined)
        {
          this.keypadString=recur.numberOfRecurrences;
        }
        this.updateInputBullets();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function(){
     var scope=this;
        this.view.btnContinue.onClick = this.clickOnContinue;  
        this.view.customHeader.flxBack.onClick = function(){
           var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();   
        }
        this.view.customHeader.btnRight.onClick = function(){
         scope.cancelOnClick();
        }
    },
  cancelOnClick:function()
  {
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
  },
   
  clickOnContinue:function()
  {
      var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
      transferModulePresentationController.transferSetRecurrence(this.keypadString); 
    
    
  },
    updateInputBullets: function () {
        var scope = this;
        var widgets = this.view["flxInputRecurrenceNumber"].widgets();
        var dummyString = "__";
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].text = this.keypadString[i];
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length ; i++) {
            widgets[i].text = dummyString[i];
            widgets[i].skin = "sknLble3e3e3SSP60px";
        }

        if(this.keypadString.length!==0){
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.focusSkin = "sknBtn0095e4RoundedffffffSSP26px";
        }else{
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
        }

        this.view.forceLayout();
    },
    setKeypadChar: function (char) {
        if (this.keypadString.length === 2) return;

        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function () {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    }
 });