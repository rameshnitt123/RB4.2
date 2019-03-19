define({
  //clickedDocType : null, 
  documentType : null,
  flowType : null,
  base64 : null,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var scope = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      scope.view.flxHeader.isVisible = true;
    }
    else{
      scope.view.flxHeader.isVisible = false;
    }
    this.view.flxViewDocument.setVisibility(false);
    this.view.flxPopupDocuments.setVisibility(false);
//     this.view.flxDoc1.setVisibility(true);
//     this.view.flxDocEmploymentProof.setVisibility(true);
//     this.view.flxDocIncomeProof.setVisibility(true);
    this.view.lblDoc1.setVisibility(false);
    this.view.lblDocEmploymentProof.setVisibility(false);
    this.view.lblDocIncomeProof.setVisibility(false);
    this.view.lblDocName.setVisibility(false);
    this.view.flxAddDocAddress.onClick = function(){
      scope.flowType = "add";
      scope.openPopupDocument();
      scope.addAddressProof();
      //scope.clickedDocType = scope.view.flxDoc1;
    };
    this.view.flxAddDocEmploymentProof.onClick = function(){
      scope.flowType = "add";
      scope.openPopupDocument();
      scope.addEmployeeProof();
      //scope.clickedDocType = scope.view.flxDocEmploymentProof;
    };
    this.view.flxAddDocIncome.onClick = function(){
      scope.flowType = "add";
      scope.openPopupDocument();
      scope.addIncomeProof();
      //scope.clickedDocType = scope.view.flxDocIncomeProof;
    };
    this.view.camera.onCapture = function(){
      scope.captureAddressProofDocument();
      //scope.addDoc(scope.clickedDocType);
    };
    this.view.btnTakeAPicture.onClick = function(){
      scope.view.imgDocument.base64 = scope.base64;
      scope.view.flxPopupDocuments.setVisibility(false);
      scope.view.flxViewDocument.setVisibility(true);
      scope.view.forceLayout();
    };
//     this.view.flxViewDocument.onClick = function(){
//       scope.view.flxViewDocument.setVisibility(false);
//     };
    this.view.flxDoc1.onClick = function(){
      scope.flowType = "edit";
      scope.documentType = "address";
      scope.base64 = scope.view.imgDoc1.base64;
      scope.openPopupDocument();
    };
    this.view.flxDocEmploymentProof.onClick = function(){
      scope.flowType = "edit";
      scope.documentType = "employee";
      scope.base64 = scope.view.imgDocEmploymentProof.base64;
      scope.openPopupDocument();
    };
    this.view.flxDocIncomeProof.onClick = function(){
      scope.flowType = "edit";
      scope.documentType = "income";
      scope.base64 = scope.view.imgDocIncomeProof.base64;
      scope.openPopupDocument();
    };
    this.view.btnChooseFromGallery.onClick = this.onSelectFromGallery;
    this.view.btnContinueDocuments.onClick = this.onSubmitDocuments;
    this.view.btnDelete.onClick = this.onDelete;
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.view.flxPopupDocuments.onClick = this.onClosePopup;
    this.view.flxBack.onClick = this.onCloseViewDocument;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onCloseViewDocument : function(){
    this.view.flxViewDocument.setVisibility(false);
  },
  onClosePopup : function () {
    this.view.flxPopupDocuments.setVisibility(false);
  },
  onDelete : function(){
    this.onDeleteDocument(this.documentType);
    this.view.flxViewDocument.setVisibility(false);
  },
  onSubmitDocuments : function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.createPersonalInfo(); 
  },
  onBack : function () {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onClose : function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  onSelectFromGallery : function(){
    if(this.flowType === "add"){
      this.onClickOfSelecfromGallery();
      //this.addDoc(scope.clickedDocType);
    }
    else
    {
      this.onDeleteDocument(this.documentType);
    }
  },
  onDeleteDocument : function(documentType){
    if(documentType === "address"){
      this.view.flxDoc1.isVisible = false;
      this.view.flxClose.isVisible = false;
      this.view.imgAddressProof.isVisible = true;
      this.view.imgDoc1.base64 = "";
    }
    if(documentType === "employee"){
      this.view.flxDocEmploymentProof.isVisible = false;
      this.view.flxCloseEmploymentProof.isVisible = false;
      this.view.imgEmploymentProof.isVisible = true;
      this.view.imgDocEmploymentProof.base64 = "";
    }
    if(documentType === "income"){
      this.view.flxDocIncomeProof.isVisible = false;
      this.view.flxCloseIncomeProof.isVisible = false;
      this.view.imgIncomeProof.isVisible = true;
      this.view.imgDocIncomeProof.base64 = "";
    }
    this.view.flxPopupDocuments.setVisibility(false);
    this.view.forceLayout();
  },
  takePictureIphone : function(){
    this.view.camera.onCapture();
  },
  openPopupDocument : function(){
    if(applicationManager.getDeviceUtilManager().isIPhone()){
      var actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":null,
          "message":null,
          "showCompletionCallback": null
        }
      );
      var actionTakeAPicture = new kony.ui.ActionItem(
        {
          "title":"TAKE A PICTURE",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.takePictureIphone
        }
      );
      var actionViewDocument = new kony.ui.ActionItem(
        {
          "title":"VIEW DOCUMENT",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.btnTakeAPicture.onClick
        }
      );
      var actionDeleteDocument = new kony.ui.ActionItem(
        {
          "title":"DELETE DOCUMENT",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.btnChooseFromGallery.onClick
        }
      );
      var actionChooseFromGallery = new kony.ui.ActionItem(
        {
          "title":"CHOOSE FROM GALLERY",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.btnChooseFromGallery.onClick
        }
      );
      var actionCancel = new kony.ui.ActionItem(
        {
          "title":"Cancel",
          "style":constants.ACTION_ITEM_STYLE_CANCEL,
          "action": null
        }
      );
      if (this.flowType === "add"){
        actionSheetObject.addAction(actionTakeAPicture);
        actionSheetObject.addAction(actionChooseFromGallery);
        actionSheetObject.addAction(actionCancel);
      }
      else{
        actionSheetObject.addAction(actionViewDocument);
        actionSheetObject.addAction(actionDeleteDocument);
        actionSheetObject.addAction(actionCancel);
      }
      actionSheetObject.show();
    }
    else{
      this.view.flxPopupDocuments.setVisibility(true);
      if(this.flowType === "add"){
        this.view.camera.setVisibility(true);
        this.view.btnTakeAPicture.setVisibility(false);
        this.view.btnChooseFromGallery.text = "CHOOSE FROM GALLERY";
      }
      else
      {
        this.view.camera.setVisibility(false);
        this.view.btnTakeAPicture.setVisibility(true);
        this.view.btnTakeAPicture.text = "VIEW DOCUMENT";
        this.view.btnChooseFromGallery.text = "DELETE DOCUMENT";
      }
      this.view.forceLayout(); 
    }
  },
  addAddressProof : function(){
    this.view.imgDoc1.isVisible = true;
    this.view.lblDoc1.isVisible = true;
    this.view.lblDocIncomeProof.isVisible = false;
    this.view.lblDocEmploymentProof.isVisible = false;
    this.view.forceLayout();
  },
  addEmployeeProof : function(){
    this.view.imgDocEmploymentProof.isVisible = true;
    this.view.lblDocEmploymentProof.isVisible = true;
    this.view.lblDocIncomeProof.isVisible = false;
    this.view.lblDoc1.isVisible = false;
    this.view.forceLayout();
  },
  addIncomeProof : function(){
    this.view.imgDocIncomeProof.isVisible = true;
    this.view.lblDocIncomeProof.isVisible = true;
    this.view.lblDoc1.isVisible = false;
    this.view.lblDocEmploymentProof.isVisible = false;
    this.view.forceLayout();
  },
  captureAddressProofDocument : function() {
    this.view.flxPopupDocuments.setVisibility(false);
    var rawBytes = this.view.camera.rawBytes;
    var imageObject=kony.image.createImage(rawBytes);
    imageObject.scale(0.5);
    imageObject.compress(0.5);
    var rawBytesAfterCompression=imageObject.getImageAsRawBytes();
    this.base64=kony.convertToBase64(rawBytesAfterCompression); 
    this.setCameraThumbNailImage();
    // Release image from memory
    //this.base64=null;
    this.view.camera.releaseRawBytes();
    this.view.forceLayout();
  },
  onClickOfSelecfromGallery : function() {
    this.view.flxPopupDocuments.setVisibility(false);
    kony.print("-- showMediaGallery:  Start--");
    var queryContext = {
      mimetype: "image/png"
    };
    try {
      kony.phone.openMediaGallery(this.gallerySelectionCallback.bind(this), queryContext);
    } catch (error) {
      handleError(error);
    }
    kony.print("-- showMediaGallery:  End--");
  },
  gallerySelectionCallback : function(rawBytes, permissionStatus){
    kony.print("-- gallerySelectionCallback:  Start--");
    if (rawBytes !== null) {
      this.base64 = kony.convertToBase64(rawBytes);
      if ((this.base64 !== null) && (this.base64 !== undefined) && (this.base64 !== "")) {             
        this.setThumbNailImage();
      }          
      else if (permissionStatus == kony.application.PERMISSION_DENIED) {
        alert("Permission Denied to Access the Photo Gallery");
      } else {
        alert("No Image Selected !");
      }
    }
    kony.print("-- gallerySelectionCallback:  End--");
  },
  setThumbNailImage : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(this.view.lblDoc1.isVisible === true){
      this.view.imgDoc1.base64 = this.base64;
      this.view.imgAddressProof.isVisible = false;
      //this.view.lblDoc1.isVisible = false;
      this.view.flxDoc1.isVisible = true;
      //this.view.flxClose.isVisible = true;
      var DocumentType = "Address"; 
      var image = this.view.imgDoc1.base64;
      var UplaodDetails = {
        "documentType" : DocumentType,
        "document" : image          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails);  
    } else if(this.view.lblDocEmploymentProof.isVisible === true){
      this.view.imgDocEmploymentProof.base64 = this.base64;
      this.view.imgEmploymentProof.isVisible = false;
      //this.view.lblDocEmploymentProof.isVisible = false;
      this.view.flxDocEmploymentProof.isVisible = true;
      //this.view.flxCloseEmploymentProof.isVisible = true;

      var DocumentType1 = "Employment"; 
      var image1 = this.view.imgDocEmploymentProof.base64;
      var UplaodDetails1 = {
        "documentType" : DocumentType1,
        "document" : image1          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails1); 
    } else if(this.view.lblDocIncomeProof.isVisible === true){
      this.view.imgDocIncomeProof.base64 = this.base64;
      this.view.imgIncomeProof.isVisible = false;
      //this.view.lblDocIncomeProof.isVisible = false;
      this.view.flxDocIncomeProof.isVisible = true;
      //this.view.flxCloseIncomeProof.isVisible = true;

      var DocumentType2 = "Income"; 
      var image2 = this.view.imgDocIncomeProof.base64;         
      var UplaodDetails2 = {
        "documentType" : DocumentType2,
        "document" : image2          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails2); 
    }
    this.view.forceLayout();
  },
  setCameraThumbNailImage : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(this.view.lblDoc1.isVisible === true){
      this.view.imgDoc1.base64 = this.base64;
      this.view.imgAddressProof.isVisible = false;
      this.view.lblDoc1.isVisible = false;
      this.view.flxDoc1.isVisible = true;
      //this.view.flxClose.isVisible = true;
      var DocumentType = "Address"; 
      var image = this.view.imgDoc1.base64;
      var UplaodDetails = {
        "documentType" : DocumentType,
        "document" : image          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails); 
    } else if(this.view.lblDocEmploymentProof.isVisible === true){
      this.view.imgDocEmploymentProof.base64 = this.base64;
      this.view.imgEmploymentProof.isVisible = false;
      this.view.lblDocEmploymentProof.isVisible = false;
      this.view.flxDocEmploymentProof.isVisible = true;
      //this.view.flxCloseEmploymentProof.isVisible = true;

      var DocumentType1 = "Employment"; 
      var image1 = this.view.imgDocEmploymentProof.base64;
      var UplaodDetails1 = {
        "documentType" : DocumentType1,
        "document" : image1          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails1); 
    } else if(this.view.lblDocIncomeProof.isVisible === true){
      this.view.imgDocIncomeProof.base64 = this.base64;
      this.view.imgIncomeProof.isVisible = false;
      this.view.lblDocIncomeProof.isVisible = false;
      this.view.flxDocIncomeProof.isVisible = true;
      //this.view.flxCloseIncomeProof.isVisible = true;

      var DocumentType2 = "Income"; 
      var image2 = this.view.imgDocIncomeProof.base64;         
      var UplaodDetails2 = {
        "documentType" : DocumentType2,
        "document" : image2          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails2); 
    }      
    this.view.forceLayout();
  },
  addDoc : function(parentFlex){
    var noc =parentFlex.widgets().length;
    var newTextTag = this.view.flxDoc1.clone(parentFlex.widgets().length+1); 
    parentFlex.addAt(newTextTag, 100); 
    if(noc%2==1){
      newTextTag.left="50%";
      newTextTag.top=(((noc/2)*50)-25)+"dp";
    } else{
      newTextTag.left="0%";
      newTextTag.top=((noc/2)*50)+"dp";
    }
  }
});