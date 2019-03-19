define({
  count:0,
  progress:0,
  segName:["Products selection","Personal Info","Employment Info","Financial Info","Identity Verification","Signature Upload"],
  //skin for segment numbers - sknlble3e3e3Border100px and sknlbl1a98ffBgFontffffffBorder100
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  frmPreshow : function(){
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.setVisibility(true);
    } else{
      this.view.flxHeader.setVisibility(false);
    }
     var NewUser = applicationManager.getLoggerManager();      
              NewUser.setCustomMetrics(this, false, "New User Onboarding");
    this.setInitActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setInitActions : function(){
    var scope=this;
    this.view.btnLogout.onClick=function(){
      scope.logoutOnClick();
    };
    scope.setSegmentData();
    scope.setProgressFilled();
    scope.setUserName();
    scope.view.segSteps.onRowClick=scope.segStepsOnRowClick;
    scope.view.flxStartNewApplication.onClick=scope.startNewApplicationOnClick;
    scope.view.btnLogout.onClick=function()
    {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.onLogout();
    };
  },
  setUserName:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var userdata=navMan.getCustomInfo("frmOBLogin");
    this.view.lblWelcome.text="Welcome "+userdata.username;
  },
  setSegmentData:function()
  {
    var segData=[],eachrow,scope=this;
    var navMan=applicationManager.getNavigationManager();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
    var navData=navMan.getCustomInfo("frmOBLandingNew");
    var res=navData.state;
    var data = {};
    if (res.userProducts == "true" && res.userPersonalInfo == "false" && res.userEmploymentInfo == "false" && res.userFinancialInfo == "false" && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.updateUserData(data);
      scope. count=1; 
      scope.progress="25";
    } else if (res.userPersonalInfo == "true" && res.userEmploymentInfo == "false" && res.userFinancialInfo == "false" && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      scope.count=2;
      scope.progress="37.5";
    } else if (res.userEmploymentInfo == "true" && res.userFinancialInfo == "false" && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      scope. count=3;
      scope.progress="50";
    } else if (res.userFinancialInfo == "true" && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      scope.count=4;
      scope.progress="62.5";
    } else if (res.userSecurityQuestions == "true" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      scope.count=5;
      scope.progress="75";
    } else if (res.creditCheck == "true") {
      NUOMod.presentationController.setNewUserData();
      scope.count=5;
      scope.progress="87.5";
    } else {
      NUOMod.presentationController.clearUserData();
      scope.count=0;
      scope.progress="12.5";
    }
    for(var i=0;i<6;i++)
    {
     if(scope.count>i){
      
           eachrow={
          "lblStepName":scope.segName[i],
          "imgDone":{"isVisible":true},
          "imgGo":{"src":"chevron.png"}

        }; 
       
      }
     
      else if(i==this.count)
      {
        var val=JSON.stringify(i+1).split(".")[0];
        eachrow={
          "lblStepName":scope.segName[i],
          "imgDone":{"isVisible":false},
          "imgGo":{"src":"chevron.png"},
          "lblNumber":{"text":val,"skin":"sknlbl1a98ffBgFontffffffBorder100"}
        };
      }
      else
      {
        var val=JSON.stringify(i+1).split(".")[0];
        eachrow={
          "lblStepName":scope.segName[i],
          "imgDone":{"isVisible":false},
          "imgGo":{"src":"chevron.png"},
          "lblNumber":{"text":val,"skin":"sknlble3e3e3Border100px"}
        }; 
      }
      segData.push(eachrow); 
    }
    scope.view.segSteps.setData(segData);
  },
  setProgressFilled:function()
  {
    this.view.flxProgressValueLanding.width=this.progress+"%";
  },
  segStepsOnRowClick:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var rowIndex=this.view.segSteps.selectedRowIndex[1];
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");

    if((rowIndex<=this.count&&this.count<=4)||(rowIndex<=this.count&&rowIndex===this.count))
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      switch(rowIndex)
      {
        case 0:  var prolist=navMan.getCustomInfo("frmOBSelectProducts");
          if(prolist&&prolist.products.allProducts)
          {
            NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");
          }
          else
          {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
          }
          break;
        case 1:
          NUOMod.presentationController.commonFunctionForNavigation("frmOBAddPersonalInfo");
          break;
        case 2:
          NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentType");
          break;
        case 3:
          NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoAnnualIncome");
          break;
        case 4:
          NUOMod.presentationController.commonFunctionForNavigation("frmOBSecurityQuestionsNew");
          break;
        case 5:navMan.setCustomInfo("frmOBSignature",{});
          //NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
          this.signatureFun();
          break;
      }

    }
    else
    {

    }
  },
  signatureFun:function()
  {
    if (kony.os.deviceInfo().name === "iPhone")
    {

      var strokeWidth = "2.0";
      var strokeColor = "#0F00F0";
      var showClearButon = true;
      var shakeToCancelEnabled = true;
      //var callback = sigCaptureCallBack;
      SignatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, shakeToCancelEnabled, this.callback1);
    } else {

      SignatureFFI.getSignature(this.callback1);
    }
  },
  callback1:function(base64String)
  {
    //this.view.imgSignature.setVisibility(true);
    // this.view.imgSignature.base64=base64String;
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBSignature",{"base64String":base64String});
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.commonFunctionForNavigation("frmOBSignature");
  },
  startNewApplicationOnClick:function()
  {
    var scope=this;
    var basicConfig={
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Thisactionwillresetyourpreviousapplicationdata"),
      "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Continue"),
      "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Cancel"),
      "message":  applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Doyouwishtocontinue?"),
      "alertHandler": scope.resetDataNUO
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});

  },
  resetDataNUO:function(response)
  {
    if(response===true)
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
      nuoMod.presentationController.resetData();
    }
  },
  logoutOnClick : function(){
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.onLogout(); 
    //Logout button in header onClick
  }
});