package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDashboard {


  public frmDashboard() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboard_frmDashboard"));
  }
public void btnBar() throws Exception{ 
  AppElement btnBar=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboard_btnBar"));
  btnBar.click();
  }
public void btnSummary() throws Exception{ 
  AppElement btnSummary=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboard_btnSummary"));
  btnSummary.click();
  }
public void btnViewAllTransactions() throws Exception{ 
  AppElement btnViewAllTransactions=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboard_btnViewAllTransactions"));
  btnViewAllTransactions.click();
  }


public void rtxDetails(String text) throws Exception{
  AppElement rtxDetails=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboard_rtxDetails"));
  rtxDetails.type(text);
  }


public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboard_segAccounts"),MobileBankingWidgetId.getWidgetId("frmDashboard_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segBar(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboard_segBar"),MobileBankingWidgetId.getWidgetId("frmDashboard_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSummary(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboard_segSummary"),MobileBankingWidgetId.getWidgetId("frmDashboard_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboard_segTransactions"),MobileBankingWidgetId.getWidgetId("frmDashboard_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}