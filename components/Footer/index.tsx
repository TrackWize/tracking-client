import Link from "next/link"
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
                        <li><Link href="/">Termos de Serviço</Link></li>
                        <li><Link href="/">Trabalhe Conosco</Link></li>
                        <li><Link href="/">Sobre nós</Link></li>
                        <li><Link href="/">FAQ</Link></li>
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