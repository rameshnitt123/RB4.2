package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileUsername {


  public frmProfileUsername() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileUsername_frmProfileUsername"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileUsername_btnContinue"));
  btnContinue.click();
  }

public void tbxUsername(String text) throws Exception{
  AppElement tbxUsername=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileUsername_tbxUsername"));
  tbxUsername.type(text);
  }




}