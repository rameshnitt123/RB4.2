package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmSelectExternalAccounts {


  public frmSelectExternalAccounts() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalAccounts_frmSelectExternalAccounts"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalAccounts_btnSave"));
  btnSave.click();
  }
public void btnTnC() throws Exception{ 
  AppElement btnTnC=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalAccounts_btnTnC"));
  btnTnC.click();
  }




public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSelectExternalAccounts_segTransactions"),MobileBankingWidgetId.getWidgetId("frmSelectExternalAccounts_flxExtAccountsHeader"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}