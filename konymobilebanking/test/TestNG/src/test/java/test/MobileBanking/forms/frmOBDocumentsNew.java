package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBDocumentsNew {


  public frmOBDocumentsNew() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocumentsNew_frmOBDocumentsNew"));
  }
public void btnChooseFromGallery() throws Exception{ 
  AppElement btnChooseFromGallery=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocumentsNew_btnChooseFromGallery"));
  btnChooseFromGallery.click();
  }
public void btnContinueDocuments() throws Exception{ 
  AppElement btnContinueDocuments=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocumentsNew_btnContinueDocuments"));
  btnContinueDocuments.click();
  }
public void btnDelete() throws Exception{ 
  AppElement btnDelete=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocumentsNew_btnDelete"));
  btnDelete.click();
  }
public void btnTakeAPicture() throws Exception{ 
  AppElement btnTakeAPicture=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDocumentsNew_btnTakeAPicture"));
  btnTakeAPicture.click();
  }





}