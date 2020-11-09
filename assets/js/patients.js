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
                            temp.push({ id: count + ".5", lname: elem.p5_lastname, fname: elem.p5_firstname, street: elem.p5_street, plz: elem.p5_zip, city: elem.p5_address, birthday: elem.p5_birthdate, tel: elem.p5_telephone, mobile: elem.p5_mobile, fax: elem.p5_fax, email: elem.p5_email, emailCopy: elem.p5_emailcopy, date1: elem.insertDate });
                        case "3":
                            temp.push({ id: count + ".4", lname: elem.p4_lastname, fname: elem.p4_firstname, street: elem.p4_street, plz: elem.p4_zip, city: elem.p4_address, birthday: elem.p4_birthdate, tel: elem.p4_telephone, mobile: elem.p4_mobile, fax: elem.p4_fax, email: elem.p4_email, emailCopy: elem.p4_emailcopy, date1: elem.insertDate });
                        case "2":
                            temp.push({ id: count + ".3", lname: elem.p3_lastname, fname: elem.p3_firstname, street: elem.p3_street, plz: elem.p3_zip, city: elem.p3_address, birthday: elem.p3_birthdate, tel: elem.p3_telephone, mobile: elem.p3_mobile, fax: elem.p3_fax, email: elem.p3_email, emailCopy: elem.p3_emailcopy, date1: elem.insertDate });
                        case "1":
                            temp.push({ id: count + ".2", lname: elem.p2_lastname, fname: elem.p2_firstname, street: elem.p2_street, plz: elem.p2_zip, city: elem.p2_address, birthday: elem.p2_birthdate, tel: elem.p2_telephone, mobile: elem.p2_mobile, fax: elem.p2_fax, email: elem.p2_email, emailCopy: elem.p2_emailcopy, date1: elem.insertDate });
                        default:
                            temp.push({ id: count + ".1", lname: elem.p1_lastname, fname: elem.p1_firstname, street: elem.p1_street, plz: elem.p1_zip, city: elem.p1_address, birthday: elem.p1_birthdate, tel: elem.p1_telephone, mobile: elem.p1_mobile, fax: elem.p1_fax, email: elem.p1_email, emailCopy: elem.p1_emailcopy, date1: elem.insertDate });
                    }
                    result.push(...temp.reverse());
                    count += 1;
                }

                var table1 = $('#table1').DataTable({
                    "destroy": true,
                    "paging": false,
                    "ordering": false,
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
                    "columns": [
                        { "data": "id", "className": "bold" },
                        { "data": "lname" },
                        { "data": "fname" },
                        { "data": "street" },
                        { "data": "plz" },
                        { "data": "city" },
                        { "data": "birthday" },
                        {
                            "data": "tel",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && (typeof data !== 'undefined')) {
                                    return '<a href="tel:' + data + '">' + data + '</a>';
                                } else {
                                    return '<span class="text-center">' + data + '</span>';
                                }
                            }
                        },
                        {
                            "data": "mobile",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && (typeof data !== 'undefined')) {
                                    return '<a href="tel:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "fax",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && (typeof data !== 'undefined')) {
                                    return '<a href="fax:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "email",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && (typeof data !== 'undefined')) {
                                    return '<a href="mailto:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "emailCopy",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && (typeof data !== 'undefined')) {
                                    return '<a href="mailto:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "date1",
                            "defaultContent": "-"
                        }
                    ],
                    "data": result,
                });

                table1.columns.adjust().draw();
                table1.fixedHeader.adjust().draw();
            });

            firebase.database().ref('patients').on('value', function(snapshot) {
                var array = snapshotToArray(snapshot);
                var table2 = $('#table2').DataTable({
                    "destroy": true,
                    "paging": false,
                    "ordering": false,
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
                    "columns": [
                        { "data": "id", "className": "bold" },
                        { "data": "lname" },
                        { "data": "fname" },
                        { "data": "street" },
                        { "data": "plz" },
                        { "data": "city" },
                        { "data": "birthday" },
                        {
                            "data": "tel",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    return '<a href="tel:' + data + '">' + data + '</a>';
                                } else {
                                    return '<span class="text-center">' + data + '</span>';
                                }
                            }
                        },
                        {
                            "data": "mobile",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    return '<a href="tel:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "fax",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    return '<a href="fax:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "email",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    return '<a href="mailto:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "emailCopy",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    return '<a href="mailto:' + data + '">' + data + '</a>';
                                } else {
                                    return data;
                                }
                            }
                        },
                        {
                            "data": "date1",
                            "defaultContent": "-"
                        },
                        {
                            "data": "date2",
                            "defaultContent": "-"
                        },
                        {
                            "data": "date3",
                            "defaultContent": "-"
                        },
                    ],
                    "data": array,
                });

                table2.columns.adjust().draw();
                table2.fixedHeader.adjust().draw();
            });
        }
    });
});