 define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
    this.setCameraProperties();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    this.view.flxEditOptions.setVisibility(false);
    this.view.flxEditProfilePicture.setVisibility(false);
    this.setDetailsData();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
  },
  setFlowActions : function(){
    var scope = this;
//     this.view.flxEditOptions.onClick = function(){
//       scope.showOptions();
//     };
    this.view.flxChangeProfilePicture.onClick = function(){
      scope.showChangeProfileOptions();
    };
    this.view.flxEditPhoneNumbers.onClick = function(){
      scope.navToEditPhoneNumber();
    };
    this.view.flxEditEmail.onClick = function(){
      scope.navToEditEmail();
    };
    this.view.flxEditAddress.onClick = function(){
      scope.navToEditAddress();
    };
    this.view.cameraWidget.onCapture = function(){
      scope.onClickTakePicture();
      scope.view.flxEditProfilePicture.setVisibility(false);
      scope.view.flxEditOptions.setVisibility(false);
    };
    this.view.flxChoose.onClick = function(){
      scope.onClickChooseFromGallery();
      scope.view.flxEditProfilePicture.setVisibility(false);
      scope.view.flxEditOptions.setVisibility(false);
    };
    this.view.customHeader.btnRight.onClick = function(){
      scope.showOptions();
    };
    this.view.flxTop.onClick = function(){
      scope.view.flxEditOptions.setVisibility(false);
    };
    this.view.flxTopProfile.onClick = function(){
      scope.view.flxEditProfilePicture.setVisibility(false);
    };
    this.view.customHeader.flxBack.onClick = function(){
      var nav = applicationManager.getNavigationManager();
      nav.goBack();
    };
  },
   
   onClickTakePicture : function(){
     //alert("in take picture");
     //#ifdef android
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
     //#endif
     var rawBytes = this.view.cameraWidget.rawBytes;//kony.convertToBase64(imgData.rawBytes);
     this.imageRawBytes = rawBytes;
     //var imageObject=kony.image.createImage(rawBytes);
     //imageObject.scale(0.5);
     //imageObject.compress(0.5);
     //var rawBytesAfterCompression=imageObject.getImageAsRawBytes();
     var base64Image=kony.convertToBase64(rawBytes);//rawBytesAfterCompression);
     if(base64Image){
       var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
           settingsMode.presentationController.uploadProfilePicture(base64Image);
     }
   },
   
   onClickChooseFromGallery : function(){
     var scope = this;
     var queryContext = {
            mimetype: "image/*"
        };
     kony.phone.openMediaGallery(gallerySelectionCallback, queryContext);
     
     function gallerySelectionCallback(rawBytes,permissionStatus){
       if(rawBytes !== null && rawBytes !== ""){
         scope.imageRawBytes = rawBytes;
         var base64 = kony.convertToBase64(rawBytes);
         if(base64 !== null && base64 !== undefined && base64 !== ""){
           var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
           settingsMode.presentationController.uploadProfilePicture(base64);
         }
         else if(permissionStatus == kony.application.PERMISSION_DENIED){
           var i18nPermission = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.gallery.permissionDenied");
           scope.bindViewError(i18nPermission);
            } else {
              var i18nNo = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.gallery.noImageSelected");
              scope.bindViewError(i18nNo);
            }
         }
       }
   },
   
   bindUploadedImage : function(){
     var rawBytes = this.imageRawBytes;
     this.imageRawBytes = "";
     if(rawBytes){
       var deviceUtilManager = applicationManager.getDeviceUtilManager();
       var isIphone = deviceUtilManager.isIPhone();
       if(isIphone) {
         var base64Str = kony.convertToBase64(rawBytes);
         this.view.imgUser.base64 = base64Str;
       }
       else {
         var base64Str = kony.convertToBase64(rawBytes);
         this.view.imgUser.base64 = base64Str;
       }
       rawBytes = "";
     }
   },
   
  setDetailsData : function(){
    var dataMap = {
      "flxDetails": "flxDetails",
      "flxMain" : "flxMain",
      "flxDetailsHeader": "flxDetailsHeader",
      "flxHeader": "flxHeader",
      "flxHeaderShadow": "flxHeaderShadow",
      "flxSeparator": "flxSeparator",
      "lblDetail": "lblDetail",
      "lblDetailValue": "lblDetailValue",
      "lblHeader": "lblHeader"    
    };
   /* var data = [
      [
        {},
        [{
          "lblDetail": "Date of Birth (DOB)",
          "lblDetailValue": "12/13/1945",
          "template" : "flxDetails"
        },
         {
           "lblDetail": "Social Security Number (SSN)",
           "lblDetailValue": "***-**-0116",
           "flxSeparator": {"isVisible" : false},
           "template" : "flxDetails"
         }]],
      [{
        "lblHeader": "Registered Phone Number" ,
        "template" : "flxDetailsHeader"
      },
       [ {
         "lblDetail": "Home (Marked as Primary)",
         "lblDetailValue": "(358) 673-0116",
         "template" : "flxDetails"
       },
        {
          "lblDetail": "Mobile",
          "lblDetailValue": "+91-358-673-0116",
          "template" : "flxDetails"
        },
        {
          "lblDetail": "Work (International)",
          "lblDetailValue": "(358) 673-0117",
          "flxSeparator": {"isVisible" : false},
          "template" : "flxDetails"
        }]
      ],
      [{
        "lblHeader": "Registered Emial ID's" ,
        "template" : "flxDetailsHeader"
      },
       [ {
         "lblDetail": "Primary Email ID",
         "lblDetailValue": "alec.torp@yahoo.com",
         "template" : "flxDetails"
       },
        {
          "lblDetail": "Optional Email ID 01",
          "lblDetailValue": "isaac_huel@kub.org",
          "flxSeparator": {"isVisible" : false},
          "template" : "flxDetails"
        },
       ]
      ],
      [{
        "lblHeader": "Registered Addresses" ,
        "template" : "flxDetailsHeader"
      },
       [ {
         "lblDetail": "Home Address (Marked as communicating address)",
         "lblDetailValue": "2211 North Orange Blossom Trail,Orlando, FL, United States",
         "template" : "flxDetails"
       },
        {
          "lblDetail": "Office Address",
          "lblDetailValue": "2211 North Orange Blossom Trail,Orlando, FL, United States",
          "flxSeparator": {"isVisible" : false},
          "template" : "flxDetails"
        },
       ]
      ]
    ];
    */
    var nav = applicationManager.getNavigationManager();
    var data = nav.getCustomInfo('frmProfilePersonalDetails');
    //alert(JSON.stringify(data));
    var name = nav.getCustomInfo('frmProfilePersonalDetails1');
    this.view.lblUSer.text = name;
    kony.print("$$$$$####   data is "+JSON.stringify(data)+" &&&&&");
    this.view.segDetails.widgetDataMap = dataMap;
    this.view.segDetails.setData(data);
    this.view.forceLayout();
  },
  navToChangeProfilePicture : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmChangeProfilePicture");
  },
  navToEditPhoneNumber : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.navigateToEditPhoneNumber({"flow":"null"});
  },
  navToEditEmail : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.navigateToAddOrEditEmail("null");
  },
  navToEditAddress : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.navigateToEditOrAddAddress();
  },
  takePictureIphone : function(){
    this.view.cameraWidget.onCapture();
  },
  showChangeProfileOptions : function(){
    this.view.flxEditOptions.setVisibility(false);
    
    if(applicationManager.getDeviceUtilManager().isIPhone()) {
      var actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":null,
          "message":null,
          "showCompletionCallback": null
        }
      );
      var actionTakePicture = new kony.ui.ActionItem(
        {
          "title":"Take a Picture",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.takePictureIphone
        }
      );
      var actionChooseFromGallery = new kony.ui.ActionItem(
        {
          "title":"Choose From Gallery",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.flxChoose.onClick
        }
      );
      var actionCancel = new kony.ui.ActionItem(
        {
          "title":"Cancel",
          "style":constants.ACTION_ITEM_STYLE_CANCEL,
          "action": null
        }
      );
      actionSheetObject.addAction(actionTakePicture);
      actionSheetObject.addAction(actionChooseFromGallery);
      actionSheetObject.addAction(actionCancel);
      actionSheetObject.show();
    }else{
      this.view.flxEditProfilePicture.setVisibility(true);
    }    
  },
  showOptions : function(){
    if(applicationManager.getDeviceUtilManager().isIPhone()) 
    {
      var actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":null,
          "message":null,
          "showCompletionCallback": null
        }
      );
      var actionChangeProfilePicture = new kony.ui.ActionItem(
        {
          "title":"Change Profile Picture",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.flxChangeProfilePicture.onClick
        }
      );
      var actionUpdatePhoneNo = new kony.ui.ActionItem(
        {
          "title":"Add or Update Phone Numbers",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.flxEditPhoneNumbers.onClick
        }
      );
      var actionUpdateEmails = new kony.ui.ActionItem(
        {
          "title":"Add or Update Emails",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.flxEditEmail.onClick
        }
      );
      var actionEditAddress = new kony.ui.ActionItem(
        {
          "title":"Add or Edit Address",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.view.flxEditAddress.onClick
        }
      );      
      var actionCancel = new kony.ui.ActionItem(
        {
          "title":"Cancel",
          "style":constants.ACTION_ITEM_STYLE_CANCEL,
          "action": null
        }
      );
      actionSheetObject.addAction(actionChangeProfilePicture);
      actionSheetObject.addAction(actionUpdatePhoneNo);
      actionSheetObject.addAction(actionUpdateEmails);
      actionSheetObject.addAction(actionEditAddress);
      actionSheetObject.addAction(actionCancel);      
      actionSheetObject.show();
    }else{
      this.view.flxEditOptions.setVisibility(true);
    }
  },
   bindViewError : function(msg){
     applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
   },
   bindViewSuccess : function(msg){
     applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
   },
   setCameraProperties: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.cameraWidget.cameraOptions = {
          hideControlBar: true
      };
    }
  }
 });