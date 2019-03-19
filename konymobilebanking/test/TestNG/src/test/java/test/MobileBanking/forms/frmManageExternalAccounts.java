package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageExternalAccounts {


  public frmManageExternalAccounts() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_frmManageExternalAccounts"));
  }
public void btnAdd() throws Exception{ 
  AppElement btnAdd=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_btnAdd"));
  btnAdd.click();
  }
public void btnCancelSearch() throws Exception{ 
  AppElement btnCancelSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_btnCancelSearch"));
  btnCancelSearch.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_tbxSearch"));
  tbxSearch.type(text);
  }



public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_segTransactions"),MobileBankingWidgetId.getWidgetId("frmManageExternalAccounts_flxAddedExternalAccounts"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}