firebase.initializeApp({
	apiKey:"AIzaSyAKzR5AiJVZ3Iz5tJrWsLeBVDZJl2SSqLE",
	authDomain:"coronaprototyp.firebaseapp.com",
	databaseURL:"https://coronaprototyp.firebaseio.com",
	projectId:"coronaprototyp",
	storageBucket:"coronaprototyp.appspot.com",
	messagingSenderId:"857488715212",
	appId:"1:857488715212:web:763e73804d890e4bf40169"
});

firebase.auth().onAuthStateChanged(function(user) {
	if (!user) {
		firebase.auth().signOut();
		window.location.href = "einsendeschein.html";
	}
});