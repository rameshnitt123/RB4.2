package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageRecipientList {


  public frmManageRecipientList() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_frmManageRecipientList"));
  }
public void btnAddRecipient() throws Exception{ 
  AppElement btnAddRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_btnAddRecipient"));
  btnAddRecipient.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_tbxSearch"));
  tbxSearch.type(text);
  }



public void segRecipients(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_segRecipients"),MobileBankingWidgetId.getWidgetId("frmManageRecipientList_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public boolean isfrmManageRecipientListVisible() throws IOException, Exception{
	if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmManageRecipientList_frmManageRecipientList"))){
		return true;
	}
	return false;
	
}

public void btnimgBack() throws Exception{ 
	  AppElement btnimgBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_imgBack"));
	  btnimgBack.click();
	  }

public void flxBack() throws Exception{ 
	  AppElement btnimgBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientList_Select_Account_Type"));
	  btnimgBack.click();
	  }
public frmManageRecipientType clickflxBack() throws Exception {
	if(SgConfiguration.getInstance().isAndroid())
		btnimgBack();
	else
		flxBack();
	return new frmManageRecipientType();
}

}