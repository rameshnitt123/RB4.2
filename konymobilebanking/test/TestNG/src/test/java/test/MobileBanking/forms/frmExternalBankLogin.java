package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmExternalBankLogin {


  public frmExternalBankLogin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalBankLogin_frmExternalBankLogin"));
  }
public void btnLogIn() throws Exception{ 
  AppElement btnLogIn=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalBankLogin_btnLogIn"));
  btnLogIn.click();
  }

public void tbxPassword(String text) throws Exception{
  AppElement tbxPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalBankLogin_tbxPassword"));
  tbxPassword.type(text);
  }
public void tbxUsername(String text) throws Exception{
  AppElement tbxUsername=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalBankLogin_tbxUsername"));
  tbxUsername.type(text);
  }




}