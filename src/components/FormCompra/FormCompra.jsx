import React, { useRef, useState } from 'react';
import './FormCompra.css'
import { toast } from 'react-toastify';

function FormCompra({ onSubmit }) {
    const nombre = useRef();
    const apellido = useRef();
    const email = useRef();
    const celular = useRef();
    const direccion = useRef();
    const cP = useRef();

    function handleForm(e) {
        e.preventDefault();

        const dataUser = {
            nombre: nombre.current.value,
            apellido: apellido.current.value,
            email: email.current.value,
            celular: celular.current.value,
            direccion: direccion.current.value,
            codigoP: cP.current.value,
        };
        onSubmit(dataUser);
        toast.info('Estamos verificando tu infomación', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        e.target.reset()
    }

    return (
        <form onSubmit={handleForm} className='form'>
            <fieldset className='campos-form'>
                <label htmlFor="name">Nombre: <span>*</span> </label>
                <input type="text" id='name' placeholder='Andrés' ref={nombre} required/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="surname">Apellido: <span>*</span> </label>
                <input type="text" id='surname' placeholder='Gonzalez' ref={apellido} required/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="mail">Email: <span>*</span> </label>
                <input type="email" id='mail' placeholder='Email@gmail.com' ref={email} required/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="tel">Celular: <span>*</span> </label>
                <input type="number" id='tel' placeholder='+110011223344' ref={celular} required/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="direccion">Dirección: <span>*</span> </label>
                <input type="text" id='direccion' placeholder='Av Independecia...' ref={direccion} required/>
            </fieldset>
            <fieldset className='campos-form'>
                <label htmlFor="codigoP">Código Postal: <span>*</span> </label>
                <input type="number" id='codigoP' placeholder='1866' ref={cP} required/>
            </fieldset>
            <input className='enviar' type="submit" value='Finalizar Compra'/>
        </form>
    )
}

export default FormCompra