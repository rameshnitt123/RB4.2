define({ 
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmNewMessagePreShow : function(){
    this.setPreShowData();
    this.setFlowActions();
    this.clearFieldsInForm();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  onTextChange : function () {
    var ENABLE_SKIN = "sknBtnBg0A78D1SSP30PxTab";
    var DISABLE_SKIN = "sknBtnBgF9F9F930PxTab";
    
    var isEmpty = this.view.txtareaDescription.text === 0 && this.view.tbxSubject.text === 0;
   
    this.view.btnSend.setEnabled(!isEmpty);
    this.view.btnSend.skin = isEmpty ? DISABLE_SKIN : ENABLE_SKIN;
  },
  
  setPreShowData : function(){
    this.fv.submissionView(this.view.btnSend);
    
    this.view.btnSend.skin = "sknBtnBgF9F9F930PxTab";
    this.view.btnSend.setEnabled(false);
    
    this.view.customHeader.flxSearch.isVisible = false;
    this.view.customHeader.btnRight.text = "CANCEL";
    this.view.customHeader.lblLocateUs.text = "NEW MESSAGE";
    this.view.customHeader.btnRight.isVisible = true;
    this.view.flxPopupAttachment.setVisibility(false);
     var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
        this.view.flxNewMessageMain.top = "56dp";
      }
      else{
        this.view.flxHeader.isVisible = false;
        this.view.flxNewMessageMain.top = "0dp";
      }  
    this.view.flxAttachFile.setVisibility(false);
    this.view.segAttachments.setVisibility(false);
  },
  clearFieldsInForm : function(){
    this.view.tbxSubject.text = "";
    this.view.txtareaDescription.text = "";
  },
  setFlowActions : function(){
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.customHeader.btnRight.onClick = this.onCancel;
    this.view.btnSend.onClick = this.onSend;
    this.view.tbxSubject.onTextChange = this.checkMessageSubject;
    this.view.txtareaDescription.onTextChange = this.checkMessageDescription;

    //     this.view.flxAttachFile.onClick = function(){
    //       scopeObj.showattachmentpopup();
    //     };
    //     this.view.btnTakeAPicture.onClick = function(){
    //       scopeObj.openCamera();
    //     };
    //     this.view.btnChooseFromDevice.onClick = function(){
    //       scopeObj.openDocs();
    //     };
  },
  checkMessageSubject : function(){
    var text = this.view.tbxSubject.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  checkMessageDescription : function(){
    var text = this.view.txtareaDescription.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  goBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
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
  onCancel : function(){
    var msgText = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.CancelNewMessageAlert");
    var basicConfig = {message: msgText,alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.messages.DeleteMessage"),yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                       noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: this.onConfirmCancel
                      };                                                
    var pspConfig = {};                                                                                           
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
  },
  onConfirmCancel : function(response){
    if(response === true)
    {
      this.navToMessages();
    }
  },
  onSend : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var selectedCategoryId = navManager.getCustomInfo("frmNewMessage");
    var description = this.view.txtareaDescription.text;
    var data = {
      "requestsubject" :this.view.tbxSubject.text,
      "messagedescription" : Base64.encode(description),
      "requestcategory_id" : selectedCategoryId
    };
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.createNewMessage(data); 
  },

  //   showattachmentpopup : function(){
  //     this.view.flxPopupAttachment.setVisibility(true);
  //   },
  //   openCamera : function(){
  //     this.view.flxPopupAttachment.setVisibility(false);
  //     var rawBytes = this.view.camera.rawBytes;
  //     var imageObject=kony.image.createImage(rawBytes);
  //     imageObject.scale(0.5);
  //     imageObject.compress(0.5);
  //     var rawBytesAfterCompression=imageObject.getImageAsRawBytes();
  //     base64Image=kony.convertToBase64(rawBytesAfterCompression); 
  //     this.setCameraThumbNailImage();
  //     // Release image from memory
  //     base64Image=null;
  //     this.view.camera.releaseRawBytes();
  //   },
  //   openDocs : function(){
  //     this.view.flxPopupAttachment.setVisibility(false);
  //   },

});