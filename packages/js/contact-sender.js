//bot token
var telegram_bot_id = "6142680394:AAGW2cjo1ss97t6qdi1Mf6gUQO7RebYolXI";
//chat id
var chat_id = 5555421232;
var u_name, email, subject, message;

var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("emails").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = `📨CONTACT-BOT📨\n\nName: ${u_name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
};

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("emails").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    // show modal box with fade in/out effect
    var modal = document.createElement("div");
    modal.innerHTML = `Thank you for reaching out, ${u_name}!`;
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    modal.style.color = "#fff";
    modal.style.display = "none"; // hide modal box by default
    modal.style.opacity = 0; // set initial opacity to 0
    modal.style.transition = "opacity 0.5s ease-in-out"; // add fade in/out effect
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.fontSize = "2rem";
    modal.style.textAlign = "center"; // add center text alignment
    modal.style.zIndex = "100";
    document.body.appendChild(modal);
    setTimeout(function(){
        modal.style.opacity = 1; // fade in the modal box
    }, 50);
    setTimeout(function(){
        modal.style.opacity = 0; // fade out the modal box
    }, 3500);
    setTimeout(function(){
        modal.style.display = "none"; // hide modal box after fade out
    }, 4000);
    return false;
};
