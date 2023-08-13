import './FormCompra.css'
import { useRef, useState } from 'react';

function FormCompra() {
    const nombre = useRef()
    const apellido = useRef()
    const email = useRef()
    const celular = useRef()
    const direccion = useRef()
    const cP = useRef()

    const [datosUsuario, setDatosUsuario] = useState({})
    console.log(datosUsuario)

    function handleForm(e){
        e.preventDefault();

        const dataUser = {
            nombre: nombre.current.value,
            apellido: apellido.current.value,
            email: email.current.value,
            celular: celular.current.value,
            direccion: direccion.current.value,
            codigoP: cP.current.value,
        };
        setDatosUsuario(dataUser)
        e.target.reset()
    }

    return (
        <form onSubmit={handleForm} className='form'>
            <fieldset className='campos-form'>
                <label htmlFor="name">Nombre: <span>*</span> </label>
                <input type="text" id='name' placeholder='Andrés' ref={nombre}/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="surname">Apellido: <span>*</span> </label>
                <input type="text" id='surname' placeholder='Gonzalez' ref={apellido}/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="mail">Email: <span>*</span> </label>
                <input type="mail" id='mail' placeholder='Email@gmail.com' ref={email}/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="tel">Celular: <span>*</span> </label>
                <input type="number" id='tel' placeholder='+110011223344' ref={celular}/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="direccion">Dirección: <span>*</span> </label>
                <input type="text" id='direccion' placeholder='Av Independecia...' ref={direccion}/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="codigoP">Código Postal: <span>*</span> </label>
                <input type="number" id='codigoP' placeholder='1866' ref={cP}/>
            </fieldset>
            <input className='enviar' type="submit" />
        </form>
    )
}

export default FormCompra