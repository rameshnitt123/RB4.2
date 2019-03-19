package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegPin {


  public frmDevRegPin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPin_frmDevRegPin"));
  }
public void btnEnable() throws Exception{ 
  AppElement btnEnable=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPin_btnEnable"));
  btnEnable.click();
  }
public void btnNext() throws Exception{ 
  AppElement btnNext=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPin_btnNext"));
  btnNext.click();
  }





}