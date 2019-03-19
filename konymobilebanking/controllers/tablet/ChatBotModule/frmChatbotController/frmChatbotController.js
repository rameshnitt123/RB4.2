define({ 
  chatBotModule: null,
  isLoadingScreenOn: false,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initActions();
	var ChatBot = applicationManager.getLoggerManager(); 
	ChatBot.setCustomMetrics(this, false, "ChatBot");
  },

  initActions: function() {
	this.initHeaderActions();
	this.view.tbxChatbot.onTextChange = this.toggleImage;
	this.view.flxMic.onClick = this.onClickEnter;
	this.view.tbxChatbot.onDone = this.onClickEnter;
  },

  initHeaderActions: function() {
	if (!applicationManager.getDeviceUtilManager().isIpad()) {
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.closeChatBot;
	}
  },

  closeChatBot: function() {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.goBack();
  },

  onClickEnter: function() {
	var userText = this.view.tbxChatbot.text;
	if (userText) {
	  this.getChatBotModule().presentationController.setLastTyped("user");
	  this.view.tbxChatbot.text = "";
	  this.view.imgMic.src = "mic.png";
	  this.getChatBotModule().presentationController.predictString(null, userText);
	  this.addUserMessage(userText);
	  this.addUserTime();
	  this.showLoading();
	}
  },

  clearChatBotMessages: function() {
	this.view.flxBody.removeAll();
	this.view.tbxChatbot.text = "";
  },

  clean: function() {
	this.view.flxBody.removeAll();
	this.view.tbxChatbot.text = "";
	this.getChatBotModule().presentationController.clean();
  },

  toggleImage: function() {
	var userText = this.view.tbxChatbot.text;
	this.view.imgMic.src = userText ? "send.png" : "mic.png";
  },

  flxBodyRemoveAt: function(index) {
	this.view.flxBody.removeAt(index);
  },

  showLoading: function() {
	this.addIcon();
	this.view.flxMic.setEnabled(false);
	var properties = {id: "botLoading", src: "botload.gif", left: "40dp", top: "-29dp", height: "28dp", width: "75dp"};
	var layout = {"imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS};
	this.view.flxBody.add(this.createImage(properties, layout, {}));
	this.view.flxBody.scrollToEnd();
	this.isLoadingScreenOn = true;
  },

  dismissLoading: function() {
	if (this.isLoadingScreenOn) {
	  var widgets = this.view.flxBody.widgets();
	  var widgetsLength = widgets.length;
	  this.view.flxMic.setEnabled(true);
	  this.view.flxBody.removeAt(widgetsLength-1);
	  this.view.flxBody.removeAt(widgetsLength-2);
	  this.isLoadingScreenOn = false;
	}
  },

  addMessageWithIcon: function(message) {
	this.addIcon();
	this.addMessage(true, message);
  },

  addIcon: function() {
	var properties = {id: "botIcon", src: "myrabot.png", left: "5dp", top: "3%", height: "30dp", width: "30dp"};
	this.view.flxBody.add(this.createImage(properties, {}, {}));
	this.view.flxBody.scrollToEnd();
  },

  addMessage: function(isIconAdded, message) {
	var skin = "sknLbl2d2d37SSP22pxWithBG";
	var msgTop = isIconAdded ? "-29dp" : "1%";
	var scope = this;
	var properties = {id: "botMessage", text: message, left: "40dp", top: msgTop, maxWidth: "240dp", skin: skin};
	this.view.flxBody.add(this.createLabel(properties));
	this.view.flxBody.scrollToEnd();
  },

  addButtons: function(data) {
	this.addButtonsHelper(data);
  },

  addButtonsHelper: function(data) {
	var self = this;
	var properties = {id: "botHorizontalFlex", left: "40dp", top: "4dp", wigth: "90%", 
					  height: "40dp", layoutType: kony.flex.FLOW_HORIZONTAL};  
	var horizontalFlex = this.createFlexContainer(properties, {"vExpand": false}, {});
	horizontalFlex.setDefaultUnit(kony.flex.DP);

	data.forEach(function(item, index) {
	  var button = new kony.ui.Button({
		"id": "botButton" + index + "" + self.getRandomString(),
		"text": item.text,
		"left": "4dp",
		"height": "40dp",
		"width": "preferred",
		"top": "0dp",
		"skin": "sknBtnffffffBorderd3d3d30095e422px",
		"focusSkin": "sknBtnf0f9ffBorder1798f2SSP1798f222px",
		"zIndex": 10,
		"onClick": self.buttonClickHandler.bind(this, item)
	  },
	  {
		"contentAlignment": constants.CONTENT_ALIGN_CENTER
	  }, {});
	  horizontalFlex.add(button);
	});
	this.view.flxBody.add(horizontalFlex);
	this.view.flxBody.scrollToEnd();
  },

  addUserMessage: function(message) {
	var skin = "sknLblffffff22pxWithBG";
	var properties = {id: "userMessage", text: message, right: "30dp", top: "3%", maxWidth: "225dp", skin: skin};
	this.view.flxBody.add(this.createLabel(properties));
	this.view.flxBody.scrollToEnd();
  },

  addBotTime: function() {
	this.addTime("bot");
  },

  addUserTime: function() {
	this.addTime("user");
  },

  addTime: function(type) {
	var currentTime = this.getChatBotModule().presentationController.getCurrentTime();
	var left = type === "bot" ? "40dp" : "";
	var right = type === "bot" ? "" : "30dp";
	var skin = "sknLbl959595SSP20px";
	var properties = {id: "botOrUserTime", text: currentTime, left: left, right: right, top: "2dp", 
					  maxWidth: "200dp", skin: skin, padding: [0, 0, 0, 0]};
	this.view.flxBody.add(this.createLabel(properties));
	this.view.flxBody.scrollToEnd();
  },

  buttonClickHandler: function(data){
	if(data.onClickCallback) {
	  data.onClickCallback(data.parameter, data.text);
	}
  },

  addMoreItemsForAccountBalance: function(data, text, noOfRecordsDisplayed, index) {
	var widgets = this.view.flxBody.widgets();
	var length = !index && widgets ? widgets.length : index;
	var callback = this.onClickAccountBalanceHandler.bind(this, data, noOfRecordsDisplayed, length);
	var flxSkin = "sknflxefefefRadius15px";
	var flexProperties = {id: "FLEXMOREITEMS", left: "33dp", top: "4dp", width: "55%", skin: flxSkin,
						  height: "40dp", onClick: callback};  
	var moreFlex = this.createFlexContainer(flexProperties, {}, {});
	moreFlex.setDefaultUnit(kony.flex.DP);

	var lblSkin = "SknBotMoreItemsText";
	var CENTER = constants.CONTENT_ALIGN_CENTER;
	var lblProperties = {id: "Message", text: text, left: "5dp", top: "0dp", width: "70%", 
						 height: "100%", skin: lblSkin, contentAlignment: CENTER};
	moreFlex.add(this.createLabel(lblProperties));

	if (index) {
	  this.view.flxBody.addAt(moreFlex, index);
	} else {
	  this.view.flxBody.add(moreFlex);
	  this.view.flxBody.scrollToEnd();
	}
  },

  onClickAccountBalanceHandler: function(data, noOfRecordsDisplayed, index){
	this.getChatBotModule().presentationController.onClickMoreAccountBalanceHandler(data, noOfRecordsDisplayed, index);
  },

  getRandomString: function() {
	return this.getChatBotModule().presentationController.getRandomString();
  },

  addMessageAt: function(isIconAdded, message, index) {
	var msgTop = isIconAdded ? "-29dp" : "1%";
	var skin = "sknLbl2d2d37SSP22pxWithBG";
	var properties = {id: "botMessage", text: message, left: "40dp", top: msgTop, maxWidth: "240dp", skin: skin};
	this.view.flxBody.addAt(this.createLabel(properties), index);
  },

  addAtmDetailFlex: function(data, index) {
	var mainFlex = this.getAtmDetailMainFlex();
	var flexLeft = this.getAtmDetailLeftFlex(data);
	var flexSeperator = this.getAtmDetailVerticalSeperatorFlex();
	var flexRight = this.getAtmDetailRightFlex(data);
	mainFlex.add(flexLeft, flexSeperator, flexRight);

	if (index) {
	  this.view.flxBody.addAt(mainFlex, index);
	} else{
	  this.view.flxBody.add(mainFlex);
	  this.view.flxBody.scrollToEnd();
	}
  },

  getAtmDetailMainFlex: function() { 	
	var flxSkin = "sknflxefefefRadius15px";
	var flexProperties = {id: "MainFlexAtmDetails", left: "40dp", top: "3dp", width: "75%", 
						  skin: flxSkin, height: "90dp"};  
	var mainFlex = this.createFlexContainer(flexProperties, {}, {});
	mainFlex.setDefaultUnit(kony.flex.DP);
	return mainFlex;
  },

  getAtmDetailLeftFlex: function(data) {
	var layoutType = kony.flex.FLOW_VERTICAL;
	var callback = this.onClickOfAtmDetailsLeftFlex.bind(this, data);
	var flexProperties = {id: "leftFlex", left: "0dp", top: "0dp", width: "74%",
						  height: "90dp", onClick: callback, layoutType: layoutType};  
	var leftFlex = this.createFlexContainer(flexProperties, {}, {});
	leftFlex.setDefaultUnit(kony.flex.DP);

	var lblAtmName = this.getLabelAtmName(data.informationTitle);
	var lblAtmAddress = this.getLabelAtmAddress(data.addressLine2);
	var lblDistanceAndStatus = this.getLabelAtmDistnceAndStatus("", data.status);
	leftFlex.add(lblAtmName, lblAtmAddress, lblDistanceAndStatus);
	return leftFlex;
  },

  getLabelAtmName: function(msg) {
	var skin = "sknLbl2d2d37SSP26px";
	var top = "10dp";
	var maxNoOfLines = 1;
	return this.getAtmLabel(msg, skin, top, maxNoOfLines);
  },

  getLabelAtmAddress: function(msg) {
	var skin = "sknLbl2d2d37SSP22px";
	var top = "5dp";
	var maxNoOfLines = 2;
	return this.getAtmLabel(msg, skin, top, maxNoOfLines);
  },

  getLabelAtmDistnceAndStatus: function(distance, status) {
	var text = distance ? distance + "    " + status: "" + status;
	var skin = "sknLbl68b818SSP22px";
	var top = "5dp";
	var maxNoOfLines = 1;
	return this.getAtmLabel(text, skin, top, maxNoOfLines);
  },

  getAtmLabel: function(text, skin, top, maxNoOfLines) {
	var TRUNCATE = constants.TEXT_TRUNCATE_END;
	var properties = {id: "AtmLabel", text: text, left: "5%", top: top, width: "94%", skin: skin, 
					  padding: [0, 0, 0, 0], maxNumberOfLines: maxNoOfLines, textTruncatePosition: TRUNCATE};
	return this.createLabel(properties);
  },

  getAtmDetailVerticalSeperatorFlex: function() {	
	var flxSkin = "sknFlxffffff";
	var flexProperties = {id: "seperator", left: "74%", top: "0dp", width: "2dp", 
						  skin: flxSkin, height: "100%"};  
	var flex = this.createFlexContainer(flexProperties, {}, {});
	flex.setDefaultUnit(kony.flex.DP);	
	return flex;
  },

  getAtmDetailRightFlex: function(data) {
	var callback = this.onClickOfRightFlexInAtmsDisplay.bind(this, data);
	var flexProperties = {id: "atmRightFlex", left: "76%", top: "0dp", width: "24%", 
						  height: "90dp", onClick: callback};  
	var rightFlex = this.createFlexContainer(flexProperties, {}, {});
	rightFlex.setDefaultUnit(kony.flex.DP);

	var imgProperties = {id: "imageMap", src: "locattion.png", centerX:"50%", 
						 centerY: "50%", height: "50dp", width: "40dp"};
	rightFlex.add(this.createImage(imgProperties, {}, {}));
	return rightFlex;
  },

  onClickOfAtmDetailsLeftFlex: function(data){
	this.getChatBotModule().presentationController.navigateToATMDetailsScreen(data);
  },

  onClickOfRightFlexInAtmsDisplay: function(data) {
	this.getChatBotModule().presentationController.navigateToMapWithOneRecord(data);
  },

  addMoreItemsFlexForMaps: function(data, text, index) {
	var widgets = this.view.flxBody.widgets();
	var length = !index && widgets ? widgets.length : index;
	var flxSkin = "sknflxefefefRadius15px";
	var callback = this.onClickMapHandler.bind(this, data, length);
	var flexProperties = {id: "FLEXMOREITEMS", left: "40dp", top: "4dp", width: "75%", height: "80dp", 
						  onClick: callback, skin: flxSkin};  
	var moreFlex = this.createFlexContainer(flexProperties, {}, {});
	moreFlex.setDefaultUnit(kony.flex.DP);

	var lblSkin = "SknBotMoreItemsText";
	var CENTER = constants.CONTENT_ALIGN_CENTER;
	var properties = {id: "Message", text: text, left: "5dp", top: "0dp", width: "70%", 
					  skin: lblSkin, contentAlignment: CENTER};
	moreFlex.add(this.createLabel(properties));

	if (index) {
	  this.view.flxBody.addAt(moreFlex, index);
	} else {
	  this.view.flxBody.add(moreFlex);
	  this.view.flxBody.scrollToEnd();
	}
  },

  createImage: function(properties, layout, config) {
	var self = this;	
	return new kony.ui.Image2({
	  "id": properties.id ? properties.id + self.getRandomString() : self.getRandomString(),
	  "isVisible": properties.isVisible ? properties.isVisible : true,
	  "src": properties.src ? properties.src : "",
	  "left": properties.left ? properties.left : "",
	  "right": properties.right ? properties.right : "",
	  "top": properties.top ? properties.top : "",
	  "bottom": properties.bottom ? properties.bottom : "",
	  "centerX": properties.centerX ? properties.centerX : "",
	  "centerY": properties.centerY ? properties.centerY : "",
	  "height": properties.height ? properties.height : "",
	  "width": properties.width ? properties.width : "",
	}, layout, config);
  },

  createLabel: function(prop) {
	var self = this;
	var LEFT = constants.CONTENT_ALIGN_MIDDLE_LEFT;
	return new kony.ui.Label({
	  "id" : prop.id ? prop.id + self.getRandomString() : "" + self.getRandomString(),
	  "text" : prop.text ? prop.text : "",
	  "left": prop.left ? prop.left : "",
	  "right": prop.right ? prop.right : "",
	  "top": prop.top ? prop.top : "",
	  "bottom": prop.bottom ? prop.bottom : "",
	  "width": prop.width ? prop.width : "preferred",
	  "height": prop.width ? prop.width : "preferred",
	  "maxWidth": prop.maxWidth ? prop.maxWidth : "",
	  "maxHeight": prop.maxHeight ? prop.maxHeight : "",
	  "isVisible": prop.isVisible ? prop.isVisible : true,
	  "skin": prop.skin ? prop.skin : "slLabel",
	  "zindex": prop.zindex ? prop.zindex : 1,
	  "textStyle": {
		"letterSpacing": prop.letterSpacing ? prop.letterSpacing : 0,
		"strikeThrough": prop.strikeThrough ? prop.strikeThrough : false
	  },
	  "maxNumberOfLines": prop.maxNumberOfLines ? prop.maxNumberOfLines : "",
	  "textTruncatePosition": prop.textTruncatePosition ? prop.textTruncatePosition : "",
	},
	{
	  "contentAlignment": prop.contentAlignment ? prop.contentAlignment : LEFT,
	  "padding": prop.padding ? prop.padding : [2, 2, 2, 2],
	  "paddingInPixel": prop.paddingInPixel ? prop.paddingInPixel : false
	}, 
	{
	  "textCopyable": prop.textCopyable ? prop.textCopyable : false
	});
  },

  createFlexContainer: function(properties, layout, config) {
	var self = this;
	var layoutType = kony.flex.FREE_FORM;
	return new kony.ui.FlexContainer({
	  "id": properties.id ? properties.id + "" + self.getRandomString() : "" + self.getRandomString(),
	  "top": properties.top ? properties.top : "",
	  "left": properties.left ? properties.left : "",
	  "right": properties.right ? properties.right : "",
	  "width": properties.width ? properties.width : "",
	  "height": properties.height ? properties.height : "",
	  "zIndex": properties.zIndex ? properties.zIndex : 1,
	  "skin": properties.skin ? properties.skin : "slFbox",
	  "onClick": properties.onClick ? properties.onClick : "",
	  "isVisible": properties.isVisible ? properties.isVisible : true,
	  "clipBounds": properties.clipBounds ? properties.clipBounds : true,
	  "layoutType": properties.layoutType ? properties.layoutType : layoutType,
	}, layout, config);
  },

  onClickMapHandler: function(data, index) {
	if (data.callback) {
	  data.callback(data.locationData, data.noOfRecordsDisplayed, index);
	}
  },

  getChatBotModule: function() {
	var chatBotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
	if (!this.chatBotModule) {
	  this.chatBotModule = chatBotModule;
	}
	return this.chatBotModule;
  }
});