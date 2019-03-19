//CheckBox() for iOS
package test.MobileBanking.forms;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.commons.lang3.RandomStringUtils;

import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;
import test.common.Alerts;
import test.common.AppElement;
import test.common.ListBox;
import test.common.Segment;
import test.common.SgConfiguration;

public  class AppSpecificFunctions {
    
    public static String username = SgConfiguration.getInstance().getKeyValue("username");
    public static String password = SgConfiguration.getInstance().getKeyValue("password");
    public static String username2 = SgConfiguration.getInstance().getKeyValue("username2");
    public static String password2 = SgConfiguration.getInstance().getKeyValue("password2");
    public static int balance ;
    
    public static String[] originalPersonalDetails = {"407-717-5351","407-717-5352","johnballey@gmail.com","john@gmail.com","john@gmail.com","john@gmail.com","john@gmail.com","john@gmail.com","USA","john@gmail.com"};
    public static String[] changedPersonalDetails = {"407-717-4443","407-717-4444","john@gmail.com","barry@gamil.com","KonyIndia","Phoenix Avance","Hyderabad","Telangana","USA","500080"};
    
    public static String[] messageAccount = {"Savings Plus","Gold Checking","Titanium Card","3 Years Deposit","Home Loan","Savings Max","Checking Account","Auto Loan"};
    public static String[] messageCategory= {"General Banking"};
    public static String[] messageSubCategory = {"Operation of Accounts","Rectify erroneous debit entry","Rectify excessive charges"};
     
