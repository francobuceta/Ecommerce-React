import BtnStore from "./BtnStore";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const UsSection = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 2000,
        });
    }, []);

    return (
        <>
            <section className="us_section_bg d-flex align-items-center">
                <div className="container d-flex justify-content-between">
                    <div className="us_texto" data-aos="fade-right">
                        <span className="us_font">Elegí tu outfit <br />preferido</span>
                    </div>
                    <div className="us_texto2" data-aos="fade-left">
                        <span className="us_font">Y salí a la cancha <br />a volcarla</span>
                    </div>
                </div>
            </section>
            
            <section className="us_section">
                <div className="container d-flex align-items-center">
                    <div className="us_image" data-aos="fade-right">
                        <img src="https://res.cloudinary.com/dzm5lgpyv/image/upload/v1669412591/ecommerce/us_m7kgjb.jpg"></img>
                    </div>
                    <div className="us_container" data-aos="fade-left">
                        <h2>Quienes Somos</h2>
                        <p>Nos encanta este deporte al igual que a vos, y por eso queremos ofrecerte los mejores
                        productos. Somos una empresa que nace en Capital Federal, a causa de nuestro fanatismo y la dificultad para
                        poder encontrar indumentaria NBA de calidad.</p> 
                        <p>Hemos llegado a conformar una clientela enorme que hace que "Pick & Roll" siga creciendo.
                        Nos especilizamos en traer <b>la mejor calidad de productos NBA</b>, y por brindar a nuestros
                        clientes una <b>atención personalizada</b>.</p>
                        <p>Todos nuestros productos son originales, hacemos envíos a todo el país, y 
                        ofrecemos una <b>garantía total asegurada de 3 meses.</b></p>
                        <h3>¡BIENVENIDO/A A LA FAMILIA!</h3>
                        <BtnStore />
                    </div>
                </div>
                
            </section>
        </>
        
    )
}

export default UsSection;