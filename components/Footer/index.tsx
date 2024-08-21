import { FLogo } from "../Svg"
import module from "./index.module.scss"

export function Footer(){
    return(
        <footer className={module.footer} >
            <div className={module.content}  >
                <div className={module.contact}>
                    <h4>Contate-nos</h4>
                    <p>xxxx@gmail.com</p>
                    <p>(xx) xxxxx-xxxx</p>
                </div>
                <div className={module.font}>
                    <h4>Siga-nos</h4>
                    <p>[icon] @TrackWize</p>
                    <p>[icon] @TrackWize</p>
                </div>
                <div className={module.font}>
                    <ul>
                        <li><a href="">Termos de Serviço</a></li>
                        <li><a href="">Trabalhe Conosco</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className={module.logoFooter}>
                
                <FLogo/> 
                <p>ackwize</p>
            </div>
        </footer>
    )
}