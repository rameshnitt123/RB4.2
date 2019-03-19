package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmEnrollSSn {


  public frmEnrollSSn() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSSn_frmEnrollSSn"));
  }
public frmEnrollSecurityCheck btnVerifySSN() throws Exception{ 
  AppElement btnVerifySSN=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSSn_btnVerifySSN"));
  btnVerifySSN.click();
  return new frmEnrollSecurityCheck();
  }
public void enterSSn() throws Exception {
	AppSpecificFunctions.enter(AppSpecificFunctions.getRandomNumber(9));
}

}