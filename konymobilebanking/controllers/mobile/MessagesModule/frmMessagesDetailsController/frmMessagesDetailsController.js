define({ 
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmMessagesDetailsPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
    this.setUIBasedOnSelectedTab();
    this.clearFieldsInForm();
    this.showReply();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  showReply : function(){
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmMessagesDetails"); 
    if(data.showReply && data.showReply===true)
      {
        this.setReplyBox();
        data.showReply = false;
        this.view.forceLayout();
        navManager.setCustomInfo("frmMessagesDetails",data);
      }
  },
  setPreshowData : function(){
    this.setMessageDetailsData();
    this.fv.submissionView(this.view.btnSend);
    this.view.customHeader.flxSearch.isVisible = true;
    this.view.customHeader.imgSearch.src = "addiconnoborder.png";
    this.view.customHeader.lblLocateUs.text = "MESSAGES";
    this.view.customHeader.btnRight.isVisible = false;
    this.view.txtAreaReply.isVisible = false;
    this.view.flxReplyandSend.isVisible = false;
    this.view.txtAreaReply.setEnabled(false);
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMessageDetailsMain.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMessageDetailsMain.top = "0dp";
    }
  },  
  postshow : function(){
   if(this.view.txtAreaReply.isVisible)
     {
       this.view.txtAreaReply.setEnabled(true);
       this.view.txtAreaReply.setFocus(true);
     }
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.postShow = this.postshow;
    this.view.customHeader.flxSearch.onClick = this.navToNewMessage;
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.flxReply.onClick = this.setReplyBox;
    // this.view.txtAreaReply.onEndEditing = this.setSegHeight;
    this.view.txtAreaReply.onDone = this.setReplyBack;
    this.view.btnTakeAPicture.onClick = this.openCamera;
    this.view.btnChooseFromDevice.onClick = this.openDocs;
    this.view.flxAttachFile.onClick = this.showDocumentpopup;
    this.view.btnSend.onClick = this.onSendingReply;
    this.view.btnRestore.onClick = this.onRestore; 
    this.view.flxDelete.onClick = this.onSelectDelete;
    this.view.txtAreaReply.onTextChange = this.replyMessage;
  },  
  setUIBasedOnSelectedTab : function(){
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    if(messagesMod.presentationController.messageTabSelected === "INBOX")
    {
      this.view.lblReply.text = "Reply";
      this.view.btnRestore.isVisible = false;
      this.view.flxReply.isVisible =  true;
    }
    else if(messagesMod.presentationController.messageTabSelected === "DELETED")
    {
      this.view.btnRestore.isVisible = true;
      this.view.flxReply.isVisible = false;
    }
  },  
  clearFieldsInForm : function(){
    this.view.txtAreaReply.text = "";
  },
  replyMessage : function(){
    var text = this.view.txtAreaReply.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },  
  goBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
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
  navToNewMessage : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.getCategories();
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
    this.view.txtAreaReply.setEnabled(true);
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
    if(kony.os.deviceInfo().name !== "iPhone"){
    this.view.txtAreaReply.setEnabled(false);
    this.view.flxReply.setVisibility(true);
   // this.view.txtAreaReply.setFocus(false);
   // this.view.txtAreaReply.setVisibility(false);
    //this.view.flxSegMessages.bottom = "60dp";
  //  this.view.txtAreaReply.setFocus(false);
    this.view.flxReplyandSend.isVisible = false;
   // this.view.btnFocusHandler.setFocus(true);
    }
    else{
      this.view.flxReply.setVisibility(true);
      this.view.flxReplyandSend.isVisible = false;
    }
  },
  setReply : function(){
    this.view.flxReplyandSend.isVisible = true;
    this.view.flxReply.setVisibility(false);
  },
  getScope:function(){
    var scope=this;
    return scope;
  }
});