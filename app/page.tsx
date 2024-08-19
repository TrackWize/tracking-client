"use client";

import { Button, Highlight } from "@/components";
import { useDictionary } from "@/hooks";
import module from "./page.module.scss";
import Image from "next/image";

export default function Page() {
  const dictionary = useDictionary("Home");

  return (
    <div className={module.container}>
      <div className={module.header}>
        <div className={module.header__title}>
          <h4>
            Crie seu rastreio com <Highlight>Tracking.com</Highlight>
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
          width={575}
          height={471}
          quality={75}
          className={module.container__header__image}
        />
        <div className={module.header__button}>
          <Button>Sou cliente</Button>
          <Button theme="alternative">Sou loja</Button>
        </div>
      </div>
    </div>
  );
}
