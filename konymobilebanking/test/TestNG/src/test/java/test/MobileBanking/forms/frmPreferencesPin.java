package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesPin {


  public frmPreferencesPin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesPin_frmPreferencesPin"));
  }
public void btnChangePin() throws Exception{ 
  AppElement btnChangePin=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesPin_btnChangePin"));
  btnChangePin.click();
  }
public void btnSetAsDefault() throws Exception{ 
  AppElement btnSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesPin_btnSetAsDefault"));
  btnSetAsDefault.click();
  }





}