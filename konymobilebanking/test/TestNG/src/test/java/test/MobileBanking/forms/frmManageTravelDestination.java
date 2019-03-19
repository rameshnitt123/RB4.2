package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTravelDestination {


  public frmManageTravelDestination() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_frmManageTravelDestination"));
  }
public void btnAdd() throws Exception{ 
  AppElement btnAdd=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_btnAdd"));
  btnAdd.click();
  }
public void btnCancel() throws Exception{ 
  AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_btnCancel"));
  btnCancel.click();
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_btnSave"));
  btnSave.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_tbxSearch"));
  tbxSearch.type(text);
  }



public void segTravelDestination(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_segTravelDestination"),MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_flxAddedDestination"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTravelDestinationResults(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_segTravelDestinationResults"),MobileBankingWidgetId.getWidgetId("frmManageTravelDestination_flxMakeTravelSearchResult"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}