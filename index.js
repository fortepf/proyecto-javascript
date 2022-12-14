                        // PreEntrega 1 //

// const usuario = "feli@"
// const contrasenia = 123

// let nombre = prompt("Ingrese su nombre")
// let usuarioIngresado = prompt(`Ingrese nombre de usuario`)
// let contraseniaIngresada = prompt(`Ingrese su contraseña`)


// if (usuario != usuarioIngresado && contrasenia != contraseniaIngresada)
//         alert("Datos incorrectos, verificar.") 
// else
//     if (usuario != usuarioIngresado)
//             alert("Usuario incorrecto")
//     else
//         if (contrasenia != contraseniaIngresada)
//             alert("Contraseña incorrecta")
//         else 
//         alert(`Bienvenido ${nombre}`)


// let tieneArroba
// let i = 0
// while(i < usuario.length && tieneArroba) {
//     if (i === "@") 
//         tieneArroba = true
//     i++
// }

// if (tieneArroba === false)
//     prompt("Ingrese nuevo email")
//     else
//     alert("Tiene arroba")

//


                        // PreEntrega 2 // 

const videoJuegos = [
    {
        id: 11,
        nombre: "God of War",
        precio: 59.99,
        descripción: "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.",
        categoría: "Acción/Aventura",
        oferta: false,
    },
    {
        id: 22,
        nombre: "New World",
        precio: 17.50,
        descripción: "Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino como un aventurero que naufraga en las costas de la isla sobrenatural de Aetérnum. Infinitas oportunidades para luchar, recolectar recursos y forjar equipo te esperan entre la naturaleza salvaje y las ruinas de la isla.",
        categoría: "MMORPG/Mundo Abierto",
        oferta: true,
    },
    {
        id: 33,
        nombre: "Red Dead Redemption 2",
        precio: 30.00,
        descripción: "Arthur Morgan y la banda de Van der Linde son forajidos en busca y captura. Mientras los agentes federales y los mejores cazarrecompensas de la nación les pisan los talones, la banda deberá abrirse camino por el abrupto territorio del corazón de América y sobrevivir a base de robos y peleas.",
        categoría: "Mundo Abierto/Vaqueros",
        oferta: true,
    },
    {
        id: 44,
        nombre: "Hunt: Showdown",
        precio: 20.00,
        descripción: "Corre el año 1895, y eres un Cazador con la misión de eliminar a los salvajes monstruos de pesadilla que han infestado el Pantano de Luisiana. Juega en solitario o en equipos de dos o tres, mientras buscas pistas que te ayuden a rastrear a tu objetivo y compite con otros Cazadores que buscan la misma recompensa.",
        categoría: "Mundo Abierto/Táctico",
        oferta: true,
    },
    {
        id: 55,
        nombre: "Dead by Daylight",
        precio: 15.99,
        descripción: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados, torturados y asesinados.",
        categoría: "Supervivencia/Terror Multijugador",
        oferta: false,
    },
    {
        id: 66,
        nombre: "Counter Strike: Global Offensive",
        precio: 12.50,
        descripción: "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años.",
        categoría: "FPS",
        oferta: false,
    },
    {
        id: 77,
        nombre: "FIFA 23",
        precio: 59.99,
        descripción: "EA SPORTS™ FIFA 23 lleva el juego del mundo al campo, con la tecnología HyperMotion2 que ofrece una experiencia de juego aún más realista, tanto la FIFA World Cup™ masculina como la femenina que llegará al juego más adelante durante la temporada con actualizaciones tras el lanzamiento",
        categoría: "Deportes/Fútbol",
        oferta: false,
    },
    {
        id: 88,
        nombre: "A Way Out",
        precio: 30.00,
        descripción: "Una aventura exclusivamente cooperativa en la que te metes en la piel de uno de los dos reclusos protagonistas en su intrépida huida de la cárcel",
        categoría: "Cooperativo",
        oferta: false,
    },
    {
        id: 99,
        nombre: "It Takes Two",
        precio: 25.00,
        descripción: "descubre una conmovedora y emotiva historia sobre las dificultades de llevarse bien. Ayuda a Cody y May a superar sus diferencias.",
        categoría: "Cooperativo",
        oferta: true,
    },
    {
        id: 100,
        nombre: "Sea of Thieves",
        precio: 15.00,
        descripción: "Sea of Thieves ofrece la experiencia de piratas definitiva, desde la navegación y el combate hasta la exploración y el saqueo: todo para disfrutar de la vida pirata y convertirte en leyenda. No hay funciones establecidas, tienes total libertad para enfrentarte al mundo y a los demás jugadores como desees.",
        categoría: "Mundo Abierto/Piratas",
        oferta: false,
    },
    {
        id: 110,
        nombre: "Resident Evil Village",
        precio: 40.00,
        descripción: "Ambientada unos años después de los escalofriantes sucesos del aclamado Resident Evil 7: Biohazard, esta flamante nueva historia arranca con Ethan Winters y su esposa Mia viviendo plácidamente en un nuevo lugar, lejos de pesadillas pasadas.",
        categoría: "Supervivencia/Terror",
        oferta: true,
    },
    {
        id: 120,
        nombre: "Anno 1800",
        precio: 45.00,
        descripción: "Te damos la bienvenida al comienzo de la Era Industrial. El camino que elijas determinará el futuro de tu mundo. ¿Innovarás o explotarás al pueblo? ¿Conquistarás o liberarás a los oprimidos? El mundo te recordará, pero la forma en que lo haga solo depende de ti.",
        categoría: "Estrategia",
        oferta: false,
    },
    {
        id: 130,
        nombre: "Cities: Skylines",
        precio: 15.00,
        descripción: "Cities: Skylines presenta un enfoque moderno para el clásico simulador urbano. Introduce nuevos elementos a la mecánica de juego para plasmar la emoción y las complicaciones de mantener una ciudad de verdad, ampliando al mismo tiempo algunos de los temas ya conocidos de la experiencia del desarrollo urbanístico.",
        categoría: "Construcción de ciudades",
        oferta: true,
    },
    {
        id: 140,
        nombre: "Call of Duty: Modern Warfare II",
        precio: 70.00,
        descripción: "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.",
        categoría: "FPS",
        oferta: false,
    },
    {
        id: 150,
        nombre: "Warhammer 40,000: Darktide",
        precio: 20.00,
        descripción: "Recupera Tertium de las hordas de enemigos sanguinarios en este despiadado juego de disparos y acción salvaje. Warhammer 40,000: Darktide es la nueva experiencia cooperativa del galardonado equipo creador de la saga Vermintide.",
        categoría: "Aventura",
        oferta: true,
    }
]

