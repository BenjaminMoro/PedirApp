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
function agregar_al_producto(e){
    console.log(e)

    let texto = e.target;
    let link = texto.parentNode
    let img = link.firstElementChild
    let clase = link.parentNode

    if(texto.classList != "text_card"){
        texto = link.lastElementChild
    }

    let nombre_producto = texto.textContent
    let img_producto = img.src
    let clase_producto = clase.classList[1]

    let producto = {
        nombre: nombre_producto,
        img: img_producto,
        clase: clase_producto, 
    }

    /* Guardando en LocalStorage */
    let producto_json = JSON.stringify(producto);
    localStorage.setItem("producto", producto_json)

    /* recuperando_producto = localStorage.getItem("producto")
    recuperando_producto = JSON.parse(recuperando_producto) */
}

/* Agregar evento a todos */
for(let boton of boton_card){
    boton.addEventListener("click", agregar_al_producto)
}

/* -------------------------------------------------------------- */
/* Modificar el HTML de la pagina Producto, segun su tipo */
/* Funcion que todos obtienen */
function tipo_producto(){
    recuperando_producto = localStorage.getItem("producto")
    recuperando_producto = JSON.parse(recuperando_producto)

    let div = document.createElement("div")
    div.innerHTML = `<img src="${recuperando_producto.img}" class="card1">`

    let lugar_img = document.querySelector(".img_producto")
    lugar_img.innerHTML = `<h3 class="text_producto">${recuperando_producto.nombre}</h3>`

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

if(tipo_comida == "main_hamburguesas"){
    tipo_producto()
}

if(tipo_comida == "main_lomitos"){
    tipo_producto()
    tipo_lomo()
}

if(tipo_comida == "main_papas"){
    tipo_producto()
    tipo_papa()
}

if(tipo_comida == "main_bebidas"){
    tipo_producto()
    tipo_bebida()
}