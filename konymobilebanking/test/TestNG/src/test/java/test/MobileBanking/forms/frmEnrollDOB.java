package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmEnrollDOB {


  public frmEnrollDOB() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollDOB_frmEnrollDOB"));
  }
public frmEnrollSSn btnVerifyDOB() throws Exception{ 
  AppElement btnVerifyDOB=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollDOB_btnVerifyDOB"));
  btnVerifyDOB.click();
  return new frmEnrollSSn();
  }
public void enterDOB() throws Exception {
	AppSpecificFunctions.enter("12041996");
}

}