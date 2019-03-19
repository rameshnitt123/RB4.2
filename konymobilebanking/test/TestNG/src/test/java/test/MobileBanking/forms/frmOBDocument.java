package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBDocument {


  public frmOBDocument() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocument_frmOBDocument"));
  }
public void btnChooseFromGallery() throws Exception{ 
  AppElement btnChooseFromGallery=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocument_btnChooseFromGallery"));
  btnChooseFromGallery.click();
  }
public void btnContinueDocuments() throws Exception{ 
  AppElement btnContinueDocuments=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocument_btnContinueDocuments"));
  btnContinueDocuments.click();
  }
public void btnSkipDocuments() throws Exception{ 
  AppElement btnSkipDocuments=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocument_btnSkipDocuments"));
  btnSkipDocuments.click();
  }
public void btnTakeAPicture() throws Exception{ 
  AppElement btnTakeAPicture=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocument_btnTakeAPicture"));
  btnTakeAPicture.click();
  }





}