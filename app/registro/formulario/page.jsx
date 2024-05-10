import "../../css/formulario.css"

export default function Registro() {
    return (
        <div class="container">
            <h1>Registro al Taller</h1>
            <form>
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                    <label for="nombre">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required />
                </div>
                <div>
                    <label for="expediente">Número de Expediente:</label>
                    <input type="text" id="expediente" name="expediente" required />
                </div>
                <div>
                    <label for="carrera">Carrera:</label>
                    <select id="carrera" name="carrera" required>
                        <option value="">Selecciona tu carrera</option>
                        <option value="Tsu TI">TSU en Tecnologías de la Información, Área Desarrollo de Software Multiplataforma</option>
                        <option value="Tsu Meca">TSU en Mecatrónica Área Automatización</option>
                        <option value="TSU Cons">TSU en Construcción</option>
                        <option value="TSU ind">TSU en Mantenimiento Área Industrial</option>
                        <option value="ING TI">ING en Desarrollo de Software Multiplataforma</option>
                        <option value="ING Meca">ING en Mecatrónica</option>
                        <option value="ING Cons">ING Civil</option>
                        <option value="ING ind">ING en Mantenimiento Industrial</option>
                    </select>
                </div>
                <div>
                    <label for="cuatrimestre">Cuatrimestre:</label>
                    <select id="cuatrimestre" name="cuatrimestre" required>
                        <option value="">Selecciona tu cuatrimestre</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <input type="file" id="imagen" name="imagen" accept="image/*" />
                    <label for="imagen">Cargar Imagen:</label>
                </div>

                <div>
                    <input type="checkbox" id="terminos" name="terminos" required />
                    <label for="terminos">Acepto los términos y condiciones</label>
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}
