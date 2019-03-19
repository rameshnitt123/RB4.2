package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMMyMoney {


  public frmPFMMyMoney() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_frmPFMMyMoney"));
  }
public void btnBudget() throws Exception{ 
  AppElement btnBudget=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_btnBudget"));
  btnBudget.click();
  }
public void btnSpending() throws Exception{ 
  AppElement btnSpending=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_btnSpending"));
  btnSpending.click();
  }
public void btnViewTransactions() throws Exception{ 
  AppElement btnViewTransactions=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_btnViewTransactions"));
  btnViewTransactions.click();
  }




public void segBudget(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_segBudget"),MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_flxExceeded"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSpending(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_segSpending"),MobileBankingWidgetId.getWidgetId("frmPFMMyMoney_flxColor"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}