package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileChangeAndUpdatePassword {


  public frmProfileChangeAndUpdatePassword() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeAndUpdatePassword_frmProfileChangeAndUpdatePassword"));
  }
public void btnContinueSignUp() throws Exception{ 
  AppElement btnContinueSignUp=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeAndUpdatePassword_btnContinueSignUp"));
  btnContinueSignUp.click();
  }

public void txtCurrentPassword(String text) throws Exception{
  AppElement txtCurrentPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeAndUpdatePassword_txtCurrentPassword"));
  txtCurrentPassword.type(text);
  }
public void txtNewPassword(String text) throws Exception{
  AppElement txtNewPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeAndUpdatePassword_txtNewPassword"));
  txtNewPassword.type(text);
  }
public void txtReEnterPass(String text) throws Exception{
  AppElement txtReEnterPass=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeAndUpdatePassword_txtReEnterPass"));
  txtReEnterPass.type(text);
  }




}