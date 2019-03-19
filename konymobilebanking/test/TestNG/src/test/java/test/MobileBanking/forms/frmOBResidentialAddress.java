package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBResidentialAddress {


  public frmOBResidentialAddress() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_frmOBResidentialAddress"));
  }
public void btnContinueResidentialAddress() throws Exception{ 
  AppElement btnContinueResidentialAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_btnContinueResidentialAddress"));
  btnContinueResidentialAddress.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtResidentialAddressCity(String text) throws Exception{
  AppElement txtResidentialAddressCity=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressCity"));
  txtResidentialAddressCity.type(text);
  }
public void txtResidentialAddressDummy(String text) throws Exception{
  AppElement txtResidentialAddressDummy=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressDummy"));
  txtResidentialAddressDummy.type(text);
  }
public void txtResidentialAddressLineOne(String text) throws Exception{
  AppElement txtResidentialAddressLineOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressLineOne"));
  txtResidentialAddressLineOne.type(text);
  }
public void txtResidentialAddressLineTwo(String text) throws Exception{
  AppElement txtResidentialAddressLineTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressLineTwo"));
  txtResidentialAddressLineTwo.type(text);
  }
public void txtResidentialAddressState(String text) throws Exception{
  AppElement txtResidentialAddressState=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressState"));
  txtResidentialAddressState.type(text);
  }
public void txtResidentialAddressZipCode(String text) throws Exception{
  AppElement txtResidentialAddressZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_txtResidentialAddressZipCode"));
  txtResidentialAddressZipCode.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_segAddresses"),MobileBankingWidgetId.getWidgetId("frmOBResidentialAddress_flxSearchAddress"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}