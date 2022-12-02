    import { SendMail } from "./components/mail.js";

    (() => {
        const { createApp } = Vue
    
        createApp({
            data() {
                return {
                    errorFirstName: false,
                    errorLastName: false,
                    errorEmail: false,
                    errorInMessage: false,
                    successMessage: false,
    
                    form: {
                        firstname: "",
                        lastname: "",
                        email: "",
                        text: ""
                    }
                }
            },
    
            methods: {
                processMailFailure(result) {
                    if(this.form.firstname.length > 0){
                    this.$refs.fname.classList.remove("error");
                    this.errorFirstName = false;
                    } else {
                    this.$refs.fname.classList.add("error");
                    this.errorFirstName = true;
                    }
    
                    if(this.form.lastname.length > 0){
                    this.$refs.lname.classList.remove("error");
                    this.errorLastName = false;
                    } else {
                    this.$refs.lname.classList.add("error");
                    this.errorLastName = true;
                    }    
    
                    if(this.form.email.length > 0){
                    this.$refs.email.classList.remove("error");
                    this.errorEmail = false;
                    } else {
                    this.$refs.email.classList.add("error");
                    this.errorEmail = true;
                    }
    
                    if(this.form.text.length > 0){
                    this.$refs.message.classList.remove("error");
                    this.errorInMessage = false;
                    } else {
                    this.$refs.message.classList.add("error");
                    this.errorInMessage = true;
                    }      
                },
    
                processMailSuccess(result) {
                    this.successMessage = true;
                    this.$refs.fname.classList.remove("error");
                    this.$refs.lname.classList.remove("error");
                    this.$refs.email.classList.remove("error");
                    this.$refs.message.classList.remove("error");
                    this.errorFirstName = false;
                    this.errorLastName = false;
                    this.errorEmail = false;
                    this.errorInMessage = false;
                },
    
                processMail(event) {        
                    // use the SendMail component to process mail
                    SendMail(this.$el.parentNode)
                        .then(data => this.processMailSuccess(data))
                        .catch(err => this.processMailFailure(err));
                }
            }
        }).mount('#mail-form')

    // menu nav 

	const button = document.querySelector("#navbutton");
	const menu = document.querySelector("#menucontent")

	function compactmenu() {
		button.classList.toggle("expanded");
		menu.classList.toggle("slideToggle");
	}
	button.addEventListener("click", compactmenu);
	
	TheList.addEventListener("click", slideBanner);
	TheList.addEventListener("click", changeText);

    let vue_vm = new Vue({

        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(project => this.artprojects.push(project));
                })
                .catch(err => console.error(err));      
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            next: function() {
                this.currentIndex += 1;
              },
              prev: function() {
                this.currentIndex -= 1;
              },
            },
        
         
 
})();

	})();