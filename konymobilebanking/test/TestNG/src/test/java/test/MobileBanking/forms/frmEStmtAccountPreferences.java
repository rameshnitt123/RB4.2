package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtAccountPreferences {


  public frmEStmtAccountPreferences() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtAccountPreferences_frmEStmtAccountPreferences"));
  }




public void segSelectAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmEStmtAccountPreferences_segSelectAccounts"),MobileBankingWidgetId.getWidgetId("frmEStmtAccountPreferences_flxEStmtAccountPreferences"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}