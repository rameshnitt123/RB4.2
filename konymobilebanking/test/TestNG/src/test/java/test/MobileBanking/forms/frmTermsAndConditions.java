package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmTermsAndConditions {


  public frmTermsAndConditions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTermsAndConditions_frmTermsAndConditions"));
  }


public void rtxTermsConditionsValue(String text) throws Exception{
  AppElement rtxTermsConditionsValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmTermsAndConditions_rtxTermsConditionsValue"));
  rtxTermsConditionsValue.type(text);
  }



}