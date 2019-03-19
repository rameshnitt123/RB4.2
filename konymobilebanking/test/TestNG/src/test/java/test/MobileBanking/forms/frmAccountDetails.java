package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAccountDetails {


  public frmAccountDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountDetails_frmAccountDetails"));
  }
public void btnChatbot() throws Exception{ 
  AppElement btnChatbot=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountDetails_btnChatbot"));
  btnChatbot.click();
  }
public void btnStatements() throws Exception{ 
  AppElement btnStatements=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountDetails_btnStatements"));
  btnStatements.click();
  }
public void btnWithdrawCash() throws Exception{ 
  AppElement btnWithdrawCash=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountDetails_btnWithdrawCash"));
  btnWithdrawCash.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountDetails_tbxSearch"));
  tbxSearch.type(text);
  }



public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAccountDetails_segTransactions"),MobileBankingWidgetId.getWidgetId("frmAccountDetails_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}