package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegTouchId {


  public frmDevRegTouchId() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegTouchId_frmDevRegTouchId"));
  }
public void btnEnable() throws Exception{ 
  AppElement btnEnable=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegTouchId_btnEnable"));
  btnEnable.click();
  }





}