var VTokBox = {};
(function(){

	this.initSession = function(apiKey, sessionId, token) {
		// Initialize session, set up event listeners, and connect
		var session = OT.initSession(apiKey, sessionId);

		session.on("streamCreated", function (event) {
			if(event && event.stream) {
				console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
				console.log("New stream in the session: " + event.stream.streamId);
				var subscriberOptions = {width: 400, height:300, name:"Subscriber"};
				session.subscribe(event.stream, 'mySubscriber', subscriberOptions);
				console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
			}
		});

		session.connect(token, function(error){
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
			console.log("Going to publish in the session");
			var publisherOptions = {width: 400, height:300, name:"Publisher"};
			var publisher = OT.initPublisher('myPublisher', publisherOptions);
			session.publish(publisher);
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		});

		return session;
	};

}).apply(VTokBox);