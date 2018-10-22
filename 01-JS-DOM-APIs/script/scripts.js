var section = document.createElement("section");
section.innerHTML = "Hello World";
document.getElementById("hidden").appendChild(section);


function hide(){
    section.style.display = "none";
}

/*
function hide(){
    document.getElementById("hidden").style.display = 'none';
}
*/

function show(){
    var val = document.getElementById("deploy");
    if(document.getElementById("married").checked){
        val.style.display = "block";
    }
    else{
        val.style.display = "none";
    }
}