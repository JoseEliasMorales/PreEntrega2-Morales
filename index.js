let crearUsuario 
let crearContraseña;
class usuarioContraseña {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña=contraseña
    }
}
let comp
let check = true;
while(true){
    crearUsuario= prompt("Por favor elige un nombre de usuario")
    if(crearUsuario.length<4){
        alert("Tu usuario debe tener por lo menos 4 caracteres")
        comp = prompt("deseas volver a intentarlo? si/no")
        if(comp.toLowerCase()==="no"){
            check=false
            alert("Adios!")
            break
        }else if(comp.toLowerCase()==="si"){
            continue
        }else if(comp.toLowerCase()!=="si" && comp.toLowerCase()!=="no"){
            alert("Tu respuesta no es valida, recarga la pagina si quieres volver a intentar")
            check=false
            break
        }
    }
    console.log(crearUsuario)
    break
}

while(true){
    crearContraseña= prompt("Por favor elige una contraseña")
    if(crearContraseña.length<4){
        alert("Tu contraseña debe tener por lo menos 4 caracteres")
        comp = prompt("deseas volver a intentarlo? si/no")
        if(comp.toLowerCase()==="no"){
            check =false
            alert("Adios!")
            break
        }else if(comp.toLowerCase()==="si"){
            continue
        }else if(comp.toLowerCase()!=="si" && comp.toLowerCase()!=="no"){
            alert("Tu respuesta no es valida, recarga la pagina si quieres volver a intentar")
            check=false
            break
        }
    }
    alert("Su usuario y contraseña fueron creados con exito")
    console.log(crearContraseña)
    break
}

let newUsuario = new usuarioContraseña(crearUsuario, crearContraseña)

let usuario;
let contraseña;
while(check ===true){
    usuario = prompt("Por favor ingrese su usuario:")
    if(newUsuario.usuario === usuario){
        contraseña= prompt("Por favor ingrese su contraseña")
        if(newUsuario.contraseña === contraseña){
            alert("A ingresado con exito!")
            break
        }else{
            comp = prompt("Contraseña incorrecta, desea intentarlo de nuevo? si/no")
            if(comp.toLowerCase()==="si"){
                continue
            }else if(comp.toLowerCase()==="no"){
                check=false
                alert("Adios!")
                break
            }else{
                alert("Respuesta no valida, intente de nuevo")
                continue
            }
        }
    }else{
        comp = prompt("Usuario incorrecto, desea intentarlo de nuevo? si/no")
        if(comp.toLowerCase()==="si"){
            continue
        }else if(comp.toLowerCase()==="no"){
            alert("Adios!")
            break
        }else{
            alert("Respuesta no valida, intente de nuevo")
            continue
        }
    }
}

let precio
let consulta
let listaPrecios = []
let parcial
let detalle
let dolar = 197.90
let iva = 21/100
let pais = 8/100
let ganancias = 45/100
while(check===true){
    precio= parseFloat(prompt(`Hola ${newUsuario.usuario}, dime el precio del juego en dolares: ` ))
    if(isNaN(precio)){
        alert("solo ingresa numeros")
        continue
    }else{
        console.log(precio)
        listaPrecios.push(precio)
        consulta=prompt("Puedes agregar otro valor y calcular el total despues, deseas agregar otro valor? si/no")
        if(consulta.toLowerCase()==="si"){
            while(true){
                precio = parseFloat(prompt("Escribe el siguiente precio en dolares: "))
                if(isNaN(precio)){
                    alert("solo ingresa numeros")
                    continue
                }else{
                    listaPrecios.push(precio)
                    console.log(precio)
                    consulta=prompt("Quieres agregar otro precio? si/no")
                    if(consulta.toLowerCase()==="si"){
                        continue
                    }else if(consulta.toLowerCase()!=="si" && consulta.toLowerCase()!=="no"){
                        alert("lo ingresado es invalido, se calculara el precio total hasta el momento")
                        break
                    }else{
                        break
                    }
                }
            }
        }else if(consulta.toLowerCase()==="no"){
            detalle = listaPrecios.map((a,b)=>{
                return `${b+1}° $${a} `
            })
            console.log(detalle)
            alert(`Los precios a calcular son los siguientes ${detalle}`)
            preciofinal()
            break
        }else if(consulta.toLowerCase()!=="si" && consulta.toLowerCase()!=="no"){
            alert("lo ingresado no es valido, se calculara el precio total hasta el momento")
            
        }
        }
    detalle = listaPrecios.map((a,b)=>{
        return `${b+1}° $${a} `
    })
    console.log(detalle)
    alert(`Los precios a calcular son los siguientes ${detalle}`)
    preciofinal()
    break
}

function preciofinal(){
    parcial = listaPrecios.map(a=>(parseFloat(a)*iva)+ (parseFloat(a * pais)+(parseFloat(a * ganancias)+ parseFloat(a)))*dolar)
    total = parcial.reduce((a,b)=>a+b).toFixed(2)
    console.log(total);
    alert("El precio total de tus juegos es: $"+total)
}


