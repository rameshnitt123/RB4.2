define({
    timerCounter: 0,
    dialPadNo: "",
    lengthOfDialNo: 0,
    popupMsg:'',
    preloginAdData : [],
    gestID : "",
    gestIDs : [],
    numOfAds : 0,
    xOffset : 0,
    selectedLanguage: -1,
    imageObjArray : [],
    imageDownloadFailureCount : 0,
    currAdFlex : 1,
	gemaltoTimerVar:false,
    adsHided : false,
    isSwipeDone : false,
    isTapDone : false,
    adsPreshow : function(){
      if(!this.adsHided)
      {
        this.resetAdsUI();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        if(authMode.presentationController.canPreloginAdsRenderedToUI())
        {
          var preloginAdData = authMode.presentationController.fetchPreloginAds();
          if(preloginAdData)
          {
            this.bindAdData(preloginAdData);
          }
        }
        //this.view.flxBottom.skin = "sknFlxF4F4F4";
      }
      else
      {
        this.hideAds();
      }
    },
    resetAdsUI : function(){
      this.view.flxBottom.setVisibility(true);
      this.view.flxSelectLanguage.setVisibility(false);
      this.view.flxBottom.top = "72%";
      this.view.imgBg.setVisibility(false);
      this.removeGestureRecognisers();
      this.xOffset = 0;
	  this.imageObjArray = [];
      this.currAdFlex = 1;
	  this.imageDownloadFailureCount = 0;
      this.isSwipeDone = false;
      this.isTapDone = false;
      this.view.flxScrollContainerAds.setContentOffset({
    x: this.xOffset,
    y: 0
  }, true);
        this.view.flxBottom.skin = "sknFlxffffff";
        this.view.flxLoadingIndicator.setVisibility(true);
        this.view.imgLoadingIndicator.src = "loadersmall.gif";
        this.view.flxAdInfo.setVisibility(false);
        for(var i=1;i<=5;i++)
          {
            this.view["flxAd"+i].setVisibility(false);
            this.view["flxProgressBarButton"+i].setVisibility(false);
          }
        this.view.flxProgressBar.forceLayout();
        this.view.flxProgressBar.setVisibility(false);
    },
    bindAdData : function(preloginAdData){
     if(preloginAdData && preloginAdData.length!==0)
        {
          this.preloginAdData = preloginAdData;
          this.numOfAds = preloginAdData.length;
    var param;
    var date = new Date();
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    for(var j = 1; j <= this.numOfAds; j++)
    {
      param=date.getTime();
      this.view["flxAd"+j].left="0dp";
      this.view["flxAd"+j].setVisibility(false);
      var imgUrl =  deviceUtilManager.getImageURLBasedOnDeviceType(preloginAdData[j-1].imageURL);
      this.view["imgAd"+j].src = imgUrl+"?Param="+param;
    }
        }
      else
        {
          this.hideAds();
        }
       var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMod.presentationController.setRenderPreloginAdsToTrue();
     // this.view.flxBottom.skin = "sknFlxF4F4F4";
    },
   removeGestureRecognisers : function()
  {
    if(this.gestIDs.length!==0)
    {
      var  swipeGestureID = this.gestIDs[0];
      var  tapGestureID = this.gestIDs[1];
      this.view.flxScrollContainerAds.removeGestureRecognizer(swipeGestureID);
      this.view.flxScrollContainerAds.removeGestureRecognizer(tapGestureID);
      this.gestIDs = [];
    }
    if(this.gestID!=="")
      {
        this.view.flxBottom.removeGestureRecognizer(this.gestID);
      }
  },
   setGestureRecogniser : function(){
      if(this.gestIDs.length === 0)
    {
      var swipeGestID = this.view.flxScrollContainerAds.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 20,
        swipevelocity: 60
      }, this.onAdSwipe);
      var tapGestID = this.view.flxScrollContainerAds.setGestureRecognizer(1, {
        fingers: 1,
        taps:1
      }, this.onAdTap);
      this.gestIDs[0]=swipeGestID;
      this.gestIDs[1]=tapGestID;
    }
    //this.setGestureForFlxBottom();
    this.view.rtxDetails.onClick = this.onAdTap;
   },
   onAdDownloadComplete : function(issuccess,adNumber){
     if(issuccess)
     {
       var i=this.imageObjArray.length;
       this.alignFlexInScrollContainer(i+1,adNumber);
       if(i===0)
       {
         this.setGestureRecogniser();
         this.setDataForAd(adNumber);
         var loggerManager = applicationManager.getLoggerManager();
    	 loggerManager.setCustomMetrics(this,true,"#PreLoginAds Displayed");
      //   this.view.flxBottom.skin = "sknFlxF4F4F4";
       }
       this.imageObjArray[i] = adNumber;
     }    
   else
   {
     this.imageDownloadFailureCount++;
     if(this.imageDownloadFailureCount === this.numOfAds)
     {
       var logger = applicationManager.getLoggerManager();
       logger.log("####All Prelogin Ad's download failed\n####Therefore Hiding Them");
       this.onAllAdsDownloadFailure();
     }
   }
   },
  onAllAdsDownloadFailure: function() {
        this.view.imgLoadingIndicator.src = "addownloadfailed.png";
        this.hideAds();
    },
  alignFlexInScrollContainer : function(position,flxNumber)
 {
   var deviceUtilManager = applicationManager.getDeviceUtilManager();
   if(position === 1)
   {
     this.view.flxProgressBar.setVisibility(true);
     this.view["flxAd"+flxNumber].setVisibility(true);
     this.view.flxLoadingIndicator.setVisibility(false);
   }
   else
   {
     var leftVal = (position-1)*parseInt(deviceUtilManager.getDeviceInfo().screenWidth);
     this.view["flxAd"+flxNumber].left = leftVal+"dp";
     this.view["flxAd"+flxNumber].setVisibility(true);
   }
   var noOfDownloadedAds = position;
   if(noOfDownloadedAds>1)
   {
     if(noOfDownloadedAds === 2)
     {
       this.view.flxProgressBarButton1.setVisibility(true);
       this.view.flxProgressBarButton2.setVisibility(true);
       this.view.flxProgressBarButton1.left="46%";
       this.view.flxProgressBarButton1.skin = "sknflxADADADRadius100px";
       this.view.flxProgressBarButton2.skin = "sknflxE3E3E3Radius100px";
     }
     else if(noOfDownloadedAds === 3)
     {
       this.view.flxProgressBarButton3.setVisibility(true);
       this.view.flxProgressBarButton3.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressBarButton1.left="43.5%";
     }
     else if(noOfDownloadedAds === 4)
     {
       this.view.flxProgressBarButton4.setVisibility(true);
       this.view.flxProgressBarButton4.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressBarButton1.left="41%";
     }
     else
     {
       this.view.flxProgressBarButton5.setVisibility(true);
       this.view.flxProgressBarButton5.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressBarButton1.left="38%";
     }
     this.view.flxProgressBar.forceLayout();
   }
 },
 setDataForAd : function(adNumber){
   var adData = this.preloginAdData[adNumber-1];
   this.view.lblHeading.text = adData.adTitle;
   this.view.rtxDetails.text = adData.description;
   this.view.flxAdInfo.setVisibility(false);
   this.view.flxAdInfo.forceLayout();
   var loggerManager = applicationManager.getLoggerManager();
   loggerManager.setCustomMetrics(this,true,"#PreLogin Ad"+adNumber+" Displayed");
 },
  onAdSwipe: function(widget, gestureInfo, context) {
        var downloadedAdCount = this.imageObjArray.length;
        var xVal = this.xOffset;
        var scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
        var isThereChange = false;
        if(!this.isSwipeDone)
          {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.setCustomMetrics(this,true,"#PreLoginAds Swiped"); 
    	    this.isSwipeDone = true;
          }
        if (gestureInfo.swipeDirection === 1) {
            if (this.currAdFlex >= 1 && this.currAdFlex < downloadedAdCount) {
                isThereChange = true;
                xVal = xVal + scWidth;
                this.currAdFlex++;
            }
        } else if (gestureInfo.swipeDirection === 2) {
            if (this.currAdFlex > 1 && this.currAdFlex <= downloadedAdCount) {
                isThereChange = true;
                xVal = xVal - scWidth;
                this.currAdFlex--;
            }
        }
        if (isThereChange) {
            this.view.flxScrollContainerAds.setContentOffset({
                x: xVal,
                y: 0
            }, true);
            var adNumber = this.imageObjArray[this.currAdFlex - 1];
            this.setDataForAd(adNumber);
            for (var j = 1; j <= downloadedAdCount; j++) {
                if (j === this.currAdFlex) {
                    this.view["flxProgressBarButton" + j].skin = "sknflxADADADRadius100px";
                } else {
                    this.view["flxProgressBarButton" + j].skin = "sknflxE3E3E3Radius100px";
                }
            }
            this.xOffset = xVal;
            this.view.flxProgressBar.forceLayout();
            this.view.flxScrollContainerAds.forceLayout();
        }
    },
    onAdTap: function() {
        var adNumber = this.imageObjArray[this.currAdFlex - 1];
        var adData = this.preloginAdData[adNumber - 1];
        var navUrl = adData.navigationURL;
      	if(navUrl){
          kony.application.openURL(navUrl);
          var navId = adData.navigationId;
          var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authMod.presentationController.sendDmResponseForPreloginAds(navId);
          var loggerManager = applicationManager.getLoggerManager();
          if(!this.isTapDone)
          {
            loggerManager.setCustomMetrics(this,true,"#PreLoginAds Tapped");
            this.isTapDone = true;
          }
          loggerManager.setCustomMetrics(this,true,"#PreLogin Ad"+adNumber+" Image Tapped");
        }
    },
    
    hideAds : function(){
     this.adsHided = true;
     this.view.flxBottom.setVisibility(false);
   },
   init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
		this.view.postShow = this.frmLoginPostshow;
}, 

  frmLoginPostshow: function() {
    var navManager = applicationManager.getNavigationManager();
    var appLaunchError = navManager.getCustomInfo("appLaunchError");
    if(! kony.sdk.isNullOrUndefined(appLaunchError)) {
      kony.ui.Alert(appLaunchError.basic, appLaunchError.psp);
      navManager.setCustomInfo("appLaunchError", undefined);
      return;
    }
    var loginData = navManager.getCustomInfo("frmLogin");
    if(loginData.showPasswordUpdatedSuccessMessage)
    {
      this.showPasswordUpdatedSuccessMessage();
    }
    this.checkForEnrollSuccess();
//     if((this.popupMsg!==null)&&(this.popupMsg!==''))
//     {
//       this.bindGenericSuccess(this.popupMsg);
//     }
  },
    initActions:function()
  {     		
    
    this.view.flxForgot.onClick=this.forgotNavigation;
    this.view.flxLanguageSelection.onClick = this.showLanguages;
        this.view.btnupdateLanguage.onClick = this.btnUpdateLanguageOnClick;
        this.view.btnCancel.onClick = this.btnCancelLanguageOnClick;
        this.view.segSelectLanguage.onRowClick = this.segSelectLanguageOnRowClick;
  },
  showLanguages : function(){
    var self = this;
    this.view.flxSelectLanguage.isVisible = true;
    if(this.view.imgDropdown.src === "arrowup.png"){
      self.view.imgDropdown.src = "arrowdown.png";
      self.HideLanguages();
    }
    else{
      this.view.imgDropdown.src = "arrowup.png";
      var topValue,topback;
      if(this.view.flxWelcome.top === "20%"){
        topValue = "26.9%";
        topback = "20%"
      }
      else{
        topValue = "22%";
        topback = "15%"
      }
      this.view.flxSelectLanguage.animate(
        kony.ui.createAnimation({
          "0": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "top": topback,
            "opacity": 1

          },
          "100": {
            "anchorPoint": {
              "x": 0.5,
              "y": 0.5
            },
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true,
            "top": topValue,
            "opacity": 1

          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        }, {
          "animationEnd": function() {}
        });
    }
  },
  HideLanguages : function(){
    var topValue,topback;
      if(this.view.flxWelcome.top === "20%"){
        topValue = "27%";
        topback = "20%";
      }
      else{
        topValue = "22%";
        topback = "15%";
       // alert(topback);
      }
        var scopeObj = this;
        this.view.flxSelectLanguage.animate(
            kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 0

                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,

                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.flxSelectLanguage.setVisibility(false);
                    scopeObj.view.imgDropdown.src = "arrowdown.png";
                }
            });
  },
    segSelectLanguageOnRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var config = applicationManager.getConfigurationManager();
        var selectedSectionIndex = Math.floor(this.view.segSelectLanguage.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segSelectLanguage.selectedRowIndex[1]);
        this.selectedLanguage = this.view.segSelectLanguage.data[selectedRowIndex].lblLanguage;
        var sm = applicationManager.getStorageManager();
        var langObj = {
            "language": this.selectedLanguage,
            "index": selectedRowIndex,
            "flow": config.constants.LANG_CHANGE_FROM_LOGIN
        };
        sm.setStoredItem("langObj", langObj);
        config.setLocaleAndDateFormat();
    },
    btnUpdateLanguageOnClick: function() {
        var config = applicationManager.getConfigurationManager();
        if (kony.i18n.getCurrentLocale() !== config.locale[this.selectedLanguage]){
            var scope = this;
            var basicProperties = 
            {
                "message": applicationManager.getPresentationUtility().getStringFromi18n("i18n.common.changeLanguageMessage") + " " + scope.selectedLanguage + " ?",
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": "",
                "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.Yes"),
                "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                "alertIcon": "",
                "alertHandler": function(response) {
                    if(response){
                        scope.changeLanguage();
                    }
                }
            };
        applicationManager.getPresentationUtility().showAlertMessage(basicProperties, {});
        }
    },
    changeLanguage : function(){  
        var sm = applicationManager.getStorageManager();
        var config = applicationManager.getConfigurationManager();
        var index =Math.floor(this.view.segSelectLanguage.selectedRowIndex[1]);
        var langObj = {
            "language": this.selectedLanguage,
            "index": index,
            "flow": config.constants.LANG_CHANGE_FROM_LOGIN
        };
        this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
        sm.setStoredItem("langObj", langObj);
        if (config.getLocale()) {
            kony.i18n.setCurrentLocaleAsync(config.getLocale(), this.languageChangeOnSuccess, this.languageChangeOnFailure);
        }
        //this.HideLanguages();
    },
  
  	languageChangeOnSuccess: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLanguageSelectionLoading");    
    },
  
    languageChangeOnFailure: function() {
        kony.print("Fail");
    },
    btnCancelLanguageOnClick: function() {
        var sm = applicationManager.getStorageManager();
        var langObjFromStorage = sm.getStoredItem("langObj");
        var index = 0;
        if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
            index = langObjFromStorage.index;
        }
        this.view.segSelectLanguage.selectedRowIndices = [
            [0, [index]]
        ];
        this.selectedLanguage = this.view.segSelectLanguage.data[index].lblLanguage;
        this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
        this.HideLanguages();
    },
    getLanguageMasterData: function() {
        var data = ["US-English", "UK-English", "Spanish", "German", "French"];
        return data;
    },
    setDataToLanguage: function() {
        var languageData = this.getLanguageMasterData();
        //     var dataMap = {
        //       "flxLanguage": "flxLanguage",
        //       "imgCheckbox": "imgCheckbox",
        //       "lblLanguage": "lblLanguage",
        //       "imgFlag": "imgFlag"
        //     };
       var flags = {
                "US-English": "us.png",
                "UK-English": "uk.png",
                "Spanish": "spanish.png",
                "German": "german.png",
                "French": "french.png",
            };      
        var data = [];
        for (var i = 0; i < languageData.length; i++) {
            var dataElt = {
                "imgCheckbox": {
                    "src": "radiobuttonactive.png",
                },
                "lblLanguage": languageData[i],
                "imgFlag": flags[languageData[i]],
                "template": "flxLanguage"
            };
            data.push(dataElt);
        }
        //     this.view.segSelectLanguage.widgetDataMap = dataMap;
        this.view.segSelectLanguage.setData(data);
        var sm = applicationManager.getStorageManager();
        var langObjFromStorage = sm.getStoredItem("langObj");
        var index = 0;
        if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
            index = langObjFromStorage.index;
        }
        this.view.segSelectLanguage.selectedRowIndices = [
            [0, [index]]
        ];
        this.selectedLanguage = this.view.segSelectLanguage.data[index].lblLanguage;
        this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
        this.view.forceLayout();
    },
    forgotNavigation: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.checkAppinit = true;
   authMode.presentationController.forgotNavigation(this.view.tbxUsername.text); 
  },

    setDialPadActions: function() {
        var scopeObj = this;
        this.view.btnOne.onClick = function() {
            scopeObj.getNumber("1");
        };
        this.view.btnTwo.onClick = function() {
            scopeObj.getNumber("2");
        };
        this.view.btnThree.onClick = function() {
            scopeObj.getNumber("3");
        };
        this.view.btnFour.onClick = function() {
            scopeObj.getNumber("4");
        };
        this.view.btnFive.onClick = function() {
            scopeObj.getNumber("5");
        };
        this.view.btnSix.onClick = function() {
            scopeObj.getNumber("6");
        };
        this.view.btnSeven.onClick = function() {
            scopeObj.getNumber("7");
        };
        this.view.btnEight.onClick = function() {
            scopeObj.getNumber("8");
        };
        this.view.btnNine.onClick = function() {
            scopeObj.getNumber("9");
        };
        this.view.btnZero.onClick = function() {
            scopeObj.getNumber("0");
        };
    },
    setGestureForFlxBottom: function() {
        this.view.imgBg.setVisibility(true);
        var gestID = this.view.flxBottom.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            },                                                  
            function(widgetRef, gestureInfo) {
                if (gestureInfo.swipeDirection === 3) {
                    kony.print("animate Top");
                    this.animateflxBottomToTop();
                }
                if (gestureInfo.swipeDirection === 4) {
                    kony.print("animate Bottom");
                    this.animateflxBottomToBottom();
                }
            }.bind(this));
      this.gestID = gestID;
    },

    animateflxBottomToTop: function() {
        var scopeObj = this;
        this.view.flxBottom.animate(
            kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "62%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.imgBg.src = "swipeback.png";
                }
            });
    },
    animateflxBottomToBottom: function() {
        var scopeObj = this;
        this.view.flxBottom.animate(
            kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "72%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.imgBg.src = "swipeup.png";
                }
            });
    },

    bindAccountPreViewData: function(data,timestamp){
    
		     this.view.lblAccountPreviewTime.text = "As of " + timestamp;
			 this.view.segAccountPreview.widgetDataMap={
              				lblAccountName:"nickName",
              				lblAccountBalValue: "availableBalance",              
	          				lblBankName:"bankName",
	          				lblAccountBal:"accountType" ,
							imgBank: "bankImg"
                             };
                           
          					this.view.segAccountPreview.setData(data);  
							this.flxDashboardOnClick();
	  },
  
    flxDashboardOnClick: function() {
        if (this.view.imgDashboard.src === "dashboardicon.png") {
            this.view.imgDashboard.src = "dbicon_up.png";
            this.view.flxDashboard.forceLayout();
            this.view.lblWelcomeMessage.setVisibility(false);
            this.view.lblAccountPreview.setVisibility(true);
            this.view.lblAccountPreviewTime.setVisibility(true);
            this.view.flxWelcome.forceLayout();
            this.view.flxAccountPreview.setVisibility(true);
            this.view.flxContent.setEnabled(false);
            this.animateAccountPreview();
            this.animateFlxContent();
        } else {
            this.view.imgDashboard.src = "dashboardicon.png";
            this.view.flxDashboard.forceLayout();
            this.view.lblWelcomeMessage.setVisibility(true);
            this.view.lblAccountPreview.setVisibility(false);
            this.view.lblAccountPreviewTime.setVisibility(false);
            this.view.flxContent.setEnabled(true);
            this.view.flxWelcome.forceLayout();
            this.animateAccountPreviewBack();
            this.animateFlxContentBack();
        }
    },
    animateAccountPreview: function() {
      var topValue,topback;
      if(this.view.flxWelcome.top === "20%"){
        topValue = "26.9%";
        topback = "20%"
      }
      else{
        topValue = "22%";
        topback = "15%"
      }
        this.view.flxAccountPreview.animate(
            kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,
                    "opacity": 1

                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 1

                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
    },
    animateFlxContent: function() {
        this.view.flxContent.animate(
            kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "70.1%",

                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
    },
    animateAccountPreviewBack: function() {
        var topValue,topback;
      if(this.view.flxWelcome.top === "20%"){
        topValue = "27%";
        topback = "20%";
      }
      else{
        topValue = "22%";
        topback = "15%";
       // alert(topback);
      }
        var scopeObj = this;
        this.view.flxAccountPreview.animate(
            kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 0

                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,

                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.flxAccountPreview.setVisibility(false);
                }
            });
    },
    animateFlxContentBack: function() {
      var topValue;
      if(this.view.flxWelcome.top === "20%"){
        topValue = "27%";
      }
      else{
        topValue = "22%";
      }
        this.view.flxContent.animate(
            kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,

                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
    },
    
    getNumber: function(num) {
      if(this.view.flxPopup.isVisible === false){
        this.view.flxCross.skin = "sknFlxImgCancel";
        this.lengthOfDialNo = this.dialPadNo.length;
        this.changeSkinOfProgressBartoActive();
        if (this.lengthOfDialNo < 6) {
            this.dialPadNo = "" + this.dialPadNo + num;
        }
      	if (this.dialPadNo.length == 6) 
          {
             var pinNo = this.dialPadNo;
             var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
			  authMode.presentationController.currentAuthMode = "";
       		 authMode.presentationController.onPinLogin(pinNo);
             this.dialPadNo = "";     
   			 this.lengthOfDialNo = 0;
          }
    }
    },
    flxCancelDialPadOnClick: function() {
        this.dialPadNo = this.dialPadNo.slice(0, -1);
        this.lengthOfDialNo = this.dialPadNo.length;
        this.changeSkinOfProgressBartoInactive();
        this.view.flxDialPad.forceLayout();
    },
    changeSkinOfProgressBartoActive: function() {
        var len = parseInt(this.lengthOfDialNo) + 1;
        switch (len) {
            case 1:
                this.view.flxProgressButton1.skin = "sknFlxa0a0a0filled";
                break;
            case 2:
                this.view.flxProgressButton2.skin = "sknFlxa0a0a0filled";
                break;
            case 3:
                this.view.flxProgressButton3.skin = "sknFlxa0a0a0filled";
                break;
            case 4:
                this.view.flxProgressButton4.skin = "sknFlxa0a0a0filled";
                break;
            case 5:
                this.view.flxProgressButton5.skin = "sknFlxa0a0a0filled";
                break;
            case 6:
                this.view.flxProgressButton6.skin = "sknFlxa0a0a0filled";
                break;
        }
        this.view.flxProgressButtons.forceLayout();
    },
    changeSkinOfProgressBartoInactive: function() {
        var len = parseInt(this.lengthOfDialNo) + 1;
        switch (len) {
            case 1.0:
                this.view.flxProgressButton1.skin = "sknFlxa0a0a0B";
                break;
            case 2:
                this.view.flxProgressButton2.skin = "sknFlxa0a0a0B";
                break;
            case 3:
                this.view.flxProgressButton3.skin = "sknFlxa0a0a0B";
                break;
            case 4:
                this.view.flxProgressButton4.skin = "sknFlxa0a0a0B";
                break;
            case 5:
                this.view.flxProgressButton5.skin = "sknFlxa0a0a0B";
                break;
            case 6:
                this.view.flxProgressButton6.skin = "sknFlxa0a0a0B";
                break;
        }
        this.view.flxProgressButtons.forceLayout();
    },

    roundNum: function(num, decimals) {
        var t = Math.pow(10, decimals);
        return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    },

    flxPwdVisiblityToggleOnClick: function() {
        if (this.view.imgPwdVisiblityToggle.src === "view.png") {
            this.view.imgPwdVisiblityToggle.src = "viewactive.png";
            this.view.tbxPassword.secureTextEntry = false;
            this.view.flxContent.forceLayout();
        } else {
            this.view.imgPwdVisiblityToggle.src = "view.png";
            this.view.tbxPassword.secureTextEntry = true;
            this.view.flxContent.forceLayout();
        }
    },

    flxCancelOnClick: function() {
        //alert("Entered pin is "+this.dialPadNo);
        this.view.flxEnterPin.setVisibility(false);
        this.view.flxFooter.setEnabled(true);
        this.view.flxContent.setEnabled(true);
        this.view.flxWelcome.setEnabled(true);
		this.dialPadNo = "";
    	this.lengthOfDialNo = 0;
    },
    showPopupIncorrectCredentials: function() {
        var scopeObj=this;
        this.timerCounter=parseInt(this.timerCounter)+1;
        var timerId="timerPopupError"+this.timerCounter;
        this.view.flxPopup.skin = "sknFlxf54b5e";
        this.view.customPopup.imgPopup.src = "errormessage.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.login.incorrectCredentialsMsg");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
            scopeObj.resetSkinsOfUsernameAndPwd();
        }, 1.5, false);
    },
    btnLoginOnClick: function() {
       var enteredUserName = this.view.tbxUsername.text;
       var enteredPassword = this.view.tbxPassword.text;
       var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		authMode.presentationController.currentAuthMode = "password";
       authMode.presentationController.onLogin({"username":enteredUserName,"password":enteredPassword}, this);     
    },
    resetSkinsOfUsernameAndPwd: function() {
	    scopeObj=this;
        scopeObj.view.tbxUsername.skin = "sknTbx424242SSPRegular28px";
        scopeObj.view.tbxPassword.skin = "sknTbx424242SSPRegular28px";
        scopeObj.view.tbxUsername.focusSkin = "sknTbx424242SSPRegular28px";
        scopeObj.view.tbxPassword.focusSkin = "sknTbx424242SSPRegular28px";
      	if(scopeObj.view.tbxPassword.text !=='' && scopeObj.view.tbxPassword.text!==null && this.view.tbxUsername.text!==undefined){
      	scopeObj.view.btnLogIn.skin = "sknBtn0095e4RoundedffffffSSP26px";
      	scopeObj.view.btnLogIn.setEnabled(true);
        }
      	//if(scopeObj.view.flxBottom.top === "70.1%"){
        //  alert("shdcvshd");
         //// scopeObj.animateFlxContentBack();
       // }
        scopeObj.view.flxContent.forceLayout();
    },
	clearUsernamePwd:function()
	{
        scopeObj=this;
       // scopeObj.view.tbxUsername.text = "";
        scopeObj.view.tbxPassword.text = "";
        scopeObj.view.flxContent.forceLayout();
	},
    flxOpenNewAccountOnClick:function()
    {
      this.view.flxFaceIdPopUp.setVisibility(true);
      this.view.flxFooter.setEnabled(false);
      this.view.flxContent.setEnabled(false);
      this.view.forceLayout(); 
    },
    flxFaceIdOnClick:function()
   {
    this.view.flxEnterPin.setVisibility(true);
    this.view.flxFooter.setEnabled(false);
    this.view.flxContent.setEnabled(false);
    this.view.forceLayout();
   },
   flxCancelFIOnClick:function()
  {
	try{
    kony.timer.cancel("gemaltoTimerId");
    this.gemaltoTimerVar = false;
	}
	catch(e)
	{ 
		kony.print(e);
	}
    this.view.flxFaceIdPopUp.setVisibility(false);
    this.view.flxWelcome.setEnabled(true);
	this.view.flxContent.setEnabled(true);
	this.view.flxFooter.setEnabled(true);
    this.view.forceLayout();
  },
  customAlertPopUpFlxCancelOnClick:function()
  {
    this.view.customAlertPopUp.setVisibility(false);
    this.view.flxContent.setEnabled(true);
    this.view.flxFooter.setEnabled(true);
    this.view.flxWelcome.setEnabled(true);
    kony.localAuthentication.cancelAuthentication();
    this.view.flxPopup.setVisibility(false);
    
    this.view.forceLayout();
  },
  	
  resetLoginUI : function ()
  {
		this.view.flxAccountPreview.top="27%";
		this.view.flxContent.top="27%";
        this.view.imgKonyLogo.top="1%";
   		this.view.flxWelcome.top="20%";
    	this.view.flxShadow.top = "18.5%";
		//this.view.flxAccountPreview.setVisibility(false);	
        this.view.tbxUsername.skin="sknTbx424242SSPRegular28px";
        this.view.tbxUsername.focusSkin="sknTbx424242SSPRegular28px";
        this.view.tbxPassword.skin="sknTbx424242SSPRegular28px";
        this.view.tbxPassword.focusSkin="sknTbx424242SSPRegular28px";
		this.view.lblWelcomeMessage.setVisibility(true);
        this.view.lblAccountPreview.setVisibility(false);
        this.view.lblAccountPreviewTime.setVisibility(false);
		this.view.flxPopup.setVisibility(false);
		 this.view.btnLogIn.setEnabled(false);
  		this.view.btnLogIn.skin = "sknBtna0a0a0SSPReg26px"; 
        this.view.imgDashboard.src = "dashboardicon.png";
        this.view.tbxPassword.secureTextEntry = true;
        this.view.flxContent.forceLayout();
        this.setDialPadActions();
        this.view.customAlertPopUp.setVisibility(false);
        this.view.forceLayout();
  		this.view.flxWelcome.setEnabled(true);
  		this.view.flxContent.setEnabled(true);
  		this.view.flxFooter.setEnabled(true);
   
  },
   loginFunctionalPreshow: function() {
	var configManager = applicationManager.getConfigurationManager();
       if(configManager.appLaunchedMode.length === 0) {
            configManager.appLaunchedMode = "normal"
       }    
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var navData=applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    if (!(navData.isFirstTimeLogin) && (navData.isRememberMeOn) && (navData.userName)){
      var userPreferencesManager = applicationManager.getUserPreferencesManager();
      var firstname = userPreferencesManager.getUserFirstName();
      var lastname = userPreferencesManager.getUserLastName();   
      this.view.lblWelcomeMessage.text =  kony.i18n.getLocalizedString("kony.mb.Welcome")+" Back! "+ firstname+ " "+lastname;
    }
    else 
		   this.view.lblWelcomeMessage.text = kony.i18n.getLocalizedString("kony.mb.Welcome");
      this.manageUname(navData);
     this.showDefaultLoginScreen(navData);
      authMod.presentationController.showLoginForm();
	if(navData.isAccountPreviewEnabled){
      this.view.flxDashboard.setVisibility(true); 
    }
     else{
      this.view.flxDashboard.setVisibility(false); 
    }	
               
    },
  manageUname: function(loginData)
  {
    if(loginData.isRememberMeOn != true){
      	this.view.tbxUsername.text = "";
        this.view.tbxPassword.text = "";
		this.view.switchRememberMe.selectedIndex = 1;
    }
    else{
      if(loginData.isFirstTimeLogin != true)
 		this.view.tbxUsername.text = loginData.userName;   	
      else
        this.view.tbxUsername.text = "";
    this.view.tbxPassword.text = "";
      this.view.switchRememberMe.selectedIndex = 0;
    }
  },
  
  showDefaultLoginScreen: function(loginData)
  {
    if (loginData.isFirstTimeLogin)
    {
      this.showPasswordScreen();
      this.view.btnFaceId.isVisible = false;
      this.view.btnPinId.isVisible = false;
      this.view.btnTouchId.isVisible=false;
      this.view.flxWelcome.setEnabled(true);
      this.view.flxContent.setEnabled(true);
      this.view.flxFooter.setEnabled(true);
    }
    if(loginData.usernameFromForgotUsername && (loginData.usernameFromForgotUsername !== undefined || loginData.usernameFromForgotUsername !== ""))
    {
      this.showPasswordScreen();
      this.populateUserName(loginData.usernameFromForgotUsername);
    }
    else if (loginData.NUOUsername && (loginData.NUOUsername !== undefined || loginData.NUOUsername !== ""))
    {
      this.showPasswordScreen();
      this.populateUserName(loginData.NUOUsername);
    }

    else{
      var userObj = applicationManager.getUserPreferencesManager();
      var checkDeviceReg = userObj.isDeviceRegistered();
      if(checkDeviceReg == true && (!loginData.isFirstTimeLogin)){
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.checkDeviceRegistrationStatus();
      }
    }
  },
  
  checkLoginType : function(checkDeviceReg)
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    if(checkDeviceReg == true){      
      var loginData=applicationManager.getNavigationManager().getCustomInfo("frmLogin");
      if (loginData.defaultAuthMode == "pin"){        
        this.showPinScreen();
      }
      else if (loginData.defaultAuthMode == "faceid"){       
        this.showFaceIdScreen();
      }
      else if(loginData.defaultAuthMode == "touchid")
      {
        this.touchLoginShow();
      }
      else
        this.showPasswordScreen();
    }
    else
      this.showPasswordScreen();
  },
  
  touchLoginShow : function()
  {
	this.view.btnFaceId.isVisible = false;
    this.view.btnPinId.isVisible = false;
    this.view.btnTouchId.isVisible=true;
    var navData=applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    this.view.flxEnterPin.setVisibility(false);
    this.view.flxPopup.setVisibility(false);
    this.view.flxFaceIdPopUp.setVisibility(false);
      if(navData.isIphone)
      {
        var config = {"promptMessage" : "Please Authenticate using Touch Id"};
        kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, config);
      }
      else
        this.showTouchIdAndroid();
    
    this.view.flxWelcome.setEnabled(false);
	this.view.flxContent.setEnabled(false);
	this.view.flxFooter.setEnabled(false);
  },
  
  showTouchIdAndroid : function(){
	   this.view.flxPopup.setVisibility(false);
       this.view.customAlertPopUp.setVisibility(true);
       var config = {};
       kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.authCallBack,config);
  },
  
  statusCB : function(status,msg)
  {
      if(status == 5000)
          this.doLoginonTouchId();
      this.view.flxWelcome.setEnabled(true);
	  this.view.flxContent.setEnabled(true);
	  this.view.flxFooter.setEnabled(true);
  },
  
  authCallBack : function(status,msg)
  {
    
    if (status == 5000)
    {
     this.view.customAlertPopUp.setVisibility(false);
      this.doLoginonTouchId();
    }
    else if (status == 5002)
     {
       kony.print("Authentication cancelled");
     }
    else
       applicationManager.getDataProcessorUtility().showToastMessageError(this,"Please Try Again with Valid Fingerprint");
    this.view.flxWelcome.setEnabled(true);
	this.view.flxContent.setEnabled(true);
	this.view.flxFooter.setEnabled(true);
  },
  doLoginonTouchId : function ()
  {
   
       var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
       var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
       var uName = navData.userName;
       var password = navData.password;
       this.view.tbxPassword.text = password;
	    authMode.presentationController.currentAuthMode = "";
       authMode.presentationController.onLogin({"username":uName,"password":password}, this); 
     
  },
  accountPreview :function(){    
    if(this.view.flxAccountPreview.isVisible === false ){                      
           	var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.showAccountPreview();
    }
    else{
           this.flxDashboardOnClick();
    }
  },
  loginActionClicks : function ()
  {
       this.view.flxDashboard.onClick = this.accountPreview;
       this.view.switchRememberMe.onSlide = this.rememberMeOption;
       this.view.flxPwdVisiblityToggle.onClick = this.flxPwdVisiblityToggleOnClick;
       this.view.flxbottomContainer.onClick = this.flxCancelOnClick;
       if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.tbxUsername.onDone = this.tbxPasswordOnDone;
        }
       else 
         {
           this.view.tbxUsername.onDone = this.enableLoginButton;  
         }
       this.view.tbxPassword.onDone = this.btnLoginOnClick;
	   this.view.btnTouchId.onClick = this.touchLoginShow;
       this.view.tbxUsername.onTouchStart = this.tbxOnTouchStart;
       this.view.tbxPassword.onTouchStart = this.tbxOnTouchStart;
	   //this.view.flxCancel.onClick =  this.cancelTouchIdAuth;
	   this.view.btnFaceId.onClick = this.showFaceIdScreen;
  },
   cancelTouchIdAuth : function()
   {
      kony.localAuthentication.cancelAuthentication();
   },
 
  frmLoginPreShow:function(){
  applicationManager.getPresentationUtility().showLoadingScreen();
	var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.startUpCompleted();
    this.view.flxWelcome.setVisibility(true);
    this.view.flxWelcome.top="15%";
    this.view.flxContent.top="22%";
    this.view.imgKonyLogo.top="1%";
    this.view.flxShadow.top = "13.5%";
    this.initActions();
    this.resetLoginUI();
    this.loginActionClicks();
    this.loginFunctionalPreshow();
    this.setDataToLanguage();
    this.adsPreshow();
    if (authMode.presentationController.isappInitDone())
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.view.tbxUsername.skin="sknTbx424242SSPRegular28px";
    this.view.tbxPassword.skin="sknTbx424242SSPRegular28px";
    this.view.flxWelcome.zIndex = 10;
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.setCustomMetrics(this,true,"#App Launch");
    if(kony.os.deviceInfo().name === "iPhone"){
      this.view.switchRememberMe.skin = "sknSwitch0095e4Op100pr000000Op10pr";
    }
    else{
      this.view.switchRememberMe.skin = "sknSwitch0095e4Op100pr000000Op10pr";
    }
  }, 
 
   enableLoginButton:function(){
    if(this.view.tbxUsername.text !==''&&this.view.tbxUsername.text!==null&&this.view.tbxUsername.text!==undefined&&this.view.tbxPassword.text !==''&&this.view.tbxPassword.text!==null&&this.view.tbxPassword.text!==undefined)
    {
          	this.view.btnLogIn.setEnabled(true);
  			this.view.btnLogIn.skin = "sknBtn0095e426pxEnabled"; 
      		//this.view.btnLogIn.focusSkin = "sknBtn055BAF26px"
    }  
    else
      {
        this.view.btnLogIn.setEnabled(false);
  		this.view.btnLogIn.skin = "sknBtna0a0a0SSPReg26px";     
      }
   },
     clearProgressFlexLogin:function(){
        for(var i=6; i>=1;i--)
      	{
           		 this.view["flxProgressButton"+i].skin="sknFlxa0a0a0B";  
      	}
 	 	//pin_count_login=0;
   },
  showPasswordScreen:function(){
	     this.view.btnFaceId.isVisible = false;
		 this.view.btnPinId.isVisible = false;
		 this.view.btnTouchId.isVisible=false;
    	 this.view.flxEnterPin.setVisibility(false);         
         this.view.flxFaceIdPopUp.setVisibility(false);
    	 this.view.flxWelcome.setEnabled(true);
		 this.view.flxContent.setEnabled(true);
		 this.view.flxFooter.setEnabled(true);
	     this.view.customAlertPopUp.setVisibility(false);
        // this.view.frmLogin.opacity=1;
        // this.view.frmLogin.setEnabled(true);
  },
  showPinScreen:function(){
  		//this.view.frmLogin.opacity=0.2;   
    	this.clearProgressFlexLogin();    	
    	//this.view.frmLogin.setEnabled(false);
    	this.view.flxEnterPin.setVisibility(true);
    	this.view.flxFaceIdPopUp.setVisibility(false);
    	this.view.customAlertPopUp.setVisibility(false);
	     this.view.btnFaceId.isVisible = false;
        this.view.btnPinId.isVisible = true;
        this.view.btnTouchId.isVisible=false;
    	this.view.flxWelcome.setEnabled(false);
		this.view.flxContent.setEnabled(false);
		this.view.flxFooter.setEnabled(false);
   },
  showFaceIdScreen:function(){
        this.view.flxEnterPin.setVisibility(false);
    	this.view.customAlertPopUp.setVisibility(false);
	    this.view.btnFaceId.isVisible = true;
        this.view.btnPinId.isVisible = false;
        this.view.btnTouchId.isVisible=false;
        var devManager = applicationManager.getDeviceUtilManager();
		if (devManager.isFaceIdSupported())
        {
			 this.view.flxFaceIdPopUp.setVisibility(false);
			var config = {"promptMessage" : "Sign in with face Id"};
			kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCB, config);     
      	}
     	else{
             applicationManager.getPresentationUtility().showLoadingScreen();
             var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
             authMod.presentationController.FaceAuthInitialize(this);
    		 this.view.flxFaceIdPopUp.setVisibility(true);
             this.gemaltoTimer();
        }
       this.view.flxWelcome.setEnabled(false);
	   this.view.flxContent.setEnabled(false);
	   this.view.flxFooter.setEnabled(false);
   },


   rememberMeOption : function()
  {
    var rememberMeSwitchValue = this.view.switchRememberMe.selectedIndex;
    var loginData=applicationManager.getNavigationManager().getCustomInfo("frmLogin");
    if(rememberMeSwitchValue === 0) {
    	var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
       	authMode.presentationController.setRememberMeFlag(true);
	   	applicationManager.getDataforLogin();
    }
    else {
  		if (loginData.istouchIdEnabled || loginData.isPinModeEnabled || loginData.isFacialAuthEnabled)
        	this.showTouchIdOffAlert(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.rememberMe.Msg"),applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.rememberMeTittle"));
    	else
       		this.OffLoginFeatures_RememberOff();
    }
},
  toggleSwitch : function(){
    var self = this;
  if(this.view.flxSwitch.left === "0dp"){
    self.animate(self.view.flxSwitchBackground,self.view.flxSwitch,"20dp");
    self.animateShadow(self.view.flxSwitchShadow,"18dp");
  }
      else{
      self.animate(self.view.flxSwitchBackground,self.view.flxSwitch,"0dp");
    self.animateShadow(self.view.flxSwitchShadow,"0dp");
      }
  },
  animate : function(parentWidget,widget,value){
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "left": value,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }, {
        "animationEnd": function(){
          if(widget.left === "0dp" ){
	        parentWidget.skin = "sknflxa0a0a0Switch";
           // widget.skin = "sknflxa0a0a0Bordera0a0a0Border100pxRadius";
          }
          else if(widget.left === "20dp"){
	        parentWidget.skin = "sknflx0095e4B0095e4100pxRadius2";
          //  widget.skin = "sknflx0095e4Border0095e4Border100pxRadius";
          }
        }
      });
  },
  animateShadow : function(widget,value){
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "left": value,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }, {
        "animationEnd": function(){}
      });
  },

