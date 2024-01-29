//Precio Inicial
precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

//Botón Suma
function botonSuma(){
    var valorSuma = document.querySelector('.valor-total');
    var sumaTotal = Number(valorSuma.innerHTML);
    sumaTotal = sumaTotal+400000;
    valorSuma.innerHTML=sumaTotal

    var valorCantidad = document.querySelector('.cantidad');
    var cantidadPositiva = Number(valorCantidad.innerHTML);
    cantidadPositiva = cantidadPositiva+1;
    valorCantidad.innerHTML=cantidadPositiva
}

//Botón Resta
function botonResta(){
    var valorResta = document.querySelector('.valor-total');
    var restaTotal = Number(valorResta.innerHTML);
    restaTotal = restaTotal-400000;
    valorResta.innerHTML=restaTotal;

    var valorCantidad = document.querySelector('.cantidad');
    var cantidadNegativa = Number(valorCantidad.innerHTML);
    cantidadNegativa = cantidadNegativa-1;
    valorCantidad.innerHTML=cantidadNegativa;
}