firebase.initializeApp({
    apiKey: "AIzaSyAKzR5AiJVZ3Iz5tJrWsLeBVDZJl2SSqLE",
    authDomain: "coronaprototyp.firebaseapp.com",
    databaseURL: "https://coronaprototyp.firebaseio.com",
    projectId: "coronaprototyp",
    storageBucket: "coronaprototyp.appspot.com",
    messagingSenderId: "857488715212",
    appId: "1:857488715212:web:763e73804d890e4bf40169"
});

function signout() {
	firebase.auth().signOut();
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.id = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

$(function() {

    $(window).resize(function() {
        $('#table3').DataTable().columns.adjust().draw();
        $('#table3').DataTable().fixedHeader.adjust().draw();
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            firebase.auth().signOut();
            window.location.href = "login.html";
        } else {
            document.body.classList.remove("d-none");
            firebase.database().ref('requests').on('value', function(snapshot) {
				$('#table3').DataTable().columns.adjust().draw();
			});
        }
    });

});