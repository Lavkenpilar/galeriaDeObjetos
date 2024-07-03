const iconos = [
    { icono: "🚗 ", descripcion: "Auto" },
    { icono: "🤖 ", descripcion: "Robot" },
    { icono: " 👻", descripcion: "Fantasma" },
    { icono: "👽 ", descripcion: "Alien" },
    { icono: "🦷 ", descripcion: "Diente" },
    { icono: "🕹", descripcion: "Joystick" }
    ]

    const iconos2 = [
        { icono: "🚗 ", descripcion: "Auto" },
        { icono: "🤖 ", descripcion: "Robot" },
        { icono: " 👻", descripcion: "Fantasma" },
        { icono: "👽 ", descripcion: "Alien" },
    ]

    const generarGaleriaIconos = (id, iconos) => {
const sectionIconos = document.querySelector(id)
let template = ''
for (let icono of iconos){
    template+=/*html*/`
    <div class = "card">
    <span>${icono.icono}</span>
    <p>${icono.descripcion}</p>
    </div>`
    }

sectionIconos.innerHTML=template
}

generarGaleriaIconos("#iconos", iconos)
generarGaleriaIconos("#iconos2", iconos2)