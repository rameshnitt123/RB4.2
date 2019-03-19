package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesTouchId {


  public frmPreferencesTouchId() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesTouchId_frmPreferencesTouchId"));
  }
public void btnSetAsDefault() throws Exception{ 
  AppElement btnSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesTouchId_btnSetAsDefault"));
  btnSetAsDefault.click();
  }





}