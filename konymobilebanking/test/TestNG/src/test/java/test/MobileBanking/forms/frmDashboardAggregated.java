package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;
import test.common.Segment;

public class frmDashboardAggregated {


  public frmDashboardAggregated() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"));
  }
public void btnBar() throws Exception{ 
  AppElement btnBar=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_btnBar"));
  btnBar.click();
  }
public void btnSummary() throws Exception{ 
  AppElement btnSummary=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_btnSummary"));
  btnSummary.click();
  }
public void btnViewAllTransactions() throws Exception{ 
  AppElement btnViewAllTransactions=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_btnViewAllTransactions"));
  btnViewAllTransactions.click();
  }


public void rtxDetails(String text) throws Exception{
  AppElement rtxDetails=new AppElement(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_rtxDetails"));
  rtxDetails.type(text);
  }


public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segAccounts"),MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segAccountTypes(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segAccountTypes"),MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxSelectAccountTypes"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segBar(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segBar"),MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSummary(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segSummary"),MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segTransactions"),MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxChartsSpending"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public boolean inLandingForm() throws IOException, Exception {
	boolean visible = AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"));
    return visible;
}
public boolean isInfeedBannerAdVisible() throws IOException, Exception
{
	
	  AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_flxAdInfo"));
	  boolean isvisible=false;
	  if(AppElement.isElementVisible("id","frmDashboardAggregated_imgAd1")||
				AppElement.isElementVisible("id","frmDashboardAggregated_imgAd2")||
				AppElement.isElementVisible("id","frmDashboardAggregated_imgAd3")||
				AppElement.isElementVisible("id","frmDashboardAggregated_imgAd4")||
				AppElement.isElementVisible("id","frmDashboardAggregated_imgAd5"))
		{
		  isvisible = true ;
		}
	  return isvisible;
}
public void clickInfeedBannerAd() throws Exception {
	if(AppElement.isElementVisible("id","frmDashboardAggregated_imgAd1")||
			AppElement.isElementVisible("id","frmDashboardAggregated_imgAd2")||
			AppElement.isElementVisible("id","frmDashboardAggregated_imgAd3")||
			AppElement.isElementVisible("id","frmDashboardAggregated_imgAd4")||
			AppElement.isElementVisible("id","frmDashboardAggregated_imgAd5"))
	{
		AppSpecificFunctions.clickAppElement("frmDashboardAggregated_flxScrollContainerAds");
	}
	
	
}
public void backToApp() throws Exception {
	AppSpecificFunctions.backToApp();
	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_frmDashboardAggregated"));
	
}

}