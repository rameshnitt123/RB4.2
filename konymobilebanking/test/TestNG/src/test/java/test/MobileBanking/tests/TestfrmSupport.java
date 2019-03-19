//package test.MobileBanking.tests;
//
//import java.lang.reflect.Method;
//import java.util.List;
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
//import test.MobileBanking.forms.frmLogin;
//import test.MobileBanking.forms.frmSupport;
//import test.MobileBanking.forms.frmSupportInfo;
//import test.common.Alerts;
//import test.common.AppElement;
//import test.common.Segment;
//
//public class TestfrmSupport extends MobileBankingBaseTest {
//
//	@BeforeMethod
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
//	            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
//	        } catch (Exception e) {
//	        	e.printStackTrace();
//	        	}
//	}
//	
//	@Test(description = "test case to check existence of Support options ")
//	  public void checkSupportOptions() throws Exception
//	  {
//		  SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  frmSupport frmSupport = frmLogin.btnSupport();
//		  Segment SupportOptionSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSupport_segSupport"),
//					MobileBankingWidgetId.getWidgetId("segSupport_lblTitle"));
//		  System.out.println("MobileBankingNames.getWidgetName(\"frmSupport_faqs\").toString()"+MobileBankingNames.getWidgetName("frmSupport_faqs"));
//		  System.out.println("SupportOptionSeg.getElementWithIndex(0)"+SupportOptionSeg.getElementWithIndex(0).getText());
//		   sa.assertEquals(MobileBankingNames.getWidgetName("frmSupport_faqs").toString(),SupportOptionSeg.getElementWithIndex(0).getText().toString());
//		   sa.assertEquals(MobileBankingNames.getWidgetName("frmSupport_termsandconditions").toString(),SupportOptionSeg.getElementWithIndex(1).getText().toString());
//		   sa.assertEquals(MobileBankingNames.getWidgetName("frmSupport_privacypolicy").toString(),SupportOptionSeg.getElementWithIndex(2).getText().toString());
//		   frmSupport.clickimgBack();
//			  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")));
//			  sa.assertAll();
//	  }
//	
//	@Test(description = "test case to check existence of Support options ")
//	  public void checkSupportFAQs() throws Exception
//	  {
//		  SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  frmSupport frmSupport =frmLogin.btnSupport();
//		  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupport_frmSupport"));
//		  frmSupportInfo frmSupportInfo =frmSupport.clickFAQs();
//		  sa.assertTrue(frmSupportInfo.isLabelVisible("frmSupportInfo_FAQs"));
//		  frmSupport = frmSupportInfo.clickimgBack();
//		  frmSupport.clickimgBack();
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")));
//		  sa.assertAll();
//	  }
//	@Test(description = "test case to check existence of Support options ")
//	  public void checkSupportTermsandConditions() throws Exception
//	  {
//		 SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  frmSupport frmSupport =frmLogin.btnSupport();
//		  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupport_frmSupport"));
//		  frmSupportInfo frmSupportInfo =frmSupport.clickTermsandConditions();
//		  sa.assertTrue(frmSupportInfo.isLabelVisible("frmSupportInfo_TERMSANDCONDITIONS"));
//		  frmSupport = frmSupportInfo.clickimgBack();
//		  frmSupport.clickimgBack();
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")));
//		  sa.assertAll();
//	  }
//	
//	@Test(description = "test case to check existence of Support options ")
//	  public void checkSupportPrivacyPolicy() throws Exception
//	  {
//		 SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  frmSupport frmSupport =frmLogin.btnSupport();
//		  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupport_frmSupport"));
//		  frmSupportInfo frmSupportInfo =frmSupport.clickPrivacyPolicy();
//		  sa.assertTrue(frmSupportInfo.isLabelVisible("frmSupportInfo_PRIVACYPOLICY"));
//		  frmSupport = frmSupportInfo.clickimgBack();
//		  frmSupport.clickimgBack();
//		  sa.assertTrue(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")));
//		  sa.assertAll();
//	  }
//	
//	/*@Test(description = "test case to check existence of Support options ")
//	  public void checkSupportCallUs() throws Exception
//	  {
//		 SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  frmSupport frmSupport =frmLogin.btnSupport();
//		  frmSupport.btnCallBranch();
//	  }*/
//}
