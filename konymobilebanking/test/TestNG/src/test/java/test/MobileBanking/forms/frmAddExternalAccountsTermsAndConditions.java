package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAddExternalAccountsTermsAndConditions {


  public frmAddExternalAccountsTermsAndConditions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAddExternalAccountsTermsAndConditions_frmAddExternalAccountsTermsAndConditions"));
  }


public void rtxTermsConditionsValue(String text) throws Exception{
  AppElement rtxTermsConditionsValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmAddExternalAccountsTermsAndConditions_rtxTermsConditionsValue"));
  rtxTermsConditionsValue.type(text);
  }



}