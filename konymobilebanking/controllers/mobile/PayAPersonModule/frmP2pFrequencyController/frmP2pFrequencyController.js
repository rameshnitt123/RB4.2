define({
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.initActions();
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var index = payeeMod.presentationController.getSelectedFrequencyIndex();
      this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
      this.view.segFrequency.retainSelection = false;
      if(index !== undefined && index !== null && index !== "")
      {
        this.view.segFrequency.selectedRowIndex = [0,index];
        this.view.segFrequency.retainSelection = true;
      }
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.segFrequency.onRowClick = function () {
            scope.segmentRowClick();
        }
        this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();    
           navMan.goBack(); 
        }
        this.view.customHeader.btnRight.onClick = function(){
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
        }
    },
    segmentRowClick: function () {
         var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.switchFrequencyType(index);
    }
});