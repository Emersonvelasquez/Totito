let celdas = document.querySelectorAll('.col-4')
let flag = true;
let arreglo = [null, null, null, null, null, null, null, null, null];
let accion = document.querySelectorAll('.accion')
let vercion1 = document.querySelectorAll('.vercion1')
let vercion2 = document.querySelectorAll('.vercion2')
let vercion3 = document.querySelectorAll('.vercion3')
let vercion4 = document.querySelectorAll('.vercion4')
let vercion5 = document.querySelectorAll('.vercion5')
let vercion6 = document.querySelectorAll('.vercion6')
let vercion7 = document.querySelectorAll('.vercion7')
let jugadoro = document.querySelector('#jugadoro')
let jugadorx = document.querySelector('#jugadorx')
let contador1 = 0;
let contador2 =0;


const validarGanador = () => {
    if ((arreglo[0] != null && arreglo[1] != null && (arreglo[0] == arreglo[1]) && arreglo[1] == arreglo[2])) {
        verificar()
        color()
    } else if ((arreglo[0] != null && arreglo[3] != null && (arreglo[0] == arreglo[3]) && arreglo[3] == arreglo[6])) {
        verificar()
        rojo2()
    } else if ((arreglo[1] != null && arreglo[4] != null && (arreglo[1] == arreglo[4]) && arreglo[4] == arreglo[7])) {
        verificar()
        rojo()
    } else if ((arreglo[2] != null && arreglo[5] != null && (arreglo[2] == arreglo[5]) && arreglo[5] == arreglo[8])) {
        verificar()
        rojo3()
    } else if ((arreglo[3] != null && arreglo[4] != null && (arreglo[3] == arreglo[4]) && arreglo[4] == arreglo[5])) {
        verificar()
        rojo4()
    } else if ((arreglo[6] != null && arreglo[7] != null && (arreglo[6] == arreglo[7]) && arreglo[7] == arreglo[8])) {
        verificar()
        rojo5()
    } else if ((arreglo[0] != null && arreglo[4] != null && (arreglo[0] == arreglo[4]) && arreglo[4] == arreglo[8])) {
        verificar()
        rojo6()
    } else if ((arreglo[2] != null && arreglo[4] != null && (arreglo[2] == arreglo[4]) && arreglo[4] == arreglo[6])) {
        verificar()
        rojo7()
    }
    else {
        filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert("empate")
        }
    }

}

const verificar = () => {
    if (flag == false) {
        alert('jugador x Ganastes ')
        contador1 = contador1 +1
        jugadorx.value=contador1
    } else {
        alert('jugador o Ganastes ')
        contador2 = contador2 +1
        jugadoro.value=contador2
    }
}

const bloquearcasilla = (coordenada) => {
    if (arreglo[coordenada] != null) {
        return true
    }
    return false
}

const marcar = (celda) => {
    let isblock = bloquearcasilla(celda.target.id)

    if (isblock) {
        alert('Disculpe , que no ve que esta marcado !!!')
    } else {
        if (flag) {
            celda.target.innerText = 'x'
            arreglo[celda.target.id] = 'x'
            flag = !flag

        } else {
            celda.target.innerText = 'o'
            arreglo[celda.target.id] = 'o'
            flag = !flag
        }
    }


    validarGanador()
}

const color = () => {
    accion.forEach((color) => {
        color.classList.toggle('bg-danger')
    })

}

const rojo = () => {
    vercion1.forEach((rojo) => {
        rojo.classList.toggle('bg-danger')
    })

}

const rojo2 = () => {
    vercion2.forEach((rojo2) => {
        rojo2.classList.toggle('bg-danger')
    })

}

const rojo3 = () => {
    vercion3.forEach((rojo3) => {
        rojo3.classList.toggle('bg-danger')
    })

}

const rojo4 = () => {
    vercion4.forEach((rojo4) => {
        rojo4.classList.toggle('bg-danger')
    })

}

const rojo5 = () => {
    vercion5.forEach((rojo5) => {
        rojo5.classList.toggle('bg-danger')
    })

}

const rojo6 = () => {
    vercion6.forEach((rojo6) => {
        rojo6.classList.toggle('bg-danger')
    })

}

const rojo7 = () => {
    vercion7.forEach((rojo7) => {
        rojo7.classList.toggle('bg-danger')
    })

}


celdas.forEach((celda) => {
    celda.addEventListener('click', marcar)

})

celdas.forEach((celda) => {
    Reiniciar.addEventListener('click', () => {
        celda.innerText = ''
        arreglo = [null, null, null, null, null, null, null, null, null];
        flag = true;
        celda.classList.remove('bg-danger')

    })
})

puntaje.addEventListener('click',() =>{
    contador1 = '';
    contador2 = '';
    jugadoro.value = '';
    jugadorx.value = '';
})


// crear un boton que cuando le damos el click que reinicie para volver a seguir a repetir el juego
