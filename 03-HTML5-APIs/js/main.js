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