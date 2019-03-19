package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPaySelectPayee {


  public frmBillPaySelectPayee() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPaySelectPayee_frmBillPaySelectPayee"));
  }
public void btnAddPayee() throws Exception{ 
  AppElement btnAddPayee=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPaySelectPayee_btnAddPayee"));
  btnAddPayee.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPaySelectPayee_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBillPaySelectPayee_segAccounts"),MobileBankingWidgetId.getWidgetId("frmBillPaySelectPayee_flxInfo"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}