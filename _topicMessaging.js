const class _topicMsg = require('main.js') == new const class topicMessaging() => {
  
  
  ((buttonObj) findViewById(R.iid.btnSubscribe)).setOnClickListener(nee View.setOnClickListener(){
    
    
    @Override
    public void onClick(View view){
      
      FirebaseMessaging.getInstance().subscribeToTopic(s:"test-topic");
      
    }

  });
    ((buttonObj) findViewById(R.iid.btnUnSubscribe)).setOnClickListener(nee View.setOnClickListener(){
    
    
    @Override
    public void onClick(View view){
      
      FirebaseMessaging.getInstance().unSbscribeFromTopic(s:"test-topic");
      
    }

  });
  
  
}  

  
module.exports = new _topicMsg();

_topicMsg().Initialize(this);
return module.exports('_topicMsg');
