package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmEnrollSignUp {


  public frmEnrollSignUp() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSignUp_frmEnrollSignUp"));
  }

public frmLogin btnContinueSignUp() throws Exception{ 
  AppElement btnContinueSignUp=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSignUp_btnContinueSignUp"));
  btnContinueSignUp.click();
  return new frmLogin();
  }

public void txtEnterUsername(String text) throws Exception{
  AppElement txtEnterUsername=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSignUp_txtEnterUsername"));
  txtEnterUsername.type(text);
  }
public void txtPassword(String text) throws Exception{
  AppElement txtPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSignUp_txtPassword"));
  txtPassword.type(text);
  }
public void txtReEnterPass(String text) throws Exception{
  AppElement txtReEnterPass=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSignUp_txtReEnterPass"));
  txtReEnterPass.type(text);
  }




}