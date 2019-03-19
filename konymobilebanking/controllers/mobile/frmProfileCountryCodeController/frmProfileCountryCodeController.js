 define({
  keypadString : '',
  frmSecurityCheckPreShow : function(){
    this.setFlowActions();
    this.setPreshowData();
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.customHeader.flxBack.onClick = function () {
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfileSelectLocation");
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
    this.view.flxPickCountry.onClick = function(){
      scopeObj.NavToCountry();
    };
    this.view.btnContinue.onClick = function(){
      scopeObj.NavToPhoneNumber();
    };
  },
  setPreshowData : function(){
    this.view.customHeader.flxBack.isVisible = true;
    
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxSecurityCheckMain.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxSecurityCheckMain.top = "0dp";
    }
  },
   NavToCountry : function(){
     var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
     settingsMod.presentationController.commonFunctionForNavigation("frmProfileCountry");
   },
   NavToPhoneNumber : function(){
     var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
     settingsMod.presentationController.commonFunctionForNavigation("frmProfileEnterPhoneNumber");
   },
  setKeypadChar: function (char) {
        if(char=='.'){
            if(this.isPeriodUsed==false){
                this.isPeriodUsed = true;
            }else{
                return;
            }
        }
        this.keypadString = this.keypadString + char;
        this.updateAmountValue();
    },
    clearKeypadChar: function () {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateAmountValue();
        }else if (this.keypadString.length !== 0) {
            if(this.keypadString[this.keypadString.length-1]==='.'){
                this.isPeriodUsed = false;
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateAmountValue();            
        }
    },
    updateAmountValue: function(){
        if(this.keypadString===''){
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        }else{
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            this.view.lblCode.text = this.keypadString;
        }
    },
 });