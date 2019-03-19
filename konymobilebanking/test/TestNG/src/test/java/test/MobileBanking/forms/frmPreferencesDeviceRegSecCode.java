package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmPreferencesDeviceRegSecCode {


  public frmPreferencesDeviceRegSecCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceRegSecCode_frmPreferencesDeviceRegSecCode"));
  }
public void btnReSend() throws Exception{ 
  AppElement btnReSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceRegSecCode_btnReSend"));
  btnReSend.click();
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDeviceRegSecCode_btnVerify"));
  btnVerify.click();
  }
public void enterSecuritycode(String securitycode) throws Exception {
	AppSpecificFunctions appSpecificFunction= new AppSpecificFunctions();
	appSpecificFunction.enter(securitycode);
	
}

public frmSettings clickBtnVerify() throws Exception {
	if(AppElement.waitForEnable("frmPreferencesDeviceRegSecCode_btnVerify"))
	{
		frmPreferencesDeviceRegSecCode frmPreferencesDeviceRegSecCode= new frmPreferencesDeviceRegSecCode();
		frmPreferencesDeviceRegSecCode.btnVerify();
		return new frmSettings();
	}
	return null;
}

}