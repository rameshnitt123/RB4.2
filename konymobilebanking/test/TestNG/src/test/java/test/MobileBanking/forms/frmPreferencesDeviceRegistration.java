package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmPreferencesDeviceRegistration {


  public frmPreferencesDeviceRegistration() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceRegistration_frmPreferencesDeviceRegistration"));
  }
public static void btnRegisterDevice() throws Exception{ 
  AppElement btnRegisterDevice=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceRegistration_btnRegisterDevice"));
  btnRegisterDevice.click();
  }

public frmPreferencesDeviceRegSecCode clickRegisterDevice() throws Exception {
	btnRegisterDevice();
	return new frmPreferencesDeviceRegSecCode();
}

public boolean isDeviceRegistered() throws IOException, Exception {
	boolean visible;
	visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin"));
	if(visible==true)
	{
		frmLogin frmLogin = new frmLogin();
		frmLogin.doLogin(AppSpecificFunctions.username,AppSpecificFunctions.password);
		Thread.sleep(3000);
		if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_frmFullScreenAds"))||
				AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated")))
		{
			return true;
		}
	}
	return false;
}



}