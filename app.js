let content = document.getElementById("content")
let button = document.getElementById("click3")

button.onclick = function(){

    if(content.className == "open") {
        //Krymp texten
        content.className = "";
        button.innerHTML = "Show More"
    } else {
        content.className = "open";
        button.innerHTML = "Show Less"
    }
};