import "./css/inicio.css"

export default function HomePage() {
    return (
        <>
            <div className="contenedor-blanco">
                <div className="contenedor-img">
                    <img src="/imagenes/inteligenciaArtificial.jpg" alt="Inteligencia Artificial"></img>
                </div>
                <div>
                    <br></br>
                    <p>El taller de inteligencia artificial representa una inmersión profunda en uno de los
                        campos más apasionantes y transformadores de la tecnología contemporánea. Diseñado
                        para proporcionar a los participantes una comprensión sólida de los fundamentos teóricos
                        y las aplicaciones prácticas de la IA, este taller se convierte en un espacio de
                        descubrimiento y crecimiento profesional.</p>
                    <br></br>
                    
                    <p>Al finalizar el taller, los participantes no solo habrán desarrollado competencias técnicas
                        sólidas en el campo de la inteligencia artificial, sino que también estarán mejor
                        preparados para enfrentar los desafíos y aprovechar las oportunidades que ofrece este
                        emocionante campo en constante evolución.</p>
                    <br></br>

                    <h4>Misión</h4>
                    <p>El taller se estructura para fomentar el pensamiento crítico, la resolución de problemas y
                        la colaboración entre los participantes. Se promueve un ambiente de aprendizaje interactivo
                        donde las ideas pueden ser compartidas, debatidas y refinadas, permitiendo así que cada
                        individuo maximice su potencial y adquiera habilidades relevantes para el mundo laboral
                        actual.</p>
                    <br></br>
                    
                </div>
            </div>
            
            <footer>
            <div className="contenedor-mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8518.983113962704!2d-100.01360384677483!3d20.36759990579274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16daa5dc56c8c592!2sUniversidad%20Tecnol%C3%B3gica%20de%20San%20Juan%20del%20R%C3%ADo!5e0!3m2!1ses!2smx!4v1657510541631!5m2!1ses!2smx"
                    style={{ border: 0, width: '600px', height: '450px', borderRadius: '20px' }} // Aquí está el objeto de estilo
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación"
                ></iframe>
            </div>
            <div className="direccion">
                <p>Av. La Palma No. 125, Col. Vista Hermosa | San Juan del Río, Qro. | Tel. (427) 129 20 00 | C.P. 76800</p>
            </div>
            <div  className="aviso-privacidad">
                <a href="/docs/avisoprivacidad.pdf" target="_blank">Aviso de privacidad</a>
            </div>
            </footer>
        </>
    );
}
