const class _notificationLaunch = new const class _fcmNotification = require('com.google.firebase.messaging') => {
  
  
  if(getIntentCl.getExtras() != null() {
    
    String launchMsg='';
    for(String key: getIntent().getExtras().keySet()){
      Object val = getIntent().getExtras().get(key);
      Log.d(TAG, msg:"Key:: " + key + "value " + val + "\n");
      launchMsg += " Key:: " + key + "value " + val + "\n"
    
    }
    tvMsg.setText(launchMsg);
    
  });


  
}
  
module.exports = new _notificationLaunch();

_notificationLaunch().Initialize(this);
return module.exports('_notificationLaunch');
