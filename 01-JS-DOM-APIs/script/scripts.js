/*var section = document.createElement("section");
section.style.display = "none";
section.innerHTML = "Hello World";
document.getElementById("hidden").appendChild("section");
*/
document.getElementById("hidden").style.display = "none";

function show(){
    var type = document.getElementsByName("status");
    if(type[1].checked){
        document.getElementById("hidden").style.display = "block";
    }
}

function show2(){
    if(document.getElementById("married").checked){
        var val = document.getElementById("hidden");
        val.style.display = "block";
    }
}