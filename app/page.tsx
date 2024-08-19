"use client";

import { Button, Highlight } from "@/components";
import { useDictionary } from "@/hooks";
import module from "./page.module.scss";
import Image from "next/image";
import {
  faTruck,
  faBellRing,
  faLightbulbExclamation,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  const dictionary = useDictionary("Home");

  return (
    <div className={module.container}>
      <div className={module.header}>
        <div className={module.header__title}>
          <h4>
            Rastreio Fácil com <Highlight>Tracking.com</Highlight>
          </h4>
          <p className={module.header__text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            voluptate deserunt, iusto repudiandae impedit non? Neque, nulla
            atque veritatis labore quod magnam officia ipsa suscipit minima
            fugit at, necessitatibus delectus?
          </p>
        </div>
        <Image
          src={"/public/home.png"}
          alt="Teste"
          width={488}
          height={400}
          quality={75}
        />
        <div className={module.header__button}>
          <Button>Sou cliente</Button>
          <Button theme="alternative">Sou loja</Button>
        </div>
      </div>
      <div className={module.content}>
        <div className={module.content__item}>
          <h4>
            Para <Highlight>cliente</Highlight>
          </h4>
          <div className={module.section}>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faTruck} />
              <h5>
                Comprou? <Highlight>Acompanhou</Highlight>
              </h5>
            </div>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faBellRing} />
              <h5>
                Algo mudou? <Highlight>Seja notificado</Highlight>
              </h5>
            </div>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faLightbulbExclamation} />
              <h5>
                Saiba tudo sobre a <Highlight>Acompanhou</Highlight> e a{" "}
                <Highlight>transportadora</Highlight>
              </h5>
            </div>
          </div>
          <Button className="self-end w-fit">Saiba mais</Button>
        </div>
        <div className={module.content__item}>
          <h4>
            Para <Highlight>loja</Highlight>
          </h4>
          <div className={module.section}>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faTruck} />
              <h5>
                Comprou? <Highlight>Acompanhou</Highlight>
              </h5>
            </div>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faTruck} />
              <h5>
                Comprou? <Highlight>Acompanhou</Highlight>
              </h5>
            </div>
            <div className={module.section__item}>
              <FontAwesomeIcon icon={faTruck} />
              <h5>
                Comprou? <Highlight>Acompanhou</Highlight>
              </h5>
            </div>
          </div>
          <Button className="self-end w-fit">Saiba mais</Button>
        </div>
      </div>
    </div>
  );
}
