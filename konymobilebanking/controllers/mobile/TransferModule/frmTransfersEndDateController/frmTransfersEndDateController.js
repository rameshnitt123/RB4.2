define({
    freq:'',
   init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.view.customCalendar.preShow();
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.view.customCalendar.selectedDate='';
      this.view.customCalendar.firstEnabledDate="";
    // this.view.customCalendar.isCalendarEndDateFrm = true;
      this.view.customCalendar.triggerContinueAction = false;
      //this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
    //  this.view.customCalendar.unHighlightAllDays(); 
      var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var startdate= transModPresentationController.getTransObject();
      kony.print("startDate.scheduledDate  -  "+startdate.scheduledDate);
      this.view.customCalendar.setFirstEnabledDate(startdate.scheduledDate);
      var forUtility=applicationManager.getFormatUtilManager();
      if(startdate.endCalendarDate!== null && startdate.endCalendarDate !== undefined && startdate.endCalendarDate !== ""){
        this.setDateToCalendar(startdate.endCalendarDate);
      }
      else if(startdate.frequencyEndDate!== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== ""){
        this.setDateToCalendar(startdate.endCalendarDate);
      }else{
        this.view.customCalendar.setSelectedDate(startdate.frequencyEndDate); 
      }      
      this.view.customCalendar.resetCal();
      this.initActions();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();

      applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function(){
        var scope = this;
        this.view.btnContinue.onClick = this.continueAction;
      this.view.customHeader.flxBack.onClick = function(){
           var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();   
        }
        this.view.customHeader.btnRight.onClick = function(){
          scope.cancelOnClick();
        }
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var frequencyEndDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    frequencyEndDate = forUtility.getFormattedSelectedDate(frequencyEndDate);
    this.view.customCalendar.setSelectedDate(frequencyEndDate); 
  },
 cancelOnClick:function()
  {
  var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon(); 
  },
     continueAction: function(){
         var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.transferScheduledEndDate(this.view.customCalendar.getSelectedDate());
}
});