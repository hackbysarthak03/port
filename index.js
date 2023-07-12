function sendMail() {

const serviceID = "service_e0v9afn";
const templateID = "template_aqnpcjf";

emailjs.sendForm(serviceID, templateID, '#myform')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Message Sent Successfully !");
    }, function(error) {
       console.log('FAILED...', error);
    });
}