package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessCashRec {


  public frmCardLessCashRec() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRec_frmCardLessCashRec"));
  }
public frmCardLessWithdraw btnICollect() throws Exception{ 
  AppElement btnICollect=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRec_btnICollect"));
  btnICollect.click();
  return new frmCardLessWithdraw();
  }
public frmCardLessContactType btnSomeoneCollect() throws Exception{ 
  AppElement btnSomeoneCollect=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRec_btnSomeoneCollect"));
  btnSomeoneCollect.click();
  return new frmCardLessContactType();
  }
}