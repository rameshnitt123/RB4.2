package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtTermsAndConditions {


  public frmEStmtTermsAndConditions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtTermsAndConditions_frmEStmtTermsAndConditions"));
  }


public void rtxTermsConditionsValue(String text) throws Exception{
  AppElement rtxTermsConditionsValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtTermsAndConditions_rtxTermsConditionsValue"));
  rtxTermsConditionsValue.type(text);
  }



}