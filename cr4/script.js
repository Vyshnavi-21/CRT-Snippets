function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_eyfs9mh","template_ggvu5mc",params).then(function(res){
        alert("Email sent Successfully");

    })

}