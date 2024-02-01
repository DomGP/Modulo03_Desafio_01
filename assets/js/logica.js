//Precio Inicial
precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

//Botón Suma
function botonSuma(){
    let valorTotal = document.querySelector('.valor-total');
    let sumaTotal = Number(valorTotal.innerHTML);
    sumaTotal = sumaTotal+precio;
    valorTotal.innerHTML=sumaTotal

    let valorCantidad = document.querySelector('.cantidad');
    let cantidadPositiva = Number(valorCantidad.innerHTML);
    cantidadPositiva = cantidadPositiva+1;
    valorCantidad.innerHTML=cantidadPositiva
}

//Botón Resta
function botonResta(){
    let valorTotal = document.querySelector('.valor-total');
    let restaTotal = Number(valorTotal.innerHTML);
    restaTotal = restaTotal-precio;
    restaTotal = Math.max(0,restaTotal)
    valorTotal.innerHTML=restaTotal;

    let valorCantidad = document.querySelector('.cantidad');
    let cantidadNegativa = Number(valorCantidad.innerHTML);
    cantidadNegativa = cantidadNegativa-1;
    cantidadNegativa = Math.max(0,cantidadNegativa)
    valorCantidad.innerHTML=cantidadNegativa;
}