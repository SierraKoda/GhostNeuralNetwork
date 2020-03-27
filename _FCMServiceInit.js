package ghostnativ.firebaseapp.com;
package com.omnipuppy.ghostnativ;

import com.google.firebase.iid.FirebaseInstanceIDService;

public class FCMInstanceIDService extends FirebaseInstancrIdService{
  
  
  private static final String TAG = "FCMInstanceIDService";
  
  @Override
  public void onTokenRefresh(){
    
    String newToken = FirebaseInstanceId.getInstance().getToken();
    Log.d(TAG, msg:"Refreshed Token:: " + newToken );
    
  }
  
  
  
}
  

  
module.exports = new 
FCMInstanceIDService();

FCMInstanceIDService().Initialize(this);
return module.exports('FCMInstanceIDService');
