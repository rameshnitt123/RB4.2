package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMSelectTimePeriod {


  public frmPFMSelectTimePeriod() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMSelectTimePeriod_frmPFMSelectTimePeriod"));
  }
public void btnViewChart() throws Exception{ 
  AppElement btnViewChart=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMSelectTimePeriod_btnViewChart"));
  btnViewChart.click();
  }




public void segCategories(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMSelectTimePeriod_segCategories"),MobileBankingWidgetId.getWidgetId("frmPFMSelectTimePeriod_flxAdvanceSearch"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}