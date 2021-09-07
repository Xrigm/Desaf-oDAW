
function Crear_matriz(){
    var numf=document.getElementById('Filas').value;
    var numc=document.getElementById('Columnas').value;
    var Columns= new Array();

    tabla="";
    tabla+="<table>";
    var menor=100000, mayor=0;
    //Impresión de tabla
    for(i=0; i<numf; i++){
        

        for(j=0; j<numc; j++ ){
            //Números aleatorios
            //Impresión de columnas
            let numal = Math.floor(Math.random()*100);
            Columns=numal;
            tabla+="<td>"+Columns+"</td>";
            document.getElementById('table').innerHTML=tabla;

            //Aquí comenzar hacer comparación de mayor y menor con if

           if(Columns<menor){
               menor=Columns;
               
           }
           if(Columns>mayor){
               mayor=Columns;
               
           }

        }
            //Impresión de filas
            tabla+="<tr>"
            
            tabla+="</tr>";


    }

    Nmame.innerHTML+="El número mayor es: "+mayor+"<br>";
    Nmame.innerHTML+="El número menor es: "+menor+"<br>";

    console.log(menor);
    console.log(mayor);
}


