function showMessage() {
		alert("Welcome to my AOSC Portfolio");
}

const darkModeButton = document.getElementById("darkModeBtn");

if(darkModeButton){

    darkModeButton.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

    });

}