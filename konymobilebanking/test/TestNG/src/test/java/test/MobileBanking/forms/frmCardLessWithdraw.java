package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;
import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessWithdraw {


  public frmCardLessWithdraw() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_frmCardLessWithdraw"));
  }
  
  public String invalidDenominations="Please enter an amount with valid denomination";
  public String insufficientAmount="Please enter amount less than available balance";

 public frmCardLessFrom btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnChange"));
  btnChange.click();
  return new frmCardLessFrom();
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnContinue"));
  btnContinue.click();
  }
public void clickContinue() throws Exception{ 
//	  if(SgConfiguration.getInstance().isAndroid())
		  btnContinue();
//	  else if(SgConfiguration.getInstance().isIOS())
//		  clickContinueonForm();
//	  return null;
	  }

//private void clickContinueonForm() {
//	AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId(""));
//	btnContinue.click();
//	
//}
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_tbxAmount"));
  tbxAmount.type(text);
  }

public boolean isInvalidAmountAlertVisible() throws Exception {
	//returns true if InvalidAmount label is visible
//	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup"));
//	Thread.sleep(1000);
	boolean visible ;
	if(SgConfiguration.getInstance().isAndroid())
		visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup"));
	else
		visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblDenominationValue"));
	if(visible)
	  return true;
	else 
      return false;
}

public String getAmountErrorText() throws IOException, Exception{
	String amountErrorText = new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup")).getText();	
	return amountErrorText;
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
public frmCardLessConfWithdraw ContinueNext(int balance,String amount) throws Exception {
	AppSpecificFunctions.setAvailablebalance();
	  if(balance < 0){
		  changeAccount(); 
		  AppSpecificFunctions.setAvailablebalance();
		  AppSpecificFunctions.clearNumber();
		  AppSpecificFunctions.enter(amount);
	  }
	  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnContinue"));
	  btnContinue.click();
	  Thread.sleep(3000);
		  return new frmCardLessConfWithdraw();
}

public frmCardLessWithdraw changeAccount() throws IOException, Exception {
	AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnChange"));
	btnChange.click();
	Segment AccountsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessFrom_segToAccount"),MobileBankingWidgetId.getWidgetId("segToAccount_lblAccountName"));
	AccountsSeg.clickSegRowElementbyLabel("Savings Max");
	Thread.sleep(3000);
	AppSpecificFunctions.setAvailablebalance();
	return new frmCardLessWithdraw();
}

public frmCardLessSecureCode ContinueSSn() throws Exception {
	btnContinue();
	return new frmCardLessSecureCode();
}
public int lblBalanceValue() throws IOException, Exception {
	AppElement lblBalvalue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblBalanceValue"));
	String value = lblBalvalue.getText();
	if(value.contains(",")){
		value = AppSpecificFunctions.removeCommas(value);
	}
	if(value.startsWith("$")){
	value = value.substring(1, value.length());}
	value = value.substring(0, value.indexOf('.'));
	return (int) Math.floor(Integer.valueOf(value));
}

}