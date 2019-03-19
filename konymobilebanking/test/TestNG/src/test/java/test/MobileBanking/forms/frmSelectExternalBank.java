package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmSelectExternalBank {


  public frmSelectExternalBank() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalBank_frmSelectExternalBank"));
  }
public void btnCancelSearch() throws Exception{ 
  AppElement btnCancelSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalBank_btnCancelSearch"));
  btnCancelSearch.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmSelectExternalBank_tbxSearch"));
  tbxSearch.type(text);
  }



public void segExternalBankList(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSelectExternalBank_segExternalBankList"),MobileBankingWidgetId.getWidgetId("frmSelectExternalBank_flxBankNameHeader"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}