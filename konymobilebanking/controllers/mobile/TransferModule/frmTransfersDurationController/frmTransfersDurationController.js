define({
   init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function () {
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
      var navMan=applicationManager.getNavigationManager();
    var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var index= transModPresentationController.getIndexForDuration();

       this.view.segDuration.rowFocusSkin = "";
      this.view.segDuration.retainSelection = false;
      if(index!==null&&index!==undefined&&index!=="")
      {
        this.view.segDuration.rowFocusSkin = "sknFlxf9f9f9";
      this.view.segDuration.retainSelection = true;
 
       this.view.segDuration.selectedRowIndex = [0,index];
      }
    
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function () {
        var scope = this;
        this.view.segDuration.onRowClick = function () {
            scope.segmentRowClick();
        }
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
  segmentRowClick: function () {
    var navMan=applicationManager.getNavigationManager();
    var index = this.view.segDuration.data[this.view.segDuration.selectedIndex[1]].lblFrequency;
    navMan.setCustomInfo("frmTransfersDuration",{"duration":index});
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    transferModulePresentationController.switchDurationType(index); 
  }
});