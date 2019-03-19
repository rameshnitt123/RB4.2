package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMCategorisedTransactions {


  public frmPFMCategorisedTransactions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_frmPFMCategorisedTransactions"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_tbxSearch"));
  tbxSearch.type(text);
  }



public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_segTransactions"),MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactionTypes(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_segTransactionTypes"),MobileBankingWidgetId.getWidgetId("frmPFMCategorisedTransactions_flxSelectAccountTypes"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}