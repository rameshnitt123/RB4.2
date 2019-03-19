package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSignature {


  public frmOBSignature() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSignature_frmOBSignature"));
  }
public void btnDone() throws Exception{ 
  AppElement btnDone=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSignature_btnDone"));
  btnDone.click();
  }





}