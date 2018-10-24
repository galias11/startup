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

function createAlert(){
    alert("What's up?");
}

//https://medium.com/front-end-hacking/ajax-async-callback-promise-e98f8074ebd7

function createJoke(){
    var URL = "http://api.icndb.com/jokes/random";
    makeAjaxCall(URL, "GET").then(handleSuccess, handleError); //The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
}

function handleError(statusNumber){
    document.getElementById("joke").style.backgroundColor = "red";
}

function handleSuccess(jokeData){
    document.getElementById("makeJoke").innerHTML = jokeData.value.joke;
}

function makeAjaxCall(url, methodType){ //Reusable function to perform AJX calls.
    var promiseObj = new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.send();
        xhr.onreadystatechange = function(){ // Tree thing to note here: readyState, status, responseText
            if(xhr.readyState === 4){ // readyState: tells about the state of connection. Value from 0-4
                if(xhr.status === 200){ // status===200 => our request is processed succesfully, any other code, request has failed
                    console.log("xhr done successfully");
                    var resp = xhr.responseText; //responseText: will hold the value returned by the server
                    var respJson = JSON.parse(resp);
                    resolve(respJson);
                }else{
                    reject(xhr.status);
                    console.log("xhr failed");
                }
            }else{
                console.log("xhr processing going on");
            }
        }
        console.log("request sent succesfully");
    });
    return promiseObj;
}