function sendMail(){
   let params ={
    name:document.getElementById('firstName').value,
     emaile:document.getElementById('email').value,
      message:document.getElementById('message').value
   };
     const serviceID ="service_kn0tufn";
     const templateID ="template_s365rw2";
     emailjs.send(serviceID, templateID,params).then(res=>{document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res)
    alert('message sent')
})
.catch(err => console.log(err));
}
function submitForm() {
          if (validateForm()) {
            sendMail();
            resetForm();
          }
          return false;
        }