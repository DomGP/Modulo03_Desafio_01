//Precio Inicial
precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

//Botón Suma
function botonSuma(){
    var valorTotal = document.querySelector('.valor-total');
    var sumaTotal = Number(valorTotal.innerHTML);
    sumaTotal = sumaTotal+precio;
    valorTotal.innerHTML=sumaTotal

    var valorCantidad = document.querySelector('.cantidad');
    var cantidadPositiva = Number(valorCantidad.innerHTML);
    cantidadPositiva = cantidadPositiva+1;
    valorCantidad.innerHTML=cantidadPositiva
}

//Botón Resta
function botonResta(){
    var valorTotal = document.querySelector('.valor-total');
    var restaTotal = Number(valorTotal.innerHTML);
    restaTotal = restaTotal-precio;
    restaTotal = Math.max(0,restaTotal)
    valorTotal.innerHTML=restaTotal;

    var valorCantidad = document.querySelector('.cantidad');
    var cantidadNegativa = Number(valorCantidad.innerHTML);
    cantidadNegativa = cantidadNegativa-1;
    cantidadNegativa = Math.max(0,cantidadNegativa)
    valorCantidad.innerHTML=cantidadNegativa;
}