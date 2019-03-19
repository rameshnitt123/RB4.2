package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmLocationMap {


  public frmLocationMap() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocationMap_frmLocationMap"));
  }
public void btnApply() throws Exception{ 
  AppElement btnApply=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocationMap_btnApply"));
  btnApply.click();
  }




public void segBranchList(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationMap_segBranchList"),MobileBankingWidgetId.getWidgetId("frmLocationMap_flxBankImage"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSelectSearchRange(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationMap_segSelectSearchRange"),MobileBankingWidgetId.getWidgetId("frmLocationMap_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segServicesFilter(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationMap_segServicesFilter"),MobileBankingWidgetId.getWidgetId("frmLocationMap_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segShow(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationMap_segShow"),MobileBankingWidgetId.getWidgetId("frmLocationMap_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}