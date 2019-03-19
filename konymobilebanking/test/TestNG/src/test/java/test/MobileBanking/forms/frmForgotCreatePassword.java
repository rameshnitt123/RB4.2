package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotCreatePassword {


  public frmForgotCreatePassword() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotCreatePassword_frmForgotCreatePassword"));
  }
public void btnUpdatePassword() throws Exception{ 
  AppElement btnUpdatePassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotCreatePassword_btnUpdatePassword"));
  btnUpdatePassword.click();
  }

public void txtNewPassword(String text) throws Exception{
  AppElement txtNewPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotCreatePassword_txtNewPassword"));
  txtNewPassword.type(text);
  }
public void txtReEnterPassword(String text) throws Exception{
  AppElement txtReEnterPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotCreatePassword_txtReEnterPassword"));
  txtReEnterPassword.type(text);
  }




}