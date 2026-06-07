let actividades = {};

let objetoActual = null;
let completadas = 0;
let totalActividades = 0;

const actividad = "casa";

const operacionEl = document.getElementById("operacion");
const mensajeEl = document.getElementById("mensaje");
const respuestaEl = document.getElementById("respuesta");
const contadorEl = document.getElementById("contador");

window.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {

    await cargarSVG();
    await cargarJSON();

    prepararFiguras();

    actualizarContador();
}

async function cargarSVG() {

    const respuesta =
        await fetch(`actividades/${actividad}.svg`);

    const svgTexto =
        await respuesta.text();

    document
        .getElementById("svg-container")
        .innerHTML = svgTexto;
}

async function cargarJSON() {

    const respuesta =
        await fetch(`actividades/${actividad}.json`);

    actividades = await respuesta.json();

    totalActividades =
        Object.keys(actividades).length;
}

function prepararFiguras() {

    const svg =
        document.querySelector("svg");

    Object.keys(actividades)
        .forEach(id => {

            const figura =
                document.getElementById(id);

            if (!figura) return;

            figura.classList.add("interactivo");
        });

    svg.addEventListener("click", e => {

        const id = e.target.id;

        if (!actividades[id]) return;

        seleccionarFigura(id);
    });
}

function seleccionarFigura(id) {

    const figura =
        document.getElementById(id);

    if (figura.classList.contains("pintado"))
        return;

    document
        .querySelectorAll(".seleccionado")
        .forEach(el =>
            el.classList.remove("seleccionado"));

    figura.classList.add("seleccionado");

    objetoActual = {
        id,
        ...actividades[id]
    };

    operacionEl.textContent =
        objetoActual.operacion;

    mensajeEl.textContent = "";

    respuestaEl.focus();
}

function validar() {

    if (!objetoActual) {

        alert("Seleccione una figura");

        return;
    }

    const respuesta =
        parseInt(respuestaEl.value);

    if (isNaN(respuesta))
        return;

    if (respuesta === objetoActual.resultado) {

        const figura =
            document.getElementById(
                objetoActual.id
            );

        figura.style.fill =
            objetoActual.color;

        figura.classList.add("pintado");

        figura.classList.remove(
            "seleccionado"
        );

        completadas++;

        actualizarContador();

        mensajeEl.textContent =
            "✅ Correcto";

        respuestaEl.value = "";

        operacionEl.textContent =
            "Selecciona otra figura";

        objetoActual = null;

        verificarFin();

    } else {

        mensajeEl.textContent =
            "❌ Incorrecto";
    }
}

respuestaEl.addEventListener(
    "keydown",
    e => {

        if (e.key === "Enter") {

            validar();
        }
    }
);

function actualizarContador() {

    contadorEl.textContent =
        `${completadas}/${totalActividades}`;
}

function verificarFin() {

    if (
        completadas === totalActividades
    ) {

        operacionEl.textContent =
            "🎉 Actividad completada";

        mensajeEl.textContent =
            "Excelente trabajo";
    }
}