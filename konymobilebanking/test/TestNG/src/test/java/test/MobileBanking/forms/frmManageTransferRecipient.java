package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTransferRecipient {


  public frmManageTransferRecipient() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipient_frmManageTransferRecipient"));
  }
public void btnTransfer() throws Exception{ 
  AppElement btnTransfer=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipient_btnTransfer"));
  btnTransfer.click();
  }




public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipient_segTransactions"),MobileBankingWidgetId.getWidgetId("frmManageTransferRecipient_flxAccountsHeader"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}