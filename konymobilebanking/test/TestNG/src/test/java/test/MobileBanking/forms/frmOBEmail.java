package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBEmail {


  public frmOBEmail() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmail_frmOBEmail"));
  }
public void btnContinueEmail() throws Exception{ 
  AppElement btnContinueEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmail_btnContinueEmail"));
  btnContinueEmail.click();
  }

public void txtEnterEmail(String text) throws Exception{
  AppElement txtEnterEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmail_txtEnterEmail"));
  txtEnterEmail.type(text);
  }

public void rtxAgreeTermsConditions(String text) throws Exception{
  AppElement rtxAgreeTermsConditions=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmail_rtxAgreeTermsConditions"));
  rtxAgreeTermsConditions.type(text);
  }
public void rtxTermsConditionsValue(String text) throws Exception{
  AppElement rtxTermsConditionsValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmail_rtxTermsConditionsValue"));
  rtxTermsConditionsValue.type(text);
  }



}