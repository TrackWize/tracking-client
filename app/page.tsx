"use client";

import { Button, Highlight, IconWithDescription } from "@/components";
import { useDictionary, useSwapper } from "@/hooks";
import module from "./page.module.scss";
import Image from "next/image";
import {
  faTruck,
  faBellRing,
  faChartUser,
} from "@fortawesome/pro-solid-svg-icons";
import { faAddressCard, faPalette } from "@fortawesome/pro-regular-svg-icons";
import Link from "next/link";

const SwapperContent = [
  <div className={module.content__item} key="1">
    <h4>
      Para <Highlight>cliente</Highlight>
    </h4>
    <div className={module.section}>
      <IconWithDescription icon={faTruck}>
        Comprou? <Highlight>Acompanhou</Highlight>
      </IconWithDescription>
      <IconWithDescription icon={faBellRing}>
        Algo mudou? <Highlight>Seja notificado</Highlight>
      </IconWithDescription>
      <IconWithDescription icon={faAddressCard}>
        Saiba tudo sobre a <Highlight>loja</Highlight> e a{" "}
        <Highlight>transportadora</Highlight>
      </IconWithDescription>
    </div>
    <Link href={"/tracking"} className="self-end w-fit">
      <Button>Saiba mais</Button>
    </Link>
  </div>,
  <div className={module.content__item} key="2">
    <h4>
      Para <Highlight>loja</Highlight>
    </h4>
    <div className={module.section}>
      <IconWithDescription icon={faPalette}>
        Deseja mudar a interface padrão? <Highlight>Customize</Highlight>
      </IconWithDescription>
      <IconWithDescription icon={faChartUser}>
        Gerencie os seus envios com <Highlight>facilidade</Highlight>
      </IconWithDescription>
    </div>
    <Button className="self-end w-fit">Saiba mais</Button>
  </div>,
];

export default function Page() {
  const dictionary = useDictionary("Home");

  const [Component, action, currentIndex] = useSwapper(SwapperContent);

  return (
    <div className={module.container}>
      <div className={module.header}>
        <div className={module.header__title}>
          <h4>
            Rastreio Fácil com <Highlight>TrackWize</Highlight>
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
          <Button
            theme={currentIndex === 0 ? "filled" : "alternative"}
            onClick={() => {
              action(false);
            }}
          >
            Sou cliente
          </Button>
          <Button
            theme={currentIndex === 1 ? "filled" : "alternative"}
            onClick={() => {
              action(true);
            }}
          >
            Sou loja
          </Button>
        </div>
      </div>
      <div className={module.content}>{Component}</div>
    </div>
  );
}
