package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransfersStartDate {


  public frmTransfersStartDate() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersStartDate_frmTransfersStartDate"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersStartDate_btnContinue"));
  btnContinue.click();
  }

public void selectDate(String date) throws Exception{ 
	AppCalendar calendar = new AppCalendar(MobileBankingWidgetId.getWidgetId("frmTransfersStartDate_customCalendar"));
	 calendar.clickDay(15);
	  }





}