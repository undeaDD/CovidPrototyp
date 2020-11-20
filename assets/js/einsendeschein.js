
if (window.frameElement) {
	$( "#headerNav" ).remove();
	$( "#footerNav" ).remove();
	$( "#cardImage" ).remove();
	$("body").css('background', 'transparent');
}

window.addEventListener('resize', function(e) {
    var canvas = document.getElementById("sig-canvas");
    canvas.width = canvas.offsetWidth;
});
var canvas = document.getElementById("sig-canvas");
canvas.width = canvas.offsetWidth;

(function() {
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimaitonFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var canvas = document.getElementById("sig-canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#BAAC9E";
    ctx.lineWidth = 2;

    var drawing = false;
    var mousePos = {
        x: 0,
        y: 0
    };
    var lastPos = mousePos;

    canvas.addEventListener("mousedown", function(e) {
        drawing = true;
        lastPos = getMousePos(canvas, e);
    }, {
        passive: false
    });

    canvas.addEventListener("mouseup", function(e) {
        drawing = false;
    }, {
        passive: false
    });

    canvas.addEventListener("mousemove", function(e) {
        mousePos = getMousePos(canvas, e);
    }, {
        passive: false
    });

    // Add touch event support for mobile
    canvas.addEventListener("touchstart", function(e) {

    }, {
        passive: false
    });

    canvas.addEventListener("touchmove", function(e) {
        var touch = e.touches[0];
        var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(me);
    }, {
        passive: false
    });

    canvas.addEventListener("touchstart", function(e) {
        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(me);
    }, {
        passive: false
    });

    canvas.addEventListener("touchend", function(e) {
        var me = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(me);
    }, {
        passive: false
    });

    function getMousePos(canvasDom, mouseEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
        }
    }

    function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        }
    }

    function renderCanvas() {
        if (drawing) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            lastPos = mousePos;
        }
    }

    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", function(e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, {
        passive: false
    });
    document.body.addEventListener("touchend", function(e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, {
        passive: false
    });
    document.body.addEventListener("touchmove", function(e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, {
        passive: false
    });

    (function drawLoop() {
        requestAnimFrame(drawLoop);
        renderCanvas();
    })();

    var clearBtn = document.getElementById("clearCanvas");
    clearBtn.addEventListener("click", function(e) {
        canvas.width = canvas.width;
        ctx.strokeStyle = "#BAAC9E";
        ctx.lineWidth = 2;
    });
})();

firebase.initializeApp({
    apiKey: "AIzaSyAKzR5AiJVZ3Iz5tJrWsLeBVDZJl2SSqLE",
    authDomain: "coronaprototyp.firebaseapp.com",
    databaseURL: "https://coronaprototyp.firebaseio.com",
    projectId: "coronaprototyp",
    storageBucket: "coronaprototyp.appspot.com",
    messagingSenderId: "857488715212",
    appId: "1:857488715212:web:763e73804d890e4bf40169"
});

