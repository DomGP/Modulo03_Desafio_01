//Precio Inicial
precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

//Botón Suma
function botonSuma(){
    let valorTotal = document.querySelector('.valor-total'); //Se declara una variable cuyo valor es la busqueda de etiqueta que contiene dicha class
    let sumaTotal = Number(valorTotal.innerHTML); //Declaro variable cuyo valor, transformando un string en número
    sumaTotal = sumaTotal+precio; //Genera la operación de suma de valores
    valorTotal.innerHTML=sumaTotal //Se establece el nuevo valor en la variable sumaTotal

    let valorCantidad = document.querySelector('.cantidad'); //Se declara varibale para encontrar elemento usando la class cantidad
    let cantidadPositiva = Number(valorCantidad.innerHTML); //Se declara variable para transformar el valor en número
    cantidadPositiva = cantidadPositiva+1; //Genera la operación de suma
    valorCantidad.innerHTML=cantidadPositiva //Se establece el nuevo valor en la variable cantidadPositiva
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