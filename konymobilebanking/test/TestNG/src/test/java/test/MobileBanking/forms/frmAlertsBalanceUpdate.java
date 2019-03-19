package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAlertsBalanceUpdate {


  public frmAlertsBalanceUpdate() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsBalanceUpdate_frmAlertsBalanceUpdate"));
  }




public void segBalanceUpdateTime(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAlertsBalanceUpdate_segBalanceUpdateTime"),MobileBankingWidgetId.getWidgetId("frmAlertsBalanceUpdate_flxBalanceUpdateTime"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}