package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAdvanceSearch {


  public frmAdvanceSearch() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_frmAdvanceSearch"));
  }
public void btnSearch() throws Exception{ 
  AppElement btnSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_btnSearch"));
  btnSearch.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtAmountFrom(String text) throws Exception{
  AppElement txtAmountFrom=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_txtAmountFrom"));
  txtAmountFrom.type(text);
  }
public void txtAmountTo(String text) throws Exception{
  AppElement txtAmountTo=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_txtAmountTo"));
  txtAmountTo.type(text);
  }
public void txtCheckNumbersFrom(String text) throws Exception{
  AppElement txtCheckNumbersFrom=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_txtCheckNumbersFrom"));
  txtCheckNumbersFrom.type(text);
  }
public void txtCheckNumbersTo(String text) throws Exception{
  AppElement txtCheckNumbersTo=new AppElement(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_txtCheckNumbersTo"));
  txtCheckNumbersTo.type(text);
  }



public void segTimeRange(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_segTimeRange"),MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_flxAdvanceSearch"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_segTransactions"),MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactionType(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_segTransactionType"),MobileBankingWidgetId.getWidgetId("frmAdvanceSearch_flxAdvanceSearch"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}