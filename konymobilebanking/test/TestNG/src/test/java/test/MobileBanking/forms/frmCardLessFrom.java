package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessFrom {


  public frmCardLessFrom() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessFrom_frmCardLessFrom"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessFrom_tbxSearch"));
  tbxSearch.type(text);
  }



public void segToAccount(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessFrom_segToAccount"),MobileBankingWidgetId.getWidgetId("segAccounts_lblAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
			e.printStackTrace();		
		}
	} 

}