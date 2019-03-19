package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMAdvanceSearchResults {


  public frmPFMAdvanceSearchResults() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvanceSearchResults_frmPFMAdvanceSearchResults"));
  }




public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMAdvanceSearchResults_segTransactions"),MobileBankingWidgetId.getWidgetId("frmPFMAdvanceSearchResults_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}