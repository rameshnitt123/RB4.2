package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileEnterEmailID {


  public frmProfileEnterEmailID() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterEmailID_frmProfileEnterEmailID"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterEmailID_btnContinue"));
  btnContinue.click();
  }
public void btnDeleteEmail() throws Exception{ 
  AppElement btnDeleteEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterEmailID_btnDeleteEmail"));
  btnDeleteEmail.click();
  }

public void tbxEmail(String text) throws Exception{
  AppElement tbxEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterEmailID_tbxEmail"));
  tbxEmail.type(text);
  }




}