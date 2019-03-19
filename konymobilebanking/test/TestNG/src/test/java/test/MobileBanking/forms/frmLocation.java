package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmLocation {


  public frmLocation() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocation_frmLocation"));
  }
public void btnApply() throws Exception{ 
  AppElement btnApply=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocation_btnApply"));
  btnApply.click();
  }
public void btnCallBranch() throws Exception{ 
  AppElement btnCallBranch=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocation_btnCallBranch"));
  btnCallBranch.click();
  }




public void segBranchList(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segBranchList"),MobileBankingWidgetId.getWidgetId("frmLocation_flxBankImage"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segDirections(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segDirections"),MobileBankingWidgetId.getWidgetId("frmLocation_flxDirectionData"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segOperationalHours(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segOperationalHours"),MobileBankingWidgetId.getWidgetId("frmLocation_flxOperationHours"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSelectSearchRange(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segSelectSearchRange"),MobileBankingWidgetId.getWidgetId("frmLocation_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segServices(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segServices"),MobileBankingWidgetId.getWidgetId("frmLocation_flxServices"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segServicesFilter(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segServicesFilter"),MobileBankingWidgetId.getWidgetId("frmLocation_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segShow(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocation_segShow"),MobileBankingWidgetId.getWidgetId("frmLocation_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}