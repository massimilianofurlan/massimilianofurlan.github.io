// Function to create the mailto link using hex encoding
function showEmail() {
    // Hex encoded components of the email
    var firstName = "6d617373696d696c69616e6f"; // massimiliano
    var lastName = "6675726c616e"; // furlan
    var domain = "7761727769636b"; // warwick
    var tld = "6163"; // ac
    var tldFull = "756b"; // uk

    // Construct the displayed email using [dot] and [at]
    var displayedEmail = hexToString(firstName) + "." + hexToString(lastName) + "[at]" + hexToString(domain) + "[dot]" + hexToString(tld) + "." + hexToString(tldFull);

    // Construct the mailto link using hex decoding
    var mailtoLink = "mailto:" + displayedEmail;

    // Set the inner HTML to create a mailto link
    document.getElementById("email").innerHTML = 
        '<a href="' + mailtoLink + '">' + displayedEmail + '</a>'; 
}

// Function to convert hex to string
function hexToString(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

// Call the showEmail function when the page loads
window.onload = showEmail;