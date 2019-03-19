package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayPayeeAddressList {


  public frmBillPayPayeeAddressList() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeAddressList_frmBillPayPayeeAddressList"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeAddressList_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeAddressList_segAddresses"),MobileBankingWidgetId.getWidgetId("frmBillPayPayeeAddressList_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}