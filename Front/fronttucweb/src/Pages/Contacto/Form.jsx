import React from 'react';
import { useForm } from 'react-hook-form';
import "../../Css/Style.css"


const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <>
            <br /> <br /> <br />
            <p className="intro">
                Si quieres conocer más acerca de nuestro trabajo o te interesa contratar alguno de nuestros servicios
                completa el
                siguiente formulario y nos pondremos en contacto contigo a la brevedad.

                <br /> <br />
                ¡No olvides contarnos brevemente acerca de tu marca, historia y rubro para poder brindarte un mejor
                asesoramiento!
            </p>

            <br /> <br /> <br />

            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <label> Nombre </label>
                <input type="text"  {...register("Nombre")} placeholder="José..." />
                
                <br />

                <label> Correo electrónico*</label>
                <input type="text" placeholder="joseperez@gmail.com" {...register("Correo", { pattern: /\S+@\S+\.\S+/ })} />
                {errors.Correo?.type === "pattern" && <p> El formato del correo electrónico es incorrecto </p>}
                
                <br />

                <label> Nombre de tu empresa*</label>
                <input type="text" placeholder="Mundo dulce"  {...register("Empresa", { required: true })} />
                {errors.Empresa?.type === 'required' && <p> Este campo es requerido</p>}
                
                <br />

                <label> Rubro*</label>
                <input type="text" placeholder="Pastelería" {...register("Rubro", { required: true })} />
                {errors.Rubro?.type === 'required' && <p> Este campo es requerido</p>}

                <br /><br />

                <textarea placeholder="Escribe tu mensaje acá..." {...register("Mensaje", { required: true })} cols="70" rows="13" className="area" />
                
                <br />

                <input type="submit" value="Enviar" id="botonenv" />
            </form>
            <br /> <br />  <br /> <br />


        </>
    )
}

export default Form;