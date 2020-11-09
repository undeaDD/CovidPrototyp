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
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            firebase.auth().signOut();
            window.location.href = "einsendeschein.html";
        } else {
            document.body.classList.remove("d-none");

            firebase.database().ref('requests').on('value', function(snapshot) {
                var table1 = $('#table1').DataTable({
                    "destroy": true,
                    "paging": false,
                    "ordering": false,
                    "info": false,
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
                                    data = '<a href="tel:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "mobile",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="tel:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "fax",
                            "defaultContent": "-"
                        },
                        {
                            "data": "email",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="mailto:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "emailCopy",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="mailto:' + data + '">' + data + '</a>';
                                }
                                return data;
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
                    //"data": snapshotToArray(snapshot),
                });
            });

            firebase.database().ref('patients').on('value', function(snapshot) {
                var table2 = $('#table2').DataTable({
                    "destroy": true,
                    "paging": false,
                    "ordering": false,
                    "info": false,
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
                                    data = '<a href="tel:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "mobile",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="tel:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "fax",
                            "defaultContent": "-"
                        },
                        {
                            "data": "email",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="mailto:' + data + '">' + data + '</a>';
                                }
                                return data;
                            }
                        },
                        {
                            "data": "emailCopy",
                            "defaultContent": "-",
                            "render": function(data, type, row, meta) {
                                if (type === 'display' && data != "-") {
                                    data = '<a href="mailto:' + data + '">' + data + '</a>';
                                }
                                return data;
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
                    "data": snapshotToArray(snapshot),
                });
            });
        }
    });
});