import React from "react"

export const Card = ({ users }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Usuarios</h3>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user, index) => (
                            <tr key={ index }>
                                <td>{ user.name }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.email }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};