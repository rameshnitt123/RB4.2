package test.MobileBanking;

import java.io.IOException;
import java.lang.reflect.Method;

import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import dbSetup.DbConnection;
import test.MobileBanking.forms.AppSpecificFunctions;
import test.MobileBanking.forms.frmLogin;
//import com.kony.appiumtests.forms.forms.FormPinBasedLoginKA;
import test.common.Alerts;
import test.common.AppBaseTest;
import test.common.AppElement;
import test.common.SgConfiguration;

public class MobileBankingBaseTest extends AppBaseTest{
	SgConfiguration sg = SgConfiguration.getInstance();
	
	@BeforeSuite
	public void beforeSuite() throws Exception {
		try {
			DbConnection conn = new DbConnection(sg.getKeyValue("dbURL"), sg.getKeyValue("dbusername"), sg.getKeyValue("dbpassword"));
			conn.DBSetup();
			}
			catch(Exception e)
			{
				e.printStackTrace();
				System.out.println("DBSetup Failed : Some Test cases might fail");
			}
//		super.beforeSuite();
		super.beforeSuite(sg.getKeyValue("appname"), sg.getKeyValue("apppackage"),
				sg.getKeyValue("launchactivity"),sg.getKeyValue("bundle_id"));
		
	}
	
	@BeforeClass(alwaysRun = true)
	@Parameters({ "appNamePerClass", "packageNamePerClass",
		"activityNamePerClass", "bundleId" })
	
    public void beforeClass(
		@Optional("KonyMobileBanking") String appNamePerClass,
		@Optional("com.orgname.KonyMobileBanking") String packageNamePerClass,
		@Optional(".KonyMobileBankin") String activityNamePerClass,
		@Optional("com.kony.appfactorydemo") String bundleId) throws Exception {

		super.beforeClass(sg.getKeyValue("appname"), sg.getKeyValue("apppackage"),
				sg.getKeyValue("launchactivity"),sg.getKeyValue("bundle_id"));
	}

	@BeforeMethod(alwaysRun = true)
	@Parameters({"RB_UserName","RB_Password"})
	public void beforeMethod( Method method, @Optional("dummyUsername") String username,@Optional("dummyPassword") String password) throws Exception {
		System.out.println("###username:"+username);
		super.beforeMethod(method);
		if(username.equalsIgnoreCase("dummyUsername")&&password.equalsIgnoreCase("dummyPassword"))
		{
			System.out.println("#####Logging into the App using the credentials provided in sgconfig.properties");
		}
		else
		{
		System.out.println("#######Logging into the App using the credentials provided in TestNG.xml");
		if(!AppSpecificFunctions.username.equalsIgnoreCase(username)||!AppSpecificFunctions.password.equalsIgnoreCase(password)){
			//re-login with the needed credentials ( check if it's already logged in - logout )
			if(!(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("FormLogInKA_frmLoginKA"))))
				AppSpecificFunctions.signOut();
			frmLogin frmLogIn = new frmLogin();
			frmLogIn.doLogin(username, password);	
			frmLogIn.basicAfterLogin();

			AppSpecificFunctions.username=username;
			AppSpecificFunctions.password=password;
		}
	 }
	}

	@AfterMethod(alwaysRun = true)
		public void afterMethod(ITestResult result) throws Exception {
		     super.afterMethod(result);
		    	if (( result.getStatus() == ITestResult.FAILURE  || result.getStatus() == ITestResult.SKIP) && !AppBaseTest.skipAllTestsNow)
		    	{
		    		String methodName=result.getMethod().getMethodName();
		    		if(methodName.equalsIgnoreCase("login"))
		    		{
		    			//AppBaseTest.skipAllTestsNow=true;
		    			//return;
		    		}
		    		relaunchApp();
//		    		doLogin();
				}
		    	
		    }  
//	public Boolean doLogin() throws IOException, Exception
//	{
//		try{
//	        FormLogInKA frmLoginKA = new FormLogInKA();
//	        frmLoginKA.doLogin(sgconfig.getKeyValue("username"), sgconfig.getKeyValue("password"));
//	        FormAccountsLandingKA frmAccountsLandingKA = frmLoginKA.basicAfterLogin();
//	        return frmAccountsLandingKA.inLoginForm();
//		}catch(Exception e){
//			e.printStackTrace();
//			return false;
//		}
//	
//    
//	}
	
	}
