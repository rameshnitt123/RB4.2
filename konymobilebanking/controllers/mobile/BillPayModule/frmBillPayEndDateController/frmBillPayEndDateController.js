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
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.view.customCalendar.preShow();
      this.view.customCalendar.selectedDate='';
      this.view.customCalendar.triggerContinueAction = false;
 //     this.view.customCalendar.isCalendarEndDateFrm = true;
  //    this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
   //   this.view.customCalendar.unHighlightAllDays(); 
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var startdate= billPayMod.presentationController.getTransObject();
	  this.view.customCalendar.setFirstEnabledDate(startdate.scheduledDate);
      var forUtility=applicationManager.getFormatUtilManager();
      if(startdate.endCalendarDate!== null && startdate.endCalendarDate !== undefined && startdate.endCalendarDate !== ""){
        this.setDateToCalendar(startdate.endCalendarDate);
      }
      else if(startdate.frequencyEndDate!== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== ""){
        this.setDateToCalendar(startdate.endCalendarDate);
      }else{
        this.view.customCalendar.setSelectedDate(startdate.scheduledDate); 
      }  
      this.view.customCalendar.resetCal();
      this.initActions();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm); 
    },
    initActions: function(){
        var scope = this;
       this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.btnRight.onClick = function(){
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        	billPayModule.presentationController.cancelCommon(); 
        }
        this.view.customHeader.flxBack.onClick = function(){
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayStartDate");  
        }
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var frequencyEndDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    frequencyEndDate = forUtility.getFormattedSelectedDate(frequencyEndDate);
    this.view.customCalendar.setSelectedDate(frequencyEndDate); 
  },
     continueAction: function(){
         var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.transferScheduledEndDate(this.view.customCalendar.getSelectedDate());
}
});