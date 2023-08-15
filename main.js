let opciones

let catalogo = "1- Nike Air Huarache Run Ultra $72.\n2- Nike AirForce $77.\n3- ADIDAS SUPERNOVA 2 $80.\n4- ADIDAS Fluidflow $87.\n5- ADIDAS Sobakov $99"

let metodosEnvios = "1- Correo Argentino.\n2- OCA.\n3- Andreani"

const suma = (a,b) => a + b

const iva = x => x * 0.21



do {
    opciones = parseInt(prompt("Elija una opción:\n1- Catálogo.\n2- Calcular IVA\n3- Consultar presupuesto.\n4- Metodos de envío.\n\n Pulse 0 para cancelar"));
    switch (opciones) {
        case 0:
            alert("Gracias por su consulta. Vuelva pronto.");
            break;
        case 1:
            alert("Este es nuestro catálogo con sus respectivos precios en dólares:");
            mostrarCatalogo();
            break;
        case 2:
            alert("Ingrese el producto que desea:");
            let codigoProducto = parseInt(prompt("Ingrese el codigo del producto"));
            calcularIva(codigoProducto);
            break;
        case 3:
            alert("Ingrese su presupuesto en dolares:");
            let dinero = parseInt(prompt("Ingrese su presupuesto"));
            calculoPresupuesto(dinero);
            break;
        case 4:
            alert("Los métodos de envío disponibles son:");
            mostrarEnvios();
            break;
        default:
            alert("Error")
            break;
    }
}
while (opciones !== 0);

function mostrarEnvios(){
    alert(metodosEnvios);
}


function mostrarCatalogo() {
    alert(catalogo)
}

function calcularIva(codigo) {
    switch (codigo) {
        case 1:
            let precioProducto1 = 72
            let nuevoPrecio1 = suma(precioProducto1, iva(precioProducto1));
            alert(`El total del producto mas iva es de  \$${nuevoPrecio1}`);
            break;
        case 2:
            let precioProducto2 = 77
            let nuevoPrecio2 = suma(precioProducto2, iva(precioProducto2));
            alert(`El total del producto mas iva es de  \$${nuevoPrecio2}`);
            break;
        case 3:
            let precioProducto3 = 80
            let nuevoPrecio3 = suma(precioProducto3, iva(precioProducto3));
            alert(`El total del producto mas iva es de  \$${nuevoPrecio3}`);
            break;
        case 4:
            let precioProducto4 = 87
            let nuevoPrecio4 = suma(precioProducto4, iva(precioProducto4));
            alert(`El total del producto mas iva es de  \$${nuevoPrecio4}`);
            break;
        case 5:
            let precioProducto5 =99
            let nuevoPrecio5 = suma(precioProducto5, iva(precioProducto5));
            alert(`El total del producto mas iva es de  \$${nuevoPrecio5}`);
            break;
        default:
            alert("Código no valido");
        
    }   
}

function calculoPresupuesto(dinero) {
    if (dinero >= 0 && dinero < 72 ) {
        alert("El producto mas barato sale $72");
    }
    else if(dinero >= 72 && dinero < 77 ) {
        alert("Con este dinero podes comprarte unas Nike Air Huarache Run Ultra");
        alert(`y te sobran \$${dinero - 72}`);
    }
    
    else if(dinero >= 77 && dinero < 80 ) {
        alert("Con este dinero podes comprarte unas Nike AirForce");
        alert(`y te sobran \$${dinero - 77}`);
    }
    
    else if(dinero >= 80 && dinero < 87 ) {
        alert("Con este dinero te compras unas ADIDAS SUPERNOVA 2");
        alert(`y te sobran \$${dinero - 80}`);
    }
    
    else if(dinero >= 87 && dinero < 90 ) {
        alert("Con este dinero te compras unas ADIDAS Fluidflow");
        alert(`y te sobran \$${dinero - 87}`);
    }
    
    else if(dinero >= 90 && dinero < 100 ) {
        alert("Con este dinero te compras unas ADIDAS Sobakov");
        alert(`y te sobran \$${dinero - 90}`);
    }
    
    else {
        alert("Te compras cualquier zapatilla de la tienda");
    }

}