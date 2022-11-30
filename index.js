
const usuario = "feli@"
const contrasenia = 123

let nombre = prompt("Ingrese su nombre")
let usuarioIngresado = prompt(`Ingrese nombre de usuario`)
let contraseniaIngresada = prompt(`Ingrese su contraseña`)


if (usuario != usuarioIngresado && contrasenia != contraseniaIngresada)
        alert("Datos incorrectos, verificar.") 
else
    if (usuario != usuarioIngresado)
            alert("Usuario incorrecto")
    else
        if (contrasenia != contraseniaIngresada)
            alert("Contraseña incorrecta")
        else 
        alert(`Bienvenido ${nombre}`)


let tieneArroba
let i = 0
while(i < usuario.length && tieneArroba) {
    if (i === "@") 
        tieneArroba = true
    i++
}

if (tieneArroba === false)
    prompt("Ingrese nuevo email")
    else
    alert("Tiene arroba")
