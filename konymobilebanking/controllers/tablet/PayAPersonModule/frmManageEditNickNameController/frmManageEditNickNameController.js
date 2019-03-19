define({
  
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        if (applicationManager.getDeviceUtilManager().isIpad()) {
            this.view.flxHeader.isVisible = false;
        }
		this.populateName();
        this.initActions();        		
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
  	navBack: function(){
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
    },
  	initActions: function () {
        var scope = this;
        this.view.customHeaderTablet.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();
			navMan.goBack();
        }
        this.view.customHeaderTablet.btnRight.onClick = function () {
          scope.onClickCancel();
       }
        this.view.btnSaveNickName.onClick = function(){
          	applicationManager.getPresentationUtility().showLoadingScreen();
          var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");      
          if(p2pMod.presentationController.getFlowType()==="P2P"){
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            p2pMod.presentationController.updateP2PRecipient(scope.view.tbxNickName.text);
          }
			else{
                var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
				transferModule.presentationController.updateBenificiaryNickName(scope.view.tbxNickName.text);    
			}
        }
    },
	populateName:function(){
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      if(p2pMod.presentationController.getFlowType()==="P2P"){
      var recipientData=p2pMod.presentationController.getP2PPayeeDetails();
		if(recipientData && recipientData.nickName){
			this.view.tbxNickName.text=recipientData.nickName;
		}
      }
     else{
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryDetails=transferMod.presentationController.getBenificiaryData();
        if(benificiaryDetails && benificiaryDetails.nickName){
        	this.view.tbxNickName.text=benificiaryDetails.nickName;
        }
      }
	},
  onClickCancel:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }
});