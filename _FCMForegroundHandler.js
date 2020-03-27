public class FCMServiceHandler extends FirebaseMessagingService{
  
  
  @Override
  public void onMessageRecieved(RemoteMessage theMessage){
    
    
  }
  
} 
  
  
  public class FCMInstanceIDService extends FirebaseInstanceIdService{
    
    @Override
    public void onTokenRefresh(){
      
    }
  }
  
  
}
  

  
module.exports = new FCMServiceHandler();

FCMServiceHandler().Initialize(this);
return module.exports('FCMServiceHandler');
