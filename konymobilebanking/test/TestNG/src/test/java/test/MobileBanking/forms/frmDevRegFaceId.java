package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegFaceId {


  public frmDevRegFaceId() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceId_frmDevRegFaceId"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceId_btnContinue"));
  btnContinue.click();
  }
public void btnEnableAndSetAsDefault() throws Exception{ 
  AppElement btnEnableAndSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegFaceId_btnEnableAndSetAsDefault"));
  btnEnableAndSetAsDefault.click();
  }





}