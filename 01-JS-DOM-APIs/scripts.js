function getJokes(){
  let config = {};
  config.url = "http://api.icndb.com/jokes/random";
  config.method = "GET";
  config.async = true;
  fetchDataWithXMLHttpRequest(config).then(addJoke, turnErrorContent);
  //fetchData(config).then(addJoke,turnErrorContent);
  fadeIn( "jokeSection" );
}

// AJAX functions with XMLHttpRequest

function fetchDataWithXMLHttpRequest(config){
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {

      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
			if (request.status >= 200 && request.status < 300) {
				resolve(request);
			} else {
				reject({
					status: request.status,
					statusText: request.statusText
				});
			}
    };
    request.open(config.method, config.url, config.async);
    request.send();
  });
}

function parseJokeWithXMLHttpRequest( response ) {
  return JSON.parse(response.responseText).value.joke;
}

// AJAX functions with parse

function fetchData(config){
  return fetch(config.url)
    .then(resp => resp.text());
}

function parseJoke( joke ){
  return JSON.parse(joke).value.joke;
}

// Fetching data with parameters

function fetchQuery(url, name){
  let query = url + `?q=${name}`;
  return fetch(query)
    .then(resp => resp.text())
}

function fetchRepositories(){
  fetchQuery("https://api.github.com/search/repositories", document.getElementById("query").value)
    .then(resp => listRepositories(JSON.parse(resp).items));
}

function listRepositories(repositories) {

  let repositoryList = document.getElementById("repository-list");
  let textNode, liNode;

  //Removing previous results
  while (repositoryList.firstChild) {
    repositoryList.removeChild(repositoryList.firstChild);
  }

  for(let i = 0; i < repositories.length ; i++){
    textNode = document.createTextNode(repositories[i].full_name);
    liNode = document.createElement("li");
    liNode.appendChild(textNode);
    repositoryList.appendChild(liNode);
  }
}

// Generating a table from a matrix

function generateMatrix() {
  return [ [ 1, 2 ,3 ], [ 4, 5 ,6], [ 7, 8 ,9 ] ];
}

function generateTableFromMatrix(matrix){
  let table = document.createElement("table");
  for (let x = 0; x < matrix.length; x++){
    let tr = document.createElement("tr");
    for (let y = 0; y < matrix[x].length; y++){
      let td = document.createElement("td");
      let textNode = document.createTextNode(matrix[x][y]);
      td.appendChild(textNode);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById("tableSection").appendChild(table);
}

function generateTable(){
  generateTableFromMatrix(generateMatrix());
}

function fadeIn( id ) {
  let elementToFadeIn = document.getElementById(id);
  elementToFadeIn.style.display  = "block";
}

function addJoke( joke ){
  let section = document.getElementById("jokeSection");
  section.style.background = "rgb(128,128,128,0.8)";
  let jokeTextNode = document.createTextNode(parseJokeWithXMLHttpRequest(joke));
  section.replaceChild( jokeTextNode, jokeSection.firstChild );
}

function turnErrorContent() {
  let section = document.getElementById("jokeSection");
  section.style.background = "red";
  let errorTextNode = document.createTextNode("Error: something bad happened");
  section.replaceChild(errorTextNode , jokeSection.firstChild );
}

function invokeAlert() {
  alert("run like hell !!");
}

window.addEventListener('load', function () {
  fadeIn( "hiddenSection" )
}, false);
