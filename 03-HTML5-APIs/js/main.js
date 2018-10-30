var db;
function createIndexDB(){
    buton = document.getElementById("butonid");
        
    buton.addEventListener("click", addObject, false);

    var req = indexedDB.open("myBase4");

    req.onsuccess = function(e){
        db = e.target.result;
    }
    req.onupgradeneeded = function(e){
        db = e.target.result;
        db.createObjectStore("savedText",{keyPath:"text"});
    }
}
addEventListener("load",createIndexDB,false);

function addObject(){
    var info = document.getElementById("textarea").value;
    var transaction = db.transaction(["savedText"], "readwrite");
    var saveInfo = transaction.objectStore("savedText");
    var sumit = saveInfo.add({text: info})
}
function saveLocalStorage(){
    if(typeof(Storage) !== "undefined" ){
        let text = document.getElementById("textarea").value;
        
        localStorage.setItem("TextInside",String(text));
    } else {
        console.log("Sorry, your browser does not support Web Storage");
    }
    
}
function clearBoth(){
    localStorage.clear();
    var trans = db.transaction(["savedText"],"readwrite");
    var info = trans.objectStore("savedText");
    var reques = info.clear();
    
}
//-----------------------------------------------------------------------------------------------
function dropOver(event){
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';

}
function dropOverText(event){
    event.stopPropagation();
    event.preventDefault();
  
    if (event.dataTransfer.items.length > 1) {
      console.log('Cant read more than one file');
    }
    else { 
      if (event.dataTransfer.items[0].kind === 'file') { //Check if dropped items are files
        var txt = event.dataTransfer.items[0].getAsFile();
    
        var reader = new FileReader();
  
        reader.readAsText(txt);
  
        reader.onload = ev => {
          data = reader.result;
        }
      
        reader.onloadend = ev => {
          event.target.innerHTML = data;
        }
      
        reader.onerror = ev => {
          console.log('Error at reading file');
        }      
      }
    }    
}

var dropzone = document.getElementById("textarea");
dropzone.addEventListener('dragover',dropOver,false);
dropzone.addEventListener('drop',dropOverText,false);
//-------------------------------------------------------------------------------------
function webSocketTesting(messsage){

    var webSock = new WebSocket('ws://echo.websocket.org');

    webSock.onopen = ev =>{
        console.log('Conection Done');
        webSock.send(messsage);
    }
    webSock.onclose = ev =>{
        console.log('Conection Close');
    }
    webSock.onmessage = ev =>{
        console.log('Receiving response');
        document.getElementById("socketOutPut").innerHTML = 'Response ' + ev.data;
    }
    webSock.onerror = ev =>{
        console.log('Error');
    }
}