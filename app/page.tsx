import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/public/logo.png";
import taza from "@/public/taza.png";
import humo1 from "@/public/humo1.png";
import humo2 from "@/public/humo2.png";
import hoja1 from "@/public/hoja1.png";
import hoja2 from "@/public/hoja2.png";
import hoja3 from "@/public/hoja3.png";
import rama from "@/public/rama.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hojas}>
          <Image src={hoja1} alt="imagen de una hoja" />
        </div>
        <div className={styles.hojas}>
          <Image src={hoja3} alt="imagen de una hoja" />
        </div>
        <div className={styles.cont_logo}>
          <Image src={logo} alt="logo de la marca" />
        </div>

        <div className={styles.cont_main}>
          <div className={styles.imagen}>
            <Image src={humo1} alt="imagen de humo1" className={styles.humo} />
            <Image
              src={humo2}
              alt="imagen de humo2"
              className={styles.humo}
              loading="eager"
            />
            <div className={styles.cont_imagen}>
              <Image
                src={taza}
                alt="imagen de taza"
                className={styles.foto_taza}
                loading="eager"
              />
            </div>

            <div className={styles.rama}>
              <Image
                src={rama}
                alt="imagen de rama"
                className={styles.foto_rama}
                loading="eager"
              />
            </div>
          </div>
          <div className={styles.textos}>
            <h1>Infusiones Andinas</h1>
            <p>
              Descubre el sabor puro y natural de nuestra infusión andina de
              Panisara, una mezcla reconfortante elaborada con ingredientes de
              la región.
            </p>
          </div>
        </div>
        <div>mapa</div>
      </main>
    </div>
  );
}
