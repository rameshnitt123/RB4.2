package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayPhoneNumber {


  public frmBillPayPhoneNumber() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPhoneNumber_frmBillPayPhoneNumber"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPhoneNumber_btnContinue"));
  btnContinue.click();
  }





}