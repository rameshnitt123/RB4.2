package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesFaceIdSetAsDefault {


  public frmPreferencesFaceIdSetAsDefault() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesFaceIdSetAsDefault_frmPreferencesFaceIdSetAsDefault"));
  }
public void btnSetAsDefault() throws Exception{ 
  AppElement btnSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesFaceIdSetAsDefault_btnSetAsDefault"));
  btnSetAsDefault.click();
  }





}