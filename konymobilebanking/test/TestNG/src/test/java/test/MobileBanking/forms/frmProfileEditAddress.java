package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileEditAddress {


  public frmProfileEditAddress() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_frmProfileEditAddress"));
  }
public void btnContinueResidentialAddress() throws Exception{ 
  AppElement btnContinueResidentialAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_btnContinueResidentialAddress"));
  btnContinueResidentialAddress.click();
  }
public void btnDeleteAddress() throws Exception{ 
  AppElement btnDeleteAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_btnDeleteAddress"));
  btnDeleteAddress.click();
  }

public void txtCountry(String text) throws Exception{
  AppElement txtCountry=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtCountry"));
  txtCountry.type(text);
  }
public void txtResidentialAddressCity(String text) throws Exception{
  AppElement txtResidentialAddressCity=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtResidentialAddressCity"));
  txtResidentialAddressCity.type(text);
  }
public void txtResidentialAddressLineOne(String text) throws Exception{
  AppElement txtResidentialAddressLineOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtResidentialAddressLineOne"));
  txtResidentialAddressLineOne.type(text);
  }
public void txtResidentialAddressLineTwo(String text) throws Exception{
  AppElement txtResidentialAddressLineTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtResidentialAddressLineTwo"));
  txtResidentialAddressLineTwo.type(text);
  }
public void txtResidentialAddressState(String text) throws Exception{
  AppElement txtResidentialAddressState=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtResidentialAddressState"));
  txtResidentialAddressState.type(text);
  }
public void txtResidentialAddressZipCode(String text) throws Exception{
  AppElement txtResidentialAddressZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditAddress_txtResidentialAddressZipCode"));
  txtResidentialAddressZipCode.type(text);
  }




}