package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBEmploymentCurrentPosition {


  public frmOBEmploymentCurrentPosition() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmploymentCurrentPosition_frmOBEmploymentCurrentPosition"));
  }




public void segDependents(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBEmploymentCurrentPosition_segDependents"),MobileBankingWidgetId.getWidgetId("frmOBEmploymentCurrentPosition_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}