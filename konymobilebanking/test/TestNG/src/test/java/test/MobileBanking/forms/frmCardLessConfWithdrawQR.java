package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessConfWithdrawQR {


  public frmCardLessConfWithdrawQR() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdrawQR_frmCardLessConfWithdrawQR"));
  }
public void btnConfirm() throws Exception{ 
  AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdrawQR_btnConfirm"));
  btnConfirm.click();
  }





}