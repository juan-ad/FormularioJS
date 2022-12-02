function validar(){
    let edad = document.getElementById('edad');
    
    if (edad.value >= 18){
        alert("Es mayor de edad");
    }else{
        alert("Es menor de edad");
    }
}