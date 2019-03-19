define({ 
 skins : {
   "BotLabelSkin" : "sknLbl2d2d37SSP22pxWithBG",
   "UserLabelSkin" : "sknLblffffff22pxWithBG",
   "MapStatusOpen" : "sknLbl68b818SSP22px",
   "MapStatusClosed" : "sknLblF54B5E22px",
   "TimeSkin" : "sknLbl959595SSP20px",
   "FlexGreySkin" : "sknflxefefefRadius15px",
 },
 botIcon : "myrabot.png",
 isLoadingScreenOn : false,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES_CALLBACK",currentForm,this.clean.bind(this));
    var scope = this;
    //#ifdef android
    this.view.customHeader.btnRight.onClick = function(){
      scope.closeChatBot();
    };
    //#endif
    this.view.tbxChatbot.onDone = function(){
      scope.onClickEnter();
    };
  },
 frmChatbotPreshow : function(){

          var ChatBot = applicationManager.getLoggerManager(); 
                ChatBot.setCustomMetrics(this, false, "ChatBot");
                
    var scope = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
   this.view.tbxChatbot.onTextChange = function(){
     scope.onTextChangeOfUserTextField();
   };
   this.view.flxMic.onClick = function(){
     scope.onClickEnter();
   };
   //#ifdef android
   this.view.onDeviceBack = function(){
     scope.onDeviceBack();
   };
   //#endif
 },
  onDeviceBack : function(){
    if(this.isLoadingScreenOn === false){
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
      this.clean();
    }
  },
  onClickEnter : function(){
      var scope = this;
    if(this.isLoadingScreenOn === true){
      return;
    }
    var userText = this.view.tbxChatbot.text;
      var startCallbacks = {
        "onSuccess":onSuccess,
        "onError":onError
      };
    if(userText !== null && userText !== undefined && userText.length>0){
      var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
      chatBotModule.presentationController.setLastTyped("user");
      this.view.tbxChatbot.text = "";
      this.changeEnterImageToVoice();
      chatBotModule.presentationController.predictString(null,userText);
      this.addUserMessage(userText);
      this.addUserTime();
      this.showLoading();
    }
      else{
        setupMic(startCallbacks);
      }      
      function onError(e){
        kony.print("Error Message : "+e);      
      }
      function onSuccess(rsp){ 
        var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
        chatBotModule.presentationController.setLastTyped("user");
        chatBotModule.presentationController.predictString(null,rsp);
        scope.addUserMessage(rsp);
        scope.addUserTime();
        scope.showLoading();
      }
    },
  changeEnterImageToVoice : function(){
    this.view.imgMic.src = "mic.png";
  },
  
  changeVoiceImageToEnter : function(){
    this.view.imgMic.src = "send.png";
  },
  clearChatBotMessages : function(){
    this.view.flxBody.removeAll();
    this.view.tbxChatbot.text = "";
  },
  
  clean : function(){
    if(this.isLoadingScreenOn === false){
       this.view.flxBody.removeAll();
       this.view.tbxChatbot.text = "";
       var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
       chatBotModule.presentationController.clean();
    }
  },
  closeChatBot : function(){
    //this.clean();
    if(this.isLoadingScreenOn === false){
       var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
       chatBotModule.presentationController.clean();
       var navigationManager = applicationManager.getNavigationManager();
       navigationManager.goBack();
    }
  },
  onTextChangeOfUserTextField : function(){
    var userText = this.view.tbxChatbot.text;
    if(userText && userText.length > 0){
      this.changeVoiceImageToEnter();
    }
    else{
      if(userText === null || userText.length === 0){
        this.changeEnterImageToVoice();
      }
    }
  },
  
  flxBodyRemoveAt : function(index){
    this.view.flxBody.removeAt(index);
  },
  
  showLoading : function(){
    this.isLoadingScreenOn = true;
    this.view.flxMic.setEnabled(false);
    this.addIcon();
    var IMAGE = new kony.ui.Image2({
      "id" : "botLoading"+this.getRandomString(),
      "isVisible" : true,
      "src" : "botload.gif",
      "left" : "35dp",
      "top" : "-29dp",
      "height" : "28dp",
      "width" : "75dp"
    },{
      imageScaleMode:constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
    },{});
    this.view.flxBody.add(IMAGE);
    this.view.flxBody.scrollToEnd();
  },
  
  dismissLoading : function(){
    if(this.isLoadingScreenOn){
      var widgets = this.view.flxBody.widgets();
      var widgetsLength = widgets.length;
      this.view.flxMic.setEnabled(true);
      this.view.flxBody.removeAt(widgetsLength-1);
      this.view.flxBody.removeAt(widgetsLength-2);
      this.isLoadingScreenOn = false;
    }
  },
  
  addMessageWithIcon : function(message){
    this.addIcon();
    var isIconAdded = true;
    this.addMessage(isIconAdded,message);
  },
  
  addIcon : function(){
    var scope = this;
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    var IMAGE = new kony.ui.Image2({
      "id" : "botIcon"+randomVal,
      "left" : "1dp",
      "top" : "3%",
      "height" : "30dp",
      "width" : "30dp",
      "isVisible" : true,
      "src" : scope.botIcon
    },{},{});
    this.view.flxBody.add(IMAGE);
    this.view.flxBody.scrollToEnd();
  },
  
  addMessage : function(isIconAdded,message){
    var msgTop = "";
    if(isIconAdded === true){
      msgTop = "-29dp";
    }
    else{
      msgTop = "1%";
    }
    var scope = this;
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    var MESSAGE = new kony.ui.Label({
      "id" : "botMessage"+randomVal,
      "text" : message,
      "left" : "33dp",
      "top" : msgTop,
      "width" : "preferred",
      "maxWidth" : "240dp",
      "isVisible" : true,
      "skin" : scope.skins.BotLabelSkin,
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zindex" : 1
    },{
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [2, 2, 2, 2],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });
    
    this.view.flxBody.add(MESSAGE);
    this.view.flxBody.scrollToEnd();
  },
  
  addButtons : function(data){
    var length = data.length;
    var maxLength = 40;
    var currentLength = 0;
    var temp = [];
    for(var i=0;i<data.length;i++){
      currentLength += data[i].text.length+2;
      if(currentLength <= maxLength){
        temp.push(data[i]);
      }
      else{
        if(temp.length > 0){
          this.addButtonsHelper(temp,i+"");
          currentLength = data[i].text.length+2;
          temp = [];
          temp.push(data[i]);
        }
        else{
          temp.push(data[i]);
        }
      }
    }
    if(temp.length > 0){
      this.addButtonsHelper(temp,"end");
    }
  },
  
  addButtonsHelper : function(data,tail){
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    var randomVal2 = chatBotModule.presentationController.getRandomString();
    var scope = this;
    //#ifdef iphone
    var padding = [10,10,10,10];
    var buttonLayOut = {
      "padding" :padding,
      "contentAlignment" : constants.CONTENT_ALIGN_CENTER
    };
    //#endif

    //#ifdef android
    var buttonLayOut = {
      "margin" : [2,2,2,2],
      "contentAlignment" : constants.CONTENT_ALIGN_CENTER
    };
    //#endif
    var HorizontalFlex = new kony.ui.FlexContainer({
      "id" : "botHorizontalFlex"+tail+randomVal,
      "left" : "31dp",
      "top" : "4dp",
      "wigth" : "90%",
      "height" : "40dp",
      "zIndex" : 1,
      "isVisible" : true,
      "clipBounds" : true,
      "layoutType" : kony.flex.FLOW_HORIZONTAL			
    },{
      "vExpand" : false
    },{});
    HorizontalFlex.setDefaultUnit(kony.flex.DP);
    for(var i=0;i<data.length;i++){
      var BUTTON = new kony.ui.Button({
        "id" : "botButton"+i+""+randomVal2,
        "text" : data[i].text,
        "left" : "4dp",
        "height" : "40dp",
        "width" : "preferred",
        "top" : "0%",
        "skin" : "sknBtnffffffBorderd3d3d30095e422px",
        "focusSkin" : "sknBtnf0f9ffBorder1798f2SSP1798f222px",
        "zIndex" : 10,
        "onClick" : scope.buttonClickHandler.bind(this,data[i])
      },buttonLayOut,{});
      HorizontalFlex.add(BUTTON);
    }
    this.view.flxBody.add(HorizontalFlex);
    this.view.flxBody.scrollToEnd();
  },
  
  addUserMessage : function(message){
    var scope = this;
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    var MESSAGE = new kony.ui.Label({
      "id" : "userMessage"+randomVal,
      "text" : message,
      "right" : "3%",
      "top" : "3%",
      "width" : "preferred",
      "maxWidth" : "225dp",
      "isVisible" : true,
      "skin" : scope.skins.UserLabelSkin,
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zindex" : 1
    },{
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [2, 2, 2, 2],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });
    this.view.flxBody.add(MESSAGE);
    this.view.flxBody.scrollToEnd();
  },
  
  addBotTime : function(){
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var currentTime = chatBotModule.presentationController.getCurrentTime();
    this.addTime("bot",currentTime);
  },
  
  addUserTime : function(){
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var currentTime = chatBotModule.presentationController.getCurrentTime();
    var randomVal = chatBotModule.presentationController.getRandomString();
    this.addTime("user",currentTime);
  },
  
  addTime : function(type,currentTime){
    var scope = this;
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    var left = "";
    var right = "";
    if(type === "bot"){
      left = "37dp";
      right = "default";
    }
    if(type === "user"){
      left = "default";
      right = "15dp";
    }
    var TIME = new kony.ui.Label({
      "id" : "botOrUserTime"+randomVal,
      "text" : currentTime,
      "left" : left,
      "right" : right,
      "top" : "2dp",
      "width" : "preferred",
      "height" : "preferred",
      "maxWidth" : "200dp",
      "isVisible" : true,
      "skin" : scope.skins.TimeSkin,
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zIndex" : 1
    },{
      "contentAlignment" : constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding" : [0,0,0,0],
      "paddingInPixel" : false
    },{
      "textCopyable" : false
    });
    this.view.flxBody.add(TIME);
    this.view.flxBody.scrollToEnd();
  },
  buttonClickHandler : function(data,object){
    if(this.isLoadingScreenOn === false){
      var callback = data.onClickCallback;
      if(callback){
         callback(data.parameter,data.text);
      }
    }
  },
  
  
  addMoreItemsForAccountBalance : function(data,text,noOfRecordsDisplayed,index){
    var widgets = this.view.flxBody.widgets();
    var length = 0;
    if(index){
      length = index;
    }
    else{
      if(widgets){
        length = widgets.length;
      }
    }
    var scope = this;
  var MoreFLEX  = new kony.ui.FlexContainer({
      "id" : "FLEXMOREITEMS"+scope.getRandomString(),
      "top" : "4dp",
      "left" : "33dp",
      "width" : "55%",
      "height" : "40dp",
      "zIndex" : 1,
      "skin" : "sknflxefefefRadius15px",
      "onClick" : scope.onClickAccountBalanceHandler.bind(scope,data,noOfRecordsDisplayed,length),
      "isVisible" : true,
      "clipBounds" : true,
      "layoutType" : kony.flex.FREE_FORM
    },{},{});
    MoreFLEX.setDefaultUnit(kony.flex.DP);

    var MESSAGE = new kony.ui.Label({
      "id" : "Message"+scope.getRandomString(),
      "text" : text,
      "left" : "5dp",
      "top" : "0dp",
      "width" : "70%",
      "height" : "100%",
      "centerX" : "50%",
      "CenterY" : "50%",
      "isVisible" : true,
      "skin" : "SknBotMoreItemsText",
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zindex" : 1
    },{
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [2, 2, 2, 2],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });

    MoreFLEX.add(MESSAGE);

    if(index){
      this.view.flxBody.addAt(MoreFLEX,index);
    }else{
      this.view.flxBody.add(MoreFLEX);
      this.view.flxBody.scrollToEnd();
    }
},
  
  
  onClickAccountBalanceHandler : function(data,noOfRecordsDisplayed,index){
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    chatBotModule.presentationController.onClickMoreAccountBalanceHandler(data,noOfRecordsDisplayed,index);
  },
  getRandomString : function(){
    var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    var randomVal = chatBotModule.presentationController.getRandomString();
    return randomVal;
  },
  addMessageAt : function(isIconAdded,message,index){
    var msgTop = "";
    kony.print("$$-- isIconAdded value "+isIconAdded+"--$$");
    if(isIconAdded === true){
      msgTop = "-29dp";
    }
    else{
      msgTop = "1%";
    }
    var scope = this;
    var MESSAGE = new kony.ui.Label({
      "id" : "botMessage"+scope.getRandomString(),
      "text" : message,
      "left" : "33dp",
      "top" : msgTop,
      "width" : "preferred",
      "maxWidth" : "240dp",
      "isVisible" : true,
      "skin" : scope.skins.BotLabelSkin,
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zindex" : 1
    },{
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [2, 2, 2, 2],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });
    scope.view.flxBody.addAt(MESSAGE,index);
  },
  
  addAtmDetailFlex : function(data,index){
    var MainFlex = this.getAtmDetailMainFlex();
    var flexLeft = this.getAtmDetailLeftFlex(data);
    var flexSeperator = this.getAtmDetailVerticalSeperatorFlex();
    var flexRight = this.getAtmDetailRightFlex(data);
    MainFlex.add(flexLeft,flexSeperator,flexRight);
    if(index){
      this.view.flxBody.addAt(MainFlex,index);
    }
    else{
      this.view.flxBody.add(MainFlex);
      this.view.flxBody.scrollToEnd();
    }
  },
  
  getAtmDetailMainFlex : function(){
    var MainFlex = new kony.ui.FlexContainer({
      "id" : "MainFlexAtmDetails",
      "top" : "3dp",
      "left" : "33dp",
      "width" : "75%",
      "height" : "90dp",
      "zIndex" : 1,
      "skin" : "sknflxefefefRadius15px",
      "isVisible" : true,
      "clipBounds" : true,
      "layoutType" : kony.flex.FREE_FORM
    },{},{});
    MainFlex.setDefaultUnit(kony.flex.DP);

    return MainFlex;
  },
  
  getAtmDetailLeftFlex : function(data){
    var leftFlex = new kony.ui.FlexContainer({
      "id" : "leftFlex",
      "top" : "0dp",
      "left" : "0dp",
      "width" : "74%",
      "height" : "90dp",
      "zIndex" : 1,
      "skin" : "",
      "onClick" : this.onClickOfAtmDetailsLeftFlex.bind(this,data),
      "isVisible" : true,
      "clipBounds" : true,
      "layoutType" : kony.flex.FLOW_VERTICAL
    },{},{});
    leftFlex.setDefaultUnit(kony.flex.DP);		

    var lblAtmName = this.getLabelAtmName(data.informationTitle);
    var lblAtmAddress = this.getLabelAtmAddress(data.addressLine2);
    var lblDistanceAndStatus = this.getLabelAtmDistnceAndStatus("",data.status);
    leftFlex.add(lblAtmName,lblAtmAddress,lblDistanceAndStatus);
    return leftFlex;
  },
  
  getLabelAtmName : function(msg){
    var text = msg;
    var skin = "sknLbl2d2d37SSP26px";
    var top = "10dp";
    var maxNoOfLines = 1;
    var lblAtmName = this.getAtmLabel(text,skin,top,maxNoOfLines);
    return lblAtmName;
  },
  
  getLabelAtmAddress : function(msg){
    var text = msg;
    var skin = "sknLbl2d2d37SSP22px";
    var top = "5dp";
    var maxNoOfLines = 2;
    var lblAtmAddress = this.getAtmLabel(text,skin,top,maxNoOfLines);
    return lblAtmAddress;
  },
  
  getLabelAtmDistnceAndStatus : function(distance,status){
    var text = "";
    if(distance){
      text = distance+"    ";
    }
    text = text+status;
    var skin = "sknLbl68b818SSP22px";
    var top = "5dp";
    var maxNoOfLines = 1;
    var lblAtmDistanceAndStatus = this.getAtmLabel(text,skin,top,maxNoOfLines);
    return lblAtmDistanceAndStatus;
  },
  
  getAtmLabel : function(text,skin,top,maxNoOfLines){
    var AtmLabel = new kony.ui.Label({
      "id" : "AtmLabel",
      "height" : "preferred",
      "left" : "5%",
      "top" : top,
      "width" : "94%",
      "text" : text,
      "isVisible" : true,
      "skin" : skin,
      "zIndex" : 1,
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "maxNumberOfLines":maxNoOfLines,
      "textTruncatePosition": constants.TEXT_TRUNCATE_END
    },{
      "contentAlignment" : constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding" : [0,0,0,0],
      "paddingInPixel" : false
    },{
      "textCopyable" : false
    });
    return AtmLabel;
  },
  
  getAtmDetailVerticalSeperatorFlex : function(){
    var flex = new kony.ui.FlexContainer({
      "id" : "seperator"+this.getRandomString(),
      "top" : "0dp",
      "left" : "74%",
      "width" : "2dp",
      "height" : "100%",
      "zIndex" : 1,
      "skin" : "sknFlxffffff",
      "isVisible" : true,
      "clipBounds" : true
    },{},{});
    flex.setDefaultUnit(kony.flex.DP);
    return flex;
  },
  
  getAtmDetailRightFlex : function(data){
    var rightFlex = new kony.ui.FlexContainer({
      "id" : "atmRightFlex"+this.getRandomString(),
      "top" : "0dp",
      "left" : "76%",
      "width" : "24%",
      "height" : "90dp",
      "zIndex" : 1,
      "skin" : "",
      "isVisible" : true,
      "onClick":this.onClickOfRightFlexInAtmsDisplay.bind(this,data),
      "clipBounds" : true,
      "layoutType" : kony.flex.FREE_FORM
    },{},{});
    rightFlex.setDefaultUnit(kony.flex.DP);

    var IMAGE = new kony.ui.Image2({
      "id" : "imageMap",
      "isVisible" : true,
      "src" : "locattion.png",
      "height" : "50dp",
      "width" : "40dp",
      "centerX":"50%",
      "centerY" : "50%"
      //"imageScaleMode":constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO
    },{},{});

    rightFlex.add(IMAGE);

    return rightFlex;
  },
  
  onClickOfAtmDetailsLeftFlex : function(data){
    if(this.isLoadingScreenOn === false){
      var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
      chatBotModule.presentationController.navigateToATMDetailsScreen(data);
    }
    /*
    if(this.isLoadingScreenOn === false){
      (new kony.chatbotPresentation()).navigateToATMDetailsScreen(data);
    }
    */
  },
  
  onClickOfRightFlexInAtmsDisplay : function(data){
    if(this.isLoadingScreenOn === false){
      var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
      chatBotModule.presentationController.navigateToMapWithOneRecord(data);
    }
    
    /*
    if(this.isLoadingScreenOn === false){
      (new kony.chatbotPresentation()).navigateToMapWithOneRecord(data);
    }
    */
  },
  
  addMoreItemsFlexForMaps : function(data,text,index){
    var widgets = this.view.flxBody.widgets();
    var length = 0;
    if(index){
      length = index;
    }
    else{
      if(widgets){
        length = widgets.length;
      }
    }
    var MoreFLEX  = new kony.ui.FlexContainer({
      "id" : "FLEXMOREITEMS"+this.getRandomString(),
      "top" : "4dp",
      "left" : "33dp",
      "width" : "75%",
      "height" : "80dp",
      "zIndex" : 1,
      "skin" : "sknflxefefefRadius15px",
      "onClick" : this.onClickMapHandler.bind(this,data,length),
      "isVisible" : true,
      "clipBounds" : true,
      "layoutType" : kony.flex.FREE_FORM
    },{},{});
    MoreFLEX.setDefaultUnit(kony.flex.DP);


    var MESSAGE = new kony.ui.Label({
      "id" : "Message"+this.getRandomString(),
      "text" : text,
      "left" : "5dp",
      "top" : "0dp",
      "width" : "70%",
      "height" : "100%",
      "centerX" : "50%",
      "CenterY" : "50%",
      "isVisible" : true,
      "skin" : "SknBotMoreItemsText",
      "textStyle" : {
        "letterSpacing" : 0,
        "strikeThrough" : false
      },
      "zindex" : 1
    },{
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [2, 2, 2, 2],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });

    MoreFLEX.add(MESSAGE);

    if(index){
      this.view.flxBody.addAt(MoreFLEX,index);
    }else{
      this.view.flxBody.add(MoreFLEX);
      this.view.flxBody.scrollToEnd();
    }
  },
  
  onClickMapHandler : function(data,index){
    var callback = data.callback;
    var locationData = data.locationData;
    var noOfRecordsDisplayed = data.noOfRecordsDisplayed;
    if(callback){
      callback(locationData,noOfRecordsDisplayed,index);
    }
  }

 });