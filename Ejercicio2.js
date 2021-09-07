var biblioteca = new Array();
var contador= 1;
function guardar_libro(){
    //creacion objeto
    var libro = new Object();
    //propiedades
    libro.id = document.getElementById('txtid').value;
    libro.titulo=document.getElementById('txttitulo').value;
    libro.autorapi=document.getElementById('txtapellidoautor').value;
    libro.autornom=document.getElementById('txtnombreautor').value;
    libro.genero=document.getElementById('txtgenero').value;
    libro.precio=document.getElementById('txtprecio').value;
    libro.img=document.getElementById('file').value;
    biblioteca.push(libro);   
    mostrardatos();
}

function mostrardatos(){
  fila ="";
  for (var libro in biblioteca) {
      fila+="<tr>"
      fila+="<td>"+biblioteca[libro].id+"</td>";
      fila+="<td>"+biblioteca[libro].titulo+"</td>";
      fila+="<td>"+biblioteca[libro].autornom+"</td>";
      fila+="<td>"+biblioteca[libro].autorapi+"</td>";
      fila+="<td>"+biblioteca[libro].genero+"</td>";
      fila+="<td>"+biblioteca[libro].precio+"</td>";
      fila+="<td>"+biblioteca[libro].img+"</td>";
      fila+="</tr>"
  }

  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  
    if(contador==1){
      var contenedor=document.getElementById("registros");
      contenedor.innerHTML+=reader.result;
      contenedor.innerHTML+="<br>Titulo: "+biblioteca[libro].titulo;
      contenedor.innerHTML+="<br>Autor: "+biblioteca[libro].autornom+" "+biblioteca[libro].autorapi;
      contenedor.innerHTML+="<br>Precio: "+biblioteca[libro].precio+"<br>";
    }else{
      var contenedor=document.getElementById("registros2");
      contenedor.innerHTML+="<id=img>";
      contenedor.innerHTML+="<br>Titulo: "+biblioteca[libro].titulo;
      contenedor.innerHTML+="<br>Autor: "+biblioteca[libro].autornom+" "+biblioteca[libro].autorapi;
      contenedor.innerHTML+="<br>Precio: "+biblioteca[libro].precio+"<br>";
      contador=contador-2;
    }

    contador=contador+1;
    console.log(contador);
}
