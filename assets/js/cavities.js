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

function createEntry() {
	firebase.database().ref('cavities').once('value').then((snapshot) => {
		var highest = 0;
		snapshot.forEach(function(childSnapshot) {
			const temp = parseInt(childSnapshot.key);
			console.log(temp)
			highest = highest < temp ? temp : highest;
		});
		console.log(highest)
		firebase.database().ref("cavities/" + (highest + 1)).set({
			status: "In Bearbeitung",
			date4: (new Date()).toLocaleDateString(),
			count: 0
		});
	});
}

function viewMatrix() {

	$('select.bsselect').each(function( index ) {
		$(this).empty();
		$(this).append("<optgroup label='Extras'><option title='⠀'>-</option><option>NK</option><option>PK</option></optgroup>");
		var patients = $("<optgroup label='Patienten'>");
		$(this).append(patients);
		patients.append("<option title='C1234'>C1234 - Wiencek Isabeau</option>");

		if ($(this).parent().hasClass("dropdown")) {
			$(this).selectpicker('refresh');
		} else {
			$(this).selectpicker({
				maxOptions: false,
				noneSelectedText : '⠀',
				liveSearch: true,
				liveSearchNormalize: true,
				liveSearchPlaceholder: "Suchen...",
				width: "100%",
			});
		}
	});

	$('#matrixModal').modal({
		keyboard: false,
		show: true
	});
}

function testMatrix() {
	$('select.bsselect').each(function( index ) {
		$(this).empty();
		$(this).append("<option title='-'>Negativ</option><option title='+'>Positiv</option>");

		if ($(this).parent().hasClass("dropdown")) {
			$(this).selectpicker('refresh');
		} else {
			$(this).selectpicker({
				header: "Ergebnis:",
				maxOptions: false,
				noneSelectedText : '⠀',
				liveSearch: false,
				width: "100%",
			});
		}
	});

	$('#matrixModal').modal({
		keyboard: false,
		show: true
	});
}

function removeEntry(row) {
	if (confirm('Soll der Eintrag wirklich gelöscht werden?')) {
		firebase.database().ref(row).remove();
	}
}

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
					"keys": false,
                    "searching": true,
                    "fixedHeader": true,
                    "scrollX": true,
					"autoWidth": false,
					"order": [[1, 'desc']],
                    "language": {
                        "search": "",
                        "searchPlaceholder": "Nach Plan suchen",
                        "emptyTable": "Keine Kavitätenpläne vorhanden",
                    },
                    "buttons": [{
                        text: "<img height='21' class='mr-2' style='margin-top: -4px;' src='../assets/img/file-plus.png'/>Neuer Kavitätenplan",
                        action: function(e, dt, node, config) {
							createEntry()
                        },
                        className: 'customButton mr-2'
					}],
					"columnDefs": [
						{ "width": "110px", "targets": 0 },
					],
                    "columns": [
					{
						"data": "actions",
						"defaultContent": "",
						"orderable": false,
						"searchable": false,
						"render": function(data, type, row, meta) {
							return "<a onclick='viewMatrix(\"cavities/" + row.id + "\")'><img class='mr-2' height='21' src='../assets/img/pencil.png'/></a>" +
							"<a onclick='removeEntry(\"cavities/" + row.id + "\")'><img class='mr-2' height='21' src='../assets/img/trash.png'/></a>" +
							"<a onclick='testMatrix(\"cavities/" + row.id + "\")'><img class='mr-2' height='21' src='../assets/img/vial.png'/></a>" +
							"<a><img height='21' src='../assets/img/print.png'/></a>";
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

			firebase.database().ref('patients').on('value', function(snapshot) {
				var array = snapshotToArray(snapshot);
				var table4 = $('#table4').DataTable({
					"dom": "<'row'<'col-6 'B><'col-6'f>>" +
						"<'row'<'col-sm-12'tr>>",
					"blurable": false,
					"destroy": true,
					"paging": false,
					"ordering": true,
					"info": false,
					"keys": false,
					"searching": true,
					"fixedHeader": true,
					"scrollX": true,
					"autoWidth": false,
					"order": [[1, 'desc']],
					"language": {
						"search": "",
						"searchPlaceholder": "Nach Eintrag suchen",
						"emptyTable": "Keine Einträge vorhanden",
					},
					"buttons": [],
					"columns": [
					{
						"data": "id",
						"className": "bold",
						"orderable": true
					}, {
						"data": "poolid",
						"defaultContent": "-",
						"orderable": false,
						"searchable": true,
					}, {
						"data": "lname",
						"orderable": false
					}, {
						"data": "fname",
						"orderable": false
					}],
					"data": array,
				});

				table4.columns.adjust().draw();
				table4.fixedHeader.adjust().draw();
			});
        }
    });

});