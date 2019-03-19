package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessRecName {


  public frmCardLessRecName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessRecName_frmCardLessRecName"));
  }
public frmCardLessWithdraw btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessRecName_btnContinue"));
  btnContinue.click();
  return new frmCardLessWithdraw();
  }

public void txtFirstName(String text) throws Exception{
  AppElement txtFirstName=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessRecName_txtFirstName"));
  txtFirstName.type(text);
  }
public void txtLastName(String text) throws Exception{
  AppElement txtLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessRecName_txtLastName"));
  txtLastName.type(text);
  }




}