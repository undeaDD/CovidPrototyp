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
            firebase.database().ref('cavities').on('value', function(snapshot) {
				var array = snapshotToArray(snapshot);
                var table3 = $('#table3').DataTable({
                    "dom": "<'row'<'col-6 'B><'col-6'f>>" +
                        "<'row'<'col-sm-12'tr>>",
                    "blurable": false,
                    "destroy": true,
                    "paging": false,
                    "ordering": true,
                    "info": false,
					"keys": {
						"columns": [1, 2]
					},
                    "searching": true,
                    "fixedHeader": true,
                    "scrollX": true,
					"autoWidth": false,
					"order": [[0, 'desc']],
                    "language": {
                        "search": "",
                        "searchPlaceholder": "Nach Plan suchen",
                        "emptyTable": "Keine Kavitätenpläne vorhanden",
                    },
                    "buttons": [{
                        text: "<img height='21' class='mr-2' style='margin-top: -4px;' src='../assets/img/file-plus.png'/>Neuer Kavitätenplan",
                        action: function(e, dt, node, config) {

                        },
                        className: 'customButton mr-2'
                    }],
                    "columns": [
					{
						"data": "actions",
						"defaultContent": "",
						"orderable": false,
						"searchable": false,
						"render": function(data, type, row, meta) {
							return "" +
							"<a onclick='removeEntry(\"cavities/" + row.id + "\")'><img height='21' src='../assets/img/trash.png'/></a>";
						},
					}, {
                        "data": "id",
                        "className": "bold",
						"orderable": true,
						"searchable": true,
					}, {
						"data": "status",
						"defaultContent": "In Bearbeitung",
                        "orderable": true,
						"searchable": true,
                    }, {
                        "data": "date4",
                        "defaultContent": "-",
						"orderable": true,
						"searchable": true,
                    }, {
                        "data": "count",
                        "defaultContent": "0",
						"orderable": true,
						"searchable": true,
                    }],
                    "data": array,
                });

				table3.columns.adjust().draw();
				table3.fixedHeader.adjust().draw();
				$("#count3").text(table3.data().count());
			});
        }
    });

});