async function checkAndInsert() {
    var result = true;
    const form = document.forms["main"];
    const array = [...form.elements];

    var obj = array.reduce(function(dict, elem, index) {
        if (elem.type == "date") {
            dict[elem.name] = elem.valueAsDate.toLocaleDateString();
        } else if (elem.value == "") {
            if (elem.classList.contains("required")) {
                elem.classList.add("is-invalid");
                result = false;
            }
        } else {
            elem.classList.remove("is-invalid");
            dict[elem.name] = elem.value;
        }
        return dict;
    }, {});


    if (!obj.p1_telephone && !obj.p1_mobile && !obj.p1_fax && !obj.p1_email) {
        form["p1_telephone"].classList.add("is-invalid");
        result = false;
    }

    try {
        for (let i = 1; i < 6; i++) {
            const temp1 = form["p" + i + "_front"];
            if (temp1.files.length > 0) {
                obj["p" + i + "_front"] = await readFile(temp1.files[0]);
            } else {
                delete obj["p" + i + "_front"];
            }

            const temp2 = form["p" + i + "_back"];
            if (temp2.files.length > 0) {
                obj["p" + i + "_back"] = await readFile(temp2.files[0]);
            } else {
                delete obj["p" + i + "_back"];
            }
        }
    } catch (error) {}

    const selected = document.getElementById("morePatients").selectedIndex;
    switch (selected) {
        case 3:
            delete obj.p5_birthdate;
            delete obj.p5_birthdate;
            delete obj.p5_email_verify;
            break;
        case 2:
            delete obj.p4_birthdate;
            delete obj.p4_email_verify;
            delete obj.p5_birthdate;
            delete obj.p5_email_verify;
            break;
        case 1:
            delete obj.p3_birthdate;
            delete obj.p3_email_verify;
            delete obj.p4_birthdate;
            delete obj.p4_email_verify;
            delete obj.p5_birthdate;
            delete obj.p5_email_verify;
            break;
        default:
            obj.morepatients = "0";
            delete obj.p2_birthdate;
            delete obj.p2_email_verify;
            delete obj.p3_birthdate;
            delete obj.p3_email_verify;
            delete obj.p4_birthdate;
            delete obj.p4_email_verify;
            delete obj.p5_birthdate;
            delete obj.p5_email_verify;
    }


    for (let i = 1; i < 6; i++) {
        try {
            const temp1 = obj["p" + i + "_email_verify"];
            if (temp1) {
                if (temp1 != obj["p" + i + "_email"]) {
                    form["p" + i + "_email_verify"].classList.add("is-invalid");
                    result = false;
                } else {
                    delete obj["p" + i + "_email_verify"];
                }
            }
        } catch (error) {}
    }

    if (!form["invoice_enabled"].checked) {
        obj.invoice_enabled = false;
    } else {
        obj.invoice_enabled = true;
    }

    if (!form["datenschutz"].checked) {
        obj.datenschutz = false;
        result = false;
    } else {
        obj.datenschutz = true;
    }

    obj.signature = document.getElementById("sig-canvas").toDataURL();

    obj["insertDate"] = (new Date()).toLocaleDateString();
	obj["OS"] = navigator.platform;

    if (result) {
        const key = firebase.database().ref().child('requests').push().key;
        firebase.database().ref('requests/' + key).set(obj);
		$('#successModal').modal('show');
		parent.postMessage({
			type:"modal.close"
		},"*");
    } else {
        $('#errorModal').modal('show');
    }
}

async function readFile(file) {
    return await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
}

function toggleRechnung() {
    document.getElementById("cardRechnung").classList.toggle('d-none');
    document.getElementsByName("invoice_firstname")[0].classList.toggle('required');
    document.getElementsByName("invoice_street")[0].classList.toggle('required');
    document.getElementsByName("invoice_zip")[0].classList.toggle('required');
    document.getElementsByName("invoice_address")[0].classList.toggle('required');
    document.getElementsByName("invoice_email")[0].classList.toggle('required');
}

function configurePatient(enabled, index) {
    if (enabled) {
        document.getElementById("patient" + index).classList.remove('d-none');
        document.getElementsByName("p" + index + "_firstname")[0].classList.add('required');
        document.getElementsByName("p" + index + "_lastname")[0].classList.add('required');
        document.getElementsByName("p" + index + "_street")[0].classList.add('required');
        document.getElementsByName("p" + index + "_zip")[0].classList.add('required');
        document.getElementsByName("p" + index + "_address")[0].classList.add('required');
        document.getElementsByName("p" + index + "_birthdate")[0].classList.add('required');
    } else {
        document.getElementById("patient" + index).classList.add('d-none');
        document.getElementsByName("p" + index + "_firstname")[0].classList.remove('required');
        document.getElementsByName("p" + index + "_lastname")[0].classList.remove('required');
        document.getElementsByName("p" + index + "_street")[0].classList.remove('required');
        document.getElementsByName("p" + index + "_zip")[0].classList.remove('required');
        document.getElementsByName("p" + index + "_address")[0].classList.remove('required');
        document.getElementsByName("p" + index + "_birthdate")[0].classList.remove('required');
    }
}

function showPatients() {
    const selected = document.getElementById("morePatients").selectedIndex;
    configurePatient(false, 2);
    configurePatient(false, 3);
    configurePatient(false, 4);
    configurePatient(false, 5);

    switch (selected) {
        case 4:
            configurePatient(true, 5);
        case 3:
            configurePatient(true, 4);
        case 2:
            configurePatient(true, 3);
        case 1:
            configurePatient(true, 2);
        default:
            break;
    }
}

function toggleCC() {
    document.getElementById("copyMail").classList.toggle('d-none');
    if (document.getElementById("copyMail").classList.contains("d-none")) {
        document.getElementById("copyMailButton").innerText = "+"
    } else {
        document.getElementById("copyMailButton").innerText = "-"
    }
}

function updateLabel(event) {
    var fileName = event.target.files[0].name;
    if (event.target.nextElementSibling != null) {
        event.target.nextElementSibling.innerText = fileName;
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'de'
    }, 'google_translate_element');

    jQuery('.goog-logo-link').css('display', 'none');
    jQuery('.goog-te-gadget').css('font-size', '0');
}
