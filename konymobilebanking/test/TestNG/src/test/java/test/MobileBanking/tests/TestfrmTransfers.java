//package test.MobileBanking.tests;
//
//import java.io.IOException;
//import java.lang.reflect.Method;
//
//import org.testng.Assert;
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
//import test.MobileBanking.forms.frmAddBenRoutNo;
//import test.MobileBanking.forms.frmBenAccountType;
//import test.MobileBanking.forms.frmBenCountry;
//import test.MobileBanking.forms.frmBenName;
//import test.MobileBanking.forms.frmBenSwiftCode;
//import test.MobileBanking.forms.frmBenVerifyDetails;
//import test.MobileBanking.forms.frmEnterBenAccNo;
//import test.MobileBanking.forms.frmLogin;
//import test.MobileBanking.forms.frmManageRecipientList;
//import test.MobileBanking.forms.frmManageRecipientType;
//import test.MobileBanking.forms.frmP2PRecPhoneNo;
//import test.MobileBanking.forms.frmP2PRecipientName;
//import test.MobileBanking.forms.frmP2PVerifyDetails;
//import test.MobileBanking.forms.frmP2pAmount;
//import test.MobileBanking.forms.frmP2pConfirmation;
//import test.MobileBanking.forms.frmP2pFrequency;
//import test.MobileBanking.forms.frmP2pSelectRecipient;
//import test.MobileBanking.forms.frmReEnterBenAccNo;
//import test.MobileBanking.forms.frmRegP2PContactType;
//import test.MobileBanking.forms.frmTransactionMode;
//import test.MobileBanking.forms.frmTransferAmount;
//import test.MobileBanking.forms.frmTransferConfirmation;
//import test.MobileBanking.forms.frmTransferFrequency;
//import test.MobileBanking.forms.frmTransfers;
//import test.MobileBanking.forms.frmTransfersToAccount;
//import test.common.Alerts;
//import test.common.AppElement;
//
//public class TestfrmTransfers extends MobileBankingBaseTest{
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
//	            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers"));
//	        } catch (Exception e) {
//	            if (ele == null)
//	            {
//	            	//Not on TransferPayLanding page
//	                System.out.println("TestfrmTransfers.setupBeforeTest(): Not on the frmTransfers");
//	                if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")))
//	                {
//	                	//Login into the app if it is on login form
//	                	frmLogin frmLogin = new frmLogin();
//	                	frmLogin.doLogin(AppSpecificFunctions.username,AppSpecificFunctions.password);
//	                	frmLogin.basicAfterLogin();
//	                }
//	                if (AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"))) 
//	                {
//	                	//Clicks on TransferPayLanding btn if FormAccountsLanding or FormMoreLanding is visible
//	                	AppSpecificFunctions.clickTransfers();
//	                } 
//	               
//	            }
//	            else 
//	            {
//	                System.out.println("TestfrmTransfers.setupBeforeTest(): Something went wrong in the form");
//	                e.printStackTrace();
//	            }
//	            
//	        }
//	    }
//
//	 @Test(description = "test case to check transfer money module")
//	  public void transferMoney() throws Exception
//	  {
//		  SoftAssert sa  = new SoftAssert();
//		  frmTransfers frmTransfers = new frmTransfers();
//		  //Click TransferMoney btn
//		  frmTransactionMode frmTransactionMode = frmTransfers.clickMakeTransfers();
//	 		  
//		  //Select Transaction Mode
////		  String transactionMode = MobileBankingNames.getWidgetName("frmTransactionMode_lblTransactionMode");
////		  frmTransactionMode.segTransactionMode(transactionMode);
//		  int Index = frmTransactionMode.getValidTransModeIndex();
//		  frmTransactionMode.selectTransactionMode(Index);
//		  
//		  //Select To account	
//		  int toIndex = frmTransfersToAccount.getValidToIndex();
//		  String toAccountName = frmTransfersToAccount.selectToAccount(toIndex);
//		 
//		  
//		  //Enter amount to be transfered
//		  frmTransferAmount frmTransferAmount = new frmTransferAmount();
////		  AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//  		  AppSpecificFunctions.enter("10000");
//		  
//		  //Click Continue
//		  frmTransferAmount.btnContinue();  
//		  //Enter frequency type
//		  frmTransferFrequency frmTransferFrequency = new frmTransferFrequency();
////		  String freq = frmTransferFrequency.getValidFrequency();
////		  frmTransferFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_weeklyOnce"));
//		  frmTransferFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_TransferNow"));
//		  
//		  //Verify whether recurrence option is visible or not
////		  frmTransfersDuration frmTransfersDuration = new frmTransfersDuration();
////		  String duration = MobileBankingNames.getWidgetName("frmTransfersDuration_NumberofRecurences");
////		  frmTransfersDuration.segDuration(duration);
//		 
//		  
//		  //Enter recurences
////		  frmTransfersRecurrence frmTransfersRecurrence = new frmTransfersRecurrence();		  
////		  AppSpecificFunctions.enterno1();	  
////		  frmTransfersRecurrence.btnContinue();
//		  
//		  //Select the Date		  
////		  frmTransfersStartDate frmTransfersStartDate = new frmTransfersStartDate();
////		  String date = AppElement.getDeviceDate();
////		  String parts[] = date.split("/",3);
////		  System.out.println("##Date" + parts[0]);
////		  frmTransfersStartDate.selectDate("15");		 
////		  frmTransfersStartDate.btnContinue();
//		  
//		  //Click Confirm
//		  frmTransferConfirmation frmTransferConfirmation = new frmTransferConfirmation();
//		  frmTransferConfirmation.btnContinue();
////		  sa.assertTrue(frmTransferConfirmation.isTransfersuccessAlertVisible(),"Transfer success alert is not visible");
////		  sa.assertAll();
//	}
//	 
//	 @Test(description = "test case to check transfer money module")
//	  public void cancelInConfirmTransfer() throws Exception
//	  {
//		  SoftAssert sa  = new SoftAssert();
//		  frmTransfers frmTransfers = new frmTransfers();
//		  //Click TransferMoney btn
//		  frmTransactionMode frmTransactionMode = frmTransfers.clickMakeTransfers();
//	 		  
//		  //Select Transaction Mode
////		  String transactionMode = MobileBankingNames.getWidgetName("frmTransactionMode_lblTransactionMode");
////		  frmTransactionMode.segTransactionMode(transactionMode);
//		  int Index = frmTransactionMode.getValidTransModeIndex();
//		  frmTransactionMode.selectTransactionMode(Index);
//		  
//		  //Select To account	
//		  int toIndex = frmTransfersToAccount.getValidToIndex();
//		  String toAccountName = frmTransfersToAccount.selectToAccount(toIndex);
//		 
//		  
//		  //Enter amount to be transfered
//		  frmTransferAmount frmTransferAmount = new frmTransferAmount();
////		  AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
// 		  AppSpecificFunctions.enter("10000");
//		  
//		  //Click Continue
//		  frmTransferAmount.btnContinue();
//		  
//		 		  
//		  //Enter frequency type
//		  frmTransferFrequency frmTransferFrequency = new frmTransferFrequency();
////		  String freq = frmTransferFrequency.getValidFrequency();
////		  frmTransferFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_weeklyOnce"));
//		  frmTransferFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_TransferNow"));
//		  
//		 
//		  //Click Confirm
//		  frmTransferConfirmation frmTransferConfirmation = new frmTransferConfirmation();
//		  
//		 //Click Cancel on confirm transfer page
//		  frmTransfers = frmTransferConfirmation.clickCancel();
//	}
//	 
//	 
//	
// 
//	 @Test(description = "test case to check pay a person module from already Present Payees")
//	  public void checkPayAPerson() throws Exception
//	  {
//		 SoftAssert sa  = new SoftAssert();
//		  frmTransfers frmTransfers = new frmTransfers();
//		  //Click TransferMoney btn
//		  frmP2pSelectRecipient frmP2pSelectRecipient = frmTransfers.clickPayAPerson();
//	 		  
//		  //Select Recipient
//		  int Index = frmP2pSelectRecipient.getValidTransModeIndex();
//		  frmP2pSelectRecipient.selectRecipient(Index);	  
//		  
//		  
//		  //Enter amount to be transfered
//		  frmP2pAmount frmP2pAmount = new frmP2pAmount();
////		  AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
// 		  AppSpecificFunctions.enter("10000");
//		  
//		  //Click Continue 		  
// 		 frmP2pAmount.btnContinue();
//		  
//		 		  
//		  //Enter frequency type
// 		frmP2pFrequency frmP2pFrequency = new frmP2pFrequency();
// 		frmP2pFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_TransferNow"));
//		  
//		 
//		  
//		  //Click Confirm
// 		frmP2pConfirmation frmP2pConfirmation = new frmP2pConfirmation();
// 		frmP2pConfirmation.btnContinue();
////		sa.assertTrue(frmP2pConfirmation.isTransfersuccessAlertVisible(),"Transfer success alert is not visible");
////		sa.assertAll();
//	  }
//	 
//	 @Test(description = "test case to check cancel function in pay a person module")
//	  public void cancelsInPayAPerson() throws Exception
//	  {
//		  SoftAssert sa  = new SoftAssert();
//		  frmTransfers frmTransfers = new frmTransfers();
//		  //Click TransferMoney btn
//		  frmP2pSelectRecipient frmP2pSelectRecipient = frmTransfers.clickPayAPerson();
//	 		  
//		  //Select Recipient
//		  int Index = frmP2pSelectRecipient.getValidTransModeIndex();
//		  frmP2pSelectRecipient.selectRecipient(Index);	  
//		  
//		  
//		  //Enter amount to be transfered
//		  frmP2pAmount frmP2pAmount = new frmP2pAmount();
////		  AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//		  AppSpecificFunctions.enter("10000");
//		  
//		 //Click Continue 		  
//		 frmP2pAmount.btnContinue();
//		  
//		 		  
//		//Enter frequency type
//		frmP2pFrequency frmP2pFrequency = new frmP2pFrequency();
//		frmP2pFrequency.chooseFrequency(MobileBankingNames.getWidgetName("frmTransferFrequency_TransferNow"));
//		  
//		 
//		  
//		//Click Confirm
//		frmP2pConfirmation frmP2pConfirmation = new frmP2pConfirmation();		
//		
//		//Click Cancel on confirm transfer page		
//		frmTransfers = frmP2pConfirmation.clickCancel();
//	  }
//	 
//	 @Test(description = "test case to check pay a person : add new Payee and edit in frmP2pConfirmation with cancel in FormNewPayAPerson")
//	  public void addNewPayeeInPayAPerson() throws Exception
//	  {
//		  SoftAssert sa  = new SoftAssert();
//		  frmTransfers frmTransfers = new frmTransfers();
//		  
//		  //Click TransferMoney btn
//		  frmP2pSelectRecipient frmP2pSelectRecipient = frmTransfers.clickPayAPerson();
//		
//		  //Add Recipient
//		  frmRegP2PContactType frmRegP2PContactType = frmP2pSelectRecipient.btnAddRecipient();
//		  
//		  //Click Phone Number
//		  frmP2PRecPhoneNo frmP2PRecPhoneNo = frmRegP2PContactType.btnPhoneNumber();
//		  
//		  //Enter Phone Number
////		  AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//		  AppSpecificFunctions.enter("1234567890");
//		  
//		  //Click Continue		  
//		  frmP2PRecipientName frmP2PRecipientName = frmP2PRecPhoneNo.btnContinue();
//		  
//		  //Enter Recipient Name
//		  frmP2PRecipientName.txtRecipientName("Kony");
//		  
//		  //Click Continue
//		  frmP2PVerifyDetails frmP2PVerifyDetails = frmP2PRecipientName.btnContinue();
//		  
//		  // Click Confirm & Continue
//		  frmP2pSelectRecipient SelectRecipient = frmP2PVerifyDetails.btnContinue();
//		  
//		  // Click Back to transfer page 
//		  frmP2pSelectRecipient.clickBack();		  
//	  }
//	 
//	 @Test(description = "test case to add a domestic account in transfers module ")
//	  public void addDomesticAccount() throws Exception 
//	  {
//		 SoftAssert sa  = new SoftAssert();
//		 frmTransfers frmTransfers = new frmTransfers();
//		 //Click MANAGE btn
//		 frmManageRecipientType frmManageRecipientType = frmTransfers.clickManage();
//		 //Select Account Type
//		 frmManageRecipientType.segRecipientType("Manage Kony Bank Recipients");
//		 frmManageRecipientList frmManageRecipientList = new frmManageRecipientList();
//		 frmManageRecipientList.btnAddRecipient();
//		 frmEnterBenAccNo frmEnterBenAccNo = new frmEnterBenAccNo();
////		 AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//		 String accNo = AppSpecificFunctions.getRandomNumber(16);
//		 System.out.println("accNo:"  +accNo);
//		 AppSpecificFunctions.enter(accNo);	
//		 frmEnterBenAccNo.btnContinue();
//		 frmReEnterBenAccNo frmReEnterBenAccNo = new frmReEnterBenAccNo();
//		 AppSpecificFunctions.enter(accNo);	
//		 frmReEnterBenAccNo.btnContinue();
//		 frmBenAccountType frmBenAccountType = new frmBenAccountType();
//		 frmBenAccountType.btnSavingAccount();
//		 frmBenName frmBenName = new frmBenName();
//		 frmBenName.txtRecipientName("KonyDomestic");
//		 frmBenName.btnContinue();
//		 frmBenVerifyDetails frmBenVerifyDetails = new frmBenVerifyDetails();
//		 String accountHolder = AppSpecificFunctions.getAppElementText("frmBenVerifyDetails_lblAccHolderValue"); 	
//		 sa.assertEquals(accountHolder,"KonyDomestic","accountHolder is not matched in selected screen");
//		 frmBenVerifyDetails.btnContinue();
//		 AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_frmManageRecipientList"));
//		 sa.assertTrue(frmManageRecipientList.isfrmManageRecipientListVisible(),"ManageRecipientList form is not visible");
//		 frmManageRecipientList.clickflxBack();
//		 frmManageRecipientType.clickBack();
//		 sa.assertTrue(frmTransfers.isfrmTransfersVisible(),"frmTransfers form is not visible");		 
//		 sa.assertAll();
//	  }
//	 
//	 @Test(description = "test case to add a domestic account in transfers module ")
//	  public void addOtherBankAccount() throws Exception 
//	  {
//		 SoftAssert sa  = new SoftAssert();
//		 frmTransfers frmTransfers = new frmTransfers();
//		 //Click MANAGE btn
//		 frmManageRecipientType frmManageRecipientType = frmTransfers.clickManage();
//		 //Select Account Type
//		 frmManageRecipientType.segRecipientType("Manage Other Bank Recipients");
//		 frmManageRecipientList frmManageRecipientList = new frmManageRecipientList();
//		 frmManageRecipientList.btnAddRecipient();
//		 frmAddBenRoutNo frmAddBenRoutNo = new frmAddBenRoutNo();
////		 AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//		 String rountingNo = AppSpecificFunctions.getRandomNumber(9);
//		 AppSpecificFunctions.enter(rountingNo);
//		 frmAddBenRoutNo.btnContinue();
//		 frmEnterBenAccNo frmEnterBenAccNo = new frmEnterBenAccNo();
//		 String otherBankAccountNumber = AppSpecificFunctions.getRandomNumber(16);
//		 AppSpecificFunctions.enter(otherBankAccountNumber);
//		 frmEnterBenAccNo.btnContinue();
//		 frmReEnterBenAccNo frmReEnterBenAccNo = new frmReEnterBenAccNo();
//		 AppSpecificFunctions.enter(otherBankAccountNumber);
//		 frmReEnterBenAccNo.btnContinue();
//		 
//		 frmBenAccountType frmBenAccountType = new frmBenAccountType();
//		 frmBenAccountType.btnCheckingAcc();
//		 frmBenName frmBenName = new frmBenName();
//		 frmBenName.txtRecipientName("KonyOtherBank");
//		 frmBenName.btnContinue();
//		 frmBenVerifyDetails frmBenVerifyDetails = new frmBenVerifyDetails();
//		 String accountHolder = AppSpecificFunctions.getAppElementText("frmBenVerifyDetails_lblAccHolderValue"); 	
//		 sa.assertEquals(accountHolder,"KonyOtherBank","accountHolder is not matched in selected screen");
//		 frmBenVerifyDetails.btnContinue();
//		 AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_frmManageRecipientList"));
//		 sa.assertTrue(frmManageRecipientList.isfrmManageRecipientListVisible(),"ManageRecipientList form is not visible");
//		 frmManageRecipientList.clickflxBack();
//		 frmManageRecipientType.clickBack();
////		 frmManageRecipientList.btnimgBack();
////		 frmManageRecipientType.btnimgBack();
//		 sa.assertTrue(frmTransfers.isfrmTransfersVisible(),"frmTransfers form is not visible");		 
//		 sa.assertAll();
//	  }
//
//	  @Test(description = "test case to add a domestic account in transfers module ")
//	  public void addInternationalAccount() throws Exception 
//	  {
//		 SoftAssert sa  = new SoftAssert();
//		 frmTransfers frmTransfers = new frmTransfers();
//		 //Click MANAGE btn
//		 frmManageRecipientType frmManageRecipientType = frmTransfers.clickManage();
//		 //Select Account Type
//		 frmManageRecipientType.segRecipientType("Manage International Recipients");
//		 frmManageRecipientList frmManageRecipientList = new frmManageRecipientList();
//		 frmManageRecipientList.btnAddRecipient();
//		 frmBenCountry frmBenCountry = new frmBenCountry();
//		 frmBenCountry.segCountry("United States of America");
//		 Thread.sleep(2000);
//		 frmBenSwiftCode frmBenSwiftCode = new frmBenSwiftCode();
//		 frmBenSwiftCode.txtSwiftCode("12345678");
//		 frmBenSwiftCode.btnContinue();
//		 
//		 frmEnterBenAccNo frmEnterBenAccNo = new frmEnterBenAccNo();
////		 AppSpecificFunctions AppSpecificFunctions = new AppSpecificFunctions();
//		 String internationalAccountNumber = AppSpecificFunctions.getRandomNumber(16);
//		 AppSpecificFunctions.enter(internationalAccountNumber);	
//		 frmEnterBenAccNo.btnContinue();
//		 frmReEnterBenAccNo frmReEnterBenAccNo = new frmReEnterBenAccNo();
//		 AppSpecificFunctions.enter(internationalAccountNumber);
//		 frmReEnterBenAccNo.btnContinue();
//		 frmBenAccountType frmBenAccountType = new frmBenAccountType();
//		 frmBenAccountType.btnLoanAcc();
//		 frmBenName frmBenName = new frmBenName();
//		 frmBenName.txtRecipientName("KonyInternational");
//		 frmBenName.btnContinue();
//		 frmBenVerifyDetails frmBenVerifyDetails = new frmBenVerifyDetails();
//		 String accountHolder = AppSpecificFunctions.getAppElementText("frmBenVerifyDetails_lblAccHolderValue"); 	
//		 sa.assertEquals(accountHolder,"KonyInternational","accountHolder is not matched in selected screen");
//		 frmBenVerifyDetails.btnContinue();
//		 AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_frmManageRecipientList"));
//		 sa.assertTrue(frmManageRecipientList.isfrmManageRecipientListVisible(),"ManageRecipientList form is not visible");
//		 frmManageRecipientList.clickflxBack();
//		 frmManageRecipientType.clickBack();
////		 frmManageRecipientList.btnimgBack();
////		 frmManageRecipientType.btnimgBack();
//		 sa.assertTrue(frmTransfers.isfrmTransfersVisible(),"frmTransfers form is not visible");		 
//		 sa.assertAll();
//	  }
//}
