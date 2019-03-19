package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessCWCode {


  public frmCardLessCWCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_frmCardLessCWCode"));
  }
public frmCardLessHome btnDone() throws Exception{ 
  AppElement btnDone=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_btnDone"));
  btnDone.click();
  Thread.sleep(3000);
  return new frmCardLessHome();
  }
public void btnFindNearByAtm() throws Exception{ 
  AppElement btnFindNearByAtm=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_btnFindNearByAtm"));
  btnFindNearByAtm.click();
  }
public void btnSeeWithdrawCash() throws Exception{ 
  AppElement btnSeeWithdrawCash=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_btnSeeWithdrawCash"));
  btnSeeWithdrawCash.click();
  }
public void btnViewTransactionDetails() throws Exception{ 
  AppElement btnViewTransactionDetails=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_btnViewTransactionDetails"));
  btnViewTransactionDetails.click();
  }

public boolean isAcknowledgeCodeVisible() throws IOException, Exception
{
	boolean isCodeVisible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessCWCode_lblCashWithdrawalCodeVal"));
	return isCodeVisible;
}




}