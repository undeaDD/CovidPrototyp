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

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true,
    });
});

window.addEventListener('message', function(message) {
	if( message.data.type == "modal.close"){
		$('#addModal').modal('hide');
	}
});

function indexToFirebaseNames1(column) {
	switch (parseInt(column)) {
		case 2:
			return "lastname"
		case 3:
			return "firstname"
		case 4:
			return "street"
		case 5:
			return "zip"
		case 6:
			return "address"
		case 7:
			return "birthdate"
		case 8:
			return "telephone"
		case 9:
			return "mobile"
		case 10:
			return "fax"
		case 11:
			return "email"
		case 12:
			return "emailcopy"
		case 13:
			return "personalid"
		case 13:
			return "insertDate"
		default:
			alert("fatal Error");
	}
}

function indexToFirebaseNames2(column) {
	switch (parseInt(column)) {
		case 3:
			return "lname"
		case 4:
			return "fname"
		case 5:
			return "street"
		case 6:
			return "zip"
		case 7:
			return "address"
		case 8:
			return "birthday"
		case 9:
			return "telephone"
		case 10:
			return "mobile"
		case 11:
			return "fax"
		case 12:
			return "email"
		case 13:
			return "emailcopy"
		case 14:
			return "personalid"
		case 15:
			return "insertDate"
		case 16:
			return "collectionDate"
		case 17:
			return "testDate"
		default:
			alert("fatal Error");
	}
}

function updateEntry1() {
	const key = $("#edit1FieldHiddenKey").val();
	const id = $("#edit1FieldHiddenId").val().split(".")[1];
	const index = indexToFirebaseNames1($("#edit1FieldHiddenIndex").val());
	firebase.database().ref("requests/" + key + "/" + "p" + id + "_" + index).set($("#edit1Field").val());
}

function updateEntry2() {
	const key = $("#edit2FieldHiddenId").val();
	const index = indexToFirebaseNames2($("#edit2FieldHiddenIndex").val());
	firebase.database().ref("patients/" + key + "/" + index).set($("#edit2Field").val());
}

function approveEntry(row) {
	firebase.database().ref('patients').once('value').then((snapshot) => {
		var highest = 0;
		snapshot.forEach(function(childSnapshot) {
			const temp = parseInt(childSnapshot.key.replace("C", ""));
			if (highest == 0) { highest = temp; }
			highest = highest < temp ? temp : highest;
		});

		firebase.database().ref('requests/' + row).once('value').then((snapshot) => {
			const date2 = (new Date()).toLocaleDateString();
			var elem = snapshot.val();
        	elem.id = snapshot.key;

			var temp = new Object();
			switch (elem.morepatients) {
				case "4":
					temp["C" + (highest + 5)] = {
						poolid: "C" + (highest + 1),
						lname: elem.p5_lastname,
						fname: elem.p5_firstname,
						street: elem.p5_street,
						plz: elem.p5_zip,
						city: elem.p5_address,
						birthday: elem.p5_birthdate,
						tel: elem.p5_telephone,
						mobile: elem.p5_mobile,
						fax: elem.p5_fax,
						email: elem.p5_email,
						emailCopy: elem.p5_emailcopy,
						personalid: elem.p5_personalid,
						date1: elem.insertDate,
						date2: date2,
						front: elem.p5_front,
						back: elem.p5_back
					};
				case "3":
					temp["C" + (highest + 4)] = {
						poolid: "C" + (highest + 1),
						lname: elem.p4_lastname,
						fname: elem.p4_firstname,
						street: elem.p4_street,
						plz: elem.p4_zip,
						city: elem.p4_address,
						birthday: elem.p4_birthdate,
						tel: elem.p4_telephone,
						mobile: elem.p4_mobile,
						fax: elem.p4_fax,
						email: elem.p4_email,
						emailCopy: elem.p4_emailcopy,
						personalid: elem.p4_personalid,
						date1: elem.insertDate,
						date2: date2,
						front: elem.p4_front,
						back: elem.p4_back
					};
				case "2":
					temp["C" + (highest + 3)] = {
						poolid: "C" + (highest + 1),
						lname: elem.p3_lastname,
						fname: elem.p3_firstname,
						street: elem.p3_street,
						plz: elem.p3_zip,
						city: elem.p3_address,
						birthday: elem.p3_birthdate,
						tel: elem.p3_telephone,
						mobile: elem.p3_mobile,
						fax: elem.p3_fax,
						email: elem.p3_email,
						emailCopy: elem.p3_emailcopy,
						personalid: elem.p3_personalid,
						date1: elem.insertDate,
						front: elem.p3_front,
						back: elem.p3_back
					};
				case "1":
					temp["C" + (highest + 2)] = {
						poolid: "C" + (highest + 1),
						lname: elem.p2_lastname,
						fname: elem.p2_firstname,
						street: elem.p2_street,
						plz: elem.p2_zip,
						city: elem.p2_address,
						birthday: elem.p2_birthdate,
						tel: elem.p2_telephone,
						mobile: elem.p2_mobile,
						fax: elem.p2_fax,
						email: elem.p2_email,
						emailCopy: elem.p2_emailcopy,
						personalid: elem.p2_personalid,
						date1: elem.insertDate,
						date2: date2,
						front: elem.p2_front,
						back: elem.p2_back
					};
				default:
					temp["C" + (highest + 1)] = {
						poolid: "C" + (highest + 1),
						lname: elem.p1_lastname,
						fname: elem.p1_firstname,
						street: elem.p1_street,
						plz: elem.p1_zip,
						city: elem.p1_address,
						birthday: elem.p1_birthdate,
						tel: elem.p1_telephone,
						mobile: elem.p1_mobile,
						fax: elem.p1_fax,
						email: elem.p1_email,
						emailCopy: elem.p1_emailcopy,
						personalid: elem.p1_personalid,
						date1: elem.insertDate,
						date2: date2,
						front: elem.p1_front,
						back: elem.p1_back,
						signature: elem.signature
					};
			}
			temp = JSON.parse(JSON.stringify(temp));
			firebase.database().ref("patients/").update(temp);
			firebase.database().ref("requests/" + row).remove();
		});
	});
}

