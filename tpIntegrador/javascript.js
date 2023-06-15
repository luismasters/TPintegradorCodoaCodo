function obtenerMonto() {

var categoria= document.getElementById("categoria")

var resultado= document.getElementById("resultado")
var  cant=parseInt (document.getElementById("cant").value)

if(categoria.value==="Estudiantes"){

    resultado.innerHTML ="Total $"+ cant * (200 * 0.2);




}
if( categoria.value==="Trainee"){



resultado.innerHTML="Total $"+cant*(200*0.5);


}
if(categoria.value==="Junior"){


    resultado.innerHTML="Total $"+ cant * (200*0.85);
}


if(categoria.value===""){

    resultado.innerHTML="Monto a Cobrar"


}



}