define({
  timerCounter: 0,
  segData : [],
  
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmMessagesPreShow: function () {
    this.view.btnContinue.setEnabled(false);
    this.view.btnDeletePermanent.isVisible = false;
    this.view.btnRestore.isVisible = false;
    this.view.btnContinue.isVisible = true;
    this.view.btnContinue.skin = "sknBtnBgF9F9F930PxTab";
    this.setPreshowData();
    this.setFlowActions();
    this.showPopup();
    var navManager = applicationManager.getNavigationManager();
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    this.view.flxHeader.isVisible = !deviceUtilManager.isIpad();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData: function () {
    var scope = this;
    this.segData = [];
    
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUMESSAGES);
    scope.setDefaultSkinForAllTabs();
    scope.setTabSelectedSkins();
    scope.resetFormUI();
    scope.setDataBasedOnSelectedTab();
  },
  onDelete :function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rowId = applicationManager.getPresentationUtility().rowIndexforSwipe;
    var selectedMessageDetails = this.segData[rowId];
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmMessagesDetails");
    if(!data)
    {
     data = {}; 
    }
    data.requestid = selectedMessageDetails.id;
    navManager.setCustomInfo("frmMessagesDetails",data);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.onDeleteMessages();
  },
  onSwipeReply : function(){
    var rowid = this.view.segMessages.selectedIndex[0];
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmMessagesDetails");
    if(!data)
    {
     data = {}; 
    }
    data.showReply = true;
    navManager.setCustomInfo("frmMessagesDetails", data);
  },
  setDataBasedOnSelectedTab : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    var navManager = applicationManager.getNavigationManager();
    var messageData=navManager.getCustomInfo("frmMessages");
    if(messagesMod.presentationController.messageTabSelected === "INBOX") {
      this.setDataToSegment(messageData.inboxRequestsDetails);
    } else {
      this.setDataToSegment(messageData.deleteRequestDetails);
    }
  },
  
  onTextChange : function () {
    var ENABLE_SKIN = "sknBtnBg0A78D1SSP30PxTab";
    var DISABLE_SKIN = "sknBtnBgF9F9F930PxTab";
    
    var isEmpty = this.view.flxReply.txtReply.text.length === 0;
    this.view.btnContinue.setEnabled(!isEmpty);
    this.view.btnContinue.skin = isEmpty ? DISABLE_SKIN : ENABLE_SKIN;
  },
  
  setFlowActions: function () {
    var scopeObj = this;
    this.view.flxDelete.onClick = this.onSelectDelete;
    this.view.flxInbox.onClick = this.onInboxTabSelection;
    this.view.flxDeleted.onClick = this.onDeletedTabSelection; 
    this.view.btnContinue.onClick = this.sendReply.bind(this);
    this.view.flxReply.txtReply.onTextChange = this.onTextChange;
    this.view.btnRestore.onClick = this.onRestore;
    this.view.btnDeletePermanent.onClick = this.onSelectDelete;
    this.view.tbxSearch.onTextChange = this.onSearchingMessages.bind(this);
     this.view.flxSearch.onClick = this.navToNewMessage;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  onRestore : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messageModule.presentationController.restoreMessagesOfARequest();
  },
  
  sendReply : function(){
    var enteredMessage = this.view.txtReply.text;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var description = Base64.encode(enteredMessage);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.replyMessagesOfARequest(description);
  },
  setTabSelectedSkins: function () {
    this.setDefaultSkinForAllTabs();
    
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
   
    var isInboxSelected = messagesMod.presentationController.messageTabSelected === "INBOX";
    var SELECTED_SKIN = "sknFlxBgFFFFFF";
    var UNSELECTED_SKIN = "sknFlxf9f9f9";
    var INDICATOR_SELECTED_SKIN = "sknFlx1a98ff";
    
    this.view.flxInbox.skin = isInboxSelected ? SELECTED_SKIN : UNSELECTED_SKIN;
    this.view.flxDeleted.skin = isInboxSelected ? UNSELECTED_SKIN : SELECTED_SKIN;
    this.view.flxDelete.isVisible = isInboxSelected ? true : false;
    this.view.flxInboxIndicator.skin =  isInboxSelected ? INDICATOR_SELECTED_SKIN : UNSELECTED_SKIN;
    this.view.flxDeletedIndicator.skin = isInboxSelected ? UNSELECTED_SKIN : INDICATOR_SELECTED_SKIN;
  },
  animateInboxToDelete:function() {
    var scope=this;
    this.view.flxDraftIndicator.left="0%";
    this.view.flxDraftIndicator.skin="sknFlx1a98ff";
    this.view.flxDraftIndicator.setVisibility(true);
    this.view.flxInboxIndicator.skin="sknFlxBgFFFFFF";
    this.view.flxDraftIndicator.animate(
    kony.ui.createAnimation({
      0:{
        left:"0%","stepConfig":{}
      },
      100:{
        left:"50%","stepConfig":{}
      }
    }),
    {
      fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3
    },
    {
      animationEnd: function() {
        scope.view.flxDraftIndicator.setVisibility(false);
        scope.setTabSelectedSkins();
      }
    }
    );
  },
  animateDeleteToInbox: function(){
    var scope=this;
    this.view.flxDraftIndicator.left="50%";
    this.view.flxDraftIndicator.skin="sknFlx1a98ff";
    this.view.flxDraftIndicator.setVisibility(true);
    this.view.flxDeletedIndicator.skin="sknFlxBgFFFFFF";
    this.view.flxDraftIndicator.animate(
    kony.ui.createAnimation({
      0:{
        left:"50%","stepConfig":{}
      },
      100:{
        left:"0%","stepConfig":{}
      }
    }),
    {
      fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3
    },
    {
      animationEnd: function() {
        scope.view.flxDraftIndicator.setVisibility(false);
        scope.setTabSelectedSkins();
      }
    }
    );
  },
  setDefaultSkinForAllTabs: function () {
    this.view.flxDeleted.skin = "sknFlxBgFFFFFF";
    this.view.flxDeletedIndicator.skin = "sknFlxBgFFFFFF";
    this.view.flxDraft.skin = "sknFlxBgFFFFFF";
    this.view.flxDraftIndicator.skin = "sknFlxBgFFFFFF";
    this.view.flxInbox.skin = "sknFlxBgFFFFFF";
    this.view.flxInboxIndicator.skin = "sknFlxBgFFFFFF";
  },
  resetFormUI : function(){
    var scopeObj = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    this.view.flxHeader.isVisible = !deviceUtilManager.isIpad();
    scopeObj.view.tbxSearch.text = "";
  },
  onSearchingMessages : function(){
    var searchtext = this.view.tbxSearch.text.toLowerCase();
    var navManager = applicationManager.getNavigationManager();
    var messageData = navManager.getCustomInfo("frmMessages");
    var requestsDetails = [];
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    if(messagesMod.presentationController.messageTabSelected === "INBOX")
      requestsDetails = messageData.inboxRequestsDetails;
    else
      requestsDetails = messageData.deleteRequestDetails;
    if(searchtext && requestsDetails )
    {
      this.view.segMessages.removeAll();
      var data = requestsDetails;
      for(var i=0 ; i<data.length; i++)
      {
        data[i].requestsubjecttext = data[i].requestsubject.text || data[i].requestsubject;
      }
      var searchSegData = applicationManager.getDataProcessorUtility().commonSegmentSearch("requestsubjecttext",searchtext,data);
      this.setDataToSegment(searchSegData);
    }
    else if(!searchtext && requestsDetails){
      this.setDataToSegment(requestsDetails);
    }
    this.segData = requestsDetails;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  resetNoMessageLabelBasedOnData : function(data){
    if(data && data.length>0){
      this.hideNoMessagesLabel();
    }
    else{
      this.showNoMessagesLabel();
    }
  },
  onInboxTabSelection :function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.flxMessageDetailsMain.forceLayout();
    this.view.flxNoTransactions.isVisible = false;
    this.view.btnDeletePermanent.isVisible = false;
    this.view.btnRestore.isVisible = false;
    this.view.btnContinue.isVisible = true;
    this.view.flxReply.isVisible = true;
    var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesModule.presentationController.getInboxRequests();
  },
  onDeletedTabSelection: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.flxMessageDetailsMain.forceLayout();
    this.view.flxNoTransactions.isVisible = false;
    this.view.btnDeletePermanent.isVisible = true;
    this.view.btnRestore.isVisible = true;
    this.view.btnContinue.isVisible = false;
    this.view.flxReply.isVisible = false;
    this.view.tbxSearch.text = "";
    var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesModule.presentationController.getDeleteRequests();
  },
  navToNewMessage:  function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.getCategories();
  },
  navigateToAccountsDashboard: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();

    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.showDashboard();
  },
  setDataToSegment : function(segmentData){
    var dataMap = this.getDataMapForMessages();
     
    this.animateRight(applicationManager.getPresentationUtility().rowIndexforSwipe);
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    for (var i = 0; i < segmentData.length; i++) {
      segmentData[i].flxDelete={"skin":"sknflxff5d6e"};
      segmentData[i].flxReply={};
      segmentData[i].lblDelete={"text": "Delete"};
      segmentData[i].lblReply={"text": "Reply"};
      segmentData[i].imgDelete={"src": "deleteicon.png"};
      segmentData[i].imgReply={"src": "replyicon.png"};
    }
    for(var i=0;i<segmentData.length;i++){
      segmentData[i].flxDelete.onClick = this.onDelete;
       //segmentData[i].flxReply.onClick = this.onSwipeReply;
    }
    if(segmentData)
    {
      this.view.segMessages.widgetDataMap = dataMap;
      this.view.segMessages.setData(segmentData);
      this.resetNoMessageLabelBasedOnData(segmentData);
      this.segData = segmentData;
    }
    else
    {
      this.resetNoMessageLabelBasedOnData(segmentData);
    }
    this.view.txtReply.text = "";
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.showInitialMessages();
    this.view.forceLayout();
  },
  showInitialMessages : function(){
    var data = this.view.segMessages.data;
    
    if(!kony.sdk.isNullOrUndefined(data) && data.length>0){
      applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedMessageRow = 0;
    var requestIdForSelectedRequest = data[0].id;
   	var subjectForSelectedRequest = data[0].requestsubject;
    subjectForSelectedRequest.skin = "sknLbl424242SSP26px";
    var unreadMessagesCount = parseInt(data[0].unreadMsgsCount);
    var navManager = applicationManager.getNavigationManager();
    data =  navManager.getCustomInfo("frmMessagesDetails");
    if(!data)
      {
        data = {};
      }
    data.requestid = requestIdForSelectedRequest;
    data.subject = subjectForSelectedRequest;
    data.unreadMessagesCount = unreadMessagesCount;
    navManager.setCustomInfo("frmMessagesDetails",data);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.getMessagesForARequest(requestIdForSelectedRequest,selectedMessageRow);
    }
  },
  navToMessageDetails: function (rowIndex) { 

    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedData = this.view.segMessages.data[rowIndex];
    var requestIdForSelectedRequest = selectedData.id;
    var subjectForSelectedRequest = selectedData.requestsubject;
    subjectForSelectedRequest.skin = "sknLbl424242SSP26px";
    var unreadMessagesCount = parseInt(selectedData.unreadMsgsCount);
    
    var navManager = applicationManager.getNavigationManager();
    var data =  navManager.getCustomInfo("frmMessagesDetails");
    if(!data)
      {
        data = {};
      }
    data.requestid = requestIdForSelectedRequest;
    data.subject = subjectForSelectedRequest;
    data.unreadMessagesCount = unreadMessagesCount;
    navManager.setCustomInfo("frmMessagesDetails",data);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.getMessagesForARequest(requestIdForSelectedRequest,rowIndex);
  },
  showNoMessagesLabel : function(){
    this.hideMessagesFlex();
    this.showNoTransactionsLabel(); 
    this.view.segMessageDetails.removeAll();
    this.view.lblSubject.text = "";
    this.view.lblSubjectDescription.text = "";
  },
  hideNoMessagesLabel : function(){
    this.hideNoTransactionsLabel();
    this.showMessagesFlex();
  },
  getDataMapForMessages : function()
  {
    var dataMap = {
      "flxDelete": "flxDelete",
      "flxDeleteReply": "flxDeleteReply",
      "flxMessagesRoot": "flxMessagesMain",
      "flxMessagesShadow": "flxMessagesShadow",
      "flxReply": "flxReply",
      "flxMainMessage": "flxmain",
      "imgDelete": "imgDelete",
      "imgReply": "imgReply",
      "lblDelete": "lblDelete",
      "lblReply": "lblReply",
      "lblRequestId":"id",
      "lblDescription": "firstMessage",
      "lblSubject": "requestsubject",
      "lblTime": "recentMsgDate",
      "lblNumber":"unreadMsgsPerThread",
      "unreadMsgsCount":"unreadMsgsCount"
    };
    return dataMap;
  },
  showNoTransactionsLabel:function(){
    this.view.flxNoTransactions.setVisibility(true);
  },
  hideNoTransactionsLabel:function(){
    this.view.flxNoTransactions.setVisibility(false);
  },
  showMessagesFlex:function(){
    this.view.flxMessages.setVisibility(true);
  },
  hideMessagesFlex:function(){
    this.view.flxMessages.setVisibility(false);
  },
  bindGenericSuccess : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  },
  showPopup : function(){
    var navManager = applicationManager.getNavigationManager();
    var messageData = navManager.getCustomInfo("frmMessages");
    if(messageData.messagePopupType && messageData.messagePopupType !== "")
    {
      var popupMessage;
      switch (messageData.messagePopupType)
      {
        case "deletePermanentlySuccess" :  
          popupMessage = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.DeletePermanentlyPopup");
          break;
        case "deleteSuccess" : 
          popupMessage = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.DeletePopup");
          break;
        case "restoreSuccess" : 
          popupMessage = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.MessageRestoredPopup");
          break;
        case "sendSuccess" : 
          popupMessage = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.MessageSentPopup");
          break;      
      }
      messageData.messagePopupType = "";
      navManager.setCustomInfo("frmMessages",messageData);
      this.bindGenericSuccess(popupMessage);
    }
  },
  onSwipeOfRequest : function () {
    this.animateReplyDelete(2);
  },
  animateRight : function(rowNumber){
    var animObj = this.getTransAnimDefinition("0%");
    this.view.segMessages.animateRows({
      rows: [{
        sectionIndex:0,
        rowIndex: rowNumber
      }],
      widgets: ["flxMessagesMainSwipe"],
      animation : this.swipeObj
    });
  },
  getTransAnimDefinition : function(leftVal) {
    var transAnimDef1 = {
      "100": {
        "left": leftVal,
        "stepConfig": {
          "timingFunction": kony.anim.LINEAR
        },
        "rectified": true
      }
    };
    var animConf = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.5
    };
    this.swipeObj = {
      definition: kony.ui.createAnimation(transAnimDef1),
      config :animConf,
      callbacks:null
    };
  },
  addNewMessage : function(){
    this.navToNewMessage();
  },
  //////////-------------------------------------------------------------------------------------------------------------------------------
  //frmMessageDetails Controller
  setMessageDetailsData : function(){
    var scopeObj = this;
    var dataMap = this.getDataMap();
    var navManager = applicationManager.getNavigationManager();
    var messageDetails = navManager.getCustomInfo("frmMessagesDetails");
    var subject = messageDetails.subject;
    var requestDetailData = messageDetails.requestDetailData;
    this.setSubject(subject);
    this.view.segMessageDetails.widgetDataMap = dataMap;
    this.view.segMessageDetails.setData(requestDetailData);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.forceLayout();
  },  
  getDataMap :function(){
    var dataMap = {
      "flxAttachment": "flxAttachment1",
      "flxAttachmentMain": "flxAttachmentMain1",
      "flxDownload": "flxDownload",
      "flxFrom": "flxFrom",
      "flxMain": "flxMain",
      "flxMessage": "flxMessage",
      "flxMessagesRight": "flxMessagesRight",
      "flxRight": "flxRight",
      "flxShadow": "flxShadow",
      "imgAttachment": "imgAttachment1",
      "imgDownload": "imgDownload1",
      "lblAttachment": "lblAttachment1",
      "lblDate": "lblDate",
      "lblFrom": "lblFrom",
      "lblFromValue": "lblFromValue",
      "lblMessage": "lblMessage",
      "lblMessageDescription": "lblMessageDescription",
      "flxAttachment2": "flxAttachment2",
      "flxAttachmentMain2": "flxAttachmentMain2",
      "imgAttachment2": "imgAttachment2",
      "lblAttachment2": "lblAttachment2",
      "flxDownload2": "flxDownload2",
      "imgDownload2": "imgDownload2",
      "flxAttachment3": "flxAttachment3",
      "flxAttachmentMain3": "flxAttachmentMain3",
      "imgAttachment3": "imgAttachment3",
      "lblAttachment3": "lblAttachment3",
      "flxDownload3": "flxDownload3",
      "imgDownload3": "imgDownload3",
      "flxAttachment4": "flxAttachment4",
      "flxAttachmentMain4": "flxAttachmentMain4",
      "imgAttachment4": "imgAttachment4",
      "lblAttachment4": "lblAttachment4",
      "flxDownload4": "flxDownload4",
      "imgDownload4": "imgDownload4",
      "flxAttachment5": "flxAttachment5",
      "flxAttachmentMain5": "flxAttachmentMain5",
      "imgAttachment5": "imgAttachment5",
      "lblAttachment5": "lblAttachment5",
      "flxDownload5": "flxDownload5",
      "imgDownload5": "imgDownload5",
    };
    return dataMap;
  },
  setSubject : function(subject)
  {
    this.view.lblSubjectDescription.text = subject.text;
    this.view.lblSubjectDescription.skin = subject.skin;
  }, 
  onSelectDelete :function(){
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.onDeleteMessages();
  },
  onSendingReply : function(){
    this.setSegHeight();
    applicationManager.getPresentationUtility().showLoadingScreen();
    var replyMessage = this.view.txtAreaReply.text;
    var description = Base64.encode(replyMessage);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.replyMessagesOfARequest(description);
  },
  onRestore : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messageModule.presentationController.restoreMessagesOfARequest();
  },
  navToMessages : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    if(MessageModule.presentationController.messageTabSelected === "INBOX")
    {
      MessageModule.presentationController.getInboxRequests();
    }
    else if(MessageModule.presentationController.messageTabSelected === "DELETED")
    {
      MessageModule.presentationController.getDeleteRequests();
    }
  },
  alterHeight : function(){
    if(this.view.tbxReply.text !== ""){
      var initialHeight = 40;
      var text1 = this.view.tbxReply.text.length;
      if(text1%39 ===0){
        var setHeight = initialHeight + 20;
        this.view.tbxReply.height = setHeight +"dp";
        initialHeight = setHeight;
      }
    }
  },
  showDocumentpopup : function(){
    this.view.flxPopupDocuments.setVisibility(true);
  },
  openCamera : function(){
    this.view.flxPopupDocuments.setVisibility(false);
    //your code here
  },
  openDocs : function(){
    this.view.flxPopupDocuments.setVisibility(false);
    // code here
  },
  setReplyBox : function(){
    var scope = this;
    this.view.flxReply.setVisibility(false);
    this.view.txtAreaReply.setVisibility(true);
    // this.view.flxSegMessages.bottom = "250dp";
    this.view.txtAreaReply.setFocus(true);
    this.view.flxReplyandSend.isVisible = true;
    this.view.flxAttachFile.setVisibility(false);
  },
  setReplyBack : function(){
    var scope = this;
    this.view.flxReply.setVisibility(false);
    this.view.txtAreaReply.setVisibility(true);
    this.view.flxReplyandSend.isVisible = true;
    this.view.flxAttachFile.setVisibility(false);
  },
  setSegHeight : function(){
    this.view.flxReply.setVisibility(true);
    this.view.txtAreaReply.setVisibility(false);
    //this.view.flxSegMessages.bottom = "60dp";
    this.view.txtAreaReply.setFocus(false);
    this.view.flxReplyandSend.isVisible = false;
  },
  setReply : function(){
    this.view.flxReplyandSend.isVisible = true;
    this.view.flxReply.setVisibility(false);
  },
  navigateBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  }
});