document.getElementById('boton').addEventListener('click', function(){
  //guardo la informacion ingresada al textarea
  var think = document.getElementById('think').value;
  //deshabilito el boton si textarea esta vacio//
	if (think == "") {
		var boton = getElementById('boton');
		boton.disable = true;
    //sino
	}else{
    //vacio el textarea
    document.getElementById('think').value= "";
     //creo mi div contenedor del post Y le doy clase
    var contenedorPost = document.createElement('div');
    contenedorPost.classList.add('class', 'contenedorPost');
    //creo mi p que va a contener la info del post
    var post = document.createElement('p');
    post.classList.add('class', 'post');
    //creo el texto de mi post
    var textPost =document.createTextNode(think);
    //creo mi p para contener la fecha
    var fecha =document.createElement('p');
    fecha.textContent = new Date();

    //asigno padres a lo que cree
    var superContenedor= document.getElementById('superContenedor');
    superContenedor.appendChild(contenedorPost);
    contenedorPost.appendChild(post);
    post.appendChild(textPost);
    contenedorPost.appendChild(fecha);
    }

  })
//creo mi funcion que cuente los caracteres de mi textarea
function cuenta(){
//caracteres max menos caracteres del "mmomento"
var max = 140;
var numThink = document.getElementById('think').value.length;
var resta = max-numThink;
//ingreso mi valor obtenido en mi imput
document.getElementById('contador').value=resta;
//cambiando colores//
  //si 140 caracteres maximos - 140 caracteres actuales boton desabilitado
if (resta < 0) {
	document.getElementById("boton").disabled=true;
}else if (resta >=0 && resta < 10){
	contador.style.color = 'blue';
	document.getElementById("boton").disabled=false;

}else if (resta >=10 && resta < 20){
	contador.style.color = 'green';
	document.getElementById("boton").disabled=false;

}else{
	contador.style.color = 'orange';
	document.getElementById("boton").disabled=false;

	}


}
//rezize textarea//
    //selecciono textarea (metodo selecciona el primer elemento con la clase textarea)
  var textarea = document.querySelector('textarea');
  //creo un evento que se desencadene cuando mi textarea cambie de tamaño
  textarea.addEventListener('keydown', autosize);

  //creo la funcion autosize//
  function autosize(){
    var largo = this; //valor this para lo que esta ocurriendo en el momento//
    setTimeout(function(){
      largo.style.cssText = 'height:' + largo.scrollHeight + 'px';
    },0); //me muestra en pantalla el tamaño"nuevo" del scroll 0 ms;

  }