// APLICO DESCUENTO A PRODUCTOS //

const descuento = JSON.parse(JSON.stringify(videoJuegos.map(producto => {
    return producto
})))

descuento.forEach(producto => {
    if(producto.oferta === true) {
        producto.precio = producto.precio * 0.75
    }
})

// console.log(descuento)


// ORDEN MANERA ASCENDENTE //

const videoJuegosAscendente = [...videoJuegos].sort((a, b) => {
    return a.id - b.id
})

// console.log(videoJuegosAscendente)


// ORDEN MANERA DESCENDENTE //

const videoJuegosDescendente = [...videoJuegos].sort((a, b) => {
    return b.id - a.id
})

// console.log(videoJuegosDescendente)


// A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

function mostrarOfertas () {
    confirm("Quieres ver las ofertas de la tienda?") 
    }

mostrarOfertas()


// BUSCAR PRODUCTO DESEADO //

function buscarProducto () {
    let buscador = prompt("Ingrese nombre de producto que desea buscar").toUpperCase()

    let productoBuscado = videoJuegos.find (producto => producto.nombre.toUpperCase() === buscador)
        if (productoBuscado === undefined) {
            console.log("El producto que ingresó no se encuentra disponible")
        } else {
            console.log(productoBuscado)
        }
}

// buscarProducto()
