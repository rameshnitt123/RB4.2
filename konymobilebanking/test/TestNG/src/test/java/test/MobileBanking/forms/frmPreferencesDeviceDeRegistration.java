package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesDeviceDeRegistration {


  public frmPreferencesDeviceDeRegistration() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceDeRegistration_frmPreferencesDeviceDeRegistration"));
  }
public void btnRegisterDevice() throws Exception{ 
  AppElement btnRegisterDevice=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceDeRegistration_btnRegisterDevice"));
  btnRegisterDevice.click();
  }
public static frmLogin clickbtnRegisterDevice() throws Exception {

	frmPreferencesDeviceDeRegistration frmPreferencesDeviceDeRegistration =new frmPreferencesDeviceDeRegistration();
//	if(AppElement.waitForEnable("frmPreferencesDeviceDeRegistration_btnRegisterDevice"))
//	{
	frmPreferencesDeviceDeRegistration.btnRegisterDevice();
	AppElement.waitForEnable("frmLogin_frmLogin");
	return new frmLogin();
}





}