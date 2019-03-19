package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessFromQR {


  public frmCardLessFromQR() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessFromQR_frmCardLessFromQR"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessFromQR_tbxSearch"));
  tbxSearch.type(text);
  }



public void segToAccount(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessFromQR_segToAccount"),MobileBankingWidgetId.getWidgetId("frmCardLessFromQR_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}