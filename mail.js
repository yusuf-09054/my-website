
function sendMail(){
    var params1 = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,

    };

const serviceID = "service_cu7a1uf";
const templateID = "template_0hgtz7n"

emailjs.send(serviceID,templateID,params1)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message is sent successfully");
    })
    .catch((err) => console.log(err));
}
