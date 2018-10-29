//exercise 1

function showSection(id){
    var element = document.getElementById(id);
 
    element.classList.add("loaded");
 };
 
 window.addEventListener("load", function(){showSection("hidden")});
 
 //exercise 2

function displayAlert(){
    window.alert("WELCOME!");
}

//exercise 3


document.getElementById("btn").addEventListener("click", function(){readApi()});
/*
function readApi(){
    
    fetch('http://api.icndb.com/jokes/random') //connection returns a promise
        .then(function(response) {
             console.log(response);
             return response.json(); //return as a json object
         })
        .then(function(myJson) { //i can choose any name to the parameter
            console.log(myJson);
            //var obj = JSON.parse(myJson);
            document.getElementById("joke").innerHTML=myJson.value.joke;
              
        });
       
}
*/



function readApi(){ 
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.icndb.com/jokes/random", true);
    
    
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let obj = JSON.parse(request.responseText); //the xhttp.responseText returns a text in JSON format and JSON.parse create an object, 
            document.getElementById("joke").innerHTML = obj.value.joke;      
            document.getElementById("joke").classList.remove("error"); //if the conection failed and then, it returns, the background-color:red, disappear
        }
    };
    request.onerror = function() {
        console.log('There was an error!');
       
        document.getElementById("joke").innerHTML = 'there was an error';
        document.getElementById("joke").classList.add("error");
      };
   request.send();
}


//reusable function to perform ajax calls

//promise: it is an object that represents the termination or eventual failure of an asynchronous operation.

 function ajaxFunction(config) {
    
    return new Promise(function(resolve, reject) {
    
        var request = new XMLHttpRequest();
        request.open(config.method, config.url, true);
        
        request.onreadystatechange = function() {
            if(request.readyState === 4){
                if (request.status === 200) {
                // If successful, resolve the promise by passing back the request response
                    resolve(request.responseText);
                    
                } else {
                // If it fails, reject the promise with a error message
                    
                    reject(request.statusText);     
                }
            }     
        };
        request.onerror = function() {
        // in case the entire request fails.
        // This is probably a network error, so reject the promise
        
            reject(Error('There was a network error.'));
            
        };
        // Send the request
        request.send();
  });
}




 //exercise 4 without AJAX REUSABLE FUNCTION
 
/*

function readApiParameters(){ 
    var q = searchRepo().value; //it receive the type of the repo
    var request = new XMLHttpRequest();
    var config={};
    config.url='https://api.github.com/search/repositories?q=' + q;
    config.method='GET';
    request.open(config.method, config.url , true);
    
    
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let obj = JSON.parse(request.responseText); //the xhttp.responseText returns a text in JSON format and JSON.parse create an object,
            document.getElementById("repositories").innerHTML ="";
            obj.items.forEach(element => {
                console.log(element)
               document.getElementById("repositories").innerHTML += "<li>" + "<a href='https://github.com/" + element.full_name + "'>" + 'https://github.com/' +element.full_name + "</a>" +  "</li>"
            });      
         };
    }
    request.onerror = function() {
        console.log('There was an error!');
    };
   request.send();
}

*/

//EXERCISE 4 using AJAX REUSABLE FUNCTION
function configUrl()
{   var q= searchRepo().value;
    var config={};
    config.url='https://api.github.com/search/repositories?q=' + q;
    config.method='GET';
    return config;
}

function readApiParameters(){
    var config=configUrl();
    console.log(config);
    var promise=ajaxFunction(config)
        .then(resolve => printResolve(resolve))
        .catch(reject => console.log('error'));
    console.log("fin");
}

function printResolve(resolve){
    let obj = JSON.parse(resolve); 
    document.getElementById("repositories").innerHTML ="";
    obj.items.forEach(element => {
        document.getElementById("repositories").innerHTML += "<li>" + "<a href='https://github.com/" + element["full_name"] + "'>" + 'https://github.com/' +element["full_name"] + "</a>" +  "</li>"
    })
}


function searchRepo(){
    var search= document.getElementById("input");
    return search;
}



//exercise 5

function createMatrix(r,c){
    var colArray= new Array(c);
    for(let x=0; x < c; x++)
    {
        colArray[x] = new Array(r);
    }

    for(let x=0; x<c; x++){
        for(let y=0; y<r; y++){
            colArray[x][y] = randomNumber(0, 200);
        }
    }
    var obj={};
    obj.columns=c;
    obj.rows=r;
    obj.matrix=colArray;
    return obj;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function drawTable()
{   var matrix = createMatrix(3,5);
    var t= document.createElement("table");
    document.getElementById("table").appendChild(t);
    for(let c=0; c<matrix.columns; c++){
        var col = document.createElement("tr"); 
        t.appendChild(col);
        for(let r=0; r<matrix.rows; r++){
            var row = document.createElement("td");    
            col.appendChild(row);     
            var num = document.createTextNode(matrix.matrix[c][r]);      
            row.appendChild(num);                                         
        }
    }
};

drawTable();