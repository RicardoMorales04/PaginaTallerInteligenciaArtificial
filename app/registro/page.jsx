import "../css/registro.css"

export default function Registro(){
    return(
        <div class="container">
            <h1>Registro de Talleres</h1>
            <table>
                <thead>
                    <tr>
                        <th>Profesor</th>
                        <th>Taller</th>
                        <th>Horario</th>
                        <th>Formulario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Profesor 1</td>
                        <td>Taller de HTML</td>
                        <td>Lunes 9:00 - 11:00</td>
                        <td><a href="link_al_formulario">Registrarse</a></td>
                    </tr>
                    <tr>
                        <td>Profesor 2</td>
                        <td>Taller de CSS</td>
                        <td>Miércoles 14:00 - 16:00</td>
                        <td><a href="link_al_formulario">Registrarse</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

