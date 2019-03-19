define({
  base64 : null,
  base64Image : null,
  preShow: function () {
    this.showEnterPersonalInfoDocuments();
  },
  showEnterPersonalInfoDocuments: function () {
    var scope = this;
    this.view.imgAddressProof.onTouchEnd = function () {
      scope.addAddressProof();
    };
    this.view.imgEmploymentProof.onTouchEnd = function () {
      scope.addEmployeeProof();
    };
    this.view.imgIncomeProof.onTouchEnd = function () {
      scope.addIncomeProof();
    };
    this.view.btnContinueDocuments.onClick = function () {
      scope.navToSecurityQuestions();
    };
    this.view.btnSkipDocuments.onClick = function () {
      scope.navToSecurityQuestions();
    };
    this.view.customHeaderPersonalInfo.flxBack.onClick = function(){
      var nav2 = new kony.mvc.Navigation("frmOBFinancialInfoExpenditure");
      nav2.navigate();
    };
    this.view.flxPopupDocuments.onClick = function () {
      scope.view.flxPopupDocuments.isVisible = false;
    };
    this.view.btnChooseFromGallery.onClick = function () {
      scope.onClickOfSelecfromGallery();
      scope.view.flxPopupDocuments.isVisible = false;
    };
    this.view.flxClose.onTouchEnd = function () {
      scope.onClickCancelAddressProof();
    };
    this.view.flxClose1.onTouchEnd = function () {
      scope.onClickCancelEmployeeProof();
    };  
    this.view.flxClose2.onTouchEnd = function () {
      scope.onClickCancelIncomeProof();
    };
  },
  navToSecurityQuestions : function(){
    var nav2 = new kony.mvc.Navigation("frmOBSecurityQuestions");
    nav2.navigate();
  },

  /**
 * function captureAddressProofDocument
 * click on Take a Picture
 */
  captureAddressProofDocument : function() {
    this.view.flxPopupDocuments.isVisible = false;
    var rawBytes = this.view.camera.rawBytes;
    var imageObject=kony.image.createImage(rawBytes);
    imageObject.scale(0.5);
    imageObject.compress(0.5);
    var rawBytesAfterCompression=imageObject.getImageAsRawBytes();
    this.base64Image=kony.convertToBase64(rawBytesAfterCompression); 
    this.setCameraThumbNailImage();
    // Release image from memory
    this.base64Image=null;
    this.view.camera.releaseRawBytes();
  },

  /**
 * function onClickOfSelecfromGallery
 * click on Choose from Gallery
 */
  onClickOfSelecfromGallery : function() {
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
    if(this.view.lbladdress.isVisible === true){
      this.view.imgUpload.base64 = this.base64;
      this.view.imgAddressProof.isVisible = false;
      this.view.lbladdress.isVisible = false;
      this.view.flxUploadOption.isVisible = true;
      this.view.flxClose.isVisible = true;
      var DocumentType = "Address"; 
      var image = this.view.imgUpload.base64;
      var UplaodDetails = {
        "documentType" : DocumentType,
        "document" : image          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails);  
    } else if(this.view.lblEmployee.isVisible === true){
      this.view.imgUpload1.base64 = this.base64;
      this.view.imgEmploymentProof.isVisible = false;
      this.view.lblEmployee.isVisible = false;
      this.view.flxUploadOption1.isVisible = true;
      this.view.flxClose1.isVisible = true;

      var DocumentType1 = "Employment"; 
      var image1 = this.view.imgUpload1.base64;
      var UplaodDetails1 = {
        "documentType" : DocumentType1,
        "document" : image1          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails1); 
    } else if(this.view.lblIncome.isVisible === true){
      this.view.imgUpload2.base64 = this.base64;
      this.view.imgIncomeProof.isVisible = false;
      this.view.lblIncome.isVisible = false;
      this.view.flxUploadOption2.isVisible = true;
      this.view.flxClose2.isVisible = true;

      var DocumentType2 = "Income"; 
      var image2 = this.view.imgUpload2.base64;         
      var UplaodDetails2 = {
        "documentType" : DocumentType2,
        "document" : image2          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails2); 
    }         
  },
  setCameraThumbNailImage : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(this.view.lbladdress.isVisible === true){
      this.view.imgUpload.base64 = this.base64Image;
      this.view.imgAddressProof.isVisible = false;
      this.view.lbladdress.isVisible = false;
      this.view.flxUploadOption.isVisible = true;
      this.view.flxClose.isVisible = true;
      var DocumentType = "Address"; 
      var image = this.view.imgUpload.base64;
      var UplaodDetails = {
        "documentType" : DocumentType,
        "document" : image          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails); 
    } else if(this.view.lblEmployee.isVisible === true){
      this.view.imgUpload1.base64 = this.base64Image;
      this.view.imgEmploymentProof.isVisible = false;
      this.view.lblEmployee.isVisible = false;
      this.view.flxUploadOption1.isVisible = true;
      this.view.flxClose1.isVisible = true;

      var DocumentType1 = "Employment"; 
      var image1 = this.view.imgUpload1.base64;
      var UplaodDetails1 = {
        "documentType" : DocumentType1,
        "document" : image1          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails1); 
    } else if(this.view.lblIncome.isVisible === true){
      this.view.imgUpload2.base64 = this.base64Image;
      this.view.imgIncomeProof.isVisible = false;
      this.view.lblIncome.isVisible = false;
      this.view.flxUploadOption2.isVisible = true;
      this.view.flxClose2.isVisible = true;

      var DocumentType2 = "Income"; 
      var image2 = this.view.imgUpload2.base64;         
      var UplaodDetails2 = {
        "documentType" : DocumentType2,
        "document" : image2          
      };
      NUOMod.presentationController.uploadDocument(UplaodDetails2); 
    }         
  },
  addIncomeProof : function(){
    this.view.flxPopupDocuments.isVisible = true;
    this.view.imgUpload2.isVisible = true;
    this.view.lblIncome.isVisible = true;
    this.view.lbladdress.isVisible = false;
    this.view.lblEmployee.isVisible = false;
  },
  addAddressProof : function(){
    this.view.flxPopupDocuments.isVisible = true;
    this.view.imgUpload.isVisible = true;
    this.view.lbladdress.isVisible = true;
    this.view.lblIncome.isVisible = false;
    this.view.lblEmployee.isVisible = false;
  },
  addEmployeeProof : function(){
    this.view.flxPopupDocuments.isVisible = true;
    this.view.imgUpload1.isVisible = true;
    this.view.lblEmployee.isVisible = true;
    this.view.lblIncome.isVisible = false;
    this.view.lbladdress.isVisible = false;
  },
  onClickofContinue : function(){
    var sqPre = applicationManager.getNewUserPresentationController();
    sqPre.getSeqQuestions();
  },
  onClickCancelAddressProof : function(){
    this.view.flxUploadOption.isVisible = false;
    this.view.flxClose.isVisible = false;
    this.view.imgAddressProof.isVisible = true;
    this.view.imgUpload.base64 = "";
  },
  onClickCancelEmployeeProof : function(){
    this.view.flxUploadOption1.isVisible = false;
    this.view.flxClose1.isVisible = false;
    this.view.imgEmploymentProof.isVisible = true;
    this.view.imgUpload1.base64 = "";
  },
  onClickCancelIncomeProof : function(){
    this.view.flxUploadOption2.isVisible = false;
    this.view.flxClose2.isVisible = false;
    this.view.imgIncomeProof.isVisible = true;
    this.view.imgUpload2.base64 = "";
  }
});