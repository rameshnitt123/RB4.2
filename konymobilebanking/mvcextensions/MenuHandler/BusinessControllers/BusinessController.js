/**
*@module MenuHandler
 */
define([], function() {

  /**
   * MenuHandler consists of all possible methods related Hamburger Menu
   *@alias module:MenuHandler
   *@class
   */ 
  function MenuHandler(){
    /**@member {string} forceTouchFlow stores the value of type of module selected in forch touch*/
    this.forceTouchFlow ="";
  };

  /**
  * Function used as call back for force touch options.
  * @params {object} params , indicating the selected force touch option.
  * @returns view controller which have to be displayed
  */
  MenuHandler.prototype.appForceTouchCallBack = function(params) {


    // If launch mode = 3 and quickactionitem key present in launchparams
    // denotes quick action item launch.
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    if (params["launchmode"] == 3) {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var quickActionItem
      quickActionItem = params["launchparams"]["quickactionitem"];
      if (quickActionItem) {
        if (quickActionItem["id"] == "ATM finder"){
          //if(false){
          var formName;
          if(kony.application.getCurrentForm() !== null){
            formName = kony.application.getCurrentForm().id;
          }

          if(!formName){ formName = "frmLocationMap";
                        var loginFlag  = false;
                        var navMan=applicationManager.getNavigationManager();

                        navMan.setCustomInfo("frmLocationMap",{"isUserLoggedIn":"false"}); 
                       }
          else{
            loginFlag = true;
          }
          var configManager = applicationManager.getConfigurationManager();
          if(configManager.appLaunchedMode.length === 0) {
            configManager.appLaunchedMode = "shortcut"
          }
          var controller = applicationManager.getPresentationUtility().getController(formName, true);
          var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
          locateUsModule.presentationController.presentLocateUsView(loginFlag,controller);
          return controller.view;

        } else if (quickActionItem["id"] == "Pay a Bill") {
          if(userPreferencesManager.isLoggedIn === true)
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("payBill","frmDashBoard");
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.fetchToPayees();
            var controller = applicationManager.getPresentationUtility().getController('frmBillPaySelectPayee', true);
            return controller.view;
          }
          else
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("payBill","frmDashBoard");
            this.forceTouchFlow = "Pay a Bill";
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            return controller.view;
          }
        } else if (quickActionItem["id"] == "Transfer Money") {
          if(userPreferencesManager.isLoggedIn === true)
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("makeatransfer","frmDashBoard");
            var controller = applicationManager.getPresentationUtility().getController('frmTransactionMode', true);
            return controller.view;
          }
          else
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("makeatransfer","frmDashBoard");
            this.forceTouchFlow = "Transfer Money";
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            return controller.view;
          }

        } else if (quickActionItem["id"] == "New Check Deposit") {
          if(userPreferencesManager.isLoggedIn === true)
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("Deposit","frmDashBoard");
            var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
            checkDepositModule.presentationController.commonFunctionForNavigation("frmDepositToCD");
            var controller = applicationManager.getPresentationUtility().getController('frmDepositToCD', true);
            return controller.view;
          }
          else
          {
            var navMan=applicationManager.getNavigationManager();
            navMan.setEntryPoint("Deposit","frmDashBoard");
            this.forceTouchFlow = "New Check Deposit";
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            return controller.view;
          }
        }
      }
    }
  };

  /**
   * Function to Perform Action on Menu Icon and More Option
   * @param {object} scope , which consists of scope of particular module where we initiates this method
   * @param {string} selectedForm, which consists of selected formid
   */
  MenuHandler.prototype.setUpHamburgerForForm = function (scope,selectedForm){
    //For Gettting the Selected Value from Menu    
    var hamburgerOnRowClick = function () {
      showOrHideHamburgerUI();
      var selectedvalue = scope.view.Hamburger.segHamburger.selectedItems[0].text;
      switchOnClick(selectedvalue);
    } 
    var switchOnClick=function(selValue){
      var configManager = applicationManager.getConfigurationManager();
      var userManager = applicationManager.getUserPreferencesManager();
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmCardManageHome",{"isMainScreen": true});
      switch(selValue){   
        case configManager.constants.MENUACCOUNTS:   
          scope.view.flxHamburger.isVisible = false;
          var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountMod.presentationController.showDashboard();
          break;
        case configManager.constants.MENULOCATE :
          scope.view.flxHamburger.isVisible = false;
          var locateMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
          locateMod.presentationController.presentLocateUsView(true,scope);
          break;
        case configManager.constants.MENUCONTACT :
          scope.view.flxHamburger.isVisible = false;
          var infModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
          infModule.presentationController.commonFunctionForNavigation("frmSupport");
          break;
        case configManager.constants.MENUTRANSFERS:
          //#ifdef tabrcandroid
          //#define kony_tablet_transferflow
          //#endif
          
          //#ifdef ipad
          //#define kony_tablet_transferflow
          //#endif
          
          
          //#ifdef kony_tablet_transferflow
            scope.view.flxHamburger.isVisible = false;
            var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
            transMod.presentationController.getTransactions();
          //#else
            scope.view.flxHamburger.isVisible = false;
            var transMod = applicationManager.getModulesPresentationController("TransactionModule");
            transMod.getTransactions();
          //#endif
          break;
        case configManager.constants.MENUMESSAGES:
          scope.view.flxHamburger.isVisible = false;	
          var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
          messagesModule.presentationController.getInboxRequests();
          break;
        case configManager.constants.MENUBILLPAY:
          scope.view.flxHamburger.isVisible = false;
          var BillPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          BillPayMod.presentationController.fetchBills();
          break;
        case configManager.constants.MENUCARDLESS:
          scope.view.flxHamburger.isVisible = false;
          var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
          var navMan=applicationManager.getNavigationManager();
          navMan.setEntryPoint("cardlessEntry","frmCardLessHome");
		  //navMan.setEntryPoint("cardlessEntry","frmCardLessHomeQR");
          cardLessModule.presentationController.getCardlessPendingAndPostedTransactions();
          //cardLessModule.presentationController.getCardlessPendingAndPostedTransactionsQRScanner();
          break;
        case configManager.constants.MENUCHECKDEPOSIT:
          scope.view.flxHamburger.isVisible = false;
          var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
          checkDepositModule.presentationController.fetchDeposits();
          break;
        case configManager.constants.Deposits:
          scope.view.flxHamburger.isVisible = false;
          var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
          checkDepositModule.presentationController.fetchDeposits();
          break;
        case configManager.constants.MENUSETTINGS:
          scope.view.flxHamburger.isVisible = false;
          var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
          settingsModule.presentationController.showSettings();  
          break;	  
        case configManager.constants.MENUCHATBOT: 
          scope.view.flxHamburger.isVisible = false;
          var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
          chatBotMode.presentationController.handleFirstTimeOpen();       
          break; 
        case configManager.constants.MENUMANAGEOTHERBANKACCOUNTS:
          scope.view.flxHamburger.isVisible = false;
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.fetchExternalAccountsData(userManager.getUserName());
          break;
        case configManager.constants.MENUCARDMANAGEMENT:
		  scope.view.flxHamburger.isVisible = false;
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.showCardsHome();
          break;
        case configManager.constants.MENUOPENACOUNT:
          var NAOModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
          NAOModule.presentationController.showAllProducts();
          break;
        case configManager.constants.MENUPFMMYMONEY:
          
          var accountModulePFM = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModulePFM.presentationController.fetchPFMDetails(); 
          break;
        default:
          scope.view.flxHamburger.isVisible = false;
          var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountMod.presentationController.showDashboard();
      }
    }

    /**
   * Function to to Show/Hide the Hamburger Menu
   * @param {boolean} hide , whether need to hide or Show
   */
    var showOrHideHamburgerUI = function(hide) {
      var devManager = applicationManager.getDeviceUtilManager();
      if(scope.view.flxHamburger){
        if(hide){scope.view.flxHamburgerWrapper.left="-100%";scope.view.flxHamburger.isVisible = false;}
        else{
          var leftVal = "";
          if (scope.view.flxHamburger.isVisible === true) { 
            if (devManager.isIpad() || kony.os.deviceInfo().name == "iPhone") {
              leftVal = "100%";
            } else {
              leftVal = "-100%";
            }
          } 
          else {
            leftVal = "0%";
            if(devManager.isIpad() || kony.os.deviceInfo().name == "iPhone"){
              scope.view.flxHamburgerWrapper.left = "100%";
              scope.view.flxHamburger.skin = "slFbox";
            }else{
              scope.view.flxHamburgerWrapper.left = "-100%";
              scope.view.flxHamburger.skin = "sknFlx000000Op50";
            }
            scope.view.flxHamburger.isVisible = true;
            if(devManager.isIpad()){
              scope.view.flxHamburger.skin = "sknFlx000000Op50";
            }
          }
          scope.view.flxHamburgerWrapper.animate(
            kony.ui.createAnimation({
              "100": {
                "left": leftVal,
                "stepConfig": {
                  "timingFunction": kony.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": kony.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function() {
                if (leftVal == "-100%" || leftVal=="100%") {
                  scope.view.flxHamburger.isVisible = false;
                }
              }
            });
        }
      }
    }
    var setProfilePic=function(){};
    /**
   * Function to set last login time
   */
    var setLastLoginTime=function(){
      var userPreferencesManager = applicationManager.getUserPreferencesManager();
      var lastlogin = kony.i18n.getLocalizedString("kony.mb.Hamburger.LastLogin");
      scope.view.Hamburger.lblLastLogin.text = lastlogin+" "+userPreferencesManager.getLastLoginTime(); 

    };

    /**
   * Function to set username
   */
    var setUserName=function(){
      var userPreferencesManager = applicationManager.getUserPreferencesManager();
      var firstname = userPreferencesManager.getUserFirstName();
      var lastname = userPreferencesManager.getUserLastName();   
      scope.view.Hamburger.lblUsername.text =  firstname+" "+lastname;
    };

    /**
   * Function to Setting data in the Menu. 
   */ 
    var setMenuData = function () {
      var configManager = applicationManager.getConfigurationManager();
      var devManager = applicationManager.getDeviceUtilManager();
      if(devManager.isIpad()){
        var footerData = configManager.getIPadAppMenuItems();
        var data= configManager.getMoreMenuItemsIpad();
        scope.view.customFooter.imgAccounts.src=footerData[0].img;
        scope.view.customFooter.lblAccounts.text=footerData[0].text;
        scope.view.customFooter.flxAccounts.onClick=function(){
          switchOnClick(footerData[0].text);
          showOrHideHamburgerUI(true);
        }
        scope.view.customFooter.imgTransfer.src=footerData[1].img;
        scope.view.customFooter.lblTransfer.text=footerData[1].text;
        scope.view.customFooter.flxTransfer.onClick=function(){
          showOrHideHamburgerUI(true);
          switchOnClick(footerData[1].text);
        }
        scope.view.customFooter.imgBillPay.src=footerData[2].img;
        scope.view.customFooter.lblBillPay.text=footerData[2].text;
        scope.view.customFooter.flxBillPay.onClick=function(){
          switchOnClick(footerData[2].text);
          showOrHideHamburgerUI(true);
        }
        scope.view.customFooter.imgDeposits.src=footerData[3].img;
        scope.view.customFooter.lblDeposits.text=footerData[3].text;
        scope.view.customFooter.flxDeposits.onClick=function(){
          switchOnClick(footerData[3].text);
          showOrHideHamburgerUI(true);
        }
        scope.view.customFooter.imgMessage.src=footerData[4].img;
        scope.view.customFooter.lblMessage.text=footerData[4].text;
        scope.view.customFooter.flxMessage.onClick=function(){
          switchOnClick(footerData[4].text);
          showOrHideHamburgerUI(true);
        }
        
        
        //highlightWhichMenu
        scope.view.customFooter.flxAccSelect.setVisibility(false);
        scope.view.customFooter.flxTransferSelect.setVisibility(false);
        scope.view.customFooter.flxBillPaySelect.setVisibility(false);
        scope.view.customFooter.flxDepositsSelect.setVisibility(false);
        scope.view.customFooter.flxMessageSelect.setVisibility(false);
        scope.view.customFooter.flxMenuSelect.setVisibility(false);
        if(selectedForm==footerData[0].text){
          scope.view.customFooter.flxAccSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";

        }
        else if(selectedForm==footerData[1].text){
          scope.view.customFooter.flxTransferSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
        }
        else if(selectedForm==footerData[2].text){
          scope.view.customFooter.flxBillPaySelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
        }
        else if(selectedForm==footerData[3].text){
          scope.view.customFooter.flxDepositsSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
        }
        else if(selectedForm==footerData[4].text){
          scope.view.customFooter.flxMessageSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
        }
        else{
          scope.view.customFooter.flxMenuSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
          scope.view.customFooter.lblMenu.skin = "sknLbl424242SSP20px";
        }

      
      }
      else if(devManager.isIPhone()){
        var footerData = configManager.getIOSAppMenuItems();
        var data= configManager.getMoreMenuItems();
        scope.view.customFooter.imgAccounts.src=footerData[0].img;
        scope.view.customFooter.lblAccounts.text=footerData[0].text;
        scope.view.customFooter.flxAccounts.onClick=function(){
          switchOnClick(footerData[0].text);
          showOrHideHamburgerUI(true);
        }
        scope.view.customFooter.imgTransfer.src=footerData[1].img;
        scope.view.customFooter.lblTransfer.text=footerData[1].text;
        scope.view.customFooter.flxTransfer.onClick=function(){
          showOrHideHamburgerUI(true);
          switchOnClick(footerData[1].text);
        }
        scope.view.customFooter.imgBillPay.src=footerData[2].img;
        scope.view.customFooter.lblBillPay.text=footerData[2].text;
        scope.view.customFooter.flxBillPay.onClick=function(){
          switchOnClick(footerData[2].text);
          showOrHideHamburgerUI(true);
        }
       //highlightWhichMenu
        scope.view.customFooter.flxAccSelect.setVisibility(false);
        scope.view.customFooter.flxTransferSel.setVisibility(false);
        scope.view.customFooter.flxBillSelected.setVisibility(false);
        scope.view.customFooter.flxMoreSelect.setVisibility(false);
        if(selectedForm==footerData[0].text){
          scope.view.customFooter.flxAccSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";
		  scope.view.customFooter.imgAccounts.src = "accountsactive.png";
          scope.view.customFooter.imgTransfer.src = "transfer.png";
		  scope.view.customFooter.imgBillPay.src = "billpay.png";
          scope.view.customFooter.imgMore.src = "more.png";
        }
        else if(selectedForm==footerData[1].text){
          scope.view.customFooter.flxTransferSel.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblTransfer.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";          
		  scope.view.customFooter.imgAccounts.src = "accounts.png";
          scope.view.customFooter.imgTransfer.src = "transferactive.png";
		  scope.view.customFooter.imgBillPay.src = "billpay.png";
          scope.view.customFooter.imgMore.src = "more.png";
        }
        else if(selectedForm==footerData[2].text){
          scope.view.customFooter.flxBillSelected.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
          scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";
		  scope.view.customFooter.imgAccounts.src = "accounts.png";
          scope.view.customFooter.imgTransfer.src = "transfer.png";
		  scope.view.customFooter.imgBillPay.src = "billpayactive.png";
          scope.view.customFooter.imgMore.src = "more.png";
        }
        else{
          scope.view.customFooter.flxMoreSelect.setVisibility(true);
          scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
          scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
		  scope.view.customFooter.imgAccounts.src = "accounts.png";
          scope.view.customFooter.imgTransfer.src = "transfer.png";
		  scope.view.customFooter.imgBillPay.src = "billpay.png";
          scope.view.customFooter.imgMore.src = "moreactive.png";
        }
        //tapimages
		scope.view.customFooter.flxAccounts.onTouchStart = function(){
         
          if(scope.view.customFooter.imgAccounts.src === "accountsactive.png"){}
          else{
            scope.view.customFooter.imgAccounts.src = "accountsontap.png";
          }
        };
        scope.view.customFooter.flxAccounts.onTouchEnd = function(){
         
          if(scope.view.customFooter.imgAccounts.src === "accountsactive.png"){}
          else{
            scope.view.customFooter.imgAccounts.src = "accounts.png";
          }
        };
        
        scope.view.customFooter.flxTransfer.onTouchStart = function(){
          
          if(scope.view.customFooter.imgTransfer.src === "transferactive.png"){}
          else{
            scope.view.customFooter.imgTransfer.src = "transferontap.png";
          }
        };
        scope.view.customFooter.flxTransfer.onTouchEnd = function(){
         
          if(scope.view.customFooter.imgTransfer.src === "transferactive.png"){}
          else{
            scope.view.customFooter.imgTransfer.src = "transfer.png";
          }
        };
        
        scope.view.customFooter.flxBillPay.onTouchStart = function(){
        
          if(scope.view.customFooter.imgBillPay.src === "billpayactive.png"){}
          else{
            scope.view.customFooter.imgBillPay.src = "billpayontap.png";
          }
        };
        scope.view.customFooter.flxBillPay.onTouchEnd = function(){
         
          if(scope.view.customFooter.imgBillPay.src === "billpayactive.png"){}
          else{
            scope.view.customFooter.imgBillPay.src = "billpay.png";
          }
        };
        
        scope.view.customFooter.imgMore.onTouchStart = function(){
        
          if(scope.view.customFooter.imgMore.src === "moreactive.png"){}
          else{
            scope.view.customFooter.imgMore.src = "moreontap.png";
          }
        };
        scope.view.customFooter.imgMore.onTouchEnd = function(){
          
          if(scope.view.customFooter.imgMore.src === "moreactive.png"){}
          else{
            scope.view.customFooter.imgMore.src = "more.png";
          }
        };
      } 

      else{
        var data = configManager.getHamburgerMenuItems();
      }

      // map and present data into hamburger (both hamburger on click or more on click)
      scope.view.Hamburger.segHamburger.widgetDataMap={imgHamburger:"img",lblHamburger:"text",lblMessagesNumber:"info"};
      var msgManager = applicationManager.getMessagesManager();
      var count = msgManager.getTotalNumberOfUnreadMessages();
      for(var i=0;i<data.length;i++){
        if(!configManager.AggregatedExternalAccountEnabled)
          continue;
        if (data[i].text === configManager.constants.MENUMESSAGES && !kony.sdk.isNullOrUndefined(count) && count !== "0" ) {
          data[i].info = {"text": count,"isVisible":true};
        }else{
          data[i].info = {"isVisible":false};
        }
      }
      scope.view.Hamburger.segHamburger.setData(data);       
      scope.view.Hamburger.segHamburger.onRowClick= function(){ 
        hamburgerOnRowClick();};

    }


    setMenuData();
    if (scope.view.customHeader) {
      scope.view.customHeader.flxBack.onClick = function() { 
        setProfilePic();
        setLastLoginTime();
        setUserName();
        setMenuData(); 
        showOrHideHamburgerUI();
      };
    } else if (scope.view.customSearch) {
      scope.view.customSearch.flxBack.onClick = function() {
        setProfilePic();
        setLastLoginTime();
        setUserName();
        setMenuData(); 
        showOrHideHamburgerUI();
      };
    } 

    if (kony.os.deviceInfo().name === "android") {
      scope.view.flxHamburgerWrapper.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
      },function(widgetRef, gestureInfo) {
        if (gestureInfo.swipeDirection === 1) {
          showOrHideHamburgerUI();
        }
      }.bind(this));
    }
    scope.view.flxHamburgerDummy.onClick = function(){    
      showOrHideHamburgerUI();
    };
    
   	scope.view.flxHamburger.onClick = function(){    
      showOrHideHamburgerUI();
    };

    if(applicationManager.getDeviceUtilManager().isIpad()){

        scope.view.customFooter.flxMenu.onClick = function(){ 

      setProfilePic();
      setLastLoginTime();
      setUserName();
      setMenuData(); 
      showOrHideHamburgerUI();
      scope.view.customFooter.flxMenuSelect.setVisibility(true);
      scope.view.customFooter.flxAccSelect.setVisibility(false);   
      scope.view.customFooter.flxTransferSelect.setVisibility(false);
      scope.view.customFooter.flxBillPaySelect.setVisibility(false);
	  scope.view.customFooter.flxDepositsSelect.setVisibility(false);
      scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblMenu.skin = "sknLbl424242SSP20px";
    };
    }
    
    else if(applicationManager.getDeviceUtilManager().isIPhone()){

    scope.view.customFooter.flxMore.onClick = function(){ 

      setProfilePic();
      setLastLoginTime();
      setUserName();
      setMenuData(); 
      showOrHideHamburgerUI();
      scope.view.customFooter.flxMoreSelect.setVisibility(true);
      scope.view.customFooter.flxAccSelect.setVisibility(false);   
      scope.view.customFooter.flxTransferSel.setVisibility(false);
      scope.view.customFooter.flxBillSelected.setVisibility(false);
      scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
      scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
	    scope.view.customFooter.imgAccounts.src = "accounts.png";
          scope.view.customFooter.imgTransfer.src = "transfer.png";
		  scope.view.customFooter.imgBillPay.src = "billpay.png";
          scope.view.customFooter.imgMore.src = "moreactive.png";
    };
    }
    
    
    scope.view.Hamburger.imgLogout.onTouchEnd = function(){    
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      showOrHideHamburgerUI();
      authMod.presentationController.onLogout();
    };
  }
  return MenuHandler;
});