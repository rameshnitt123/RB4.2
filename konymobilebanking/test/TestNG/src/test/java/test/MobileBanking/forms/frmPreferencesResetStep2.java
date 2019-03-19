package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesResetStep2 {


  public frmPreferencesResetStep2() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesResetStep2_frmPreferencesResetStep2"));
  }
public void btnNext() throws Exception{ 
  AppElement btnNext=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesResetStep2_btnNext"));
  btnNext.click();
  }





}