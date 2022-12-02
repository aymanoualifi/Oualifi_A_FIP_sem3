
let form = document.forms["contact-form"];
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let submitButton = document.querySelector("form button");
let pleaseWaitMessage = document.querySelector(".please-wait");

function disableButton() {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    pleaseWaitMessage.innerHTML = "Please wait...";
}


function enableButton(){
    submitButton.disabled = false;
    submitButton.classList.add("disabled");
    pleaseWaitMessage.innerHTML = ""
}


function clearError(){
    error.innerHTML = "";
    error.style.display = "";
}

function clearFor(){
    form.name.value = "";
    form.email.value = "";
    form.subject.value = "";
    form.message.value = "";
    pleaseWaitMessage.innerHTML = "";

 setTimeout(function(){
    success.style.display="";
    success.innerHTML = "";
    submitButton.disabled = false;
    submitButton.classList.remove("disabled")
 },5000)

}

form.addEventListener("submit", function(){
e.preventDefault();



let formdata = {
    "name": this.name.value,
    "email": this.email.value,
    "subject": this.subject.value,
    "message": this.message.value,
    
}


for(let[key, value]of object.entries(formdata)){
    if(value === ""){

        error.style.display = "block";
        error.innerHTML = "All fildes are required";
        return false;
        }else{
        clearError();
    }
}



let JSONdata = JSON.stringify(formdata);
//Need XLHTP requestto send the data to the server
 let http = new XMLHttpRequest();
 
 // open method
 http.open('post', "form.php", true);

 

 http.setRequestHeader("content-type", "application/x-www-form-urlencoded");



 http.send('message=' + JSONdata);
	disableButton();

    //catch the servers response.
	/* run the on ready state change event-handler. */

    http.onreadystatechange = function(){
		/* then  check the readyState and status properties. */
		if(this.readyState == 4 && this.status == 200){
			/* if the request was successful,catch the response with the
			responseText property. */
			let response = this.responseText;

            //check now the incoming messages */

            if(response.indexOf("Error") != -1){
				/* If the message is an error,  display it. */
				error.style.display = "block";
				error.innerHTML = response;

                enableButton();
			}else{

				clearError();
                
				success.style.display = "block";
				success.innerHTML = response;
				clearForm();
			}
		};
	}







});


