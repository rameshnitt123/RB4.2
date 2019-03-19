package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessCashRecQR {


  public frmCardLessCashRecQR() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRecQR_frmCardLessCashRecQR"));
  }
public void btnICollect() throws Exception{ 
  AppElement btnICollect=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRecQR_btnICollect"));
  btnICollect.click();
  }
public void btnSomeoneCollect() throws Exception{ 
  AppElement btnSomeoneCollect=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCashRecQR_btnSomeoneCollect"));
  btnSomeoneCollect.click();
  }





}