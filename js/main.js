import { gsap } from "./components/gsap.js";
import { SendMail } from "./components/mail.js";

(() => {
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