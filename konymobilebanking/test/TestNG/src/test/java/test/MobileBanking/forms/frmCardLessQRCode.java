package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessQRCode {


  public frmCardLessQRCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessQRCode_frmCardLessQRCode"));
  }
public void btnDone() throws Exception{ 
  AppElement btnDone=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessQRCode_btnDone"));
  btnDone.click();
  }
public void btnFindNearByAtm() throws Exception{ 
  AppElement btnFindNearByAtm=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessQRCode_btnFindNearByAtm"));
  btnFindNearByAtm.click();
  }
public void btnSeeWithdrawCash() throws Exception{ 
  AppElement btnSeeWithdrawCash=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessQRCode_btnSeeWithdrawCash"));
  btnSeeWithdrawCash.click();
  }
public void btnViewTransactionDetails() throws Exception{ 
  AppElement btnViewTransactionDetails=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessQRCode_btnViewTransactionDetails"));
  btnViewTransactionDetails.click();
  }





}