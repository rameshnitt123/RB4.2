//package test.MobileBanking.tests;
//
//import java.io.IOException;
//import java.lang.reflect.Method;
//
//import org.openqa.selenium.Alert;
//import org.testng.annotations.AfterClass;
//import org.testng.annotations.BeforeMethod;
//import org.testng.annotations.Optional;
//import org.testng.annotations.Parameters;
//import org.testng.annotations.Test;
//import org.testng.asserts.SoftAssert;
//
//import test.MobileBanking.MobileBankingBaseTest;
//import test.MobileBanking.MobileBankingWidgetId;
//import test.MobileBanking.forms.AppSpecificFunctions;
//import test.MobileBanking.forms.frmCardLessCWCode;
//import test.MobileBanking.forms.frmCardLessCashRec;
//import test.MobileBanking.forms.frmCardLessConfWithdraw;
//import test.MobileBanking.forms.frmCardLessContactType;
//import test.MobileBanking.forms.frmCardLessFrom;
//import test.MobileBanking.forms.frmCardLessHome;
//import test.MobileBanking.forms.frmCardLessOverdraft;
//import test.MobileBanking.forms.frmCardLessPhoneNo;
//import test.MobileBanking.forms.frmCardLessRecName;
//import test.MobileBanking.forms.frmCardLessSecureCode;
//import test.MobileBanking.forms.frmCardLessWithdraw;
//import test.MobileBanking.forms.frmLogin;
//import test.common.Alerts;
////import test.RetailBanking.RetailBankingBaseTest;
////import test.RetailBanking.RetailBankingNames;
////import test.RetailBanking.MobileBankingWidgetId;
////import test.RetailBanking.forms.AppSpecificFunctions;
////import test.RetailBanking.forms.FormAlertsKA;
////import test.RetailBanking.forms.FormCardlessAcknowledgeKA;
////import test.RetailBanking.forms.FormConfirmCashWithDraw;
////import test.RetailBanking.forms.FormLocatorKA;
////import test.RetailBanking.forms.FormLogInKA;
////import test.RetailBanking.forms.FormMyMessagesKA;
////import test.RetailBanking.forms.FormNewCashCollectorKA;
////import test.RetailBanking.forms.FormNewCashWithdrawKA;
////import test.RetailBanking.forms.FormOverDraftNotificationsKA;
////import test.RetailBanking.forms.FormRecentTransactionDetailsKA;
////import test.RetailBanking.forms.FormTransferPayLandingKA;
////import test.RetailBanking.forms.FormUserSettingsKA;
////import test.RetailBanking.forms.FormUserSettingsMyProfileKA;
//import test.common.AppElement;
//import test.common.SgConfiguration;
//
//public class TestfrmCardLessCash extends MobileBankingBaseTest{
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
//	        	//Checks whether the app is on frmNewCashWithdraw page or not
//	            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRec_frmCardLessCashRec"));
//	        } catch (Exception e) {
//	            if (ele == null)
//	            {
//	            	//Not on TransferPayLanding page
//	                System.out.println("frmCardLessCashRec.setupBeforeTest(): Not on the frmCardLessCashRec");
//	                if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")))
//	                {
//	                	//Login into the app if it is on login form
//	                	frmLogin frmLogin = new frmLogin();
//	                	frmLogin.doLogin(AppSpecificFunctions.username,AppSpecificFunctions.password);
//	                	frmLogin.basicAfterLogin();
//	                }
//	                if (AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"))) 
//	                {
//	                	//Clicks on clickCardLessCash Menu item
////	                	frmCardLessHome frmCardLessHome = new frmCardLessHome();
//	                	AppSpecificFunctions.clickCardLessCash();
//	                }
//
//	                // navigates to withdraw cash form
//	                frmCardLessHome frmCardLessHome = new frmCardLessHome();
//	                frmCardLessHome.clickWithdrawCash();
//	            }
//	            else 
//	            {
//	                System.out.println("frmCardLessHome.setupBeforeTest(): Something went wrong in the form");
//	                e.printStackTrace();
//	            }
//	            
//	        }
//	    }
//	
//	@Test(description = "Cash withdraw for self flow")
//    public void CashWithdrawForSelf() throws Exception {
//            SoftAssert sa = new SoftAssert();
//            frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//            // Click on "I will collect my cash
//            frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//            // Store the available balance 
//            int balance = frmCardLessWithdraw.lblBalanceValue();
//            //Enter Amount
//    		AppSpecificFunctions.enter("10000");
//    		//Click Conitune
//    		frmCardLessWithdraw.ContinueNext(balance-100,"10000");
//    		//Confirm Transfer
//    		frmCardLessConfWithdraw frmCardLessConfWithdraw = new frmCardLessConfWithdraw();
//    		frmCardLessCWCode frmCardLessCWCode = null;
//    		balance = AppSpecificFunctions.getAvailablebalance();
//    		if (balance-100 < 1000)
//    		{
//    			frmCardLessOverdraft frmCardLessOverdraft = frmCardLessConfWithdraw.clickConfirmforOverdraft();
//    			frmCardLessCWCode = frmCardLessOverdraft.btnContinue();
//    		}
//    		frmCardLessCWCode = frmCardLessConfWithdraw.clickConfirm();
//    		boolean isCodeVisible=frmCardLessCWCode.isAcknowledgeCodeVisible();
//    		sa.assertEquals(isCodeVisible,true);
//    		frmCardLessCWCode.btnDone();
//            sa.assertAll();
//    }
//	
//	
//	@Test(description = "Cash withdraw for others")
//    public void CashWithdrawForOthers() throws Exception {
//            SoftAssert sa = new SoftAssert();
//            frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//            //Click on "Someone collects my cash
//            frmCardLessContactType frmCardLessContactType = frmCardLessCashRec.btnSomeoneCollect();
//            //Click Phone Number
//            frmCardLessPhoneNo frmCardLessPhoneNo = frmCardLessContactType.btnPhoneNumber();
//            //Enter Phone Number
////            AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//            AppSpecificFunctions.enter("1234567890");
//            //Click Continue
//            frmCardLessRecName frmCardLessRecName = frmCardLessPhoneNo.btnContinue();
//            //Enter Name
//            frmCardLessRecName.txtFirstName("Kony");
//            frmCardLessRecName.txtLastName("Labs");
//            frmCardLessWithdraw frmCardLessWithdraw = frmCardLessRecName.btnContinue();
//         // Store the available balance 
//            int balance = frmCardLessWithdraw.lblBalanceValue();
//            
//            //changing the account if the balance is less than 1000
//            if(balance<1000)
//            	frmCardLessWithdraw.changeAccount();
//            //Enter Amount            
//    		AppSpecificFunctions.enter("10000");
//    		//Click Conitune
//    		frmCardLessWithdraw.ContinueSSn();
//    		//Enter Secure Code
//    		frmCardLessSecureCode frmCardLessSecureCode = new frmCardLessSecureCode();
//    		frmCardLessSecureCode.txtSecureCode("1234");
//    		frmCardLessSecureCode.txtReenterCode("1234");
//    		frmCardLessSecureCode.btnContinue();
//    		
//    		//Confirm Transfer
//    		frmCardLessConfWithdraw frmCardLessConfWithdraw = new frmCardLessConfWithdraw();
//    		frmCardLessCWCode frmCardLessCWCode = null;
//    		balance = AppSpecificFunctions.getAvailablebalance();
//    		if (balance-100 < 1000)
//    		{
//    			frmCardLessOverdraft frmCardLessOverdraft = frmCardLessConfWithdraw.clickConfirmforOverdraft();
//    			frmCardLessCWCode = frmCardLessOverdraft.btnContinue();
//    		}
//    		frmCardLessCWCode = frmCardLessConfWithdraw.clickConfirm();
//    		boolean isCodeVisible=frmCardLessCWCode.isAcknowledgeCodeVisible();
//    		sa.assertEquals(isCodeVisible,true);
//    		frmCardLessCWCode.btnDone();
//            sa.assertAll();
//    }
//
//	@Test(description = "Cancel Cash withdraw")
//    public void CancelCashWithdraw() throws Exception {            
//            frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//            // Click on "I will collect my cash
//            frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//            // Store the available balance 
//            int balance = frmCardLessWithdraw.lblBalanceValue();
//            //changing the account if the balance is less than 1000
//            if(balance<1000)
//            	frmCardLessWithdraw.changeAccount();
//            //Enter Amount
//    		AppSpecificFunctions.enter("10000");
//    		balance = AppSpecificFunctions.getAvailablebalance();
//    		//Click Conitune
//    		frmCardLessWithdraw.ContinueNext(balance-100,"10000");
//    		//Cancel Transfer
//    		frmCardLessConfWithdraw frmCardLessConfWithdraw = new frmCardLessConfWithdraw();
//    		frmCardLessConfWithdraw.clcikCancel();          
//    }
//	
//	@Test(description = "To validate amount")
//    public void isAmountValidInCardless() throws Exception {
//			SoftAssert sa = new SoftAssert();
//	        frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//	        // Click on "I will collect my cash
//	        frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//	        // Store the available balance 
//            int balance = frmCardLessWithdraw.lblBalanceValue();
//            //changing the account if the balance is less than 1000
//            if(balance<1000)
//            	frmCardLessWithdraw.changeAccount();
//	        //Enter Amount
//			AppSpecificFunctions.enter("10000");
//			//Click Conitune
//    		frmCardLessWithdraw.ContinueNext(balance-100,"10000");
//    		
////            sa.assertTrue(frmCardLessWithdraw.isInvalidAmountAlertVisible(),"InValid Amount error is not visible");
////            String invalidAmountText=frmCardLessWithdraw.getAmountErrorText();
////            sa.assertEquals(frmCardLessWithdraw.invalidDenominations, invalidAmountText,"Displaying incorrect amount message");
//            frmCardLessWithdraw.btnRight();
//            sa.assertAll();
//    }
//	
//	@Test(description = "To validate available balance")
//    public void isAmountSufficientInCardless() throws Exception {
//		SoftAssert sa = new SoftAssert();
//        frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//        // Click on "I will collect my cash
//        frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//        //Enter Amount
//		AppSpecificFunctions.enter("100000000");
//		//Click Conitune
//		frmCardLessWithdraw.btnContinue();
//		
//        sa.assertTrue(frmCardLessWithdraw.isInvalidAmountAlertVisible(),"InValid Amount alert is not visible");
////        String invalidAmountText=frmCardLessWithdraw.getAmountErrorText();
////        sa.assertEquals(frmCardLessWithdraw.insufficientAmount, invalidAmountText,"Displaying incorrect amount message");
//        frmCardLessWithdraw.btnRight();
//        sa.assertAll();
//    }
//	
//	@Test(description = "To validate secure code for others flow")
//    public void validatesecureCodeDetails() throws Exception {
//		SoftAssert sa = new SoftAssert();
//        frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//        //Click on "I will collect my cash
//        frmCardLessContactType frmCardLessContactType = frmCardLessCashRec.btnSomeoneCollect();
//        //Click Phone Number
//        frmCardLessPhoneNo frmCardLessPhoneNo = frmCardLessContactType.btnPhoneNumber();
//        //Enter Phone Number
////        AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//        AppSpecificFunctions.enter("1234567890");
//        //Click Continue
//        frmCardLessRecName frmCardLessRecName = frmCardLessPhoneNo.btnContinue();
//        //Enter Name
//        frmCardLessRecName.txtFirstName("Kony");
//        frmCardLessRecName.txtLastName("Labs");
//        frmCardLessWithdraw frmCardLessWithdraw = frmCardLessRecName.btnContinue();            
//     // Store the available balance 
//        int balance = frmCardLessWithdraw.lblBalanceValue();
//        
//        //changing the account if the balance is less than 1000
//        if(balance<1000)
//        	frmCardLessWithdraw.changeAccount();
//        //Enter Amount            
//		AppSpecificFunctions.enter("10000");
//		//Click Conitune
//		frmCardLessWithdraw.ContinueSSn();
//		//Enter Secure Code
//		frmCardLessSecureCode frmCardLessSecureCode = new frmCardLessSecureCode();
//		frmCardLessSecureCode.txtSecureCode("1234");
//		frmCardLessSecureCode.txtReenterCode("1345");
//		frmCardLessSecureCode.btnContinue();		
//		sa.assertTrue(frmCardLessSecureCode.isCurrentFormVisible(),"Even though wrong secure code is entered next form is displayed");		
//		frmCardLessSecureCode.btnRight();
//        sa.assertAll();
//	}
//	
//	@Test(description = "To confirm cash withdraw details and change amount and then confirm again")
//    public void editAmountAndConfirmForSelfFlow() throws Exception {
//		SoftAssert sa = new SoftAssert();
//        frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//        // Click on "I will collect my cash
//        frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//        // Store the available balance 
//        int balance = frmCardLessWithdraw.lblBalanceValue();
//        //changing the account if the balance is less than 1000
//        if(balance<1000)
//        	frmCardLessWithdraw.changeAccount();
//        //Enter Amount
// 		AppSpecificFunctions.enter("10000");
// 		//Click Conitune
// 		frmCardLessWithdraw.ContinueNext(balance-100,"10000");
// 		//Click Back
// 		frmCardLessConfWithdraw frmCardLessConfWithdraw = new frmCardLessConfWithdraw();
// 		frmCardLessConfWithdraw.imgBack();
// 		
// 		//Enter Amount
// 		AppSpecificFunctions.clearNumber();
// 		AppSpecificFunctions.enter("20000");
// 		//Click Conitune
// 		frmCardLessWithdraw.ContinueNext(balance-200,"20000");
// 		
// 		//Validate amount
// 		String Amount = null;
// 		Amount = AppSpecificFunctions.getAppElementText("frmCardLessConfWithdraw_lblAmountValue"); 		
// 		sa.assertEquals(Amount,"$200.00","the cash withdraw details are not matched in confirm and selected screens");
// 		frmCardLessConfWithdraw.btnRight();   
//        sa.assertAll();
//	}
//		
//	
//	@Test(description = "To confirm cash withdraw details and change account and then confirm again")
//    public void editAccountAndConfirmForSelfFlow() throws Exception {
//		 SoftAssert sa = new SoftAssert();
//         frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//         // Click on "I will collect my cash
//         frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//         frmCardLessFrom frmCardLessFrom = frmCardLessWithdraw.btnChange();         
//         frmCardLessFrom.segToAccount("Savings Plus");      
//         String FromAccount = null;
//         FromAccount = AppSpecificFunctions.getAppElementText("frmCardLessWithdraw_lblFromAccountValue");
//         sa.assertEquals("Savings Plus",FromAccount,"the cash withdraw details are not matched in confirm and selected screens");         
//         sa.assertAll();
//         frmCardLessWithdraw.btnRight();
//         
//	}
//	
//	@Test(description = "secure code invisible for self flow")
//    public void secureCodeOptionsInvisibleToSelfFlow() throws Exception {
//		SoftAssert sa = new SoftAssert();
//        frmCardLessCashRec frmCardLessCashRec = new frmCardLessCashRec();
//        // Click on "I will collect my cash
//        frmCardLessWithdraw frmCardLessWithdraw = frmCardLessCashRec.btnICollect();
//        // Store the available balance 
//        int balance = frmCardLessWithdraw.lblBalanceValue();
//        //changing the account if the balance is less than 1000
//        if(balance<1000)
//        	frmCardLessWithdraw.changeAccount();
//        //Enter Amount
//		AppSpecificFunctions.enter("10000");
//		//Click Conitune
//		frmCardLessWithdraw.ContinueNext(balance-100,"10000");
//		//Confirm Transfer
//		frmCardLessConfWithdraw frmCardLessConfWithdraw = new frmCardLessConfWithdraw();
//		frmCardLessCWCode frmCardLessCWCode = null;
//		balance = AppSpecificFunctions.getAvailablebalance();
//		/*if (balance-100 < 1000)
//		{
//			frmCardLessOverdraft frmCardLessOverdraft = frmCardLessConfWithdraw.clickConfirmforOverdraft();
//			frmCardLessCWCode = frmCardLessOverdraft.btnContinue();
//		}
//		frmCardLessCWCode = frmCardLessConfWithdraw.clickConfirm();
//		*/
//		frmCardLessConfWithdraw = new frmCardLessConfWithdraw();		
//		sa.assertFalse(frmCardLessConfWithdraw.isSecureCodeVisible());
//		//Cancel Transfer
//		frmCardLessConfWithdraw.btnRight();  
//		sa.assertAll();
//	}
//}
