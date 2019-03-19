package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayAllPayees {


  public frmBillPayAllPayees() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayAllPayees_frmBillPayAllPayees"));
  }
public void btnAddPayee() throws Exception{ 
  AppElement btnAddPayee=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayAllPayees_btnAddPayee"));
  btnAddPayee.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayAllPayees_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBillPayAllPayees_segAccounts"),MobileBankingWidgetId.getWidgetId("frmBillPayAllPayees_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}