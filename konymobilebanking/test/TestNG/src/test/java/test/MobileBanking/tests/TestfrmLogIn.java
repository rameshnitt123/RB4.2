package test.MobileBanking.tests;


import java.lang.reflect.Method;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import test.MobileBanking.MobileBankingBaseTest;
import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;
import test.MobileBanking.forms.AppSpecificFunctions;
import test.MobileBanking.forms.frmDashboardAggregated;
import test.MobileBanking.forms.frmLogin;
import test.common.Alerts;
import test.common.AppElement;
import test.common.SgConfiguration;

public class TestfrmLogIn extends MobileBankingBaseTest {

    @BeforeMethod
    @Parameters({"RB_UserName","RB_Password"})
    public void beforeMethod(@Optional("dummyUsername") String username,@Optional("dummyPassword") String password,Object[] inputParamsOfTestMethod, Method method) throws Exception {   
	    AppElement ele = null;
        try {
        	//Creating a Login form object
        	Thread.sleep(5000);
        	if(Alerts.isAlertVisible())
			{
			 Alerts.acceptAlert();
			}
            ele = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
        } catch (Exception e) {
            if (ele == null)
            {
            	//Not on login form, Navigating to frmLoginKA
                System.out.println("TestfrmLogIn.setupBeforeTest(): Not on the  Login Form");
            }
            else {
            	//the frmLoginKA object is not null
                System.out.println("TestfrmLogIn.setupBeforeTest(): Something went wrong in the form");
                e.printStackTrace();
            }
            
        }
    }
    @Test(description = "test case to login")
    public void login() throws Exception {
            SoftAssert sa = new SoftAssert();
            //creating a Login form object
            frmLogin frmLogin = new frmLogin();
            //performing a login functionality with specified username and password
            frmLogin.doLogin(AppSpecificFunctions.username,AppSpecificFunctions.password);
            //basicAfterLogin handles the pin based login forms and device registration
            frmDashboardAggregated frmDashboardAggregated = frmLogin.basicAfterLogin();
            //Verify whether AccountsLanding form is visible or not
            sa.assertTrue(frmDashboardAggregated.inLandingForm(), "Unable to login successfully");
            sa.assertAll();
    }



    @Test(description = "test case for invalid login")
    public void invalidLogin() throws Exception {
            SoftAssert sa = new SoftAssert();
            frmLogin frmLogin = new frmLogin();
            //Attempts login with wrong credentials
            frmLogin.doLogin(MobileBankingNames.getWidgetName("invalidUsername"), MobileBankingNames.getWidgetName("invalidPassword"));
            //Verify whether invalid credentials msg is visible or not
//            sa.assertTrue(frmLogin.isInvalidCredentialsAlertVisible(),"Invalid credetials alert not visible");
            //Verify whether displayed msg content is correct or not
            sa.assertAll();
    }
    
}