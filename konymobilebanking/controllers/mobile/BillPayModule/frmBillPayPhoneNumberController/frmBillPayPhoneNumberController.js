define({ 

   keypadString: '',
  init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreShow: function() {
        var scope = this;
        this.setDataToForm();
      //  this.updateInputBullets("flxInputPhoneNo");
        this.view.lblPhoneNumber.text = "";
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick=this.btnRightOnClick;
        this.view.btnContinue.onClick = function(){
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      	  billPayMod.presentationController.setBillPayPhoneNumber(scope.keypadString.replace(/[()-]/g,""));
          billPayMod.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
        };
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    btnRightOnClick: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if(kony.os.deviceInfo().name==="iPhone"){
           this.view.flxHeader.isVisible = false;
         }else{
           this.view.flxHeader.isVisible = true;
         }
    },
    flxBackOnClick: function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },
//     btnContinueOnClick: function() {   
    
//     },
    setKeypadChar: function(char) {
      this.keypadString = this.keypadString + char;
      this.view.lblPhoneNumber.text = this.keypadString;
      if(this.keypadString.length > 0)
        this.enterPostAction();
      
//         if (this.keypadString.length === 13) {
//             this.enterPostAction();
//         } else if (this.keypadString.length < 13) {
//             this.incompleteView();
//         } else if (this.keypadString.length > 13) {
//             this.keypadString = this.keypadString.slice(0, 13);
//             return;
//         }
       // this.updateInputBullets("flxInputPhoneNo");
    },

    clearKeypadChar: function() {
      if (this.keypadString.length === 1) {
        this.keypadString = '';
        // this.updateInputBullets("flxInputPhoneNo");
      }
      else
      {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      }
      this.view.lblPhoneNumber.text = this.keypadString;
//         if (this.keypadString.length !== 0) {
//             if ((this.keypadString.length === 5) || (this.keypadString.length === 9)) {
//                 this.keypadString = this.keypadString.substr(0, this.keypadString.length - 2);
//             } else {
//                 this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
//             }
//             if (this.keypadString.length < 13) {
//                 this.incompleteView();
//             }
//            // this.updateInputBullets("flxInputPhoneNo");
//         }

    },
    updateInputBullets: function(inputFlx) {
        var dummyString = '(___)___-____';
        //         if(this.keypadString.length===1||this.keypadString.length===5||this.keypadString.length===9){
        //             this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
        //         }
        if (this.keypadString.length === 8) {
            this.keypadString = this.keypadString + '-';
        } else if (this.keypadString.length === 0) {
            this.keypadString = this.keypadString + '(';
        } else if (this.keypadString.length === 4) {
            this.keypadString = this.keypadString + ')';
        }

        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    incompleteView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    enterPostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    setDataToForm:function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var phoneNo=billPayMod.presentationController.getBillPayPhoneNumber();
      if(phoneNo & phoneNo.length>0)
      {
        this.keypadString=phoneNo;
        this.enterPostAction();
      }
      else
      {
        this.keypadString = '';
        this.view.lblPhoneNumber.text = "";
        this.incompleteView();
      }
//       if(phoneNo && phoneNo.length>6){
//         this.keypadString="("+phoneNo.substr(0,3)+")"+phoneNo.substr(3,3)+"-"+phoneNo.substr(6,4);
//         this.enterPostAction();
//       }
//       else if(phoneNo && phoneNo.length<=6){
//         this.keypadString="("+phoneNo.substr(0,3)+")"+phoneNo.substr(3,3);
//         this.enterPostAction();
//       }
//       else{
//         this.keypadString = '(';
//         this.incompleteView();
//       }
    }
 });