define({ 
  selectedLanguage: -1,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var self = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.initActions();
	this.setDataToLanguage();
    this.view.customHeader.btnRight.onClick=this.onClose;
    this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
  },
  initActions : function(){
    this.view.segLanguages.onRowClick = this.segLanguagesOnRowClick;
    this.view.btnUpdateLanguage.onClick = this.btnUpdateLanguageOnClick;
  },
  segLanguagesOnRowClick: function() {
    var navMan = applicationManager.getNavigationManager();
    var config = applicationManager.getConfigurationManager();
    var selectedSectionIndex = Math.floor(this.view.segLanguages.selectedRowIndex[0]);
    var selectedRowIndex = Math.floor(this.view.segLanguages.selectedRowIndex[1]);
    this.selectedLanguage = this.view.segLanguages.data[selectedRowIndex].lblLanguage;
    var sm = applicationManager.getStorageManager();
        var langObj = {
            "language": this.selectedLanguage,
            "index": selectedRowIndex,
            "flow": config.constants.LANG_CHANGE_FROM_SETTINGS
        };
        sm.setStoredItem("langObj", langObj);
        config.setLocaleAndDateFormat();
  },
  btnUpdateLanguageOnClick : function(){
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
    var navMan = applicationManager.getNavigationManager();
    var config = applicationManager.getConfigurationManager();
    var selectedSectionIndex=Math.floor(this.view.segLanguages.selectedRowIndex[0]);
    var selectedRowIndex=Math.floor(this.view.segLanguages.selectedRowIndex[1]);
    this.selectedLanguage =this.view.segLanguages.data[selectedRowIndex].lblLanguage;
    var sm = applicationManager.getStorageManager();
    var langObj = {"language":this.selectedLanguage,"index":selectedRowIndex,"flow":config.constants.LANG_CHANGE_FROM_SETTINGS};
    sm.setStoredItem("langObj",langObj);  
    config.setLocaleAndDateFormat();
    if (config.getLocale()) {
      kony.i18n.setCurrentLocaleAsync(config.getLocale(), this.languageChangeOnSuccess, this.languageChangeOnFailure);
    }    
  },
  languageChangeOnSuccess: function() {
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.commonFunctionForNavigation("frmLanguageSelectionLoading");    
  },

  languageChangeOnFailure: function() {
    kony.print("Fail");
  },
  getLanguageMasterData : function(){
    var data = ["US-English","UK-English","Spanish","German","French"];
    return data;
  },
  setDataToLanguage : function(){
    var languageData = this.getLanguageMasterData();
    var dataMap = {
      "flxLanguage": "flxLanguage",
      "imgCheckbox": "imgCheckbox",
      "lblLanguage": "lblLanguage",
      "imgFlag": "imgFlag"
    };
    var flags = {
      "US-English": "us.png",
      "UK-English": "uk.png",
      "Spanish": "spanish.png",
      "German": "german.png",
      "French": "french.png"
    }; 
    var data = [];
    for(var i=0;i<languageData.length;i++){
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
   
    this.view.segLanguages.widgetDataMap = dataMap;
    this.view.segLanguages.setData(data);
    var sm = applicationManager.getStorageManager();
    var langObjFromStorage = sm.getStoredItem("langObj");
    var index = 0;
    if(!kony.sdk.isNullOrUndefined(langObjFromStorage)){
      index = langObjFromStorage.index;      
    }
    this.view.segLanguages.selectedRowIndices = [[0,[index]]];
    this.selectedLanguage = this.view.segLanguages.data[index].lblLanguage;    
    this.view.forceLayout();
  },
  onClose : function () {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack(); 
  },
  flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
      	navMan.goBack(); 
    }
  
 });