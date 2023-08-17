import React,{ useState } from "react";

export const Form = ({ onAddUser }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [mandatoryError, setMandatoryError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length < 3 || name.startsWith(" ")) {
            setNameError("El nombre debe tener al menos 3 caracteres y no puede comenzar con espacio");
            return;
        }

        if (lastName.trim().length < 6 ) {
            setLastNameError("El apellido debe tener al menos 6 caracteres");
            return;
        }

        if (!email.includes("@")) {
            setEmailError("Debes ingresar un email válido");
            return;
        }

        if (password.trim().length < 8) {
            setPasswordError("La contraseña debe tener al menos 8 caracteres");
            return;
        }   


        if (!name || !lastName || !email || !password) {
            setMandatoryError("Todos los campos son obligatorios");
            return;
        }

        onAddUser({ name, lastName, email, password });
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setMandatoryError("");        
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ingrese su nombre"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                { nameError && <div className="alert alert-danger">{ nameError }</div> }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Ingrese su apellido"
                    value={ lastName }
                    onChange={ (e) => setLastName(e.target.value) }
                />
                { lastNameError && <div className="alert alert-danger">{ lastNameError }</div> }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Ingrese su email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                { emailError && <div className="alert alert-danger">{ emailError }</div> }
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                { passwordError && <div className="alert alert-danger">{ passwordError }</div> }
            </div>

            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
            { mandatoryError && <div className="alert alert-danger">{ mandatoryError }</div> }
        </form>
    );
};