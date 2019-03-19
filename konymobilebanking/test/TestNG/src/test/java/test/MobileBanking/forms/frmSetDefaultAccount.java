package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmSetDefaultAccount {


  public frmSetDefaultAccount() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmSetDefaultAccount_frmSetDefaultAccount"));
  }




public void segSelectAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSetDefaultAccount_segSelectAccounts"),MobileBankingWidgetId.getWidgetId("frmSetDefaultAccount_flxSettings"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}