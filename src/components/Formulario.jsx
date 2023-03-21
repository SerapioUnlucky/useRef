import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre = useRef();
    const apellido = useRef();
    const email = useRef();
    const miCaja = useRef();

    const mostrar = (e) => {

        e.preventDefault();

        //Inputs del formulario
        console.log(nombre.current.value);
        console.log(apellido.current.value);
        console.log(email.current.value);

        //Mi caja
        console.log(miCaja.current.value);
        let { current: caja } = miCaja;
        caja.classList.add("fondo-verde");
        caja.innerHTML = "Formulario enviado!";

    }

    return (

        <div>

            <h1>Formulario</h1>

            <div ref={miCaja} className="miCaja">

                <h2>Pruebas con useRef</h2>

            </div>

            <form onSubmit={mostrar}>

                <input type="text" placeholder='Nombre' ref={nombre} /><br />
                <input type="text" placeholder='Apellidos' ref={apellido} /><br />
                <input type="email" placeholder='Correo electronico' ref={email} /><br />

                <input type="submit" value="Enviar" />

            </form>

        </div>

    )
}
