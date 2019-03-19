package dbSetup;

import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
import java.sql.Statement; 
import java.util.logging.Level; 
import java.util.logging.Logger;

import test.MobileBanking.MobileBankingNames;
import test.common.SgConfiguration;

public class DbConnection {
	String dbURL;
	String dbUsername;
	String dbPassword;
	Connection dbCon = null; 
	Statement stmt = null; 
	SgConfiguration sgconfig = null; //SgConfiguration.getInstance();
	String username = null;//sgconfig.getKeyValue("username");
	String password = null; //sgconfig.getKeyValue("password");
	String id = null;
	String accountForTransactions = null;
	String EnrollUser =null;
	String defaultCardlessAccount=null;
	
	public DbConnection(String dbURL, String username, String password) throws Exception{
	 this.dbURL = dbURL;
	 this.dbUsername = username;
	 this.dbPassword = password;
	 this.accountForTransactions = MobileBankingNames.getWidgetName("accountForTransactions");
	 this.defaultCardlessAccount=MobileBankingNames.getWidgetName("CardlessDefaultAccount");

	 sgconfig = SgConfiguration.getInstance();
	 this.username = sgconfig.getKeyValue("username");
	 this.password = sgconfig.getKeyValue("password");
	 this.EnrollUser = MobileBankingNames.getWidgetName("FormEnrolluserLandingKA_username");
	 if(this.username.equals("autotest1"))
			id = "750";
	 else if(this.username.equals("autotest2")) 
		id = "751";
	 else if(this.username.equals("konyrbdev"))
		id = "1";
	}
	
	public void DBSetup() throws SQLException {
	int rs,rs2,rs3,rs4,rs5,rs6,rs7,rs8,rs9,rs10 ; 
	String query1 ="UPDATE card SET Card_Status='Active'"; 
	String query2 ="UPDATE pfmtransactions SET categoryId =9 where id BETWEEN 1 AND 15";
	String query3 = "UPDATE account SET AvailableBalance = 15000 WHERE  User_id = 1";
	String query4 = "UPDATE message SET Status='Deleted',IsRead=1,IsSoftDeleted=1 ORDER BY Status DESC LIMIT 10";
	String query5 = "update message set Status='Inbox' where Account_id IN (select id from account where user_id IN (select id from user where userName='"+username+"'))";
	String query6 = "update user set UserName = '"+username+"',Password='"+password+"' where id = "+id+" ";
	String query7 = "update user set pin=NULL, isPinSet=NULL where username='"+username+"'";
	String query8 = "update account set AvailableBalance=2000 where User_id in (select id from user where UserName = '"+username+"') and Name ='"+accountForTransactions+"'";
	String query9 = "update user set userName=NULL where userName='"+EnrollUser+"'";
	String query10 = "update account set AvailableBalance=54800 where User_id in (select id from user where UserName = '"+username+"') and Name ='"+defaultCardlessAccount+"'";
	
	try { 
		dbCon = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
		stmt = dbCon.prepareStatement(query1);  
		rs = stmt.executeUpdate(query1); 
		rs2 = stmt.executeUpdate(query2); 
		rs3 = stmt.executeUpdate(query3);
		rs5 = stmt.executeUpdate(query5);
		rs4 = stmt.executeUpdate(query4);
		rs6 = stmt.executeUpdate(query6);
		rs7 = stmt.executeUpdate(query7);
		rs8 = stmt.executeUpdate(query8);
		rs9 = stmt.executeUpdate(query9);
		rs10= stmt.executeUpdate(query10);
		System.out.println("updated status: "+rs+" : "+rs2+" : "+rs3+"  :  "+rs4+"  :  "+rs5+"  :  "+rs6+"  :  "+rs7+"  :  "+rs8+"  :  "+rs9+"  :  "+rs10+"  :  ");
		} catch (SQLException ex) {
			Logger.getLogger(DbConnection.class.getName()).log(Level.SEVERE, null, ex);
		} finally{
			dbCon.close();
		}
	} 
	
	public boolean deactivateCard() {
		try {
			String query ="UPDATE card SET Card_Status='Inactive' where id=1";
			int rs = executeQuery(query);
			System.out.println("updated card status to deactivated: "+rs);
			return true;
			} catch (SQLException ex) {
				Logger.getLogger(DbConnection.class.getName()).log(Level.SEVERE, null, ex);
			    return false;
			}
	}
	public boolean setDefaultsForUsernameAndPassword() {		
		try{
			String query = "update user set UserName = '"+username+"',Password='"+password+"' where id = "+id+" ";
			int rs = executeQuery(query);
			System.out.println("updated status: "+rs);
			return true;
		}
		catch (SQLException e){
			Logger.getLogger(DbConnection.class.getName()).log(Level.SEVERE, null, e);
		    return false;    
		} 
	}
	public boolean resetUsername()  
	{
		try{
			String query = "update user set UserName = '"+username+"' where id = "+id+" ";
		    int rs = executeQuery(query);
		    System.out.println("Username Reset Successfull: "+rs);	
		   	return true;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	public boolean resetPassword() 
	{
		try{
			String query = "update user set Password='"+password+"' where id = "+id+" "; 
		    int rs = executeQuery(query);
		    System.out.println("Password Reset Successfull: "+rs);
		    return true;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
	}
	public boolean createScheduledTransactionForPayeeWithNickName(String nickName)
	{
		try {
		    String query = "update transaction set isScheduled=1 where Payee_id = (select id from payee where NickName="+nickName+")";
		    int rs = executeQuery(query);
		    System.out.println("Scheduled Transaction creation Successfull:"+rs);
			return true;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
	}
	private int executeQuery(String query) throws SQLException
	{
		dbCon = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
	    stmt = dbCon.prepareStatement(query); 
	    int rs = stmt.executeUpdate(query);
	    dbCon.close();
	    return rs;
	}
}
