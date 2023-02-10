import { login } from "../service/apiCall";
const { useState } = require("react");


const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const getUser = () => {
            login(formValues).then(() => {
                console.log("Logueado existosamente");
            }).catch((error) => alert("Error al loguearse"));
        }
        getUser();
    }

    return (
        <div className="containerr">
            <div className="row card-login">
                <div className="col-12 col-md-4">
                    <div className="cardd">
                        <div classname='card-body'>
                            <h4 className="card-title text-center"> INICIAR SESIÓN</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3" >
                                    <label>
                                        <b> Email </b>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="example@example.com.ar"
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
                                        valuer={formValues.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-contect-end">
                                    <button className="btn btn-coin"> Iniciar Sesión </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login; 