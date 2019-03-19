package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmEnrollSecurity {


  public frmEnrollSecurity() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurity_frmEnrollSecurity"));
  }
public void btnResend() throws Exception{ 
  AppElement btnResend=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurity_btnResend"));
  btnResend.click();
  }
public void btnVerifySecCode() throws Exception{ 
  AppElement btnVerifySecCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurity_btnVerifySecCode"));
  btnVerifySecCode.click();
  }

public frmEnrollSignUp clickContinue() throws Exception
{
	btnVerifySecCode();
	  return new frmEnrollSignUp();
}

}