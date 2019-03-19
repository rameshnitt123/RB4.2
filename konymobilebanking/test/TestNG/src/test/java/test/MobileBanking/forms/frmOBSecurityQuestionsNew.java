package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSecurityQuestionsNew {


  public frmOBSecurityQuestionsNew() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_frmOBSecurityQuestionsNew"));
  }
public void btnContinuePersonalInfo() throws Exception{ 
  AppElement btnContinuePersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_btnContinuePersonalInfo"));
  btnContinuePersonalInfo.click();
  }


public void rtxDescription(String text) throws Exception{
  AppElement rtxDescription=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_rtxDescription"));
  rtxDescription.type(text);
  }


public void segDependents(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segDependents"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segQuestion1(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segQuestion1"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segQuestion2(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segQuestion2"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segQuestion3(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segQuestion3"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segQuestion4(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segQuestion4"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segQuestion5(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_segQuestion5"),MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestionsNew_flxCheckbox"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}