package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessConfWithdraw {


  public frmCardLessConfWithdraw() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_frmCardLessConfWithdraw"));
  }
public void btnConfirm() throws Exception{ 
  AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnConfirm"));
  btnConfirm.click();
  }

public frmCardLessHome btnRight() throws Exception{ 
	if(SgConfiguration.getInstance().isAndroid()){  
		AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnRight"));
		  btnRight.click();
		  return new frmCardLessHome();}
		else if (SgConfiguration.getInstance().isIOS()){
			AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_Cancel"));
			  btnRight.click();
			  return new frmCardLessHome();
		}
			  
	return null;
	  }
public frmCardLessWithdraw imgBack() throws Exception{ 
	if(SgConfiguration.getInstance().isAndroid())
	{  AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_imgBack"));
	  btnRight.click();
	}
	else if (SgConfiguration.getInstance().isIOS())
	{
		AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_Withdraw"));
		  btnRight.click();
		
	}
	return new frmCardLessWithdraw();
	  }

public boolean isSecureCodeVisible() throws IOException, Exception{
	if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_frmCardLessConfWithdraw"))){
		return false;
	}
	return true;
	
}
public void txtDescription(String text) throws IOException, Exception {
	AppElement txtRecipientName=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_txtDescription"));
	  txtRecipientName.typeAndClickNext(text);
}
public frmCardLessCWCode clickConfirm() throws Exception {
	if(SgConfiguration.getInstance().isAndroid()){
		btnConfirm();
	}
	else if (SgConfiguration.getInstance().isIOS())
		clickConfirmofForm();
	 return new frmCardLessCWCode();
}

private frmCardLessCWCode clickConfirmofForm() throws IOException, Exception {
	AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_btnConfirm"));
	btnConfirm.click();
	return new frmCardLessCWCode();
}
public frmCardLessHome clcikCancel() throws Exception {

	if(SgConfiguration.getInstance().isAndroid())
		btnRight();
	else if(SgConfiguration.getInstance().isIOS())
		clickCancelofForm();
	return null;
	
	
}
private frmCardLessHome clickCancelofForm() throws IOException, Exception {
	AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_Cancel"));
	btnCancel.click();
	return new frmCardLessHome();
}
public frmCardLessOverdraft clickConfirmforOverdraft() throws IOException, Exception {
	if(SgConfiguration.getInstance().isAndroid()){
		btnConfirm();
	}
	else if (SgConfiguration.getInstance().isIOS())
		clickConfirmofFormforOverdraft();
	 return new frmCardLessOverdraft();
}
private frmCardLessOverdraft clickConfirmofFormforOverdraft() throws IOException, Exception {
	AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_btnConfirm"));
	btnConfirm.click();
	return new frmCardLessOverdraft();
}


}