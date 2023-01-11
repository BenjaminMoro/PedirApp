/* Variables para NavBar */
let abrir_navBar = document.querySelector(".activar_menu")
let cerrar_navBar = document.querySelector(".cerrar_navBar")
let navBar = document.querySelector(".desplegable")
let filtro = document.querySelector(".filtro")
let main = document.querySelector(".main")

/* Variables para HORARIOS */
let info_card = document.querySelector(".info_card")
let info_card_activo = document.querySelector(".cardInfo")
let cerrar_info_card = document.querySelector(".cerrar")

/* Variables para Ubicación */
let ubi_card = document.querySelector(".info_ubi")
let ubi_card_activo = document.querySelector(".cardUbicacion")
let cerrar_ubi_card = document.querySelector(".cerrarUbi")


/* Abrir y cerrar NavBar */
abrir_navBar.addEventListener("click", () => {
    main.classList.remove("main_cerrar")
    navBar.classList.remove("desplegableDesactivo")
    navBar.classList.add("desplegableActivo")
    filtro.classList.add("filtroActivo")
    cerrar_navBar.classList.add("cerrar_navBarActivo")
    main.classList.add("main_desplazamiento")  
    
})

cerrar_navBar.addEventListener("click", () => {
    navBar.classList.add("desplegableDesactivo")
    navBar.classList.remove("desplegableActivo")
    filtro.classList.remove("filtroActivo")
    cerrar_navBar.classList.remove("cerrar_navBarActivo")
    main.classList.add("main_cerrar")
})

filtro.addEventListener("click", () => {
    navBar.classList.add("desplegableDesactivo")
    navBar.classList.remove("desplegableActivo")
    filtro.classList.remove("filtroActivo")
    cerrar_navBar.classList.remove("cerrar_navBarActivo")
    main.classList.add("main_cerrar")
})


/* Abrir y cerrar Horarios */
info_card.addEventListener("click", () => {
    info_card_activo.classList.add("cardInfoActivo")
    filtro.classList.add("filtroInfoActivo")

    navBar.classList.add("desplegableDesactivo")
    navBar.classList.remove("desplegableActivo")
    filtro.classList.remove("filtroActivo")
    cerrar_navBar.classList.remove("cerrar_navBarActivo")
    main.classList.add("main_cerrar")
})

cerrar_info_card.addEventListener("click", () => {
    info_card_activo.classList.remove("cardInfoActivo")
    filtro.classList.remove("filtroInfoActivo")
})

/* Abrir y cerrar Ubicación */
ubi_card.addEventListener("click", () => {
    ubi_card_activo.classList.add("cardUbicacionActivo")
    filtro.classList.add("filtroInfoActivo")

    navBar.classList.add("desplegableDesactivo")
    navBar.classList.remove("desplegableActivo")
    filtro.classList.remove("filtroActivo")
    cerrar_navBar.classList.remove("cerrar_navBarActivo")
    main.classList.add("main_cerrar")
})

cerrar_ubi_card.addEventListener("click", () => {
    ubi_card_activo.classList.remove("cardUbicacionActivo")
    filtro.classList.remove("filtroInfoActivo")
})

/* ------------------------------------------------------------------ */
/* Tomar los datos de la Card a la que se le hace click para poder mostrar su datos en producto */
/* Variables */
let boton_card = document.querySelectorAll(".card")

/* Funciones */

let obj_producto = ""

function agregar_al_producto(e){
    console.log(e)

    let texto = e.target;
    let link = texto.parentNode
    let img = link.firstElementChild
    let clase = link.parentNode.parentNode
    let precio = link.parentNode.firstElementChild

    if(texto.classList != "text_card"){
        texto = link.lastElementChild
    }

    let nombre_producto = texto.textContent
    let img_producto = img.src
    let clase_producto = clase.classList[1]
    let precio_producto = precio.textContent

    let producto = {
        nombre: nombre_producto,
        img: img_producto,
        clase: clase_producto, 
        precio: precio_producto,
    }

    /* Guardando en LocalStorage */
    let producto_json = JSON.stringify(producto);
    localStorage.setItem("producto", producto_json)

    return obj_producto = producto

 /* recuperando_producto = localStorage.getItem("producto")
    recuperando_producto = JSON.parse(recuperando_producto) */
}

/* Agregar evento a todos */
for(let boton of boton_card){
    boton.addEventListener("click", agregar_al_producto)
    console.log(agregar_al_producto)
}

/* -------------------------------------------------------------- */
/* Modificar el HTML de la pagina Producto, segun su tipo */
/* Funcion que todos obtienen */
function tipo_producto(){
    console.log(obj_producto)

    recuperando_producto = localStorage.getItem("producto")
    recuperando_producto = JSON.parse(recuperando_producto)

    let div = document.createElement("div")
    div.innerHTML = `<img src="${obj_producto.img}" class="card1">`

    div.classList = "card_producto"

    let lugar_img = document.querySelector(".img_producto")
    lugar_img.innerHTML = `<div class="subtittle-producto">
                            <div class="subtittle-producto">
                                <a href="../index.html" class="flecha"><img src="../img/flecha_atras.png" alt=""></a>
                            </div>
                            <h3 class="text_producto">${recuperando_producto.nombre}</h3>
                            </div>`

    let lugar_precio = document.querySelector(".precio_poner")
    lugar_precio.innerHTML = `<p>$${recuperando_producto.precio}</p>`

    lugar_img.append(div)
}

