package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBCreditCheck {


  public frmOBCreditCheck() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_frmOBCreditCheck"));
  }
public void btnCancelResult() throws Exception{ 
  AppElement btnCancelResult=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_btnCancelResult"));
  btnCancelResult.click();
  }
public void btnContinueResult() throws Exception{ 
  AppElement btnContinueResult=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_btnContinueResult"));
  btnContinueResult.click();
  }
public void btnSSNAccept() throws Exception{ 
  AppElement btnSSNAccept=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_btnSSNAccept"));
  btnSSNAccept.click();
  }
public void btnSSNReject() throws Exception{ 
  AppElement btnSSNReject=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_btnSSNReject"));
  btnSSNReject.click();
  }
public void btnTnC() throws Exception{ 
  AppElement btnTnC=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_btnTnC"));
  btnTnC.click();
  }


public void rtxTermsConditionsValue(String text) throws Exception{
  AppElement rtxTermsConditionsValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_rtxTermsConditionsValue"));
  rtxTermsConditionsValue.type(text);
  }
public void rtxTitle(String text) throws Exception{
  AppElement rtxTitle=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBCreditCheck_rtxTitle"));
  rtxTitle.type(text);
  }



}