function removeEntry(row) {
	if (confirm('Soll der Eintrag wirklich gelöscht werden?')) {
		firebase.database().ref(row).remove();
	}
}

$(function() {

    $(window).resize(function() {
        $('#table1').DataTable().columns.adjust().draw();
        $('#table1').DataTable().fixedHeader.adjust().draw();
        $('#table2').DataTable().columns.adjust().draw();
        $('#table2').DataTable().fixedHeader.adjust().draw();
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            firebase.auth().signOut();
            window.location.href = "login.html";
        } else {
            document.body.classList.remove("d-none");

            firebase.database().ref('requests').on('value', function(snapshot) {
                var array = snapshotToArray(snapshot);
                var result = [];
                var count = 1;
                for (const elem of array) {
					var temp = []
                    switch (elem.morepatients) {
                        case "4":
                            temp.push({
								key: elem.id,
                                id: count + ".5",
                                lname: elem.p5_lastname,
                                fname: elem.p5_firstname,
                                street: elem.p5_street,
                                plz: elem.p5_zip,
                                city: elem.p5_address,
                                birthday: elem.p5_birthdate,
                                tel: elem.p5_telephone,
                                mobile: elem.p5_mobile,
                                fax: elem.p5_fax,
                                email: elem.p5_email,
								emailCopy: elem.p5_emailcopy,
								personalid: elem.p5_personalid,
                                date1: elem.insertDate,
                                front: elem.p5_front,
                                back: elem.p5_back
                            });
                        case "3":
                            temp.push({
								key: elem.id,
                                id: count + ".4",
                                lname: elem.p4_lastname,
                                fname: elem.p4_firstname,
                                street: elem.p4_street,
                                plz: elem.p4_zip,
                                city: elem.p4_address,
                                birthday: elem.p4_birthdate,
                                tel: elem.p4_telephone,
                                mobile: elem.p4_mobile,
                                fax: elem.p4_fax,
                                email: elem.p4_email,
								emailCopy: elem.p4_emailcopy,
								personalid: elem.p4_personalid,
                                date1: elem.insertDate,
                                front: elem.p4_front,
                                back: elem.p4_back
                            });
                        case "2":
                            temp.push({
								key: elem.id,
                                id: count + ".3",
                                lname: elem.p3_lastname,
                                fname: elem.p3_firstname,
                                street: elem.p3_street,
                                plz: elem.p3_zip,
                                city: elem.p3_address,
                                birthday: elem.p3_birthdate,
                                tel: elem.p3_telephone,
                                mobile: elem.p3_mobile,
                                fax: elem.p3_fax,
                                email: elem.p3_email,
								emailCopy: elem.p3_emailcopy,
								personalid: elem.p3_personalid,
                                date1: elem.insertDate,
                                front: elem.p3_front,
                                back: elem.p3_back
                            });
                        case "1":
                            temp.push({
								key: elem.id,
                                id: count + ".2",
                                lname: elem.p2_lastname,
                                fname: elem.p2_firstname,
                                street: elem.p2_street,
                                plz: elem.p2_zip,
                                city: elem.p2_address,
                                birthday: elem.p2_birthdate,
                                tel: elem.p2_telephone,
                                mobile: elem.p2_mobile,
                                fax: elem.p2_fax,
                                email: elem.p2_email,
								emailCopy: elem.p2_emailcopy,
								personalid: elem.p2_personalid,
                                date1: elem.insertDate,
                                front: elem.p2_front,
                                back: elem.p2_back
                            });
                        default:
                            temp.push({
								key: elem.id,
                                id: count + ".1",
                                lname: elem.p1_lastname,
                                fname: elem.p1_firstname,
                                street: elem.p1_street,
                                plz: elem.p1_zip,
                                city: elem.p1_address,
                                birthday: elem.p1_birthdate,
                                tel: elem.p1_telephone,
                                mobile: elem.p1_mobile,
                                fax: elem.p1_fax,
                                email: elem.p1_email,
								emailCopy: elem.p1_emailcopy,
								personalid: elem.p1_personalid,
                                date1: elem.insertDate,
                                front: elem.p1_front,
                                back: elem.p1_back,
                                signature: elem.signature
                            });
                    }
                    result.push(...temp.reverse());
                    count += 1;
                }

                var table1 = $('#table1').DataTable({
                    "dom": "<'row'<'col-6 'B><'col-6'f>>" +
                        "<'row'<'col-sm-12'tr>>",
                    "blurable": false,
                    "destroy": true,
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "keys": {
						"columns": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
					},
                    "searching": true,
                    "fixedHeader": true,
                    "scrollX": true,
                    "autoWidth": false,
                    "language": {
                        "search": "",
                        "searchPlaceholder": "Nach Eintrag suchen",
                        "emptyTable": "Keine Einträge vorhanden",
                    },
                    "buttons": [{
                        text: "<img height='21' class='mr-2' style='margin-top: -4px;' src='../assets/img/file-plus.png'/>Neuer Eintrag",
                        action: function(e, dt, node, config) {
							$("#addIFrame").prop('src', "../index.html");
						    $('#addModal').modal({
								show: true
							});
                        },
                        className: 'customButton mr-2'
                    }],
                    "createdRow": function(row, data, dataIndex) {
                        if (data.id.endsWith(".1")) {
                            $(row).addClass('striped');
                        }
					},
					"order": [[1, 'asc']],
                    "columns": [
					{
						"data": "actions",
						"defaultContent": "",
						"orderable": false,
						"searchable": false,
                        "render": function(data, type, row, meta) {
							if (row.id.endsWith(".1")) {
								return "<a onclick='approveEntry(\"" + row.key + "\")'><img height='21' class='mr-3' src='../assets/img/check-circle.png'/></a>" +
								"<a onclick='removeEntry(\"requests/" + row.key + "\")'><img height='21' src='../assets/img/trash.png'/></a>";
							}
							return "";
                        },
					}, {
                        "data": "id",
                        "className": "bold",
                        "orderable": true,
						"searchable": false,
					}, {
                        "data": "lname",
                        "orderable": false
                    }, {
                        "data": "fname",
                        "orderable": false
                    }, {
                        "data": "street",
                        "orderable": false
                    }, {
                        "data": "plz",
                        "orderable": false
                    }, {
                        "data": "city",
                        "orderable": false
                    }, {
                        "data": "birthday",
                        "orderable": false
                    }, {
                        "data": "tel",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "mobile",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "fax",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "email",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined') && data !== "-") {
                                return '<a href="mailto:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "emailCopy",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined') && data !== "-") {
                                return '<a href="mailto:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "personalid",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "date1",
                        "defaultContent": "-",
                        "orderable": true
                    }, {
                        "data": "files",
                        "defaultContent": "-",
						"searchable": false,
                        "render": function(data, type, row, meta) {
                            var temp = "";
                            if (row.signature) {
                                temp += '<a href="' + row.signature + '" data-title="Signatur:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/signature.png"/></a>';
                            }

                            if (row.front) {
                                temp += '<a href="' + row.front + '" data-title="Vorderseite:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/id-card.png"/></a>';
                            }

                            if (row.back) {
                                temp += '<a href="' + row.back + '" data-title="Rückseite:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/id-card.png"/></a>';
                            }

                            return temp
                        },
                        "orderable": false
                    }],
                    "data": result,
                });

                table1.columns.adjust().draw();
				table1.fixedHeader.adjust().draw();
				$("#count1").text(table1.data().count());

				$('#edit1Modal').on('shown.bs.modal', function () {
					$('#edit1Field').focus();
				})

				$('#table1').DataTable().on('dblclick', 'td', function() {
					var row = $('#table1').DataTable().row(this);
					var cell = $('#table1').DataTable().cell(this);
					const blacklist = [0, 1, 14];
					if (!blacklist.includes(cell.index().column)) {
						$("#edit1FieldHiddenKey").val(row.data().key);
						$("#edit1FieldHiddenId").val(row.data().id);
						$("#edit1FieldHiddenIndex").val(cell.index().column);
						$("#edit1Field").val(cell.data());
						$('#edit1Modal').modal({
							keyboard: false,
							show: true
						});
					}
				});
            });

            firebase.database().ref('patients').on('value', function(snapshot) {
                var array = snapshotToArray(snapshot);
                var table2 = $('#table2').DataTable({
                    "dom": "<'row'<'col-6 'B><'col-6'f>>" +
                        "<'row'<'col-sm-12'tr>>",
                    "blurable": false,
                    "destroy": true,
                    "paging": false,
                    "ordering": true,
                    "info": false,
					"keys": {
						"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
					},
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
                    "buttons": [{
						extend: 'csvHtml5',
						charset: 'UTF-8',
						fieldSeparator: ';',
						bom: true,
                        text: "<img height='21' class='mr-2' style='margin-top: -4px;' src='../assets/img/file-export.png'/>Daten Exportieren",
                        className: 'customButton mr-2'
					},
					{
                        text: "<img height='21' class='mr-2' style='margin-top: -4px;' src='../assets/img/file-import.png'/>Daten Importieren (Experimentell)",
						className: 'customButton mr-2',
						action: function ( e, dt, node, config ) {
							$('#fileupload').click();
						}
                    }],
                    "columns": [
					{
						"data": "actions",
						"defaultContent": "",
						"orderable": false,
						"searchable": false,
						"render": function(data, type, row, meta) {
							return "" +
							"<a onclick='removeEntry(\"patients/" + row.id + "\")'><img height='21' src='../assets/img/trash.png'/></a>";
						},
					}, {
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
                    }, {
                        "data": "street",
                        "orderable": false
                    }, {
                        "data": "plz",
                        "orderable": false
                    }, {
                        "data": "city",
                        "orderable": false
                    }, {
                        "data": "birthday",
                        "orderable": false
                    }, {
                        "data": "tel",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "mobile",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "fax",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "email",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined') && data !== "-") {
                                return '<a href="mailto:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "emailCopy",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined') && data !== "-") {
                                return '<a href="mailto:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "idnumber",
                        "defaultContent": "-",
                        "orderable": false
                    }, {
                        "data": "date1",
                        "defaultContent": "-",
                        "orderable": true
                    }, {
                        "data": "date2",
                        "defaultContent": "-",
                        "orderable": true
                    }, {
                        "data": "date3",
                        "defaultContent": "-",
                        "orderable": true
                    }, {
                        "data": "files",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            var temp = "";
                            if (row.signature) {
                                temp += '<a href="' + row.signature + '" data-title="Signatur:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/signature.png"/></a>';
                            }

                            if (row.front) {
                                temp += '<a href="' + row.front + '" data-title="Vorderseite:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/id-card.png"/></a>';
                            }

                            if (row.back) {
                                temp += '<a href="' + row.back + '" data-title="Rückseite:" data-toggle="lightbox" class="mx-1"><img height="21" src="../assets/img/id-card.png"/></a>';
                            }

                            return temp
                        },
                        "orderable": false
                    }],
                    "data": array,
                });

                table2.columns.adjust().draw();
				table2.fixedHeader.adjust().draw();
				$("#count2").text(table2.data().count());

				$('#edit2Modal').on('shown.bs.modal', function () {
					$('#edit2Field').focus();
				})

				$('#table2').DataTable().on('dblclick', 'td', function() {
					var row = $('#table2').DataTable().row(this);
					var cell = $('#table2').DataTable().cell(this);
					const blacklist = [0, 1, 2, 18];
					if (!blacklist.includes(cell.index().column)) {
						$("#edit2FieldHiddenId").val(row.data().id);
						$("#edit2FieldHiddenIndex").val(cell.index().column);
						$("#edit2Field").val(cell.data());
						$('#edit2Modal').modal({
							keyboard: false,
							show: true
						});
					}
				});
            });

        }
    });

});