/* Funciones particulares */
let check1 = document.querySelector(".check1")
let check2 = document.querySelector(".check2")
let check3 = document.querySelector(".check3")
let check4 = document.querySelector(".check4")
let check5 = document.querySelector(".check5")



function tipo_lomo(){
    check3.textContent = "Huevo"
    check4.textContent = "Jamon"
    check5.textContent = "Queso"
}

function tipo_papa(){
    check1.textContent = "Chicas"
    check2.textContent = "Medianas"
    check3.textContent = "Grandes"

    check4.parentNode.remove()
    check5.parentNode.remove()

    let tittle = document.querySelector(".opciones_producto")
    tittle.firstElementChild.textContent = "Selecciona el tamaño que quieras:"
}

function tipo_bebida(){
    check1.textContent = "Chica"
    check2.textContent = "Mediana"
    check3.textContent = "Grande"

    check4.parentNode.remove()
    check5.parentNode.remove()

    let tittle = document.querySelector(".opciones_producto")
    tittle.firstElementChild.textContent = "Selecciona el tamaño que quieras:"
}
/* Obteniendo datos y cargando funcion depende cual */
recuperando_producto = localStorage.getItem("producto")
recuperando_producto = JSON.parse(recuperando_producto)

let tipo_comida = recuperando_producto.clase

let index_pag = document.querySelector(".main")

if(index_pag.classList[1] == "index"){
    tipo_comida = ""
}

if(tipo_comida == "Hamburguesa"){
    tipo_producto()
}

if(tipo_comida == "Lomito"){
    tipo_producto()
    tipo_lomo()
}

if(tipo_comida == "Papas"){
    tipo_producto()
    tipo_papa()
}

if(tipo_comida == "Bebidas"){
    tipo_producto()
    tipo_bebida()
}

/* Poder sumar y restar cantidad, y calcular el precio*/

if(index_pag.classList[1] != "index"){
    let botones = document.querySelector(".cantidad")

    let btn_sumar = botones.firstElementChild
    let btn_restar = botones.lastElementChild
    let numero = document.querySelector(".contador")
    let btn_agregar = document.querySelector(".btn_agregar")
    btn_agregar = btn_agregar.firstElementChild

    precio_total = 0

    function actualizar_precio(){
        recuperando_producto = localStorage.getItem("producto")
        recuperando_producto = JSON.parse(recuperando_producto)

        recuperando_producto.precio = parseInt(recuperando_producto.precio) * numero.textContent

        let lugar_precio = document.querySelector(".precio_poner")
        lugar_precio.innerHTML = `<p>$${recuperando_producto.precio}</p>`

        precio_total = recuperando_producto.precio

        return precio_total
    }

    let array = []

    function agregar_carro(){
        recuperando_producto = localStorage.getItem("producto")
        recuperando_producto = JSON.parse(recuperando_producto)

        array.push([recuperando_producto.clase, recuperando_producto.nombre , precio_total])

        console.log(array)

        let array_json = JSON.stringify(array);
        localStorage.setItem("array", array_json)
    }
    btn_sumar.addEventListener("click", () =>{
        numero.textContent = parseInt(numero.textContent) + 1
        actualizar_precio()
    })

    btn_restar.addEventListener("click", () =>{
        if (parseInt(numero.textContent) > 1)
            numero.textContent = parseInt(numero.textContent) - 1
            actualizar_precio()
    })

    btn_agregar.addEventListener("click", () =>{

        agregar_carro()
    })
}

/* Mostrar el precio de lo agregado */

function precio_footer(){
    recuperando_precio = localStorage.getItem("precio")
    recuperando_precio = JSON.parse(recuperando_precio)

    recuperando_total = localStorage.getItem("precio_total")
    recuperando_total = JSON.parse(recuperando_total)

    recuperando_total = recuperando_total + recuperando_precio

    let footer = document.querySelector(".footer")
    footer.lastElementChild.textContent = "$" + recuperando_total
}

if(index_pag.classList[1] == "index"){
    precio_footer()
}

/* Abrir y cerrar la parte del pedido total */
let datos_carrito = document.querySelector(".agregar_datos_carrito")

if(index_pag.classList[1] == "index"){
    recuperando_producto = localStorage.getItem("producto")
    recuperando_producto = JSON.parse(recuperando_producto)

    recuperando_array = localStorage.getItem("array")
    recuperando_array = JSON.parse(recuperando_array)

    console.log(recuperando_array)

    for(let i = 0; i < recuperando_array.length ; i = i+1){

        console.log(recuperando_array[i][0])

        let carro = document.createElement("tr")
            carro.classList = "producto_carrito"
            carro.innerHTML = ` <td>${recuperando_array[i][0]} ${recuperando_array[i][1]}</td>
                                <td>$${recuperando_array[i][2]}</td>
                                <button class="btn_borrar"></button>`

            datos_carrito.append(carro)
    }
}

let footer = document.querySelector(".footer")
let ver_pedido = footer.firstElementChild

let pedido_card = document.querySelector(".pedido")
let cerrar_pedido = document.querySelector(".cerrar_pedi")

ver_pedido.addEventListener("click", () =>{
    pedido_card.classList.remove("pedido_desactivo")
    filtro.classList.add("filtroInfoActivo")
    cerrar_pedido.classList.add("cerrar_pedido")
})

cerrar_pedido.addEventListener("click", () =>{
    pedido_card.classList.add("pedido_desactivo")
    filtro.classList.remove("filtroInfoActivo")
    cerrar_pedido.classList.remove("cerrar_pedido")
})