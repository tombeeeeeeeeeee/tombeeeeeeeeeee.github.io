function sendMail()
{
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.sendMail("service_y0wqq0w", "template_ifpb4y9", params).then(alert("Thank you for message!"))
}