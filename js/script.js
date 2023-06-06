const objeto1 = { id: 1, precio: 3200, producto: "Chomba |Black Edition|"};
const objeto2 = { id: 2, precio: 1200, producto: "Remera Estampada |White Edition|"};
const objeto3 = { id: 3, precio: 1000, producto: "Cuaderno |Black and Gradient Edition|"};
const objeto4 = { id: 4, precio: 2000, producto: "CD1 |Gradient Edition|"};
const objeto5 = { id: 5, precio: 3000, producto: "Gorra |White and Gradient Edition|"};
const objeto6 = { id: 6, precio: 3000, producto: "Gorra |B&W Edition|"};
const objeto7 = { id: 7, precio: 1500, producto: "Taza |White and Gradient Edition|" };
const objeto8 = { id: 8, precio: 1000, producto: "Cubrebocas |Black and Gradient Edition|"};
const objeto9 = { id: 9, precio: 500, producto: "Sticker |Black|"};
const objeto10 = { id: 10, precio: 500, producto: "Sticker |Gradient|"};
const objeto11 = { id: 11, precio: 500, producto: "Sticker |White|"};
const objeto12 = { id: 12, precio: 700, producto: "Pendrive |Black and Gradient Edition|"};


var lista = [];
var carrito = {lista, total: 0};

var botones = document.getElementsByClassName("ButtonProd")
//De esta manera evito tener muchas variables de distintos botones y me permite agregar o quitar con facilidad mas botones en caso de que lo necesite
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", respuestaClick)
    function respuestaClick(){
        var boton2 = this.id;
        switch (boton2) {
            case "ButtonChomba":
                agregarCarrito(objeto1)
                break;
            case "ButtonRemera":
                agregarCarrito(objeto2)
                break;
            case "ButtonCuaderno":
                agregarCarrito(objeto3)
                break;
            case "ButtonCD":
                agregarCarrito(objeto4)
                break;
            case "ButtonGorraGradient":
                agregarCarrito(objeto5)
                break;
            case "ButtonGorraBlackAndWhite":
                agregarCarrito(objeto6)
                break;
            case "ButtonTaza":
                agregarCarrito(objeto7)
                break;
            case "ButtonCubrebocas":
                agregarCarrito(objeto8)
                break;
            case "ButtonStickerBlack":
                agregarCarrito(objeto9)
                break;
            case "ButtonStickerGradient":
                agregarCarrito(objeto10)

                break;
            case "ButtonStickerWhite":
                agregarCarrito(objeto11)
                break;
            case "ButtonPendrive":
                agregarCarrito(objeto12)
                break;
        }
    }
}



function agregarCarrito(objeto){
    var j = prompt("Ingrese la cantidad")
    for (let index = 0; index < j; index++) {
        carrito.lista.push(objeto);
    }
    console.log("Has añadido: " + j + " " + objeto.producto + " al carrito" )
}


function MostrarCarrito(){
    carrito.lista.forEach(objeto => {
        carrito.total = carrito.total + objeto.precio
    });
    console.log(carrito)
}

var botonCarrito = document.getElementById("ButtonCarrito")
botonCarrito.onclick = () => {
    MostrarCarrito()
}
