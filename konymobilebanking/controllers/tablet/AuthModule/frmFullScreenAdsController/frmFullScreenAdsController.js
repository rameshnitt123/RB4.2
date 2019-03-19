define({
  numOfAds  : 0 ,
  currentFlex  : 1 ,
  xOffset  : 0 ,
  nonInfeedAds  : 0 ,
  imageObjArray  : [] ,
  imageDownloadFailureCount  : 0 , 
  gestIDs  : [] ,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  initActions : function(){
    this.view.flxCancel.onClick  = this.onAdClose;
  },

  onPreShow: function() {
    this.initActions();
    this.view.statusBarHidden = true;
    var navManager =  applicationManager.getNavigationManager();
    this.nonInfeedAds =  navManager.getCustomInfo("frmFullScreenAds").postLoginAdData;
    this.numOfAds = this.nonInfeedAds.length;
    this.xOffset = 0;
    this.currentFlex = 1;
    this.imageDownloadFailureCount = 0;
    this.imageObjArray = [];
    if(!this.gestIDs)
    {
      this.gestIDs = [];
    }
    this.disableUntilImageDownloads();
    this.removeGestureRecognisers();
    var date = new Date();
    var param;
    var imgUrl;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var deviceData = deviceUtilManager.getDeviceInfo();
    for(var j = 1; j <= this.numOfAds; j++)
    {
      param=date.getTime();
      this.view["flxAd"+j].left="0dp";
      this.view["flxAd"+j].setVisibility(false);
      //Ideally for IphoneX we use @3x images,
      // But in case of postLogin full screen Ads, to achieve a better UI look
      // We are using a customised image, hence we are storing the image name with "@IphoneX"  
      // as an extension.  
      if(deviceUtilManager.getDeviceInfo().model.indexOf("iPhone X") > -1)
      {
        imgUrl = this.nonInfeedAds[j-1].imageURL+"@IphoneX.png";
      }
      else
      {
        imgUrl =  deviceUtilManager.getImageURLBasedOnDeviceType(this.nonInfeedAds[j-1].imageURL);
      }
      this.view["imgAd"+j].src = imgUrl+"?Param="+param;
    }
    if(deviceData.model.indexOf("iPhone X") > -1)
    {	
      this.view.flxAdvertisement.top="-46dp";
    }
    this.view.flxScrollContainerAds.setContentOffset({
      x: this.xOffset,
      y: 0
    }, true);

    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  getActionDetails : function(adNumber,actionNumber) {
    var interactions = this.nonInfeedAds[adNumber-1].interactions;
    if(actionNumber === 1)
    {
      return interactions[0];
    }
    else if(actionNumber === 2)
    {
      return interactions[1];
    }
  },
  onAdDownloadComplete : function(issuccess,adNumber){
    if(issuccess)
    {
      var i=this.imageObjArray.length;
      this.alignFlexInScrollContainer(i+1,adNumber);
      if(i===0)
      {
        this.enableAfterImageDownloads(adNumber);
        this.setGestureRecogniser();
      }
      this.imageObjArray[i] = adNumber;
    }    
    else
    {
      this.imageDownloadFailureCount++;
      if(this.imageDownloadFailureCount === this.numOfAds)
      {
        var logger = applicationManager.getLoggerManager();
        logger.log("####All PostLogin Ad's download failed\n####Therefore Closing Them");
        this.onAllAdsDownloadFailure();
      }
    }
  },
  enableAfterImageDownloads : function(adNumber){
    var title =null;
    var textColor =null;
    var text =null;
    var scope = this;
    if(this.isActionPresent(adNumber,1))
    {
      this.view["flxAdAction1Img"+adNumber].setVisibility(true);
      this.view["rtxLblAdAction1Img"+adNumber].setVisibility(true);
      this.view["btnAdAction1Img"+adNumber].backgroundColor = this.getActionDetails(adNumber,1).colour;
      this.view["btnAdAction1Img"+adNumber].setVisibility(true);
      title = this.getActionDetails(adNumber,1).text;
      textColor = this.getActionDetails(adNumber,1).textcolor;
      if(!textColor || textColor === "")
      {
        textColor = "#ffffff";
      }
      text = "<label style=\"color:"+textColor+"\">"+title+"</label>";
      this.view["rtxLblAdAction1Img"+adNumber].text = text;
      this.view["flxAdAction1Img"+adNumber].forceLayout();

    }
    if(this.isActionPresent(adNumber,2))
    {
      var buttonType = this.getActionDetails(adNumber,2).buttonType;
      if( buttonType === "BUTTON")
      {
        this.view["flxAdAction2Img"+adNumber].setVisibility(true);
        this.view["rtxLblAdAction2Img"+adNumber].setVisibility(true);
        this.view["btnAdAction2Img"+adNumber].backgroundColor = this.getActionDetails(adNumber,2).colour;
        this.view["btnAdAction2Img"+adNumber].setVisibility(true);
        title = this.getActionDetails(adNumber,2).text;
        textColor = this.getActionDetails(adNumber,2).textcolor;
        if(!textColor || textColor === "")
        {
          textColor = "#ffffff";
        }
        text = "<label style=\"color:"+textColor+"\">"+title+"</label>";
        this.view["rtxLblAdAction2Img"+adNumber].text = text;
      } 
      else if(buttonType === "LINK")
      {
        this.view["flxAdAction2Img"+adNumber].setVisibility(true);
        this.view["btnAdAction2Img"+adNumber].setVisibility(false);
        this.view["rtxLblAdAction2Img"+adNumber].setVisibility(true);
        title = this.getActionDetails(adNumber,2).text;
        textColor = this.getActionDetails(adNumber,2).textcolor;
        if(!textColor)
        {
          textColor = "#ffffff";
        }
        text = "<u><label style=\"color:"+textColor+"\">"+title+"</label></u>";
        this.view["rtxLblAdAction2Img"+adNumber].text = text;
      }
      this.view["flxAdAction2Img"+adNumber].forceLayout();
    }
  },

  alignFlexInScrollContainer : function (position,flxNumber){
    if(position === 1)
    {
      this.view.flxProgressBar.setVisibility(true);
      this.view["flxAd"+flxNumber].setVisibility(true);
      this.view.flxLoadingIndicator.setVisibility(false);
    }
    else
    {
      var leftVal = (position-1)*parseInt(applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth);
      this.view["flxAd"+flxNumber].left = leftVal+"dp";
      this.view["flxAd"+flxNumber].setVisibility(true);
    }
    this.view.flxScrollContainerAds.forceLayout();
    var noOfDownloadedAds = position;
    if(noOfDownloadedAds>1)
    {
      if(noOfDownloadedAds === 2)
      {
        this.view.flxProgressButton1.setVisibility(true);
        this.view.flxProgressButton2.setVisibility(true);
        this.view.flxProgressButton1.left="46%";
        this.view.flxProgressButton1.skin = "sknflxADADADRadius100px";
        this.view.flxProgressButton2.skin = "sknflxE3E3E3Radius100px";
      }
      else if(noOfDownloadedAds === 3)
      {
        this.view.flxProgressButton3.setVisibility(true);
        this.view.flxProgressButton3.skin = "sknflxE3E3E3Radius100px";
        this.view.flxProgressButton1.left="43.5%";
      }
      else if(noOfDownloadedAds === 4)
      {
        this.view.flxProgressButton4.setVisibility(true);
        this.view.flxProgressButton4.skin = "sknflxE3E3E3Radius100px";
        this.view.flxProgressButton1.left="41%";
      }
      else
      {
        this.view.flxProgressButton5.setVisibility(true);
        this.view.flxProgressButton5.skin = "sknflxE3E3E3Radius100px";
        this.view.flxProgressButton1.left="38%";
      }
      this.view.flxProgressBar.forceLayout();
    }
  },

  onAllAdsDownloadFailure : function(){
    this.view.imgLoadingIndicator.src="fullscreenaddownloadfailed.png";
    this.onAdClose();
  },
  disableUntilImageDownloads : function(){
    for(var i=1;i<6;i++)
    {
      this.view["flxAdAction1Img"+i].setVisibility(false);
      this.view["btnAdAction1Img"+i].setVisibility(false);
      this.view["rtxLblAdAction1Img"+i].setVisibility(false);

      this.view["flxAdAction2Img"+i].setVisibility(false);
      this.view["btnAdAction2Img"+i].setVisibility(false);
      this.view["rtxLblAdAction2Img"+i].setVisibility(false);
    }
    this.view.flxProgressButton1.setVisibility(false);
    this.view.flxProgressButton2.setVisibility(false);
    this.view.flxProgressButton3.setVisibility(false);
    this.view.flxProgressButton4.setVisibility(false);
    this.view.flxProgressButton5.setVisibility(false);
    this.view.flxProgressBar.forceLayout();
    this.view.flxProgressBar.setVisibility(false);
    this.view.flxLoadingIndicator.setVisibility(true);
    this.view.imgLoadingIndicator.src = "loaderfullscreen.gif";
  },

  removeGestureRecognisers : function()
  {
    if(this.gestIDs.length!==0)
    {
      var  swipeGestureID = this.gestIDs[0];
      var  tapGestureID = this.gestIDs[1];
      this.view.flxAdActionArea.removeGestureRecognizer(swipeGestureID);
      this.view.flxAdActionArea.removeGestureRecognizer(tapGestureID);
      this.gestIDs = [];
    }
  },

  setGestureRecogniser : function()
  {
    if(this.gestIDs.length === 0)
    {
      var swipeGestID = this.view.flxAdActionArea.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 20,
        swipevelocity: 60
      }, this.onAdSwipe);
      var tapGestID = this.view.flxAdActionArea.setGestureRecognizer(1, {
        fingers: 1,
        taps:1
      }, this.onAdTap);
      this.gestIDs[0]=swipeGestID;
      this.gestIDs[1]=tapGestID;
    }
    this.view.flxAction1.onClick = this.onAdAction1Onclick;
    this.view.flxAction2.onClick = this.onAdAction2Onclick;
  },
  onAdSwipe : function(widget, gestureInfo, context) {
    var adNum = this.imageObjArray.length;
    var scWidth= applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
    var currFlex = this.currentFlex;
    var xVal = this.xOffset;
    var isThereChange = false;

    if (gestureInfo.swipeDirection === 1) {
      if (currFlex>=1 && currFlex<adNum)
      {
        isThereChange = true;
        xVal = xVal + scWidth;
        currFlex++;
      }
    } else if (gestureInfo.swipeDirection === 2) {
      if (currFlex>1 && currFlex<=adNum) {
        isThereChange = true;
        xVal = xVal - scWidth;
        currFlex--;
      } 
    }
    if(isThereChange)
    {
      this.view.flxScrollContainerAds.setContentOffset({
        x: xVal,
        y: 0
      }, true);

      var currAd = this.imageObjArray[currFlex-1];
      this.enableAfterImageDownloads(currAd);
      for (var j = 1; j <= adNum; j++) {
        if (j === currFlex){
          this.view["flxProgressButton" + j ].skin = "sknflxADADADRadius100px";
        }
        else{
          this.view["flxProgressButton" + j ].skin = "sknflxE3E3E3Radius100px";
        }
      }
      this.view.flxProgressBar.forceLayout();
      this.view.flxScrollContainerAds.forceLayout();
      this.currentFlex = currFlex;
      this.xOffset = xVal;
    }
  },

  isActionPresent : function(adNumber,actionNumber) {
    var interactions = this.nonInfeedAds[adNumber-1].interactions;
    if(actionNumber === 1)
    {
      if(interactions.length > 0)
      {
        return true;
      }
    }
    else if (actionNumber === 2)
    {
      if(interactions.length > 1)
      {
        return true;
      }
    }
    return false;
  },
  onAdTap : function(widget, gestureInfo, context){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nonInfeedAds = this.nonInfeedAds;
    var currFlex = this.currentFlex;
    var currAd = this.imageObjArray[currFlex-1];
    var navType = nonInfeedAds[currAd-1].navigationType;
    if(navType === "URL")
    {
      var url = nonInfeedAds[currAd-1].navigationURL;
      kony.application.openURL(url);
    }
    else 
    {
      kony.print("Navigation Type:"+navType);
    }
    var navId = nonInfeedAds[currAd-1].navigationId;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.sendDmResponseForPostloginAds(navId);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onAdAction1Onclick : function(){
    if(!this.view.flxLoadingIndicator.isVisible)
    {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var currFlex = this.currentFlex;
    var currAd = this.imageObjArray[currFlex-1];
    var navType = this.getActionDetails(currAd,1).navigationType;
    if(navType  === "URL")
    {
      var navURL = this.getActionDetails(currAd,1).navigationURL;
      kony.application.openURL(navURL);
    }
    else 
    {
      kony.print("Navigation type"+navType);
    }
    var navId = this.getActionDetails(currAd,1).navigationId;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.sendDmResponseForPostloginAds(navId);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
   }
  },
  onAdAction2Onclick : function(){
    if(!this.view.flxLoadingIndicator.isVisible)
    {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var currFlex = this.currentFlex;
    var currAd = this.imageObjArray[currFlex-1];
    var navType = this.getActionDetails(currAd,2).navigationType;
    if(navType  === "URL")
    {
      var navURL = this.getActionDetails(currAd,2).navigationURL;
      kony.application.openURL(navURL);
    }
    else 
    {
      kony.print("Navigation type"+navType);
    }
    var navId = this.getActionDetails(currAd,2).navigationId;
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.sendDmResponseForPostloginAds(navId);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  onAdClose: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.sendDmResponseForPostloginAds("EXIT");
    authMode.presentationController.navigateToDashboardFromAds();
  },

}) ;