define({
	
    preShow: function () {
        this.setSegmentData();
        this.initActions();
        this.view.customHeader.flxBack.onClick=this.backIcon;
		 if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
        }
        else{
        this.view.flxHeader.isVisible = true;
        } 
		this.view.lblAppVersion.text= kony.i18n.getLocalizedString("kony.mb.Support.AppVersion")+" "+appConfig.appVersion;
      //  this.enableOrDisableHamburger();
         var navManager = applicationManager.getNavigationManager();
         var configManager = applicationManager.getConfigurationManager();
         var MenuHandler =  applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUCONTACT);
         this.enableOrDisableHamburger();
         var currentForm=navManager.getCurrentForm();
         applicationManager.getPresentationFormUtility().logFormName(currentForm);
         var ContactUs = applicationManager.getLoggerManager();                
             ContactUs.setCustomMetrics(this, false, "Support");
                          
    },
    
    init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    
     initActions: function(){
        var scope = this;
        this.view.btnCallBranch.onClick = function(){
            applicationManager.getPresentationUtility().showLoadingScreen(); 
            var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            infoCall.presentationController.onClickCallUs();  
           
        }
    },
  
    enableOrDisableHamburger :function(){
    var userObj = applicationManager.getUserPreferencesManager();
    var Login = userObj.isUserLoggedin();
    if(Login === true){
      this.view.customHeader.flxBack.imgBack.src = "hamburger.png";
      if(kony.os.deviceInfo().name === "iPhone"){
        this.view.flxSupportMain.bottom = "60dp";
        this.view.flxFooter.isVisible = true;
      }
      else{
        this.view.flxSupportMain.bottom = "0dp";
        this.view.flxFooter.isVisible = false;
      }
    }else{
      var scope = this;
      this.view.flxFooter.isVisible = false;
      this.view.flxSupportMain.bottom = "0dp";
      this.view.customHeader.flxBack.imgBack.src = "backbutton.png";
      this.view.customHeader.flxBack.onClick = function(){
        scope.backIcon();
      };
    }
  },
  
  
    showDial: function (phoneNumber) {     
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.phone.dial(phoneNumber);         
    },
  
    backIcon: function() {
      if(kony.os.deviceInfo().name==="iPhone"){
        var userObj = applicationManager.getUserPreferencesManager();
        var Login = userObj.isUserLoggedin();
        if(Login === true){
          var navManager = applicationManager.getNavigationManager();
          navManager.goBack();
        }
        else{
          var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
          informationPC.presentationController.commonFunctionForNavigation("frmLogin");
        }
      }
      else{
        var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
        informationPC.presentationController.commonFunctionForNavigation("frmLogin");
      }
    },
  
    setSegmentData: function () {
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
        var data = [{
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.FAQ
            }, {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.TERMS
            },
            {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.PRIVACY
            }
        ];
        this.view.segSupport.setData(data);
        this.view.segSupport.onRowClick = function(){
           var selectedvalue = scope.view.segSupport.selectedItems[0].lblTitle;
           
            if(selectedvalue === configManager.constants.PRIVACY){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickPrivacyPolicy(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.TERMS){
             applicationManager.getPresentationUtility().showLoadingScreen();  
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickTermsAndConditions(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.ABOUT){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickAboutUs(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.FAQ){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickFAQs(selectedvalue);  
              
            }
            
        }
    }

});