showTouchIdOffAlert : function(msg,title)
 {
   kony.ui.Alert({
          "message": msg,
          "alertHandler": this.alertrememberCallback,
          "alertType": constants.ALERT_TYPE_CONFIRMATION,
          "yesLabel": "Disable",
          "noLabel": "Cancel",
          "alertTitle": title     
     },{});

},
  
alertrememberCallback : function(response)
{
  if (response === true){
    this.OffLoginFeatures_RememberOff();
  }
  else
  {
      this.view.imgCheckBox.src = "remembermetick.png";
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMode.presentationController.setRememberMeFlag(true);
   }
},
OffLoginFeatures_RememberOff : function()
{
	this.view.btnPinId.setVisibility(false);
    this.view.btnFaceId.setVisibility(false);
    this.view.btnTouchId.setVisibility(false);
	this.view.flxDashboard.setVisibility(false); 
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.setLoginFeaturesOff();
},
  
  showPasswordUpdatedSuccessMessage : function()
  {
    var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.login.pwdUpdateMsg");
    this.bindGenericSuccess(msg);
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLogin");
    loginData.showPasswordUpdatedSuccessMessage = false;
    navManager.setCustomInfo("frmLogin",loginData);
  },
  populateUserName:function(userName)
  {
    this.view.tbxUsername.text=userName;
    this.view.lblWelcomeMessage.text="Welcome Back! "+userName;
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLogin");
    delete userName;
    navManager.setCustomInfo("frmLogin",loginData);
  },
  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  bindGenericSuccess : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  },
  bindLoginErrorMessage(err)
  { 
     var scope = this;
     applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearUsernamePwd); 
   
  },
  bindPinError(err){
     var scope = this;
     applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearProgressFlexLogin); 
  },
   onLocateUSClick: function() {
     var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     authMode.presentationController.checkAppinit = true;
     var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     locateUsModule.presentationController.presentLocateUsView(false,this);
     return;
         var scopeObj = this;
         var positionoptions = {
             timeout: 64000,
             fastestInterval: 0,
             minimumTime: 0
         };
         applicationManager.getPresentationUtility().showLoadingScreen();
         kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
     },
  
     geoLocationSuccessCallBack: function(response) {
         try {
             var latitude, longitude;
             var latLongObj = {};
             if (response && response.coords && response.coords.latitude && response.coords.longitude) {
                 latitude = response.coords.latitude;
                 longitude = response.coords.longitude;
                 latLongObj.latitude = latitude;
                 latLongObj.longitude = longitude;
                 var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                 locateUsModule.presentationController.getNearByLocations(latLongObj);
                 //applicationManager.getPresentationUtility().dismissLoadingScreen();
             }
         } catch (err) {
           applicationManager.getPresentationUtility().dismissLoadingScreen();
         }
     },

 geoLocationErrorCallBack: function(err) {
     var scopeObj = this;
     var deviceUtilManager = applicationManager.getDeviceUtilManager();
     var isIphone = deviceUtilManager.isIPhone();
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if (err.code == 1) {
         var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
         scopeObj.bindGenericError(i18nKey);
     }
     if (err.code == 3 && !isIphone) {
         var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
         scopeObj.bindGenericError(i18n_timeOut);
     }
     if (err.code == 2 && !isIphone) {
         var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
         kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
     }
 },

 onClickSettingsOrCancelHandler: function(response) {
     if (response === false) {
         var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
         locateUsModule.presentationController.openLocationSettings();
     }
 },
 
 checkForEnrollSuccess : function(){
	this.popupMsg = "";
    var navManager = applicationManager.getNavigationManager();
    var enrollInfo = navManager.getCustomInfo("frmEnrollSignUp");
    if(enrollInfo !== null && enrollInfo !== undefined){
      if(enrollInfo.isEnrollSuccess){
        var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.Congrats") + " " +enrollInfo.userName + "! " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.successMessage");
        this.popupMsg = msg;
        this.bindGenericSuccess(msg);
      }
       navManager.setCustomInfo("frmEnrollSignUp", null);
    }
  },
  
 tbxOnTouchStart: function() {
    this.view.flxWelcome.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "15%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
    //this.view.flxWelcome.zIndex = 1;
    this.view.flxContent.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "21.7%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
   this.view.imgKonyLogo.animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "120dp",
            "height": "100dp"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, { 
         "animationEnd": function() {}
    });
   //this.view.flxShadow.top = "18.5%";
   this.view.flxShadow.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "13.5%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
   this.view.imgKonyLogo.top="1%";
  },
  animateflxContentAndWelcomeFlexBack: function(){
    this.view.flxContent.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "27.1%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
    this.view.flxWelcome.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "20%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
   this.view.imgKonyLogo.animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "200dp",
            "height": "130dp"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, { 
         "animationEnd": function() {}
    });
    this.view.flxShadow.animate(
        kony.ui.createAnimation({
            "100": {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": "18.5%",

            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
    this.view.imgKonyLogo.top="1%";
  },
  tbxPasswordOnDone: function(){
    this.animateflxContentAndWelcomeFlexBack();
    this.enableLoginButton();
  },
 gemaltoTimer: function(){
         var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
       if(this.gemaltoTimerVar){
            try{
             kony.timer.cancel("gemaltoTimerId");             
             kony.timer.schedule("gemaltoTimerId",this.faceIdVerify, 3.0, false);}
         catch(e)
           {
             kony.print(e);
           }
        } 
        else{
          	this.gemaltoTimerVar = true;
            try{
            kony.timer.schedule("gemaltoTimerId",this.faceIdVerify, 3.0, false);}
          catch(e)
           {
             kony.print(e);
           }
        }
  },
   faceIdVerify : function()
  {
	function onFaceIdVerifySuccess() { 
		var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
       var uName = navData.userName;
       var password = navData.password;
      	this.view.tbxPassword.text = password;
       authMode.presentationController.onLogin({"username":uName,"password":password}, this);
	}
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.FaceAuthVerify(this, onFaceIdVerifySuccess.bind(this));
    this.gemaltoTimerVar = false;
  },
  navToNUOPhone : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.resetNewUserPresentationController();
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSignInWithPhoneNumber"); 
  } 
});
