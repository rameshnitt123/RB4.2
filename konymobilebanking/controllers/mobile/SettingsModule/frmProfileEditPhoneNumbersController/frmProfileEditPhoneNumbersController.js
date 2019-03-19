define({ 
  popmsg : null,
  timerCounter : 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate : function(param){
    var scope = this;
    if(param === "add"){
      this.popmsg =  "Successfully added phone number";
      scope.showSuccessPopUp();
    }
    else if(param === "edit"){
      this.popmsg =  "Successfully updated phone number";
      scope.showSuccessPopUp();
    }
    else if(param === "Delete"){
      this.popmsg = "Successfully Deleted";
      scope.showSuccessPopUp();
    }
    else if(param === "phonenumber"){
      scope.showPopupSuccess();
    }
  },
  showSuccessPopUp : function () {
    var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlx43ce6e";
    this.view.customPopup.imgPopup.src = "confirmation.png";
    this.view.customPopup.lblPopup.text = this.popmsg;
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 3, false);
  },
  swipeObj : null,
  row : null,
  animObj:null,
  frmPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
    this.view.segPhoneNumbers.info={"keyContext":null};
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
    this.checkForToastMessage();
    var nav = applicationManager.getNavigationManager();
    var customdata = nav.getCustomInfo('frmProfileEditPhoneNumbers');
    var data = customdata.data;
    if(data.length < 3){
      this.view.btnContinue.isVisible = true;
    }
    else{
      this.view.btnContinue.isVisible = false;
    }
    this.view.segPhoneNumbers.widgetDataMap = {
      "lblDetail" : "lblDetail",
      "lblDetailValue" : "lblDetailValue",
      "flxDelete" : "flxDelete"
    };
    var scope = this;
    var temp = data;
    for(var i=0;i<data.length;i++){
      temp[i]["flxDelete"] = {"onClick" : scope.onSwipeDeleteClick.bind(this,data[i])};
    }
    data = temp;
    this.view.segPhoneNumbers.setData(data);
    if(data.length === 0){
      this.view.lblUSer.text = "No Data Found";
    }
    else{
      this.view.lblUSer.text = "Select the phone number to edit";
    }
    /*this.popmsg =  "Successfully added phone number";
    if(customdata.context === "Edit"){
      this.popmsg =  "Successfully Updated phone number";
      this.showSuccessPopUp();
    }
    if(customdata.context === "Add"){
      this.popmsg =  "Successfully added phone number";
      this.showSuccessPopUp();
    }
    if(customdata.context === "Delete"){
      this.popmsg = "Successfully Deleted";
      this.showSuccessPopUp();
    }
    */
  },
  setFlowActions : function(){
    var scope = this;
    this.view.btnContinue.onClick = function(){
      scope.navToContactLocation("add");
    };
    this.view.segPhoneNumbers.onRowClick = function(){
      var selectedIndex = scope.view.segPhoneNumbers.selectedRowIndex;
      scope.navigateToEditPhoneNumber(selectedIndex);
      //scope.navToEditNumber("edit");
    };
	this.view.customHeader.flxBack.onClick = function () {
      var navigationManager = applicationManager.getNavigationManager();
      navigationManager.goBack();
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
  },
  
  onSwipeDeleteClick : function(data){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.deleteUserPhoneNumber(data.id);
  },
  
  navToContactLocation : function(param){
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.setCustomInfo("frmProfileSelectLocation",param);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfileSelectLocation");
  },
  navToEditNumber : function(param){

  },
  navigateToEditPhoneNumber : function(index){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.naviagteToProfileEditPhoneNumber(index);
  },
  showPopupSuccess: function () {
    var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlx43ce6e";
    this.view.customPopup.imgPopup.src = "confirmation.png";
    this.view.customPopup.lblPopup.text = "Successfully Updated phone number"
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 3, false);
  },
  
  bindViewError : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
  bindViewSuccess : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  },
  
  checkForToastMessage : function(){
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo('frmProfileEditPhoneNumberMain');
    if(data === "addsuccess"){
      var i18nAdd = applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.addPhoneNumberSuccess');
      this.bindViewSuccess(i18nAdd);
    }
    if(data === "editsuccess"){
      var i18nEdit =  applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.editPhoneNumberSuccess');
      this.bindViewSuccess(i18nEdit);
    }
    if(data === "deletesuccess"){
      var i18nDelete =  applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.deletePhoneNumberSuccess');
      this.bindViewSuccess(i18nDelete);
    }
    navManager.setCustomInfo('frmProfileEditPhoneNumberMain',null);
  }
//   animateSegRows : function(){
//     var self = this;
//     var ab = kony.store.getItem("direction");
//     var rowNumber = kony.store.getItem("rowIndexNumber");
//     //alert("form :  "+rowNumber);
//     this.row = rowNumber;
     
// //     var getInfo = this.view.segPhoneNumbers.info={"keyGesture":null};
//     var getRow = this.view.segPhoneNumbers.info.keyContext;
//     alert("seg alert"+getRow);
// //     alert(getInfo);
//     if(ab == 1.0){
//       self.animateLeft(rowNumber);
      
//     }
//     else if(ab == 2.0){
//       self.animateRight(rowNumber);
//     }

//   },
//   animateLeft : function(rowNumber){
//     this.animObj = this.getTransAnimDefinition("-16%");
//     this.view.segPhoneNumbers.animateRows({
//       rows: [{
//         sectionIndex:0,
//         rowIndex: rowNumber
//       }],
//       widgets: ["flxSwipe"],
//       animation : this.swipeObj
//     });
//   },
//   animateRight : function(rowNumber){
//     this.animObj = this.getTransAnimDefinition("0%");
//     this.view.segPhoneNumbers.animateRows({
//       rows: [{
//         sectionIndex:0,
//         rowIndex: rowNumber
//       }],
//       widgets: ["flxSwipe"],
//       animation : this.swipeObj
//     });
//   },
//   getTransAnimDefinition : function(leftVal) {
//     var transAnimDef1 = {
//       "100": {
//         "left": leftVal,
//         "stepConfig": {
//           "timingFunction": kony.anim.LINEAR
//         },
//         "rectified": true
//       }
//     };
//     var animConf = {
//       "delay": 0,
//       "iterationCount": 1,
//       "fillMode": kony.anim.FILL_MODE_FORWARDS,
//       "duration": 0.5
//     };
//     this.swipeObj = {
//       definition: kony.ui.createAnimation(transAnimDef1),
//       config :animConf,
//       callbacks:null
//     }
//   },
});