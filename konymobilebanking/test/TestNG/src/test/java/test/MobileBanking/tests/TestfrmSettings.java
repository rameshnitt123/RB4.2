//package test.MobileBanking.tests;
//
//import java.lang.reflect.Method;
//
//import org.testng.annotations.BeforeMethod;
//import org.testng.annotations.Optional;
//import org.testng.annotations.Parameters;
//import org.testng.annotations.Test;
//import org.testng.asserts.SoftAssert;
//
//import test.MobileBanking.MobileBankingBaseTest;
//import test.MobileBanking.MobileBankingNames;
//import test.MobileBanking.MobileBankingWidgetId;
//import test.MobileBanking.forms.AppSpecificFunctions;
//import test.MobileBanking.forms.frmAlertsAccountList;
//import test.MobileBanking.forms.frmLogin;
//import test.MobileBanking.forms.frmPreferencesDeviceRegSecCode;
//import test.MobileBanking.forms.frmPreferencesAccountPreview;
//import test.MobileBanking.forms.frmPreferencesDeviceRegistration;
//import test.MobileBanking.forms.frmPreferencesDeviceDeRegistration;
//import test.MobileBanking.forms.frmSettings;
//import test.common.Alerts;
//import test.common.AppElement;
//
//public class TestfrmSettings extends MobileBankingBaseTest {
//
//	 @BeforeMethod
//	 @Parameters({"RB_UserName","RB_Password"})
//	 public void beforeMethod(@Optional("dummyUsername") String username,@Optional("dummyPassword") String password,Object[] inputParamsOfTestMethod, Method method) throws Exception { 
//		 AppElement ele = null;
//	        try {
//	        	Thread.sleep(5000);
//	        	if(Alerts.isAlertVisible())
//				{
//				 Alerts.acceptAlert();
//				}
//	        	//Checks whether the app is on TransferPayLanding page or not
//	            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmSettings_frmSettings"));
//	        } catch (Exception e) {
//	        	if(ele==null)
//	        	{
//	        		 System.out.println("TestfrmSettings.setupBeforeTest(): Not on the frmSettings");
//		                if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")))
//		                {
//		                	frmLogin frmLogin = new frmLogin();
//		                	frmLogin.doLogin(AppSpecificFunctions.username,AppSpecificFunctions.password);
//		                	Thread.sleep(2000);
//		                	frmLogin.basicAfterLogin();
//		                }
//		                if (AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"))||
//		       				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers")) ||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmBillPay_frmBillPay"))||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCheckDeposit_frmCheckDeposit"))||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCardLessHome_frmCardLessHome"))||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCardManageHome_frmCardManageHome"))||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_frmManageExternalAccounts"))||
//		      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmMessages_frmMessages"))||
//		      				 AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmSupport_frmSupport"))) 
//		                {
//		                	//Clicks on Settings btn if FrmDashboardAggregated or frmBillPay or frmCheckDeposit or frmCardLessHome or frmCardManageHome or frmManageExternalAccounts or frmMessages or frmSupport is visible
//		                	AppSpecificFunctions.clickSettings();
//		                }
//		                else 
//			            {
//			                System.out.println("TestfrmSettings.setupBeforeTest(): Something went wrong in the form");
//			                e.printStackTrace();
//			            }
//	        	}
//	        	
//	        	}
//	        }
//	 @Test(description = "test case to check Account Preview ON function ")
//	  public void checkAccountPreviewON() throws Exception
//	  {
//		  SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getStatus(MobileBankingNames.getWidgetName("frmSettings_AccountPreview"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOff")))
//		  {
//			  frmPreferencesAccountPreview frmPreferencesAccountPreview = frmSettings.clickAccountPreview();
//			  frmPreferencesAccountPreview.clickEnableAccountPreview();
//			  frmSettings = frmPreferencesAccountPreview.clickBack();
//		  }
//		  frmLogin frmLogin = frmSettings.signOut();
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_imgDashboard")));
//		  sa.assertAll();
//	  }
//
//	 @Test(description = "test case to check Account Preview OFF function")
//	  public void checkAccountPreviewOFF() throws Exception
//	  {
//		  SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getStatus(MobileBankingNames.getWidgetName("frmSettings_AccountPreview"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOn")))
//		  {
//			  frmPreferencesAccountPreview frmPreferencesAccountPreview = frmSettings.clickAccountPreview();
//			  frmPreferencesAccountPreview.clickEnableAccountPreview();
//			  frmSettings = frmPreferencesAccountPreview.clickBack();
//		  }
//		  frmLogin frmLogin = frmSettings.signOut();
//		  
//		  sa.assertFalse(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_imgDashboard")));
//		  sa.assertAll();
//	  }
//	 
//	 
//	 @Test(description = "test case to check whether Account Preview is working ")
//	  public void checkAccountPreview() throws Exception
//	  {
//		  SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getStatus(MobileBankingNames.getWidgetName("frmSettings_AccountPreview"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOff")))
//		  {
//			  frmPreferencesAccountPreview frmPreferencesAccountPreview = frmSettings.clickAccountPreview();
//			  frmPreferencesAccountPreview.clickEnableAccountPreview();
//			  frmSettings = frmPreferencesAccountPreview.clickBack();
//		  }
//		  frmLogin frmLogin = frmSettings.signOut();
//		  sa.assertTrue(frmLogin.isAccountPreviewVisible());
//		  sa.assertAll();
//	  }
//
//	@Test(description = "test case to check Device Registration ON function")
//	  public void checkDeviceRegistrationON() throws Exception
//	  {
//		 SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getStatus(MobileBankingNames.getWidgetName("frmSettings_DeviceRegistration"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOff")))
//		  {
//			  frmPreferencesDeviceRegSecCode frmPreferencesDeviceRegSecCode = frmSettings.clickDeviceRegistration();
//			  String securitycode = "192837";
//			  frmPreferencesDeviceRegSecCode.enterSecuritycode(securitycode);
//			  frmSettings =frmPreferencesDeviceRegSecCode.clickBtnVerify();
//			  
//		  }
//		  AppSpecificFunctions.signOut();
////		  sa.assertTrue(frmPreferencesDeviceRegistration.isDeviceRegistered());
//		  frmLogin frmLogin = new frmLogin();
//		  frmLogin.doLogin(sgconfig.getKeyValue("username"),sgconfig.getKeyValue("password"));
//		  //Should not ask for DeviceRegistration 
//		  sa.assertFalse(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDevRegLanding_frmDevRegLanding")));
//		  frmLogin.basicAfterLogin();
//		  AppSpecificFunctions.signOut();
//		  sa.assertAll();
//	  }
//	
//	@Test(description = "test case to check Device Registration ON function")
//	  public void checkDeviceDeregistrationOFF() throws Exception
//	  {
//		  SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getStatus(MobileBankingNames.getWidgetName("frmSettings_DeviceRegistration"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOn")))
//		  {
//			  frmSettings.clickDeviceRegistrationtoOff();
//			  frmLogin frmLogin = frmPreferencesDeviceDeRegistration.clickbtnRegisterDevice();
////			  Thread.sleep(2000);
//		  }
//		  frmLogin frmLogin = new frmLogin();
//		  frmLogin.doLogin(sgconfig.getKeyValue("username"),sgconfig.getKeyValue("password"));
//		  //Should not ask for DeviceRegistration 		  
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDevRegLanding_frmDevRegLanding")));
//		  frmLogin.basicAfterLogin();
//		  sa.assertAll();
//	  }
//	
//
//	
//	@Test(description = "test case to check whether Account Alerts is enabled")
//	public void checkAlertsOn() throws Exception{
//		SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getAlertsStatus(MobileBankingNames.getWidgetName("frmSettings_Alerts"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOff")))
//		  {
//			  frmAlertsAccountList frmAlertsAccountList = frmSettings.clickAccountAlerts();
//			  frmAlertsAccountList.clickEnableAccountAlerts();
//			  frmAlertsAccountList.clickBack();
//			  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSettings_frmSettings"));
////			  frmSettings.clickAccountAlerts();
//		  }
//		  
//		  frmAlertsAccountList frmAlertsAccountList = frmSettings.clickAccountAlerts();
//		  //Soft assert for visibility of account alerts segment
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_segAlert")));
//		 
////		  frmAlertsAccountList frmAlertsAccountList = frmSettings.clickAccountAlerts();
//		  frmAlertsAccountList.clickBack();
//		  frmLogin frmLogin = frmSettings.signOut();
//		  
//		  //Soft assert for visibility of login page
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")));
//		  sa.assertAll();
//	}
//	
//	
//	@Test(description = "test case to check whether Account Alerts is disabled")
//	public void checkAlertsOff() throws Exception{
//		SoftAssert sa =  new SoftAssert();
//		  frmSettings frmSettings = new frmSettings();
//		  String status = frmSettings.getAlertsStatus(MobileBankingNames.getWidgetName("frmSettings_Alerts"));
//		  if(status.equalsIgnoreCase(MobileBankingNames.getWidgetName("frmSettings_statusOn")))
//		  {
//			  frmAlertsAccountList frmAlertsAccountList = frmSettings.clickAccountAlerts();
//			  frmAlertsAccountList.clickEnableAccountAlerts();
//			  frmAlertsAccountList.clickBack();
//			  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSettings_frmSettings"));
//		  }
//		  
//		  frmAlertsAccountList frmAlertsAccountList = frmSettings.clickAccountAlerts();
//		  //Soft assert for visibility of account alerts segment
//		  sa.assertFalse(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_segAlert")));		 
//		  frmAlertsAccountList.clickBack();		  
//		  frmLogin frmLogin = frmSettings.signOut();
//		  
//		  //Soft assert for visibility of login page
//		  sa.assertTrue(frmLogin.isFormVisible());
//		  sa.assertAll();
//	}
//	
//}
