function add() {
  var think = document.getElementById("think").value;
  document.getElementById("comment").value = "";
    var newComments = document.createElement('div');
    var cont = document.getElementById('cont');
    var paragraph = document.createElement('p');
  	paragraph.classList.add('color');
    var nodoText = document.createTextNode(comments);
  	paragraph.appendChild(nodoText);


}
