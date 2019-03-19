package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.Alerts;
import test.common.AppElement;
import test.common.SgConfiguration;

	
	public class frmLogin {
		 //formvisible variable states whether FormLogInKA is visible or not
	     boolean formvisible = false;
	     //pinBasedFormVisible variable states whether FormPinBasedLogin is visible or not
	     boolean pinBasedFormVisible = false;
	     
	    public frmLogin() throws IOException, Exception {
	    	//Initialize the FormLoginKA object
	    	Thread.sleep(10000);
	    	if(Alerts.isAlertVisible())
			{
			 Alerts.acceptAlert();
			}
	    	AppElement formObject = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
	        if(formObject!=null)
	        	formvisible=true;
	    }
	    public boolean isFormVisible()
	    {
	    	//Return the visibility of login form
	    	return formvisible;
	    }
	    public boolean wasPinBasedLoginFormVisible() throws IOException, Exception
	    {
	    	//Returns the visibility of FormPinBasedLoginKA
	    	return pinBasedFormVisible;
	    }
	    public void doLogin(String username, String password) throws Exception {
	    	//Enters username, password and clicks on login
	        enterUsername(username);
	        enterPassword(password);
	        if(SgConfiguration.getInstance().isAndroid())
	        	clickLoginbtn();
	        Thread.sleep(5000);
	    }

	    public void enterUsername(String username) throws Exception {
	    	//Enters username
//	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_tbxUsername"));
	        AppElement tbxUserIDKA = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_tbxUsername"));
	        tbxUserIDKA.typeAndClickNext(username);
	    }

	    public void enterPassword(String password) throws Exception {
	    	//Enters password
//	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_tbxPassword"));
	        AppElement tbxPasswordKA = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_tbxPassword"));
	        tbxPasswordKA.type(password);
	    }

	    public void clickLoginbtn() throws Exception {
	    	 //Clicks login btn
//	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_btnLogIn"));
	    	AppElement signInButton = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnLogIn"));
	    	signInButton.click();
//	        AppSpecificFunctions.clickAppElement("FormLogInKA_btnLoginKA");
	    }


	    //Does not test any functionalities with respect to device Registration
	    public frmDashboardAggregated basicAfterLogin() throws IOException, Exception {
	    	Thread.sleep(10000);
	    	if(AppSpecificFunctions.isPhone())
	    	{
	    		//checks for the form FormDeviceRegistrationOptionsKA, and proceeds with the registration process
		    	if(isAskingForDeviceRegistration())
		    	{
		    		//Getting a handle for DeviceRegistration form 
		    		frmDevRegLanding frmDevRegLanding = new frmDevRegLanding();
		    		frmDevRegLanding.btnRegNow();
		    	}
		    	if(isAskingForfrmDevRegSecCode())
		    	{
		    		frmDevRegSecCode frmDevRegSecCode = new frmDevRegSecCode();
//		    		AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
		    		AppSpecificFunctions.enter("123456");
		    		frmDevRegSecCode.btnVerifySecCode();
		    	}
		    	if(isAskingForfrmDevRegLoginType())
		    	{    	
		    		frmDevRegLoginType frmDevRegLoginType = new frmDevRegLoginType();
		    		frmDevRegLoginType.btnContinue();
		    	}
		    	if(isAskingForfrmDefaultLogin())
		    	{
		    		frmDefaultLogin frmDefaultLogin = new frmDefaultLogin ();
		    		frmDefaultLogin.btnDone();
		    	}
//		    	if(isAskingToEnableTouchID())
//		        {
//		        	//Clicks enable if enable touchID is visible
//		        	FormUnauthFeatureEnablingKA frmUnauthFeatureEnablingKA = new FormUnauthFeatureEnablingKA();
//		        	frmUnauthFeatureEnablingKA.clickEnable();
//		        }
//		    	
//		        if(isPinFormVisible())
//		     	{
//		        	//Clicks NoThanks if PinEntryStep1 form is visible
//		     		FormPinEntryStep1 frmPinEntryStep1 = new FormPinEntryStep1();
//		     		FormAccountsLandingKA frmAccountsLandingKA = frmPinEntryStep1.clickNoThanks();
//		    	}	    	
//		    	if(isDeviceregistrarionSuccessKAVisible())
//		    	{
//		    		//checks for the form frmDevRegSecCode and clicks continue
//		    		frmDevRegSecCode frmDeviceRegistrationKA = new frmDevRegSecCode();
//		    		frmDeviceRegistrationKA.clickContinue();
//		    	}  
//		    	
//		    	if(isPinEntrySuccessVisible())
//		    	{
//		    		//checks for the form frmDevRegSecCode and clicks continue
//		    		FormPinEntrySuccess frmPinEntrySuccess = new FormPinEntrySuccess();
//		    		frmPinEntrySuccess.clickContinue();
//		    	}
//		    	
//		    	if(isfrmPinSetEnableVisible())
//		    	{
//		    		//checks for the form frmDevRegSecCode and clicks continue
//		    		FormPinSetEnable frmPinSetEnable = new FormPinSetEnable();
//		    		frmPinSetEnable.clickDoitLater();
//		    	}
//		    	if(isFacialAuthEnableVisible())
//		    	{
//		    		//checks for the form frmDevRegSecCode and clicks continue
//		    		FormFacialAuthEnable frmFacialAuthEnable = new FormFacialAuthEnable();
//		    		frmFacialAuthEnable.clickDoitLater();
//		    	}
//		    	if(isLoginAuthSuccessKAVisible())
//		    	{
//		    		//checks for the form frmDevRegSecCode and clicks continue
//		    		FormLoginAuthSuccessKA frmLoginAuthSuccessKA = new FormLoginAuthSuccessKA();
//		    		frmLoginAuthSuccessKA.clickContinue();
//		    	}
		    	if(isfrmFullScreenAdsVisible())
		    	{
		    		//checks for the form frmDevRegSecCode and clicks continue
		    		frmFullScreenAds frmFullScreenAds = new frmFullScreenAds();
		    		frmFullScreenAds.clickCloseimg();
		    	}
		    	
		        //Return AccountsLanding handler
		        return new frmDashboardAggregated();
	    	}
	    	
	    	return  null;
	    }

//	    public FormTANDCforEnrollKA clickEnroll() throws Exception {
//	    	//Clicks Enroll now btn
//	    	AppSpecificFunctions.clickAppElement("FormLogInKA_EnrollLink");
//	    	return new FormTANDCforEnrollKA();
//	    }
//	    public FormContactUs clickContact() throws Exception {
//	    	//Clicks contact us btn
//	    	AppSpecificFunctions.clickAppElement("FormLoginKA_contactLink");
//	        return new FormContactUs();
//	    }
//	    public FormForgotPassword1 clickForgotPassword() throws Exception {
//	    	//Clicks forgot password btn
//	    	AppSpecificFunctions.clickAppElement("FormLogInKA_ForgotPassword");
//	        return new FormForgotPassword1();
//	    }
//
//	    public boolean isInvalidCredentialsAlertVisible() throws Exception {
//	    	//returns true if InvalidCredential label is visible
//	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_lblPopup"));
//	    	if(visible)
//	    	  return true;
//	    	else 
//	          return false;
//	    }
//	    public String getInvalidCredentialsAlert() throws IOException, Exception
//	    {
//	    	//returns text on the invalidCredentials label
//	    	String alertText =  AppSpecificFunctions.getAppElementText("frmLogin_lblPopup");
//	        return alertText;
//	    }
//	    public void clickViewAccountPreview() throws IOException, Exception
//	    {
//	    	//View account preview on login page
//	    	if(SgConfiguration.getInstance().isAndroid())
//	    		AppSpecificFunctions.clickAppElement("FormLogInKA_accountPreviewButton");
//	    	else if(SgConfiguration.getInstance().isIOS())
//	    	{
//	    		String accountPreviewiOSLabel = MobileBankingNames.getWidgetName("FormLogInKA_accountPreviewiOSLabel");
//	    		AppElement ele = new AppElement("name",accountPreviewiOSLabel);
//	    		ele.swipeRight(90);
//	    	}
//	    }
//	    public void exitViewAccountPreview() throws IOException, Exception
//	    {
//	    	//Exits from the account preview
//	    	if(SgConfiguration.getInstance().isAndroid())
//	    		AppSpecificFunctions.clickAppElement("FormLogInKA_CopyaccountPreviewButton0e6f20970abfd40");
//	    	else if(SgConfiguration.getInstance().isIOS())
//	    	{
//	    		String accountPreviewiOSLabel = MobileBankingNames.getWidgetName("FormLogInKA_accountPreviewiOSLabel");
//	    		AppElement ele = new AppElement("name",accountPreviewiOSLabel);
//	    		ele.swipeLeft(100);
//	    	}
//	    }
//	    public boolean isAccountPreviewVisible() throws IOException, Exception
//	    {
//	    	//return true if accountPreviewCard is visible and exits from the preview
//	    	clickViewAccountPreview();
//	    	Thread.sleep(2000);
//	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("FormLogInKA_accountPreviewCard"));
//	    	if(visible == true)
//	    	{
//	    		exitViewAccountPreview();
//	    	}
//	    	else
//	    	{
//	    		Alerts.acceptAlert();
//	    	}
//	    	return visible;
//	    }
	    public boolean isAskingForDeviceRegistration() throws IOException, Exception
	    {
	    	//return true if DeviceregistrarionSuccess is visible
	    	boolean visible = AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmDevRegLanding_frmDevRegLanding"));
	        return visible;
	    }
	    
	    public boolean isAskingForfrmDevRegSecCode() throws IOException, Exception
	    {
	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDevRegSecCode_btnVerifySecCode"),5);
	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDevRegSecCode_btnVerifySecCode"));
	    	return visible;
	    }
	    
	    public boolean isAskingForfrmDevRegLoginType() throws IOException, Exception
	    {
	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDevRegLoginType_btnContinue"),5);
	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDevRegLoginType_btnContinue"));
	    	return visible;
	    }	    
	    
	    public boolean isAskingForfrmDefaultLogin() throws IOException, Exception
	    {
	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDefaultLogin_btnDone"),5);
	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDefaultLogin_btnDone"));
	    	return visible;
	    }

	    public boolean isfrmFullScreenAdsVisible() throws IOException, Exception
	    {
	    	//return true if PostLoginAdvertisementKA is visible
	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_frmFullScreenAds"),30);	    	
	    	boolean visible = AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmFullScreenAds_frmFullScreenAds"));
	        return visible;
	    }

//	    public boolean isPinEnabledForUser() throws IOException, Exception {
//	    	boolean isVisible = AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("FormLogInKA_pinIcon"));
//	    	return isVisible;
//	    }
//	}
	    public boolean isPreloginAdEnabled() throws IOException, Exception  {
			if(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_imgAd1"))||
					AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_imgAd3"))||
					AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_imgAd2")))
	    	{
	    		return true;
	    	}
			return false;
		}
		public void clickPreloginAd() throws IOException, Exception 
		{
			AppSpecificFunctions.clickAppElement("frmLogin_flxScrollContainerAds");
		}
		
		public void goToPostLoginAdsWithLoginCredentials(String username,
				String password) throws IOException, Exception {			
			doLogin(username, password);
			Thread.sleep(10000);
	    	if(isAskingForDeviceRegistration())
	    	{
	    		frmDevRegLanding frmDevRegLanding = new frmDevRegLanding();
	    		frmDevRegLanding.btnNoThanks();	    		
	    	}
	    	if(isAskingForfrmDevRegLoginType())
	    	{    	
	    		frmDevRegLoginType frmDevRegLoginType = new frmDevRegLoginType();
	    		frmDevRegLoginType.btnContinue();
	    	}
	    	if(isAskingForfrmDefaultLogin())
	    	{
	    		frmDefaultLogin frmDefaultLogin = new frmDefaultLogin ();
	    		frmDefaultLogin.btnDone();
	    	}
	    	if(AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmFullScreenAds_frmFullScreenAds")))
	    	{
	    		frmFullScreenAds frmFullScreenAds = new frmFullScreenAds();
	    	}
	        	
		}
		
		public boolean isAccountPreviewVisible() throws IOException, Exception {			
			clickViewAccountPreview();	
			Thread.sleep(3000);
			boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_imgDashboard"));
	    	if(visible == true)
	    	{
	    		exitViewAccountPreview();
	    	}
	    	else
	    	{
	    		Alerts.acceptAlert();
	    	}
	    	return visible;
		}
		
		private void exitViewAccountPreview() throws IOException, Exception {
			AppSpecificFunctions.clickAppElement("frmLogin_imgDashboard");			
		}
		
		public void clickViewAccountPreview() throws IOException, Exception {
		AppSpecificFunctions.clickAppElement("frmLogin_imgDashboard");
		Thread.sleep(3000);
		}

	    public boolean isInvalidCredentialsAlertVisible() throws Exception {
	    	//returns true if InvalidCredential label is visible
	    	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_lblPopup"));
	    	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_lblPopup"));
	    	if(visible)
	    	  return true;
	    	else 
	          return false;
	    }
	    
	    public String getInvalidCredentialsAlert() throws IOException, Exception
	    {
	    	//returns text on the invalidCredentials label
	    	String alertText =  AppSpecificFunctions.getAppElementText("frmLogin_lblPopup");
	        return alertText;
	    }
	    public frmSupport btnSupport() throws IOException, Exception {
			AppSpecificFunctions.clickAppElement("frmLogin_btnSupport");
			return new frmSupport();
		}
		public frmEnrollLastName btnEnroll() throws IOException, Exception {
			AppSpecificFunctions.clickAppElement("frmLogin_btnEnroll");
			return new frmEnrollLastName();
		}
}