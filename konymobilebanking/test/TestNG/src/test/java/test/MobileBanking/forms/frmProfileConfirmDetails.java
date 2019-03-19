package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileConfirmDetails {


  public frmProfileConfirmDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileConfirmDetails_frmProfileConfirmDetails"));
  }
public void btnUpdateChanges() throws Exception{ 
  AppElement btnUpdateChanges=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileConfirmDetails_btnUpdateChanges"));
  btnUpdateChanges.click();
  }





}