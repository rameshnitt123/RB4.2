//package test.MobileBanking.tests;
//
//import java.lang.reflect.Method;
//
//import org.testng.annotations.AfterMethod;
//import org.testng.annotations.BeforeMethod;
//import org.testng.annotations.Optional;
//import org.testng.annotations.Parameters;
//import org.testng.annotations.Test;
//import org.testng.asserts.SoftAssert;
//
//import test.MobileBanking.MobileBankingBaseTest;
//import test.MobileBanking.MobileBankingWidgetId;
//import test.MobileBanking.forms.AppSpecificFunctions;
//import test.MobileBanking.forms.frmLogin;
//import test.MobileBanking.forms.frmMessages;
//import test.MobileBanking.forms.frmNewMessage;
//import test.MobileBanking.forms.frmNewMessageCategory;
//import test.MobileBanking.forms.frmMessagesDetails;
//import test.common.Alerts;
//import test.common.AppElement;
//import test.common.Segment;
//
//public class TestfrmMessages extends MobileBankingBaseTest {
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
//	            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmMessages_frmMessages"));
//	        } catch (Exception e) {
//	        	if(ele==null)
//	        	{
//	        		 System.out.println("TestfrmMessages.setupBeforeTest(): Not on the frmMessages");
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
//		                	//Clicks on Messages btn if FrmDashboardAggregated or frmBillPay or frmCheckDeposit or frmCardLessHome or frmCardManageHome or frmManageExternalAccounts or frmMessages or frmSupport is visible
//		                	AppSpecificFunctions.clickMessages();
//		                }
//		                else 
//			            {
//			                System.out.println("TestfrmMessages.setupBeforeTest(): Something went wrong in the form");
//			                e.printStackTrace();
//			            }
//	        	}
//	        	
//	        	}
//	        }
//	 
//	@Test(description = "Test Case to Check New Message Function")
//	public void newMessage() throws Exception{
//		SoftAssert sa =  new SoftAssert();
//		frmMessages frmMessages = new frmMessages();  
//		frmNewMessageCategory frmNewMessageCategory = frmMessages.clickAddButton();
//		String messageCategory = frmNewMessageCategory.getRandomMessageCategory();
//		frmNewMessage frmNewMessage = frmNewMessageCategory.clickCategory(messageCategory);
//		String messageSubject = AppSpecificFunctions.getRandomMessageSubject();
//		frmNewMessage.tbxSubject(messageSubject);
//		String messageDescription = AppSpecificFunctions.getRandomMessageDescription();
//		frmNewMessage.txtAreaDescription(messageDescription);
//		frmMessages = frmNewMessage.clickSend();
//		frmMessages.flxInbox();
//		sa.assertTrue(frmMessages.isNewMessageDisplayed(messageSubject));
//		  sa.assertAll();
//	}
//	
//	
//	@Test(description = "Test Case to Check Delete Message Function in Inbox")
//	public void deleteMessageInInbox() throws Exception{
//		SoftAssert sa =  new SoftAssert();
//		String messageSubject = "";
//		frmMessages frmMessages = new frmMessages();
//		frmMessages.flxInbox();
//		Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
//				MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
//		if(InboxSeg.getRowCount()>0){
//			messageSubject = frmMessages.selectRandomMessagefromInbox();
//			System.out.printf("***********message Subject",messageSubject);
//			frmMessagesDetails frmMessagesDetails =frmMessages.clickMessage(messageSubject);
//			frmMessages = frmMessagesDetails.clickDelete();
//		}
//		/*if(AppElement.waitForEnable("frmMessages_segMessagesInbox",40))
//		{
//			messageSubject = frmMessages.selectRandomMessagefromInbox();
//			System.out.printf("***********message Subject",messageSubject);
//			frmMessagesDetails frmMessagesDetails =frmMessages.clickMessage(messageSubject);
//			frmMessages = frmMessagesDetails.clickDelete();
//		}*/
//		sa.assertFalse(frmMessages.isNewMessageDisplayed(messageSubject));
//		 sa.assertAll();
//	}
//	
//	
//	@Test(description = "Test Case to Check Delete Message Function in Deleted")
//    public void deleteMessageInDeleted() throws Exception {
//		SoftAssert sa =  new SoftAssert();
//		String messageSubject = "";
//		frmMessages frmMessages = new frmMessages();
//		frmMessages.flxDeleted();
//		Segment DelSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
//				MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
//		if(DelSeg.getRowCount()>0){
//			messageSubject = frmMessages.selectRandomMessagefromInbox();
//			System.out.println("***********message Subject"+messageSubject);
//			frmMessagesDetails frmMessagesDetails =frmMessages.clickMessage(messageSubject);
//			frmMessagesDetails.clickDelete();
//		}
//		sa.assertFalse(frmMessages.isNewMessageDisplayed(messageSubject));
//		 sa.assertAll();
//	}
//	
//	@Test(description = "replying in a message in Inbox")
//    public void replyMessageinInbox() throws Exception {
//		SoftAssert sa =  new SoftAssert();
//		String messageSubject = "";
//		frmMessages frmMessages = new frmMessages();
//		frmMessages.flxInbox();
//		Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
//				MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
//		if(InboxSeg.getRowCount()>0){
//			messageSubject = frmMessages.selectRandomMessagefromInbox();
//			System.out.printf("***********message Subject",messageSubject);
//			frmMessagesDetails frmMessagesDetails =frmMessages.clickMessage(messageSubject);
//			frmMessagesDetails.clickflxReply();
//			String replingMessage = AppSpecificFunctions.getRandomReplyingMessageDescription();
//			frmMessagesDetails.txtAreaReply(replingMessage);
//			frmMessages = frmMessagesDetails.btnSend();
////			frmMessages.isnewReplyAvailable(messageSubject,replingMessage);
//			sa.assertTrue(frmMessages.isnewReplyAvailable(messageSubject,replingMessage));
//		}
//		else
//		{
//			System.out.println("inbox Empty");
//			sa.assertTrue(AppElement.isElementVisible("id", "frmMessages_frmMessages"));
//		}
//		sa.assertAll();
//	}
//	
//	@Test(description = "Test Case to Check Delete Message Function in Inbox")
//	public void deleteMessageInInboxbySwiping() throws Exception{
//		SoftAssert sa =  new SoftAssert();
//		String messageSubject = "";
//		frmMessages frmMessages = new frmMessages();
//		frmMessages.flxInbox();
//		Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
//				MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
//		if(InboxSeg.getRowCount()>0){
//			messageSubject = frmMessages.selectRandomMessagefromInbox();
//			System.out.printf("***********message Subject",messageSubject);
//			
//			frmMessages.SwipeMessage(messageSubject);
//			frmMessages = frmMessages.clickDeletebtn();
//		}
//		sa.assertFalse(frmMessages.isNewMessageDisplayed(messageSubject));
//		sa.assertAll();
//	}
//	
//	
//}
