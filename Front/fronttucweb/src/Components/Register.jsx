import { useState } from "react";
import { register } from "../service/apiCall";
import "../Css/Registro.css"


const Register = () => {
    const [formValues, setFormValues] = useState({
        empresa: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const saveUser = () => {
            register(formValues).then(() => {
                console.log("¡Registrado!");
            }).catch((error) => alert("Error al registrar"));
        }
        saveUser();
    }

    return (
        <div className="containerr">
            <div className="row card-login">
                <div className="col-12 col-md-4">
                    <div className="cardd">
                        <div classname='card-body'>
                            <h4 classname="card-title text-center"> REGISTRO </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>
                                        <b> Empresa </b>
                                    </label>
                                    <input
                                        className="form-control"
                                        placeholder="empresa o emprendiemiento"
                                        type="text"
                                        name="empresa"
                                        value={formValues.empresa}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb3">
                                    <label>
                                        <b> Email </b>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="example@example.com"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>
                                        <b> Contraseña </b>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="1234"
                                        valuer={formValues.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-contect-end">
                                    <button className="btn btn-coin"> Registrarse </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register; 