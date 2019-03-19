package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAlertsMinimumBalance {


  public frmAlertsMinimumBalance() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsMinimumBalance_frmAlertsMinimumBalance"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsMinimumBalance_btnContinue"));
  btnContinue.click();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsMinimumBalance_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsMinimumBalance_tbxAmount"));
  tbxAmount.type(text);
  }




}