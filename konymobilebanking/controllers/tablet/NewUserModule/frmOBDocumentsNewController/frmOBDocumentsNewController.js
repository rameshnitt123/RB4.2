define({ 

  base64 : null,
  flexState: {
    "address": "inactive",
    "employment": "inactive",
    "income": "inactive",
  },

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initHiddenElements();
    this.initActions();
    this.updateRightPane();

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.flxAddDocAddress.onClick = this.showPopupDocument.bind(this, "address");
    this.view.flxAddDocEmploymentProof.onClick = this.showPopupDocument.bind(this, "employment");
    this.view.flxAddDocIncome.onClick = this.showPopupDocument.bind(this, "income");

    this.view.camera.onCapture = this.captureAddressProofDocument.bind(this, this.flexId);

    this.view.flxChooseFromGallery.onClick = this.chooseFromGallary;

    this.view.flxDocs.onClick =  this.openPopupDeleteDocumentsAddress;
    this.view.flxDocsEmploymentProof.onClick =  this.openPopupDeleteDocumentsEmployment;
    this.view.flxDocsIncomeProof.onClick =  this.openPopupDeleteDocumentsIncome;

    this.view.flxViewDocument.onClick = this.showImageDocument;
    this.view.flxDeleteDoc.onClick = this.showDeleteDocument;
    this.view.flxCross.onClick = this.hideViewDocument;

    this.view.flxCancelButton.onClick = this.onClosePopup;
    this.view.flxCancel.onClick = this.onClosePopup;
    this.view.btnContinueDocuments.onClick = this.onSubmitDocuments;
  },	

  initHiddenElements: function() {
    this.view.flxPopupDocuments.setVisibility(false);
    this.view.flxPopupDeleteDocuments.setVisibility(false);
    this.view.flxViewDocuments.setVisibility(false);
  },

  showPopupDocument: function(documentType) {
    this.flexId = documentType;
    this.view.flxPopupDocuments.setVisibility(true);
  },

  captureAddressProofDocument: function(flexId) {
    this.view.flxPopupDocuments.setVisibility(false);
    var rawBytes = this.view.camera.rawBytes;
    var imageObject = kony.image.createImage(rawBytes);
    imageObject.scale(0.5);
    imageObject.compress(0.5);
    var rawBytesAfterCompression = imageObject.getImageAsRawBytes();
    this.base64 = kony.convertToBase64(rawBytesAfterCompression); 
    this.setCameraThumbNailImage(this.flexId);
    this.checkContinueBtnActive();
    this.view.camera.releaseRawBytes();
    this.view.forceLayout();
  },

  setCameraThumbNailImage: function(flexId) {
    var UplaodDetails;
    var image;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    switch (this.flexId) {
      case "address":
        this.view.imgDoc1.base64 = this.base64;
        UplaodDetails = {
          "documentType" : this.flexId,
          "document" : this.view.imgDoc1.base64          
        };
        this.view.flxDocs.setVisibility(true);
        this.view.flxAddDocAddress.setVisibility(false);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        NUOMod.presentationController.uploadDocument(UplaodDetails);  
        break;
      case "employment":
        this.view.imgDocEmploymentProof.base64 = this.base64;
        UplaodDetails = {
          "documentType" : this.flexId,
          "document" : this.view.imgDocEmploymentProof.base64          
        };
        this.view.flxDocsEmploymentProof.setVisibility(true);
        this.view.flxAddDocEmploymentProof.setVisibility(false);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        NUOMod.presentationController.uploadDocument(UplaodDetails);  
        break;
      case "income":
        this.view.imgDocIncomeProof.base64 = this.base64;
        UplaodDetails = {
          "documentType" : this.flexId,
          "document" : this.view.imgDocIncomeProof.base64          
        };
        this.view.flxDocsIncomeProof.setVisibility(true);
        this.view.flxAddDocIncome.setVisibility(false);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        NUOMod.presentationController.uploadDocument(UplaodDetails);  
        break;
    } 
  },

  chooseFromGallary: function() {
    this.onClickOfSelecfromGallery();
  },

  onClickOfSelecfromGallery: function() {
    var self = this;
    this.view.flxPopupDocuments.setVisibility(false);
    var queryContext = {
      mimetype: "image/*"
    };
    try {
      kony.phone.openMediaGallery(gallerySelectionCallback.bind(self), queryContext);
    } catch (error) {
      handleError(error);
    }

    function gallerySelectionCallback(rawBytes, permissionStatus) {
      var self = this;
      kony.print("-- gallerySelectionCallback:  Start--");
      if (rawBytes !== null) {
        this.base64 = kony.convertToBase64(rawBytes);
        if (this.base64) {             
          self.setCameraThumbNailImage();
        }          
      } else if (permissionStatus == kony.application.PERMISSION_DENIED) {
        alert("Permission Denied to Access the Photo Gallery");
      } else {
        alert("No Image Selected !");
      }
    }
  },

  onClosePopup: function () {
    this.view.flxPopupDocuments.setVisibility(false);
    this.view.flxPopupDeleteDocuments.setVisibility(false);
  },

  openPopupDeleteDocumentsAddress: function() {
    this.flexState.address = "active";
    this.flexState.employment = "inactive";
    this.flexState.income = "inactive";
    this.view.flxPopupDeleteDocuments.setVisibility(true);
  },

  openPopupDeleteDocumentsEmployment: function() {
    this.flexState.address = "inactive";
    this.flexState.employment = "active";
    this.flexState.income = "inactive";
    this.view.flxPopupDeleteDocuments.setVisibility(true);
  },

  openPopupDeleteDocumentsIncome: function() {
    this.flexState.address = "inactive";
    this.flexState.employment = "inactive";
    this.flexState.income = "active";
    this.view.flxPopupDeleteDocuments.setVisibility(true);
  },

  showImageDocument: function() {
    this.view.imgDocument.base64 = this.base64;
    this.view.flxPopupDeleteDocuments.setVisibility(false);   
    this.view.flxViewDocuments.setVisibility(true);
  },

  hideViewDocument: function() {
    this.view.flxViewDocuments.setVisibility(false);
    this.view.flxPopupDeleteDocuments.setVisibility(true);
  },

  showDeleteDocument: function() {
    if (this.flexState.address == "active") {
      showFlex = "address";
    } else if (this.flexState.employment == "active") {
      showFlex = "employment";
    } else {
      showFlex = "income";
    }
    switch (showFlex) {
      case "address":
        this.view.imgDoc1.base64 = "";
        this.view.flxPopupDeleteDocuments.setVisibility(false);
        this.view.flxDocs.setVisibility(false);
        this.view.flxAddDocAddress.setVisibility(true);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        this.flexReset();
        break;
      case "employment":
        this.view.imgDocEmploymentProof.base64 = "";
        this.view.flxPopupDeleteDocuments.setVisibility(false);
        this.view.flxDocsEmploymentProof.setVisibility(false);
        this.view.flxAddDocEmploymentProof.setVisibility(true);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        this.flexReset();
        break;
      case "income":
        this.view.imgDocIncomeProof.base64 = "";
        this.view.flxPopupDeleteDocuments.setVisibility(false);
        this.view.flxDocsIncomeProof.setVisibility(false);
        this.view.flxAddDocIncome.setVisibility(true);
        this.checkContinueBtnActive();
        this.view.forceLayout();
        this.flexReset();
        break;  
    }
  },

  flexReset: function() {
    this.flexState.address = "inactive";
    this.flexState.employment = "inactive";
    this.flexState.income = "inactive";
  },

  checkContinueBtnActive: function() {
    var address =  this.view.flxDocs.isVisible;
    var proof =  this.view.flxDocsEmploymentProof.isVisible;
    var income =  this.view.flxDocsIncomeProof.isVisible;
    var changeState = address && proof && income;
    this.view.btnContinueDocuments.skin = changeState ?
      "sknBtn0a78d1ffffffTab" : 
    "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },

  onSubmitDocuments : function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.createPersonalInfo(); 
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  handleCancelAction: function() {
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
  },

  updateRightPane: function() {
    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    var productsCount = navManager.getCustomInfo("selectedUserProduct").productsCount;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var ssn = NUOMod.presentationController.getUserData().ssn;
    var ssnLength = ssn.length;
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();
    rightPane.lblThirdCheckedRowName.text = eligibility;
    rightPane.lblFifthCheckedRowName.text = parseInt(productsCount).toString() + " selected";
    rightPane.lblSeventhCheckedRowName.text = "XXX-XX-" + ssn.substr(ssnLength - 4);
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
    var delta = 1;
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  }
});