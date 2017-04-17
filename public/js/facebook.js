function init(FB) {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
		// Logged into your app and Facebook.
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response.authResponse.accessToken));
	  } else if (response.status === 'not_authorized') {
      //setFacebookStatus("Please authorize this application");
      console.log("not Authorized");
    }
    else {
		// Not logged into Facebook
      FB.login(function(response) {
        console.log("Logged IN: " + JSON.stringify(response));
      }, {scope: 'public_profile,email,publish_actions'});
	  }
  }
}
