package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCheckDepositTo {


  public frmCheckDepositTo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCheckDepositTo_frmCheckDepositTo"));
  }
public void btnAddAccount() throws Exception{ 
  AppElement btnAddAccount=new AppElement(MobileBankingWidgetId.getWidgetId("frmCheckDepositTo_btnAddAccount"));
  btnAddAccount.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCheckDepositTo_tbxSearch"));
  tbxSearch.type(text);
  }



public void segToAccount(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCheckDepositTo_segToAccount"),MobileBankingWidgetId.getWidgetId("frmCheckDepositTo_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}