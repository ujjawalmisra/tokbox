tokbox
======

Tokbox sample video chat app for p2p and non-p2p modes.

### Setup
1. Clone this repository.
2. Host it on a webserver like [Apache](http://httpd.apache.org/) or [NGINX](http://nginx.org/en/).
2. Signup for [TokBox](http://tokbox.com/). If already signed-up then Signin there. You'll be taken to the dashboard.
2. Goto the Projects section and note the *API Key* (to be used as *apiKey*).
3. Goto the Details page of your Project. Create a Session and note the *Session ID* (to be used as *sessionId*).
4. Now generate a Token and note the *Token* (to be used as *token*).
5. Based on whether you chose P2P Enabled or P2P Disabled config for creating a Session, update the js/p2p-config.js or js/non-p2p-config.js file respectively.
6. Now launch the corresponding (html/p2p.html or html/non-p2p.html) page in your browser and ask your peer (friend, colleague) etc. to launch (from your server) as well.
7. Enjoy!

*Note:* You may want to host the Session and Token creation steps in your server side application and pass-on the parameters (apiKey, sessionId, token) to the clients.
