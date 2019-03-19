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
//import test.MobileBanking.forms.frmEnrollLastName;
//import test.MobileBanking.forms.frmEnrollSSn;
//import test.MobileBanking.forms.frmEnrollSecurity;
//import test.MobileBanking.forms.frmEnrollSecurityCheck;
//import test.MobileBanking.forms.frmEnrollSignUp;
//import test.MobileBanking.forms.frmLogin;
//import test.MobileBanking.forms.AppSpecificFunctions;
//import test.MobileBanking.forms.frmEnrollCVV;
//import test.MobileBanking.forms.frmEnrollDOB;
//import test.MobileBanking.forms.frmSupport;
//import test.common.Alerts;
//import test.common.AppElement;
//import test.common.Segment;
//
//public class TestfrmEnroll extends MobileBankingBaseTest {
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
//	        	//Checks whether the app is on login page or not
//	        ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
//	        } catch (Exception e) {
//	        	e.printStackTrace();
//	        	}
//	}
//	
//	@Test(description = "test case to functionality of enroll")
//	  public void checkEnroll() throws Exception
//	  {
//		  SoftAssert sa = new SoftAssert();
//		  frmLogin frmLogin = new frmLogin();
//		  
//		  //Click enroll button
//		  frmEnrollLastName frmEnrollLastName = frmLogin.btnEnroll();
//		  
//		  //Generating random Last with suffix automation
//		  String text = AppSpecificFunctions.generateRandomString("automation", "left");
//		  frmEnrollLastName.tbxLastName(text);
//		  
//		  //Enter valid Date of Birth 
//		  frmEnrollDOB frmEnrollDOB = frmEnrollLastName.btnContinue();
//		  frmEnrollDOB.enterDOB();
//		  frmEnrollSSn frmEnrollSSn = frmEnrollDOB.btnVerifyDOB();
//		  
//		  //Enter Social Security Number(SSN)
//		  frmEnrollSSn.enterSSn();
//		  frmEnrollSecurityCheck frmEnrollSecurityCheck = frmEnrollSSn.btnVerifySSN();
//		  
//		  //Choosing Security check with CVV code or Secuirty Code
//		  int CodeOption = AppSpecificFunctions.getRandomNumberinRange(2);
//		  frmEnrollSignUp frmEnrollSignUp = null;
//		  if (CodeOption == 1)
//		  {
//			  frmEnrollCVV frmEnrollCVV = frmEnrollSecurityCheck.flxCVV();
//			  frmEnrollCVV.clickDropdown();
//			  frmEnrollCVV.selectACard();
//			  String CVVNumber = AppSpecificFunctions.getRandomNumber(3);
//			  AppSpecificFunctions.enter(CVVNumber);
//			  frmEnrollSignUp = frmEnrollCVV.clickbtnVerify();
//			 
//		  }
//		  else
//		  {
//			  frmEnrollSecurity frmEnrollSecurity = frmEnrollSecurityCheck.flxSecurityCode();
//			  String SecurityCode = AppSpecificFunctions.getRandomNumber(6);
//			  AppSpecificFunctions.enter(SecurityCode);
//			  frmEnrollSignUp = frmEnrollSecurity.clickContinue();
//		  }
//			 
//		  String username = AppSpecificFunctions.generateRandomString("automation", "left");
//		  frmEnrollSignUp.txtEnterUsername(username);
//		  String password =  "Autotest@1";
//		  frmEnrollSignUp.txtPassword(password);
//		  frmEnrollSignUp.txtReEnterPass(password);
//		  frmLogin = frmEnrollSignUp.btnContinueSignUp();
//		  frmLogin.doLogin(username, password);
//		  sa.assertFalse(AppElement.waitForEnable("frmLogin_frmLogin")); 
//		  if(!AppElement.waitForEnable("frmLogin_frmLogin"))
//		  {
//			  frmLogin.basicAfterLogin();
//		  }
//		  sa.assertAll();
//	  }
//	
//}
