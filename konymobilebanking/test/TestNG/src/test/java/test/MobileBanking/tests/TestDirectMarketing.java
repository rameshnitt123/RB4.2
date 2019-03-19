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
//import test.MobileBanking.MobileBankingWidgetId;
//import test.MobileBanking.forms.*;
//import test.common.Alerts;
//import test.common.AppElement;
//
//public class TestDirectMarketing extends MobileBankingBaseTest {
//	@BeforeMethod
//	@Parameters({"RB_UserName","RB_Password"})
//	 public void beforeMethod(@Optional("dummyUsername") String username,@Optional("dummyPassword") String password,Object[] inputParamsOfTestMethod, Method method) throws Exception 
//	{   
//	    AppElement ele = null;
//        try {
//        	if(Alerts.isAlertVisible())
//			{
//			 Alerts.acceptAlert();
//			}
//        	ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
//        } catch (Exception e) {
//            if (ele == null)
//            {
//            	//Not on login form, Navigating to frmLoginKA
////                System.out.println("Direct marketing.setupBeforeTest(): Not on the  FullScreenAds Form");
//            	 if(AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated")) ||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers")) ||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmBillPay_frmBillPay"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCheckDeposit_frmCheckDeposit"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCardLessHome_frmCardLessHome"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmCardManageHome_frmCardManageHome"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_frmManageExternalAccounts"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmMessages_frmMessages"))||
//      				   AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmSettings_frmSettings"))
//      				   )
//            	 {
//            		 try{
//            			 frmLogin frmLogin = new frmLogin();
//            			 if(frmLogin.isAskingForDeviceRegistration())
//         		    	{
//         		    		//Getting a handle for DeviceRegistration form 
//         		    		frmDevRegLanding frmDevRegLanding = new frmDevRegLanding();
//         		    		frmDevRegLanding.btnNoThanks();
//         		    	}            			 
//            		 }
//            		 catch (Exception e1) {
//            			 e1.printStackTrace();
//            		 }
//            		 
//            		 AppSpecificFunctions.signOut();
//            	 }
//            }
//            else {
//            	//the frmLogin object is not null
//                System.out.println("TestDirectMarketing.setupBeforeTest(): Something went wrong in the form");
//                e.printStackTrace();
//            }
//         }       
//            
//    }
//	
//	@Test(description = "test case to check prelogin Ad Flow")
//	public void preLoginAdCheck() throws Exception
//	{
//		SoftAssert sa = new SoftAssert();
//        frmLogin frmLogin = new frmLogin();
//        if(frmLogin.isPreloginAdEnabled())
//        {
//        	frmLogin.clickPreloginAd();
//        	AppSpecificFunctions.backToApp();
//        	sa.assertTrue(frmLogin.isFormVisible());
//        }
//        else
//        {
//        	System.out.println("Prelogin ad is not yet downlaoded");
//        }
//        sa.assertAll();
//	}
//	
//	@Test(description = "test case to check Swipe in postLogin Ads")
//    public void postloginAdSwipe() throws Exception {
//            SoftAssert sa = new SoftAssert();
//            frmLogin frmLogin = new frmLogin();
//            String currentAdImgId;
//            frmLogin.goToPostLoginAdsWithLoginCredentials(AppSpecificFunctions.username,AppSpecificFunctions.password);
//            try{
//            	frmFullScreenAds frmFullScreenAds = new frmFullScreenAds();
//            	currentAdImgId= frmFullScreenAds.getCurrentAdImgId();
//            	frmFullScreenAds.swipePreviousAd();
//    	    	String afterSwipeAdImgId = frmFullScreenAds.getCurrentAdImgId();
//    	    	sa.assertEquals(currentAdImgId,afterSwipeAdImgId,"On swipe to previous Ad, on first ad screen should stay on first Ad");
//    	    	currentAdImgId = frmFullScreenAds.getCurrentAdImgId();
//    	    	frmFullScreenAds.swipeNextAd();
//    	    	afterSwipeAdImgId = frmFullScreenAds.getCurrentAdImgId();
//    	    	sa.assertNotEquals(currentAdImgId,afterSwipeAdImgId,"Not Swiping to next Ad");
//    	    	frmDashboardAggregated frmDashboardAggregated = frmFullScreenAds.clickCloseimg();
//    	    	sa.assertTrue(frmDashboardAggregated.inLandingForm(),"On postLogin ad close we are not landing on accounts landing form");                
//            }
//            catch(Exception e)
//            {
//            	if(AppSpecificFunctions.isfullScreenAdLoading())
//            		sa.assertTrue(true, "Ads are not being downloaded");
//            }
//            sa.assertAll();	    	
//	}
//	
//	@Test(description = "test case to check infeed banner ad behaviour")
//	public void infeedBannerAd() throws Exception {
//		SoftAssert sa = new SoftAssert();
//        frmLogin frmLogin = new frmLogin();
//        frmLogin.goToPostLoginAdsWithLoginCredentials(AppSpecificFunctions.username,AppSpecificFunctions.password);
//        frmFullScreenAds frmFullScreenAds = null;
//        frmDashboardAggregated frmDashboardAggregated = null;
//        if( AppSpecificFunctions.isfullScreenAdAvailable())
//        	frmDashboardAggregated = frmFullScreenAds.clickCloseimg();
//        else
//        	frmDashboardAggregated = new frmDashboardAggregated();
//        if(AppSpecificFunctions.isfullScreenAdLoading() && frmDashboardAggregated.isInfeedBannerAdVisible())
//        {
//        	sa.assertTrue(frmDashboardAggregated.isInfeedBannerAdVisible(), "infeed banner ad not displayed");
//        	frmDashboardAggregated.clickInfeedBannerAd();
//        	frmDashboardAggregated.backToApp();
//        }
//        else
//        {
//        	System.out.println("Infeed Banner Ad is not visible");
//        }
//        sa.assertAll();
//	}
//}
