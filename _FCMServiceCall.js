package ghostnativ.firebaseapp.com;
package com.omnipuppy.ghostnativ;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessaging;

public class FCMServiceCall extends FirebaseMessagingService {
  
  private static final String TAG="FCMServiceCall";
  
  @Override 
  public void onMessageReceived(RemoteMessage theMessage)
  {
    Log.d(TAG, msg:" Message Received from:: " + the message.getFrom());
    if(the message.getData().size() > 0)
    {
      Log.d(TAG, msg:" Message Size:: " + the message.getData().size());
      
      for(String Reg : the message.getData().keySet()){
        
        Log.d(TAG, msg:" Key:: " + key + "; data" + the message.getData().get(key));
        
        
      }
    }
    
  }
  @Override
  public void onDeleteMessage(){
    
    
    
  }
  
  
}
  
module.exports = new FCMServiceCall();

FCMServiceCall().Initialize(this);
return module.exports('FCMServiceCall');