    public static final
    Map<String,String> securityQuestions = new HashMap<String,String>();
    static {
        
        try {
            String ques1=MobileBankingNames.getWidgetName("SecurityQues1");
            String ques2=MobileBankingNames.getWidgetName("SecurityQues2");
            String ques3=MobileBankingNames.getWidgetName("SecurityQues3");
            String ques4=MobileBankingNames.getWidgetName("SecurityQues4");
            String ques5=MobileBankingNames.getWidgetName("SecurityQues5");
            String ques6=MobileBankingNames.getWidgetName("SecurityQues6");
             

            String ans1=MobileBankingNames.getWidgetName("SecurityAns1");
            String ans2=MobileBankingNames.getWidgetName("SecurityAns2");
            String ans3=MobileBankingNames.getWidgetName("SecurityAns3");
            String ans4=MobileBankingNames.getWidgetName("SecurityAns4");
            String ans5=MobileBankingNames.getWidgetName("SecurityAns5");
            String ans6=MobileBankingNames.getWidgetName("SecurityAns6");
            
            securityQuestions.put(ques1,ans1);
            securityQuestions.put(ques2,ans2);
            securityQuestions.put(ques3,ans3);
            securityQuestions.put(ques4,ans4);
            securityQuestions.put(ques5,ans5);
            securityQuestions.put(ques6,ans6);
            
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
       
        
    }
    public static String getAnswer(String question)
    {
        //Returns the answer mapped to string question
        Map<String,String> securityQuestions = AppSpecificFunctions.securityQuestions;
        for(Map.Entry<String,String> quesAns : securityQuestions.entrySet())
        {
            if(quesAns.getKey().equals(question))
            {
                return quesAns.getValue();
            }
        }
        System.out.println("###Question's answer not available");
        return null;
    }
    private static final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    public static String generateRandomAlphaNumericString(int count) throws Exception {
        //Generates a random string of size count
        StringBuilder builder = new StringBuilder();
        while (count-- != 0) {
            int character = (int)(Math.random() * ALPHA_NUMERIC_STRING.length());
            builder.append(ALPHA_NUMERIC_STRING.charAt(character));
        }
        return builder.toString();
    }

    public static String generateRandomString(String name,String randomStringDirection) {
        //Appends random string as prefix or suffix to the string name
        String randomString =null;
        if(randomStringDirection.equalsIgnoreCase("left"))
        {
            randomString = RandomStringUtils.randomAlphanumeric(5) + name;
        }
        else
        {
            randomString = name + RandomStringUtils.randomAlphanumeric(5);
        }
        return randomString;
    }
    public static String getRandomNumber(int size){
        //Generates a random number of length "size"
        int remainingSize=0;
        if(size>10)
        {           
            remainingSize=size-10;
            size=10;
        }
        Random rn = new Random();
        int low = (int) Math.pow(10, size-1);
        int high = (int) Math.pow(10, size);
        int number = rn.nextInt(high-low)+low;
        //Adding 1 to avoid 0
        number+=1;
        String num = String.valueOf(number)+"";
        if(remainingSize!=0)
            num = num + getRandomNumber(remainingSize);
        return num;
    }
    public static int getRandomNumberinRange(int size){
        //Generates a random number within a range eg., 0 - size
        Random rn = new Random();
        int number = rn.nextInt(size);
        return number;
    }
    public static int getLastDigits(int number,int numOfDigits){
        //Returns the last n digits from given number
        int denom = (int) Math.pow(10,numOfDigits);
        int result = number%denom;
        return result;
    }
    public static boolean isPhone()
    {
        //Determining whether tests are running on phone or tablet 
        System.out.println("In isPhone() method.......");
        String res = SgConfiguration.getInstance().getKeyValue("Device");
        if(res.equalsIgnoreCase("Phone"))
            return true;
        return false;
    }
    
    public  static boolean isTablet()
    {
        //Returns true if tests are running on tablet
        String res = SgConfiguration.getInstance().getKeyValue("Device");
        if(res.equalsIgnoreCase("Tablet"))
            return true;
        return false;
        
    }
    
    public static void clickAppElement(String appElementId) throws IOException, Exception
    {
         //Scroll until appElementId and clicks it
         AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(appElementId));
         AppElement appElement = new AppElement(MobileBankingWidgetId.getWidgetId(appElementId));
         appElement.click();
    }
    public static String getAppElementText(String appElementId) throws IOException, Exception
    {
         //Returns the element text
         AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(appElementId));
         AppElement appElement = new AppElement(MobileBankingWidgetId.getWidgetId(appElementId));
         return  appElement.getText();
    }
    public static void typeInAppElement(String appElementId,String typeText) throws IOException, Exception
    {
       //Scrolls until appElementId and types typeText value into it
       AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(appElementId));
       AppElement appElement = new AppElement(MobileBankingWidgetId.getWidgetId(appElementId));
       appElement.type(typeText);
    }
    public static void selectFromListBox(String appElementId,String chooseText) throws IOException, Exception
    {
        //Selects a value from the listbox
        AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(appElementId));       
        AppSpecificFunctions.clickAppElement(appElementId);     
        AppElement.isElementVisible("name",chooseText);
        ListBox.selectFromListBox(chooseText);
    }
    public static String Textview() throws Exception {
        //Returns the class of type text with respective mobileOS 
        if (SgConfiguration.getInstance().isAndroid()) {
            return "android.widget.TextView";
        } else if(SgConfiguration.getInstance().isIOS()){
            return "UIAStaticText";
        }
        return null;
    }
    public static String CheckBox() throws Exception {
        //Returns the class of type checkBox with respective mobileOS 
        if (SgConfiguration.getInstance().isAndroid()) {
            return "android.widget.CheckBox";
        }
        //Have to return for iOS
        return null;
    }

    public static String CheckedTextview() throws Exception {
        //Returns the class of type CheckedTextview with respective mobileOS 
        if (SgConfiguration.getInstance().isAndroid()) {
            return "android.widget.CheckedTextView";
        } else if(SgConfiguration.getInstance().isIOS()){
            return "UIAStaticText";
        }
        return null;
    }

    public static String Button() throws Exception {
        //Returns the class of type Button with respective mobileOS 
        if (SgConfiguration.getInstance().isAndroid()) {
            return "android.widget.Button";
        } else if(SgConfiguration.getInstance().isIOS()){
            return "UIAButton";
        }
        return null;
    }
    public static String ImageView() throws Exception {
        //Returns the class of type ImageView with respective mobileOS 
        if (SgConfiguration.getInstance().isAndroid()) {
            return "android.widget.ImageView";
        } else if(SgConfiguration.getInstance().isIOS()){
            return "UIAImage";
        }
        return null;
    }
    //Not applicable for IOS
    public static void clickHamburgerButton() throws IOException, Exception {
        // Clicks Hamburger btn 
        if (SgConfiguration.getInstance().isAndroid()) {
            AppSpecificFunctions.clickAppElement("frmDashboardAggregated_imgBack");
        }
        else{
            AppSpecificFunctions.clickAppElement("frmDashboardAggregated_imgMore");
        }
    }
    
    public static frmLogin signOut() throws Exception
    {
        //Signout from AccountLanding form
        if(SgConfiguration.getInstance().isAndroid())
        {
               AppSpecificFunctions.clickHamburgerButton();
               if(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_imgLogout")));
               {
                   AppSpecificFunctions.clickAppElement("frmDashboardAggregated_imgLogout");
                   Thread.sleep(2000);
                   return new frmLogin();
               }
        }
        else if(SgConfiguration.getInstance().isIOS())
        {
            AppSpecificFunctions.clickHamburgerButton();
            AppSpecificFunctions.clickAppElement("frmDashboardAggregated_imgLogout");
            Thread.sleep(2000);
            return new frmLogin();
        }
        
        return null;
    }
    
//    public static FormAccountsLandingKA clickAccountOverview() throws IOException, Exception
//    {
//      //Navigates to Accounts Landing form
//      if(SgConfiguration.getInstance().isAndroid())
//      {
//         clickHamburgerButton();
//         Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//         menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerAccountOverview"));
//      }
//      else if(SgConfiguration.getInstance().isIOS())
//      {
//          AppSpecificFunctions.clickAppElement("FormMoreLandingKA_AccountOverview");
//      }
//      return new FormAccountsLandingKA();
//    }
//    public static FormDepositPayLandingKA clickDeposits() throws IOException, Exception
//    {
//          //Navigates to DepositPayLanding form
//          if(SgConfiguration.getInstance().isAndroid())
//          {
//              clickHamburgerButton();
//             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerDeposits"));
//          }
//          else if(SgConfiguration.getInstance().isIOS())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_Deposits");
//              }
//      return new FormDepositPayLandingKA();
//    }
    public static frmTransfers clickTransfers() throws IOException, Exception {
        // Select Transfer and pay from accounts landing page
        if (SgConfiguration.getInstance().isAndroid()) {
            //clicking hamburger image
            clickHamburgerButton();
            //clicking transfers 
             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segHamburger"),MobileBankingWidgetId.getWidgetId("segHamburgerMenu_lblHamburger"));
             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerTransfers"));
             Thread.sleep(1000);
           
      } else if (SgConfiguration.getInstance().isIOS()) {
          AppSpecificFunctions.clickAppElement("frmDashboardAggregated_imgTransfer");
          Thread.sleep(1000);
        }
        return new frmTransfers();
    }
//  
//    public static  FormUserSettingsKA clickSettings() throws IOException, Exception
//    {
//      //Select settings from AccountsLanding page
//      if(SgConfiguration.getInstance().isAndroid())
//      {
//         clickHamburgerButton();
//         Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//         menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerSettings"));
//      }
//      else if(SgConfiguration.getInstance().isIOS())
//      {
//          if(isPhone())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxMore");
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_settingsButtonIos");
//              }
//          else if(isTablet())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxSettings");  
//          }
//      }
//      return new FormUserSettingsKA();
//    }
//    public static FormMoreLandingKA clickResources() throws IOException, Exception
//    {
//          //Select resources from AccountLanding page 
//          if(SgConfiguration.getInstance().isAndroid())
//          {
//              clickHamburgerButton();
//             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerResources"));
//          }
//          else if(SgConfiguration.getInstance().isIOS())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxMore");
//          }
//      return new FormMoreLandingKA();
//    }
//    public static FormMyMessagesKA clickMessages() throws IOException, Exception
//    {
//          //Select messages from AccountLanding page 
//          if(SgConfiguration.getInstance().isAndroid())
//          {
//              clickHamburgerButton();
//             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerMessages"));
//          }
//          else if(SgConfiguration.getInstance().isIOS())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxMore");
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_Messages");
//              }
//      
//      return new FormMyMessagesKA();
//    }
//    public static FormLocatorKA clickLocateUs() throws IOException, Exception
//    {
//          //Select LocateUs from AccountLanding page
//          if(SgConfiguration.getInstance().isAndroid())
//          {
//              clickHamburgerButton();
//             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerLocateUs"));
//          }
//          else if(SgConfiguration.getInstance().isIOS())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxMore");
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_Locateus");
//              }
//      return new FormLocatorKA();
//    }
//    public static FormContactUs clickContactUs() throws Exception
//    {
//          //Select ContactUs from AccountLanding page
//          if(SgConfiguration.getInstance().isAndroid())
//          {
//              clickHamburgerButton();
//             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_hamburgerSegment"),MobileBankingWidgetId.getWidgetId("FormMoreLandingKA_segmentlabel"));
//             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerContactUs"));
//          }
//          else if(SgConfiguration.getInstance().isIOS())
//          {
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_FlxMore");
//              AppSpecificFunctions.clickAppElement("FormMoreLandingKA_Contactus");
//              }
//      return new FormContactUs();
//    }
//    public static void clickAlertWithSingleButton() throws Exception
//    {
//      if(SgConfiguration.getInstance().isIOS()){
//          AppElement btnok = new AppElement("OK");
//          btnok.click();
//      }else{
//          AppElement button = new AppElement("class",Button());
//          button.click();
//      }
//      
//    }
    public static boolean isAlertWithSingleButtonVisible() throws Exception
    {
        //Returns true if an alert is visible with one button
        Thread.sleep(2000);
        if(SgConfiguration.getInstance().isIOS()){
            if(AppElement.isElementVisible("name", "OK"))
                return true;
        }else if(SgConfiguration.getInstance().isAndroid()){
            if(AppElement.isElementVisible("id", "android:id/button3"))
                return true;
        }
        return false;
    }

   
    public static String[] getRandomMessageDetails()
    {
        //Returns random message details
        String[] messageDetails = new String[5];
        Random rn = new Random();
        messageDetails[0]=messageAccount[0];
        messageDetails[1]=messageCategory[0];
        messageDetails[2]=messageSubCategory[rn.nextInt(3)];
        messageDetails[3]=generateRandomString("Open","left")+" account subject";
        messageDetails[4]=generateRandomString("Creating","left")+" account description";
        return messageDetails;
    }

    public static String getRandomMessageSubject()
    {
        //Returns random message subject
        return generateRandomString("automation", "right");     
    }
    public static String getRandomMessageDescription()
    {
        //Returns random message subject
        return generateRandomString("description for automation", "right");     
    }
    public static String getRandomReplyingMessageDescription()
    {
        //Returns random message subject
        return generateRandomString("replying for automation", "right");        
    }
    public static String[] getRandomPersonalDetailsForResources()
    {
        //Returns random personal details
        String[] personalDetails = new String[5];
        personalDetails[0]=generateRandomString("name","right");
        personalDetails[1]=getRandomNumber(10);
        personalDetails[2]=generateRandomString("john@","right");
        personalDetails[3]=generateRandomString("address","right");
        personalDetails[4]=getRandomNumber(9);
        return personalDetails;
    }
   
    public static String[] getNewPayeeDetailsForResources()
    {
        //Returns random payee details
        String[] payeeDetails = new String[5];
        payeeDetails[0]=generateRandomString("name", "left");
        payeeDetails[1]=generateRandomString("Opname", "left");
        payeeDetails[2]=getRandomNumber(9);
        payeeDetails[3]=payeeDetails[2];
        payeeDetails[4]=getRandomNumber(6);
        return payeeDetails;
    }
   
    public static String[] getNewAddressDetailsForCheckOrder()
    {
        //Returns random address details for check order
        String[] addressDetails = new String[5];
        addressDetails[0]=generateRandomString("Name", "left");
        addressDetails[1]=generateRandomString("Postbox", "left");
        addressDetails[2]=generateRandomString("State", "left");
        addressDetails[3]=generateRandomString("Country", "left");
        addressDetails[4]=getRandomNumber(6);
        return addressDetails;
    }
 
    
    public static String[] getNewPayeeDetailsForPayAPerson()
    {
        //Returns random details for pay a person
        String[] payeeDetails = new String[4];
        payeeDetails[0]=generateRandomString("fName", "left");
        payeeDetails[1]=generateRandomString("lname", "left");
        payeeDetails[2]=getRandomNumber(10);
        payeeDetails[3]=generateRandomString("@gmail.com", "left");
        return payeeDetails;
    }
 

public static String[] getSegDetails(String[] segParameters,int index) throws IOException, Exception
  {
      //Returns the segment details
      //segParameters[0] being the segmentID and 
      //rest of the parameters being the row elements to which the data need to be retrieved 
      String[] details = new String[3];
      String segId = segParameters[0];
      String seglbl1 = segParameters[1];
      String seglbl2 = segParameters[2];
      String seglbl3 = segParameters[3];
    Segment lbl1Seg = new Segment(MobileBankingWidgetId.getWidgetId(segId),MobileBankingWidgetId.getWidgetId(seglbl1));
    Segment lbl2Seg = new Segment(MobileBankingWidgetId.getWidgetId(segId),MobileBankingWidgetId.getWidgetId(seglbl2));
    Segment lbl3Seg = new Segment(MobileBankingWidgetId.getWidgetId(segId),MobileBankingWidgetId.getWidgetId(seglbl3));
    details[0] = lbl1Seg.getElementWithIndex(index).getText();
    details[1] = lbl2Seg.getElementWithIndex(index).getText();
    details[2] = lbl3Seg.getElementWithIndex(index).getText();
    return details;
  }
    public static int  getValidIndexForSegment(String segId,String seglblId) throws IOException, Exception
    {
        //Returns a random valid index in a segment which is clickable
        Random rn = new Random();
        Segment segTrans = new Segment(MobileBankingWidgetId.getWidgetId(segId),MobileBankingWidgetId.getWidgetId(seglblId));
        int listSize = segTrans.getSegmentSizeVisibleOnScreen();
        if(listSize > 3){
            return rn.nextInt(3);
        }else{
            return rn.nextInt(listSize);
        }
    
    }
    public static boolean isNameVisibleInSegment(String segId,String name,int scrollCount) throws Exception
    {
        //Returns true if name is visible in the given segment
        int scroll = scrollCount;
        AppElement seg = new AppElement(MobileBankingWidgetId.getWidgetId(segId));
        boolean visible = false;
        while(visible==false && scroll > 0)
        {
            visible = AppElement.isElementVisible("name", name); 
            if(visible==true)
                break;
            seg.swipeUp();
            scroll--;
        }
        for(int i=scroll;i<scrollCount;i++)
            seg.swipeDown();
        return visible;
    }
    public static void selectFutureDate() throws Exception
    {
        String classname = null;
        String id = null;
        if(SgConfiguration.getInstance().isAndroid())
        {
            classname = "android.view.View";
            id = "android:id/day_picker_view_pager";
        }
        else if(SgConfiguration.getInstance().isIOS())
        {
            classname = "PickerWheel";
            id = "DatePicker";
        }
        int newDay =0;
        AppElement calDate = new AppElement(MobileBankingWidgetId.getWidgetId("FormNewPayPersonKA_calDateKA"));
        String curDate = calDate.getChildElementsByClassName(Textview()).get(0).getText();
        String[] curDateArr = curDate.split("/");
        int day = Integer.valueOf(curDateArr[0]);
        String month = curDateArr[1];
        if(SgConfiguration.getInstance().isAndroid())
        {
            AppElement imgCal = calDate.getChildElementsByClassName("android.widget.ImageView").get(0);
            imgCal.click();
            if(!month.equals("Feb"))
            {
                if(day >= 30)
                    newDay = 2;
                else
                    newDay = day+1;
            }
            else
            {
                if(day>=28)
                    newDay = 2;
                else
                    newDay = day+1;
            }
                AppElement datePicker = new AppElement("name",id);
                List<AppElement> datePickerEleList = datePicker.getChildElementsByClassName(classname);
                datePickerEleList.get(newDay-1).click();
                Alerts.acceptAlert();
        }
    }
    public static void backToApp() throws Exception
    {
        if(SgConfiguration.getInstance().isAndroid()){
            AppElement.setAppToForeground();
        }else if(SgConfiguration.getInstance().isIOS())
        {
//          driver.navigate().back;
//          new AppElement("Back to KonyMobileBanking").click();
        }
    }
    public static void enter(String text) throws Exception{
        //text is the string  that has to be typed from the keypad
        for(int i=0; i<text.length(); i++){
            char temp = text.charAt(i);
            enterno(temp);
        }
    }
    private static void enterno(char i) throws IOException, Exception {
        AppElement btnNumber;
        switch(i){
            case '0': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnZero"));
                break;
                
            case '1': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnOne"));
                break;
                
            case '2': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnTwo"));
                break;
                
            case '3': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnThree"));
                break;
                
            case '4': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnFour"));
                break;
        
            case '5': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnFive"));
                break;
        
            case '6': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnSix"));
                break;
            
            case '7': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnSeven"));
                break;
        
            case '8': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnEight"));
                break;
        
            case '9': btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnNine"));
                break;
            
            default : 
                btnNumber = new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_imgClear"));
        }
        
        btnNumber.click();
    }
   
    public static void clearNumber() throws Exception {
        //clearing 16 times
    	if (SgConfiguration.getInstance().isAndroid()) {
        for(int i=0; i<16; i++){
            AppElement btnClear= new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_imgClear"));
            btnClear.click();
        }
    	}
    	else
    	{
    		for(int i=0; i<16; i++){
                AppElement btnClear= new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_imgClearKeypad"));
                btnClear.click();
            }
    	}
    }
    
   

    public static frmCardLessHome clickCardLessCash() throws IOException, Exception {
        // Select Transfer and pay from accounts landing page
        //if (SgConfiguration.getInstance().isAndroid()) {
            //clicking hamburger image
            clickHamburgerButton();
            //clicking transfers 
             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segHamburger"),MobileBankingWidgetId.getWidgetId("segHamburgerMenu_lblHamburger"));
             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerCardlessCash"));
             Thread.sleep(5000);
//      } else if (SgConfiguration.getInstance().isIOS()) {
//          AppSpecificFunctions.clickAppElement("frmDashboardAggregated_Transfers");
        //}
        return new frmCardLessHome();
    }
    
    public static frmSettings clickSettings() throws IOException, Exception {
        
            //clicking hamburger image
            clickHamburgerButton();
             Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segHamburger"),MobileBankingWidgetId.getWidgetId("segHamburgerMenu_lblHamburger"));
             menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerSettings"));
        return new frmSettings();
    }

    public static frmMessages clickMessages() throws IOException, Exception {
//         if (SgConfiguration.getInstance().isAndroid()) {
                //clicking hamburger image
                clickHamburgerButton();
                //clicking Messages 
                 Segment menu = new Segment(MobileBankingWidgetId.getWidgetId("frmDashboardAggregated_segHamburger"),MobileBankingWidgetId.getWidgetId("segHamburgerMenu_lblHamburger"));
                 menu.clickSegRowElementbyLabel(MobileBankingNames.getWidgetName("hamburgerMessages"));
                 
//        } else if (SgConfiguration.getInstance().isIOS()) {
//          clickHamburgerButton();
//            AppSpecificFunctions.clickAppElement("frmDashboardAggregated_Transfers");
//            }
            return new frmMessages();
        
    }
    public static boolean isfullScreenAdLoading() throws Exception {
        if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxLoadingIndicator")))
            return true;
        return false;
    }

    public static boolean isfullScreenAdAvailable() throws Exception {
        if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxAd1"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxAd2"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxAd3"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxAd4"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxAd5"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_imgAd1"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_imgAd2"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_imgAd3"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_imgAd4"))||
                AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmFullScreenAds_imgAd5")))
            return true;
        return false;
    }

	public static void setAvailablebalance() throws IOException, Exception {
		frmCardLessWithdraw frmCardLessWithdraw =  new frmCardLessWithdraw();
		balance = frmCardLessWithdraw.lblBalanceValue();
		
	}
	public static int getAvailablebalance()
	{
		return balance;
	}

	public static  String removeCommas(String value) {
		value = value.substring(0,value.indexOf(','))+value.substring(value.indexOf(',')+1,value.length());
		if (value.contains(","))
			return removeCommas(value);
		else
			return value;
		
	}
	
   
   
}