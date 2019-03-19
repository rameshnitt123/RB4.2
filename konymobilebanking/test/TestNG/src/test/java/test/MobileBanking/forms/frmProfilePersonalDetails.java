package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfilePersonalDetails {


  public frmProfilePersonalDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfilePersonalDetails_frmProfilePersonalDetails"));
  }




public void segDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmProfilePersonalDetails_segDetails"),MobileBankingWidgetId.getWidgetId("frmProfilePersonalDetails_flxDetails"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}