firebase.initializeApp({
    apiKey: "AIzaSyAKzR5AiJVZ3Iz5tJrWsLeBVDZJl2SSqLE",
    authDomain: "coronaprototyp.firebaseapp.com",
    databaseURL: "https://coronaprototyp.firebaseio.com",
    projectId: "coronaprototyp",
    storageBucket: "coronaprototyp.appspot.com",
    messagingSenderId: "857488715212",
    appId: "1:857488715212:web:763e73804d890e4bf40169"
});

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
            window.location.href = "einsendeschein.html";
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
                                date1: elem.insertDate,
                                front: elem.p5_front,
                                back: elem.p5_back
                            });
                        case "3":
                            temp.push({
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
                                date1: elem.insertDate,
                                front: elem.p4_front,
                                back: elem.p4_back
                            });
                        case "2":
                            temp.push({
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
                                date1: elem.insertDate,
                                front: elem.p3_front,
                                back: elem.p3_back
                            });
                        case "1":
                            temp.push({
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
                                date1: elem.insertDate,
                                front: elem.p2_front,
                                back: elem.p2_back
                            });
                        default:
                            temp.push({
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
                        text: '<i class="las la-plus mr-2"></i>Neuer Eintrag',
                        action: function(e, dt, node, config) {
                            console.log("test");
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
								return "<a href='#'><img height='30' class='mr-2' src='https://img.icons8.com/ios-glyphs/30/BAAC9E/add--v1.png'/></a>" +
								"<a href='#'><img height='30' src='https://img.icons8.com/ios-glyphs/30/FF0000/delete-forever.png'/></a>";
							}
							return "";
                        },
					}, {
                        "data": "id",
                        "className": "bold",
                        "orderable": false,
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
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined')) {
                                return '<a href="tel:' + data + '">' + data + '</a>';
                            } else {
                                return '<span class="text-center">' + data + '</span>';
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "mobile",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined')) {
                                return '<a href="tel:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "fax",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined')) {
                                return '<a href="fax:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "email",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && (typeof data !== 'undefined')) {
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
                            if (type === 'display' && (typeof data !== 'undefined')) {
                                return '<a href="mailto:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
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
                                temp += '<a href="' + row.signature + '" data-title="Signatur:" data-toggle="lightbox" class="mx-1"><img height="30" src="https://img.icons8.com/ios-glyphs/30/BAAC9E/signature.png"/></a>';
                            }

                            if (row.front) {
                                temp += '<a href="' + row.front + '" data-title="Vorderseite:" data-toggle="lightbox" class="mx-1"><img height="30" src="https://img.icons8.com/ios-glyphs/30/BAAC9E/identification-documents--v1.png"/></a>';
                            }

                            if (row.back) {
                                temp += '<a href="' + row.back + '" data-title="Rückseite:" data-toggle="lightbox" class="mx-1"><img height="30" src="https://img.icons8.com/ios-glyphs/30/BAAC9E/identification-documents--v1.png"/></a>';
                            }

                            return temp
                        },
                        "orderable": false
                    }],
                    "data": result,
                });

                table1.columns.adjust().draw();
				table1.fixedHeader.adjust().draw();

				$('#edit1Modal').on('shown.bs.modal', function () {
					$('#edit1Field').focus();
				})

				table1.on('dblclick', 'td', function() {
					var cell = table1.cell(this)
					const blacklist = [0, 1, 14];
					if (!blacklist.includes(cell.index().column)) {
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
                    "keys": true,
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
                        extend: 'csvHtml5',
                        text: '<i class="las la-file-csv mr-2"></i>Für Excel Exportieren',
                        className: 'customButton mr-2'
                    }],
                    "columns": [{
                        "data": "id",
                        "className": "bold",
                        "orderable": true
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
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && data != "-") {
                                return '<a href="tel:' + data + '">' + data + '</a>';
                            } else {
                                return '<span class="text-center">' + data + '</span>';
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "mobile",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && data != "-") {
                                return '<a href="tel:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "fax",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && data != "-") {
                                return '<a href="fax:' + data + '">' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "orderable": false
                    }, {
                        "data": "email",
                        "defaultContent": "-",
                        "render": function(data, type, row, meta) {
                            if (type === 'display' && data != "-") {
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
                            if (type === 'display' && data != "-") {
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
                                temp += '<a href="' + row.signature + '" data-title="Signatur:" data-toggle="lightbox" class="mx-1"><img src="https://img.icons8.com/ios-glyphs/30/BAAC9E/signature.png"/></a>';
                            }

                            if (row.front) {
                                temp += '<a href="' + row.front + '" data-title="Vorderseite:" data-toggle="lightbox" class="mx-1"><img src="https://img.icons8.com/ios-glyphs/30/BAAC9E/identification-documents--v1.png"/></a>';
                            }

                            if (row.back) {
                                temp += '<a href="' + row.back + '" data-title="Rückseite:" data-toggle="lightbox" class="mx-1"><img src="https://img.icons8.com/ios-glyphs/30/BAAC9E/identification-documents--v1.png"/></a>';
                            }

                            return temp
                        },
                        "orderable": false
                    }],
                    "data": array,
                });

                table2.columns.adjust().draw();
                table2.fixedHeader.adjust().draw();
            });

        }
    });

});