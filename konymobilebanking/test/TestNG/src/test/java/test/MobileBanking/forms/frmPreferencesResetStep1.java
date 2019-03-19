package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesResetStep1 {


  public frmPreferencesResetStep1() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesResetStep1_frmPreferencesResetStep1"));
  }
public void btnNext() throws Exception{ 
  AppElement btnNext=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesResetStep1_btnNext"));
  btnNext.click();
  }





}