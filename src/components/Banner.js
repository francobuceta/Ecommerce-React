import BtnStore from "./BtnStore";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Banner = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    return(
        <section className="banner_bg d-flex align-items-center">
            <div className="container" data-aos="fade-up">
                <div className="banner_text">
                    <p>La tienda online NBA #1 en Argentina</p>
                    <h1>PICK<br />& <br />ROLL</h1>
                    <p>Encuentra aquí las camisetas y buzos <br />de tus jugadores preferidos</p>
                </div>
                <BtnStore />
            </div>
        </section>
    )
}

export default Banner;