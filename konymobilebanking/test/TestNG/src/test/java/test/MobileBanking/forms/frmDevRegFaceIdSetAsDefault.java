package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegFaceIdSetAsDefault {


  public frmDevRegFaceIdSetAsDefault() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceIdSetAsDefault_frmDevRegFaceIdSetAsDefault"));
  }
public void btnEnableAndSetAsDefault() throws Exception{ 
  AppElement btnEnableAndSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceIdSetAsDefault_btnEnableAndSetAsDefault"));
  btnEnableAndSetAsDefault.click();
  }
public void btnSetAsDefault() throws Exception{ 
  AppElement btnSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceIdSetAsDefault_btnSetAsDefault"));
  btnSetAsDefault.click();
  }





}