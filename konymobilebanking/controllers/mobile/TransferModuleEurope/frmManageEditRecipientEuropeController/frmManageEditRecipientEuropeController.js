define({
  
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
		this.populateName();
        this.initActions();        		
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
  	initActions: function () {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();
			navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function () {
          scope.onClickCancel();
       }
        this.view.btnSave.onClick = function(){
          	applicationManager.getPresentationUtility().showLoadingScreen();
       
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
				transferModulePresentationController.updateBenificiaryNickName(scope.view.txtRecipientName.text);
			
        }
    },
	populateName:function(){
     
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var benificiaryDetails=transferModulePresentationController.getBenificiaryData();
        if(benificiaryDetails && benificiaryDetails.nickName){
        	this.view.txtRecipientName.text=benificiaryDetails.nickName;
     
      }
	},
  onClickCancel:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }
});
